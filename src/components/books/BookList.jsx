import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import Loading from "../loading/Loading";
import SearchBar from "../search/SearchBar";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([true])
  const [search, setSearch] = useState('')
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
  const filteredBooks = books.filter(
    (book) => book.title.toLowerCase().includes(search.toLowerCase())
  );
  if(loading)return <Loading/>
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex flex-wrap justify-center gap-6">
        {filteredBooks &&
          filteredBooks.map((book) => <BookCard key={book.id} {...book} />)}
      </div>
    </>
  );
}
