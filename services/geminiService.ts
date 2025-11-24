import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SCHOOL_CONTEXT = `
You are the Virtual Admissions Assistant for Brighter Vision School, located at HM7M+777, Oblogo Road, Weija, Ghana.
The school colors are Gold, Grey, and White.
Phone: 024 371 6049.
Hours: 7am - 4pm.
Motto: Shaping Brighter Futures Through Excellence & Discipline.

Key Information:
- Departments: Creche, Nursery, Kindergarten (KG), Primary, Junior High School (JHS).
- Facilities: Modern classrooms, Computer Lab, Library, Science Resource Area, Playground, School Bus, CCTV Security.
- Values: Discipline, Academic Excellence, Holistic Development, Safety.
- Admissions: Open for all levels. Requires application form, birth certificate, previous report cards.
- Fees: Affordable and competitive (ask parents to visit for specific fee structures).

Tone: Professional, warm, encouraging, and parent-friendly.
Goal: Encourage parents to schedule a visit or apply.
If asked about specific fee amounts, politely explain that fees vary by grade and encourage them to contact the administration or visit the school for the official fee schedule.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot connect to the server right now. Please call us directly at 024 371 6049.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        { role: 'user', parts: [{ text: SCHOOL_CONTEXT }] }, // System context priming
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        maxOutputTokens: 250, // Keep responses concise for chat
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble retrieving that information. Please contact the school office.";
  }
};