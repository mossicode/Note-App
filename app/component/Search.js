"use client"
import Image from "next/image";
import srcimage from "../../public/notes.svg"
import { memo, useEffect, useState } from "react";

 function Search({setFiltered, notes}) {
  const searchNote=(title)=>{
    title ? setFiltered(notes.filter(item=>(item.title.includes(title)))) : setFiltered([])
    console.log(notes)
  }
  const inputId=document.getElementById("title")
  const blurHandler= ()=>{
    setFiltered([]);
    inputId.value="";
  }
  
 return  (
  <>
  <div className="flex flex-row-reverse justify-end border border-black-400 rounded-lg py-2 px-3 align-middle mb-3  ">
     <div>
        <input type="text"
        id="title"
        onBlur={blurHandler}
        className="outline-none flex align-middle  py-1 px-2 mx-0 focus:w-full"
        onChange={e=>searchNote(e.target.value)}
        placeholder="search here"
        />
     </div>
     <div className="flex align-middle ">
        <Image alt="image" src={srcimage} width={30} height={30} />  
     </div>
  </div>
  </>
)

}
export default Search;