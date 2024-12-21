import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthorName from "./useAuthorName";

export default function useAddBookForm() {
  const { authors } = useAuthorName();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    publishDate: "",
    author: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/books",
        {
          title: formData.title,
          description: formData.description,
          genre: formData.genre,
          publicationDate: formData.publishDate,
          author: formData.author,
        },
        {
          headers: {
            "Content-Type": "application/ld+json",
          },
        }
      );
      console.log("Book added successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error.message);
    }
  };

  return {
    authors,
    formData,
    handleChange,
    handleSubmit,
  };
}
