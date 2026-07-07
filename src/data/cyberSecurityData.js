export const cyberSecurityData = {
  careerOverview: {
    title: "Cyber Security Professional",
    introduction: "Cyber Security is the practice of protecting computers, networks, applications, and data from cyber threats, attacks, unauthorized access, and data breaches.",
    whatIsIt: "It involves implementing security measures to safeguard information and systems against digital attacks.",
    keyResponsibilities: [
      "Monitor and secure networks",
      "Identify and fix security vulnerabilities",
      "Perform penetration testing",
      "Conduct security audits",
      "Respond to cyber incidents",
      "Implement firewalls and security policies",
      "Protect cloud infrastructure and applications"
    ],
    requiredEducation: "Bachelor's degree in Computer Science, Cyber Security, Information Technology, or a related field.",
    industryDemand: "Very High - Strong demand across Banking, Healthcare, Government, IT Services, Cloud Computing, E-commerce, and Telecommunications.",
    futureScope: "Roles like Cyber Security Analyst, Penetration Tester, SOC Analyst, Security Engineer, Cloud Security Engineer, Incident Response Analyst, and Digital Forensics Expert.",
    workEnvironment: "Tech companies, government agencies, financial institutions, and specialized security operation centers (SOCs).",
    careerOpportunities: ["Cyber Security Analyst", "SOC Analyst", "Penetration Tester", "Security Engineer", "Cloud Security Engineer", "Incident Response Analyst", "Threat Intelligence Analyst"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Computer Fundamentals", topics: ["Hardware basics", "OS Basics", "File Systems"] },
      { id: 2, title: "Step 2: Networking Fundamentals", topics: ["TCP/IP", "OSI Model", "DNS", "HTTP"] },
      { id: 3, title: "Step 3: Linux & Windows Administration", topics: ["Command Line", "Permissions", "Active Directory"] },
      { id: 4, title: "Step 4: Programming Basics", topics: ["Python", "Bash Scripting", "Automation"] },
      { id: 5, title: "Step 5: Cyber Security Fundamentals", topics: ["CIA Triad", "Cryptography Basics", "Identity & Access Management"] },
      { id: 6, title: "Step 6: Web Security", topics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF"] },
      { id: 7, title: "Step 7: Ethical Hacking", topics: ["Reconnaissance", "Scanning", "Exploitation"] },
      { id: 8, title: "Step 8: Penetration Testing", topics: ["Network Pentesting", "Web App Pentesting", "Reporting"] },
      { id: 9, title: "Step 9: Digital Forensics", topics: ["Incident Response", "Evidence Collection", "Memory Forensics"] },
      { id: 10, title: "Step 10: Cloud Security", topics: ["AWS Security", "Azure Security", "IAM Policies"] },
      { id: 11, title: "Step 11: Security Tools", topics: ["Wireshark", "Metasploit", "Burp Suite", "Nmap"] },
      { id: 12, title: "Step 12: Real-world Projects", topics: ["Vulnerability Scanners", "Firewall Configuration", "SIEM Setup"] },
      { id: 13, title: "Step 13: Resume & Portfolio", topics: ["Certifications (CompTIA, CEH)", "Bug Bounty Profiles", "GitHub"] },
      { id: 14, title: "Step 14: Interview Preparation", topics: ["Technical Questions", "Security Concepts", "Mock Interviews"] }
    ],
    essentialTools: ["Linux", "Wireshark", "Nmap", "Metasploit", "Burp Suite", "Python", "Splunk (SIEM)", "Kali Linux"],
    learningOrder: ["Computer Fundamentals", "Networking Fundamentals", "Linux & Windows Admin", "Programming Basics", "Cyber Security Fundamentals", "Web Security", "Ethical Hacking", "Penetration Testing", "Cloud Security", "Real-world Projects", "Certifications"],
    careerRoles: ["Cyber Security Analyst", "SOC Analyst", "Penetration Tester (Ethical Hacker)", "Security Engineer", "Security Consultant", "Cloud Security Engineer", "Incident Response Analyst", "Digital Forensics Analyst", "Threat Intelligence Analyst"]
  },
  skills: {
    beginner: ["Computer Fundamentals", "Networking", "Windows", "Basic Security Concepts", "Command Line", "Git Basics"],
    intermediate: ["Linux Administration", "Python", "Ethical Hacking", "Penetration Testing", "Web Security", "Wireshark"],
    advanced: ["Cloud Security", "Malware Analysis", "Reverse Engineering", "Threat Hunting", "Digital Forensics", "SIEM (Splunk, QRadar)"],
    expert: ["Security Architecture", "Zero Trust Networks", "Advanced Persistent Threats (APT)", "Compliance & Governance"]
  },
  resources: [
    { title: "OWASP Documentation", provider: "OWASP", type: "Documentation", link: "#" },
    { title: "Cisco Skills for All", provider: "Cisco", type: "Course", link: "#" },
    { title: "TryHackMe (Beginner Labs)", provider: "TryHackMe", type: "Tool", link: "#" },
    { title: "Hack The Box Academy", provider: "Hack The Box", type: "Course", link: "#" },
    { title: "The Web Application Hacker's Handbook", provider: "Book", type: "Book", link: "#" }
  ],
  projects: [
    { title: "Password Strength Checker", difficulty: "Beginner", description: "Develop a tool to evaluate password complexity.", time: "1 week", techs: ["Python", "Regex"] },
    { title: "Port Scanner (Python)", difficulty: "Beginner", description: "Create a simple network port scanner.", time: "1 week", techs: ["Python", "Sockets"] },
    { title: "Vulnerability Scanner", difficulty: "Intermediate", description: "Build a script to check for common system vulnerabilities.", time: "3 weeks", techs: ["Python", "Bash"] },
    { title: "Web Security Testing Lab", difficulty: "Intermediate", description: "Set up a lab and perform tests against vulnerable web apps.", time: "4 weeks", techs: ["Burp Suite", "OWASP"] },
    { title: "SIEM Dashboard", difficulty: "Advanced", description: "Configure a centralized logging and monitoring dashboard.", time: "6 weeks", techs: ["Splunk / ELK", "Linux"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is Cyber Security?",
      "Explain the CIA Triad.",
      "Difference between Vulnerability, Threat, and Risk.",
      "What is SQL Injection?",
      "Explain Cross-Site Scripting (XSS).",
      "What is a Firewall?",
      "Difference between IDS and IPS.",
      "Explain VPN.",
      "What is Encryption?",
      "What is Multi-Factor Authentication (MFA)?"
    ],
    codingPractice: ["Linux Commands", "Networking Troubleshooting", "Python Scripting", "Wireshark Packet Analysis", "Basic Web Security Testing"],
    hrQuestions: [
      "Tell me about yourself.",
      "Why Cyber Security?",
      "Describe a security project you built.",
      "How do you stay updated with new cyber threats?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹5–9 LPA" },
    { experience: "2–5 Years", range: "₹10–18 LPA" },
    { experience: "5–8 Years", range: "₹18–30 LPA" },
    { experience: "8+ Years", range: "₹30–50+ LPA" }
  ],
  topCompanies: {
    product: ["Google", "Microsoft", "Amazon", "IBM", "Cisco", "Palo Alto Networks", "CrowdStrike", "Fortinet", "Check Point Software", "Cloudflare"],
    consulting: ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "Accenture", "Deloitte", "Capgemini"],
    startups: ["Security start-ups", "Bug Bounty Platforms"]
  }
};
