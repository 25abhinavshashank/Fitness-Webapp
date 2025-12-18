import React, { useEffect, useState } from 'react'

function BodyParts() {
       const [BodyParts,setBodyParts]=useState([]);
       const [Equipment,setEquipment]=useState([]);
       const [Muscles,setMuscles]=useState([]);

       useEffect(()=>{
          const fetchBodyParts = async () => {
        const res = await fetch("https://www.exercisedb.dev/api/v1/bodyparts");
         const data = await res.json();
         setBodyParts(data)
        };
       fetchBodyParts();
       },[]);
  
       console.log(BodyParts.data)
    
  return (<>
  <h1 className='items-center justify-center flex text-4xl font-bold'>-: BodyParts Name :-</h1> <br/>
  <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
    
    {BodyParts?.data?.map((item, index) => (
      <div key={index} className='border-yellow-500 text-xl font-medium border-2 rounded-lg p-2'>{item.name.toUpperCase()}</div>
    ))}
  </div>
  </>
);
}

export default BodyParts