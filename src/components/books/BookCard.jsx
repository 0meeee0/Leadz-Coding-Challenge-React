import React from "react";

export default function BookCard() {
  return (
        <div className="w-60 py-10 bg-slate-300 m-10 text-center">
          <div className="h-auto">
            <img src="book.png" alt='img' />
          </div>
          <div className="ml-">
            <h3 className="font-semibold text-xl mt-10">Title</h3>
            <p className="text-slate-700">Genre</p>
            <span>Rating</span>
          </div>
        </div>
  );
}
