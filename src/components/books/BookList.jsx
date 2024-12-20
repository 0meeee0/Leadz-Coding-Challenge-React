import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    const fetchBooks = async()=>{
        try{
            const res = await axios.get("http://localhost:8000/api/books");
            setBooks(res.data.member)
            console.log(res.data.member)
        }catch(err){
            console.error(err)
        } 
    }
    fetchBooks()
  },[])

  return (
    <>
      <div className="flex justify-center py-7">
        <h1 className="text-5xl pt-7">Welcome to our collection</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">

      {books && books.map((book) => <BookCard {...book}/>)}
      </div>
    </>
  );
}
