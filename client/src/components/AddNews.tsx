import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { fetchNews } from "@/function";

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    category: "",
    tags: ["", "", ""],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleTagChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newTags = [...formData.tags];
    newTags[index] = e.target.value;
    setFormData({ ...formData, tags: newTags });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3003/api/createNews", formData);
      console.log("News created successfully");
    } catch (error) {
      console.error("Error creating news", error);
    }
  };

  return (
    <div className="w-[800px] max-xl:w-[700px] text-slate-300 h-[700px] rounded-3xl shadow-xl flex justify-center items-center flex-col">
      <h1 className="border-b-2 flex justify-center w-[300px] rounded-2xl text-[30px] text-white">
        Create news
      </h1>
      <div className="h-[70%] flex justify-around w-[100%] items-center flex-col">
        <input
          placeholder="Title"
          className="h-[50px] p-[20px] w-[70%] outline-none rounded-2xl"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Description..."
          className=" outline-none p-[10px] rounded-2xl w-[70%] min-h-[75px] max-h-[200px]"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <div className="flex border-t-2 border-b-2 p-[5px] rounded-3xl w-[70%] flex-col h-[100px] justify-between items-center">
          <div className="text-[20px] text-slate-500">Add image</div>
          <input
            placeholder="Image URL"
            type="file"
            accept="image/*"
            className="file:w-[200px] file:h-[50px] file:rounded-2xl hover:file:text-blue-400 file:border-none file:text-slate-500 file:cursor-pointer"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex justify-between w-[70%]">
          <input
            name="author"
            placeholder="Author"
            className="w-[200px] outline-none p-[10px] h-[50px] rounded-2xl "
            value={formData.author}
            onChange={handleChange}
          />
          <input
            name="category"
            placeholder="Category"
            className="w-[200px] outline-none p-[10px] h-[50px] rounded-2xl "
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className="w-[70%] flex justify-between">
          {formData.tags.map((tag, index) => (
            <input
              key={index}
              placeholder="#Tags"
              name={`tag${index + 1}`}
              className="w-[30%] outline-none p-[10px] h-[50px] rounded-2xl"
              value={tag}
              onChange={(e) => handleTagChange(index, e)}
            />
          ))}
        </div>
      </div>
      <button
        className="w-[200px] mt-[30px] h-[50px] border-2xl bg-white text-slate-400 rounded-3xl"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
};

export default AddNews;
