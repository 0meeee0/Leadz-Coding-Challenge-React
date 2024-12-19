import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import BookCard from './components/books/BookCard';
import BookDetails from './components/books/BookDetails';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BookCard />} />
        <Route path="/book-details" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
