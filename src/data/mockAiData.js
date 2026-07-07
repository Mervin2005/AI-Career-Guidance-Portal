export const generateMockData = (query) => {
  const q = query.toLowerCase();
  const cTitle = query.charAt(0).toUpperCase() + query.slice(1);
  
  return {
    careerOverview: {
      title: cTitle,
      introduction: `${cTitle} is a rapidly growing field focused on designing and building innovative solutions.`,
      whatIsIt: `In simple terms, ${cTitle} involves solving complex problems using advanced methodologies, tools, and analytical thinking.`,
      keyResponsibilities: [
        "Designing scalable systems",
        "Analyzing complex datasets",
        "Collaborating with cross-functional teams",
        "Troubleshooting and optimizing performance"
      ],
      requiredEducation: "Bachelor's degree in Computer Science, Engineering, or related field.",
      industryDemand: "High - 25% projected growth over the next 5 years.",
      futureScope: "Extremely promising with the advent of AI and automation.",
      workEnvironment: "Office, Remote, or Hybrid settings typically found in tech companies, startups, and large enterprises.",
      careerOpportunities: ["Junior Developer", "Senior Engineer", "Architect", "Manager"]
    },
    roadmapData: {
      steps: [
        { id: 1, title: "Step 1: Basics of Electronics", topics: ["Voltage, Current, Resistance", "Ohm's Law", "Basic Electronic Components"] },
        { id: 2, title: "Step 2: Digital Electronics", topics: ["Number Systems", "Boolean Algebra", "Logic Gates", "K-Maps", "Combinational Circuits", "Sequential Circuits"] },
        { id: 3, title: "Step 3: CMOS Fundamentals", topics: ["MOSFET Basics", "CMOS Inverter", "CMOS Logic", "Power & Delay", "Noise Margin"] },
        { id: 4, title: "Step 4: Programming Basics", topics: ["C Programming", "Data Structures (Basics)", "Problem Solving"] },
        { id: 5, title: "Step 5: Linux & Scripting", topics: ["Linux Commands", "Shell Scripting", "TCL Basics", "Python Basics"] },
        { id: 6, title: "Step 6: Verilog HDL", topics: ["Modules", "Data Types", "Operators", "Always Blocks", "Case Statements", "FSM Design", "Testbench"] },
        { id: 7, title: "Step 7: Simulation", topics: ["ModelSim", "Vivado Simulator", "GTKWave", "Debugging"] },
        { id: 8, title: "Step 8: FPGA Basics", topics: ["FPGA Architecture", "Synthesis", "Bitstream Generation", "FPGA Implementation"] },
        { id: 9, title: "Step 9: SystemVerilog", topics: ["Interfaces", "Classes", "Assertions", "Functional Coverage", "Randomization"] },
        { id: 10, title: "Step 10: UVM Verification", topics: ["UVM Architecture", "Driver", "Monitor", "Sequencer", "Scoreboard", "Test Environment"] },
        { id: 11, title: "Step 11: Static Timing Analysis (STA)", topics: ["Timing Paths", "Setup Time", "Hold Time", "Clock Skew", "Timing Closure"] },
        { id: 12, title: "Step 12: Physical Design", topics: ["Floorplanning", "Placement", "Clock Tree Synthesis (CTS)", "Routing", "DRC", "LVS", "Power Planning"] },
        { id: 13, title: "Step 13: DFT (Design for Testability)", topics: ["Scan Chain", "ATPG", "BIST", "JTAG"] },
        { id: 14, title: "Step 14: Mini Projects", topics: ["ALU", "UART", "SPI", "I2C", "FIFO", "Traffic Light Controller", "Vending Machine"] },
        { id: 15, title: "Step 15: Advanced Projects", topics: ["RISC Processor", "Cache Controller", "Memory Controller", "DMA Controller", "AES Encryption"] },
        { id: 16, title: "Step 16: Resume & Portfolio", topics: ["ATS Resume", "GitHub Portfolio", "Project Documentation", "LinkedIn Profile"] },
        { id: 17, title: "Step 17: Interview Preparation", topics: ["Digital Electronics", "Verilog", "SystemVerilog", "UVM", "STA", "Physical Design", "HR Interview", "Mock Interview"] },
        { id: 18, title: "Step 18: Apply for Jobs", topics: ["RTL Design Engineer", "Verification Engineer", "Physical Design Engineer", "STA Engineer", "FPGA Engineer", "DFT Engineer"] }
      ],
      essentialTools: ["Xilinx Vivado", "Intel Quartus Prime", "ModelSim / QuestaSim", "Cadence Virtuoso", "Synopsys Design Compiler", "PrimeTime", "Cadence Innovus", "IC Compiler II", "Git", "Linux Terminal"],
      learningOrder: ["Digital Electronics", "CMOS Fundamentals", "C Programming", "Linux & TCL", "Verilog HDL", "FPGA Basics", "SystemVerilog", "UVM", "STA", "Physical Design", "DFT", "Projects", "Resume & Interview", "Job Applications"],
      careerRoles: ["RTL Design Engineer", "Verification Engineer", "Physical Design Engineer", "FPGA Engineer", "STA Engineer", "DFT Engineer", "ASIC Design Engineer", "Design Validation Engineer"]
    },
    skills: {
      beginner: ["Basic Math", "Problem Solving", "Communication", "Computer Literacy"],
      intermediate: ["Programming", "Data Structures", "Version Control", "Algorithms"],
      advanced: ["System Design", "Cloud Deployment", "Optimization", "Security"],
      expert: ["Architecture", "Leadership", "Research", "Innovation"]
    },
    resources: [
      { title: `Complete ${cTitle} Masterclass`, provider: "Coursera", type: "Course", link: "#" },
      { title: `Official ${cTitle} Documentation`, provider: "Industry Standard", type: "Documentation", link: "#" },
      { title: "Advanced Techniques Tutorial", provider: "YouTube", type: "Video", link: "#" }
    ],
    projects: [
      { title: "Simple Analytics Dashboard", difficulty: "Beginner", description: "Build a basic dashboard to track metrics.", time: "1 week", techs: ["HTML", "CSS", "JS"] },
      { title: "Automated Data Pipeline", difficulty: "Intermediate", description: "Create a pipeline that processes and cleans incoming data streams.", time: "3 weeks", techs: ["Python", "SQL", "Docker"] },
      { title: "AI Predictive Model Engine", difficulty: "Advanced", description: "Design a full-scale AI engine that predicts future trends based on historical data.", time: "8 weeks", techs: ["TensorFlow", "AWS", "FastAPI"] }
    ]
  };
};
