export async function askAyursutra(message) {
  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.reply;
  } catch (error) {
    console.error("Failed to connect to the chatbot backend:", error);
    return "Sorry, the chatbot is currently unavailable.";
  }
}