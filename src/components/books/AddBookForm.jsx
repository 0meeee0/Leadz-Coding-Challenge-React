import axios from "axios";
import React from "react";
import useAddBookForm from "../../hooks/useAddBookForm";

export default function AddBookForm() {
  const { authors, formData, handleChange, handleSubmit } = useAddBookForm();

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center pt-52">
      <div className="relative bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add a Book
        </h1>
        <form className="space-y-4" data-testid="add-book-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Book Title"
              required
            />
          </div>
          <div>
            <label htmlFor="genre" className="block text-gray-700 font-medium mb-2">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Book Genre"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Book Description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="publishDate" className="block text-gray-700 font-medium mb-2">
              Publish Date
            </label>
            <input
              type="date"
              name="publishDate"
              id="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
              Author
            </label>
            <select
              name="author"
              id="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select an author</option>
              {authors &&
                authors.map((author) => (
                  <option key={author.id} value={`/api/authors/${author.id}`}>
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
