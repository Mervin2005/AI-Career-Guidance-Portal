export const cloudComputingData = {
  careerOverview: {
    title: "Cloud Computing",
    introduction: "Cloud Computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and AI—over the internet.",
    whatIsIt: "Instead of managing physical hardware, organizations use cloud platforms to build, deploy, and scale applications efficiently. Service models include IaaS, PaaS, SaaS, and FaaS.",
    keyResponsibilities: [
      "Deploy and manage cloud infrastructure",
      "Configure virtual machines and networking",
      "Manage cloud storage and databases",
      "Monitor system performance",
      "Implement cloud security",
      "Automate deployments",
      "Optimize cloud costs"
    ],
    requiredEducation: "Bachelor's degree in Computer Science, IT, or related field. Industry certifications (AWS, Azure, GCP) are highly valued.",
    industryDemand: "Extremely High 📈 - Cloud Computing skills are required in IT Services, Banking, Healthcare, FinTech, E-commerce, AI, Telecommunications, Government, and Startups.",
    futureScope: "Roles like Cloud Engineer, Cloud Administrator, Cloud Architect, DevOps Engineer, Site Reliability Engineer (SRE), Cloud Security Engineer, Solutions Architect",
    workEnvironment: "Tech companies, consulting firms, enterprises, and remote-first organizations.",
    careerOpportunities: ["Cloud Engineer", "Cloud Administrator", "Cloud Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Security Engineer", "Solutions Architect", "Platform Engineer"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Computer Fundamentals", topics: ["Operating Systems", "Hardware"] },
      { id: 2, title: "Step 2: Linux Administration", topics: ["Linux Basics"] },
      { id: 3, title: "Step 3: Networking", topics: ["TCP/IP", "DNS", "HTTP", "VPN"] },
      { id: 4, title: "Step 4: Programming & Scripting", topics: ["Python", "Bash"] },
      { id: 5, title: "Step 5: Git & GitHub", topics: ["Version Control"] },
      { id: 6, title: "Step 6: Cloud Computing Fundamentals", topics: ["IaaS", "PaaS", "SaaS", "FaaS"] },
      { id: 7, title: "Step 7: AWS / Microsoft Azure / Google Cloud", topics: ["Cloud Platforms"] },
      { id: 8, title: "Step 8: Compute Services", topics: ["EC2", "Azure VM", "Compute Engine"] },
      { id: 9, title: "Step 9: Storage & Databases", topics: ["S3", "RDS", "Cloud SQL"] },
      { id: 10, title: "Step 10: Virtual Networking", topics: ["VPC", "Subnets", "Load Balancer"] },
      { id: 11, title: "Step 11: Containers", topics: ["Docker"] },
      { id: 12, title: "Step 12: Kubernetes", topics: ["Container Orchestration"] },
      { id: 13, title: "Step 13: Infrastructure as Code", topics: ["Terraform", "CloudFormation"] },
      { id: 14, title: "Step 14: CI/CD Pipelines", topics: ["Jenkins", "GitHub Actions"] },
      { id: 15, title: "Step 15: Cloud Security", topics: ["IAM", "Encryption", "Security Groups"] },
      { id: 16, title: "Step 16: Monitoring & Logging", topics: ["CloudWatch", "Azure Monitor"] },
      { id: 17, title: "Step 17: Real-world Cloud Projects", topics: ["Deployments", "Architecture"] },
      { id: 18, title: "Step 18: Cloud Certifications", topics: ["AWS", "Azure", "GCP"] },
      { id: 19, title: "Step 19: Resume & Portfolio", topics: ["Documentation", "Showcase"] },
      { id: 20, title: "Step 20: Interview Preparation", topics: ["Technical", "HR"] }
    ],
    essentialTools: ["AWS", "Azure", "GCP", "Linux", "Docker", "Kubernetes", "Terraform", "Python", "Git"],
    learningOrder: ["Computer Fundamentals", "Linux", "Networking", "Cloud Fundamentals", "Compute/Storage/Networking", "Containers", "Infrastructure as Code", "CI/CD", "Security", "Monitoring"],
    careerRoles: ["Cloud Engineer", "Cloud Administrator", "Cloud Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Security Engineer", "Platform Engineer", "Solutions Architect"]
  },
  skills: {
    beginner: ["Computer Fundamentals", "Linux", "Networking", "Python", "Git", "Virtualization"],
    intermediate: ["AWS / Azure / GCP", "Docker", "Terraform", "CI/CD", "Cloud Databases", "Monitoring"],
    advanced: ["Cloud Architecture", "Kubernetes", "DevOps", "Multi-Cloud", "Cloud Security", "Cost Optimization"],
    expert: ["Enterprise Architecture", "Zero Trust Security", "Serverless Architecture", "Site Reliability Engineering"]
  },
  resources: [
    { title: "AWS Skill Builder", provider: "AWS", type: "Course", link: "#" },
    { title: "Microsoft Learn", provider: "Microsoft", type: "Documentation", link: "#" },
    { title: "Google Cloud Skills Boost", provider: "Google Cloud", type: "Course", link: "#" },
    { title: "Docker Documentation", provider: "Docker", type: "Documentation", link: "#" },
    { title: "Kubernetes Documentation", provider: "Kubernetes", type: "Documentation", link: "#" },
    { title: "Terraform Documentation", provider: "HashiCorp", type: "Documentation", link: "#" }
  ],
  projects: [
    { title: "Static Website Hosting", difficulty: "Beginner", description: "Host a simple HTML/CSS website on S3.", time: "1 week", techs: ["AWS S3", "HTML/CSS"] },
    { title: "Linux VM Deployment", difficulty: "Beginner", description: "Provision and connect to a Linux virtual machine.", time: "1 week", techs: ["Virtual Machines", "Linux"] },
    { title: "Cloud File Storage", difficulty: "Beginner", description: "Set up and manage object storage.", time: "1 week", techs: ["Cloud Storage"] },
    { title: "Three-Tier Web Application", difficulty: "Intermediate", description: "Deploy a frontend, backend, and database layer architecture.", time: "3 weeks", techs: ["Compute", "Database", "Networking"] },
    { title: "Dockerized Web App", difficulty: "Intermediate", description: "Containerize and run an application using Docker.", time: "2 weeks", techs: ["Docker", "Web App"] },
    { title: "CI/CD Pipeline", difficulty: "Intermediate", description: "Automate code deployment via CI/CD.", time: "2 weeks", techs: ["Jenkins", "GitHub Actions"] },
    { title: "Serverless Web Application", difficulty: "Advanced", description: "Deploy a web app using serverless functions.", time: "3 weeks", techs: ["Serverless", "AWS Lambda"] },
    { title: "Infrastructure as Code with Terraform", difficulty: "Advanced", description: "Automate the provisioning of cloud resources using Terraform.", time: "3 weeks", techs: ["Terraform", "AWS/Azure/GCP"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is Cloud Computing?",
      "Explain IaaS, PaaS, SaaS, and FaaS.",
      "Difference between Public, Private, and Hybrid Cloud?",
      "What is Virtualization?",
      "What is Docker?",
      "What is Kubernetes?",
      "Explain IAM.",
      "What is a VPC?",
      "What is Terraform?",
      "What is High Availability?"
    ],
    codingPractice: ["Linux Commands", "AWS/Azure/GCP Console", "Docker Containers", "Kubernetes Basics", "Terraform Scripts", "Git & GitHub", "CI/CD Pipelines"],
    hrQuestions: [
      "Tell me about yourself.",
      "Why Cloud Computing?",
      "Explain your cloud project.",
      "How do you keep your cloud skills up to date?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹5–9 LPA" },
    { experience: "2–5 Years", range: "₹10–18 LPA" },
    { experience: "5–8 Years", range: "₹18–30 LPA" },
    { experience: "8+ Years", range: "₹30–45+ LPA" }
  ],
  topCompanies: {
    product: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Oracle Cloud", "IBM Cloud"],
    consulting: ["Amazon", "Microsoft", "Google", "IBM", "Oracle", "Cisco", "VMware", "Red Hat"],
    startups: ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "LTIMindtree", "Accenture", "Capgemini"]
  }
};
