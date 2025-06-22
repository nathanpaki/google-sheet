export default async function handler(req, res) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz-enoc0oq8DQCurEgoAHaiVKpjb-o86bgeioVap2TpEiFkp0Ai1DfCXnfQJHz1y0vy/exec";

  try {
    const response = await fetch(scriptURL);
    if (!response.ok) {
      throw new Error(`Google Script error: ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Failed to fetch from Google Script" });
  }
}
