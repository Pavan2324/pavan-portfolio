

export const getGeminiResponse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userPrompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Server error');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Gemini Client Error:", error);
    return "I'm having trouble connecting to the AI server. This could be due to a missing API key on the server or a temporary network issue.";
  }
};
