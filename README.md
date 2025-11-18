# CLAUDE.md - AI Assistant Guide for luboblu.github.io

## Project Overview

This is a **personal portfolio website** hosted on GitHub Pages for Hsin-Ting Lu (BobLu), a graduate student at National Taipei University (NTPU) specializing in AI, FinTech, and Smart City applications. The website showcases academic projects, research work, certifications, and professional experience.

**Live URL**: https://luboblu.github.io
**Owner**: Hsin-Ting Lu (盧信廷)
**Primary Language**: Traditional Chinese (zh-TW) with English i18n support
**Last Updated**: November 2025

---

## Repository Structure

```
luboblu.github.io/
├── index.html              # Main landing page (resume/portfolio)
├── README.md               # Repository readme
├── CLAUDE.md              # This file - AI assistant guide
│
├── Project Pages (HTML)
│   ├── ESG.html           # ESG-related project
│   ├── III_TechDay.html   # III Tech Day presentation
│   ├── IMP_Conference.html # IMP Conference presentation
│   ├── NSTC_Project.html  # National Science and Technology Council project
│   ├── Smart_City.html    # Smart City project
│   ├── cancer.html        # Cancer information chatbot project
│   ├── marketing.html     # Marketing-related project
│   └── quality.html       # Quality management project
│
└── assets/
    ├── css/
    │   ├── styles.css           # Legacy styles
    │   └── styles-updated.css   # Primary stylesheet (USE THIS)
    │
    ├── js/
    │   ├── main.js             # Primary JavaScript (certifications, navigation, pagination)
    │   ├── template.js         # Template utilities
    │   └── html5shiv.js        # IE compatibility shim
    │
    ├── images/              # All image assets (photos, certificates, logos)
    ├── files/               # Downloadable files (PDFs, presentations)
    └── less/                # LESS source files (for advanced styling)
        ├── styles.less
        ├── navbar.less
        ├── mixins.less
        └── 3rd-party/
```

---

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS variables and flexbox/grid
- **JavaScript (ES6+)**: Interactive features and dynamic content
- **Bootstrap 5.3.0**: Responsive grid system and components
- **i18next 21.6.16**: Internationalization framework (zh-TW ↔ en)

### External Dependencies (CDN)
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts**: "Alice" and "Open Sans" font families
- **jQuery 3.7.1**: Used with i18next integration

### Build Tools
- **LESS**: CSS preprocessor (source files in `assets/less/`)
- **Git**: Version control

---

## File Naming Conventions

### HTML Files
- **Main page**: `index.html`
- **Project pages**: Use descriptive names with underscores
  - Pattern: `{ProjectName}.html` (e.g., `ESG.html`, `Smart_City.html`)
  - Case: Mixed case with underscores for multi-word names

### Asset Files
- **Images**: Descriptive lowercase with underscores
  - Pattern: `{description}.{ext}` (e.g., `bob_photo.png`, `氛享海報.png`)
  - Formats: PNG (preferred for graphics), JPG (for photos)

- **CSS**: Lowercase with hyphens
  - Primary: `styles-updated.css` (ALWAYS use this)
  - Legacy: `styles.css` (deprecated, DO NOT modify)

- **JavaScript**: Lowercase with dots/underscores
  - Pattern: `{name}.js` (e.g., `main.js`, `template.js`)

### Presentation Files
- Located in `assets/files/`
- Pattern: `{date}_{event}_{title}.{ext}`
- Formats: PPTX, PDF, DOCX

---

## Key Code Patterns & Conventions

### 1. HTML Structure Pattern

Each project page follows this structure:

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="..." />
  <title data-i18n="title">...</title>

  <!-- Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <!-- i18next -->
  <script src="https://unpkg.com/i18next@21.6.16/dist/umd/i18next.min.js"></script>
  <script src="https://unpkg.com/jquery@3.7.1/dist/jquery.min.js"></script>
  <script src="https://unpkg.com/jquery-i18next/dist/umd/jquery-i18next.min.js"></script>

  <style>
    /* Inline styles specific to this page */
  </style>
</head>
<body>
  <!-- Content -->
</body>
</html>
```

### 2. CSS Variables (from styles-updated.css)

Always use these CSS custom properties:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  --dark-color: #1f2937;
  --light-color: #f8fafc;
  --navbar-height: 70px;
}
```

### 3. Internationalization Pattern

Use `data-i18n` attributes for translatable content:

```html
<!-- In HTML -->
<h1 data-i18n="section.title">Default Text</h1>
<p data-i18n="section.description">Default description</p>

<!-- In JavaScript (main.js) -->
i18next.init({
  lng: 'zh-TW', // or 'en'
  resources: {
    'zh-TW': { translation: { ... } },
    'en': { translation: { ... } }
  }
});
```

### 4. Responsive Image Pattern

```html
<img src="assets/images/{filename}.{ext}"
     alt="Descriptive alt text"
     class="img-fluid"
     loading="lazy" />
```

### 5. Link Button Pattern (from index.html)

```html
<div class="project-links">
  <a href="{url}" class="link-btn" target="_blank">
    <i class="fas fa-{icon}"></i>
    <span>{text}</span>
  </a>
</div>
```

---

## Common Development Tasks

### Adding a New Project Page

1. **Create HTML file**: `{ProjectName}.html` in root directory
2. **Copy structure** from existing project page (e.g., `cancer.html`)
3. **Update metadata**:
   - `<title>` tag
   - `<meta name="description">`
   - `<meta name="author">`
4. **Add project content** following the existing patterns
5. **Add images** to `assets/images/` with descriptive names
6. **Add downloadable files** to `assets/files/`
7. **Link from index.html** in the projects section

### Updating Certifications (main.js)

Certifications are defined in `assets/js/main.js`:

```javascript
const certifications = [
  {
    id: "cert1",
    modalId: "certModal1",
    image: "assets/images/{cert_image}.png",
    title: {
      key: "certs.{cert_key}_title",
      default: "Certificate Title",
    },
    date: {
      key: "certs.{cert_key}_date",
      default: "Issuance date: YYYY/MM/DD"
    },
    dateValue: "YYYY/MM/DD",
  },
  // ... more certifications
];
```

**Steps**:
1. Add certificate image to `assets/images/`
2. Add new object to `certifications` array in `main.js`
3. Add translation keys to i18next resources (if needed)
4. The page will automatically render the new certification

### Adding New Images

1. **Optimize images** before adding (compress, resize)
2. **Use descriptive names**: `{project}_{description}.png`
3. **Place in** `assets/images/`
4. **Preferred formats**:
   - PNG: Logos, screenshots, diagrams
   - JPG: Photos, complex images
5. **Add alt text** for accessibility

### Updating Styles

**IMPORTANT**: Only modify `assets/css/styles-updated.css`

```css
/* Add new styles at the end of the file */
/* Use existing CSS variables when possible */

.new-component {
  color: var(--primary-color);
  padding: 20px;
  border-radius: 8px;
}
```

**DO NOT**:
- Modify `styles.css` (legacy file)
- Add inline styles unless page-specific
- Override Bootstrap classes unnecessarily

### Adding Downloadable Resources

1. **Place files** in `assets/files/`
2. **Use descriptive names**: `{date}_{event}_{title}.{ext}`
3. **Supported formats**: PDF, PPTX, DOCX
4. **Link in HTML**:

```html
<a href="assets/files/{filename}.pdf"
   class="btn btn-primary"
   target="_blank"
   download>
  <i class="fas fa-download"></i> Download
</a>
```

---

## Styling Guidelines

### Layout Principles
- **Mobile-first**: Design for mobile, enhance for desktop
- **Responsive**: Use Bootstrap grid (`container`, `row`, `col-*`)
- **Accessibility**: Include ARIA labels, semantic HTML, alt text
- **Performance**: Lazy load images, minimize inline styles

### Color Palette
- **Primary Blue**: `#2563eb` - Links, primary CTAs
- **Success Green**: `#10b981` - Success states, highlights
- **Dark Gray**: `#1f2937` - Headings, dark text
- **Light Gray**: `#f8fafc` - Backgrounds, subtle elements

### Typography
- **Headings**: "Alice" or "Open Sans" 700
- **Body**: "Open Sans" 400
- **Base size**: 15px (0.9375rem)

### Spacing
- **Navbar height**: 70px (var(--navbar-height))
- **Section padding**: 60px top/bottom
- **Component margins**: 30px bottom (standard)

---

## JavaScript Functionality (main.js)

### Key Features Implemented

1. **Certification Pagination**
   - Variable: `currentPage`, `totalPages`
   - Functions: Page navigation for certificates
   - Items per page: Configurable

2. **Sorting**
   - Variable: `currentSortOrder` ('asc' | 'desc')
   - Sorts certifications by date

3. **Scroll Effects**
   - Scroll indicator/progress bar
   - Throttled scroll events
   - Smooth scrolling behavior

4. **Project Management**
   - Variable: `currentProjectPage`, `totalProjectPages`
   - Dynamic project loading

### Modifying JavaScript

**Pattern for adding new features**:

```javascript
// 1. Declare global variables at top
let myFeatureState = false;

// 2. Initialize in DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  initializeMyFeature();
});

// 3. Define functions
function initializeMyFeature() {
  // Implementation
}
```

---

## Internationalization (i18n)

### Supported Languages
- **zh-TW**: Traditional Chinese (primary)
- **en**: English (secondary)

### Adding Translations

1. **In HTML**: Add `data-i18n` attribute
   ```html
   <h2 data-i18n="projects.title">專案</h2>
   ```

2. **In JavaScript**: Add to resources object
   ```javascript
   resources: {
     'zh-TW': {
       translation: {
         projects: {
           title: '專案'
         }
       }
     },
     'en': {
       translation: {
         projects: {
           title: 'Projects'
         }
       }
     }
   }
   ```

3. **Initialize**: Use `jqueryI18next.init()`

---

## Git Workflow

### Branch Strategy
- **Main branch**: Production code (auto-deploys to GitHub Pages)
- **Feature branches**: `claude/{description}-{session-id}`
  - Pattern: `claude/claude-md-mi38z2w6clfzimwj-{hash}`
  - ALWAYS develop on feature branches
  - Push with: `git push -u origin {branch-name}`

### Commit Message Conventions
- **feat**: New feature (e.g., "feat: add new project page for AI Cup")
- **fix**: Bug fix (e.g., "fix: correct navigation link in index.html")
- **style**: Styling changes (e.g., "style: update primary color scheme")
- **docs**: Documentation (e.g., "docs: update CLAUDE.md with new conventions")
- **refactor**: Code refactoring (e.g., "refactor: consolidate CSS variables")
- **chore**: Maintenance (e.g., "chore: optimize images in assets folder")

### Deployment
- **Auto-deploy**: Pushing to main branch triggers GitHub Pages rebuild
- **Verification**: Check https://luboblu.github.io after ~2 minutes

---

## Accessibility Guidelines

### MUST Include
- ✅ Alt text for all images
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Skip to main content link: `<a href="#main" class="visually-hidden-focusable">跳至主要內容</a>`

### Color Contrast
- Maintain WCAG AA compliance (4.5:1 for normal text)
- Test with browser DevTools accessibility features

### Responsive Design
- Test on: Mobile (375px), Tablet (768px), Desktop (1200px+)
- Use Bootstrap responsive utilities (`d-none`, `d-md-block`, etc.)

---

## Performance Optimization

### Best Practices
1. **Images**:
   - Compress before upload (use tools like TinyPNG)
   - Use `loading="lazy"` attribute
   - Serve WebP when possible (with fallbacks)

2. **CSS**:
   - Minimize inline styles
   - Use external stylesheet (`styles-updated.css`)
   - Leverage CSS variables for consistency

3. **JavaScript**:
   - Load scripts at end of `<body>` or use `defer`
   - Throttle/debounce scroll events
   - Minimize DOM manipulations

4. **CDN Resources**:
   - Use specific versions (not `@latest`)
   - Consider SRI hashes for security

---

## Common Issues & Solutions

### Issue: Styles Not Applying
**Solution**: Ensure using `styles-updated.css`, not `styles.css`
```html
<link rel="stylesheet" href="assets/css/styles-updated.css" />
```

### Issue: i18n Not Working
**Solution**: Check initialization order
1. Load i18next library
2. Load jQuery
3. Load jquery-i18next
4. Initialize in DOMContentLoaded

### Issue: Images Not Loading
**Solution**: Verify path and case sensitivity
- Paths are case-sensitive in production
- Use relative paths: `assets/images/{filename}.ext`
- Check file exists in repository

### Issue: Mobile Layout Broken
**Solution**: Check viewport meta tag and Bootstrap classes
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Issue: Git Push Fails (403)
**Solution**: Verify branch name starts with `claude/` and ends with session ID
```bash
git push -u origin claude/feature-description-{session-id}
```

---

## Testing Checklist

Before committing changes:

- [ ] Test on mobile viewport (375px)
- [ ] Test on tablet viewport (768px)
- [ ] Test on desktop viewport (1200px+)
- [ ] Verify all links work
- [ ] Check all images load
- [ ] Test language switching (zh-TW ↔ en)
- [ ] Validate HTML (W3C validator)
- [ ] Check console for JavaScript errors
- [ ] Test keyboard navigation
- [ ] Verify accessibility (screen reader compatible)
- [ ] Compress any new images added
- [ ] Update this file if adding new patterns

---

## Project-Specific Notes

### Active Projects (as of Nov 2025)
1. **AI Cup**: Competition-related work
2. **ESG Project**: Environmental, Social, Governance focus
3. **Smart City**: RAG-enhanced multilingual dialogue system
4. **NSTC Project**: National Science and Technology Council research
5. **Cancer Chatbot**: FJU undergraduate project
6. **IMP Conference**: Academic conference presentation
7. **III TechDay**: Technical presentation at III

### Owner Information
- **Name**: Hsin-Ting Lu (盧信廷)
- **Affiliation**: NTPU IFIT Lab (Graduate Student)
- **Research Areas**: AI, FinTech, Smart City, LLMs, RAG systems
- **Contact**: Available via website links

---

## Resources & Documentation

### External Documentation
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [i18next Documentation](https://www.i18next.com/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

### Internal Files to Reference
- **Main stylesheet**: `assets/css/styles-updated.css`
- **Main script**: `assets/js/main.js`
- **Example project page**: `cancer.html` or `NSTC_Project.html`
- **Main landing page**: `index.html`

---

## AI Assistant Guidelines

When working on this repository:

1. **ALWAYS** read existing files before modifying
2. **PREFER** editing existing files over creating new ones
3. **USE** `styles-updated.css` for styling (NOT `styles.css`)
4. **FOLLOW** existing naming conventions
5. **MAINTAIN** bilingual support (zh-TW + en)
6. **TEST** responsive layouts at multiple breakpoints
7. **OPTIMIZE** images before adding to repository
8. **COMMIT** with descriptive, conventional commit messages
9. **PUSH** to the correct feature branch (starts with `claude/`)
10. **UPDATE** this CLAUDE.md if introducing new patterns

### When Adding Features
- Study similar existing features first
- Match the existing code style and structure
- Add i18n support from the start
- Test thoroughly before committing
- Document any new conventions in this file

### When Fixing Bugs
- Identify the root cause before fixing
- Check if the issue affects multiple pages
- Test the fix on all affected pages
- Consider accessibility implications

---

## Version History

- **v1.0** (2025-11-17): Initial CLAUDE.md creation
  - Comprehensive repository analysis
  - Documented structure, conventions, and workflows
  - Added development guidelines and best practices

---

**Last Updated**: 2025-11-17
**Maintained By**: AI Assistant (Claude) + Repository Owner
**Questions?** Refer to existing code examples or update this document with new findings.
