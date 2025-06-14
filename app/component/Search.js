"use client"
import { memo, useEffect, useState } from "react";

 function Search({setFiltered, notes}) {
  const searchNote=(title)=>{
    title ? setFiltered(notes.filter(item=>(item.title.includes(title)))) : setFiltered([])
    console.log(notes)
  }
  
 return  (
  <>
  <input type="text"
  className="border border-s-amber-500 outline-none rounded-xl py-1 px-2 mb-3"
  onChange={e=>searchNote(e.target.value)}
  placeholder="search here"
  />
  </>
)

}
export default Search;