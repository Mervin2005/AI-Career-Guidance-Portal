export const cloudArchitectData = {
  careerOverview: {
    title: "Cloud Architect",
    introduction: "A Cloud Architect designs, builds, manages, and secures cloud infrastructure for organizations.",
    whatIsIt: "They create scalable, reliable, and cost-effective cloud solutions using platforms such as AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
    keyResponsibilities: [
      "Design cloud infrastructure and architecture",
      "Plan cloud migration strategies",
      "Build scalable and highly available systems",
      "Implement cloud security and identity management",
      "Automate infrastructure using Infrastructure as Code (IaC)",
      "Monitor cloud performance and optimize costs",
      "Collaborate with DevOps, Security, and Development teams"
    ],
    requiredEducation: "Bachelor's degree in Computer Science, IT, or related field. Relevant cloud certifications (AWS, Azure, GCP) are highly valued.",
    industryDemand: "Extremely High 📈 - Cloud Architects are in demand across IT, Banking, Healthcare, E-commerce, Telecommunications, Government, and SaaS companies.",
    futureScope: "Roles like Cloud Engineer, Cloud Solutions Architect, DevOps Engineer, Site Reliability Engineer (SRE), Cloud Security Architect, Infrastructure Architect, Enterprise Cloud Architect",
    workEnvironment: "Tech companies, consulting firms, enterprises, and remote-first organizations.",
    careerOpportunities: ["Cloud Engineer", "Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Security Architect", "Infrastructure Architect", "Enterprise Cloud Architect"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Computer Fundamentals", topics: ["OS", "Networking", "Linux"] },
      { id: 2, title: "Step 2: Linux Administration", topics: ["Commands", "File System", "Permissions"] },
      { id: 3, title: "Step 3: Networking", topics: ["TCP/IP", "DNS", "HTTP", "VPN"] },
      { id: 4, title: "Step 4: Programming & Scripting", topics: ["Python", "Bash"] },
      { id: 5, title: "Step 5: Git & GitHub", topics: ["Version Control", "Repositories"] },
      { id: 6, title: "Step 6: Cloud Fundamentals", topics: ["AWS", "Azure", "GCP"] },
      { id: 7, title: "Step 7: Compute Services", topics: ["EC2", "Azure VM", "Compute Engine"] },
      { id: 8, title: "Step 8: Storage & Databases", topics: ["S3", "EBS", "RDS", "Cloud SQL"] },
      { id: 9, title: "Step 9: Virtual Networking", topics: ["VPC", "Load Balancer", "CDN"] },
      { id: 10, title: "Step 10: Containers & Kubernetes", topics: ["Docker", "Kubernetes"] },
      { id: 11, title: "Step 11: Infrastructure as Code", topics: ["Terraform", "CloudFormation"] },
      { id: 12, title: "Step 12: CI/CD & DevOps", topics: ["Jenkins", "GitHub Actions"] },
      { id: 13, title: "Step 13: Cloud Security", topics: ["IAM", "Encryption", "Secrets"] },
      { id: 14, title: "Step 14: Monitoring & Logging", topics: ["CloudWatch", "Azure Monitor"] },
      { id: 15, title: "Step 15: Cloud Projects", topics: ["Real-world Deployments", "Portfolio"] },
      { id: 16, title: "Step 16: Cloud Certifications", topics: ["AWS Solutions Architect", "Azure Administrator"] },
      { id: 17, title: "Step 17: Resume & Portfolio", topics: ["Documentation", "Case Studies"] },
      { id: 18, title: "Step 18: Interview Preparation", topics: ["Technical Concepts", "System Design"] }
    ],
    essentialTools: ["AWS", "Azure", "GCP", "Linux", "Docker", "Kubernetes", "Terraform", "Python", "Git"],
    learningOrder: ["Linux", "Networking", "Programming", "Cloud Fundamentals", "Compute/Storage/Network", "Containers", "Infrastructure as Code", "CI/CD", "Security", "Monitoring"],
    careerRoles: ["Cloud Engineer", "Cloud Administrator", "Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Security Engineer", "Cloud Consultant", "Enterprise Cloud Architect"]
  },
  skills: {
    beginner: ["Linux", "Networking", "Python", "Git & GitHub", "Operating Systems", "Virtualization"],
    intermediate: ["AWS / Azure / GCP", "Docker", "Terraform", "CI/CD Pipelines", "Load Balancing", "Monitoring"],
    advanced: ["Cloud Architecture Design", "Kubernetes", "Multi-Cloud Strategy", "Cloud Security", "Disaster Recovery", "Cost Optimization"],
    expert: ["Enterprise Architecture", "Zero Trust Security", "Serverless Architectures", "FinOps"]
  },
  resources: [
    { title: "AWS Skill Builder", provider: "AWS", type: "Course", link: "#" },
    { title: "Microsoft Learn (Azure)", provider: "Microsoft", type: "Documentation", link: "#" },
    { title: "Google Cloud Skills Boost", provider: "Google Cloud", type: "Course", link: "#" },
    { title: "Docker Documentation", provider: "Docker", type: "Documentation", link: "#" },
    { title: "Kubernetes Documentation", provider: "Kubernetes", type: "Documentation", link: "#" },
    { title: "Terraform Documentation", provider: "HashiCorp", type: "Documentation", link: "#" }
  ],
  projects: [
    { title: "Static Website Hosting on AWS S3", difficulty: "Beginner", description: "Host a simple HTML/CSS website on S3.", time: "1 week", techs: ["AWS S3", "HTML/CSS"] },
    { title: "Linux Web Server on EC2", difficulty: "Beginner", description: "Deploy an Apache/Nginx web server on EC2.", time: "1 week", techs: ["AWS EC2", "Linux", "Apache/Nginx"] },
    { title: "Three-Tier Web Application", difficulty: "Intermediate", description: "Deploy a frontend, backend, and database layer architecture.", time: "3 weeks", techs: ["Compute", "Database", "Networking"] },
    { title: "Dockerized Node.js Application", difficulty: "Intermediate", description: "Containerize and run an application using Docker.", time: "2 weeks", techs: ["Docker", "Node.js"] },
    { title: "CI/CD Pipeline with GitHub Actions", difficulty: "Intermediate", description: "Automate code deployment via CI/CD.", time: "2 weeks", techs: ["GitHub Actions", "Git"] },
    { title: "Multi-Region Cloud Architecture", difficulty: "Advanced", description: "Design a highly available architecture spanning multiple regions.", time: "4 weeks", techs: ["Load Balancer", "Auto Scaling", "Disaster Recovery"] },
    { title: "Infrastructure as Code with Terraform", difficulty: "Advanced", description: "Automate the provisioning of cloud resources using Terraform.", time: "3 weeks", techs: ["Terraform", "AWS/Azure/GCP"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is Cloud Computing?",
      "Explain IaaS, PaaS, and SaaS.",
      "What is Virtualization?",
      "What is Docker?",
      "What is Kubernetes?",
      "Explain VPC.",
      "What is IAM?",
      "Difference between Load Balancer and Auto Scaling?",
      "What is Terraform?",
      "Explain High Availability and Disaster Recovery."
    ],
    codingPractice: ["Linux Commands", "AWS/Azure/GCP Console", "Docker Containers", "Kubernetes Deployment", "Terraform Scripts", "Git & CI/CD"],
    hrQuestions: [
      "Tell me about yourself.",
      "Why Cloud Computing?",
      "Explain one cloud project you completed.",
      "How do you troubleshoot cloud issues?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher (Cloud Engineer)", range: "₹5–10 LPA" },
    { experience: "2–5 Years", range: "₹10–18 LPA" },
    { experience: "5–8 Years", range: "₹18–30 LPA" },
    { experience: "8+ Years (Cloud Architect)", range: "₹30–60+ LPA" }
  ],
  topCompanies: {
    product: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "IBM Cloud"],
    consulting: ["Amazon", "Microsoft", "Google", "IBM", "Oracle", "Cisco", "VMware", "Red Hat"],
    startups: ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "LTIMindtree", "Accenture", "Capgemini"]
  }
};
