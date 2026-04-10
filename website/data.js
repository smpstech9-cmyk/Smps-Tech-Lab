// All data in one place
const websiteData = {
  stats: [
    { label: 'Intellectual Properties', value: '17+' },
    { label: 'Strategic Partnerships', value: '228+' },
    { label: 'Students Engaged', value: '4L+' },
    { label: 'Patents Filed', value: '34+' }
  ],
  
  ips: [
    {
      id: 1,
      title: '5G Network Optimization Platform',
      category: 'Telecommunications',
      description: 'AI-powered platform for optimizing 5G network performance and reducing latency by up to 40%.',
      value: '₹15 Cr',
      marketSize: '₹2,500 Cr by 2026',
      revenue: '₹50 Cr annually',
      clients: ['BSNL', 'Airtel', 'Jio'],
      credibility: ['VTU Certified', 'DoT Approved', 'Bharat 6G Alliance'],
      stage: 'Production Ready'
    },
    {
      id: 2,
      title: 'Smart Agriculture IoT Suite',
      category: 'Agriculture Tech',
      description: 'Complete IoT ecosystem for precision farming with AI-driven crop monitoring and yield prediction.',
      value: '₹8 Cr',
      marketSize: '₹5,000 Cr by 2027',
      revenue: '₹35 Cr annually',
      clients: ['Ministry of Agriculture', 'FPO Network'],
      credibility: ['ICAR Validated', 'NABARD Funded'],
      stage: 'Pilot Phase'
    },
    {
      id: 3,
      title: 'Quantum Cryptography Module',
      category: 'Cybersecurity',
      description: 'Next-gen quantum-resistant encryption system for secure government and defense communications.',
      value: '₹25 Cr',
      marketSize: '₹8,000 Cr by 2028',
      revenue: '₹100 Cr annually',
      clients: ['DRDO', 'ISRO', 'Government Agencies'],
      credibility: ['DRDO Partnership', 'C-DAC Collaboration'],
      stage: 'Research Phase'
    },
    {
      id: 4,
      title: 'Healthcare AI Diagnostics',
      category: 'HealthTech',
      description: 'AI-powered medical imaging analysis for early disease detection with 95% accuracy.',
      value: '₹12 Cr',
      marketSize: '₹3,200 Cr by 2026',
      revenue: '₹45 Cr annually',
      clients: ['AIIMS', 'Apollo Hospitals'],
      credibility: ['Medical Council Certified', 'Clinical Trials Completed'],
      stage: 'Commercial'
    },
    {
      id: 5,
      title: 'Smart City Traffic Management',
      category: 'Urban Tech',
      description: 'Intelligent traffic control system reducing congestion by 35% using ML algorithms.',
      value: '₹10 Cr',
      marketSize: '₹4,500 Cr by 2027',
      revenue: '₹40 Cr annually',
      clients: ['Bangalore Smart City', 'Pune Municipal Corp'],
      credibility: ['Smart Cities Mission Partner', 'IIT Madras Collaboration'],
      stage: 'Deployment'
    },
    {
      id: 6,
      title: 'EdTech Learning Platform',
      category: 'Education',
      description: 'Adaptive learning platform with AI tutors serving 4L+ students across India.',
      value: '₹6 Cr',
      marketSize: '₹6,000 Cr by 2026',
      revenue: '₹30 Cr annually',
      clients: ['CBSE Schools', 'State Boards'],
      credibility: ['AICTE Approved', 'UGC Recognized'],
      stage: 'Scaling'
    },
    {
      id: 7,
      title: 'Renewable Energy Grid Optimizer',
      category: 'Clean Energy',
      description: 'AI system for optimizing solar and wind energy distribution in smart grids.',
      value: '₹18 Cr',
      marketSize: '₹10,000 Cr by 2028',
      revenue: '₹70 Cr annually',
      clients: ['NTPC', 'Tata Power', 'Adani Green'],
      credibility: ['MNRE Certified', 'IIT Bombay Partnership'],
      stage: 'Production Ready'
    },
    {
      id: 8,
      title: 'Fintech Fraud Detection System',
      category: 'Financial Services',
      description: 'Real-time fraud detection using behavioral analytics and machine learning.',
      value: '₹14 Cr',
      marketSize: '₹7,500 Cr by 2027',
      revenue: '₹55 Cr annually',
      clients: ['ICICI Bank', 'HDFC Bank', 'Paytm'],
      credibility: ['RBI Sandbox Graduated', 'NPCI Integration'],
      stage: 'Commercial'
    },
    {
      id: 9,
      title: 'Drone Surveillance Platform',
      category: 'Defense & Security',
      description: 'Autonomous drone network for border surveillance and disaster management.',
      value: '₹20 Cr',
      marketSize: '₹9,000 Cr by 2028',
      revenue: '₹85 Cr annually',
      clients: ['Border Security Force', 'Coast Guard'],
      credibility: ['DRDO Testing Completed', 'Make in India Initiative'],
      stage: 'Pilot Phase'
    }
  ],
  
  blogs: [
    {
      id: 1,
      title: 'The Future of 6G Technology in India',
      excerpt: 'Exploring how 6G will revolutionize connectivity and enable new use cases in healthcare, education, and smart cities.',
      category: 'Technology',
      author: 'Dr. Rajesh Kumar',
      date: '2025-01-15',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'AI in Agriculture: Transforming Indian Farming',
      excerpt: 'How artificial intelligence and IoT are helping farmers increase crop yields while reducing resource consumption.',
      category: 'Agriculture',
      author: 'Priya Sharma',
      date: '2025-01-10',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Quantum Computing: India\'s Next Frontier',
      excerpt: 'An overview of India\'s quantum computing initiatives and their potential impact on cryptography and research.',
      category: 'Research',
      author: 'Prof. Anand Mehta',
      date: '2025-01-05',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Building Smart Cities: Lessons from Bangalore',
      excerpt: 'Case study on implementing smart traffic management and how it reduced congestion by 35%.',
      category: 'Smart Cities',
      author: 'Vikram Singh',
      date: '2024-12-28',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'EdTech Revolution: Reaching 4 Lakh Students',
      excerpt: 'Our journey of democratizing quality education through adaptive learning platforms across India.',
      category: 'Education',
      author: 'Neha Patel',
      date: '2024-12-20',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Healthcare AI: Early Disease Detection at Scale',
      excerpt: 'Our AI diagnostics platform is making quality healthcare accessible to underserved communities.',
      category: 'Healthcare',
      author: 'Dr. Kavita Iyer',
      date: '2024-11-28',
      readTime: '8 min read'
    }
  ],
  
  careers: [
    {
      id: 1,
      title: 'Senior Machine Learning Engineer',
      type: 'Full-time',
      department: 'AI Research',
      location: 'Bangalore, India',
      experience: '4-7 years',
      description: 'Join our AI research team to develop cutting-edge machine learning models for 5G network optimization.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'MLOps']
    },
    {
      id: 2,
      title: 'IoT Solutions Architect',
      type: 'Full-time',
      department: 'IoT & Embedded Systems',
      location: 'Pune, India',
      experience: '5-8 years',
      description: 'Design and implement scalable IoT architectures for smart agriculture and industrial applications.',
      skills: ['IoT Protocols', 'AWS IoT', 'Edge Computing', 'Embedded Systems']
    },
    {
      id: 3,
      title: 'Research Intern - Quantum Computing',
      type: 'Internship',
      department: 'Research & Development',
      location: 'Bangalore / Remote',
      experience: '0-1 years',
      description: 'Work with leading researchers on quantum cryptography projects and contribute to cutting-edge research.',
      skills: ['Quantum Mechanics', 'Python', 'Qiskit', 'Linear Algebra']
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      type: 'Full-time',
      department: 'Product Engineering',
      location: 'Hyderabad, India',
      experience: '2-5 years',
      description: 'Build and maintain web applications for our EdTech and smart city platforms.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'REST APIs']
    },
    {
      id: 5,
      title: 'Data Science Intern',
      type: 'Internship',
      department: 'Data Analytics',
      location: 'Remote',
      experience: '0-1 years',
      description: 'Analyze large datasets and build predictive models for various IP projects.',
      skills: ['Python', 'Pandas', 'SQL', 'Statistics', 'Data Visualization']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      type: 'Full-time',
      department: 'Infrastructure',
      location: 'Bangalore / Remote',
      experience: '3-5 years',
      description: 'Manage cloud infrastructure, implement CI/CD pipelines, and ensure high availability.',
      skills: ['Kubernetes', 'Docker', 'AWS/Azure', 'Jenkins', 'Terraform']
    }
  ],
  
  partners: [
    'VTU', 'DoT', 'Bharat 6G Alliance', 'IIT Madras', 'DRDO', 'ISRO',
    'IIT Bombay', 'C-DAC', 'Tata Group', 'Reliance Industries', 'NITI Aayog', 'IIM Bangalore'
  ],
  
  advisors: [
    {
      name: 'Dr. Radhakrishnan Nair',
      designation: 'Former ISRO Scientist',
      expertise: 'Space Technology & Satellite Systems'
    },
    {
      name: 'Prof. Anjali Verma',
      designation: 'IIT Madras Faculty',
      expertise: 'Artificial Intelligence & Machine Learning'
    },
    {
      name: 'Mr. Vikram Malhotra',
      designation: 'Ex-CEO, Tech Mahindra',
      expertise: 'Business Strategy & Digital Transformation'
    },
    {
      name: 'Dr. Kavita Sharma',
      designation: 'DRDO Chief Scientist',
      expertise: 'Quantum Computing & Cryptography'
    }
  ],
  
  awards: [
    { title: 'National Innovation Award 2024', issuer: 'Government of India', year: 2024 },
    { title: 'Best Deep Tech Startup', issuer: 'Nasscom', year: 2024 },
    { title: 'Excellence in R&D', issuer: 'AICTE', year: 2023 },
    { title: 'Smart City Innovation Award', issuer: 'Smart Cities Mission', year: 2023 },
    { title: 'Technology Pioneer', issuer: 'World Economic Forum', year: 2023 }
  ]
};