"use client";
import Image from "next/image";
import { useState } from "react";

function Search({ setFiltered, notes, setIsSearching }) {
  const [inputValue, setInputValue] = useState("");

  const searchNote = (title) => {
    setInputValue(title);
    if (title) {
      const results = notes.filter((note) =>
        note.title.toLowerCase().includes(title.toLowerCase())
      );
      setFiltered(results);
      setIsSearching(true);
     
    } else {
      setFiltered([]);
      setIsSearching(false);
     
    }
  };

  return (
    <div className="flex flex-row-reverse  border border-black-400 rounded-lg py-0 px-3 align-middle mb-3">
      <div className="">
        <input
          type="text"
          value={inputValue}
          className="outline-none flex align-middle py-1 px-2 mx-0"
          onChange={(e) => searchNote(e.target.value)}
          placeholder="search here"
        />
      </div>
      <div className="flex align-middle  ">
        <Image src="/image/notes.svg" alt="image" width={30} height={30} />
      </div>
    </div>
  );
}

export default Search;
