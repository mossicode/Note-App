// import { formatData } from "./storage";

function Note({ deleteHandler, title,description, id ,archived, changeState, createAt}) {
    const data=JSON.parse(localStorage.getItem("notes"));
    const d= new  Date(createAt);


    Date.prototype.myMonth = function() {
      if (this.getMonth() == 0) {return "January"};
      if (this.getMonth() == 1) {return "February"};
      if (this.getMonth() == 2) {return "March"};
      if (this.getMonth() == 3) {return "April"};
      if (this.getMonth() == 4) {return "May"};
      if (this.getMonth() == 5) {return "June"};
      if (this.getMonth() == 6) {return "July"};
      if (this.getMonth() == 7) {return "August"};
      if (this.getMonth() == 8) {return "September"};
      if (this.getMonth() == 9) {return "October"};
      if (this.getMonth() == 10) {return "November"};
      if (this.getMonth() == 11) {return "December"};
    };
    Date.prototype.myWeek = function() {
      if (this.getDay() == 0) {return "Sun"};
      if (this.getDay() == 1) {return "Mon"};
      if (this.getDay() == 2) {return "Tues"};
      if (this.getDay() == 3) {return "Wed"};
      if (this.getDay() == 4) {return "Thurs"};
      if (this.getDay() == 5) {return "Fri"};
      if (this.getDay() == 6) {return "Sat"};
     
    };
    
  return (
    <div  className="p-4 border  border-3 mb-2 border-orange-400 gap-1 ms-4 rounded-xl ">
                     <h1 className=" font-bold text-2xl">{title}</h1>
                     <p className="font-thin text-pretty text-gray-300 mb-2">
                     { `${d.myWeek()}  ${d.myMonth()}${d.getDate()}  ${d.getFullYear()} `}
                      </p>
                     <h2 className="mb-5">
                      {description.substring(0,20)}
                      <span className="text-xl"> {description.length>20?" ... ":""}</span>
                     </h2>
                    
                      <div className="bottom-card grid grid-cols-2 gap-x-4 overflow-hidden">
                          <button 
                              className="border bg-yellow-500 text-white w-full px-2 py-1 rounded-lg m-auto  overflow-hidden text-center active:bg-red-90 "
                              onClick={()=>deleteHandler(id)}
                              >Delete
                          </button>
                          <button  className="border bg-red-600 text-white w-full px-2 py-1 rounded-lg m-auto text-center active:bg-red-90 " onClick={()=>changeState(id)} >
                            {  archived!==false ? "Archive":"Active"}
                            {
                              
                            }
                          </button>
                      </div>
           </div>
   )
  
}

export default Note