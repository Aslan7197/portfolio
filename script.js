// ── Navbar: shadow on scroll + active section highlighting ──
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar ul li a');
const sections = document.querySelectorAll('section[id], #hero');

window.addEventListener('scroll', () => {
  // Shadow
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ── Language switcher ──
const translations = {
  ko: {
    research_bullet_5: "수정 워크플로·모델·계산 예산을 선택하는 예측 기반 라우팅을 연구했습니다. Gemma 4 12B, Devstral Small 2 24B, Qwen3.8-27B로 15개 저장소의 버그 733개, 구성 27종을 평가했습니다.",
    pub8_title: "RAG와 테스트-메소드 매핑을 통한 LLM 기반 프로그램 정정 향상",
    pub8_venue: "정보처리학회 논문지, Vol. 15, No. 1, pp. 61–69",
    pub8_chip_1: "제1저자",
    pub9_title: "LLM과 복합 목표를 사용한 효과적인 테스트 생성",
    pub9_venue: "한국소프트웨어종합학술대회 (KSC 2025), pp. 417–419",
    pub9_chip_1: "공저자",
    pub10_title: "패치 경량화와 문맥 정보를 활용한 프로그램 자동 정정 개선",
    pub10_venue: "정보과학회논문지, Vol. 52, No. 8, pp. 670–676",
    pub10_chip_1: "공저자",
    pub11_title: "LLM의 입력 길이 제한 조건 하에서 패치 경량화와 문맥 활용 기법",
    pub11_venue: "한국컴퓨터종합학술대회 (KCC 2025), pp. 409–411",
    pub11_chip_1: "공저자",
    pub12_title: "패치 피드백과 조합을 활용한 LLM 기반 다중 함수 프로그램 정정",
    pub12_venue: "한국소프트웨어공학학술대회 (KCSE 2025), Vol. 27, No. 1, pp. 15–18",
    pub12_chip_1: "제1저자",
    pub13_title: "LLM 기반 프로그램 자동 정정에서 토큰 길이 문제 처리를 위한 패치 경량화와 복원 활용",
    pub13_venue: "한국소프트웨어종합학술대회 (KSC 2024), pp. 381–383",
    pub13_chip_1: "공저자",
    pub14_title: "자동 프로그램 정정을 위한 LLM 모델의 토큰 길이 제한 해결",
    pub14_venue: "한국컴퓨터종합학술대회 (KCC 2024), pp. 360–362",
    pub14_chip_1: "공저자",
    pub15_title: "멀티 청크 버그 정정을 위한 버기 블록 대상 프로그램 정정 최적화 적용",
    pub15_venue: "정보과학회 컴퓨팅의 실제 논문지, Vol. 29, No. 8, pp. 371–377",
    pub15_chip_1: "공저자",
    pub16_title: "멀티 청크 프로그램 정정을 위한 패치 최적화를 버기 블록에 적용",
    pub16_venue: "한국소프트웨어종합학술대회 (KSC 2022), pp. 274–276",
    pub16_chip_1: "공저자",
    pub17_title: "이슈와 실패 원인 간의 정합성 기반 재현 테스트 생성",
    pub17_venue: "한국컴퓨터종합학술대회 (KCC 2026), pp. 672–674",
    pub17_chip_1: "공저자",
    award4_name: "최우수논문상",
    award4_venue: "KCC 2026 — 한국컴퓨터종합학술대회 (소프트웨어공학)",
    award4_date: "2026년 6월",
    award4_link: "수상 소식 →",

    nav_home: '홈',
    nav_skills: '기술',
    nav_education: '학력',
    nav_experience: '경력',
    nav_awards: '수상',
    nav_projects: '프로젝트',
    nav_publications: '출판',
    nav_contact: '연락처',
    hero_badge: '전문연구요원 지원 가능 / Research Engineer Intern',
    hero_role: 'LLM 시스템 엔지니어 · AI 에이전트 개발 · 코드 인텔리전스',
    hero_desc: '대규모 언어 모델을 활용해 소프트웨어 버그를 자동으로 탐지하고 수정하는 도구를 개발합니다. 멀티 에이전트 수리 시스템, 컨텍스트 기반 패치 생성 및 Defects4J/SWE-Bench 결함 위치 추적에 주력합니다.',
    button_download: '이력서 다운로드',
    button_projects: '프로젝트',
    button_scholar: 'Google Scholar',
    looking_for_heading: '지원 분야',
    looking_for_paragraph_1: '현재 서울시립대학교 소프트웨어공학 박사과정 중이며, 2027년 졸업 예정입니다. 전문연구요원, 연구 엔지니어 인턴, 또는 AI/LLM 엔지니어링 파트타임 직무를 찾고 있습니다.',
    looking_for_paragraph_2: '관심 분야: LLM 응용 엔지니어링, AI 에이전트 시스템, 코드 인텔리전스, 및 자동화된 소프트웨어 분석.',
    looking_for_paragraph_3: '고용 형태: 파트타임 / 전문연구요원 (즉시 가능)',
    education_heading: '학력',
    edu_degree_phd: '소프트웨어공학 박사 과정',
    edu_school_uos: '서울시립대학교',
    edu_note_phd: 'LLM을 이용한 자동 프로그램 수정',
    edu_degree_msc: '소프트웨어공학 석사',
    edu_degree_bs: '정보기술 학사',
    edu_school_nuu: '우즈베키스탄 국립대학교',
    skills_heading: '기술',
    skill_label_languages: '언어',
    skill_label_ai_ml: 'AI / ML',
    skill_label_techniques: '기법',
    skill_label_tools: '도구',
    languages_heading: '언어 능력',
    research_heading: '연구 경력',
    research_title: "대학원 학생연구원",
    research_org: '— 서울시립대학교 소프트웨어공학 연구실',
    research_bullet_1: "GPT-4o 및 로컬 오픈웨이트 모델에 검색 증강 생성(RAG)과 정적 코드 분석을 결합한 소프트웨어 디버깅·자동 수정 도구를 개발했습니다.",
    research_bullet_2: "Defects4J와 SWE-bench Lite에서 Java 버그 365개, Python 버그 87개를 정확히 수정했습니다.",
    research_bullet_3: "실제 GitHub 이슈 300개에서 파일 식별 정확도 74.6%, 코드 요소 식별 정확도 52.3%를 달성했습니다.",
    research_bullet_4: "IEEE Access, JIPS, KIISE 저널 및 국내 소프트웨어공학·컴퓨터 분야 학술대회에 제1저자 및 공저자로 논문을 발표했습니다.",
    awards_heading: '수상',
    award1_name: '우수단편논문상 · Best Short Paper Award',
    award1_venue: 'KCSE 2025 — 한국 소프트웨어공학 학술대회',
    award1_paper: 'LLM 기반 다중 함수 프로그램 정정 (Patch Feedback & Combination)',
    award1_date: '2025년 1월',
    award2_name: '우수발표논문상 · Best Presentation Paper Award',
    award2_venue: 'KCC 2023 — 한국컴퓨터종합학술대회',
    award2_paper: '자동 프로그램 수정에서 멀티 청크 버그를 위한 패치 최적화 개선',
    award2_date: '2023년 7월',
    award3_name: '우수발표논문상 · Best Presentation Paper Award',
    award3_venue: 'KSC 2022 — 한국소프트웨어종합학술대회',
    award3_paper: '멀티 청크 프로그램 수정을 위한 버기 블록 기반 패치 최적화',
    award3_date: '2023년 2월',
    projects_heading: '프로젝트',
    proj1_metric_1: 'Defects4J 버그 수정',
    proj1_metric_2: 'SWE-Bench Lite 버그 수정',
    proj1_metric_3: 'SRepair 대비',
    proj1_metric_4: 'SWE-Bench 수정 비율',
    proj1_architecture: '3-에이전트 LLM 루프 — 컨텍스트 업데이트 → 생성기 → 과적합 탐지기; 모두 GPT-4o',
    proj1_context_tools: 'Coverage Runner · CodeBERT+FAISS 의미 검색 · 코드 추출기 · 호출 그래프 빌더 · 필드 의존성 분석기 · API 사용 탐지기',
    proj1_repair_scope: '단일 메서드 및 다중 메서드(최대 10개)를 테스트 커버리지 중첩 기반 연결 요소로 그룹화하여 처리',
    proj1_java_results: 'Defects4J v1.2 187개 + v2.0 178개 버그; SRepair, ChatRepair, ThinkRepair보다 우수',
    proj1_python_results: 'SWE-Bench Lite 10개 저장소에서 87개 버그 수정: astropy, django, sympy, scikit-learn, matplotlib 등',
    proj2_metric_1: '정확히 수정된 버그',
    proj2_metric_2: '정확한 패치',
    proj2_metric_3: '컴파일 가능한 패치',
    proj2_metric_4: "기존 자동 수정 도구 3종 대비",
    proj2_key_idea: '의존 관계 분석으로 상호 의존 버그 청크를 하나의 "버기 블록"으로 묶고, 통합 표현으로 CodeBERT를 파인튜닝합니다.',
    proj2_mrl: '최소화된 수정 위치 — FAULT_OF_OMISSION 태그가 없는 한 공백/주석/널 라인을 제외하여 패치 검색 노이즈를 줄입니다.',
    proj2_patch_optimization: '(1) 필터: 중복, 문법 오류, 관련 없는 패치 제거 · (2) 순위: 합집합 분모로 적은 편집 동작에 보상 · (3) 결합: 위치별 비례 top-k',
    proj2_bug_taxonomy: 'T1 단일 청크 · T2 단일 청크 다중 위치 · T3 다중 청크 — 시스템은 가장 어려운 T3에 집중합니다.',
    proj2_projects: 'Chart (6) · Closure (21) · Lang (12) · Math (30) · Mockito (6) · Time (4)',
    proj3_metric_1: '파일 경로 정확도',
    proj3_metric_2: '심볼 수준 정확도',
    proj3_metric_3: '이슈당 비용',
    proj3_metric_4: 'Agentless 대비 비용 절감',
    proj3_classification: 'FULL_LOCATION — 직접 AST 인덱스 조회, LLM 없음 (~$0.01) · PARTIAL — 심볼 요약에 대해 1회 LLM 추론 호출 (~$0.04) · HINT — 최대 5회 반복 에이전트 탐색 (~$0.05)',
    proj3_repo_indexing: 'Python ast 모듈로 파일별 전체 심볼 인덱스 구축(함수, 클래스 요소, 모듈 심볼); basename/suffix/module path 3중 파일 해결기 — 임베딩 불필요',
    proj3_partial_handler: '심볼 요약(80줄 발췌 + 추론 호출 그래프) 작성 → GPT-4o가 EDIT_LOCATION / SYMPTOM_ONLY / NOT_RELATED로 분류',
    proj3_hint_handler: '에이전트가 메모리 AST 인덱스를 기반으로 search_class / search_method / search_code를 반복 호출; 발견 순서에 따라 점수가 감소(빠를수록 가중치 높음)',
    proj3_budget: '이슈당 $0.50, 3,000초 하드 제한; 한도 근접 시 선택적 LLM 단계를 비활성화하여 안정적으로 감쇠',
    publications_heading: '출판',
    publications_note: '주저자 및 공저자로 발표한 연구. 2026년 10월 업데이트.',
    publications_lab_link: '연구실 전체 목록 →',
    pub1_title: '에이전트 기반 자동 프로그램 수정을 위한 동적 컨텍스트와 정적 분석 활용',
    pub1_venue: 'IEEE Access, Vol. 14, pp. 71821–71835',
    pub1_chip_1: '제1저자',
    pub1_chip_2: 'Defects4J 365개 + SWE-Bench 87개 버그',
    pub1_chip_3: 'SRepair 대비 +7.5%',
    pub2_title: '이슈 설명과 심볼 수준 타깃팅을 활용한 분류 기반 결함 위치 추적',
    pub2_venue: 'KCSE 2026 — 한국소프트웨어공학학술대회, pp. 183–186',
    pub2_chip_1: '제1저자',
    pub2_chip_2: '파일 경로 정확도 74.6%',
    pub2_chip_3: 'SWE-Bench Lite',
    pub3_title: '복잡한 프로그램 수정을 위한 버기 블록 기반 패치 최적화 개선',
    pub3_venue: 'IEEE Access, Vol. 13, pp. 30420–30443',
    pub3_chip_1: '공저자',
    pub3_chip_2: '79/89 버그 정확히 수정',
    pub3_chip_3: '기준 대비 21–342%',
    pub4_title: '자동 프로그램 수정에서 다중 청크 버그를 위한 개선된 패치 최적화 기법',
    pub4_venue: 'Journal of Information Processing Systems (JIPS), Vol. 20, No. 5, pp. 627–639',
    pub4_chip_1: '제1저자',
    pub4_chip_2: '다중 청크 APR',
    pub5_title: '다중 청크 프로그램 수정에서 패치 최적화 품질 향상',
    pub5_venue: 'KIISE Transactions on Computing Practices, Vol. 30, No. 8, pp. 354–361',
    pub5_chip_1: '제1저자',
    pub6_title: '자동 프로그램 수정에서 다중 청크 버그를 위한 패치 최적화 개선',
    pub6_venue: '한국컴퓨터종합학술대회 (KCC 2023)',
    pub6_chip_1: '제1저자',
    pub7_title: '학습 기반 프로그램 수정을 위한 템플릿 접근법 적용',
    pub7_venue: '한국소프트웨어종합학술대회 (KSC 2023)',
    pub7_chip_1: '제1저자',
    pub_footer_scholar: 'Google Scholar →',
    pub_footer_lab: '연구실 성과 →',
    contact_heading: '연락처',
    contact_email: '이메일',
    contact_phone: '전화',
    contact_portfolio: '포트폴리오',
    contact_telegram: '텔레그램',
    contact_scholar: 'Scholar',
    footer_copyright: '© 2026 Aslan Abdinabiev · 서울, 대한민국',
    footer_download: '이력서 다운로드',
  },
  en: {
    research_bullet_5: "Researched predictive routing to select a repair workflow, model, and compute budget. Evaluated 27 configurations on 733 bugs across 15 repositories using Gemma 4 12B, Devstral Small 2 24B, and Qwen3.8-27B.",
    pub8_title: "Enhancing LLM-driven Program Repair through RAG and Test-Method Mapping",
    pub8_venue: "The Transactions of the Korea Information Processing Society, Vol. 15, No. 1, pp. 61–69",
    pub8_chip_1: "First Author",
    pub9_title: "Effective Test Generation Using LLMs and Composite Objectives",
    pub9_venue: "KSC 2025 — Korean Software Conference, pp. 417–419",
    pub9_chip_1: "Co-Author",
    pub10_title: "Enhancing Automated Program Repair using Patch Lightweighting and Context Information",
    pub10_venue: "Journal of KIISE, Vol. 52, No. 8, pp. 670–676",
    pub10_chip_1: "Co-Author",
    pub11_title: "Patch Lightweighting and Context Utilization under LLM Input Length Constraints",
    pub11_venue: "KCC 2025 — Korean Computer Conference, pp. 409–411",
    pub11_chip_1: "Co-Author",
    pub12_title: "LLM-based Multi-function Program Repair using Patch Feedback and Combination",
    pub12_venue: "KCSE 2025 — Korean Software Engineering Conference, Vol. 27, No. 1, pp. 15–18",
    pub12_chip_1: "First Author",
    pub13_title: "Patch Lightweighting and Restoration for Token Length Limits in LLM-based Automated Program Repair",
    pub13_venue: "KSC 2024 — Korean Software Conference, pp. 381–383",
    pub13_chip_1: "Co-Author",
    pub14_title: "Towards Effectively Resolving Token Length Limits of LLM Models for Automatic Program Repair",
    pub14_venue: "KCC 2024 — Korean Computer Conference, pp. 360–362",
    pub14_chip_1: "Co-Author",
    pub15_title: "Applying Program Repair Optimization to Buggy Blocks for Multi-Chunk Bug Repair",
    pub15_venue: "KIISE Transactions on Computing Practices, Vol. 29, No. 8, pp. 371–377",
    pub15_chip_1: "Co-Author",
    pub16_title: "Applying Patch Optimization to Buggy Blocks for Multi-Chunk Program Repair",
    pub16_venue: "KSC 2022 — Korean Software Conference, pp. 274–276",
    pub16_chip_1: "Co-Author",
    pub17_title: "Reproduction Test Generation Based on Alignment Between Issues and Failure Causes",
    pub17_venue: "KCC 2026 — Korean Computer Conference, pp. 672–674",
    pub17_chip_1: "Co-Author",
    award4_name: "Best Paper Award",
    award4_venue: "KCC 2026 — Korean Computer Conference (Software Engineering)",
    award4_date: "June 2026",
    award4_link: "Award announcement →",

    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_education: 'Education',
    nav_experience: 'Experience',
    nav_awards: 'Awards',
    nav_projects: 'Projects',
    nav_publications: 'Publications',
    nav_contact: 'Contact',
    hero_badge: 'Available for 전문연구요원 / Research Engineer Intern',
    hero_role: 'LLM Systems Engineer · AI Agent Development · Code Intelligence',
    hero_desc: 'Building tools that automatically find and fix software bugs using large language models. Focused on multi-agent repair systems, context-aware patch generation, and fault localization on Defects4J and SWE-Bench.',
    button_download: 'Download CV',
    button_projects: 'Projects',
    button_scholar: 'Google Scholar',
    looking_for_heading: 'Looking For',
    looking_for_paragraph_1: 'Currently a PhD candidate in Software Engineering at the University of Seoul (expected graduation: 2027). Available for 전문연구요원 positions, research engineer internships, or part-time AI/LLM engineering roles.',
    looking_for_paragraph_2: 'Interested in: LLM application engineering, AI agent systems, code intelligence, and automated software analysis.',
    looking_for_paragraph_3: 'Employment type: Part-time / 전문연구요원 (available immediately)',
    education_heading: 'Education',
    edu_degree_phd: 'Ph.D. Software Engineering',
    edu_school_uos: 'University of Seoul',
    edu_note_phd: 'Automated Program Repair via LLMs',
    edu_degree_msc: 'M.Sc. Software Engineering',
    edu_degree_bs: 'B.Sc. Information Technology',
    edu_school_nuu: 'National University of Uzbekistan',
    skills_heading: 'Skills',
    skill_label_languages: 'Languages',
    skill_label_ai_ml: 'AI / ML',
    skill_label_techniques: 'Techniques',
    skill_label_tools: 'Tools',
    languages_heading: 'Languages',
    research_heading: 'Research Experience',
    research_title: "Graduate Student Researcher",
    research_org: '— Software Engineering Lab, University of Seoul',
    research_bullet_1: "Developed software debugging and repair tools using GPT-4o and locally served open-weight models with retrieval-augmented generation (RAG) and static code analysis.",
    research_bullet_2: "Correctly repaired 365 Java bugs and 87 Python bugs on the Defects4J and SWE-bench Lite software-repair benchmarks.",
    research_bullet_3: "Identified the correct file in 74.6% of 300 real GitHub issues and the correct code element in 52.3%.",
    research_bullet_4: "Published first-authored and co-authored work in IEEE Access, JIPS, KIISE journals, and Korean software-engineering and computing conferences.",
    awards_heading: 'Awards',
    award1_name: 'Best Short Paper Award · 우수단편논문상',
    award1_venue: 'KCSE 2025 — Korean Software Engineering Conference',
    award1_paper: 'LLM-based multi-function program repair (Patch Feedback & Combination)',
    award1_date: 'January 2025',
    award2_name: 'Best Presentation Paper Award · 우수발표논문상',
    award2_venue: 'KCC 2023 — Korean Computer Conference',
    award2_paper: 'Improving patch optimization for multi-chunk bugs in automated program repair',
    award2_date: 'July 2023',
    award3_name: 'Best Presentation Paper Award · 우수발표논문상',
    award3_venue: 'KSC 2022 — Korean Software Conference',
    award3_paper: 'Applying buggy block for patch optimization in multi-chunk program repair',
    award3_date: 'February 2023',
    projects_heading: 'Projects',
    proj1_metric_1: 'Defects4J bugs fixed',
    proj1_metric_2: 'SWE-Bench Lite bugs fixed',
    proj1_metric_3: 'over SRepair (prior SOTA)',
    proj1_metric_4: 'SWE-Bench fix rate',
    proj1_architecture: '3-agent LLM loop — Context Updater (T=0.2) → Generator (T=0.7) → Overfitting Detector (T=0.3); all GPT-4o',
    proj1_context_tools: 'Coverage Runner · CodeBERT+FAISS Semantic Search · Code Extractor · Call Graph Builder · Field Dependency Analyzer · API Usage Finder',
    proj1_repair_scope: 'Single methods + multi-method (up to 10 functions) via connected component grouping by test coverage overlap',
    proj1_java_results: '187 bugs on Defects4J v1.2 + 178 on v2.0; outperforms SRepair, ChatRepair, ThinkRepair',
    proj1_python_results: '87 bugs on SWE-Bench Lite across 10 repos: astropy, django, sympy, scikit-learn, matplotlib, and 5 others',
    proj2_metric_1: 'bugs correctly fixed',
    proj2_metric_2: 'correct patches found',
    proj2_metric_3: 'compilable patches',
    proj2_metric_4: "over three reference repair tools",
    proj2_key_idea: 'Binds inter-dependent buggy chunks into one "Buggy Block" via method (M) and field (F) dependency analysis, then fine-tunes CodeBERT on the unified representation.',
    proj2_mrl: 'Minimized Repaired Locations — excludes blank/comment/null lines unless tagged FAULT_OF_OMISSION, reducing noise in the patch search space.',
    proj2_patch_optimization: '(1) Filter: removes duplicates, syntax errors, and unrelated patches · (2) Rank: rewards fewer edit actions using union denominator · (3) Combine: proportional top-k across locations',
    proj2_bug_taxonomy: 'T1 single-chunk · T2 single-chunk multi-location · T3 multi-chunk — system specifically targets T3 (hardest category).',
    proj2_projects: 'Chart (6) · Closure (21) · Lang (12) · Math (30) · Mockito (6) · Time (4)',
    proj3_metric_1: 'file-path accuracy',
    proj3_metric_2: 'symbol-level accuracy',
    proj3_metric_3: 'cost per issue',
    proj3_metric_4: 'cheaper than Agentless',
    proj3_classification: 'FULL_LOCATION — direct AST index lookup, no LLM (~$0.01) · PARTIAL — one LLM reasoning call on symbol summaries (~$0.04) · HINT — iterative agent search up to 5 rounds (~$0.05)',
    proj3_repo_indexing: 'Python ast module builds full symbol index per file (functions, class elements, module symbols); 3-map file resolver (basename/suffix/module path) — no embeddings needed',
    proj3_partial_handler: 'Constructs symbol summaries (80-line excerpt + inferred call graph) → GPT-4o labels each EDIT_LOCATION / SYMPTOM_ONLY / NOT_RELATED',
    proj3_hint_handler: 'Agent iterates over search_class / search_method / search_code APIs backed by in-memory AST index; file scores decay by discovery iteration (earlier = higher weight)',
    proj3_budget: 'Hard limits of $0.50/issue and 3,000 s; gracefully degrades by disabling optional LLM steps as limits approach',
    publications_heading: 'Publications',
    publications_note: 'First-authored and co-authored works. Updated October 2026.',
    publications_lab_link: 'Full lab list →',
    pub1_title: 'Utilizing Dynamic Context and Static Analysis for Agent-Based Automated Program Repair',
    pub1_venue: 'IEEE Access, Vol. 14, pp. 71821–71835',
    pub1_chip_1: 'First Author',
    pub1_chip_2: '365 Defects4J + 87 SWE-Bench bugs',
    pub1_chip_3: '+7.5% over SRepair',
    pub2_title: 'Classification-Based Fault Localization Using Issue Descriptions and Symbol-Level Targeting',
    pub2_venue: 'KCSE 2026 — Korean Software Engineering Conference, pp. 183–186',
    pub2_chip_1: 'First Author',
    pub2_chip_2: '74.6% file-path accuracy',
    pub2_chip_3: 'SWE-Bench Lite',
    pub3_title: 'Improving Patch Optimization with Buggy Block for Complex Program Repair',
    pub3_venue: 'IEEE Access, Vol. 13, pp. 30420–30443',
    pub3_chip_1: 'Co-Author',
    pub3_chip_2: '79/89 bugs correctly repaired',
    pub3_chip_3: '21–342% over baselines',
    pub4_title: 'An Enhanced Patch Optimization Technique for Multi-Chunk Bugs in Automated Program Repair',
    pub4_venue: 'Journal of Information Processing Systems (JIPS), Vol. 20, No. 5, pp. 627–639',
    pub4_chip_1: 'First Author',
    pub4_chip_2: 'Multi-chunk APR',
    pub5_title: 'Improving Patch Optimization Quality in Multi-Chunk Program Repair',
    pub5_venue: 'KIISE Transactions on Computing Practices, Vol. 30, No. 8, pp. 354–361',
    pub5_chip_1: 'First Author',
    pub6_title: 'Improving Patch Optimization for Multi-Chunk Bugs in Automated Program Repair',
    pub6_venue: 'KCC 2023 — Korean Computer Conference',
    pub6_chip_1: 'First Author',
    pub7_title: 'Applying Template Approach to Learning based Program Repair',
    pub7_venue: 'KSC 2023 — Korean Software Conference',
    pub7_chip_1: 'First Author',
    pub_footer_scholar: 'Google Scholar →',
    pub_footer_lab: 'Lab achievements →',
    contact_heading: 'Contact',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_portfolio: 'Portfolio',
    contact_telegram: 'Telegram',
    contact_scholar: 'Scholar',
    footer_copyright: '© 2026 Aslan Abdinabiev · Seoul, Korea',
    footer_download: 'Download CV',
  }
};

const i18nElements = document.querySelectorAll('[data-i18n]');
const langButtons = document.querySelectorAll('.lang-btn');

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolioLang', lang);
  i18nElements.forEach(el => {
    const key = el.dataset.i18n;
    if (key && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
};

const initializeLanguage = () => {
  const storedLang = localStorage.getItem('portfolioLang');
  setLanguage(storedLang === 'en' ? 'en' : 'ko');
};

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

window.addEventListener('load', initializeLanguage);

// ── Animated stat counters (fires once when strip enters viewport) ──
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current < target) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statNumbers.forEach(animateCounter);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);
