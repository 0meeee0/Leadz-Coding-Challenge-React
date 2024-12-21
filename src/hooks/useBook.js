import { useState, useEffect } from "react";
import axios from "axios";

export const useBook = (id) => {
  const [book, setBook] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8000/api/books/${id}`);
      const bookData = res.data;
      const authorRes = await axios.get(
        `http://localhost:8000${bookData.author}`
      );
      setAuthorName(`${authorRes.data.firstName} ${authorRes.data.lastName}`);

      setBook({
        ...bookData,
        authorName: `${authorRes.data.firstName} ${authorRes.data.lastName}`,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchBook();
  }, [id]);

  return { book, authorName, loading, error };
};
