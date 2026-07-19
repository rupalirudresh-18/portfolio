
const portfolioData = {

  name: "Rupali R",
  location: "Bengaluru, Karnataka",
  tagline: "Final-year <b>Computer Science & Engineering</b> student at SJB Institute of Technology, with an interest in <b>Problem Solving, web development, data analysis, and AI-integrated applications.</b>",

  photo: "images/photo.jpeg",

  socials: {
    github: "https://github.com/rupalirudresh-18",
    linkedin: "https://www.linkedin.com/in/rupali-r-9315b9335 ",     
    email: "rupalirudresh18@gmail.com"
  },

  resumeLink: "resume.pdf", 
  about: {
    paragraphs: [
       "I'm a final-year Computer Science and Engineering student at <b>SJB Institute of Technology</b> with a strong interest in <b>full-stack development, software engineering, and AI-integrated applications</b>. I have hands-on experience building web applications using <b>Java, SQL, JavaScript, Django, Flask, Next.js, PostgreSQL, and Supabase</b>, with a focus on developing scalable and user-centric solutions.",
       "Beyond development, I enjoy exploring <b>data analytics and AI-driven technologies</b> through projects involving dashboards, predictive analytics, and intelligent systems using <b>Tableau, Power BI, and machine learning techniques</b>. I'm always eager to learn new technologies, solve real-world problems, and contribute to impactful software projects while continuously improving my skills as a developer."
    ],
    info: {
      "Branch":  "Computer Science & Engineering",
      "College":  "SJB Institute of Technology",
      "Grad year":  "2027 (Expected)",
      "CGPA":  "9.67 / 10",
      "Based in":  "Bangalore, Karnataka",
      "Languages":  "English, Kannada, Hindi"
    },
    highlightKey: "CGPA" // this row gets a bold accent color
  },

  skills: [
    { category: "Languages", items: ["Java", "Python", "C"] },
    { category: "Web & Frameworks", items: ["HTML/CSS", "Django", "Flask", "Next.js"] },
    { category: "Database", items: ["SQL", "PostgreSQL", "Supabase" , "MySQL"] },
    { category: "Data & Visualization", items: ["Tableau", "Power BI"] },
    { category: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda, DynamoDB)", "REST APIs", "Google Cloud"] },
    { category: "Tools & Platforms", items: ["Git/GitHub", "VS Code", "Arduino IDE"] }
  ],


  projects: [
    {
      status: "Ongoing Major Project",
  title: "Risk Propagating and Stability Aware Blood Network Supply Allocation System",
  subtitle: "AI-Powered Blood Management System",
  desc: "Developing a blood management platform that streamlines blood inventory management, intelligent blood distribution between hospitals, efficient donor-recipient matching, emergency blood request handling, QR-based blood unit tracking, and automated email notifications. The system leverages SARIMA-based demand forecasting to predict blood requirements, optimize resource allocation, and minimize shortages and wastage.",
  tags: [
    "Next.js",
    "PostgreSQL",
    "Supabase",
    "SARIMA",
    "JavaScript"
  ],
  images: [
    "images/blood-dashboard.jpg"
  ],
      demo: "",     
      github: ""    
    },

    {
  status: "Personal Project",
  title: "Library Management System",
  subtitle: "Full-Stack Library Management Platform",
  desc: "Developed a full-stack library management system to streamline institutional library operations for students, librarians, staff, and administrators. The platform features role-based access control, automated email notifications for book issue, return, and due reminders, scheduled fine calculation, PDF borrow slip generation, real-time analytics dashboards, and end-to-end workflows for book requests, approvals, returns, fine management, and purchase requests.",
  tags: [
    "Spring Boot",
    "Java",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "SMTP"
  ],
  images: [
    "images/library-dashboard.png",
    "images/library-books.png"
  ],
  demo: " https://librarymanagementsystem-production-03c7.up.railway.app",
  github: "https://github.com/rupalirudresh-18/Library_Management_System"
},
 {
       status: "Personal Project",
  title: "College Results Analytics System",
  subtitle: "Academic Result Management & Analytics Platform",
  desc: "Built a full-stack web application that digitizes academic result management by automating bulk result processing, grade computation, SGPA/CGPA calculation, and institutional reporting. The system provides interactive dashboards, student-wise and subject-wise performance analytics, backlog tracking, topper identification, advanced filtering, and automatically generated PDF reports, enabling faster, accurate, and data-driven academic analysis.",
  tags: [
    "Django",
    "Python",
    "SQLite",
    "Pandas",
    "Bootstrap 5",
    "Chart.js",
    "xhtml2pdf"
  ],
  images: [
    "images/results-dashboard.png",
    "images/pdf-report.png"
  ],
  demo: "https://college-result-analytics.onrender.com",
  github: "https://github.com/rupalirudresh-18/College-Result-Analytics"
    },
    {
  status: "Personal Project",
  title: "ARCA — AI Marketing Platform",
  subtitle: "AI-Powered Brand Intelligence & Marketing Strategy Generator",
  desc: "Built a full-stack AI marketing platform that transforms a product description into a complete marketing strategy. The system performs deep brand extraction (USP, competitors, luxury score, packaging analysis), generates an 8-dimension AI Marketing Score, produces Instagram captions in 3 versions, ad copy for 4 platforms, hooks, email subject lines, reel scripts, carousel decks, UGC campaigns, and a full marketing intelligence report with SWOT analysis, competitor breakdown, 3-month strategy, and budget allocation. Features a context-aware AI Chat assistant that knows the full brand profile, persistent PostgreSQL storage, and a smart dashboard with personalized insights.",
  tags: [
    "Next.js 15",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Llama 3.3 70B",
    "Tailwind CSS"
  ],
  images: [
    "images/arca-homepage.png",
    "images/arca-analysis.png"
  ],
  demo: "https://arca-frontend-xxxx.onrender.com",
  github: "https://github.com/rupalirudresh-18/Arca"
},

    {
       status: "Personal Project",
    title: "MediCue — AI-Integrated Healthcare Assistant",
    subtitle: "Intelligent Healthcare Information System",
    desc: "Developed an AI-powered healthcare web application that simplifies medical information by providing disease details, symptoms, medications, treatments, and preventive measures in an easy-to-understand format. The platform includes an AI-powered healthcare assistant, medical report analyzer, intelligent disease search, user authentication, and search history, enabling users to access reliable healthcare information through an intuitive interface.",
    tags: [
    "AI Integration",
    "Flask",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  images: [
    "images/medicue-dashboard.png"
  ],
  demo: "https://medical-cue.onrender.com",
  github: "https://github.com/rupalirudresh-18/MedicalCUE"
    },

    {
      status: "Data Visualization",
  title: "Customer Churn Analysis Dashboard",
  subtitle: "Interactive Business Intelligence Dashboard",
  desc: "Developed an interactive Power BI dashboard to analyze customer churn, retention trends, and customer behavior through dynamic visualizations and KPIs. The dashboard provides insights into churn patterns, customer demographics, service usage, and retention metrics, enabling data-driven decision making and business performance analysis.",
  tags: [
    "Power BI",
    "Data Analysis",
    "Data Visualization",
    "Business Intelligence"
  ],
  images: [
    "images/churn-dashboard.png",
    "images/churn-insights.png"
  ],
  github: "https://github.com/rupalirudresh-18/Churn-Prediction-Analysis"
    }
  ],


  achievements: [
 {
  badge: "Hackathon",
  title: "Cognizant Technoverse Hackathon",
  subtitle: "Participated in Cognizant Technoverse, collaborating on an innovative software solution and applying problem-solving, teamwork, and software development skills in a competitive environment.",
  image: "",
  certificateLink: "https://drive.google.com/file/d/1DAdhDcyN4izlQTZPO92HMm8uyBLGZw42/view?usp=sharing"
},
{
    badge: "Hackathon",
    title: "TechFusion 2.0",
    subtitle: "24-Hour National Hackathon • Dayanand Sagar Academy of Technology and Management • April 2026",
    image: "",
    certificateLink: "https://drive.google.com/file/d/1TcIkcQsP7XUKDvFpRoEF--77xLeVk4Dn/view?usp=sharing"
},
{
  badge: "Certification",
  title: "Cisco Data Analytics Essentials",
  subtitle: "Cisco Networking Academy • Completed foundational training in data analytics, including data collection, visualization, statistical analysis, and data-driven decision making.",
  image: "",
  certificateLink: "https://drive.google.com/file/d/1YcdfREgwOmQTUKJ_2SNWnk_SaGItb9Z5/view?usp=sharing"
},
 {
  badge: "Virtual Experience",
  title: "Data Analytics Job Simulation",
  subtitle: "Deloitte Australia (Forage) • Completed a virtual job simulation involving data cleaning, analysis, dashboard creation, and business insight generation using real-world datasets.",
  image: "",
  certificateLink: "https://drive.google.com/file/d/1LOtxaddlEL6acpNvGZzhz4tTvWxFy2dR/view?usp=sharing"
},

{
    badge: "Certification",
    title: "Industry 4.0 & Industrial Internet of Things",
    subtitle: "NPTEL • Elite + Gold • Score: 90%",
    image: "",
    certificateLink: "https://drive.google.com/file/d/1l8eP4oPovFPOJ0NHbo0Nx38ltSgTTEqs/view?usp=sharing"
  },
  {
    badge: "Certification",
    title: "AI in Human Resource Management",
    subtitle: "NPTEL • Elite+ Silver • Score: 85%",
    image: "",
    certificateLink: "https://drive.google.com/file/d/1wd3mu4B10GFpC9idfUlGExmCRBZvreBy/view?usp=sharing"
  }, 
  {
    badge: "Certification",
    title: "Understanding Incubation & Entrepreneurship",
    subtitle: "NPTEL • Score: 71%",
    image: "",
    certificateLink: "https://drive.google.com/file/d/1RPasScnM5z5xKqMCTxmhXfkWyo-O6aPo/view?usp=sharing"
  },
  
  {
    badge: "Technical Event",
    title: "Cyborg",
    subtitle: "Technical Event • SJBIT • March 2025",
    image: "",
    certificateLink: "https://drive.google.com/file/d/1MFn_ZOHJljGybQnHOMcEK3c7cNw02ZKK/view?usp=sharing"
  },
  {
    badge: "Volunteering",
    title: "RPC 2024 – Student Volunteer",
    subtitle: "Recognized by Edulateral Foundation for event coordination and volunteer contribution.",
    image: "",
    certificateLink: "https://drive.google.com/file/d/1bTO2zeJdXyPaFJJgI08nEVT4RoNMe-jR/view?usp=sharing"
  },
],

  contactNote: "Open to internship opportunities — let's connect."
};
