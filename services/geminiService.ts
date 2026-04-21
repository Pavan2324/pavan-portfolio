

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
    return data.text || "I'm sorry, I couldn't generate a response right now. Please feel free to reach out to Pavan directly via email.";
  } catch (error) {
    console.error("Gemini local API Error:", error);
    return "I'm having a bit of trouble connecting to my brain! Please try again later or contact Pavan directly.";
  }
};
