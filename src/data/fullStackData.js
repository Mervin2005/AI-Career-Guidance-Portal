export const fullStackData = {
  careerOverview: {
    title: "Full Stack Developer",
    introduction: "Full Stack Web Development involves building complete web applications by working on both the Frontend (User Interface) and Backend (Server, Database, APIs).",
    whatIsIt: "A Full Stack Developer can design, develop, test, deploy, and maintain end-to-end web applications.",
    keyResponsibilities: [
      "Develop responsive web interfaces",
      "Build backend APIs and business logic",
      "Design and manage databases",
      "Integrate frontend with backend",
      "Deploy applications to the cloud",
      "Test, debug, and optimize performance",
      "Maintain security and scalability"
    ],
    requiredEducation: "Bachelor's degree in Computer Science, IT, or related field (strong projects are often prioritized).",
    industryDemand: "Extremely High - Full Stack Developers are in demand across startups, SaaS companies, fintech, healthcare, e-commerce, education, and enterprise software.",
    futureScope: "Roles like Full Stack Developer, Frontend Developer, Backend Developer, Software Engineer, Web Application Developer, DevOps Engineer, Technical Lead.",
    workEnvironment: "Tech companies, startups, digital agencies, or as remote freelancers.",
    careerOpportunities: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Web Developer", "DevOps Engineer", "Technical Lead"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: HTML5", topics: ["Tags", "Forms", "Semantic HTML"] },
      { id: 2, title: "Step 2: CSS3", topics: ["Flexbox", "Grid", "Responsive Design"] },
      { id: 3, title: "Step 3: JavaScript (ES6+)", topics: ["DOM", "Async/Await", "ES6+ Features"] },
      { id: 4, title: "Step 4: Git & GitHub", topics: ["Version Control", "Collaboration"] },
      { id: 5, title: "Step 5: Frontend Framework", topics: ["React.js", "Next.js", "State Management"] },
      { id: 6, title: "Step 6: Backend Development", topics: ["Node.js", "Express.js", "Middleware"] },
      { id: 7, title: "Step 7: Database", topics: ["MySQL", "PostgreSQL", "MongoDB"] },
      { id: 8, title: "Step 8: REST API Development", topics: ["Endpoints", "CRUD"] },
      { id: 9, title: "Step 9: Authentication", topics: ["JWT", "OAuth", "Sessions"] },
      { id: 10, title: "Step 10: Testing", topics: ["Jest", "Unit Testing", "E2E"] },
      { id: 11, title: "Step 11: Cloud Deployment", topics: ["Vercel", "Netlify", "Render", "AWS"] },
      { id: 12, title: "Step 12: Docker & CI/CD Basics", topics: ["Containers", "Actions"] },
      { id: 13, title: "Step 13: Real-world Projects", topics: ["Full Stack Apps", "MERN Stack"] },
      { id: 14, title: "Step 14: Resume & Portfolio", topics: ["GitHub", "Live Projects"] },
      { id: 15, title: "Step 15: Interview Preparation", topics: ["System Design", "Coding Challenges"] }
    ],
    essentialTools: ["VS Code", "Git", "Postman", "Docker", "Node.js", "MongoDB Atlas", "AWS / Cloud Providers"],
    learningOrder: ["HTML/CSS", "JavaScript", "Git & GitHub", "React.js", "Node.js & Express", "Databases", "REST APIs", "Authentication", "Testing", "Deployment", "Docker", "Projects"],
    careerRoles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Web Developer", "Application Developer", "DevOps Engineer", "Technical Lead"]
  },
  skills: {
    beginner: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design", "Browser DevTools"],
    intermediate: ["React.js", "Express.js", "Node.js", "MongoDB/MySQL", "REST APIs", "Authentication"],
    advanced: ["Next.js", "Docker", "Kubernetes (Basics)", "AWS/Azure", "System Design", "Microservices"],
    expert: ["High Availability Systems", "Performance Tuning", "Advanced CI/CD Architecture", "Cloud Native Design"]
  },
  resources: [
    { title: "MDN Web Docs", provider: "Mozilla", type: "Documentation", link: "#" },
    { title: "freeCodeCamp", provider: "freeCodeCamp", type: "Course", link: "#" },
    { title: "The Odin Project", provider: "The Odin Project", type: "Course", link: "#" },
    { title: "JavaScript.info", provider: "JavaScript.info", type: "Tutorial", link: "#" },
    { title: "React Documentation", provider: "Meta", type: "Documentation", link: "#" }
  ],
  projects: [
    { title: "Personal Portfolio Website", difficulty: "Beginner", description: "Build a responsive personal website.", time: "1 week", techs: ["HTML", "CSS", "JS"] },
    { title: "Weather App", difficulty: "Beginner", description: "Fetch and display weather data from an API.", time: "1 week", techs: ["React", "API"] },
    { title: "Blog Website", difficulty: "Intermediate", description: "Full stack blog with user authentication.", time: "3 weeks", techs: ["MERN Stack", "JWT"] },
    { title: "E-commerce Website", difficulty: "Intermediate", description: "Shopping cart, checkout, and product management.", time: "4 weeks", techs: ["React", "Node.js", "MongoDB"] },
    { title: "AI Career Guidance Portal", difficulty: "Advanced", description: "Platform integrating AI for career advice.", time: "5 weeks", techs: ["Next.js", "OpenAI API"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is the DOM?",
      "Difference between var, let, and const?",
      "Explain React Hooks.",
      "What is Express.js?",
      "What is REST API?",
      "Difference between SQL and NoSQL?",
      "What is JWT?",
      "What is CORS?",
      "Explain Authentication vs Authorization.",
      "What is Docker?"
    ],
    codingPractice: ["JavaScript Problems", "Array & String Algorithms", "API Integration", "CRUD Applications"],
    hrQuestions: [
      "Tell me about yourself.",
      "Explain your full-stack project.",
      "Why Full Stack Development?",
      "How do you debug application issues?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹5–10 LPA" },
    { experience: "2–5 Years", range: "₹10–18 LPA" },
    { experience: "5–8 Years", range: "₹18–30 LPA" },
    { experience: "8+ Years", range: "₹30–45+ LPA" }
  ],
  topCompanies: {
    product: ["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Shopify", "Adobe", "Atlassian"],
    consulting: ["TCS", "Infosys", "HCLTech", "Zoho", "Freshworks", "Razorpay", "PhonePe", "Flipkart", "Swiggy", "CRED"],
    startups: ["Postman", "Meesho", "Zepto", "Groww", "Zerodha"]
  }
};
