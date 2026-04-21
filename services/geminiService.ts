

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userPrompt,
      }),
    });

    if (!response.ok) {
      throw new Error("Server responded with an error");
    }

    const data = await response.json();
    if (data.error) {
      console.error("Gemini Server Error:", data.error);
      return `I'm currently unable to connect to my AI core (Error: ${data.error}). Please ensure the GEMINI_API_KEY is correctly set in the environment variables.`;
    }
    return data.text || "I'm sorry, I couldn't generate a response right now. Please feel free to reach out to Pavan directly via email.";
  } catch (error) {
    console.error("Gemini network error:", error);
    return "I'm having a bit of trouble connecting to my brain! Please ensure the server is running and the API key is configured. You can also contact Pavan directly.";
  }
};
