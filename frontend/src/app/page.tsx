"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

  const sendEcho = async () => {
    const res = await fetch(`${apiUrl}/api/echo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <main>
      <h1>Echo Server</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "8px", width: "300px", marginRight: "8px" }}
      />
      <button onClick={sendEcho} style={{ padding: "8px 16px" }}>
        Send
      </button>
      {response && (
        <pre style={{ marginTop: "16px", background: "#f0f0f0", padding: "16px", borderRadius: "8px" }}>
          {response}
        </pre>
      )}
    </main>
  );
}
