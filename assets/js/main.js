// ========================================
// 🚀 完整版 main.js - 統一導覽與分頁功能 + 課程區塊 + 工作經驗
// 包含所有原始功能 + 新增課程功能 + 工作經驗區塊
// ========================================

// 全域變數
let currentPage = 1;
let totalPages = 3;
let currentSortOrder = "desc";
let currentProjectPage = 1;
let totalProjectPages = 1;
let scrollThrottleTimer = null;

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

  {
    id: "cert14",
    modalId: "certModal14",
    image: "assets/images/nvidia_llm_prompt_engineering.jpg",
    title: {
      key: "certs.nvidia_llm_prompt_title",
      default: "Building LLM Applications With Prompt Engineering",
    },
    date: {
      key: "certs.nvidia_llm_prompt_date",
      default: "Issuance date: 2025/11/06",
    },
    dateValue: "2025/11/06",
  },
];

// Seminar 分頁變數
let currentSeminarPage = 1;
let totalSeminarPages = 2;
let currentSeminarSortOrder = "desc";

// 在 main.js 中更新 enhancedProjectsData 陣列
const enhancedProjectsData = [
  {
    id: "esg",
    title: "ML-ESG Compliance Report",
    subtitle: "NTCIR-19 2025-2026 國際研究計畫",
    image: "assets/images/esg_project.png",
    link: "ESG.html",
    isExternal: false, // 內部連結
    importance: 5,
    year: 2025,
    category: "research",
    categoryLabel: "Research",
    tech: ["AI", "NLP", "ESG", "FINANCE"],
    description: "參與國際頂級資訊檢索會議的ESG合規性報告研究",
  },
  {
    id: "veripromise",
    title: "VeriPromiseESG 2026",
    subtitle: "ESG 永續承諾驗證競賽與標註資料蒐集計畫",
    image: "assets/images/veripromise_esg.png",
    link: "https://veripromiseesg.github.io/",
    isExternal: true,
    importance: 5,
    year: 2026,
    category: "research",
    categoryLabel: "Research",
    tech: ["ESG", "DATA COLLECTION", "VERIFICATION", "COMPETITION"],
    description: "ESG永續承諾驗證競賽與資料標註計畫",
  },
  {
    id: "nstc",
    title: "NSTC 包容科技計畫",
    subtitle: "多模態跨語言對話系統",
    image: "assets/images/NSTC_Index.png",
    link: "NSTC_Project.html",
    isExternal: false,
    importance: 5,
    year: 2025,
    category: "government",
    categoryLabel: "Government",
    tech: ["MULTIMODAL", "AI", "DIALOGUE", "NLP"],
    description: "國科會重點資助的包容性科技研究計畫",
  },
  {
    id: "smartcity",
    title: "Smart City Large Language Model Agent System",
    subtitle: "智慧城市大語言模型代理系統",
    image: "assets/images/smart city.png",
    link: "Smart_City.html",
    isExternal: false,
    importance: 4,
    year: 2024,
    category: "innovation",
    categoryLabel: "Innovation",
    tech: ["LLM", "SMART CITY", "AGENT", "AI"],
    description: "運用大語言模型技術打造的智慧城市解決方案",
  },
  {
    id: "marketing",
    title: "國科會-氛享水晶Bot",
    subtitle: "智慧行銷聊天機器人",
    image: "assets/images/氛享海報.png",
    link: "marketing.html",
    isExternal: false,
    importance: 4,
    year: 2024,
    category: "government",
    categoryLabel: "Government",
    tech: ["CHATBOT", "MARKETING", "AI", "NLP"],
    description: "與國科會合作開發的智慧行銷機器人系統",
  },
  {
    id: "cancer",
    title: "大學專題-癌資機模人",
    subtitle: "癌症資料智慧分析系統",
    image: "assets/images/cancer_project.png",
    link: "cancer.html",
    isExternal: false,
    importance: 3,
    year: 2023,
    category: "academic",
    categoryLabel: "Academic",
    tech: ["MEDICAL AI", "MACHINE LEARNING", "DATA ANALYSIS"],
    description: "大學期間開發的癌症資料分析專題系統",
  },
];

// 排序選項定義
const enhancedSortOptions = {
  yearDesc: (a, b) => {
    if (b.year !== a.year) {
      return b.year - a.year;
    }
    return b.importance - a.importance;
  },
  yearAsc: (a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return b.importance - a.importance;
  },
  alphabetical: (a, b) => {
    return a.title.localeCompare(b.title);
  },
};

// 分類顏色配置
const categoryConfig = {
  research: {
    color: "#28a745",
    bgColor: "rgba(40, 167, 69, 0.1)",
    icon: "🔬",
  },
  government: {
    color: "#007bff",
    bgColor: "rgba(0, 123, 255, 0.1)",
    icon: "🏛️",
  },
  innovation: {
    color: "#fd7e14",
    bgColor: "rgba(253, 126, 20, 0.1)",
    icon: "💡",
  },
  academic: {
    color: "#6f42c1",
    bgColor: "rgba(111, 66, 193, 0.1)",
    icon: "🎓",
  },
};

// i18next 資源
const resources = {
  zh: {
    translation: {
      nav: {
        home: "首頁 Home",
        education: "學習經歷",
        experience: "工作經驗",
        seminar: "研討會發表",
        certifications: "證書",
        projects: "計畫",
        courses: "碩士課程",
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
        experience: "工作經驗",
        seminar: "研討會發表",
        certifications: "證書",
        projects: "計畫",
        courses: "碩士課程 Master Courses",
        school: "就讀學校",
      },
      experience: {
        researcher_period: "2024.04 - Now",
        researcher_title: "研究助理",
        researcher_company: "智慧金融創新科技實驗室 (IFIT Lab), NTPU",
        researcher_task1:
          "國科會「以包容為導向之科技計畫」推動與協調計畫，子計畫三：包容溝通支持多模態跨語言任務導向對話系統 (NSTC)",
        researcher_task2: "資策會-智慧城市大型語言模型代理人系統",

        nvidia_period: "2025.03 - Now",
        nvidia_title: "NVIDIA師生共群計畫負責人",
        nvidia_company: "NVIDIA Student-Faculty Collaboration Program Leader",
        nvidia_task1: "協助在學校舉辦與NVIDIA相關講座以及課程",
        nvidia_task2: "協助辦理AI相關競賽",
        nvidia_task3: "完成NVIDIA課程證照",
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
        nvidia_llm_prompt_title: "Building LLM Applications With Prompt Engineering",
        nvidia_llm_prompt_date: "發證日期: 2025/11/06",
        total_count: "證照總數：",
      },
      projects: {
        total_count: "專案總數：",
        sort_time_desc: "📅 時間 (新到舊)",
        sort_time_asc: "⏰ 時間 (舊到新)",
        sort_alphabetical: "🔤 字母排序",
        hint_time_desc: "📅 按時間排序：最新的專案在前面",
        hint_time_asc: "⏰ 按時間排序：最早的專案在前面",
        hint_alphabetical: "🔤 按字母排序：A-Z 順序排列",
      },
      seminar: {
        title1: "國際品質管理研討會",
        date1: "發證日期: 2023/11/18",
        title2: "IMP2024第29屆資訊管理暨實務研討會",
        date2: "發證日期: 2024/11/21",
        title3: "品質學報接受稿件刊登",
        date3: "接受日期: 2024/08/31",
        title4: "包容性溝通系統與RAG增強多語言多模態對話能力",
        date4: "發表日期: 2025/07/04",
        subtitle4: "2025台灣雲端與服務運算研討會(TWSC2 2025)",
        title5: "ASONAM 2025 研究論文",
        date5: "發表日期: 2025/08/15",
        subtitle5: "ASONAM 2025 - IEEE/ACM 社群網路分析與挖掘國際會議",
        title6: "ITAM-31 國際研討會",
        date6: "參加日期: 2025/10/26-30",
        subtitle6: "31st International Conference on IT Applications and Management / Gyeongsang National University, Jinju, Korea",
        title7: "IMP2025 第30屆國際資訊管理暨實務研討會",
        date7: "發表日期: 2025/12/20",
        subtitle7: "SentiPromiseESG: Sentiment Analysis of Sustainability Promises Across Industries",
        modal7_cert_title: "參加證書",
        modal7_photo_title: "研討會合照",
      },
      education: {
        fju_title: "輔仁大學第40屆優秀專題",
        fju_date: "發證日期: 2023/05/27",
        innohack_title: "2023叡陽資訊黑客松競賽",
        innohack_date: "發證日期: 2023/09/13",
        ict_title: "第28屆大專院校資訊應用服務創新競賽",
        ict_date: "發證日期: 2023/11/04",
        iii_title: "資策會科技日",
        iii_date: "參加日期: 2024/11/07",
        // 🆕 USR 競賽
        usr_title: "2025 NTPU USR × REsolution 永續科技提案競賽",
        usr_subtitle: "第一名 - CYBJ (Create Your Better Journey)",
        usr_date: "發證日期: 2025/12/12",
        usr_modal_title: "2025 NTPU USR × REsolution 永續科技提案競賽 第一名",
        usr_modal_team: "團隊: CYBJ (Create Your Better Journey)",
        usr_modal_members: "成員: 陳柏臻、蕭文欣、吳承耘、盧信廷",
        usr_modal_date: "發證日期: 2025/12/12",
        usr_modal_award: "獎項: 第一名 (獎金 NT$ 12,000)",
        usr_modal_news: "觀看新聞採訪",
      },
      page: {
        current: "第",
        of: "頁，共",
        total: "頁",
        jump: "跳至",
        page: "頁",
        go: "GO",
        current_short: "第",
        of_short: "頁，共",
        goto: "跳至",
      },
      courses: {
        select_semester: "選擇學期:",
        semester_1_1: "碩一上",
        semester_1_2: "碩一下",
        semester_2_1: "碩二上",
        semester_2_2: "碩二下",
        software_engineering: "軟體工程 Software Engineering",
        software_engineering_team: "Group 3 - appetAIwan 團隊",
        software_engineering_prof: "Min Yuh Day 教授",
        software_engineering_pdf: "期中專案報告 (PDF)",
        software_engineering_date: "2025/06/04",
        software_engineering_status: "狀態: 已完成",
        generative_ai: "生成式AI創新應用 Generative AI",
        generative_ai_team: "NovaPet 團隊",
        generative_ai_prof: "Min-Yuh Day 教授",
        generative_ai_pdf: "期末專案報告 (PDF)",
        generative_ai_date: "2025/06/02",
        generative_ai_status: "狀態: 已完成",
        coming_soon_title_1_2: "碩一下課程敬請期待",
        coming_soon_subtitle_1_2: "Master 1st Spring Semester Coming Soon",
        coming_soon_time_1_2: "預計開始時間：2026年2月",
        coming_soon_title_2_1: "碩二上課程敬請期待",
        coming_soon_subtitle_2_1: "Master 2nd Fall Semester Coming Soon",
        coming_soon_time_2_1: "預計開始時間：2026年9月",
        coming_soon_title_2_2: "碩二下課程敬請期待",
        coming_soon_subtitle_2_2: "Master 2nd Spring Semester Coming Soon",
        coming_soon_time_2_2: "預計開始時間：2027年2月",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        education: "Educational Background",
        experience: "Work Experience",
        seminar: "Seminar Presentation",
        certifications: "Certifications",
        projects: "Projects",
        courses: "Master Courses",
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
        experience: "Work Experience",
        seminar: "Seminar Presentation",
        certifications: "Certifications",
        projects: "Projects",
        courses: "Master Courses",
        school: "School",
      },
      experience: {
        researcher_period: "2024.04 - Now",
        researcher_title: "Researcher",
        researcher_company:
          "Intelligent Financial Innovation Technology Lab (IFIT Lab), NTPU",
        researcher_task1:
          "Inclusive AI Dialogue Assistive Device Project, sub-project 3: Multimodal Cross-lingual Task-Oriented Dialogue System for Inclusive Communication Support (NSTC)",
        researcher_task2:
          "Large Language Model Agent System for Smart City (III)",

        nvidia_period: "2025.03 - Now",
        nvidia_title: "NVIDIA Student-Faculty Collaboration Program Leader",
        nvidia_company: "NVIDIA Student-Faculty Collaboration Program Leader",
        nvidia_task1:
          "Assist in organizing NVIDIA-related lectures and courses at school",
        nvidia_task2: "Assist in organizing AI-related competitions",
        nvidia_task3: "Complete NVIDIA course certifications",
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
        nvidia_llm_prompt_title: "Building LLM Applications With Prompt Engineering",
        nvidia_llm_prompt_date: "Issuance date: 2025/11/06",
        total_count: "Total Certifications:",
      },
      projects: {
        total_count: "Total Projects:",
        sort_time_desc: "📅 Time (Newest to Oldest)",
        sort_time_asc: "⏰ Time (Oldest to Newest)",
        sort_alphabetical: "🔤 Alphabetical Order",
        hint_time_desc: "📅 Sorted by time: Newest projects first",
        hint_time_asc: "⏰ Sorted by time: Oldest projects first",
        hint_alphabetical: "🔤 Sorted alphabetically: A-Z order",
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
        title4: "2025 Taiwan Symposium On Cloud And Services Computing (TWSC2 2025)",
        date4: "Presentation Date: 2025/07/04",
        subtitle4: "Implementing an Inclusive Communication System with RAG-enhanced Multilingual and Multimodal Dialogue Capabilities",
        title5: "ASONAM 2025 Research Paper",
        date5: "Presentation Date: 2025/08/15",
        subtitle5: "ASONAM 2025 - IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining",
        title6: "ITAM-31 International Conference",
        date6: "Participation Date: 2025/10/26-30",
        subtitle6: "31st International Conference on IT Applications and Management / Gyeongsang National University, Jinju, Korea",
        title7: "IMP2025 — The 30th International Conference on Information Management & Practice",
        date7: "Presentation Date: 2025/12/20",
        subtitle7: "SentiPromiseESG: Sentiment Analysis of Sustainability Promises Across Industries",
        modal7_cert_title: "Certificate of Participation",
        modal7_photo_title: "Conference Group Photo",
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
        // 🆕 USR Competition
        usr_title: "2025 NTPU USR × REsolution Sustainable Technology Competition",
        usr_subtitle: "1st Place - CYBJ (Create Your Better Journey)",
        usr_date: "Issued: 2025/12/12",
        usr_modal_title: "2025 NTPU USR × REsolution Competition - 1st Place",
        usr_modal_team: "Team: CYBJ (Create Your Better Journey)",
        usr_modal_members: "Members: Chen Po-Chen, Hsiao Wen-Hsin, Wu Cheng-Yun, Lu Hsin-Ting",
        usr_modal_date: "Issued: December 12, 2025",
        usr_modal_award: "Award: 1st Place (Prize: NT$ 12,000)",
        usr_modal_news: "Watch News Interview",
      },
      page: {
        current: "Page",
        of: "of",
        total: "",
        jump: "Go to",
        page: "",
        go: "GO",
        current_short: "Page",
        of_short: "of",
        goto: "Go to",
      },
      courses: {
        select_semester: "Select Semester:",
        semester_1_1: "Master 1st Spring",
        semester_1_2: "Master 1st Fall",
        semester_2_1: "Master 2nd Spring",
        semester_2_2: "Master 2nd Fall",
        software_engineering: "Software Engineering",
        software_engineering_team: "Group 3 - appetAIwan Team",
        software_engineering_prof: "Professor Min Yuh Day",
        software_engineering_pdf: "Midterm Project Report (PDF)",
        software_engineering_date: "2025/06/04",
        software_engineering_status: "Status: Completed",
        generative_ai: "Generative AI Innovation Application",
        generative_ai_team: "NovaPet Team",
        generative_ai_prof: "Professor Min-Yuh Day",
        generative_ai_pdf: "Final Project Report (PDF)",
        generative_ai_date: "2025/06/02",
        generative_ai_status: "Status: Completed",
        coming_soon_title_1_2: "Master 1st Spring Coming Soon",
        coming_soon_subtitle_1_2: "課程即將推出",
        coming_soon_time_1_2: "Expected Start: February 2026",
        coming_soon_title_2_1: "Master 2nd Fall Coming Soon",
        coming_soon_subtitle_2_1: "課程即將推出",
        coming_soon_time_2_1: "Expected Start: September 2026",
        coming_soon_title_2_2: "Master 2nd Spring Coming Soon",
        coming_soon_subtitle_2_2: "課程即將推出",
        coming_soon_time_2_2: "Expected Start: February 2027",
      },
    },
  },
};

// ========================================
// 🔧 工具函數
// ========================================

// 統一的平滑滾動函數
function smoothScrollTo(target, offset = 100) {
  if (!target || !target.length) return;

  // 暫時禁用CSS smooth scroll避免衝突
  $("html").css("scroll-behavior", "auto");

  // 使用jQuery動畫
  $("html, body").animate(
    {
      scrollTop: target.offset().top - offset,
    },
    {
      duration: 600,
      easing: "swing",
      complete: function () {
        // 恢復CSS smooth scroll
        setTimeout(() => {
          $("html").css("scroll-behavior", "smooth");
        }, 100);
      },
    }
  );
}

// 滾動到頂部函數
window.scrollToTop = function () {
  $("html").css("scroll-behavior", "auto");
  $("html, body").animate(
    { scrollTop: 0 },
    {
      duration: 600,
      complete: function () {
        setTimeout(() => {
          $("html").css("scroll-behavior", "smooth");
        }, 100);
      },
    }
  );

  // 立即更新導覽狀態
  setTimeout(() => {
    updateNavigation("home");
  }, 50);
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
  currentSortOrder = order;
  renderCertifications();
  updatePagination();
}

// ========================================
// Seminar 區塊功能 - 簡化版
// ========================================

// Seminar 排序功能 - 使用簡單的 CSS order 屬性
function sortSeminars(order) {
  currentSeminarSortOrder = order;
  
  // 直接操作現有的 DOM，不移動元素
  const $allCards = $("#seminar .flex-col");
  
  // 提取所有卡片的日期信息
  const cardsWithDates = [];
  $allCards.each(function(index) {
    const $card = $(this);
    const dateText = $card.find(".cert-date").text();
    const dateMatch = dateText.match(/(\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})/);
    if (dateMatch) {
      cardsWithDates.push({
        element: $card,
        date: new Date(dateMatch[1].replace(/\//g, "-")),
        originalIndex: index
      });
    }
  });
  
  // 排序
  cardsWithDates.sort((a, b) => {
    return order === "asc" ? a.date - b.date : b.date - a.date;
  });
  
  // 使用 CSS order 屬性重新排列，不移動 DOM
  cardsWithDates.forEach((item, newIndex) => {
    item.element.css("order", newIndex);
  });
  
  // 更新當前頁面顯示
  updateSeminarPagination();
}

// 更新 Seminar 分頁顯示
function updateSeminarPagination() {
  // 簡單切換頁面
  $("#seminar .seminar-page").removeClass("active").hide();
  $(`#seminar .seminar-page[data-page="${currentSeminarPage}"]`)
    .addClass("active")
    .show();

  // 更新分頁指示器
  $("#seminar-page-indicators .page-dot")
    .removeClass("active")
    .attr("aria-selected", "false");
  $(`#seminar-page-indicators .page-dot[data-page="${currentSeminarPage}"]`)
    .addClass("active")
    .attr("aria-selected", "true");

  // 更新按鈕狀態
  $("#seminarPrevBtn").prop("disabled", currentSeminarPage === 1);
  $("#seminarNextBtn").prop("disabled", currentSeminarPage === totalSeminarPages);

  // 更新頁碼顯示
  $("#seminarPageJumpInput").val(currentSeminarPage);
  $("#seminarPageJumpInput").attr("max", totalSeminarPages);
  $("#seminarCurrentPageDisplay").text(currentSeminarPage);
  $("#seminarTotalPageDisplay").text(totalSeminarPages);
}

// Seminar 頁數跳轉功能
function jumpToSeminarPage(targetPage) {
  targetPage = parseInt(targetPage);

  if (targetPage < 1 || targetPage > totalSeminarPages || isNaN(targetPage)) {
    $("#seminarPageJumpInput").addClass("error");
    setTimeout(function () {
      $("#seminarPageJumpInput").removeClass("error");
      $("#seminarPageJumpInput").val(currentSeminarPage);
    }, 1000);
    return false;
  }

  if (targetPage !== currentSeminarPage) {
    currentSeminarPage = targetPage;
    updateSeminarPagination();
    return true;
  }
  return false;
}

// 初始化 Seminar 功能
function initSeminarFeatures() {
  // 初始化變數
  currentSeminarPage = 1;
  currentSeminarSortOrder = "desc";
  totalSeminarPages = $("#seminar .seminar-page").length;
  
  // 確保所有卡片的父容器使用 flexbox
  $("#seminar .seminar-page .row").css("display", "flex");
  $("#seminar .seminar-page .row").css("flex-wrap", "wrap");

  // 初始化顯示第一頁
  updateSeminarPagination();

  // 排序按鈕事件
  $("#seminar .btn-sort").on("click", function () {
    const order = $(this).data("sort");
    
    $(this)
      .addClass("active")
      .attr("aria-pressed", "true")
      .siblings(".btn-sort")
      .removeClass("active")
      .attr("aria-pressed", "false");

    sortSeminars(order);
  });

  // 上一頁按鈕
  $("#seminarPrevBtn").on("click", function () {
    if (currentSeminarPage > 1) {
      currentSeminarPage--;
      updateSeminarPagination();
    }
  });

  // 下一頁按鈕
  $("#seminarNextBtn").on("click", function () {
    if (currentSeminarPage < totalSeminarPages) {
      currentSeminarPage++;
      updateSeminarPagination();
    }
  });

  // 分頁點擊
  $("#seminar-page-indicators .page-dot").on("click", function () {
    const targetPage = parseInt($(this).data("page"));
    if (targetPage !== currentSeminarPage) {
      currentSeminarPage = targetPage;
      updateSeminarPagination();
    }
  });

  // 頁數跳轉按鈕
  $("#seminarPageJumpBtn").on("click", function () {
    const targetPage = parseInt($("#seminarPageJumpInput").val());
    jumpToSeminarPage(targetPage);
  });

  // Enter 鍵跳轉
  $("#seminarPageJumpInput").on("keypress", function (e) {
    if (e.which === 13) {
      const targetPage = parseInt($(this).val());
      jumpToSeminarPage(targetPage);
    }
  });

  // 輸入驗證
  $("#seminarPageJumpInput").on("input", function () {
    const value = parseInt($(this).val());
    if (value < 1 || value > totalSeminarPages || isNaN(value)) {
      $(this).addClass("invalid");
    } else {
      $(this).removeClass("invalid");
    }
  });
}

// 證照專用排序

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
  const totalProjects = enhancedProjectsData.length;
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
// 🚀 統一的滾動導覽列效果
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
  console.log("🔍 更新導覽狀態:", sectionId);

  // 移除所有活躍狀態 - 支援兩種類型的導覽列
  $(".navbar .nav-link, .index-navbar .nav-link").removeClass("active");

  if (!sectionId || sectionId === "home") {
    // 頁面頂部或首頁
    $(`
      .navbar .nav-link[href="index.html"], 
      .navbar .nav-link[href="#"],
      .navbar .nav-link[onclick*="scrollToTop"],
      .index-navbar .nav-link[href="index.html"], 
      .index-navbar .nav-link[href="#"],
      .index-navbar .nav-link[onclick*="scrollToTop"]
    `).addClass("active");
  } else {
    // 特定區塊
    $(
      `.navbar .nav-link[href="#${sectionId}"], .index-navbar .nav-link[href="#${sectionId}"]`
    ).addClass("active");
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

// 主滾動處理函數 - 統一版本
function handleScroll() {
  const scrollTop = $(window).scrollTop();

  // 更新進度條
  updateScrollProgress();

  // 獲取當前區塊
  const currentSection = getCurrentSection();

  // 更新導覽列狀態
  updateNavigation(currentSection);

  // 導覽列滾動效果 - 支援兩種導覽列
  const navbar = $(".navbar, .index-navbar");
  if (scrollTop > 50) {
    navbar.addClass("scrolled");
  } else {
    navbar.removeClass("scrolled");
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
// 🎯 專案動態排序系統
// ========================================

// 動態排序函數
function sortEnhancedProjects(sortType = "yearDesc") {
  console.log(`📄 專案排序：${sortType}`);

  const sortedProjects = [...enhancedProjectsData].sort(
    enhancedSortOptions[sortType]
  );
  renderEnhancedProjects(sortedProjects);

  // 顯示排序提示
  showSortHint(sortType);

  // 重新初始化分頁（如果需要）
  updateProjectPagination();
}

// 在 main.js 中更新 renderEnhancedProjects 函數
function renderEnhancedProjects(projects) {
  const projectContainer = document.querySelector("#projectsContainer");
  if (!projectContainer) {
    console.warn("⚠️ 找不到專案容器");
    return;
  }

  // 清空容器
  projectContainer.innerHTML = "";

  // 渲染每個專案
  projects.forEach((project, index) => {
    const techTags = project.tech
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("");

    // 判斷是內部連結還是外部連結
    const linkAttributes = project.isExternal 
      ? `href="${project.link}" target="_blank" rel="noopener noreferrer"` 
      : `href="${project.link}"`;
    
    // 為外部連結添加特殊圖示
    const externalIcon = project.isExternal 
      ? '<i class="fas fa-external-link-alt external-link-indicator"></i>' 
      : '';

    const projectHTML = `
      <div class="col-12 col-md-4">
        <div class="project-card enhanced-project-card ${project.category}" 
             data-category="${project.category}" 
             data-importance="${project.importance}"
             data-year="${project.year}"
             style="animation-delay: ${index * 0.1}s">
          <a ${linkAttributes} aria-label="查看${project.title}詳情">
            <div class="project-img">
              <img src="${project.image}" alt="${project.title}" loading="lazy" />
              <div class="project-overlay">
                <span class="more">
                  ${project.isExternal ? 'VISIT SITE →' : 'SEE DETAILS →'}
                  ${externalIcon}
                </span>
              </div>
            </div>
            <div class="content-area">
              <h4 class="project-title">
                ${project.title}
                ${externalIcon}
              </h4>
              ${
                project.subtitle
                  ? `<div class="subtitle">${project.subtitle}</div>`
                  : ""
              }
              <div class="tech-tags">${techTags}</div>
              <div class="project-meta">
                <span class="year-badge">📅 ${project.year}</span>
                ${project.isExternal ? '<span class="external-badge">🔗 外部連結</span>' : ''}
              </div>
            </div>
          </a>
        </div>
      </div>
    `;

    projectContainer.insertAdjacentHTML("beforeend", projectHTML);
  });

  // 更新專案總數
  updateEnhancedProjectCount();

  // 重新綁定 i18next 翻譯
  if (typeof $ !== "undefined" && typeof $("body").localize === "function") {
    setTimeout(() => {
      $("body").localize();
    }, 50);
  }
}

// 更新專案總數
function updateEnhancedProjectCount() {
  const countElement = document.getElementById("totalProjectCount");
  if (countElement) {
    countElement.textContent = enhancedProjectsData.length;
  }
}

// 強制更新個人簡介
function forceUpdateIntro() {
  const introElement = $('[data-i18n="main.intro"]');
  if (introElement.length) {
    const translatedText = i18next.t("main.intro");
    introElement.html(translatedText);
    console.log("📄 強制更新個人簡介:", translatedText);
  }
}

// 專門處理含有HTML的翻譯元素
function forceUpdateHTMLElements() {
  // 個人簡介 - 強制使用HTML
  const introElement = $('[data-i18n="main.intro"]');
  if (introElement.length) {
    const translatedText = i18next.t("main.intro");
    introElement.html(translatedText);
  }

  // 標題行 - 也包含HTML
  const taglineElement = $('[data-i18n="header.tagline"]');
  if (taglineElement.length) {
    const translatedText = i18next.t("header.tagline");
    taglineElement.html(translatedText);
  }

  console.log("🔧 強制更新所有HTML元素完成");
}

// 更新專案排序選單翻譯
function updateProjectSortSelect() {
  const sortSelect = document.getElementById("projectSortSelect");
  if (sortSelect) {
    const options = sortSelect.querySelectorAll("option[data-i18n]");
    options.forEach((option) => {
      const key = option.getAttribute("data-i18n");
      if (key) {
        const translatedText = i18next.t(key);
        option.textContent = translatedText;
      }
    });
  }
}

// 排序提示函數
function showSortHint(sortType) {
  // 移除舊的提示
  const oldHint = document.querySelector(".sort-hint");
  if (oldHint) {
    oldHint.remove();
  }

  const hintKeys = {
    yearDesc: "projects.hint_time_desc",
    yearAsc: "projects.hint_time_asc",
    alphabetical: "projects.hint_alphabetical",
  };

  const hintElement = document.createElement("div");
  hintElement.className = "sort-hint";
  hintElement.textContent = i18next.t(hintKeys[sortType]) || "排序完成";

  const sortControls = document.querySelector(".project-sort-controls");
  if (sortControls) {
    sortControls.appendChild(hintElement);

    // 3秒後自動消失
    setTimeout(() => {
      if (hintElement.parentNode) {
        hintElement.remove();
      }
    }, 3000);
  }
}

// 更新專案分頁功能
function updateProjectPagination() {
  const projectsPerPage = 6;
  const totalProjects = enhancedProjectsData.length;
  const newTotalPages = Math.ceil(totalProjects / projectsPerPage);

  // 更新全域變數
  totalProjectPages = newTotalPages;

  // 如果當前頁數超過總頁數，回到第一頁
  if (currentProjectPage > totalProjectPages) {
    currentProjectPage = 1;
  }

  // 顯示/隱藏分頁控制
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
    if (projectPrevBtn) projectPrevBtn.style.display = "none";
    if (projectPageJumpWrapper) projectPageJumpWrapper.style.display = "none";

    // 只顯示第一個點
    const pageDots = projectPageIndicators?.querySelectorAll(".page-dot");
    if (pageDots) {
      pageDots.forEach((dot, index) => {
        if (index === 0) {
          dot.style.display = "block";
          dot.classList.add("active");
        } else {
          dot.style.display = "none";
        }
      });
    }
  } else {
    if (projectNextBtn) projectNextBtn.style.display = "block";
    if (projectPrevBtn) projectPrevBtn.style.display = "block";
    if (projectPageJumpWrapper) projectPageJumpWrapper.style.display = "block";
  }

  console.log(
    `📊 專案分頁更新：總共 ${totalProjects} 個專案，${totalProjectPages} 頁`
  );
}

// 初始化增強版專案排序系統
function initEnhancedProjectSorting() {
  console.log("🚀 初始化增強版專案排序系統...");

  // 檢查是否在專案頁面
  const projectSection = document.getElementById("recentworks");
  if (!projectSection) {
    console.log("📄 當前頁面沒有專案區塊，跳過初始化");
    return;
  }

  // 綁定排序選擇器事件
  const sortSelect = document.getElementById("projectSortSelect");
  if (sortSelect) {
    // 移除舊的事件監聽器
    sortSelect.removeEventListener("change", handleProjectSortChange);

    // 添加新的事件監聽器
    sortSelect.addEventListener("change", handleProjectSortChange);

    // 讀取用戶偏好排序
    const savedSort =
      localStorage.getItem("projectSortPreference") || "yearDesc";
    sortSelect.value = savedSort;
  }

  // 初始排序（按時間新到舊）
  sortEnhancedProjects("yearDesc");

  // 鍵盤快速鍵支持
  document.removeEventListener("keydown", handleProjectKeydown);
  document.addEventListener("keydown", handleProjectKeydown);

  console.log("✅ 增強版專案排序系統初始化完成！");
  console.log("🔍 快速鍵：P = 專案排序選單");
}

// 處理排序變更的函數
function handleProjectSortChange() {
  const sortType = this.value;
  sortEnhancedProjects(sortType);

  // 儲存用戶偏好
  localStorage.setItem("projectSortPreference", sortType);
}

// 處理鍵盤快速鍵的函數
function handleProjectKeydown(e) {
  // 確保不在輸入框中
  if (
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "SELECT" ||
    document.activeElement.tagName === "TEXTAREA"
  )
    return;

  if (e.key === "p" || e.key === "P") {
    // P 鍵：聚焦到排序選擇器
    const sortSelect = document.getElementById("projectSortSelect");
    if (sortSelect) {
      sortSelect.focus();
      e.preventDefault();
    }
  }
}

// ========================================
// 📚 課程區塊功能
// ========================================

// 課程學期切換功能
function initCourseSemesterSwitching() {
  const coursesSection = document.getElementById("courses");
  if (!coursesSection) {
    console.log("📄 當前頁面沒有課程區塊，跳過初始化");
    return;
  }

  const semesterBtns = coursesSection.querySelectorAll(".semester-btn");
  const semesterContents = coursesSection.querySelectorAll(".semester-content");

  semesterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const semester = this.dataset.semester;

      console.log("📄 切換到學期:", semester);

      // 更新按鈕狀態
      semesterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");

      // 切換內容
      semesterContents.forEach((content) => {
        content.classList.remove("active");
      });

      const targetContent = coursesSection.querySelector(
        `[data-semester="${semester}"].semester-content`
      );
      if (targetContent) {
        setTimeout(() => {
          targetContent.classList.add("active");
        }, 10);
      }
    });
  });

  console.log("✅ 課程學期切換功能初始化完成");
}

// 處理課程圖片載入錯誤
function initCourseImageErrorHandling() {
  const courseImages = document.querySelectorAll(".course-img");
  courseImages.forEach((img) => {
    img.addEventListener("error", function () {
      console.log("⚠️ 課程圖片載入失敗:", this.src);

      // 如果圖片載入失敗，使用漸層背景和文字
      this.style.background = "linear-gradient(135deg, #4f46e5, #6366f1)";
      this.style.display = "flex";
      this.style.alignItems = "center";
      this.style.justifyContent = "center";
      this.style.color = "white";
      this.style.fontSize = "2rem";
      this.style.fontWeight = "bold";
      this.style.textShadow = "0 2px 4px rgba(0,0,0,0.5)";

      if (this.src.includes("appetaiwan")) {
        this.innerHTML = "appetAIwan";
      } else if (this.src.includes("novapet")) {
        this.innerHTML = "NovaPet";
      } else {
        this.innerHTML = "課程";
      }
    });
  });

  console.log("✅ 課程圖片錯誤處理初始化完成");
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

  // 🚀 手動控制導覽列固定效果
  function initStickyNavbar() {
    const navbar = $(".navbar, .index-navbar");
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

  // 🚀 統一的導覽連結點擊處理 - 只註冊一次
  $(document).off("click.navigation"); // 移除之前的事件
  $(document).on(
    "click.navigation",
    'a[href^="#"]:not([href="#"])',
    function (e) {
      const targetHref = $(this).attr("href");
      const target = $(targetHref);

      console.log("🎯 點擊導覽連結:", targetHref);

      if (target.length) {
        e.preventDefault();
        e.stopPropagation();

        // 立即更新導覽列狀態
        const sectionId = targetHref.substring(1);
        updateNavigation(sectionId);

        // 平滑滾動
        smoothScrollTo(target);
      }
    }
  );

  // 首頁按鈕特殊處理
  $(document).off("click.home"); // 移除之前的事件
  $(document).on(
    "click.home",
    '.navbar-brand, a[href="index.html"], a[href="#"], a[onclick*="scrollToTop"]',
    function (e) {
      // 如果已經在首頁，平滑滾動到頂部
      if (
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/"
      ) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollToTop();
      }
    }
  );

  // 統一的滾動監聽 - 只註冊一次，使用節流提升性能
  $(window).off("scroll.main"); // 移除之前的事件
  $(window).on("scroll.main", function () {
    if (scrollThrottleTimer) return;

    scrollThrottleTimer = setTimeout(() => {
      handleScroll();
      scrollThrottleTimer = null;
    }, 16); // ~60fps
  });

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
    // 特殊處理需要HTML的元素
    const htmlElements = [
      '[data-i18n="main.intro"]',
      '[data-i18n="header.tagline"]',
    ];

    htmlElements.forEach((selector) => {
      const element = $(selector);
      if (element.length) {
        const key = element.attr("data-i18n");
        if (key) {
          const translatedText = i18next.t(key);
          element.html(translatedText);
          console.log(`🔧 HTML處理: ${key} = ${translatedText}`);
        }
      }
    });

    // 處理其他一般翻譯元素
    $("[data-i18n]").each(function () {
      const $this = $(this);
      const key = $this.attr("data-i18n");

      // 跳過已經處理過的HTML元素
      if (key === "main.intro" || key === "header.tagline") {
        return;
      }

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
        } else {
          $this.text(translatedText);
        }
      }
    });

    // 特別處理 select option 元素
    $("select option[data-i18n]").each(function () {
      const $this = $(this);
      const key = $this.attr("data-i18n");
      if (key) {
        const translatedText = i18next.t(key);
        $this.text(translatedText);
      }
    });
  }

  // 初始化i18next
  i18next.init(
    {
      lng: "en", // 預設語言為英文
      debug: false,
      resources: resources,
      interpolation: {
        escapeValue: false, // 重要：允許 HTML 標籤
      },
    },
    function (err, t) {
      jqueryI18next.init(i18next, $, {
        useOptionsAttr: true,
      });

      // 先進行一般翻譯
      $("body").localize();

      setTimeout(function () {
        // 再進行HTML翻譯處理
        processHTMLTranslations();
        // 強制處理HTML元素
        forceUpdateHTMLElements();
        // 確保排序選單也被翻譯
        updateProjectSortSelect();
        // 設置語言按鈕的初始狀態
        $("#btn-zh")
          .removeClass("btn-outline-secondary")
          .addClass("btn-secondary");
        $("#btn-en")
          .removeClass("btn-secondary")
          .addClass("btn-outline-secondary");

        console.log("🌍 中文初始化完成");
      }, 200); // 延長等待時間
    }
  );

  // 語言切換按鈕
  $("#btn-en").on("click", function () {
    console.log("🌍 切換到英文");
    // 更新按鈕狀態
    $("#btn-en").removeClass("btn-outline-secondary").addClass("btn-secondary");
    $("#btn-zh").removeClass("btn-secondary").addClass("btn-outline-secondary");

    i18next.changeLanguage("en", function () {
      $("body").localize();
      setTimeout(function () {
        processHTMLTranslations();
        // 強制更新HTML元素
        forceUpdateHTMLElements();
        // 強制更新排序選單
        updateProjectSortSelect();
        console.log("✅ 英文切換完成");
      }, 100);
    });
  });

  $("#btn-zh").on("click", function () {
    console.log("🌍 切換到中文");
    // 更新按鈕狀態
    $("#btn-zh").removeClass("btn-outline-secondary").addClass("btn-secondary");
    $("#btn-en").removeClass("btn-secondary").addClass("btn-outline-secondary");

    i18next.changeLanguage("zh", function () {
      $("body").localize();
      setTimeout(function () {
        processHTMLTranslations();
        // 強制更新HTML元素
        forceUpdateHTMLElements();
        // 強制更新排序選單
        updateProjectSortSelect();
        console.log("✅ 中文切換完成");
      }, 100);
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

  // ========================================
  // 3.5. Seminar 功能初始化 - 新增
  // ========================================
  initSeminarFeatures();

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
  // 4. 課程功能初始化 - 新增
  // ========================================

  // 初始化課程學期切換功能
  initCourseSemesterSwitching();

  // 初始化課程圖片錯誤處理
  initCourseImageErrorHandling();

  // ========================================
  // 5. 其他功能初始化
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
  // 6. ESG 頁面特定功能
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
  // 7. 專案排序功能初始化
  // ========================================

  // 延遲初始化，確保其他功能先載入
  setTimeout(() => {
    initEnhancedProjectSorting();
    // 再次強制更新HTML元素，確保專案載入後翻譯正確
    setTimeout(() => {
      forceUpdateHTMLElements();
    }, 100);
  }, 300);

  // ========================================
  // 8. 最終初始化
  // ========================================

  // 強制更新專案總數
  setTimeout(function () {
    const actualProjectCount = enhancedProjectsData.length;
    $("#totalProjectCount").text(actualProjectCount);
    console.log("📊 實際專案數量:", actualProjectCount);
  }, 500);

  // 頁面完全載入後的初始化
  $(window).on("load", function () {
    updateNavOnLoad();
    handleScroll(); // 觸發初始滾動檢查
    console.log("✅ 所有功能初始化完成！滾動導覽已啟用！");
  });

  // 立即執行初設置
  updateNavOnLoad();

  console.log("🎉 系統初始化完成！包含課程功能和工作經驗！");
});

// ========================================
// 🎨 進階功能擴展
// ========================================

// 🚀 進階導覽優化
// 更精確的區塊檢測
function getVisibleSection() {
  const sections = $("section[id]");
  let maxVisibleSection = null;
  let maxVisibleArea = 0;

  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const threshold = windowHeight * 0.3; // 30% 可見度閾值

  sections.each(function () {
    const $section = $(this);
    const sectionTop = $section.offset().top;
    const sectionHeight = $section.outerHeight();
    const sectionBottom = sectionTop + sectionHeight;

    // 計算與視窗的交集
    const visibleTop = Math.max(scrollTop, sectionTop);
    const visibleBottom = Math.min(scrollTop + windowHeight, sectionBottom);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

    // 只考慮可見度超過閾值的區塊
    if (visibleHeight > threshold && visibleHeight > maxVisibleArea) {
      maxVisibleArea = visibleHeight;
      maxVisibleSection = $section.attr("id");
    }
  });

  // 如果在頁面最頂部（滾動距離 < 100px），視為首頁
  if (scrollTop < 100) {
    maxVisibleSection = "home";
  }

  return maxVisibleSection;
}

// 快速導覽功能（鍵盤快捷鍵）
$(document).on("keydown", function (e) {
  // 確保不在輸入框中
  if ($("input, textarea").is(":focus")) return;

  const sections = [
    "education",
    "experience", 
    "seminar",
    "certifications",
    "courses",
    "recentworks",
    "school",
  ];
  const currentSection = getCurrentSection();
  const currentIndex = sections.indexOf(currentSection);

  switch (e.keyCode) {
    case 72: // H - Home
      e.preventDefault();
      window.scrollToTop();
      break;

    case 38: // 上箭頭 - 上一個區塊
      if (currentIndex > 0) {
        e.preventDefault();
        const prevSection = sections[currentIndex - 1];
        const target = $(`#${prevSection}`);
        if (target.length) {
          updateNavigation(prevSection);
          smoothScrollTo(target);
        }
      } else if (currentSection !== "home") {
        e.preventDefault();
        window.scrollToTop();
      }
      break;

    case 40: // 下箭頭 - 下一個區塊
      if (currentIndex >= 0 && currentIndex < sections.length - 1) {
        e.preventDefault();
        const nextSection = sections[currentIndex + 1];
        const target = $(`#${nextSection}`);
        if (target.length) {
          updateNavigation(nextSection);
          smoothScrollTo(target);
        }
      } else if (currentSection === "home") {
        e.preventDefault();
        const target = $("#education");
        if (target.length) {
          updateNavigation("education");
          smoothScrollTo(target);
        }
      }
      break;
  }
});

// 頁面可見性 API - 當頁面重新獲得焦點時檢查位置
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    setTimeout(() => {
      handleScroll(); // 重新檢查滾動位置
    }, 100);
  }
});

// 觸控裝置專用：改善移動端的導覽體驗
if ("ontouchstart" in window) {
  let touchStartY = 0;
  let isScrolling = false;

  $(window).on("touchstart", function (e) {
    touchStartY = e.originalEvent.touches[0].clientY;
    isScrolling = false;
  });

  $(window).on("touchmove", function (e) {
    if (!isScrolling) {
      isScrolling = true;
      // 在移動端滾動時減少更新頻率
      if (scrollThrottleTimer) return;
      scrollThrottleTimer = setTimeout(() => {
        handleScroll();
        scrollThrottleTimer = null;
      }, 32); // 移動端使用較低的更新頻率
    }
  });
}

// 頁面載入動畫
$(window).on("load", function () {
  // 為所有section添加載入動畫
  $("section[id]").each(function (index) {
    const $section = $(this);
    $section.css({
      opacity: 0,
      transform: "translateY(20px)",
    });

    setTimeout(() => {
      $section.css({
        opacity: 1,
        transform: "translateY(0)",
        transition: "all 0.6s ease",
      });
    }, index * 100);
  });
});


// 匯出函數供全域使用
window.sortEnhancedProjects = sortEnhancedProjects;
window.enhancedProjectsData = enhancedProjectsData;
window.forceUpdateHTMLElements = forceUpdateHTMLElements; // 供調試使用

console.log("進階導覽功能已啟用！");
console.log("鍵盤快捷鍵：H=首頁, ↑=上一區塊, ↓=下一區塊, P=專案排序");
console.log("課程功能：學期切換、圖片錯誤處理");
console.log("工作經驗：完整翻譯支持，時間軸設計");
console.log(
  "調試提示：如果HTML顯示問題，請在控制台執行 forceUpdateHTMLElements()"
);
console.log("完整版 main.js 載入完成！約 2500+ 行代碼！包含工作經驗功能");