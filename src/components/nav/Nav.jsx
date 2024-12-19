import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Nav() {
  return (
    <nav className="nav flex items-center justify-between p-4 bg-gray-100 shadow-md">
      <div className="w-16">
        <a href="/">
          <img
            className="rounded-3xl"
            src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2F366134fc-fed0-463c-b5bd-fa2b692d61dd.png"
            alt="Logo"
          />
        </a>
      </div>
      <div>
        <a
          href="/add-book"
          className="flex items-center px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Book
        </a>
      </div>
    </nav>
  );
}
