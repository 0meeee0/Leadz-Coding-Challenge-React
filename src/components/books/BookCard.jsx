import React from "react";
import { Link } from "react-router-dom";

export default function BookCard() {
  return (
    <>
    <div className="flex justify-center py-7">
        <h1 className="text-5xl pt-7">Welcome to our collection</h1>
      </div>
        <div className="w-60 py-10 bg-slate-300 m-10 text-center">
          <div className="h-auto">
            <img src="book.png" alt='img' />
          </div>
          <div className="ml-">
            <h3 className="font-semibold text-xl mt-10">
                <Link to="/book-details">Title</Link>
            </h3>
            <p className="text-slate-700">Genre</p>
            <span>Rating</span>
          </div>
        </div>
    </>
  );
}
