import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import BookCard from './components/books/BookCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className='flex justify-center py-7'>
        <h1 className='text-5xl pt-7'>Welcome to our collection</h1>
      </div>
      <BookCard/>
    </>
  );
}

export default App
