"use client"
import { useState } from "react";
import "../component/costum.css"
export default function Create({ addNote }) {

 const open=document.getElementById("myModal");
//  const d=()=>{
//      open.style.display="none"
//  }
//  open.style.display="none"
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


 const [formData, setFormData]=useState({title:"", description:""});
  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
     e.preventDefault();
     if(formData.title.trim() && formData.description.trim()){
      addNote(formData);
      setFormData({title:'', description:''})
     }
     
  }


  return (
    <>
    <button type="button" id="openModal" onClick={openModa} className="btn btn-primary openmodal" data-bs-toggle="modal" data-bs-target="#myModal">
                Open modal
                </button>

             
                <div className="modal bg-gray-500 "  id="myModal">
                <div className="modal-dialog border-2 rounded-2xl bg-white text-black ">
                    <div className="modal-content text-left ">

                    
                    <div className="modal-header">
                        <h4 className="modal-title">Note form</h4>
                        <button type="button" onClick={closeModal} className="btn-close" data-bs-dismiss="modal">x</button>
                    </div>

                    <div className="modal-body">
                    <form onSubmit={submitHandler}  className='border-red-100 p-2 m-3 '>
                            <label htmlFor="">Title</label>
                            <input 
                                className='w-full px-4 py-2 border mb-8 mt-1 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                                type="text" 
                                name='title'
                                value={formData.title}

                                placeholder='Enter your title note : '
                                    onChange={handleChange} 
                            />

                            <label htmlFor="Detail">Detail</label>
                            <textarea 
                                    className='w-full border rounded-lg mt-1 mb-3 focus:ring-2 p-2 ps-4 focus:ring-blue-500  focus:border-transparent outline-none'
                                    name="description" 
                                    id="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                            ></textarea>
                            
                            <button  onClick={close} className='w-full border border-2 rounded-lg hover:bg-blue-400 '>Save</button>
                        </form>
                    </div>

                 

                    </div>
                </div>
                </div>
    </>
  )
}
