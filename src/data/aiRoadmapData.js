export const aiRoadmapData = {
  careerOverview: {
    title: "AI Engineer",
    introduction: "Artificial Intelligence is a rapidly evolving field focused on creating systems capable of learning, reasoning, and problem-solving.",
    whatIsIt: "It involves building intelligent systems using data, machine learning models, and algorithms to automate tasks, provide insights, and generate new content.",
    keyResponsibilities: [
      "Designing and training machine learning models",
      "Analyzing and preprocessing complex datasets",
      "Deploying models into production (MLOps)",
      "Collaborating with data teams and stakeholders"
    ],
    requiredEducation: "Bachelor's degree in Computer Science, Mathematics, Data Science, or a related field.",
    industryDemand: "Extremely High - AI is currently reshaping almost every major industry.",
    futureScope: "Vast opportunities with the explosive growth of Generative AI, autonomous systems, and advanced robotics.",
    workEnvironment: "Tech companies, research labs, startups, or remote settings.",
    careerOpportunities: ["Machine Learning Engineer", "Data Scientist", "NLP Engineer", "Generative AI Engineer"]
  },
  roadmapData: {
    steps: [
      { id: 1, title: "Step 1: Mathematics for AI", topics: ["Linear Algebra", "Probability & Statistics", "Calculus (Basics)", "Matrices & Vectors"] },
      { id: 2, title: "Step 2: Programming Fundamentals", topics: ["Python", "Data Types", "Loops", "Functions", "OOP", "File Handling"] },
      { id: 3, title: "Step 3: Data Structures & Algorithms", topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Searching & Sorting"] },
      { id: 4, title: "Step 4: Python Libraries", topics: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly"] },
      { id: 5, title: "Step 5: SQL & Databases", topics: ["SQL Basics", "MySQL / PostgreSQL", "Data Queries", "Joins", "Aggregations"] },
      { id: 6, title: "Step 6: Data Preprocessing", topics: ["Data Cleaning", "Missing Values", "Feature Engineering", "Data Normalization", "Data Visualization"] },
      { id: 7, title: "Step 7: Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering", "Model Evaluation"] },
      { id: 8, title: "Step 8: Deep Learning", topics: ["Neural Networks", "TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "LSTM"] },
      { id: 9, title: "Step 9: Natural Language Processing (NLP)", topics: ["Text Processing", "Tokenization", "Word Embeddings", "Transformers", "BERT", "GPT Concepts"] },
      { id: 10, title: "Step 10: Computer Vision", topics: ["OpenCV", "Image Processing", "Object Detection", "Image Classification", "YOLO"] },
      { id: 11, title: "Step 11: Generative AI", topics: ["Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "AI Agents", "Vector Databases", "Fine-tuning Basics"] },
      { id: 12, title: "Step 12: MLOps & Deployment", topics: ["Git & GitHub", "Docker", "FastAPI", "Flask", "Model Deployment", "Cloud Basics (AWS/Azure/GCP)"] },
      { id: 13, title: "Step 13: AI Projects", topics: ["Chatbot", "Image Classifier", "Spam Detector", "Recommendation System", "Sentiment Analysis", "AI Career Guidance Portal"] },
      { id: 14, title: "Step 14: Advanced AI", topics: ["Reinforcement Learning", "Explainable AI (XAI)", "AI Ethics", "Multi-Agent Systems"] },
      { id: 15, title: "Step 15: Portfolio & Resume", topics: ["GitHub Portfolio", "AI Project Documentation", "Resume", "LinkedIn Profile"] },
      { id: 16, title: "Step 16: Interview Preparation", topics: ["Python", "Machine Learning", "Deep Learning", "SQL", "AI Case Studies", "Coding Practice"] },
      { id: 17, title: "Step 17: Apply for Jobs", topics: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "NLP Engineer", "Computer Vision Engineer", "Generative AI Engineer", "MLOps Engineer"] }
    ],
    essentialTools: ["Python", "Jupyter Notebook", "Visual Studio Code", "Git & GitHub", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Hugging Face Transformers", "Docker", "FastAPI", "Google Colab"],
    learningOrder: ["Mathematics", "Python Programming", "Data Structures & Algorithms", "SQL", "Data Analysis", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI & LLMs", "MLOps & Deployment", "AI Projects", "Portfolio & Interview Preparation"],
    careerRoles: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "NLP Engineer", "Computer Vision Engineer", "Generative AI Engineer", "Prompt Engineer", "MLOps Engineer", "AI Research Engineer"]
  },
  skills: {
    beginner: ["Python Programming", "Basic Math", "Problem Solving", "Data Manipulation"],
    intermediate: ["Machine Learning", "SQL", "Data Visualization", "Feature Engineering"],
    advanced: ["Deep Learning", "NLP", "Computer Vision", "Model Deployment"],
    expert: ["Generative AI", "MLOps", "Model Fine-tuning", "System Design"]
  },
  resources: [
    { title: "Machine Learning Specialization", provider: "Andrew Ng / Coursera", type: "Course", link: "#" },
    { title: "Deep Learning with PyTorch", provider: "fast.ai", type: "Video", link: "#" },
    { title: "Hugging Face Transformers Documentation", provider: "Hugging Face", type: "Documentation", link: "#" }
  ],
  projects: [
    { title: "Spam Detector", difficulty: "Beginner", description: "Build a basic text classification model to identify spam emails.", time: "1 week", techs: ["Python", "Scikit-learn", "Pandas"] },
    { title: "Recommendation System", difficulty: "Intermediate", description: "Create a collaborative filtering system for movies or products.", time: "3 weeks", techs: ["Python", "Matrix Factorization", "SQL"] },
    { title: "AI Career Guidance Portal", difficulty: "Advanced", description: "Develop an AI-powered RAG system with a React frontend.", time: "6 weeks", techs: ["React", "FastAPI", "LLMs", "Vector DB"] }
  ]
};
