export const embeddedSystemsData = {
  careerOverview: {
    title: "Embedded Systems Engineer",
    introduction: "Embedded Systems is a branch of electronics and computer engineering that focuses on designing hardware and software for dedicated devices.",
    whatIsIt: "These systems are used in automobiles, consumer electronics, medical devices, industrial automation, IoT, aerospace, and robotics.",
    keyResponsibilities: [
      "Design embedded hardware and firmware",
      "Develop applications using C/C++",
      "Interface sensors, actuators, and communication modules",
      "Debug hardware and software",
      "Design and test PCBs",
      "Optimize memory and power consumption",
      "Integrate communication protocols"
    ],
    requiredEducation: "Bachelor's degree in Electronics, Electrical, Computer Engineering or related field.",
    industryDemand: "Very High - Growing demand in Automotive, IoT, Consumer Electronics, Medical Devices, Industrial Automation, and Aerospace.",
    futureScope: "IoT Engineer, Embedded Software Engineer, Firmware Engineer, Automotive Embedded Engineer, Robotics Engineer, Hardware Design Engineer.",
    workEnvironment: "Hardware labs, tech companies, manufacturing facilities, or R&D centers.",
    careerOpportunities: ["Embedded Systems Engineer", "Embedded Software Engineer", "Firmware Engineer", "IoT Engineer", "Hardware Design Engineer", "Automotive Embedded Engineer"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Electronics Fundamentals", topics: ["Voltage", "Current", "Resistance", "Ohm's Law"] },
      { id: 2, title: "Step 2: Digital Electronics", topics: ["Logic Gates", "Flip Flops", "Combinational Circuits", "Sequential Circuits"] },
      { id: 3, title: "Step 3: C Programming", topics: ["Syntax", "Pointers", "Memory Management", "Data Structures"] },
      { id: 4, title: "Step 4: Microcontrollers", topics: ["8051", "AVR", "PIC", "Architecture"] },
      { id: 5, title: "Step 5: ARM Cortex-M & STM32", topics: ["ARM Architecture", "STM32 Basics", "Registers"] },
      { id: 6, title: "Step 6: Embedded C Programming", topics: ["Bitwise Operations", "Volatile Keyword", "Memory Mapping"] },
      { id: 7, title: "Step 7: Communication Protocols", topics: ["UART", "SPI", "I2C", "CAN", "USB"] },
      { id: 8, title: "Step 8: RTOS", topics: ["FreeRTOS", "Task Scheduling", "Semaphores", "Mutexes"] },
      { id: 9, title: "Step 9: Embedded Linux (Basics)", topics: ["Linux Kernel", "Device Drivers", "Yocto Project"] },
      { id: 10, title: "Step 10: PCB Design", topics: ["KiCad", "Altium", "Schematics", "Layout"] },
      { id: 11, title: "Step 11: IoT", topics: ["ESP32", "Wi-Fi", "Bluetooth", "MQTT"] },
      { id: 12, title: "Step 12: Real-world Projects", topics: ["Prototyping", "Hardware Integration", "Testing"] },
      { id: 13, title: "Step 13: Resume & Portfolio", topics: ["GitHub", "Documentation", "Project Showcase"] },
      { id: 14, title: "Step 14: Interview Preparation", topics: ["Technical Questions", "Coding Practice", "Mock Interviews"] }
    ],
    essentialTools: ["C/C++", "STM32CubeIDE", "Arduino IDE", "FreeRTOS", "KiCad", "Altium Designer", "Logic Analyzer", "Oscilloscope", "ESP-IDF"],
    learningOrder: ["Electronics Fundamentals", "Digital Electronics", "C Programming", "Microcontrollers", "ARM Cortex-M & STM32", "Embedded C Programming", "Communication Protocols", "RTOS (FreeRTOS)", "Embedded Linux (Basics)", "PCB Design", "IoT", "Real-world Projects"],
    careerRoles: ["Embedded Systems Engineer", "Embedded Software Engineer", "Firmware Engineer", "IoT Engineer", "Hardware Design Engineer", "PCB Design Engineer", "Automotive Embedded Engineer", "Robotics Engineer", "Device Driver Engineer"]
  },
  skills: {
    beginner: ["Basic Electronics", "Digital Electronics", "C Programming", "Circuit Design", "Arduino", "Microcontrollers"],
    intermediate: ["Embedded C", "STM32", "UART, SPI, I2C", "Timers & Interrupts", "ESP32", "PCB Design"],
    advanced: ["Embedded Linux", "RTOS (FreeRTOS)", "Device Drivers", "Bootloaders", "ARM Architecture", "IoT & Edge AI"],
    expert: ["System Architecture", "Advanced Hardware Design", "Real-time Systems", "Security"]
  },
  resources: [
    { title: "STM32CubeIDE Documentation", provider: "STMicroelectronics", type: "Documentation", link: "#" },
    { title: "Arduino Documentation", provider: "Arduino", type: "Documentation", link: "#" },
    { title: "ESP-IDF Documentation", provider: "Espressif", type: "Documentation", link: "#" },
    { title: "FreeRTOS Documentation", provider: "FreeRTOS", type: "Documentation", link: "#" },
    { title: "Embedded C Programming and the Microchip PIC", provider: "Book", type: "Book", link: "#" },
    { title: "The Definitive Guide to ARM Cortex-M", provider: "Book", type: "Book", link: "#" },
    { title: "Making Embedded Systems", provider: "Book", type: "Book", link: "#" }
  ],
  projects: [
    { title: "Traffic Light Controller", difficulty: "Beginner", description: "Design a traffic light system using a microcontroller.", time: "1 week", techs: ["C", "Microcontroller", "LEDs"] },
    { title: "Smart Door Lock", difficulty: "Intermediate", description: "Build an RFID or password based door lock system.", time: "3 weeks", techs: ["STM32", "RFID", "Embedded C"] },
    { title: "Weather Monitoring System", difficulty: "Intermediate", description: "Create an IoT device that sends weather data to a server.", time: "3 weeks", techs: ["ESP32", "Sensors", "MQTT"] },
    { title: "Battery Management System (BMS)", difficulty: "Advanced", description: "Develop a BMS for monitoring Li-ion batteries.", time: "6 weeks", techs: ["STM32", "ADC", "CAN Bus"] },
    { title: "Automotive CAN Bus Monitoring", difficulty: "Advanced", description: "Interface with a vehicle's CAN network to read telemetry.", time: "5 weeks", techs: ["CAN", "ARM Cortex-M", "C"] }
  ],
  interviewPrep: {
    technicalQuestions: [
      "What is an Embedded System?",
      "Difference between Microcontroller and Microprocessor?",
      "Explain Interrupts.",
      "What is UART?",
      "Difference between SPI and I2C?",
      "What is PWM?",
      "What is RTOS?",
      "Explain Watchdog Timer.",
      "Difference between Flash and RAM.",
      "Explain CAN Protocol."
    ],
    codingPractice: ["Embedded C Programs", "Bit Manipulation", "Pointer-based Programs", "Peripheral Drivers"],
    hrQuestions: [
      "Tell me about yourself.",
      "Explain your embedded project.",
      "Why do you want to work in Embedded Systems?",
      "How do you debug hardware and firmware issues?"
    ]
  },
  salaryInsights: [
    { experience: "Fresher", range: "₹4–8 LPA" },
    { experience: "2–5 Years", range: "₹8–15 LPA" },
    { experience: "5–8 Years", range: "₹15–25 LPA" },
    { experience: "8+ Years", range: "₹25–40+ LPA" }
  ],
  topCompanies: {
    product: ["Qualcomm", "Intel", "Samsung", "Bosch", "Honeywell", "Siemens", "Texas Instruments", "NXP", "STMicroelectronics", "Microchip"],
    consulting: ["Tata Elxsi", "HCLTech", "LTIMindtree", "Wipro", "Infosys", "TCS", "Capgemini"],
    startups: ["Ather Energy", "Ola Electric", "Hardware/IoT Startups"]
  }
};
