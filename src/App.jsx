import { useState } from "react";

export default function App() {
  const [input, setInput] = useState(JSON.stringify({
    request_id: "demo-1",
    content: {
      category: "Food",
      primary_keyword: "3 ingredient cookies"
    },
    creative_controls: {
      tone: "playful",
      max_hashtags: 5
    },
    generation_controls: {
      n_title_candidates: 3,
      creativity: 0.7
    }
  }, null, 2));

  const [output, setOutput] = useState("");

  async function generate() {
    const res = await fetch("/.netlify/functions/generate", {
      method: "POST",
      body: input
    });
    const data = await res.json();
    setOutput(data.output);
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>TikTok Generator 🎥</h1>
      <p>Input JSON:</p>
      <textarea
        style={{ width: "100%", height: "200px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={generate} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Generate
      </button>
      <h2>Output:</h2>
      <pre style={{ background: "#f4f4f4", padding: "1rem" }}>
        {output}
      </pre>
    </div>
  );
}
