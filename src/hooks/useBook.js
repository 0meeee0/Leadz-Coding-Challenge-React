import { useState, useEffect } from "react";
import axios from "axios";

export const useBook = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBook = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:8000/api/books/${id}`);
      setBook(res.data)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchBook();
  }, [id]);

  return { book, loading, error };
};
