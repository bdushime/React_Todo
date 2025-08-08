
export const ListItem = () => {
  return (
    <>
      <div class="flex items-center justify-between py-2 border-b">
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
          />
          <span class="text-gray-700">IAmHere</span>
        </div>
        <button class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 3v1H4v2h16V4h-5V3H9zm2 4v12h2V7h-2zm4 0v12h2V7h-2zM8 7v12h2V7H8z" />
          </svg>
        </button>
      </div>
    </>
  );
};
