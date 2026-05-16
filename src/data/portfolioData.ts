export const personalInfo = {
  name: 'AN NGUYEN',
  title: 'Data Analyst',
  tagline: 'Decoding data. Delivering direction.',
  email: 'thaian201001@gmail.com',
  linkedin: 'https://linkedin.com/in/chonthaiannguyen',
  github: 'https://github.com/ThaiAnNguyen',
  location: 'Ho Chi Minh City, Vietnam',
  phone: '(+84) 948-305-658',
  about: `I am a dedicated Data Analyst based in Ho Chi Minh City, passionate about transforming raw data into meaningful stories that drive business growth. With a strong foundation in SQL, Python, and modern BI tools, I specialize in building robust data pipelines and interactive visualizations that empower stakeholders.

Currently, I split my time between delivering high-impact analytics at Jung Talents and empowering the next generation of data professionals at Job Ready Master. I thrive on solving complex problems through data cleaning, statistical analysis, and automated workflows.`,
  stats: [
    { label: 'Dashboards Built', value: '10+' },
    { label: 'Students Trained', value: '200+' },
    { label: 'Mentees Guided', value: '50+' },
    { label: 'Certifications', value: '5+' },
  ],
  coreStrengths: [
    'Data Storytelling',
    'Business Intelligence',
    'ETL Pipelines',
    'Statistical Analysis',
    'Dashboard Design',
    'Mentoring Analysts'
  ]
};

export const experience = [
  {
    id: 1,
    role: 'Data Analyst',
    company: 'Jung Talents',
    period: 'Aug 2024 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Lead analyst focusing on improving stakeholder visibility and data reliability through modern analytics architecture.',
    achievements: [
      'Built and maintained 10+ interactive dashboards in Power BI, Excel, and Tableau across e-learning, payroll, and finance.',
      'Designed SQL-based data pipelines using Medallion Architecture (Bronze, Silver, Gold layers).',
      'Developed automated Power Query workflows that reduced manual reporting preparation time by 30%.',
      'Partnered directly with clients to define KPIs and deliver weekly/monthly business review reporting.',
    ],
    tech: ['Power BI', 'SQL', 'Python', 'Tableau', 'Excel', 'Medallion Architecture'],
  },
  {
    id: 2,
    role: 'Data Trainer (Part-time)',
    company: 'Job Ready Master',
    period: 'Aug 2024 – Present',
    location: 'Sydney, Australia (Remote)',
    description: 'Mentoring and training the next generation of data analysts in end-to-end data workflows.',
    achievements: [
      'Delivered hands-on training for 200+ students covering SQL, Power BI, Python, Tableau, and Machine Learning.',
      'Mentored 50+ trainees who successfully secured job offers through comprehensive resume reviews and mock interviews.',
      'Developed practical learning materials and real-world case studies for technical skill development.',
      'Provided one-on-one coaching and feedback tailored to individual learning needs.',
    ],
    tech: ['SQL', 'Power BI', 'Python', 'Tableau', 'Machine Learning', 'AI Integration'],
  },
];

export const skills = [
  { name: 'SQL', level: 80, icon: 'database', color: '#4FC3F7', rarity: 'epic' },
  { name: 'Python', level: 70, icon: 'code', color: '#50C878', rarity: 'rare' },
  { name: 'Power BI', level: 90, icon: 'bar-chart-2', color: '#FFD700', rarity: 'epic' },
  { name: 'Excel', level: 80, icon: 'table', color: '#50C878', rarity: 'uncommon' },
  { name: 'Tableau', level: 70, icon: 'pie-chart', color: '#FF8C42', rarity: 'rare' },
  { name: 'Machine Learning', level: 70, icon: 'cpu', color: '#4FC3F7', rarity: 'rare' },
  { name: 'n8n / Automation', level: 80, icon: 'git-branch', color: '#FF5722', rarity: 'rare' },
  { name: 'Agentic AI', level: 80, icon: 'zap', color: '#E91E63', rarity: 'epic' },
];

export type ProjectRarity = 'common' | 'uncommon' | 'rare' | 'epic';

export const projects = [
  {
    id: 1,
    title: 'Medallion Data Pipeline',
    description: 'Implementation of a Bronze, Silver, and Gold layer data architecture using SQL and Python for reliable enterprise reporting.',
    tools: ['SQL', 'Medallion Architecture', 'Python'],
    category: 'SQL',
    rarity: 'epic' as ProjectRarity,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 2,
    title: 'Financial Performance Dashboard',
    description: 'Comprehensive Power BI solution tracking payroll and finance metrics for stakeholder business reviews.',
    tools: ['Power BI', 'DAX', 'Power Query'],
    category: 'Power BI',
    rarity: 'epic' as ProjectRarity,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 3,
    title: 'E-Learning Visibility Tool',
    description: 'Interactive reporting system built to track student progress and engagement metrics in real-time.',
    tools: ['Power BI', 'Excel', 'Data Modeling'],
    category: 'Power BI',
    rarity: 'rare' as ProjectRarity,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 4,
    title: 'Automated KPI Tracker',
    description: 'Reduced manual reporting time by 30% through automated Power Query workflows and DAX optimization.',
    tools: ['Power BI', 'DAX', 'Power Query'],
    category: 'Power BI',
    rarity: 'rare' as ProjectRarity,
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 5,
    title: 'Sales Performance Analytics',
    description: 'Tableau dashboard focused on regional sales trends and outlier detection for retail operations.',
    tools: ['Tableau', 'SQL', 'EDA'],
    category: 'Tableau',
    rarity: 'uncommon' as ProjectRarity,
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 6,
    title: 'Customer Behavior Storyboard',
    description: 'Tableau data story mapping the customer journey and identifying key conversion drivers.',
    tools: ['Tableau', 'Python', 'Statistical Analysis'],
    category: 'Tableau',
    rarity: 'uncommon' as ProjectRarity,
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 7,
    title: 'EDA & Outlier Detection',
    description: 'Python-based exploratory data analysis tool to clean and validate large datasets for reporting accuracy.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    category: 'Python',
    rarity: 'rare' as ProjectRarity,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
  {
    id: 8,
    title: 'AI Workflow Integration',
    description: 'Automated data workflows using n8n and Agentic AI to streamline data ingestion and analysis tasks.',
    tools: ['Python', 'n8n', 'Agentic AI'],
    category: 'Python',
    rarity: 'epic' as ProjectRarity,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/ThaiAnNguyen',
    demo: '',
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Power BI Data Analyst Associate (PL-300)',
    organization: 'Microsoft',
    date: 'Certified',
    badge: 'PL-300',
    rarity: 'epic',
    color: '#FFD700',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/AnNguyen2001/1F0DE2C6B3689F9D'
  },
  {
    id: 2,
    name: 'Fabric Data Engineer Associate (DP-700)',
    organization: 'Microsoft',
    date: 'Certified',
    badge: 'DP-700',
    rarity: 'epic',
    color: '#FFD700',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/annguyen2010/A253A1BD6EDE98A2'
  },
  {
    id: 3,
    name: 'Fabric Analytics Engineer Associate (DP-600)',
    organization: 'Microsoft',
    date: 'Certified',
    badge: 'DP-600',
    rarity: 'epic',
    color: '#FFD700',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/AnNguyen2001/664EAE13F7DA3A99'
  },
  {
    id: 4,
    name: 'Oracle Analytics Cloud 2025 Certified Professional',
    organization: 'Oracle',
    date: 'Certified',
    badge: 'OCP',
    rarity: 'rare',
    color: '#4FC3F7',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E02B57C887984757002AFD4A597BBD5650121547A55565F3312085071F986676'
  },
  {
    id: 5,
    name: 'Google Data Analytics Professional Certificate',
    organization: 'Google / Coursera',
    date: 'Certified',
    badge: 'GDA',
    rarity: 'rare',
    color: '#4FC3F7',
    url: 'https://coursera.org/verify/professional-cert/X7U3WDY65VXG'
  }
];
