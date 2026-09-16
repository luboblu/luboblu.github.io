(() => {
  const english = new Map(Object.entries({
    "跳至計畫內容": "Skip to project content",
    "返回計畫總覽": "Back to Projects",
    "計畫概覽": "Overview",
    "課程設計": "Curriculum",
    "應用場域": "Applications",
    "預期成果": "Outcomes",
    "教育部人工智慧跨域共創與實踐應用課程 · 115 年計畫": "MOE AI Cross-Domain Co-Creation and Applied Practice Program · 2026",
    "AI 跨域共創": "AI Cross-Domain Co-Creation",
    "AI 跨域共創 × 社會福祉服務": "AI Cross-Domain Co-Creation for Social Well-Being",
    "社會福祉服務": "for Social Well-Being",
    "代理式 AI 創新應用與人工智慧課程": "Agentic AI Innovative Applications and Artificial Intelligence",
    "讓技術走出教室，讓需求走進設計。以資管的 AI 實作能力，結合社工的場域理解，共創回應真實社會服務需求的 AI 原型。": "Bringing technology beyond the classroom and real needs into design. Information management expertise and social-work insight come together to build AI prototypes for real social-service challenges.",
    "探索三大場域 ↗": "Explore the Three Fields ↗",
    "查看課程規劃 ↓": "View the Curriculum ↓",
    "規劃期程 2026.09.01 — 2027.08.31": "Planned Period 2026.09.01 — 2027.08.31",
    "資訊管理": "Information Management",
    "AI 技術與系統實作": "AI Technology & System Development",
    "社會工作": "Social Work",
    "需求定義與服務設計": "Needs Definition & Service Design",
    "需求 → 共創 → 驗證": "Needs → Co-Creation → Validation",
    "設計思考 · 跨域協作 · 人機協作": "Design Thinking · Cross-Disciplinary Collaboration · Human-AI Teaming",
    "早期療育": "Early Intervention",
    "兒童福利": "Child Welfare",
    "新住民服務": "New Immigrant Services",
    "從兩門課程，走向三個真實場域。": "Two courses. Three real-world service settings.",
    "以真實需求為起點，培育跨域 AI 實踐人才": "Developing Cross-Disciplinary AI Practitioners from Real Needs",
    "本計畫為電資領域・資訊管理端，與社會工作學系的應用領域計畫共同規劃。兩端共用真實場域、跨域學生與設計思考方法，串連需求評估、技術轉譯、原型開發及場域驗證。": "This EECS-domain initiative is jointly designed by Information Management and Social Work. Both sides share real service settings, interdisciplinary student teams, and design-thinking methods across needs assessment, technical translation, prototyping, and field validation.",
    "資管端 EMI 課程": "IM Graduate EMI Courses",
    "規劃合作場域": "Planned Partner Settings",
    "預期課程總時數": "Expected Course Hours",
    "預期 AI 原型": "Expected AI Prototypes",
    "電資領域 · 技術實現": "EECS Domain · Technical Delivery",
    "國立臺北大學資訊管理研究所": "Graduate Institute of Information Management, NTPU",
    "計畫主持人：戴敏育教授": "Principal Investigator: Prof. Min-Yuh Day",
    "建立代理式 AI、RAG、工具編排、機器學習與資料分析能力，由資管碩士生擔任技術主責，完成系統整合與可量化驗收。": "Develop capabilities in agentic AI, RAG, tool orchestration, machine learning, and data analytics. Graduate IM students serve as technical leads for system integration and measurable validation.",
    "應用領域 · 場域共創": "Application Domain · Field Co-Creation",
    "國立臺北大學社會工作學系": "Department of Social Work, NTPU",
    "合作計畫主持人：林予安助理教授": "Partner Project Lead: Asst. Prof. Yu-An Lin",
    "結合研究法、方案設計與評估，負責需求定義、服務設計、倫理把關與成效評估，讓原型回應第一線實務問題。": "Combine research methods, program design, and evaluation to define needs, design services, safeguard ethics, and assess impact so prototypes address frontline practice.",
    "從代理式 AI 基礎，走向跨域專題實作": "From Agentic AI Foundations to Cross-Disciplinary Practice",
    "115-1 · 前導課程 · 碩士 EMI": "Fall 2026 · Foundation Course · Graduate EMI",
    "代理式 AI 創新應用": "Agentic AI Innovative Applications",
    "LLM 推理、提示工程與 Context Engineering": "LLM reasoning, prompt engineering, and context engineering",
    "代理記憶、向量資料庫與 RAG": "Agent memory, vector databases, and RAG",
    "工具使用、函數呼叫與 MCP": "Tool use, function calling, and MCP",
    "多代理協作、LangGraph 與 Human-in-the-Loop": "Multi-agent collaboration, LangGraph, and human-in-the-loop",
    "階段交付：需求轉譯、技術可行性、代理架構與原型規格。": "Stage deliverables: needs translation, technical feasibility, agent architecture, and prototype specifications.",
    "115-2 · 專題課程 · 碩士 EMI": "Spring 2027 · Capstone Course · Graduate EMI",
    "人工智慧": "Artificial Intelligence",
    "機器學習、深度學習與自然語言處理": "Machine learning, deep learning, and natural language processing",
    "實體解析、資料分析與成效儀表板": "Entity resolution, data analytics, and impact dashboards",
    "模型評估、多語品質與 AI 倫理": "Model evaluation, multilingual quality, and AI ethics",
    "與社工「方案設計與評估」跨班混合分組": "Mixed teams with Social Work's Program Design and Evaluation course",
    "階段交付：可運作 AI 原型、英文技術文件與場域驗證。": "Stage deliverables: working AI prototypes, English technical documentation, and field validation.",
    "共創流程圖": "Co-Creation Process",
    "社工理解人的需求，資管把需求轉為可用的系統": "Social Work Understands People; Information Management Turns Needs into Systems",
    "兩條專業路徑先共同定義問題，再協作設計、開發與驗證。": "Two professional pathways jointly define the problem, then design, develop, and validate together.",
    "社工端 · 人本洞見": "Social Work · Human Insight",
    "同理探索與需求訪談": "Empathic Exploration & Needs Interviews",
    "理解服務對象、情境與實務限制": "Understand service users, context, and practical constraints",
    "資管端 · 資料與系統洞見": "Information Management · Data & System Insight",
    "資料盤點與技術分析": "Data Inventory & Technical Analysis",
    "確認資料條件與技術可行性": "Assess data conditions and technical feasibility",
    "共同界定三場域核心問題": "Jointly Define Core Problems in Three Settings",
    "把「服務需要什麼」轉成「系統需要做到什麼」": "Translate service needs into system requirements",
    "社工端": "Social Work",
    "發想設計與服務方案": "Ideation & Service Design",
    "定義服務流程、倫理界線與評估方式": "Define service flows, ethical boundaries, and evaluation methods",
    "資管端": "Information Management",
    "架構開發與 AI 原型": "Architecture Development & AI Prototypes",
    "實作 RAG、工具串接與人機協作流程": "Implement RAG, tool integration, and human-AI workflows",
    "共同原型 → 場域驗證 → 回饋迭代": "Joint Prototype → Field Validation → Feedback Iteration",
    "服務方案與技術系統一起驗證，依場域回饋修正。": "Validate the service plan and technical system together, then refine them through field feedback.",
    "依計畫書圖 1「四鑽石（人本 × 資料 × 系統）混合模式」重整；原書第 10 頁。此圖呈現分工與匯流，非原圖的完整方法論圖示。": "Adapted from Figure 1, the Four-Diamond hybrid model (human × data × systems), on page 10 of the proposal. This simplified diagram highlights role division and convergence.",
    "前導教學與需求評估": "Foundation Learning & Needs Assessment",
    "雙師備課與跨域分組": "Co-Teaching Preparation & Team Formation",
    "原型開發與場域驗證": "Prototype Development & Field Validation",
    "成果發表與教材彙整": "Showcase & Teaching Materials",
    "三個場域，三種服務需求": "Three Settings, Three Service Needs",
    "由第一線場域業師與跨域學生共同界定問題，再選擇合適的技術與驗證方式。": "Frontline field mentors and interdisciplinary students define each problem together, then select suitable technology and validation methods.",
    "連江縣早期療育": "Lienchiang County Early Intervention",
    "社區資源中心": "Community Resource Center",
    "迭代既有早療 LINE bot，由關鍵字查詢進化為意圖辨識、RAG 問答與多輪澄清；遇到不適合自動回應的情境，轉由真人接手。": "Upgrade the existing LINE bot from keyword lookup to intent recognition, RAG-based Q&A, and multi-turn clarification, with human handoff when automation is inappropriate.",
    "意圖辨識": "Intent Recognition",
    "人機雙軌": "Human-AI Routing",
    "財團法人中華民國": "Child Welfare League Foundation",
    "兒童福利聯盟基金會": "R.O.C.",
    "規劃捐款人單一識別與跨系統串接，建立 NPO AI 使用規範紅黃綠燈判別小工具，並以儀表板呈現服務與資料分析成效。": "Plan donor entity resolution and cross-system integration, build a traffic-light NPO AI governance tool, and visualize service and analytical outcomes through dashboards.",
    "實體解析": "Entity Resolution",
    "AI 治理": "AI Governance",
    "BI 儀表板": "BI Dashboard",
    "社團法人台灣": "Taiwan New Immigrant Family",
    "新住民家庭成長協會": "Development Association",
    "規劃支援越南語與印尼語的多語言 LINE bot，結合場域知識檢索、多語生成品質評估與偏誤檢核，降低語言造成的服務門檻。": "Plan a multilingual LINE bot for Vietnamese and Indonesian, combining field knowledge retrieval, multilingual quality evaluation, and bias checks to reduce language barriers.",
    "多語 NLP": "Multilingual NLP",
    "越南語": "Vietnamese",
    "印尼語": "Indonesian",
    "AT A GLANCE / 從問題到交付": "AT A GLANCE / FROM PROBLEM TO DELIVERY",
    "這個計畫，最後要做出什麼？": "What Will This Project Deliver?",
    "不是三個一樣的聊天機器人，而是依服務需求分工開發，再整合交付的場域方案。": "The goal is not three identical chatbots, but field solutions developed by service need and integrated for delivery.",
    "三場域需求與預期交付對照": "Comparison of Needs and Expected Deliverables",
    "場域": "Setting",
    "要解決的問題": "Problem",
    "規劃交付": "Planned Deliverable",
    "驗證重點": "Validation Focus",
    "馬祖早療中心": "Matsu Early Intervention Center",
    "既有關鍵字問答難以理解不同問法，也需要清楚的真人轉接機制。": "The keyword-based Q&A cannot understand varied phrasing and needs a clear human handoff mechanism.",
    "升級既有 LINE bot：意圖辨識、RAG 知識庫、多輪澄清與人機雙軌。": "Upgrade the LINE bot with intent recognition, a RAG knowledge base, multi-turn clarification, and human-AI routing.",
    "對照上線前基準，追蹤週問答成功率、轉真人率與使用量。": "Compare against the pre-launch baseline and track weekly answer success, human-handoff rate, and usage.",
    "兒福聯盟": "Child Welfare League Foundation",
    "同一捐款人的資料分散在不同系統；AI 使用需要治理規範。": "A single donor's records are fragmented across systems, while AI use requires governance rules.",
    "捐款人單一識別、NPO AI 紅黃綠燈判別工具、成效儀表板。": "Donor entity resolution, an NPO AI traffic-light decision tool, and an impact dashboard.",
    "單一識別與跨系統資料整合、規範判別及儀表板功能驗證。": "Validate entity resolution, cross-system integration, governance classification, and dashboard functions.",
    "新住民家庭成長協會": "New Immigrant Family Development Association",
    "語言差異形成資訊取得門檻，多語回覆也需要品質與文化把關。": "Language differences limit access to information, and multilingual replies require quality and cultural safeguards.",
    "越南語、印尼語 LINE bot，從中文場域知識庫檢索後以使用者語言回覆。": "Vietnamese and Indonesian LINE bots that retrieve from a Chinese field knowledge base and reply in the user's language.",
    "多語生成品質、偏誤檢核與母語覆核；敏感情境轉真人。": "Evaluate multilingual quality and bias, require native-speaker review, and route sensitive cases to people.",
    "依計畫書第 7、12–13 頁整理；以上為規劃內容與驗證方向。": "Summarized from pages 7 and 12–13 of the proposal; these are planned deliverables and validation directions.",
    "8 組原型，整合為場域交付": "Eight Prototype Teams, Integrated into Field Deliverables",
    "規劃由早療 3 組、新住民 2 組、兒福聯盟 3 組分工；每組由資管碩士生擔任 AI Lead，與社工學生協作，期末由各組技術主責整合為各場域的單一交付版本。": "Three teams focus on early intervention, two on new immigrant services, and three on child welfare. An IM graduate student serves as AI Lead in each team and collaborates with social-work students; technical leads integrate the modules into one deliverable per field setting.",
    "讓 AI 的回答有依據，讓服務保有人類判斷": "Ground AI Answers in Evidence and Keep Human Judgment in Service",
    "使用者訊息": "User Message",
    "意圖辨識與澄清": "Intent Recognition & Clarification",
    "語意護欄與 RAG 檢索": "Semantic Guardrails & RAG Retrieval",
    "雙門檻：服務敏感度 × 系統信心": "Dual Threshold: Service Sensitivity × System Confidence",
    "有沒有能力回答，與適不適合由 AI 回答，是兩個不同的判斷。": "Whether AI can answer and whether AI should answer are two separate decisions.",
    "綠燈 · AI 回答": "Green · AI Response",
    "例行、低敏感且有依據": "Routine, Low-Sensitivity, and Grounded",
    "「中心週六有開放嗎？」": "“Is the center open on Saturday?”",
    "知識庫有對應資料時，由 AI 附來源回覆。": "When the knowledge base contains supporting information, AI replies with sources.",
    "黃燈 · 專業覆核": "Amber · Professional Review",
    "需要專業判斷的建議": "Advice Requiring Professional Judgment",
    "涉及個案發展判斷的詢問": "A question involving individual developmental assessment",
    "AI 僅提供草稿，須經專業人員確認後才能送出。": "AI provides a draft only; a professional must approve it before delivery.",
    "紅燈 · 真人接手": "Red · Human Handoff",
    "高敏感或危機情境": "High-Sensitivity or Crisis Situation",
    "訊息透露家暴、自傷等風險": "The message indicates domestic violence, self-harm, or similar risks",
    "保留由人處理，依危機協定轉介；不能因系統信心高就自動回答。": "Keep the case with people and follow crisis referral protocols; high system confidence must not trigger an automatic response.",
    "找不到可靠資料，也要轉真人。": "If Reliable Evidence Is Missing, Hand Off to a Person.",
    "低敏感問題若檢索依據不足，不讓 AI 猜答案。門檻由黃金測試集、RAGAS 離線評估與轉真人率持續校準。": "Even low-sensitivity questions are handed off when retrieval evidence is insufficient. Thresholds are calibrated using golden test sets, offline RAGAS evaluation, and human-handoff rates.",
    "依計畫書圖 3 與第 12–14 頁治理原則重整；範例用於說明規劃中的服務分流，不是已上線的判別功能。": "Adapted from Figure 3 and the governance principles on pages 12–14 of the proposal. Examples illustrate the planned service-routing logic, not a deployed decision function.",
    "知識檢索與代理協作": "Knowledge Retrieval & Agent Collaboration",
    "以 RAG 為問答引擎，結合工具呼叫、MCP 與多代理工作流程；透過意圖辨識與多輪對話澄清需求。": "Use RAG as the Q&A engine with tool calling, MCP, and multi-agent workflows; clarify needs through intent recognition and multi-turn dialogue.",
    "資料治理與人機協作": "Data Governance & Human-AI Collaboration",
    "規劃場域內知識庫與本地向量化，LLM 推論以校內部署為原則；雲端 API 的檢索片段須先去識別化與遮罩，並建立人工轉接機制。": "Plan in-field knowledge bases and local vectorization, with campus-hosted LLM inference as the default. Retrieval snippets sent to cloud APIs must first be de-identified and masked, with human handoff built in.",
    "可量化的品質驗收": "Measurable Quality Validation",
    "以黃金測試集及 RAGAS 進行離線評估，觀察檢索相關度、接地性、答案正確性與轉真人率；線上依檢索相似度及語意護欄判斷轉接。": "Use golden test sets and RAGAS for offline evaluation of retrieval relevance, groundedness, answer correctness, and human-handoff rates; online routing follows retrieval similarity and semantic guardrails.",
    "從課堂學習，累積可交付的實踐成果": "Turn Classroom Learning into Deliverable Practice",
    "以下為申請書所列預期目標，並非已完成成果。": "The following are expected targets in the proposal, not completed outcomes.",
    "原型與技術交付": "Prototype & Technical Delivery",
    "8 件 AI 原型，每組 1 件": "8 AI prototypes, one per team",
    "至少 3 件亮點專題": "At least 3 featured projects",
    "至少 3 套技術文件與開源原型": "At least 3 technical-documentation and open-source prototype packages",
    "教學資源與人才培育": "Teaching Resources & Talent Development",
    "2 冊教案手冊": "2 teaching manuals",
    "碩士修課生約 15–16 人": "Approximately 15–16 graduate students",
    "跨域合開規模約 55–61 人": "Approximately 55–61 students in the joint interdisciplinary course",
    "NVIDIA DLI 證書取得率目標 ≥80%": "Target NVIDIA DLI certificate completion rate ≥80%",
    "場域參與與成果擴散": "Field Participation & Dissemination",
    "3 家合作場域": "3 partner field organizations",
    "每組至少 1 次場域見習，含視訊": "At least 1 field visit per team, including virtual visits",
    "定期跨域工作坊與業師交流": "Regular interdisciplinary workshops and mentor exchanges",
    "成果發表、教材與原型分享": "Showcases and sharing of teaching materials and prototypes",
    "內容依據：115 年「人工智慧跨域共創與實踐應用課程」計畫申請書（資管端）。本頁呈現申請規劃，實際執行內容依核定與課程安排調整。": "Source: 2026 application for the AI Cross-Domain Co-Creation and Applied Practice Program (Information Management). This page presents the proposal; actual implementation is subject to approval and course arrangements.",
    "國立臺北大學 · 資訊管理研究所 × 社會工作學系": "National Taipei University · Information Management × Social Work",
    "← 返回計畫總覽": "← Back to Projects",
    "回到頂端 ↑": "Back to Top ↑",
    "左右滑動查看完整對照表 →": "Swipe horizontally to view the full comparison →"
  }));

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement.closest('script, style')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const key = node.nodeValue.trim();
    if (!english.has(key)) continue;
    const prefix = node.nodeValue.match(/^\s*/)[0];
    const suffix = node.nodeValue.match(/\s*$/)[0];
    textNodes.push({ node, zh: node.nodeValue, en: `${prefix}${english.get(key)}${suffix}` });
  }

  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const menuButton = document.querySelector('.menu-toggle');
  let currentLanguage = 'zh';

  window.updateMenuLabel = (open) => {
    menuButton.setAttribute('aria-label', currentLanguage === 'en'
      ? (open ? 'Close navigation menu' : 'Open navigation menu')
      : (open ? '關閉導覽選單' : '開啟導覽選單'));
  };

  function setLanguage(language) {
    currentLanguage = language === 'en' ? 'en' : 'zh';
    textNodes.forEach((item) => { item.node.nodeValue = item[currentLanguage]; });
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-Hant';
    document.title = currentLanguage === 'en'
      ? 'AI Cross-Domain Co-Creation for Social Well-Being | NTPU AITCP'
      : 'AI 跨域共創 × 社會福祉服務 | NTPU AITCP';
    document.querySelector('meta[name="description"]').content = currentLanguage === 'en'
      ? 'An NTPU cross-disciplinary curriculum connecting agentic AI, RAG, and multilingual services with three real social-service settings.'
      : '國立臺北大學資管所與社工系跨域課程計畫，以代理式 AI、RAG 與多語言服務串連早療、兒福與新住民三個社會服務場域。';
    document.querySelector('.nav').setAttribute('aria-label', currentLanguage === 'en' ? 'Page navigation' : '頁面導覽');
    document.querySelector('.language-switcher').setAttribute('aria-label', currentLanguage === 'en' ? 'Language selection' : '語言選擇');
    document.querySelector('.hero-map').setAttribute('aria-label', currentLanguage === 'en' ? 'Cross-domain co-creation framework for information management and social work' : '資管與社工跨域共創架構');
    document.querySelector('.comparison').setAttribute('aria-label', currentLanguage === 'en' ? 'Comparison of deliverables across three settings' : '三場域交付成果比較');
    languageButtons.forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('active', active);
    });
    localStorage.setItem('siteLanguage', currentLanguage);
    window.updateMenuLabel(menuButton.getAttribute('aria-expanded') === 'true');
  }

  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  setLanguage(localStorage.getItem('siteLanguage') || 'zh');
})();
