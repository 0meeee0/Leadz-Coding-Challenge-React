import React from "react";
import ReviewForm from "../reviews/ReviewForm";
import { useParams } from "react-router-dom";
import { useBook } from "../../hooks/useBook";
import Loading from "../loading/Loading";

export default function BookDetails() {
  const { id } = useParams();
  const { book, loading, error } = useBook(id);

  if (loading) return <div><Loading/></div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex justify-center pt-20 px-4 sm:px-8 md:px-16">
        <div className="flex gap-6 items-start flex-col md:flex-row">
          <img
            src="/book.png"
            alt="Book cover"
            className="object-cover rounded-lg w-72 h-72 mb-4 md:mb-0"
          />
          <div className="flex flex-col w-full md:w-80">
            <h3 className="text-xl font-medium text-gray-700 mt-2">
              By {book.authorName}
            </h3>
            <h1 className="text-3xl font-semibold">{book.title}</h1>
            <span className="text-lg text-yellow-500 mt-2">{book.rating}</span>
            <p className="text-gray-600 mt-4">{book.description}</p>
            <hr className="my-4 border-t-2 border-gray-300" />
            <h4 className="text-lg font-semibold text-gray-700">
              {book.genre}
            </h4>
          </div>
        </div>
      </div>
      <ReviewForm bookId={book.id}/>
    </>
  );
}
