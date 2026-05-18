export interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  date: string;
  text: string;
  avatarUrl?: string;
  linkedinUrl?: string;
}

export const references: Reference[] = [
  {
    id: 'ref-emilie-naples',
    name: 'Emilie Naples',
    title: 'Business Analyst | Product & Data Analytics | ex-NASA JPL',
    company: 'LIXIL',
    relationship: 'Colleagues on different teams at LIXIL',
    date: 'March 2026',
    text: 'Brent is a pleasure to work with. His diligence, friendliness, and expertise in Product Quality Control and Quality Assurance have made him one of my most helpful colleagues. Brent is a valuable asset to any team and always gave me a hand during my role as Product Data Analyst. Not only was Brent an excellent Test Leader for his own team, he was always able to assist other teams as well. Specifically, I would often come to him with questions about our products and even data location to assist me during my own Analytics role. Even for questions not pertaining to Brent\'s role as Test Leader, he would always have the answers or help me find them. He is an extremely knowledgeable team leader and an example to other employees. For top-tier Quality Assurance and Quality Control, I wholeheartedly recommend Brent Lichtenberg.',
    linkedinUrl: 'https://www.linkedin.com/in/brentlichtenberg/',
  },
  {
    id: 'ref-todd-banhidy',
    name: 'Todd Banhidy',
    title: 'Leader, LIXIL Automated Business Systems',
    company: 'LIXIL',
    relationship: 'Senior colleague at LIXIL',
    date: 'March 2026',
    text: 'During his time with us, Brent was a cornerstone of our quality assurance efforts. As a leader in our Quality Control division, he not only delivered meticulous, high-quality code reviews but also effectively managed and supported his team. Brent is what I would describe as \'steady as a clock\'—an incredibly reliable professional with an honorable, dedicated work ethic. He earned the deep respect of both our internal colleagues and our external partners through his polite demeanor and consistent, positive contributions. Any organization looking for a dependable, high-character QC professional would be incredibly lucky to have Brent on their team.',
    linkedinUrl: 'https://www.linkedin.com/in/brentlichtenberg/',
  },
];
