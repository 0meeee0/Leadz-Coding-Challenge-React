import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav flex items-center justify-around p-4 bg-gray-100 shadow-md">
      <div className="w-16">
        <Link to="/">
          <img
            className="rounded-3xl"
            src="/img.webp"
            alt="Logo"
          />
        </Link>
      </div>
      <div>
        <Link to="/add-book"
          className="flex items-center px-4 py-2 text-red-500 border-red-500 border-2 rounded-md hover:bg-red-700 hover:text-white transition"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Book
        </Link>
      </div>
    </nav>
  );
}
