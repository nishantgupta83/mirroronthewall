import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://mirroronthewall-backend.onrender.com/api/messages")
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error("Error fetching messages:", err));
  }, []);

  const handleAlertClick = async () => {
    try {
      const response = await fetch("https://mirroronthewall-backend.onrender.com/api/alerts");
      if (!response.ok) throw new Error("Failed to fetch alerts");

      const data = await response.json();
      console.log("Fetched Alerts:", data);

      alert("Fetched alerts successfully! Check the console.");
    } catch (error) {
      console.error("Error fetching alerts:", error);
      alert("Failed to fetch alerts. See console for details.");
    }
  };

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

      <Button className="mt-4" onClick={handleAlertClick}>
        Configure Alerts
      </Button>
    </div>
  );
}

export default App;
