import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-1/6">
      <a
        href="https://supervisionhack.pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/logo_uknf.png" alt="UKNF logo" />
      </a>
    </div>
    <App />
  </React.StrictMode>,
);
