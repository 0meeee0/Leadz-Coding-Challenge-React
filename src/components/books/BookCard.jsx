import React from "react";
import { Link } from "react-router-dom";

export default function BookCard(book) {
  console.log("book:", book);
  return (
    <div className="flex flex-wrap">
      <Link to={`/book-details/${book.id}`}>
        <div className="w-60 py-10 bg-slate-300 m-10 text-center rounded-xl">
          <div className="h-auto">
            <img src="book.png" alt="img" />
          </div>
          <div className="ml-">
            <h3 className="font-semibold text-xl mt-10">{book.title}</h3>
            <p className="text-slate-700">{book.genre}</p>
            <span>{book.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
