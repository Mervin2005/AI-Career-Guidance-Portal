export const vlsiData = {
  careerOverview: {
    title: "VLSI Engineer",
    introduction: "VLSI (Very Large Scale Integration) is the process of designing and manufacturing integrated circuits (ICs) by integrating millions or billions of transistors onto a single chip.",
    whatIsIt: "It is the foundation of modern processors, memory chips, mobile devices, automotive electronics, and AI hardware.",
    keyResponsibilities: [
      "Design digital and analog circuits",
      "Develop RTL using Verilog/SystemVerilog",
      "Perform functional verification",
      "Design ASICs and FPGAs",
      "Conduct Static Timing Analysis (STA)",
      "Perform Physical Design (Floorplanning, Placement, CTS, Routing)",
      "Debug and optimize chip performance"
    ],
    requiredEducation: "Bachelor's or Master's degree in Electronics and Communication Engineering (ECE), Electrical Engineering, or related field.",
    industryDemand: "Very High - Strong demand in Semiconductor, Consumer Electronics, Automotive, AI Hardware, Telecommunications, and IoT industries.",
    futureScope: "Roles like RTL Design Engineer, Verification Engineer, Physical Design Engineer, FPGA Engineer, STA Engineer, DFT Engineer, ASIC Design Engineer.",
    workEnvironment: "Semiconductor companies, EDA tool companies, chip manufacturers, or R&D centers.",
    careerOpportunities: ["RTL Design Engineer", "Verification Engineer", "Physical Design Engineer", "FPGA Engineer", "STA Engineer", "DFT Engineer", "ASIC Design Engineer"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Digital Electronics", topics: ["Logic Gates", "Number Systems", "Boolean Algebra"] },
      { id: 2, title: "Step 2: CMOS Fundamentals", topics: ["CMOS Basics", "Transistors"] },
      { id: 3, title: "Step 3: C Programming", topics: ["Syntax", "Pointers"] },
      { id: 4, title: "Step 4: Linux & TCL Scripting", topics: ["Linux Commands", "TCL"] },
      { id: 5, title: "Step 5: Verilog HDL", topics: ["Syntax", "RTL Coding"] },
      { id: 6, title: "Step 6: FPGA Basics", topics: ["Architecture", "Prototyping"] },
      { id: 7, title: "Step 7: SystemVerilog", topics: ["Advanced Testbenches", "OOP"] },
      { id: 8, title: "Step 8: UVM Verification", topics: ["UVM Architecture", "Coverage"] },
      { id: 9, title: "Step 9: Static Timing Analysis (STA)", topics: ["Setup/Hold Time", "Timing Closure"] },
      { id: 10, title: "Step 10: Physical Design", topics: ["Floorplanning", "CTS", "Routing"] },
      { id: 11, title: "Step 11: Design for Testability (DFT)", topics: ["Scan Chain", "ATPG"] },
      { id: 12, title: "Step 12: Mini & Advanced Projects", topics: ["Implementation", "Testing"] },
      { id: 13, title: "Step 13: Resume & GitHub Portfolio", topics: ["RTL Projects", "Documentation"] },
      { id: 14, title: "Step 14: Interview Preparation", topics: ["Technical Questions", "Aptitude"] }
    ],
    essentialTools: ["Xilinx Vivado", "Intel Quartus", "ModelSim / QuestaSim", "Cadence Virtuoso", "Synopsys Design Compiler", "PrimeTime", "Cadence Innovus"],
    learningOrder: ["Digital Electronics", "CMOS Fundamentals", "C Programming", "Linux & TCL", "Verilog HDL", "FPGA", "SystemVerilog", "UVM", "STA", "Physical Design", "DFT", "Projects"],
    careerRoles: ["RTL Design Engineer", "ASIC Design Engineer", "Verification Engineer", "FPGA Engineer", "Physical Design Engineer", "STA Engineer", "DFT Engineer", "Analog Design Engineer", "Layout Design Engineer"]
  },
  skills: {
    beginner: ["Digital Electronics", "Boolean Algebra", "CMOS Basics", "C Programming", "Number Systems", "Logic Gates"],
    intermediate: ["Verilog HDL", "SystemVerilog", "FPGA Design", "Linux & TCL", "RTL Design", "Testbench Development"],
    advanced: ["UVM Verification", "Static Timing Analysis (STA)", "Physical Design", "DFT", "ASIC Flow", "Scripting (Python/Perl)"],
    expert: ["Chip Architecture", "Low Power Design", "Advanced Node Implementations", "System on Chip (SoC) Design"]
  },
  resources: [
    { title: "NPTEL VLSI Courses", provider: "NPTEL", type: "Course", link: "#" },
    { title: "MIT OpenCourseWare", provider: "MIT", type: "Course", link: "#" },
    { title: "Xilinx Vivado Documentation", provider: "Xilinx", type: "Documentation", link: "#" },
    { title: "CMOS VLSI Design", provider: "Weste & Harris", type: "Book", link: "#" },
    { title: "Verilog HDL", provider: "Samir Palnitkar", type: "Book", link: "#" }
  ],
  projects: [
    { title: "4-bit ALU", difficulty: "Beginner", description: "Design a 4-bit Arithmetic Logic Unit.", time: "1 week", techs: ["Verilog", "Digital Logic"] },
    { title: "Traffic Light Controller", difficulty: "Beginner", description: "FSM-based traffic light controller.", time: "1 week", techs: ["Verilog", "FSM"] },
    { title: "FIFO Design", difficulty: "Intermediate", description: "Synchronous and Asynchronous FIFO design.", time: "2 weeks", techs: ["Verilog", "SystemVerilog"] },
    { title: "SPI / I2C Controller", difficulty: "Intermediate", description: "Design standard communication protocol controllers.", time: "3 weeks", techs: ["RTL", "Verilog"] },
    { title: "RISC Processor", difficulty: "Advanced", description: "Design a 32-bit RISC processor.", time: "6 weeks", techs: ["SystemVerilog", "Computer Architecture"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is VLSI?",
      "Difference between ASIC and FPGA?",
      "Explain CMOS Inverter.",
      "What is Setup Time and Hold Time?",
      "Difference between Verilog and SystemVerilog.",
      "What is RTL?",
      "Explain UVM Architecture.",
      "What is Static Timing Analysis (STA)?",
      "Difference between Blocking and Non-blocking Assignments.",
      "Explain Floorplanning and Clock Tree Synthesis (CTS)."
    ],
    codingPractice: ["Verilog Coding", "SystemVerilog Testbench", "Linux Commands", "FPGA Simulation", "Timing Analysis"],
    hrQuestions: [
      "Tell me about yourself.",
      "Why VLSI?",
      "Explain your VLSI project.",
      "Why should we hire you?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹5–10 LPA" },
    { experience: "2–5 Years", range: "₹10–18 LPA" },
    { experience: "5–8 Years", range: "₹18–30 LPA" },
    { experience: "8+ Years", range: "₹30–45+ LPA" }
  ],
  topCompanies: {
    product: ["Intel", "AMD", "NVIDIA", "Qualcomm", "Broadcom", "MediaTek", "Marvell", "Samsung", "Texas Instruments", "NXP", "STMicroelectronics"],
    consulting: ["Synopsys", "Cadence", "Siemens EDA", "Tata Elxsi", "HCLTech", "Wipro", "Infosys", "LTIMindtree"],
    startups: ["Tata Electronics", "VLSI start-ups"]
  }
};
