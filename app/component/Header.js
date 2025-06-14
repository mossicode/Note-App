"use client"
import { useEffect, useState } from "react";
import Create from "./Create";
import Note from "./Note";
import Search from "./Search";

export default function Header({setFiltered, name}) {
    const [notes, setNotes] = useState([]);

       // Load from localStorage on mount
       useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
          setNotes(JSON.parse(savedNotes));
        }
      }, []);
      // Save to localStorage whenever notes change
      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);
 
      const handleAddNote = (newNote) => {
        const updatedNote=[
          ...notes,
           {...newNote, id: Date.now(),createAt:Date.now(), archived:false}
        ]
        setNotes(updatedNote);

      };
    
      const deleteHandler=(id)=>{
        const deleted=notes.filter(item=>(item.id!==id));
        setNotes(deleted)
        localStorage.setItem('notes', JSON.stringify(notes));
      }
      const changeState=(id)=>{
        console.log(id)
        const changes=notes.filter(item=>(item.id==id));
        console.log(changes)
        if(changes.archived==false){
          changes.archived==true
        }else{
          changes.archived==false
        }
        console.log(changes)
      }
      

      const archiveHandler=()=>{
        const backA=document.getElementById("active");
        const back=document.getElementById("archive");
        
        if( back.style.color=="black"){
          back.style.backgroundColor="black";
          back.style.color="white"
           backA.style.backgroundColor="white";
          backA.style.color="black"
        }else{
          back.style.backgroundColor="white";
          back.style.color="black"
          backA.style.backgroundColor="black";
          backA.style.color="white"
        }
      }

  return (
    <>
    
        <h3 className="border-b border-gray-300 block">{name}</h3>
        <div className="all-note p-2 bg-black text-white">
            <div className="container px-8">
                <p>All Note</p>
            </div>
        </div>
        <div className="container flex justify-between w-full px-8 align-middle py-4">
            <div className="btn bg-black rounded-lg p-3 text-white">
              <Create addNote={handleAddNote} className="p-0 m-0" />
            </div>
            <Search setFiltered={setFiltered} notes={notes} />
        </div>

        <div className="change flex justify-between w-full px-8">
           <div className="font-semibold mt-2">{name}</div>
            <div className="gap-1 flex">
              <button
              id="active"  onClick={archiveHandler}
              className=" border rounded-lg border-gray-700 px-5 py-1 ">Active</button>
              <button 
              onClick={archiveHandler} id="archive"
                 className=" border rounded-lg border-gray-700 px-5 py-1 bg-black text-white font-bold ">
                Archive</button>
            </div>
        </div>
       
       <div className="grid grid-cols-3 m-4 ">
       {
         notes.map(item =>(
          <Note key={item.id} {...item} changeState={changeState} deleteHandler={()=>deleteHandler(item.id)} />
        ))
        
        } 
       </div>
    
    </>
  )
}
