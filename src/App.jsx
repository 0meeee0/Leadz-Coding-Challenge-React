import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import BookCard from "./components/books/BookCard";
import BookDetails from "./components/books/BookDetails";
import BookList from "./components/books/BookList";
import AddBook from "./components/books/AddBookForm";
import NotFound from "./components/page/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
