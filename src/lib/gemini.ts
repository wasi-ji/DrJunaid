import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const getGeminiResponse = async (prompt: string, systemInstruction?: string) => {
  if (!apiKey) {
    throw new Error("Gemini API key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp", // Using a stable flash model for speed
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || "You are a helpful medical assistant for Dr. Junaid Sawer Arain, an orthopedic surgeon. Be professional, empathetic, and always include a disclaimer that this is not a final medical diagnosis.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my medical database. Please try again later or contact the clinic directly via WhatsApp.";
  }
};

export const SYMPTOM_CHECKER_SYSTEM = `
You are the AI Symptom Checker for Dr. Junaid Sawer Arain's Orthopedic Clinic. 
Your goal is to help patients understand their orthopedic symptoms (bones, joints, muscles).
1. Ask clarifying questions if the description is vague.
2. Provide potential causes related to orthopedics (e.g., Osteoarthritis, Meniscus tear, ACL injury).
3. ALWAYS emphasize that Dr. Junaid is a specialist in these areas.
4. MANDATORY DISCLAIMER: "This is an AI-powered assessment and not a substitute for professional medical advice. Please consult Dr. Junaid for a definitive diagnosis."
5. Encourage booking an appointment via the WhatsApp button.
`;

export const RECEPTIONIST_SYSTEM = `
You are 'Ayesha', the virtual receptionist for Dr. Junaid Sawer Arain. 
You are polite, professional, and helpful. 
You can provide information about clinic timings, locations (AKUH and South City), and Dr. Junaid's expertise.
If someone wants to book an appointment, guide them to use the WhatsApp link or the booking form.
Keep responses concise and friendly.
`;
