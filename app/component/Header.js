"use client";
import { useEffect, useState } from "react";
import Create from "./Create";
import Note from "./Note";
import Search from "./Search";

export default function Header({ name }) {
  const [notes, setNotes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [arch, setArch] = useState([]);
  const [tab, setTab] = useState("active");
  const [isSearching, setIsSearching] = useState(false);
 

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (!isSearching) actived();
  }, [notes]);

  const handleAddNote = (newNote) => {
    const updatedNote = [
      ...notes,
      { ...newNote, id: Date.now(), createAt: Date.now() },
    ];
    setNotes(updatedNote);
  };

  const deleteHandler = (id) => {
    const deleted = confirm("Are you sure to delete?");
    if (deleted) {
      const deletedNotes = notes.filter((note) => note.id !== id);
      setNotes(deletedNotes);
    }
  };

  const stated = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const actived = () => {
    setTab("active");
    const activeNotes = notes.filter((note) => !note.archived);
    setArch(activeNotes);
    setFiltered([]);
    setIsSearching(false); 
  };

  const archived = () => {
    setTab("archive");
    const archiveNotes = notes.filter((note) => note.archived);
    setArch(archiveNotes);
    setFiltered([]);
    setIsSearching(false);
  };

  return (
    <>
      <h3 className="border-b border-gray-300 block">{name}</h3>

      <div className=" header all-note p-2 bg-black text-white">
        <div className="container flex justify-between align-middle px-8">
          <p>All Note</p>
        </div>
      </div>

      <div className="SearchAndAddNew flex justify-between w-full max-sm:flex-col-reverse px-8 max-sm:px-2 align-middle py-5 max-sm:py-2">
        <div className="bg-black rounded-lg px-2 text-white flex align-middle max-sm:pt-2">
          <Create addNote={handleAddNote} />
        </div>
        <div className="">
          <Search
            
            setFiltered={setFiltered}
            notes={notes}
            setIsSearching={setIsSearching}
           
          />
        </div>
      </div>

      <div className="ArchiveActive flex justify-between max-sm:justify-end w-full px-8 max-sm:px-2">
        <div className="font-semibold mt-2 max-sm:hidden max-sm:text-center justify-end ">
          {tab === "active" ? "Active" : "Archive"}
        </div>
        <div className="gap-1 flex justify-end float-end">
          <button
            onClick={actived}
            className={`border rounded-lg border-gray-700 px-5 py-1 font-bold ${
              tab === "active" ? "bg-black text-white" : ""
            }`}
          >
            Active
          </button>
          <button
            onClick={archived}
            className={`border rounded-lg border-gray-700 px-5 py-1 font-bold max-sm:p-2 text-sm ${
              tab === "archive" ? "bg-black text-white" : ""
            }`}
          >
            Archive
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 m-4 ">
        {isSearching ? (
          filtered.length > 0 ? (
            filtered.map((item) => <Note {...item} key={item.id} />)
          ) : (
            <div className="col-span-3 text-center text-red-500 text-xl font-bold py-10">
                You dont have this title note  </div>
          )
        ) : (
          arch.length > 0 ? ( arch.map((note) => (
            <Note
              key={note.id}
              {...note}
              deleteHandler={() => deleteHandler(note.id)}
              stated={() => stated(note.id)}
            />
          ))) :(
            <div className="col-span-3 text-center text-red-500 text-xl font-bold py-10">
                You dont have this title note  </div>
          )
        )}
      </div>
    </>
  );
}
