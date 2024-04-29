import React, { useState } from "react";
import data from './data';
import Tours from './Components/Tours'


const App = () => {
  
  const [tours,setTour]=useState(data);

   function removetour(id){
     const newTours =tours.filter(tour=>tour.id!==id);
     setTour(newTours);     
   }

    if(tours.length===0)
    {
       return (
          <div className="refresh">
             <h2>No Tour Left</h2>

             <div>
               <button className="btn-white" onClick={()=>setTour(data)}>Refresh</button>

            </div>
          </div>
          
       )
    };
  return (
   <div className="app">
      
      <Tours tours={tours} removetour={removetour}></Tours>
  </div>
  )
};

export default App;
 
