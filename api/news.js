// api/news.js

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    const API_KEY = process.env.NEWS_API_KEY;

    const response = await fetch(
      `https://newsapi.org/v2/everything?` +
        `q=(pharmaceutical OR pharma OR "FDA approval")&` +
        `domains=fiercepharma.com,biopharmadive.com,statnews.com&` +
        `language=en&sortBy=publishedAt&pageSize=50&` +
        `apiKey=${API_KEY}`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
      articles: [],
    });
  }
}
