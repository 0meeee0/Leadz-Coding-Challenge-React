import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center py-7 flex-col items-center">
      <h1 className="text-5xl pt-7">Welcome to our collection</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 p-2 border rounded"
      />
    </div>
  );
}
