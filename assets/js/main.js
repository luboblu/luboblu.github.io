// 全域變數
let currentPage = 1;
let totalPages = 3;
let currentSortOrder = "desc"; // 新增：記錄當前排序狀態

// 專案分頁變數
let currentProjectPage = 1;
let totalProjectPages = 1;

// 證照資料
const certifications = [
  {
    id: "cert1",
    modalId: "certModal1",
    image: "assets/images/AI900.png",
    title: {
      key: "certs.ai900_title",
      default: "AI-900: Microsoft Azure AI Fundamentals",
    },
    date: { key: "certs.ai900_date", default: "Issuance date: 2023/06/07" },
    dateValue: "2023/06/07",
  },
  {
    id: "cert2",
    modalId: "certModal2",
    image: "assets/images/AWS.png",
    title: {
      key: "certs.aws_title",
      default: "AWS Cloud Data Analysis and Web Crawler Workshop",
    },
    date: { key: "certs.aws_date", default: "Issuance date: 2023/09/22" },
    dateValue: "2023/09/22",
  },
  {
    id: "cert3",
    modalId: "certModal3",
    image: "assets/images/finance.jpg",
    title: {
      key: "certs.fin_title",
      default: "17th FinTech Competency Certificate",
    },
    date: { key: "certs.fin_date", default: "Issuance date: 2024/04/20" },
    dateValue: "2024/04/20",
  },
  {
    id: "cert4",
    modalId: "certModal4",
    image: "assets/images/TOEIC.jpg",
    title: { key: "certs.toeic_title", default: "TOEIC 815" },
    date: { key: "certs.toeic_date", default: "Issuance date: 2024/04/28" },
    dateValue: "2024/04/28",
  },
  {
    id: "cert5",
    modalId: "certModal5",
    image:
      "assets/images/nvidia_certification_build_rag_agent_selflearning_page-0001.jpg",
    title: {
      key: "certs.nvidia_self_title",
      default: "NVIDIA_Build_With_RAG_Agent_Selflearning",
    },
    date: {
      key: "certs.nvidia_self_date",
      default: "Issuance date: 2025/03/18",
    },
    dateValue: "2025/03/18",
  },
  {
    id: "cert6",
    modalId: "certModal6",
    image:
      "assets/images/nvidia_certification_build_rag_agent_workshop_page-0001.jpg",
    title: {
      key: "certs.nvidia_ws_title",
      default: "NVIDIA_Build_With_RAG_Agent_Workshop",
    },
    date: { key: "certs.nvidia_ws_date", default: "Issuance date: 2025/03/18" },
    dateValue: "2025/03/18",
  },
  {
    id: "cert7",
    modalId: "certModal7",
    image:
      "assets/images/Hsin-Ting_Lu_Generative_AI_With_Diffusion_Model_Certification_page-0001.jpg",
    title: {
      key: "",
      default: "Generative_AI_With_<br />Diffusion_Model_Certification",
    },
    date: {
      key: "certs.nvidia_GenAI_date",
      default: "Issuance date: 2025/04/29",
    },
    dateValue: "2025/04/29",
  },
  {
    id: "cert8",
    modalId: "certModal8",
    image: "assets/images/GA4.png",
    title: { key: "", default: "Google Analytics Certification" },
    date: { key: "certs.GA4_date", default: "Issuance date: 2025/04/29" },
    dateValue: "2025/04/29",
  },
  {
    id: "cert9",
    modalId: "certModal9",
    image:
      "assets/images/GoogleCybersecurityProfessionalCertificateV2_Badge.jpg",
    title: {
      key: "",
      default: "Google_Cybersecurity_<br />Professional_CertificateV2",
    },
    date: {
      key: "certs.cybersecurity_date",
      default: "Issuance date: 2025/05/15",
    },
    dateValue: "2025/05/15",
  },
  {
    id: "cert10",
    modalId: "certModal10",
    image:
      "assets/images/Rapid Application Development with Large Language Models (LLMs).jpg",
    title: {
      key: "",
      default:
        "Rapid Application Development with Large Language Models (LLMs)",
    },
    date: { key: "certs.rapidLLM_date", default: "Issuance date: 2025/06/10" },
    dateValue: "2025/06/10",
  },
  {
    id: "cert11",
    modalId: "certModal11",
    image: "assets/images/AI_Powered_Performance_Ads_Certification.jpg",
    title: {
      key: "",
      default: "AI-Powered Performance Ads Certification",
    },
    date: {
      key: "certs.ai_performance_date",
      default: "Issuance date: 2025/06/12",
    },
    dateValue: "2025/06/12",
  },
  {
    id: "cert12",
    modalId: "certModal12",
    image: "assets/images/AI_Powered_Shopping_Ads_Certification.jpg",
    title: {
      key: "",
      default: "AI-Powered Shopping ads Certification",
    },
    date: {
      key: "certs.ai_shopping_date",
      default: "Issuance date: 2025/06/11",
    },
    dateValue: "2025/06/11",
  },
  {
    id: "cert13",
    modalId: "certModal13",
    image: "assets/images/Google_Ads_Apps_Certification.jpg",
    title: {
      key: "",
      default: "Google Ads Apps Certification",
    },
    date: {
      key: "certs.google_ads_apps_date",
      default: "Issuance date: 2025/06/11",
    },
    dateValue: "2025/06/11",
  },
];

// i18next 資源
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        education: "Educational Background",
        seminar: "Seminar Presentation",
        certifications: "Certifications",
        projects: "Projects",
        school: "School",
      },
      header: {
        title: "Hsin-Ting Lu",
        tagline:
          "Institute of Information Management, National Taipei University<br><a href='mailto:hsintinglubob@gmail.com'>hsintinglubob@gmail.com</a>",
      },
      main: {
        intro:
          "I am currently studying at the Graduate Institute of Information Management, Taipei University, and working as a research assistant at the Intelligent Financial Innovation Technology Lab (IFIT Lab).",
      },
      section: {
        education: "Educational Background",
        seminar: "Seminar Presentation",
        certifications: "Certifications",
        projects: "Projects",
        school: "School",
      },
      sort: {
        label: "Sort by:",
        desc: "Newest to Oldest",
        asc: "Oldest to Newest",
      },
      footer: {
        contact: "Contact",
        follow: "Follow me",
        textwidget: "Text widget",
        formwidget: "Form widget",
      },
      certs: {
        ai900_title: "AI-900: Microsoft Azure AI Fundamentals",
        ai900_date: "Issuance date: 2023/06/07",
        aws_title: "AWS Cloud Data Analysis and Web Crawler Workshop",
        aws_date: "Issuance date: 2023/09/22",
        fin_title: "17th FinTech Competency Certificate",
        fin_date: "Issuance date: 2024/04/20",
        toeic_title: "TOEIC 815",
        toeic_date: "Issuance date: 2024/04/28",
        nvidia_self_title: "NVIDIA_Build_With_ RAG_Agent_Selflearning",
        nvidia_self_date: "Issuance date: 2025/03/18",
        nvidia_ws_title: "NVIDIA_Build_With_ RAG_Agent_Workshop",
        nvidia_ws_date: "Issuance date: 2025/03/18",
        nvidia_GenAI_date: "Issuance date: 2025/04/29",
        GA4_date: "Issuance date: 2025/04/29",
        cybersecurity_date: "Issuance date: 2025/05/15",
        rapidLLM_date: "Issuance date: 2025/06/10",
        ai_performance_date: "Issuance date: 2025/06/12",
        ai_shopping_date: "Issuance date: 2025/06/11",
        google_ads_apps_date: "Issuance date: 2025/06/11",
        total_count: "Total Certifications:",
      },
      projects: {
        total_count: "Total Projects:",
      },
      seminar: {
        title1: "International Quality Management Seminar",
        date1: "Issuance date: 2023/11/18",
        title2:
          "IMP2024 — The 29th Workshop on Information Management & Practice",
        date2: "Issuance date: 2024/11/21",
        title3:
          "The Journal of Quality has accepted the manuscript for publication",
        date3: "Accepted Date: 2024/08/31",
      },
      education: {
        fju_title: "Fu Jen Catholic University's 40th Outstanding Projects",
        fju_date: "Issuance date: 2023/05/27",
        innohack_title: "2023 Ruiyang Information Hackathon Competition",
        innohack_date: "Issuance date: 2023/09/13",
        ict_title: "28th Intercollegiate ICT Innovation Competition",
        ict_date: "Issuance date: 2023/11/04",
        iii_title: "III Technology Day",
        iii_date: "Participation date: 2024/11/07",
      },
      page: {
        current: "Page",
        of: "of",
        total: "",
        jump: "Go to",
        page: "",
        go: "GO",
      },
    },
  },
  zh: {
    translation: {
      nav: {
        home: "首頁Home",
        education: "學習經歷",
        seminar: "研討會發表",
        certifications: "證書",
        projects: "計畫",
        school: "就讀學校",
      },
      header: {
        title: "Hsin-Ting Lu",
        tagline:
          "國立臺北大學資訊管理研究所<br><a href='mailto:hsintinglubob@gmail.com'>hsintinglubob@gmail.com</a>",
      },
      main: {
        intro:
          "我目前就讀於臺北大學資訊管理研究所，並於智慧金融創新科技實驗室 (IFIT Lab) 擔任研究助理。",
      },
      section: {
        education: "學習經歷",
        seminar: "研討會發表",
        certifications: "證書",
        projects: "計畫",
        school: "就讀學校",
      },
      sort: {
        label: "排序方式:",
        desc: "新到舊",
        asc: "舊到新",
      },
      footer: {
        contact: "聯絡資訊",
        follow: "追蹤我",
        textwidget: "文字模組",
        formwidget: "表單模組",
      },
      certs: {
        ai900_title: "AI-900: 微軟 Azure AI 基礎證照",
        ai900_date: "發證日期: 2023/06/07",
        aws_title: "AWS雲端數據分析與爬蟲工作坊",
        aws_date: "發證日期: 2023/09/22",
        fin_title: "第17屆 金融科技力證照",
        fin_date: "發證日期: 2024/04/20",
        toeic_title: "多益815分",
        toeic_date: "發證日期: 2024/04/28",
        nvidia_self_title: "NVIDIA_Build_With_ RAG_Agent_Selflearning",
        nvidia_self_date: "發證日期: 2025/03/18",
        nvidia_ws_title: "NVIDIA_Build_With_ RAG_Agent_Workshop",
        nvidia_ws_date: "發證日期: 2025/03/18",
        nvidia_GenAI_date: "發證日期: 2025/04/29",
        GA4_date: "發證日期: 2025/04/29",
        cybersecurity_date: "發證日期: 2025/05/15",
        rapidLLM_date: "發證日期: 2025/06/10",
        ai_performance_date: "發證日期: 2025/06/12",
        ai_shopping_date: "發證日期: 2025/06/11",
        google_ads_apps_date: "發證日期: 2025/06/11",
        total_count: "證照總數：",
      },
      projects: {
        total_count: "專案總數：",
      },
      seminar: {
        title1: "國際品質管理研討會",
        date1: "發證日期: 2023/11/18",
        title2: "IMP2024第29屆資訊管理暨實務研討會",
        date2: "發證日期: 2024/11/21",
        title3: "品質學報接受稿件刊登",
        date3: "接受日期: 2024/08/31",
      },
      education: {
        fju_title: "輔仁大學第40屆優秀專題",
        fju_date: "發證日期: 2023/05/27",
        innohack_title: "2023叡揚資訊黑客松競賽",
        innohack_date: "發證日期: 2023/09/13",
        ict_title: "第28屆大專院校資訊應用服務創新競賽",
        ict_date: "發證日期: 2023/11/04",
        iii_title: "資策會科技日",
        iii_date: "參加日期: 2024/11/07",
      },
      page: {
        current: "第",
        of: "頁，共",
        total: "頁",
        jump: "跳至",
        page: "頁",
        go: "GO",
      },
    },
  },
};

// 排序功能
function sortCards(container, order) {
  const cards = container.find(".flex-col").get();

  cards.sort(function (a, b) {
    const dateA_str = $(a)
      .find(".cert-date")
      .text()
      .match(/(\d{4}[\/-]\d{2}[\/-]\d{2})/);
    const dateB_str = $(b)
      .find(".cert-date")
      .text()
      .match(/(\d{4}[\/-]\d{2}[\/-]\d{2})/);
    const dateA = dateA_str
      ? new Date(dateA_str[1].replace(/\//g, "-"))
      : new Date();
    const dateB = dateB_str
      ? new Date(dateB_str[1].replace(/\//g, "-"))
      : new Date();
    return order === "asc" ? dateA - dateB : dateB - dateA;
  });

  container.empty();
  $(cards).appendTo(container);
}

// 證照專用排序
function sortCertifications(order) {
  // 記錄當前排序狀態
  currentSortOrder = order;

  // 重新渲染證照（會根據currentSortOrder排序）
  renderCertifications();

  // 保持在當前頁面，不要重置到第一頁
  updatePagination();
}

// 更新證照總數顯示
function updateCertCount() {
  const totalCount = certifications.length;
  $("#totalCertCount").text(totalCount);
}

// 生成證照卡片HTML
function createCertCard(cert) {
  const titleAttr = cert.title.key ? `data-i18n="${cert.title.key}"` : "";
  const dateAttr = cert.date.key ? `data-i18n="${cert.date.key}"` : "";

  return `
        <div class="col-sm-6 col-md-4 flex-col">
            <div class="cert-card text-center">
                <button type="button" class="btn-card-link" data-bs-toggle="modal" 
                        data-bs-target="#${cert.modalId}" aria-label="查看證照詳情">
                    <img src="${cert.image}" class="cert-img" alt="證照" loading="lazy" />
                </button>
                <h4 class="cert-title" ${titleAttr}>${cert.title.default}</h4>
                <p class="cert-date" ${dateAttr}>${cert.date.default}</p>
            </div>
        </div>
    `;
}

// 生成證照Modal
function createCertModal(cert) {
  const titleAttr = cert.title.key ? `data-i18n="${cert.title.key}"` : "";
  const dateAttr = cert.date.key ? `data-i18n="${cert.date.key}"` : "";

  return `
        <div class="modal fade" id="${cert.modalId}" tabindex="-1" 
             aria-labelledby="${cert.modalId}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content text-center">
                    <div class="modal-header">
                        <h4 class="modal-title w-100" id="${cert.modalId}Label" ${titleAttr}>
                            ${cert.title.default}
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" 
                                aria-label="關閉"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${cert.image}" alt="證照大圖" 
                             style="max-width: 100%; height: auto" />
                        <p class="mt-3" ${dateAttr}>${cert.date.default}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 渲染證照
function renderCertifications() {
  // 根據當前排序狀態排序證照
  const sortedCerts = [...certifications].sort((a, b) => {
    const dateA = new Date(a.dateValue.replace(/\//g, "-"));
    const dateB = new Date(b.dateValue.replace(/\//g, "-"));
    return currentSortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // 清空現有內容 - 只清空證照區塊的內容
  $("#certifications .cert-page .row").empty();
  $("#certification-modals").empty();

  // 計算總頁數
  totalPages = Math.ceil(sortedCerts.length / 6);

  // 確保當前頁面有效
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  // 分配證照到頁面（每頁6個）
  sortedCerts.forEach((cert, index) => {
    const pageNum = Math.floor(index / 6) + 1;
    let targetPage = $(`#certifications .cert-page[data-page="${pageNum}"]`);

    // 如果頁面不存在，創建新頁面
    if (targetPage.length === 0) {
      const newPage = `<div class="cert-page" data-page="${pageNum}"><div class="row"></div></div>`;
      $("#certifications .cert-pagination-container").append(newPage);
      targetPage = $(`#certifications .cert-page[data-page="${pageNum}"]`);
    }

    targetPage.find(".row").append(createCertCard(cert));

    // 生成對應的Modal
    $("#certification-modals").append(createCertModal(cert));
  });

  // 更新分頁指示器
  updatePageIndicators();

  // 重新本地化
  $("body").localize();
}

// 更新分頁指示器
function updatePageIndicators() {
  // 清空現有指示器 - 只針對證照區塊
  $("#certifications .cert-page-indicators").empty();

  // 生成新的指示器
  for (let i = 1; i <= totalPages; i++) {
    const dotClass = i === currentPage ? "active" : "";
    const ariaSelected = i === currentPage ? "true" : "false";
    const dot = `<button class="page-dot ${dotClass}" data-page="${i}" 
                      role="tab" aria-label="第 ${i} 頁" 
                      aria-selected="${ariaSelected}"></button>`;
    $("#certifications .cert-page-indicators").append(dot);
  }

  // 重新綁定點擊事件 - 只針對證照區塊的頁碼點
  $("#certifications .page-dot").on("click", function () {
    const targetPage = parseInt($(this).data("page"));
    jumpToPage(targetPage);
  });
}

// 更新分頁顯示
function updatePagination() {
  // 隱藏所有頁面 - 只針對證照區塊
  $("#certifications .cert-page").removeClass("active").hide();

  // 顯示當前頁面
  $(`#certifications .cert-page[data-page="${currentPage}"]`)
    .addClass("active")
    .show();

  // 更新指示器 - 只針對證照區塊的指示器
  $("#certifications .page-dot")
    .removeClass("active")
    .attr("aria-selected", "false");
  $(`#certifications .page-dot[data-page="${currentPage}"]`)
    .addClass("active")
    .attr("aria-selected", "true");

  // 更新按鈕狀態
  $("#certPrevBtn").prop("disabled", currentPage === 1);
  $("#certNextBtn").prop("disabled", currentPage === totalPages);

  // 更新跳轉輸入框
  $("#pageJumpInput").val(currentPage);
  $("#pageJumpInput").attr("max", totalPages);

  // 更新頁面顯示
  $("#currentPageDisplay").text(currentPage);
  $("#totalPageDisplay").text(totalPages);

  // 調整容器高度
  const activePageHeight = $(
    `#certifications .cert-page[data-page="${currentPage}"]`
  ).outerHeight();
  $("#certifications .cert-pagination-container").css(
    "min-height",
    activePageHeight + "px"
  );
}

// 頁數跳轉功能
function jumpToPage(targetPage) {
  targetPage = parseInt(targetPage);

  if (targetPage < 1 || targetPage > totalPages || isNaN(targetPage)) {
    $("#pageJumpInput").addClass("error");
    setTimeout(function () {
      $("#pageJumpInput").removeClass("error");
      $("#pageJumpInput").val(currentPage);
    }, 1000);
    return false;
  }

  if (targetPage !== currentPage) {
    currentPage = targetPage;
    updatePagination();
    return true;
  }
  return false;
}

// 初始化專案分頁功能
function initProjectPagination() {
  const projectsPerPage = 6;
  const totalProjects = 4; // 目前有4個專案
  totalProjectPages = Math.ceil(totalProjects / projectsPerPage);

  // 更新總專案數顯示
  const projectCountElement = document.getElementById("totalProjectCount");
  if (projectCountElement) {
    projectCountElement.textContent = totalProjects;
  }

  // 顯示/隱藏分頁控制元件
  const projectPrevBtn = document.getElementById("projectPrevBtn");
  const projectNextBtn = document.getElementById("projectNextBtn");
  const projectPageIndicators = document.querySelector(
    "#recentworks .cert-page-indicators"
  );
  const projectPageJumpWrapper = document.querySelector(
    "#recentworks .page-jump-wrapper"
  );

  // 如果只有一頁，隱藏所有分頁控制
  if (totalProjectPages <= 1) {
    if (projectNextBtn) projectNextBtn.style.display = "none";
    if (projectPageJumpWrapper) projectPageJumpWrapper.style.display = "none";
    // 只顯示第一個頁碼點
    const pageDots = projectPageIndicators?.querySelectorAll(".page-dot");
    if (pageDots) {
      pageDots.forEach((dot, index) => {
        if (index > 0) dot.style.display = "none";
      });
    }
  }

  // 專案分頁切換函數
  function showProjectPage(page) {
    const projectPages = document.querySelectorAll("#recentworks .cert-page");

    projectPages.forEach((pageElement) => {
      const pageNum = parseInt(pageElement.dataset.page);
      if (pageNum === page) {
        pageElement.classList.add("active");
        pageElement.style.display = "block";
        pageElement.style.opacity = "1";
        pageElement.style.transform = "translateX(0)";
      } else {
        pageElement.classList.remove("active");
        pageElement.style.display = "none";
        pageElement.style.opacity = "0";
      }
    });

    // 更新頁碼指示器
    const pageDots = document.querySelectorAll("#recentworks .page-dot");
    pageDots.forEach((dot) => {
      const dotPage = parseInt(dot.dataset.page);
      if (dotPage === page) {
        dot.classList.add("active");
        dot.setAttribute("aria-selected", "true");
      } else {
        dot.classList.remove("active");
        dot.setAttribute("aria-selected", "false");
      }
    });

    // 更新按鈕狀態
    if (projectPrevBtn) {
      projectPrevBtn.disabled = page === 1;
    }
    if (projectNextBtn) {
      projectNextBtn.disabled = page === totalProjectPages;
    }

    // 更新頁碼顯示
    const currentPageDisplay = document.getElementById(
      "projectCurrentPageDisplay"
    );
    const totalPageDisplay = document.getElementById("projectTotalPageDisplay");
    const pageJumpInput = document.getElementById("projectPageJumpInput");

    if (currentPageDisplay) currentPageDisplay.textContent = page;
    if (totalPageDisplay) totalPageDisplay.textContent = totalProjectPages;
    if (pageJumpInput) {
      pageJumpInput.value = page;
      pageJumpInput.max = totalProjectPages;
    }

    currentProjectPage = page;
  }

  // 綁定事件
  if (projectPrevBtn) {
    projectPrevBtn.addEventListener("click", () => {
      if (currentProjectPage > 1) {
        showProjectPage(currentProjectPage - 1);
      }
    });
  }

  if (projectNextBtn) {
    projectNextBtn.addEventListener("click", () => {
      if (currentProjectPage < totalProjectPages) {
        showProjectPage(currentProjectPage + 1);
      }
    });
  }

  // 頁碼點擊事件
  const projectPageDots = document.querySelectorAll("#recentworks .page-dot");
  projectPageDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const page = parseInt(dot.dataset.page);
      showProjectPage(page);
    });
  });

  // 頁碼跳轉功能
  const projectPageJumpBtn = document.getElementById("projectPageJumpBtn");
  const projectPageJumpInput = document.getElementById("projectPageJumpInput");

  if (projectPageJumpBtn && projectPageJumpInput) {
    projectPageJumpBtn.addEventListener("click", () => {
      const targetPage = parseInt(projectPageJumpInput.value);
      if (targetPage >= 1 && targetPage <= totalProjectPages) {
        showProjectPage(targetPage);
        projectPageJumpInput.classList.remove("error");
      } else {
        projectPageJumpInput.classList.add("error");
        setTimeout(() => {
          projectPageJumpInput.classList.remove("error");
        }, 500);
      }
    });

    projectPageJumpInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        projectPageJumpBtn.click();
      }
    });
  }

  // 初始顯示第一頁
  showProjectPage(1);
}

// DOM載入完成後執行
$(document).ready(function () {
  // 初始化i18next
  i18next.init(
    {
      lng: "en",
      debug: false,
      resources: resources,
      interpolation: { escapeValue: false },
    },
    function (err, t) {
      jqueryI18next.init(i18next, $);
      $("body").localize();
    }
  );

  // 語言切換按鈕
  $("#btn-en").on("click", function () {
    i18next.changeLanguage("en", function () {
      $("body").localize();
    });
  });

  $("#btn-zh").on("click", function () {
    i18next.changeLanguage("zh", function () {
      $("body").localize();
    });
  });

  // 排序按鈕事件
  $(".btn-sort").on("click", function () {
    const order = $(this).data("sort");
    const section = $(this).closest("section");

    // 更新aria-pressed狀態
    $(this)
      .siblings(".btn-sort")
      .removeClass("active")
      .attr("aria-pressed", "false");
    $(this).addClass("active").attr("aria-pressed", "true");

    // 檢查是否為證照區塊
    if (section.attr("id") === "certifications") {
      sortCertifications(order);
    } else {
      // 其他區塊的排序
      const cardsContainer = section.find(".row").last();
      sortCards(cardsContainer, order);
    }
  });

  // 初始化：先設定預設排序為 desc（新到舊）
  currentSortOrder = "desc";

  // 生成證照內容
  renderCertifications();
  updateCertCount();

  // 分頁事件處理
  $("#certPrevBtn").on("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  $("#certNextBtn").on("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

  // 頁數跳轉按鈕
  $("#pageJumpBtn").on("click", function () {
    const targetPage = parseInt($("#pageJumpInput").val());
    jumpToPage(targetPage);
  });

  // 頁數輸入框：Enter鍵跳轉
  $("#pageJumpInput").on("keypress", function (e) {
    if (e.which === 13) {
      const targetPage = parseInt($(this).val());
      jumpToPage(targetPage);
    }
  });

  // 頁數輸入框：實時驗證
  $("#pageJumpInput").on("input", function () {
    const value = parseInt($(this).val());
    if (value < 1 || value > totalPages || isNaN(value)) {
      $(this).addClass("invalid");
    } else {
      $(this).removeClass("invalid");
    }
  });

  // 鍵盤支援（左右箭頭）- 只針對證照區塊
  $(document).on("keydown", function (e) {
    if (
      $("#certifications").is(":visible") &&
      !$("#pageJumpInput").is(":focus")
    ) {
      if (e.keyCode === 37 && currentPage > 1) {
        // 左箭頭
        currentPage--;
        updatePagination();
      } else if (e.keyCode === 39 && currentPage < totalPages) {
        // 右箭頭
        currentPage++;
        updatePagination();
      }
    }
  });

  // 初始化：設定每個區塊的預設排序為「新到舊」
  $(".sort-controls").each(function () {
    const section = $(this).closest("section");
    const descButton = $(this).find('.btn-sort[data-sort="desc"]');

    // 設定按鈕狀態
    descButton.addClass("active").attr("aria-pressed", "true");
    descButton
      .siblings(".btn-sort")
      .removeClass("active")
      .attr("aria-pressed", "false");

    // 如果不是證照區塊，執行排序
    if (section.attr("id") !== "certifications") {
      const cardsContainer = section.find(".row").last();
      sortCards(cardsContainer, "desc");
    }
  });

  // 分頁初始化
  updatePagination();

  // 初始化專案分頁
  if (document.getElementById("recentworks")) {
    initProjectPagination();
  }

  // 平滑滾動到錨點
  $('a[href^="#"]').on("click", function (e) {
    const target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 70,
          },
          800
        );
    }
  });
});

// 移除視差滾動效果，避免header隨滾動移動
