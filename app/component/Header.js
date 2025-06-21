"use client"
import { useEffect, useState } from "react";
import Create from "./Create";
import Note from "./Note";
import Search from "./Search";


export default function Header({ name}) {
    const [notes, setNotes] = useState([]);
    const [filtered, setFiltered] = useState([]);

       // Load from localStorage on mount ok
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
           {...newNote, id: Date.now(),createAt:Date.now()}
        ]
        setNotes(updatedNote);

      };
    
      const deleteHandler=(id)=>{
       const deleted= confirm("Are you sure to delete?")
       if(deleted){
        const deleted=notes.filter(note=>(note.id!==id));
        setNotes(deleted)
        localStorage.setItem('notes', JSON.stringify(notes));
       }
      }
      const stated=(id)=>{
      const stateFilter=notes.filter(note=>(note.id==id));
      console.log(stateFilter);
      if(stateFilter.archived){
        stateFilter.archived=false;
      }else{
        stateFilter.archived=true;
      }
      const updated=[
        ...notes,
        {...stateFilter}
        
      ]
      setNotes(updated);
      }
      
  const [arch, setArch]=useState([])
      useEffect(()=>{
        setArch(filtered);
      },[])
      
const[backg1, setBackg1]=useState("")

  const actived=()=>{
   
        const actived=notes.filter(note=>(note.archived==false))
        
        setBackg1("bg-black text-white")
        setBackg2("")
        setArch("");
        
        if(filtered.length==0){
          setArch(actived);
        }
     
  

    }
const[backg2, setBackg2]=useState("")

    const archived=()=>{
    

        const archiveNote=notes.filter(note=>(note.archived==true))     
        setBackg2("bg-black text-white")  
        setBackg1("") 
        if(filtered.length==0){
          setArch(archiveNote);
        }
     
    }

  return (
    <>
    
        <h3 className="border-b border-gray-300 block">{name}</h3>
        <div className="all-note p-2 bg-black text-white">
            <div className="container flex justify-between align-middle  px-8">
                <p>All Note</p>
              
            </div>
        </div>
        <div className="container flex justify-between w-full max-sm:flex-col-reverse px-8 align-middle py-4">
            <div className="btn bg-black rounded-lg px-2 py-1 text-white flex align-middle
            max-sm:pt-2 ">
              <Create
                 addNote={handleAddNote} 
                 className="p-0 m-0" 
                 />
            </div>
          <div>
         <div className="flex align-middle ">
           <Search 
                setFiltered={setFiltered}
                notes={notes} 
                /></div>
                {/* <button className="hidden max-sm:block text-4xl">Setting</button> */}
          </div>
        </div>

        <div className="change flex justify-between max-sm:justify-end w-full px-8">
           <div className="font-semibold mt-2 max-sm:hidden max-sm:text-center justify-end ">
            {
             backg1!=="bg-black text-white"?"Archive":"Active"
          }</div>
            <div className="gap-1 flex justify-end float-end">
              <button
                  id="active" 
                  disabled={false}
                  onClick={actived}
                  autoSave="true"
                  className={`border rounded-lg border-gray-700 px-5 py-1  font-bold ${backg1}`}  >
                  Active
              </button>
              <button 
                  onClick={archived}
                  disabled={false}
                  id="archive"
                  className={` border rounded-lg border-gray-700 px-5 py-1  font-bold 
                  max-sm:p-2 text-sm ${backg2}
                  `}>
                 Archive
              </button>
            </div>
        </div>
       
       <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 m-4 ">
        {
         
         filtered.map(item =>(
                <Note  {...item} key={item.id}/>
              ))
           
        }
      
        {
         
         arch.map(note=>(
            <Note key={note.id} {...note}
                deleteHandler={()=>deleteHandler(note.id)}
                stated={()=>stated(note.id)}
            />
         )) 
        }
     
       </div>
    
    </>
  )
}
