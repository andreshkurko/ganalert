import fetch from "node-fetch";

export async function handler(event) {
  try {
    const inputJson = JSON.parse(event.body);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: inputJson.generation_controls?.creativity || 0.7,
        messages: [
          { role: "system", content: "You are a TikTok growth copywriter. Return JSON only." },
          { role: "user", content: JSON.stringify(inputJson) }
        ]
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        output: data.choices?.[0]?.message?.content || "{}"
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
