import { useState } from "react";
import axios from "axios";

export default function useReviewForm(bookId) {
  const [review, setReview] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ratings",
        {
          ...review,
          book: `/api/books/${bookId}`,
        },
        {
          headers: {
            "Content-Type": "application/ld+json",
          },
        }
      );
      console.log("Review added successfully:", response.data)
      setReview({ fullName: "", email: "", comment: "" });
    } catch (error) {
      console.error("Error adding review:", error.message);
    }
  };

  return {
    review,
    handleChange,
    handleSubmit,
  };
}
