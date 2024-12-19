import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Nav() {
  return (
    <nav className="nav flex items-center justify-around p-4 bg-gray-100 shadow-md">
      <div className="w-16">
        <a href="/">
          <img
            className="rounded-3xl"
            src="img.webp"
            alt="Logo"
          />
        </a>
      </div>
      <div>
        <a
          href="/add-book"
          className="flex items-center px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 transition"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Book
        </a>
      </div>
    </nav>
  );
}
