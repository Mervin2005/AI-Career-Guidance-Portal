export const pcbDesignData = {
  careerOverview: {
    title: "PCB Design Engineer",
    introduction: "PCB (Printed Circuit Board) Design is the process of designing electronic circuit boards that connect and support electronic components.",
    whatIsIt: "PCB designers create schematics, lay out components, route signal traces, and prepare manufacturing files for electronic products.",
    keyResponsibilities: [
      "Design electronic schematics",
      "Create PCB layouts (2-layer, 4-layer, multilayer)",
      "Select electronic components",
      "Perform signal and power routing",
      "Apply Design Rule Checks (DRC) and Electrical Rule Checks (ERC)",
      "Generate Gerber, BOM, and Pick & Place files",
      "Collaborate with hardware, embedded, and manufacturing teams"
    ],
    requiredEducation: "Bachelor's degree in Electrical/Electronics Engineering or related field.",
    industryDemand: "High - PCB designers are in demand in Consumer Electronics, Automotive, Medical Devices, Industrial Automation, IoT, Aerospace, and Telecommunications.",
    futureScope: "Roles like PCB Design Engineer, Hardware Design Engineer, Electronics Design Engineer, Embedded Hardware Engineer, Product Design Engineer, R&D Engineer.",
    workEnvironment: "Primarily office or lab environments, often collaborating with hardware and manufacturing teams.",
    careerOpportunities: ["PCB Design Engineer", "Hardware Design Engineer", "Electronics Design Engineer", "Embedded Hardware Engineer", "Product Design Engineer", "R&D Engineer"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Electronics Fundamentals", topics: ["Basic Electronics"] },
      { id: 2, title: "Step 2: Circuit Analysis", topics: ["AC/DC", "Ohm's Law", "KVL", "KCL"] },
      { id: 3, title: "Step 3: Electronic Components", topics: ["Resistors", "Capacitors", "ICs"] },
      { id: 4, title: "Step 4: Schematic Design", topics: ["Circuit Symbols", "Netlists"] },
      { id: 5, title: "Step 5: KiCad / Altium Designer", topics: ["EDA Tools", "Libraries"] },
      { id: 6, title: "Step 6: PCB Layout Design", topics: ["Component Placement", "Routing"] },
      { id: 7, title: "Step 7: PCB Design Rules", topics: ["DRC", "ERC"] },
      { id: 8, title: "Step 8: Power & Ground Plane Design", topics: ["Stackups", "Polygons"] },
      { id: 9, title: "Step 9: High-Speed PCB Design", topics: ["Signal Integrity", "EMI/EMC"] },
      { id: 10, title: "Step 10: Gerber, BOM & Manufacturing Files", topics: ["Exporting", "DFM"] },
      { id: 11, title: "Step 11: PCB Fabrication & Assembly", topics: ["Sourcing", "Soldering"] },
      { id: 12, title: "Step 12: Testing & Debugging", topics: ["Multimeter", "Oscilloscope"] },
      { id: 13, title: "Step 13: Real-world PCB Projects", topics: ["Prototyping", "Testing"] },
      { id: 14, title: "Step 14: Resume & Portfolio", topics: ["Documentation", "GitHub"] },
      { id: 15, title: "Step 15: Interview Preparation", topics: ["Mock Interviews", "Core Concepts"] }
    ],
    essentialTools: ["KiCad", "Altium Designer", "Multimeter", "Oscilloscope", "Soldering Iron"],
    learningOrder: ["Electronics Fundamentals", "Circuit Analysis", "Electronic Components", "Schematic Design", "KiCad / Altium", "PCB Layout Design", "PCB Design Rules", "Power & Ground", "High-Speed PCB Design", "Manufacturing Files", "Fabrication", "Testing & Debugging"],
    careerRoles: ["PCB Design Engineer", "Hardware Design Engineer", "Electronics Design Engineer", "Embedded Hardware Engineer", "Product Design Engineer", "Hardware Validation Engineer", "R&D Engineer", "Electronics Test Engineer"]
  },
  skills: {
    beginner: ["Basic Electronics", "Circuit Analysis", "Electronic Components", "PCB Basics", "Multimeter Usage", "Soldering Basics"],
    intermediate: ["KiCad / Altium", "Schematic Capture", "PCB Routing", "DRC & ERC", "Gerber Generation", "BOM Creation"],
    advanced: ["High-Speed PCB Design", "Signal Integrity (SI)", "Power Integrity (PI)", "EMI/EMC Design", "Multilayer PCB Design", "Design for Manufacturing (DFM)"],
    expert: ["RF Design", "Complex HDI Stackups", "Advanced Thermal Management"]
  },
  resources: [
    { title: "KiCad Documentation", provider: "KiCad", type: "Documentation", link: "#" },
    { title: "Altium Education Resources", provider: "Altium", type: "Course", link: "#" },
    { title: "DigiKey Learning Center", provider: "DigiKey", type: "Course", link: "#" },
    { title: "Texas Instruments Design Resources", provider: "TI", type: "Documentation", link: "#" },
    { title: "STMicroelectronics Application Notes", provider: "ST", type: "Documentation", link: "#" },
    { title: "Complete PCB Design Using KiCad", provider: "Book", type: "Book", link: "#" },
    { title: "High-Speed Digital Design", provider: "Book", type: "Book", link: "#" },
    { title: "Printed Circuit Board Design Techniques", provider: "Book", type: "Book", link: "#" }
  ],
  projects: [
    { title: "LED Flasher PCB", difficulty: "Beginner", description: "Design a simple LED flasher circuit.", time: "1 week", techs: ["KiCad", "555 Timer"] },
    { title: "5V Regulated Power Supply", difficulty: "Beginner", description: "Linear power supply board design.", time: "1 week", techs: ["Schematics", "Routing"] },
    { title: "Arduino Sensor Shield", difficulty: "Beginner", description: "Create a custom shield for Arduino.", time: "1 week", techs: ["Altium", "THT"] },
    { title: "ESP32 Development Board", difficulty: "Intermediate", description: "Custom ESP32 board with power and USB.", time: "3 weeks", techs: ["SMD", "Impedance"] },
    { title: "Battery Charger PCB", difficulty: "Intermediate", description: "Li-ion battery charger circuit.", time: "2 weeks", techs: ["Power Routing", "Thermal Vias"] },
    { title: "Smart Home Controller", difficulty: "Intermediate", description: "Relay board with MCU integration.", time: "3 weeks", techs: ["Relays", "Mains Isolation"] },
    { title: "IoT Smart Agriculture PCB", difficulty: "Advanced", description: "Sensor hub with wireless communication.", time: "5 weeks", techs: ["RF", "Low Power"] },
    { title: "Battery Management System (BMS)", difficulty: "Advanced", description: "Complex power distribution and monitoring.", time: "6 weeks", techs: ["High Current", "Multilayer"] },
    { title: "Drone Flight Controller PCB", difficulty: "Advanced", description: "High-density MCU and IMU integration.", time: "5 weeks", techs: ["HDI", "Signal Integrity"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is a PCB?",
      "Difference between single-layer and multilayer PCBs?",
      "What is a Gerber file?",
      "Explain DRC and ERC.",
      "What is a ground plane?",
      "Why are decoupling capacitors used?",
      "What is impedance matching?",
      "Explain EMI and EMC.",
      "What is differential pair routing?",
      "What is Design for Manufacturability (DFM)?"
    ],
    codingPractice: ["Schematic Design", "PCB Routing", "KiCad/Altium Shortcuts", "Gerber File Generation", "PCB Testing & Debugging"],
    hrQuestions: [
      "Tell me about yourself.",
      "Explain your PCB project.",
      "Why do you want to work in PCB Design?",
      "How do you handle PCB design challenges?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹3.5–7 LPA" },
    { experience: "2–5 Years", range: "₹7–12 LPA" },
    { experience: "5–8 Years", range: "₹12–18 LPA" },
    { experience: "8+ Years", range: "₹18–25+ LPA" }
  ],
  topCompanies: {
    product: ["Texas Instruments", "STMicroelectronics", "NXP Semiconductors", "Analog Devices", "Infineon Technologies", "Microchip Technology", "Renesas Electronics"],
    consulting: ["Foxconn", "Jabil", "Flex", "Sanmina", "VVDN Technologies", "Tata Elxsi", "HCLTech", "Wipro"],
    startups: ["Tata Electronics", "Kaynes Technology", "Syrma SGS Technology", "Bharat Electronics Limited (BEL)"]
  }
};
