
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const SOCIAL_LINKS = [
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/norah-phindile-lebese-4793b0379/', label: 'LinkedIn' },
  { icon: 'github', href: 'https://github.com/PHINDILE1996', label: 'GitHub' },
  { icon: 'email', href: 'mailto:lebesephindile46@gmail.com', label: 'Email' },
  { icon: 'phone', href: 'tel:0631337955', label: 'Phone' }
];

export const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export const ABOUT_STATS = [
  { number: '3+', label: 'Years Experience', icon: 'calendar' },
  { number: '15+', label: 'Certifications', icon: 'award' },
  { number: '5+', label: 'Projects Completed', icon: 'folder' },
  { number: '100%', label: 'Client Satisfaction', icon: 'heart' }
];

export const CERTIFICATIONS = {
  featured: {
    period: 'Latest Certification - 2025',
    provider: 'Advanced Digital Skills 4 | JHB_July2025',
    title: 'Artificial Intelligence (AI) Bootcamp - DeepLearning.AI',
    description: 'Comprehensive AI training covering machine learning, neural networks, and ethical AI practices.',
    skills: ['AI/ML', 'Machine Learning', 'Neural Networks', 'Generative AI'],
    icon: 'award'
  },
  grid: [
    { title: 'Machine Learning Specialization', provider: 'Stanford University - Coursera', icon: 'brain', color: 'purple', skills: ['ML Algorithms', 'Deep Learning'] },
    { title: 'Data Science Professional', provider: 'IBM - Coursera', icon: 'database', color: 'green', skills: ['Python', 'Data Analytics'] },
    { title: 'Conversational AI', provider: 'Google - Coursera', icon: 'robot', color: 'orange', skills: ['Chatbots', 'NLP'] },
    { title: 'Azure AI Fundamentals', provider: 'Microsoft', icon: 'cloud-upload', color: 'red', skills: ['Azure AI', 'Cloud AI'] },
    { title: 'Python for Data Science', provider: 'DataCamp', icon: 'code', color: 'teal', skills: ['Python', 'Pandas'] },
    { title: 'Business Analytics', provider: 'Wharton - Coursera', icon: 'chart-bar-graph', color: 'indigo', skills: ['Analytics', 'Business Intelligence'] }
  ],
  additional: [
    'Digital Marketing - Google',
    'Project Management - Coursera',
    'Customer Service Excellence',
    'Agile Methodologies',
    'SQL for Data Analysis',
    'Leadership Essentials'
  ]
};

export const EXPERIENCES = [
  {
    title: 'ADS Intern',
    company: 'CAPACITI – Tech Career Accelerator',
    period: '2025',
    description: [
      'Completed intensive training in Data Science, AI, and related technologies',
      'Developed projects applying machine learning, chatbot development, and data analytics',
      'Collaborated with peers on portfolio-building and career development projects',
      'Enhanced problem-solving and technical skills through capstone projects'
    ],
    icon: 'brain',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Marketing Assistant',
    company: 'AGM Marketing',
    period: 'Jan 2021 – Jul 2022',
    description: [
      'Conducted telemarketing and direct marketing campaigns',
      'Handled outbound sales calls, lead generation, and customer satisfaction surveys',
      'Explained products, prices, and secured customer information',
      'Maintained accurate customer contact records'
    ],
    icon: 'megaphone',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'Floor Assistant',
    company: 'Checkers Hyper',
    period: 'Jan 2019 – Jul 2019',
    description: [
      'Assisted customers with directions, product locations, and promotions',
      'Supported sales through upselling and cross-selling techniques',
      'Replenished inventory and maintained store presentation',
      'Multi-tasked effectively, balancing responsibilities with customer satisfaction'
    ],
    icon: 'shopping-cart',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Till Operator',
    company: 'Woolworths',
    period: 'Nov 2015 – Apr 2018',
    description: [
      'Delivered exceptional customer service ensuring positive shopping experiences',
      'Maintained strong product knowledge to assist and recommend to customers',
      'Processed transactions accurately and efficiently',
      'Supported sales growth by meeting and exceeding targets'
    ],
    icon: 'credit-card',
    color: 'from-orange-500 to-red-600'
  }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Technical Skills',
    icon: 'code',
    skills: [
      { name: 'Artificial Intelligence', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Data Science', level: 85 },
      { name: 'Chatbot Development', level: 90 },
      { name: 'Generative AI', level: 85 }
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Business Skills',
    icon: 'briefcase-1',
    skills: [
      { name: 'Customer Service', level: 95 },
      { name: 'Sales', level: 88 },
      { name: 'Project Management', level: 82 },
      { name: 'Telemarketing', level: 85 },
      { name: 'Lead Generation', level: 80 }
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Soft Skills',
    icon: 'users-alt-5',
    skills: [
      { name: 'Problem-Solving', level: 92 },
      { name: 'Communication', level: 95 },
      { name: 'Teamwork', level: 90 },
      { name: 'Adaptability', level: 88 },
      { name: 'Decision-Making', level: 85 }
    ],
    color: 'from-purple-500 to-purple-600'
  }
];

export const TOOLS = [
  { name: 'Voiceflow', icon: 'mic' },
  { name: 'Framer', icon: 'layout' },
  { name: 'Cohere', icon: 'brain' },
  { name: 'Python', icon: 'code' },
  { name: 'ChatGPT', icon: 'chat' },
  { name: 'Azure AI', icon: 'cloud-upload' }
];

export const PROJECTS = [
  {
    title: 'AI-Perspective Lens: Biased Text Analyzer',
    description: 'Interactive AI learning assistant built with advanced machine learning technologies, providing personalized educational content, adaptive learning paths, and intelligent tutoring capabilities.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Machine Learning', 'Education', 'Interactive Learning'],
    icon: 'brain',
    color: 'bg-blue-500',
    demoUrl: 'https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221jrqv034glZbcay0HToLlGW_45baTGMRJ%22%5D,%22action%22:%22open%22,%22userId%22:%22117721435104691703370%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing',
    features: ['Personalized Learning Paths', 'AI-Driven Tutoring', 'Interactive Content'],
    status: 'Live Project'
  },
  {
    title: 'Career Mental Health Assistant',
    description: 'AI-powered mental health support assistant for career professionals, providing personalized guidance, stress management tools, and accessible mental wellness resources.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Mental Health', 'Career Support', 'Accessibility'],
    icon: 'heart',
    color: 'bg-green-500',
    demoUrl: 'https://github.com/PHINDILE1996/Career-Mental-Health-Assistant.git',
    features: ['WCAG 2.1 Compliant Interface', 'Screen Reader Compatible', 'Voice Navigation Support', 'High Contrast Mode'],
    status: 'Live Project',
    accessibility: {
      wcag: 'WCAG 2.1 AA Compliant',
      features: [
        'Alternative text for all images and icons',
        'Keyboard navigation throughout the interface',
        'Screen reader announcements for status updates',
        'High contrast color schemes for visual impairments',
      ]
    }
  },
  {
    title: 'AI-Chatbot',
    description: 'An intelligent, conversational AI chatbot designed to provide instant support and engage users in natural language conversations. Built using Voiceflow.',
    image: 'https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png',
    tags: ['Chatbot', 'AI', 'Voiceflow', 'Customer Support'],
    icon: 'chat',
    color: 'bg-teal-500',
    demoUrl: 'https://creator.voiceflow.com/prototype/6880cf0d02faed09e5e99b0a',
    features: ['Natural Language Understanding', '24/7 Availability', 'Voiceflow Integration'],
    status: 'Live Demo Available'
  }
];

export const CONTACT_INFO = [
  { icon: 'email', label: 'Email', value: 'lebesephindile46@gmail.com', href: 'mailto:lebesephindile46@gmail.com', color: 'bg-blue-500' },
  { icon: 'phone', label: 'Phone', value: '063 133 7955', href: 'tel:0631337955', color: 'bg-green-500' },
  { icon: 'location-pin', label: 'Location', value: 'Vosloorus, South Africa', href: null, color: 'bg-purple-500' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://linkedin.com/in/norah-phindile-lebese-4793b0379', color: 'bg-blue-600' },
  { icon: 'github', label: 'GitHub', value: 'View GitHub Profile', href: 'https://github.com/PHINDILE1996', color: 'bg-gray-700' }
];
