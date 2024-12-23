
# Bookstore React

This React project consumes an API created with Symfony to display books, show book details with a review form to add reviews, and allow the addition of new books.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [API Integration](#api-integration)
- [Contributing](#contributing)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   https://github.com/0meeee0/Leadz-Coding-Challenge-React.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Leadz-Coding-Challenge-React
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up the Symfony API**:
   - Clone or download the Symfony API repository.
   - Follow the Symfony documentation to set up and run the Symfony server.
   - Make sure your API is running on `http://localhost:8000` or update the base URL in the React project to match your Symfony server.

## Usage

After installing the dependencies, you can run the React development server:

```bash
npm start
```

This will open the app in your browser at `http://localhost:3000`.

## Features

- **Display Books**: List all books fetched from the Symfony API.
- **Book Details Page**: View detailed information for each book along with the option to add a review.
- **Add Review**: Users can submit reviews for books with their name and comment.
- **Add New Books**: Admins can add new books to the collection through a form.

## Technologies

This project uses the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: A library for routing in React applications.
- **Symfony**: A PHP framework to build the backend API.

## API Integration

The React frontend consumes a Symfony API that provides the following endpoints:

1. **GET `/api/books`**: Fetches the list of all books.
2. **GET `/api/books/{id}`**: Fetches details for a single book, including reviews.
3. **POST `/api/ratings`**: Submits a new review for a book.
4. **POST `/api/books`**: Adds a new book to the collection.

### Example of Fetching Books

To display the list of books, the frontend sends a `GET` request to `/api/books`.

#### `src/pages/BookList.js`
```javascript
import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get("/books");
        setBooks(response.data["hydra:member"]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading books...</div>;
  }

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
  );
}
```

### Example of Displaying a Single Book with Reviews

To show a single book's details and a review form, the frontend sends a `GET` request to `/api/books/{id}`.

#### `src/pages/BookDetails.js`
```javascript
import React from "react";
import ReviewForm from "../reviews/ReviewForm";
import { useParams } from "react-router-dom";
import { useBook } from "../../hooks/useBook";
import Loading from "../loading/Loading";
import Review from "../reviews/Review";
import NotFound from "../page/NotFound";

export default function BookDetails() {
  const { id } = useParams();
  const { book, loading, error } = useBook(id);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div><NotFound/></div>

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
              By {book.author.firstName} {book.author.lastName}
            </h3>
            <h1 className="text-3xl font-semibold">{book.title}</h1>
            <span className="text-lg text-yellow-500 mt-2">
              {book.rating}
            </span>
            <p className="text-gray-600 mt-4">{book.description}</p>
            <hr className="my-4 border-t-2 border-gray-300" />
            <h4 className="text-lg font-semibold text-gray-700">
              {book.genre}
            </h4>
          </div>
        </div>
      </div>
    <Review book={book} />
      <ReviewForm bookId={book.id} />
    </>
  );
}
```

### Example of Adding a Review

To add a review, the frontend sends a `POST` request to `/api/ratings`.

#### `src/hooks/useReviewForm.js`
```javascript
import { useState } from "react";
import axios from "axios";

export default function useReviewForm(bookId) {
  const [review, setReview] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ratings",
        {
          ...review,
          book: `/api/books/${bookId}`,
        },
        {
          headers: {
            "Content-Type": "application/ld+json",
          },
        }
      );
      console.log("Review added successfully:", response.data)
      setReview({ fullName: "", email: "", comment: "" });
    } catch (error) {
      console.error("Error adding review:", error.message);
    }
  };

  return {
    review,
    handleChange,
    handleSubmit,
  };
}

```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

