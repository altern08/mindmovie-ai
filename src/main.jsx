
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [message, setMessage] = useState("🧠 MindMovie AI App is Live!");

  return (
    <div style={{ padding: 20 }}>
      <h1>{message}</h1>
      <p>This is a placeholder main.jsx for testing build setup.</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
