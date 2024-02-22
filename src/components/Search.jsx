import React, { useContext, useEffect, useState } from 'react'
import { ResultContext } from '../context/ResultProvider';
import { useDebounce } from 'use-debounce';

const Search = () => {
  const { setSearchTerm } = useContext(ResultContext);
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);

  // useEffect(() => {
  //   if (debouncedValue) setSearchTerm(debouncedValue);
  // }, [debouncedValue]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text);
  };
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="absolute top-1.5 right-4 text-2xl text-gray-500"
      >
        🔍
      </button>
    </div>
  );
}

export default Search
