export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'isrd-qc-lead',
    role: 'Product QC Lead',
    company: 'ISRD Systems LLC',
    location: 'Remote',
    startDate: 'Feb 2023',
    endDate: 'Mar 2026',
    summary: 'Built and led QA from the ground up for a web/mobile product serving a billion-dollar client — from solo specialist to acting QA Manager.',
    description: `Joined as the first QC team member during the project's preliminary phase and was promoted to Product QC Lead after year one.

• Test Planning — Built and owned QA strategy as acting QA Manager: defined test plans, quality gates, release criteria, defect severity standards, and QA methodologies across web and mobile products.
• Automation — Developed and maintained Selenium WebDriver automation in Node.js for build verification and regression testing, increasing repeatable coverage and reducing manual load.
• API Testing — Used Postman for API validation to surface integration defects earlier in the delivery cycle; integrated monitoring platforms for continuous API health.
• Release Management — Served as release manager for cross-team initiatives, coordinating internal teams, vendors, and client stakeholders through UAT; used defect tracking systems to prioritize and resolve critical issues.
• Systems Testing — Led design and development of the staging environment, enabling validation with emulated enterprise data flows (Lead Perfection, Lowe's, HDConnect, SAP) and performance testing under load.
• Security Testing — Owned annual penetration testing with Ubuntu, OWASP ZAP, and TruffleHog; integrated findings into CI/CD pipelines for continuous compliance. Achieved SOC compliance.
• AI/ML Innovation — Supported a generative LLM initiative projected to save up to 15 hours per feature request; ensured veracity of training materials.
• SME — Functioned as product SME for leadership and client demos including C-level audiences, translating QA risk into business impact.

Late-tenure bonus: transitioned into a concurrent Product Sourcing & Logistics role (Nov 2025–Mar 2026) as SME for a new project, defining Jira acceptance criteria, designing workflows/SOPs, and managing vendor relationships in SAP Ariba.`,
    tags: ['QA Strategy', 'Selenium', 'Node.js', 'Postman', 'CI/CD', 'Security Testing', 'SOC Compliance', 'Agile', 'AI/ML'],
  },
  {
    id: 'apple-test-engineer',
    role: 'Test Engineer III',
    company: 'Apple',
    location: 'Remote',
    startDate: 'Oct 2021',
    endDate: 'Mar 2022',
    summary: 'Planned and executed rapid data collection and qualitative analysis for AI/ML visual model and neural design efforts.',
    description: `Embedded with a data science team supporting visual AI/ML model development.

• Led a team in rapid data collection for AI/ML visual recognition models — scouting locations, setting up scenarios with distance marks, and solving real-time field issues (device overheating, data loss).
• Solved a critical device overheating problem (that was causing unacceptable data loss) by sourcing a compatible 3P cooling solution that eliminated ALL data loss.
• Parsed and uploaded collected data to S3; configured and ran annotation jobs using an internal tooling platform.
• Provided annotation guidance to the team and acted as liaison to the data science team for escalations.
• Contributed product ideas and feedback to the data collection app development team.`,
    tags: ['AI/ML', 'Data Collection', 'Quality Analysis', 'Team Leadership'],
    link: 'https://www.apple.com',
  },
  {
    id: 'techquity-qc',
    role: 'Product QC',
    company: 'Techquity',
    location: 'Remote',
    startDate: 'Nov 2016',
    endDate: '2021',
    summary: 'Performed QC for customer-facing website flows including Stripe payments and checkout reliability.',
    description: `Responsible for end-to-end quality control across customer-facing web product flows.

• Tested critical payment and checkout flows powered by Stripe, ensuring reliability and accuracy of financial transactions.
• Validated end-to-end user journeys for customer-facing web properties.
• Collaborated with development and product teams to identify, document, and resolve defects.`,
    tags: ['Web QC', 'Stripe', 'E-commerce', 'Manual Testing'],
  },
  {
    id: 'amazon-test-manager',
    role: 'Test Manager',
    company: 'Amazon',
    location: 'Seattle, WA',
    startDate: 'Oct 2014',
    endDate: 'Nov 2016',
    summary: 'Supported Alexa shopping quality by training and validating NLU/NLM behavior for conversational commerce — including leading the Prime Day 2017 team to exceed time goals by 85%.',
    description: `Managed quality for Alexa's voice shopping AI, working cross-functionally with three teams.

• Validated NLU/NLM (Natural Language Understanding/Modeling) behavior for conversational commerce use cases.
• Served as project manager for Alexa Voice Shopping Deals — selected targeted keywords, organized and executed the test/verification process, and established a weekly cadence that improved team efficiency.
• Prime Day 2017: scaled the workload from ~15–20 products/week to ~125 product promos/week for 4 weeks leading up to Prime Day. The team exceeded all time goals by 85%.
• "This project has been the highlight of my career thus far — I learned a great deal and the results were overwhelmingly positive."`,
    tags: ['Test Management', 'NLU/NLM', 'Alexa', 'Voice AI', 'Project Management'],
    link: 'https://www.amazon.com',
  },
  {
    id: 'microsoft-test-lead',
    role: 'Test Lead',
    company: 'Microsoft Xbox P&R',
    location: 'Redmond, WA',
    startDate: 'Oct 2014',
    endDate: 'May 2016',
    summary: 'Led daily sign-off testing and pre-release hardware validation for Xbox quality and release-readiness.',
    description: `Responsible for daily quality sign-off and pre-release validation on Xbox hardware and software.

• Led daily sign-off testing to ensure release-readiness across Xbox software and hardware.
• Performed pre-release hardware validation to verify quality standards before product releases.
• Collaborated with engineering and product teams to identify and resolve critical defects before they reached consumers.`,
    tags: ['Hardware Testing', 'Sign-off Testing', 'Console QA', 'Release Validation'],
    link: 'https://www.xbox.com',
  },
];
