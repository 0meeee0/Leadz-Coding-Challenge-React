import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import Loading from "../loading/Loading";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([true])
  useEffect(()=>{
    const fetchBooks = async()=>{
        try{
            const res = await axios.get("http://localhost:8000/api/books");
            setBooks(res.data.member)
            console.log(res.data.member)
        }catch(err){
            console.error(err)
        }finally{
            setLoading(false)
        }
    }
    fetchBooks()
  },[])

  if(loading)return <Loading/>
  return (
    <>
      <div className="flex justify-center py-7">
        <h1 className="text-5xl pt-7">Welcome to our collection</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">

      {books && books.map((book) => <BookCard key={book.id} {...book}/>)}
      </div>
    </>
  );
}
