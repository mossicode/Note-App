"use client"
import { useState } from "react";
import "../component/costum.css"
export default function Create({ addNote }) {

  // modal Display
 const open=document.getElementById("myModal");
 const openModal=document.getElementById("openModal");



  const openModa=()=>{
   if( open.style.display="none" ){
    open.style.display="block"
   }
  }
  function close(){
    if(formData.title.trim() && formData.description.trim()){
        open.style.display="none"
    }
  }
  const closeModal=()=>{
    open.style.display="none" 
  }


 const [formData, setFormData]=useState({title:"", description:"", archived:false});

    

  const submitHandler=(e)=>{
     e.preventDefault();
     if(formData.title.trim() && formData.description.trim()){
      addNote(formData);
      setFormData({title:'', description:'', archived:false })
     }
     
  }


  return (
    <>
                <button
                        type="button"
                        id="openModal"
                        onClick={openModa} 
                        className="p-0 openmodal text-center mx-auto " 
                        data-bs-toggle="modal" 
                        data-bs-target="#myModal">
                        <h1 className="p-0  text-center mx-auto " 
                        >Add Note  </h1>        
                </button>

             
                <div className="modal bg-gray-500 "  id="myModal">
                <div className="modal-dialog border-2 rounded-2xl bg-white text-black ">
                    <div className="modal-content text-left ">

                    
                    <div className="modal-header">
                        <h4 className="modal-title">Note form</h4>
                        <button type="button" onClick={closeModal} className="btn-close" data-bs-dismiss="modal">x</button>
                    </div>

                    <div className="modal-body">
                    <form onSubmit={submitHandler}  className='border-red-100 p-2 m-1 max-sm:m-1 '>
                            <label htmlFor="">Title</label>
                            <input 
                                    className='w-full px-4 py-2 border mb-8 max-sm:mb-3 mt-1 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                                    type="text" 
                                    name='title'
                                    value={formData.title}

                                    placeholder='Enter your title note : '
                                    onChange={(e)=>setFormData({...formData, title:e.target.value})}
                            />

                            <label htmlFor="Detail">Detail</label>
                            <textarea 
                                    className='w-full border rounded-lg mt-1 mb-3 focus:ring-2 p-2 ps-4 focus:ring-blue-500  focus:border-transparent outline-none'
                                    name="description" 
                                    id="description"
                                    value={formData.description}
                                    onChange={(e)=>setFormData({...formData, description:e.target.value})}
                                    rows={3}
                            ></textarea>
                            <input
                                    onChange={e=>(setFormData({...formData,archived:!formData.archived}))}
                                    type="checkbox" 
                                    name="archive" 
                                    id="archive"
                                    checked={formData.archived}
                              />
                            <label htmlFor="" className="ms-2" >Archive</label>
                            
                            
                            <button  onClick={close} 
                                   className='w-full mt-2  border-2 rounded-lg hover:bg-blue-400 '>
                            Save</button>
                        </form>
                    </div>

                 

                    </div>
                </div>
                </div>
    </>
  )
}
