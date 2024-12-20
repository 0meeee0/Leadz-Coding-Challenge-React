import { BookmarkIcon, BookOpenIcon } from "@heroicons/react/16/solid";
import { BookmarkSlashIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center">
        <BookOpenIcon className="w-52 h-52 text-red-500" />
        <p className="text-gray-700 text-xl ml-6 font-mono">Loading...</p>
      </div>
    </div>
  );
}
