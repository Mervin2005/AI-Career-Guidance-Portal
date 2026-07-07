export const cloudEngineerData = {
  careerOverview: {
    title: "Cloud Engineer",
    introduction: "A Cloud Engineer is responsible for building, deploying, managing, monitoring, and maintaining cloud infrastructure and applications.",
    whatIsIt: "They use cloud platforms such as AWS, Microsoft Azure, and Google Cloud Platform (GCP) to ensure systems are scalable, secure, reliable, and cost-efficient.",
    keyResponsibilities: [
      "Deploy cloud infrastructure",
      "Configure Virtual Machines (VMs)",
      "Manage cloud storage and databases",
      "Build and deploy applications",
      "Automate infrastructure using Infrastructure as Code (IaC)",
      "Monitor cloud resources and performance",
      "Implement security best practices",
      "Troubleshoot cloud infrastructure issues"
    ],
    requiredEducation: "Bachelor's degree in Computer Science, IT, or related field. Cloud certifications are highly recommended.",
    industryDemand: "Extremely High 📈 - Cloud Engineers are in high demand across IT Services, Banking, Healthcare, E-commerce, Telecommunications, SaaS, and Government sectors.",
    futureScope: "Roles like Cloud Engineer, Cloud Administrator, DevOps Engineer, Site Reliability Engineer (SRE), Cloud Security Engineer, Cloud Architect",
    workEnvironment: "Tech companies, consulting firms, enterprises, and remote-first organizations.",
    careerOpportunities: ["Cloud Engineer", "Cloud Administrator", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Operations Engineer", "Cloud Security Engineer", "Infrastructure Engineer", "Platform Engineer"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Computer Fundamentals", topics: ["OS", "Hardware", "Networking"] },
      { id: 2, title: "Step 2: Linux Administration", topics: ["File System", "Shell Commands"] },
      { id: 3, title: "Step 3: Networking", topics: ["TCP/IP", "DNS", "HTTP/HTTPS", "VPN"] },
      { id: 4, title: "Step 4: Programming & Scripting", topics: ["Python", "Bash"] },
      { id: 5, title: "Step 5: Git & GitHub", topics: ["Version Control", "Repositories"] },
      { id: 6, title: "Step 6: Cloud Fundamentals", topics: ["AWS", "Azure", "GCP"] },
      { id: 7, title: "Step 7: Compute Services", topics: ["EC2", "Azure VM", "Compute Engine"] },
      { id: 8, title: "Step 8: Storage & Databases", topics: ["S3", "EBS", "RDS", "Cloud SQL"] },
      { id: 9, title: "Step 9: Networking Services", topics: ["VPC", "Load Balancer", "CDN"] },
      { id: 10, title: "Step 10: Containers", topics: ["Docker"] },
      { id: 11, title: "Step 11: Container Orchestration", topics: ["Kubernetes Basics"] },
      { id: 12, title: "Step 12: Infrastructure as Code", topics: ["Terraform"] },
      { id: 13, title: "Step 13: CI/CD", topics: ["GitHub Actions", "Jenkins"] },
      { id: 14, title: "Step 14: Monitoring & Logging", topics: ["CloudWatch", "Azure Monitor"] },
      { id: 15, title: "Step 15: Cloud Security", topics: ["IAM", "Encryption"] },
      { id: 16, title: "Step 16: Real-world Projects", topics: ["Deployments", "Architecture"] },
      { id: 17, title: "Step 17: Resume & Portfolio", topics: ["Documentation", "Showcase"] },
      { id: 18, title: "Step 18: Interview Preparation", topics: ["Technical", "HR"] }
    ],
    essentialTools: ["AWS", "Azure", "GCP", "Linux", "Docker", "Kubernetes", "Terraform", "Python", "Git"],
    learningOrder: ["Linux", "Networking", "Programming", "Cloud Fundamentals", "Compute/Storage/Network", "Containers", "Infrastructure as Code", "CI/CD", "Security", "Monitoring"],
    careerRoles: ["Cloud Engineer", "Cloud Administrator", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Cloud Operations Engineer", "Cloud Security Engineer", "Infrastructure Engineer", "Platform Engineer"]
  },
  skills: {
    beginner: ["Linux", "Networking", "Git", "Python", "Bash", "OS Basics"],
    intermediate: ["AWS/Azure/GCP", "Docker", "Cloud Storage", "Virtual Networks", "Databases", "IAM"],
    advanced: ["Kubernetes", "Terraform", "CI/CD", "Cloud Security", "Monitoring & Logging", "High Availability"],
    expert: ["Multi-Cloud Architecture", "Advanced Networking", "FinOps", "Site Reliability Engineering"]
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
    { title: "Deploy a Static Website on AWS S3", difficulty: "Beginner", description: "Host a simple HTML/CSS website on S3.", time: "1 week", techs: ["AWS S3", "HTML/CSS"] },
    { title: "Create a Linux VM on Azure", difficulty: "Beginner", description: "Provision and connect to a Linux virtual machine.", time: "1 week", techs: ["Azure VM", "Linux"] },
    { title: "Configure Cloud Storage Backup", difficulty: "Beginner", description: "Set up automated backups using cloud storage.", time: "1 week", techs: ["Cloud Storage", "Backup"] },
    { title: "Three-Tier Web Application", difficulty: "Intermediate", description: "Deploy a frontend, backend, and database layer architecture.", time: "3 weeks", techs: ["Compute", "Database", "Networking"] },
    { title: "Dockerized Web Application", difficulty: "Intermediate", description: "Containerize and run an application using Docker.", time: "2 weeks", techs: ["Docker", "Web App"] },
    { title: "CI/CD Pipeline using GitHub Actions", difficulty: "Intermediate", description: "Automate code deployment via CI/CD.", time: "2 weeks", techs: ["GitHub Actions", "Git"] },
    { title: "Multi-Region Cloud Deployment", difficulty: "Advanced", description: "Design a highly available architecture spanning multiple regions.", time: "4 weeks", techs: ["Load Balancer", "Auto Scaling", "Disaster Recovery"] },
    { title: "Infrastructure as Code with Terraform", difficulty: "Advanced", description: "Automate the provisioning of cloud resources using Terraform.", time: "3 weeks", techs: ["Terraform", "AWS/Azure/GCP"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is Cloud Computing?",
      "Explain IaaS, PaaS, and SaaS.",
      "What is Virtualization?",
      "What is Docker?",
      "What is Kubernetes?",
      "Explain IAM.",
      "What is VPC?",
      "Difference between Load Balancer and Auto Scaling?",
      "What is Terraform?",
      "Explain High Availability."
    ],
    codingPractice: ["Linux Commands", "AWS/Azure/GCP Console", "Docker Containers", "Kubernetes Basics", "Terraform Scripts", "Git & GitHub", "CI/CD Pipelines"],
    hrQuestions: [
      "Tell me about yourself.",
      "Why Cloud Engineering?",
      "Explain your cloud project.",
      "How do you troubleshoot deployment issues?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹5–9 LPA" },
    { experience: "2–5 Years", range: "₹10–18 LPA" },
    { experience: "5–8 Years", range: "₹18–28 LPA" },
    { experience: "8+ Years", range: "₹28–35+ LPA" }
  ],
  topCompanies: {
    product: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)", "Oracle Cloud", "IBM Cloud"],
    consulting: ["Amazon", "Microsoft", "Google", "IBM", "Oracle", "Cisco", "VMware", "Red Hat"],
    startups: ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "LTIMindtree", "Accenture", "Capgemini"]
  }
};
