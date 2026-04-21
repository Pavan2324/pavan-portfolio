// ✅ SECURE: This service NEVER imports or uses the Gemini SDK directly.
// It only calls your own /api/chat serverless function, so the API key
// stays server-side and is never visible in the browser's Network tab.

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userPrompt }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    const data = await response.json();
    return (
      data.text ||
      "I was unable to process that. Please try again or reach out to Pavan directly!"
    );
  } catch (error) {
    console.error("Gemini Client Error:", error);
    return "I'm having trouble connecting right now. Pavan is available via email for direct inquiries!";
  }
};