import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useAuthorName() {
      const [authors, setAuthors] = useState([])
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/authors/");
        setAuthors(res.data.member);
      } catch (err) {
        console.error(err);
      }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return {authors}
}
