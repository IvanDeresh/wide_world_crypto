import News from "../model/News.js";
export const fetchNews = async (req, res) => {
  try {
    const data = await News.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
