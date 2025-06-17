// ========================================
// 🚀 完整修正版 main.js - 統一的滾動導覽與分頁功能
// ========================================

// 全域變數
let currentPage = 1;
let totalPages = 3;
let currentSortOrder = "desc"; // 記錄當前排序狀態

// 專案分頁變數
let currentProjectPage = 1;
let totalProjectPages = 1;

// 滾動相關變數
let scrollThrottleTimer = null;
let lastScrollTop = 0;

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
          'I am currently studying at the Graduate Institute of Information Management, Taipei University, and working as a research assistant at the <a href="https://www.aifitesg.org/" target="_blank" rel="noopener noreferrer" class="ifit-link"><strong>Intelligent Financial Innovation Technology Lab (IFIT Lab)</strong></a>.',
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
      esg: {
        nav: {
          back: "Back to Home",
          introduction: "Introduction",
          timeline: "Timeline",
          process: "Process",
          languages: "Languages",
          highlights: "Highlights",
        },
        header: {
          title: "ML-ESG Compliance Report",
          subtitle: "ESG Compliance Report - Chinese Dataset Annotation Task",
          project: "NTCIR-19 2025-2026 International Research Project",
        },
        introduction: {
          title: "ACTIVITY INTRODUCTION",
          description:
            "We plan to participate in the <strong>ML-ESG Compliance Report</strong> Chinese dataset annotation task, which is an international collaborative research project aimed at advancing ESG automated detection technology.",
          team_label: "Participating Teams:",
          team_members:
            "Japanese Team, National Taiwan University, National Taipei University",
          duration_label: "Project Duration:",
          duration: "March 1, 2025 - May 31, 2025 (90-day annotation period)",
          importance_title: "Why is ESG Compliance Important?",
          stat1:
            "<strong>69% of investment companies</strong> have incorporated ESG standards into their regulatory compliance strategies",
          stat2:
            "Among the top 250 global companies, <strong>96% have conducted ESG reporting</strong>",
          stat3:
            "In 2022, <strong>86% of global asset managers</strong> have integrated sustainable investing into their investment strategies",
          stat4:
            "<strong>97% of asset managers</strong> in the Asia-Pacific region have adopted ESG strategies",
          trends_title: "Three Major Global ESG Trends",
          trend1_title: "ESG Integration into Corporate Operations",
          trend1_desc:
            "More companies are incorporating ESG principles into their daily operations",
          trend2_title: "Climate Change Response",
          trend2_desc:
            "Companies are adopting more proactive environmental measures to address global warming",
          trend3_title: "Increasingly Strict Regulatory Framework",
          trend3_desc:
            "Governments and international organizations continue to strengthen ESG regulations",
        },
        timeline: {
          title: "PROJECT TIMELINE",
          meeting: "2025/02/26 (Wed) 20:30-21:00",
          meeting_desc: "First Online Discussion Meeting - ML-ESG CR 2026",
          labeling: "2025/03/01 - 2025/05/31 (90 Days)",
          labeling_desc:
            "<strong>Data Annotation Phase</strong> - ESG reporting standards and data annotation work",
          completion: "2025/06 - 2025/07",
          completion_desc:
            "Complete ESG report annotation and establish precise ESG data models",
          conference: "2026/12",
          conference_desc:
            "Participate in NTCIR-19 International Conference and present research findings",
        },
        process: {
          title: "DATA LABELING PROCESS",
          step: "Step",
          task: "Task",
          description: "Description",
          step1_task: "Confirm ESG Indicator Location",
          step1_desc: "Confirm the pages where ESG indicators appear",
          step2_task: "Indicator Classification",
          step2_desc:
            "Quantitative data (numbers, percentages) or discussion/analysis (text description)",
          step3_task: "Unit Verification",
          step3_desc:
            "Percentage (%), currency ($), text description, or other data types",
          step4_task: "Compliance Confirmation",
          step4_desc: "Ensure ESG reports comply with regulatory requirements",
        },
        languages: {
          title: "MULTI-LANGUAGE SUPPORT",
          english: "English",
          french: "French",
          korean: "Korean",
          chinese: "Chinese",
          japanese: "Japanese",
          thai: "Thai",
        },
        highlights: {
          title: "RESEARCH HIGHLIGHTS",
          analysis_title: "ESG Data Analysis",
          analysis_desc: "In-depth analysis of corporate ESG report compliance",
          ai_title: "AI Automated Detection",
          ai_desc: "Using machine learning technology for automated detection",
          cooperation_title: "International Cooperation",
          cooperation_desc:
            "Joint research and development with multinational teams",
          ntcir_title: "NTCIR Certification",
          ntcir_desc:
            "International top-tier information retrieval evaluation conference",
        },
        cta: {
          title:
            "Interested in participating in international collaborative research projects?",
          subtitle: "Welcome to join the ML-ESG CR 2026 research team",
          button: "Visit NLPFin Official Website",
        },
        footer: {
          copyright: "ML-ESG Compliance Report © 2025 | NTCIR-19 2025-2026",
          team: "Research Team: NLPFin (Natural Language Processing Finance Research Group) | Official Website:",
        },
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
          '我目前就讀於臺北大學資訊管理研究所，並於<a href="https://www.aifitesg.org/" target="_blank" rel="noopener noreferrer" class="ifit-link"><strong>智慧金融創新科技實驗室 (IFIT Lab)</strong></a> 擔任研究助理。',
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
      esg: {
        nav: {
          back: "返回首頁",
          introduction: "活動介紹",
          timeline: "專案時程",
          process: "標註流程",
          languages: "多語言支援",
          highlights: "研究重點",
        },
        header: {
          title: "ML-ESG Compliance Report",
          subtitle: "ESG 合規性報告 - 中文版本資料集標註任務",
          project: "NTCIR-19 2025-2026 國際研究計畫",
        },
        introduction: {
          title: "ACTIVITY INTRODUCTION 活動介紹",
          description:
            "我們預計參與 <strong>ML-ESG Compliance Report (ESG 合規性報告)</strong> 中文版本資料集標註任務， 這是一個國際合作的研究計畫，目標是推動 ESG 自動化檢測技術發展。",
          team_label: "參與團隊：",
          team_members: "日本團隊、台灣大學、臺北大學",
          duration_label: "專案期間：",
          duration: "2025年3月1日 - 2025年5月31日（90天資料標註期）",
          importance_title: "為何 ESG 合規性重要？",
          stat1: "<strong>69% 的投資公司</strong>已將 ESG 標準納入監管合規策略",
          stat2: "全球前 250 大企業中，<strong>96% 已進行 ESG 報告</strong>",
          stat3:
            "2022 年，全球 <strong>86% 的資產管理者</strong>已將永續投資納入其投資策略",
          stat4: "亞太地區 <strong>97% 的資產管理者</strong>已導入 ESG 策略",
          trends_title: "三大 ESG 全球趨勢",
          trend1_title: "ESG 整合至企業營運",
          trend1_desc: "越來越多企業在日常營運中融入 ESG 原則",
          trend2_title: "應對氣候變遷",
          trend2_desc: "企業採取更積極的環保措施來因應全球暖化",
          trend3_title: "監管法規日益嚴格",
          trend3_desc: "各國政府與國際機構對 ESG 的監管持續強化",
        },
        timeline: {
          title: "PROJECT TIMELINE 專案時程",
          meeting: "2025/02/26 (三) 20:30-21:00",
          meeting_desc: "第一次線上討論會議 - ML-ESG CR 2026",
          labeling: "2025/03/01 - 2025/05/31 (90 Days)",
          labeling_desc:
            "<strong>資料標註階段</strong> - ESG 報告標準與數據標註工作",
          completion: "2025/06 - 2025/07",
          completion_desc: "完成 ESG 報告標註，建立精準的 ESG 數據模型",
          conference: "2026/12",
          conference_desc: "參與 NTCIR-19 國際研討會，發表研究成果",
        },
        process: {
          title: "DATA LABELING PROCESS 數據標註流程",
          step: "步驟",
          task: "工作內容",
          description: "詳細說明",
          step1_task: "確認 ESG 指標位置",
          step1_desc: "確認 ESG 指標出現的頁面",
          step2_task: "指標分類",
          step2_desc: "量化數據（數字、百分比）或討論/分析（文字描述）",
          step3_task: "單位驗證",
          step3_desc: "百分比（%）、貨幣（$）、文字描述或其他數據類型",
          step4_task: "合規性確認",
          step4_desc: "確保 ESG 報告符合監管要求",
        },
        languages: {
          title: "MULTI-LANGUAGE SUPPORT 多語言支援",
          english: "英文 English",
          french: "法文 French",
          korean: "韓文 Korean",
          chinese: "中文 Chinese",
          japanese: "日文 Japanese",
          thai: "泰文 Thai",
        },
        highlights: {
          title: "RESEARCH HIGHLIGHTS 研究重點",
          analysis_title: "ESG 數據分析",
          analysis_desc: "深度分析企業 ESG 報告合規性",
          ai_title: "AI 自動化檢測",
          ai_desc: "運用機器學習技術自動檢測",
          cooperation_title: "國際合作",
          cooperation_desc: "與多國團隊共同研究開發",
          ntcir_title: "NTCIR 認證",
          ntcir_desc: "國際頂級資訊檢索評測會議",
        },
        cta: {
          title: "有興趣參與國際合作研究計畫嗎？",
          subtitle: "歡迎加入 ML-ESG CR 2026 研究團隊",
          button: "訪問 NLPFin 官方網站",
        },
        footer: {
          copyright: "ML-ESG Compliance Report © 2025 | NTCIR-19 2025-2026",
          team: "研究團隊：NLPFin（自然語言處理金融研究小組）| 官方網站：",
        },
      },
    },
  },
};

// ========================================
// 🔧 工具函數
// ========================================

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
  currentSortOrder = order;
  renderCertifications();
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
  const sortedCerts = [...certifications].sort((a, b) => {
    const dateA = new Date(a.dateValue.replace(/\//g, "-"));
    const dateB = new Date(b.dateValue.replace(/\//g, "-"));
    return currentSortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  $("#certifications .cert-page .row").empty();
  $("#certification-modals").empty();

  totalPages = Math.ceil(sortedCerts.length / 6);

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  sortedCerts.forEach((cert, index) => {
    const pageNum = Math.floor(index / 6) + 1;
    let targetPage = $(`#certifications .cert-page[data-page="${pageNum}"]`);

    if (targetPage.length === 0) {
      const newPage = `<div class="cert-page" data-page="${pageNum}"><div class="row"></div></div>`;
      $("#certifications .cert-pagination-container").append(newPage);
      targetPage = $(`#certifications .cert-page[data-page="${pageNum}"]`);
    }

    targetPage.find(".row").append(createCertCard(cert));
    $("#certification-modals").append(createCertModal(cert));
  });

  updatePageIndicators();
  $("body").localize();
}

// 更新分頁指示器
function updatePageIndicators() {
  $("#certifications .cert-page-indicators").empty();

  for (let i = 1; i <= totalPages; i++) {
    const dotClass = i === currentPage ? "active" : "";
    const ariaSelected = i === currentPage ? "true" : "false";
    const dot = `<button class="page-dot ${dotClass}" data-page="${i}" 
                      role="tab" aria-label="第 ${i} 頁" 
                      aria-selected="${ariaSelected}"></button>`;
    $("#certifications .cert-page-indicators").append(dot);
  }

  $("#certifications .page-dot").on("click", function () {
    const targetPage = parseInt($(this).data("page"));
    jumpToPage(targetPage);
  });
}

// 更新分頁顯示
function updatePagination() {
  $("#certifications .cert-page").removeClass("active").hide();
  $(`#certifications .cert-page[data-page="${currentPage}"]`)
    .addClass("active")
    .show();

  $("#certifications .page-dot")
    .removeClass("active")
    .attr("aria-selected", "false");
  $(`#certifications .page-dot[data-page="${currentPage}"]`)
    .addClass("active")
    .attr("aria-selected", "true");

  $("#certPrevBtn").prop("disabled", currentPage === 1);
  $("#certNextBtn").prop("disabled", currentPage === totalPages);

  $("#pageJumpInput").val(currentPage);
  $("#pageJumpInput").attr("max", totalPages);

  $("#currentPageDisplay").text(currentPage);
  $("#totalPageDisplay").text(totalPages);

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
  const totalProjects = 5;
  totalProjectPages = Math.ceil(totalProjects / projectsPerPage);

  const projectCountElement = document.getElementById("totalProjectCount");
  if (projectCountElement) {
    projectCountElement.textContent = totalProjects;
  }

  const projectPrevBtn = document.getElementById("projectPrevBtn");
  const projectNextBtn = document.getElementById("projectNextBtn");
  const projectPageIndicators = document.querySelector(
    "#recentworks .cert-page-indicators"
  );
  const projectPageJumpWrapper = document.querySelector(
    "#recentworks .page-jump-wrapper"
  );

  if (totalProjectPages <= 1) {
    if (projectNextBtn) projectNextBtn.style.display = "none";
    if (projectPageJumpWrapper) projectPageJumpWrapper.style.display = "none";
    const pageDots = projectPageIndicators?.querySelectorAll(".page-dot");
    if (pageDots) {
      pageDots.forEach((dot, index) => {
        if (index > 0) dot.style.display = "none";
      });
    }
  }

  function showProjectPage(page) {
    const projectPages = document.querySelectorAll(
      "#recentworks .project-page"
    );

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

    if (projectPrevBtn) {
      projectPrevBtn.disabled = page === 1;
    }
    if (projectNextBtn) {
      projectNextBtn.disabled = page === totalProjectPages;
    }

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

  const projectPageDots = document.querySelectorAll("#recentworks .page-dot");
  projectPageDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const page = parseInt(dot.dataset.page);
      showProjectPage(page);
    });
  });

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

  showProjectPage(1);
}

// ========================================
// 🚀 統一的滾動導覽列效果 - 完全修正版本
// ========================================

// 滾動進度條功能
function createScrollProgress() {
  if (!$(".scroll-indicator").length) {
    $("body").prepend('<div class="scroll-indicator"></div>');
  }
}

function updateScrollProgress() {
  const scrollTop = $(window).scrollTop();
  const docHeight = $(document).height() - $(window).height();
  const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
  $(".scroll-indicator").css("width", scrollPercent + "%");
}

// 統一的導覽狀態更新函數
function updateNavigation(sectionId) {
  console.log("📍 更新導覽狀態:", sectionId);

  // 移除所有活躍狀態
  $(".navbar .nav-link").removeClass("active");

  if (!sectionId || sectionId === "home") {
    // 頁面頂部或首頁
    $(
      `.navbar .nav-link[href="index.html"], .navbar .nav-link[href="#"]`
    ).addClass("active");
  } else {
    // 特定區塊
    $(`.navbar .nav-link[href="#${sectionId}"]`).addClass("active");
  }
}

// 獲取當前區塊
function getCurrentSection() {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  let currentSection = "";
  let maxVisibility = 0;

  $("section[id]").each(function () {
    const $section = $(this);
    const sectionTop = $section.offset().top - 150;
    const sectionBottom = sectionTop + $section.outerHeight();

    // 計算區塊在視窗中的可見度
    const visibleTop = Math.max(scrollTop, sectionTop);
    const visibleBottom = Math.min(scrollTop + windowHeight, sectionBottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const visibility =
      visibleHeight / Math.min(windowHeight, $section.outerHeight());

    if (visibility > maxVisibility && visibility > 0.3) {
      maxVisibility = visibility;
      currentSection = $section.attr("id");
    }
  });

  // 如果沒有找到且在頁面頂部
  if (!currentSection && scrollTop < 200) {
    currentSection = "home";
  }

  return currentSection;
}

// 主滾動處理函數
function handleScroll() {
  const scrollTop = $(window).scrollTop();

  // 更新進度條
  updateScrollProgress();

  // 獲取當前區塊
  const currentSection = getCurrentSection();

  // 更新導覽列狀態
  updateNavigation(currentSection);

  // 導覽列滾動效果
  const navbar = $(".navbar");
  if (scrollTop > 50) {
    navbar.addClass("scrolled");
  } else {
    navbar.removeClass("scrolled");
  }
}

// 平滑滾動到指定位置
function smoothScrollTo(target, offset = 100) {
  if (target && target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top - offset,
      },
      800,
      "swing"
    );
  }
}

// 頁面載入時設置正確的活躍狀態
function updateNavOnLoad() {
  const hash = window.location.hash;
  console.log("🔗 頁面載入時的 hash:", hash);

  if (hash) {
    const sectionId = hash.substring(1);
    updateNavigation(sectionId);

    // 延遲滾動到目標位置
    setTimeout(() => {
      const target = $(hash);
      if (target.length) {
        smoothScrollTo(target);
      }
    }, 300);
  } else {
    updateNavigation("home");
  }
}

// ========================================
// 🎉 主要初始化函數
// ========================================

$(document).ready(function () {
  console.log("🚀 完整系統初始化開始...");

  // ========================================
  // 1. 滾動功能初始化
  // ========================================

  // 創建滾動進度條
  createScrollProgress();

  // 🚀 手動控制導覽列固定效果 - 更可靠的方案
  function initStickyNavbar() {
    const navbar = $(".navbar");
    const header = $("#header");

    if (!navbar.length || !header.length) return;

    // 計算導覽列原始位置
    const navbarOffsetTop = navbar.offset().top;
    const navbarHeight = navbar.outerHeight();

    console.log("🎯 導覽列原始位置:", navbarOffsetTop);

    // 為 body 預留空間元素（當導覽列變 fixed 時使用）
    if (!$("#navbar-spacer").length) {
      $('<div id="navbar-spacer"></div>').insertBefore(navbar);
    }

    function handleNavbarFixed() {
      const scrollTop = $(window).scrollTop();

      if (scrollTop >= navbarOffsetTop) {
        // 滾動超過導覽列位置，固定導覽列
        if (!navbar.hasClass("navbar-is-fixed")) {
          navbar.addClass("navbar-is-fixed");
          $("#navbar-spacer").height(navbarHeight);
          console.log("🔒 導覽列已固定");
        }
      } else {
        // 滾動回到頂部，恢復正常位置
        if (navbar.hasClass("navbar-is-fixed")) {
          navbar.removeClass("navbar-is-fixed");
          $("#navbar-spacer").height(0);
          console.log("🔓 導覽列已解除固定");
        }
      }
    }

    // 綁定滾動事件
    $(window).on("scroll.navbar", handleNavbarFixed);

    // 初始檢查
    handleNavbarFixed();
  }

  // 初始化固定導覽列
  initStickyNavbar();

  // 平滑滾動功能
  $('a[href^="#"]').on("click", function (e) {
    const targetHref = $(this).attr("href");
    const target = $(targetHref);

    console.log("🎯 點擊導覽連結:", targetHref);

    if (target.length) {
      e.preventDefault();

      // 先更新導覽列狀態
      const sectionId = targetHref.substring(1);
      updateNavigation(sectionId);

      // 平滑滾動
      smoothScrollTo(target);
    }
  });

  // 滾動監聽 - 使用節流提升性能
  $(window).on("scroll", function () {
    if (scrollThrottleTimer) return;

    scrollThrottleTimer = setTimeout(() => {
      handleScroll();
      scrollThrottleTimer = null;
    }, 16); // ~60fps
  });

  // 首頁按鈕特殊處理
  $('.navbar-brand, a[href="index.html"], a[href="#"]').on(
    "click",
    function (e) {
      // 如果已經在首頁，平滑滾動到頂部
      if (
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/"
      ) {
        e.preventDefault();
        updateNavigation("home");
        $("html, body").animate({ scrollTop: 0 }, 800);
      }
    }
  );

  // 監聽 hash 變化
  $(window).on("hashchange", function () {
    const hash = window.location.hash;
    if (hash) {
      updateNavigation(hash.substring(1));
    } else {
      updateNavigation("home");
    }
  });

  // ========================================
  // 2. 國際化功能初始化
  // ========================================

  // 統一的 HTML 翻譯處理函數
  function processHTMLTranslations() {
    $("[data-i18n]").each(function () {
      const $this = $(this);
      const key = $this.attr("data-i18n");
      if (key) {
        const translatedText = i18next.t(key);
        if (
          translatedText.includes("<strong>") ||
          translatedText.includes("<br>") ||
          translatedText.includes("<br />") ||
          translatedText.includes("<a ") ||
          translatedText.includes("</a>")
        ) {
          $this.html(translatedText);
        }
      }
    });
  }

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
      setTimeout(function () {
        processHTMLTranslations();
      }, 100);
    }
  );

  // 語言切換按鈕
  $("#btn-en").on("click", function () {
    i18next.changeLanguage("en", function () {
      $("body").localize();
      setTimeout(function () {
        processHTMLTranslations();
      }, 50);
    });
  });

  $("#btn-zh").on("click", function () {
    i18next.changeLanguage("zh", function () {
      $("body").localize();
      setTimeout(function () {
        processHTMLTranslations();
      }, 50);
    });
  });

  // ========================================
  // 3. 證照與分頁功能初始化
  // ========================================

  // 排序按鈕事件
  $(".btn-sort").on("click", function () {
    const order = $(this).data("sort");
    const section = $(this).closest("section");

    $(this)
      .siblings(".btn-sort")
      .removeClass("active")
      .attr("aria-pressed", "false");
    $(this).addClass("active").attr("aria-pressed", "true");

    if (section.attr("id") === "certifications") {
      sortCertifications(order);
    } else {
      const cardsContainer = section.find(".row").last();
      sortCards(cardsContainer, order);
    }
  });

  // 初始化證照功能
  currentSortOrder = "desc";
  renderCertifications();
  updateCertCount();

  // 證照分頁事件處理
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

  // 頁數跳轉功能
  $("#pageJumpBtn").on("click", function () {
    const targetPage = parseInt($("#pageJumpInput").val());
    jumpToPage(targetPage);
  });

  $("#pageJumpInput").on("keypress", function (e) {
    if (e.which === 13) {
      const targetPage = parseInt($(this).val());
      jumpToPage(targetPage);
    }
  });

  $("#pageJumpInput").on("input", function () {
    const value = parseInt($(this).val());
    if (value < 1 || value > totalPages || isNaN(value)) {
      $(this).addClass("invalid");
    } else {
      $(this).removeClass("invalid");
    }
  });

  // 鍵盤支援（左右箭頭）
  $(document).on("keydown", function (e) {
    if (
      $("#certifications").is(":visible") &&
      !$("#pageJumpInput").is(":focus")
    ) {
      if (e.keyCode === 37 && currentPage > 1) {
        currentPage--;
        updatePagination();
      } else if (e.keyCode === 39 && currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    }
  });

  // ========================================
  // 4. 其他功能初始化
  // ========================================

  // 設定預設排序
  $(".sort-controls").each(function () {
    const section = $(this).closest("section");
    const descButton = $(this).find('.btn-sort[data-sort="desc"]');

    descButton.addClass("active").attr("aria-pressed", "true");
    descButton
      .siblings(".btn-sort")
      .removeClass("active")
      .attr("aria-pressed", "false");

    if (section.attr("id") !== "certifications") {
      const cardsContainer = section.find(".row").last();
      sortCards(cardsContainer, "desc");
    }
  });

  // 初始化分頁
  updatePagination();

  // 初始化專案分頁
  if (document.getElementById("recentworks")) {
    initProjectPagination();
  }

  // ========================================
  // 5. ESG 頁面特定功能
  // ========================================

  if (window.location.pathname.includes("ESG.html")) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // 為時間軸項目添加動畫
    document.querySelectorAll(".timeline-item").forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(item);
    });

    // 為團隊卡片添加動畫
    document.querySelectorAll(".team-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });

    // 為研究重點卡片添加動畫
    document.querySelectorAll(".highlight-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });

    // 為 ESG 區塊添加動畫
    document.querySelectorAll(".esg-section").forEach((section, index) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
      section.style.transition = `all 0.8s ease ${index * 0.2}s`;
      observer.observe(section);
    });
  }

  // ========================================
  // 6. 最終初始化
  // ========================================

  // 強制更新專案總數
  setTimeout(function () {
    const actualProjectCount = $("#recentworks .project-card").length;
    $("#totalProjectCount").text(actualProjectCount);
    console.log("📊 實際專案數量:", actualProjectCount);
  }, 500);

  // 頁面完全載入後的初始化
  $(window).on("load", function () {
    updateNavOnLoad();
    handleScroll(); // 觸發初始滾動檢查
    console.log("✅ 所有功能初始化完成！滾動導覽已啟用！");
  });

  // 立即執行初始設置
  updateNavOnLoad();

  console.log("🎉 系統初始化完成！");
});
