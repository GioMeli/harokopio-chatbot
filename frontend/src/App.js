import React from "react";
import Chatbot from "./Chatbot";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Harokopeio University ISCA Chatbot</h1>
      </header>
      <main className="chat-container">
        <Chatbot />
      </main>
      <footer className="app-footer">
        <p>© 2025 Harokopeio University | Powered by AI</p>
      </footer>
    </div>
  );
}

export default App;

