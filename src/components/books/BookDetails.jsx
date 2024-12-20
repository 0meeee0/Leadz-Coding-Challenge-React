import React from "react";
import ReviewForm from "../reviews/ReviewForm";

export default function BookDetails() {
  return (
    <>
      <div className="flex justify-center pt-20">
        <div className="flex gap-6 items-start">
          <img
            src="book.png"
            alt="Book cover"
            className="object-cover rounded-lg w-72 h-72"
          />
          <div className="flex flex-col w-80">
            <h3 className="text-xl font-medium text-gray-700 mt-2">
              By Author
            </h3>
            <h1 className="text-3xl font-semibold">Title</h1>
            <span className="text-lg text-yellow-500 mt-2">Rating</span>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur doloremque illum asperiores magnam nostrum! Cumque
              totam corporis
            </p>
            <hr className="my-4 border-t-2 border-gray-300" />
            <h4 className="text-lg font-semibold text-gray-700">Genre</h4>
          </div>
        </div>
      </div>
      <ReviewForm />
    </>
  );
}
