import React, { useEffect, useState } from 'react'

function Slider() {
    const [exercises,setExercises]=useState([]);
    useEffect(()=>{
         const fetchSlider=async ()=>{
        const res=await fetch('https://www.exercisedb.dev/api/v1/bodyparts/upper%20arms/exercises?offset=0&limit=10')
        const data=await res.json();

        setExercises(data.data)
    }
    fetchSlider();
    },[])
    
   

  return (
    
    <div className='m-4'>
    <div className='flex justify-center items-center m-3'>
       <h1 className='text-4xl font-medium '> Exercises Demo</h1>
       
    </div>
    <div style={{ overflow: "hidden", width: "100%" }}>
  <div
    style={{
      display: "flex",
      gap: "16px",
      animation: "scroll 10s linear infinite",
    }}
  >
    {[...exercises, ...exercises].map((items, i) => (
      <div className='rounded-sm border-4 border-yellow-500'
        key={i}
        style={{
          minWidth: "200px",
         
        }}
      >
        <img src={items.gifUrl} alt={items.name} />
      </div>
    ))}
  </div>

  <style>
    {`
      @keyframes scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}
  </style>
</div>
</div>

  )
}

export default Slider