import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuthorName from "../../hooks/useAuthorName";

export default function AddBookForm() {
  const {authors} = useAuthorName()
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center pt-52">
      <div className="relative bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add a Book
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Book Title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Book Description"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Rating (0-5)"
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Publish Date
            </label>
            <input
              type="date"
              name="publishDate"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Author
            </label>
            <select
              onChange={(e) => console.log(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              name=""
              id=""
            >
              {authors &&
                authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.firstName} {author.lastName}
                  </option>
                ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition duration-200"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
