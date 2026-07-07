import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateMockData } from './mockAiData';
import { pcbDesignData } from './pcbDesignData';
import { aiRoadmapData } from './aiRoadmapData';
import { dataScienceData } from './dataScienceData';
import { embeddedSystemsData } from './embeddedSystemsData';
import { cyberSecurityData } from './cyberSecurityData';
import { vlsiData } from './vlsiData';
import { artificialIntelligenceData } from './artificialIntelligenceData';
import { graphicDesignData } from './graphicDesignData';
import { uiuxDesignData } from './uiuxDesignData';
import { fullStackData } from './fullStackData';
import { cloudArchitectData } from './cloudArchitectData';
import { cloudEngineerData } from './cloudEngineerData';
import { cloudComputingData } from './cloudComputingData';
import { aiPromptEngineerData } from './aiPromptEngineerData';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const jsonSchema = `
{
  "careerOverview": {
    "title": "String (Job Title)",
    "introduction": "String (2 sentences intro)",
    "whatIsIt": "String (Brief explanation)",
    "keyResponsibilities": ["String", "String", "String", "String"],
    "requiredEducation": "String",
    "industryDemand": "String",
    "futureScope": "String",
    "workEnvironment": "String",
    "careerOpportunities": ["String", "String", "String", "String"]
  },
  "roadmapData": {
    "steps": [
      { 
        "id": 1, 
        "title": "String (e.g. Step 1: Basics of Electronics)", 
        "topics": ["String", "String", "String"] 
      }
      // Generate 12 to 18 detailed steps in exactly this format.
    ],
    "essentialTools": ["String", "String", "String"],
    "learningOrder": ["String", "String", "String"],
    "careerRoles": ["String", "String", "String"]
  },
  "skills": {
    "beginner": ["String", "String", "String", "String"],
    "intermediate": ["String", "String", "String", "String"],
    "advanced": ["String", "String", "String", "String"],
    "expert": ["String", "String", "String", "String"]
  },
  "resources": [
    { "title": "String", "provider": "String", "type": "Course | Documentation | Video", "link": "#" },
    { "title": "String", "provider": "String", "type": "Course | Documentation | Video", "link": "#" },
    { "title": "String", "provider": "String", "type": "Course | Documentation | Video", "link": "#" }
  ],
  "projects": [
    { "title": "String", "difficulty": "Beginner", "description": "String", "time": "String", "techs": ["String", "String", "String"] },
    { "title": "String", "difficulty": "Intermediate", "description": "String", "time": "String", "techs": ["String", "String", "String"] },
    { "title": "String", "difficulty": "Advanced", "description": "String", "time": "String", "techs": ["String", "String", "String"] }
  ]
}
`;

export const generateAIData = async (query) => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (normalizedQuery === 'full stack web development' || normalizedQuery === 'full stack development' || normalizedQuery === 'full stack developer') {
    return fullStackData;
  }
  
  if (normalizedQuery === 'ui/ux design' || normalizedQuery === 'ui ux design' || normalizedQuery === 'ui/ux designer' || normalizedQuery === 'ui ux') {
    return uiuxDesignData;
  }
  if (normalizedQuery === 'graphic design' || normalizedQuery === 'graphic designer') {
    return graphicDesignData;
  }
  if (normalizedQuery === 'artificial intelligence' || normalizedQuery === 'ai' || normalizedQuery === 'ai engineer') {
    return artificialIntelligenceData;
  }
  if (normalizedQuery === 'vlsi' || normalizedQuery === 'vlsi engineer') {
    return vlsiData;
  }
  if (normalizedQuery === 'cyber security' || normalizedQuery === 'cybersecurity' || normalizedQuery === 'cyber security analyst') {
    return cyberSecurityData;
  }
  if (normalizedQuery === 'embedded systems' || normalizedQuery === 'embedded engineer') {
    return embeddedSystemsData;
  }
  if (normalizedQuery === 'data science' || normalizedQuery === 'data scientist') {
    return dataScienceData;
  }
  if (normalizedQuery === 'artificial intelligence' || normalizedQuery === 'ai engineer' || normalizedQuery === 'ai') {
    return aiRoadmapData;
  }
  if (normalizedQuery === 'pcb design' || normalizedQuery === 'pcb design engineer') {
    return pcbDesignData;
  }
  if (normalizedQuery === 'cloud architect') {
    return cloudArchitectData;
  }
  if (normalizedQuery === 'cloud engineer' || normalizedQuery === 'cloud engineering') {
    return cloudEngineerData;
  }
  if (normalizedQuery === 'cloud computing') {
    return cloudComputingData;
  }
  if (normalizedQuery === 'ai prompt engineer' || normalizedQuery === 'prompt engineer' || normalizedQuery === 'prompt engineering') {
    return aiPromptEngineerData;
  }

  // If API key is missing or is the placeholder, fallback to mock data
  if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn("Gemini API Key missing. Falling back to mock data.");
    return generateMockData(query);
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `You are an expert career counselor and tech industry analyst. 
Generate a comprehensive career guidance dashboard in JSON format for the following query: "${query}".
Ensure all skills, projects, and roadmaps are HIGHLY SPECIFIC to the query (e.g. if PCB Design, mention Altium, KiCad, Schematics. If UI/UX, mention Figma, Wireframing). Do not use generic software engineering terms unless applicable.

You MUST return ONLY valid JSON matching this exact structure, with no markdown formatting or backticks around it:
${jsonSchema}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean up potential markdown formatting
    if (text.startsWith('\`\`\`json')) {
      text = text.replace(/^\`\`\`json\n/, '').replace(/\n\`\`\`$/, '');
    }
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating AI data:", error);
    // Fallback on error
    return generateMockData(query);
  }
};
