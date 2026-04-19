export type Language = "en" | "zh";

export interface TranslationKeys {
    // ── Navbar ──────────────────────────────────────────────────────────
    nav_about: string;
    nav_team: string;
    nav_team_current: string;
    nav_team_legacy_2025: string;
    nav_team_legacy_2024: string;
    nav_projects: string;
    nav_blog: string;
    nav_contact: string;
    nav_join_us: string;
    nav_lang_toggle: string;
    nav_events: string;

    // ── Footer ──────────────────────────────────────────────────────────
    footer_tagline: string;
    footer_organization: string;
    footer_about_us: string;
    footer_our_team: string;
    footer_projects: string;
    footer_community: string;
    footer_blog: string;
    footer_contact: string;
    footer_donate: string;
    footer_social: string;
    footer_email_us: string;
    footer_copyright: string;

    // ── Home Page ────────────────────────────────────────────────────────
    home_hero_badge: string;
    home_hero_badge_link: string;
    home_hero_title: string;
    home_hero_description: string;
    home_hero_cta_primary: string;
    home_hero_cta_secondary: string;
    home_partners_heading: string;
    home_values_label: string;
    home_values_title: string;
    home_values_description: string;
    home_value1_title: string;
    home_value1_desc: string;
    home_value2_title: string;
    home_value2_desc: string;
    home_value3_title: string;
    home_value3_desc: string;
    home_value4_title: string;
    home_value4_desc: string;
    home_initiative_heading: string;
    home_initiative_subtitle: string;
    home_initiative_feature_title: string;
    home_initiative_feature_desc: string;
    home_initiative_feature_btn: string;

    // ── About Page ───────────────────────────────────────────────────────
    about_title: string;
    about_description: string;
    about_quote: string;
    about_quote_author: string;
    about_quote_role: string;
    about_body: string;
    about_pillar1_title: string;
    about_pillar1_desc: string;
    about_pillar2_title: string;
    about_pillar2_desc: string;
    about_pillar3_title: string;
    about_pillar3_desc: string;

    // ── Projects Page ────────────────────────────────────────────────────
    projects_title: string;
    projects_description: string;
    projects_filter_all: string;
    projects_filter_environment: string;
    projects_filter_elderly: string;
    projects_filter_arts: string;
    projects_filter_education: string;
    projects_sample_title: string;
    projects_sample_desc: string;
    projects_sample_category: string;
    projects_no_image: string;
    projects_search_placeholder: string;
    projects_no_results: string;

    // ── Team Page ────────────────────────────────────────────────────────
    team_title: string;
    team_description: string;
    team_image_na: string;

    // ── Blog Page ────────────────────────────────────────────────────────
    blog_title: string;
    blog_description: string;
    blog_tag_news: string;
    blog_empty_title: string;
    blog_empty_subtitle: string;
    blog_back: string;

    // ── Contact Page ─────────────────────────────────────────────────────
    contact_title: string;
    contact_description: string;
    contact_label_name: string;
    contact_placeholder_name: string;
    contact_label_email: string;
    contact_placeholder_email: string;
    contact_label_message: string;
    contact_placeholder_message: string;
    contact_submit: string;
    contact_success_title: string;
    contact_success_desc: string;

    // ── Navbar extras ────────────────────────────────────────────────────
    nav_focus: string;
    nav_impact: string;
    nav_join: string;

    // ── Events Page ──────────────────────────────────────────────────────
    events_title: string;
    events_description: string;
    events_calendar_label: string;
    events_calendar_placeholder: string;

    // ── Annual Focus Page ────────────────────────────────────────────────
    focus_page_label: string;
    focus_page_title: string;
    focus_page_subtitle: string;
    focus_current_badge: string;
    focus_issue_context: string;
    focus_our_response: string;
    focus_view_projects: string;
    focus_archive_title: string;
    focus_archive_subtitle: string;
    focus_see_all: string;
    focus_projects_this_year: string;

    // ── Impact Dashboard ─────────────────────────────────────────────────
    impact_section_label: string;
    impact_section_title: string;
    impact_section_subtitle: string;
    impact_stat1_number: string;
    impact_stat1_label: string;
    impact_stat2_number: string;
    impact_stat2_label: string;
    impact_stat3_number: string;
    impact_stat3_label: string;
    impact_stat4_number: string;
    impact_stat4_label: string;
    impact_cta: string;

    // ── Join / Apply Page ────────────────────────────────────────────────
    join_title: string;
    join_description: string;
    join_label_name: string;
    join_placeholder_name: string;
    join_label_email: string;
    join_placeholder_email: string;
    join_label_school: string;
    join_placeholder_school: string;
    join_label_grade: string;
    join_placeholder_grade: string;
    join_label_role: string;
    join_placeholder_role: string;
    join_label_skills: string;
    join_placeholder_skills: string;
    join_label_motivation: string;
    join_placeholder_motivation: string;
    join_label_availability: string;
    join_availability_parttime: string;
    join_availability_fulltime: string;
    join_availability_events: string;
    join_submit: string;
    join_success_title: string;
    join_success_desc: string;
    join_perks_title: string;
    join_perk1_title: string;
    join_perk1_desc: string;
    join_perk2_title: string;
    join_perk2_desc: string;
    join_perk3_title: string;
    join_perk3_desc: string;
}

export const translations: Record<Language, TranslationKeys> = {
    en: {
        // Navbar
        nav_about: "About",
        nav_team: "Team",
        nav_team_current: "Current Team Members",
        nav_team_legacy_2025: "Legacy (2025-2026)",
        nav_team_legacy_2024: "Legacy (2024-2025)",
        nav_projects: "Projects",
        nav_blog: "Blog",
        nav_contact: "Contact",
        nav_join_us: "Join Us",
        nav_lang_toggle: "中文",
        nav_events: "Events",

        // Footer
        footer_tagline: "Empowering students to create real-world impact through innovation and community service.",
        footer_organization: "Organization",
        footer_about_us: "About Us",
        footer_our_team: "Our Team",
        footer_projects: "Projects",
        footer_community: "Community",
        footer_blog: "Blog",
        footer_contact: "Contact",
        footer_donate: "Donate",
        footer_social: "Social",
        footer_email_us: "Email Us",
        footer_copyright: "Taiwan Teen Trust. All rights reserved.",

        // Home
        home_hero_badge: "Latest Initiative",
        home_hero_badge_link: "Learn more",
        home_hero_title: "Empowering Youth to Shape the Future",
        home_hero_description: "We are a student-led nonprofit organization in Taiwan dedicated to creating meaningful social and environmental impact through youth-driven projects and community partnerships.",
        home_hero_cta_primary: "Our Projects",
        home_hero_cta_secondary: "Learn More",
        home_partners_heading: "Trusted by schools and organizations across Taiwan",
        home_values_label: "Our Values",
        home_values_title: "Built on trust, driven by purpose",
        home_values_description: "Everything we do is guided by a commitment to integrity, collaboration, and real-world impact for the communities we serve.",
        home_value1_title: "Environmental Stewardship",
        home_value1_desc: "We champion sustainability by designing and executing projects that protect and restore Taiwan's natural ecosystems.",
        home_value2_title: "Community Partnership",
        home_value2_desc: "We build lasting relationships with schools, NGOs, and local businesses to amplify our collective impact.",
        home_value3_title: "Ethical Accountability",
        home_value3_desc: "We operate with full transparency, ensuring every initiative is responsibly managed and community-approved.",
        home_value4_title: "Mission-Driven Action",
        home_value4_desc: "Every project we undertake is tied directly to measurable goals that serve our mission and the people around us.",
        home_initiative_heading: "Latest Initiative",
        home_initiative_subtitle: "Explore our most recent project and see how Taiwan's youth are making a difference.",
        home_initiative_feature_title: "Urban Canopy Restoration",
        home_initiative_feature_desc: "Our flagship initiative focuses on restoring urban green coverage in Taipei's densest districts by partnering with local governments and schools to plant thousands of native trees and cultivate ecological awareness in students.",
        home_initiative_feature_btn: "View Project",

        // About
        about_title: "Our Mission",
        about_description: "Taiwan Teen Trust is a student-led nonprofit dedicated to empowering young people to become agents of positive change. We bridge the gap between ambition and action by providing youth with the resources, mentorship, and platform they need to tackle real-world challenges.",
        about_quote: "\"Young people don't just inherit the world — they have the power to reshape it. Every initiative we launch is a testament to what students can achieve when given the right support.\"",
        about_quote_author: "Founding Member",
        about_quote_role: "Taiwan Teen Trust",
        about_body: "Since our founding, we have partnered with schools, nonprofits, and community organizations across Taiwan to run initiatives that address urgent social and environmental needs. Our model is entirely student-led: youth propose, plan, and execute every project under adult mentorship.",
        about_pillar1_title: "Student-Led Governance",
        about_pillar1_desc: "Every decision at Taiwan Teen Trust is made by students. Our board, committees, and project teams are entirely youth-operated, ensuring the organization truly reflects the voice of young Taiwan.",
        about_pillar2_title: "Action-Oriented Execution",
        about_pillar2_desc: "We move from idea to implementation quickly. Students don't just talk about change — they build it, measure it, and share the results with the community.",
        about_pillar3_title: "Decentralized Inclusion",
        about_pillar3_desc: "We actively recruit members from schools across every county in Taiwan, ensuring our work reflects the diversity and breadth of the island's youth population.",

        // Projects
        projects_title: "Our Initiatives",
        projects_description: "Explore the projects driven by Taiwan Teen Trust members — from environmental restoration to elder care, arts, and education.",
        projects_filter_all: "All",
        projects_filter_environment: "Environment",
        projects_filter_elderly: "Elderly Care",
        projects_filter_arts: "Arts & Culture",
        projects_filter_education: "Education",
        projects_sample_title: "Interactive Sample Project Demo",
        projects_sample_desc: "This is a sample project card. Connect your Sanity CMS to display real projects from your team.",
        projects_sample_category: "Sample Category",
        projects_no_image: "No image provided",
        projects_search_placeholder: "Search projects...",
        projects_no_results: "No projects match your search.",

        // Team
        team_title: "Executive Team Members",
        team_description: "Meet the student leaders driving Taiwan Teen Trust's mission forward.",
        team_image_na: "Image N/A",

        // Blog
        blog_title: "Insights & Updates",
        blog_description: "Read the latest news, reflections, and announcements from the Taiwan Teen Trust community.",
        blog_tag_news: "News",
        blog_empty_title: "No posts yet.",
        blog_empty_subtitle: "Check back soon for updates from our team.",
        blog_back: "Back to Blog",

        // Contact
        contact_title: "General Inquiries",
        contact_description: "Have a question, partnership proposal, or just want to learn more? Fill in the form below and our team will respond within two business days.",
        contact_label_name: "Full Name",
        contact_placeholder_name: "Your full name",
        contact_label_email: "Official Email Address",
        contact_placeholder_email: "you@example.com",
        contact_label_message: "Detailed Message",
        contact_placeholder_message: "Tell us how we can help or collaborate...",
        contact_submit: "Submit Inquiry",
        contact_success_title: "Inquiry Received",
        contact_success_desc: "Thank you for reaching out. Our team will review your message and get back to you within two business days.",

        // Navbar extras
        nav_focus: "Annual Focus",
        nav_impact: "Our Impact",
        nav_join: "Apply",

        // Events
        events_title: "Upcoming Events",
        events_description: "Stay up to date with Taiwan Teen Trust's workshops, campaigns, and community events.",
        events_calendar_label: "TTT Events Calendar",
        events_calendar_placeholder: "Add your Google Calendar embed URL in src/app/events/page.tsx to display the calendar here.",

        // Annual Focus
        focus_page_label: "Each Year, One Issue",
        focus_page_title: "Annual Social Focus",
        focus_page_subtitle: "Every year, Taiwan Teen Trust selects a pressing social issue and dedicates the full year's efforts to understanding and addressing it through student-led projects.",
        focus_current_badge: "Current Focus",
        focus_issue_context: "Why This Issue?",
        focus_our_response: "Our Response",
        focus_view_projects: "View Projects",
        focus_archive_title: "Previous Focus Years",
        focus_archive_subtitle: "Explore the social issues we've tackled in past years and the impact we created.",
        focus_see_all: "See All Projects",
        focus_projects_this_year: "Projects This Year",

        // Impact Dashboard
        impact_section_label: "Our Impact",
        impact_section_title: "Numbers that tell the story",
        impact_section_subtitle: "Across every project we run, real students create real change in communities across Taiwan.",
        impact_stat1_number: "500+",
        impact_stat1_label: "Student Members",
        impact_stat2_number: "12,000+",
        impact_stat2_label: "Volunteer Hours",
        impact_stat3_number: "30+",
        impact_stat3_label: "Projects Completed",
        impact_stat4_number: "20+",
        impact_stat4_label: "Communities Reached",
        impact_cta: "See Full Impact",

        // Join / Apply
        join_title: "Join Taiwan Teen Trust",
        join_description: "We are always looking for passionate, driven students from schools across Taiwan. Fill out this application and our team will reach out within 5 business days.",
        join_label_name: "Full Name",
        join_placeholder_name: "Your full name",
        join_label_email: "Student Email",
        join_placeholder_email: "you@school.edu.tw",
        join_label_school: "School / Institution",
        join_placeholder_school: "e.g. Taipei Municipal Jianguo High School",
        join_label_grade: "Current Grade / Year",
        join_placeholder_grade: "e.g. Grade 10",
        join_label_role: "Preferred Role",
        join_placeholder_role: "e.g. Project Manager, Designer, Researcher...",
        join_label_skills: "Key Skills",
        join_placeholder_skills: "e.g. Photography, Data Analysis, Public Speaking...",
        join_label_motivation: "Why do you want to join TTT?",
        join_placeholder_motivation: "Tell us what drives you and how you'd contribute...",
        join_label_availability: "Availability",
        join_availability_parttime: "Part-time (weekends only)",
        join_availability_fulltime: "Full commitment",
        join_availability_events: "Events & campaigns only",
        join_submit: "Submit Application",
        join_success_title: "Application Received!",
        join_success_desc: "Thank you for applying. Our team will review your application and reach out within 5 business days.",
        join_perks_title: "What You'll Gain",
        join_perk1_title: "Real-World Experience",
        join_perk1_desc: "Lead or contribute to projects that create measurable impact in Taiwanese communities.",
        join_perk2_title: "Network & Mentorship",
        join_perk2_desc: "Connect with like-minded peers and receive guidance from experienced advisors and alumni.",
        join_perk3_title: "Recognition & Portfolio",
        join_perk3_desc: "Earn official TTT certifications and build a portfolio that stands out for university applications.",
    },

    zh: {
        // Navbar
        nav_about: "關於我們",
        nav_team: "團隊",
        nav_team_current: "現任團隊成員",
        nav_team_legacy_2025: "往屆成員 (2025-2026)",
        nav_team_legacy_2024: "往屆成員 (2024-2025)",
        nav_projects: "計畫專案",
        nav_blog: "部落格",
        nav_contact: "聯絡我們",
        nav_join_us: "加入我們",
        nav_lang_toggle: "EN",
        nav_events: "活動行事曆",

        // Footer
        footer_tagline: "賦予學生能力，透過創新與社區服務創造真實影響力。",
        footer_organization: "組織",
        footer_about_us: "關於我們",
        footer_our_team: "我們的團隊",
        footer_projects: "計畫專案",
        footer_community: "社群",
        footer_blog: "部落格",
        footer_contact: "聯絡我們",
        footer_donate: "捐款支持",
        footer_social: "社群媒體",
        footer_email_us: "電子郵件",
        footer_copyright: "台灣青少年信託基金會。版權所有。",

        // Home
        home_hero_badge: "最新計畫",
        home_hero_badge_link: "了解更多",
        home_hero_title: "賦予青年力量，共塑美好未來",
        home_hero_description: "我們是台灣一個由學生主導的非營利組織，致力於透過青年驅動的計畫與社區夥伴關係，創造有意義的社會與環境影響。",
        home_hero_cta_primary: "我們的計畫",
        home_hero_cta_secondary: "了解更多",
        home_partners_heading: "獲得台灣各地學校與機構的信賴",
        home_values_label: "我們的價值觀",
        home_values_title: "以信任為基，以使命為驅",
        home_values_description: "我們所做的一切，都以誠信、合作以及對社區的真實影響為指導原則。",
        home_value1_title: "環境管理責任",
        home_value1_desc: "我們積極推動永續發展，設計並執行保護與恢復台灣自然生態的計畫。",
        home_value2_title: "社區夥伴合作",
        home_value2_desc: "我們與學校、非政府組織及在地企業建立長久關係，共同放大集體影響力。",
        home_value3_title: "倫理問責透明",
        home_value3_desc: "我們以完全透明的方式運作，確保每項計畫都負責任地管理，並獲得社區認可。",
        home_value4_title: "使命導向行動",
        home_value4_desc: "我們承接的每個計畫，都直接與可量化的目標掛鉤，服務我們的使命與周遭的人們。",
        home_initiative_heading: "最新計畫",
        home_initiative_subtitle: "探索我們最新的計畫，見證台灣青年如何帶來改變。",
        home_initiative_feature_title: "城市林蔭復育計畫",
        home_initiative_feature_desc: "我們的旗艦計畫聚焦於恢復台北最密集地區的城市綠化覆蓋率，透過與地方政府及學校合作，種植數千棵原生樹木，並培育學生的生態意識。",
        home_initiative_feature_btn: "查看計畫",

        // About
        about_title: "我們的使命",
        about_description: "台灣青少年信託是一個由學生主導的非營利組織，致力於賦予年輕人成為正向改變推動者的能力。我們透過資源、指導與平台，彌合理想與行動之間的鴻溝，協助青年應對真實世界的挑戰。",
        about_quote: "「年輕人不只是繼承這個世界——他們擁有重塑它的力量。我們發起的每一項計畫，都是學生在獲得適當支持後所能達成成就的見證。」",
        about_quote_author: "創始成員",
        about_quote_role: "台灣青少年信託",
        about_body: "自成立以來，我們與台灣各地的學校、非營利組織及社區機構建立夥伴關係，推動解決緊迫社會與環境需求的計畫。我們的模式完全由學生主導：青年在成人指導下提出、規劃並執行每個計畫。",
        about_pillar1_title: "學生主導治理",
        about_pillar1_desc: "台灣青少年信託的每個決策都由學生做出。我們的董事會、各委員會及計畫團隊完全由青年運作，確保組織真正反映台灣年輕世代的聲音。",
        about_pillar2_title: "行動導向執行",
        about_pillar2_desc: "我們從想法到實踐的速度很快。學生不只談論改變——他們建構它、衡量它，並將成果與社區分享。",
        about_pillar3_title: "去中心化包容",
        about_pillar3_desc: "我們積極從台灣各縣市的學校招募成員，確保我們的工作能夠反映全島青年族群的多元性與廣度。",

        // Projects
        projects_title: "我們的計畫",
        projects_description: "探索由台灣青少年信託成員推動的各項計畫——從環境復育到長者照護、藝術文化與教育。",
        projects_filter_all: "全部",
        projects_filter_environment: "環境",
        projects_filter_elderly: "長者照護",
        projects_filter_arts: "藝術與文化",
        projects_filter_education: "教育",
        projects_sample_title: "互動示範計畫",
        projects_sample_desc: "這是一個示範計畫卡片。連接您的 Sanity CMS 以顯示團隊的真實計畫。",
        projects_sample_category: "示範類別",
        projects_no_image: "未提供圖片",
        projects_search_placeholder: "搜尋計畫...",
        projects_no_results: "沒有符合搜尋條件的計畫。",

        // Team
        team_title: "執行團隊成員",
        team_description: "認識推動台灣青少年信託使命的學生領袖們。",
        team_image_na: "暫無圖片",

        // Blog
        blog_title: "洞察與最新消息",
        blog_description: "閱讀台灣青少年信託社群的最新消息、心得反思與公告。",
        blog_tag_news: "消息",
        blog_empty_title: "尚無文章。",
        blog_empty_subtitle: "請稍後回來查看我們團隊的最新動態。",
        blog_back: "返回部落格",

        // Contact
        contact_title: "一般詢問",
        contact_description: "有問題、合作提案，或只是想了解更多？填寫下方表格，我們的團隊將在兩個工作天內回覆。",
        contact_label_name: "全名",
        contact_placeholder_name: "您的全名",
        contact_label_email: "官方電子郵件地址",
        contact_placeholder_email: "you@example.com",
        contact_label_message: "詳細訊息",
        contact_placeholder_message: "請告訴我們我們能如何提供協助或合作……",
        contact_submit: "提交詢問",
        contact_success_title: "詢問已收到",
        contact_success_desc: "感謝您的來信。我們的團隊將審閱您的訊息，並在兩個工作天內回覆您。",

        // Navbar extras
        nav_focus: "年度焦點",
        nav_impact: "我們的影響",
        nav_join: "申請加入",

        // Events
        events_title: "即將舉辦的活動",
        events_description: "了解台灣青少年信託的工作坊、活動與社區事件最新消息。",
        events_calendar_label: "TTT 活動行事曆",
        events_calendar_placeholder: "在 src/app/events/page.tsx 中加入您的 Google 日曆嵌入網址，以在此顯示行事曆。",

        // Annual Focus
        focus_page_label: "每年一個議題",
        focus_page_title: "年度社會焦點",
        focus_page_subtitle: "每一年，台灣青少年信託選定一個迫切的社會議題，並將全年的努力投入到透過學生主導的計畫來理解並回應它。",
        focus_current_badge: "本年度焦點",
        focus_issue_context: "為何關注此議題？",
        focus_our_response: "我們的回應",
        focus_view_projects: "查看計畫",
        focus_archive_title: "往年焦點議題",
        focus_archive_subtitle: "探索我們過去幾年聚焦的社會議題，以及我們所創造的影響。",
        focus_see_all: "查看所有計畫",
        focus_projects_this_year: "本年度計畫",

        // Impact Dashboard
        impact_section_label: "我們的影響力",
        impact_section_title: "用數字說故事",
        impact_section_subtitle: "在我們推動的每個計畫中，真實的學生在台灣各地的社區創造真實的改變。",
        impact_stat1_number: "500+",
        impact_stat1_label: "學生成員",
        impact_stat2_number: "12,000+",
        impact_stat2_label: "志願服務小時",
        impact_stat3_number: "30+",
        impact_stat3_label: "已完成計畫",
        impact_stat4_number: "20+",
        impact_stat4_label: "服務社區數量",
        impact_cta: "查看完整影響報告",

        // Join / Apply
        join_title: "加入台灣青少年信託",
        join_description: "我們始終歡迎來自台灣各地學校、充滿熱情與行動力的學生。填寫此申請表，我們的團隊將在五個工作天內與您聯繫。",
        join_label_name: "全名",
        join_placeholder_name: "您的全名",
        join_label_email: "學生電子郵件",
        join_placeholder_email: "you@school.edu.tw",
        join_label_school: "學校 / 機構",
        join_placeholder_school: "例：台北市立建國高級中學",
        join_label_grade: "目前年級",
        join_placeholder_grade: "例：高一",
        join_label_role: "希望擔任角色",
        join_placeholder_role: "例：專案經理、設計師、研究員……",
        join_label_skills: "核心技能",
        join_placeholder_skills: "例：攝影、數據分析、公開演講……",
        join_label_motivation: "您為何想加入 TTT？",
        join_placeholder_motivation: "告訴我們是什麼驅動著您，以及您將如何貢獻……",
        join_label_availability: "參與時間",
        join_availability_parttime: "兼職（僅週末）",
        join_availability_fulltime: "全力投入",
        join_availability_events: "僅活動與行銷",
        join_submit: "提交申請",
        join_success_title: "申請已收到！",
        join_success_desc: "感謝您的申請。我們的團隊將審閱您的資料，並在五個工作天內與您聯繫。",
        join_perks_title: "您將獲得什麼",
        join_perk1_title: "真實世界的經驗",
        join_perk1_desc: "主導或參與能在台灣社區創造可量化影響的計畫。",
        join_perk2_title: "人脈與導師指導",
        join_perk2_desc: "與志同道合的同儕連結，並獲得資深顧問與校友的指導。",
        join_perk3_title: "認可與作品集",
        join_perk3_desc: "獲得官方 TTT 認證，建立在大學申請中脫穎而出的作品集。",
    },
};
