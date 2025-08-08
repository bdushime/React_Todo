import React from "react";

export const Search = () => {
  return (
    <div class="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Add todo..."
        class="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
      />
      <button class="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full hover:bg-teal-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};
