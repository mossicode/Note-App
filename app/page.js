"use client"
import { useEffect, useState } from "react";
import Header from "./component/Header";
import Note from "./component/Note";



export default function Home(){
  const [filtered, setFiltered] = useState([]);
  
  return (
    <>
     
  <div className="m-4 min-h-96">
    <Header setFiltered={setFiltered} name="All Note"  />
  </div>



  <div className="grid grid-cols-3 max-sm:grid-cols-1">
   
  </div>
    </>
  );
}
