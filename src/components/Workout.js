import React from 'react'

function Workout({data}) {
  return (
   <>
    {data.map((item) => (
        <div key={item.exerciseId} className='flex items justify-center mb-4 border-4 border-yellow-500 rounded-2xl'>
         <div className='w-[20%] m-3  flex justify-center items-center'><img src={item.gifUrl} alt={item.name} className='border-yellow-500 object-cover rounded-2xl border-4 shadow-xl' ></img></div>

         <div className='w-[80%] '><h1 className='uppercase text-2xl font-bold underline mt-3'>{item.name}</h1>
        {/* //targetMuscles */}
        <div className='m-3 uppercase '>
            Target Muscles:{
            item.targetMuscles?.map((mus)=>(
                <button key={mus} className='border-1 rounded-lg bg-green-100 m-2 mr-6 p-1'>{mus}</button>
            ))
            }
           secondary Muscles:{
            item.secondaryMuscles?.map((mus)=>(
                <button key={mus} className='border-1 rounded-lg bg-red-100 mx-2 p-1'>{mus}</button>
            ))
            }
        </div>
        
        <div className='m-3 uppercase '>
           Equipments:{
            item.equipments?.map((mus)=>(
                <button key={mus} className='border-1 rounded-lg bg-blue-100 mx-2 p-1'>{mus}</button>
            ))
            }
        </div>
        <div className='border-2 border-yellow-500 rounded-sm bg-yellow-50 m-2 p-2' >
            Instructions:{
            item.instructions?.map((mus)=>(
                <p key={mus}  className='ml-1.5'>{mus}</p>
            ))
            }
        </div>

         </div>
        
        </div>
      ))}
   </>
  )
}

export default Workout