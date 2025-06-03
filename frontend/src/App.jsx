// ----------------------------
// FRONTEND UPDATES
// ----------------------------

// File: src/App.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://https://mirroronthewall-backend.onrender.com/api/messages")
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Kid Message Monitor</h1>
      <div className="grid gap-4">
        {messages.map((msg) => (
          <Card key={msg.id}>
            <CardContent>
              <p className="text-sm text-gray-500">From: {msg.sender}</p>
              <p className="text-lg">{msg.content}</p>
              <p className="text-xs text-right text-gray-400">{msg.timestamp}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="mt-4" onClick={() => alert("Alerts and settings coming soon!")}>
        Configure Alerts
      </Button>
    </div>
  );
}

export default App;
