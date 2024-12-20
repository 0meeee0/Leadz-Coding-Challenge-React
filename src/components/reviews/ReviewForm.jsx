import React from "react";

export default function ReviewForm() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Leave a Review
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-gray-600 font-medium mb-1"
            >
              Comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your comment here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
