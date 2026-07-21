#!/usr/bin/env python3
"""Validate the repository's static HTML without network access."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent


class DocumentParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.elements: list[tuple[str, dict[str, str | None], tuple[int, int]]] = []

    def handle_starttag(self, tag, attrs):
        self.elements.append((tag, dict(attrs), self.getpos()))


def local_target(page: Path, value: str) -> Path | None:
    parsed = urlsplit(value)
    if parsed.scheme or value.startswith(("#", "//", "mailto:", "tel:", "data:")):
        return None
    path = unquote(parsed.path)
    if not path or path.startswith("/cdn-cgi/"):
        return None
    return ROOT / path.lstrip("/") if path.startswith("/") else page.parent / path


def main() -> int:
    errors: list[str] = []
    for page in sorted(ROOT.glob("*.html")):
        parser = DocumentParser()
        parser.feed(page.read_text(encoding="utf-8-sig"))
        ids = [attrs["id"] for _, attrs, _ in parser.elements if attrs.get("id")]
        for duplicate, count in Counter(ids).items():
            if count > 1:
                errors.append(f"{page.name}: duplicate id #{duplicate}")

        h1_count = sum(tag == "h1" for tag, _, _ in parser.elements)
        if h1_count != 1:
            errors.append(f"{page.name}: expected one h1, found {h1_count}")

        if page.name not in {"404.html"} and not any(
            tag == "link" and attrs.get("rel") == "canonical"
            for tag, attrs, _ in parser.elements
        ):
            errors.append(f"{page.name}: missing canonical link")

        for tag, attrs, (line, _) in parser.elements:
            if tag == "img" and "alt" not in attrs:
                errors.append(f"{page.name}:{line}: image missing alt")
            if tag == "a" and attrs.get("target") == "_blank":
                rel = set((attrs.get("rel") or "").split())
                if "noopener" not in rel:
                    errors.append(f"{page.name}:{line}: _blank link missing noopener")
            attribute = "href" if tag in {"a", "link"} else "src" if tag in {"img", "script", "iframe"} else None
            if attribute and attrs.get(attribute):
                target = local_target(page, attrs[attribute] or "")
                if target and not target.exists():
                    errors.append(f"{page.name}:{line}: missing local target {attrs[attribute]}")

    if errors:
        print("\n".join(errors))
        return 1
    print("Static site validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
