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
export const createNews = async (req, res) => {
  try {
    const { title, description, image, author, category, tags } = req.body;
    const newsCount = await News.countDocuments();
    const news = new News({
      title,
      description,
      image,
      author,
      category,
      id: newsCount + 1,
      tags,
      date: new Date().toISOString().slice(0, -5) + "+00:00",
    });
    await news.save();
    return res.status(200).json({ message: "News creation successful" });
  } catch (e) {
    res.status(500).json({ message: "Create News Error" });
  }
};
