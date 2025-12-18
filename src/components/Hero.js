import React from 'react'

function Hero() {
  return (
    <div className='flex items-center  justify-between'>
        <div >
             <h3 className='text-yellow-400 font-bold text-3xl'>Fitness Club</h3>
             <h1 className='font-semibold text-6xl'>Sweat,Smile <br></br> and Repeat</h1>

             <p className='my-3'>Check out the most effective exercises</p>

             <button className='bg-yellow-500 border-yellow-600 border-1 text-lg rounded-sm w-50 h-10'>EXPLORE EXCERCISES</button>
        </div>

        <div>
            <img src={"https://static.vecteezy.com/system/resources/thumbnails/072/451/920/small_2x/muscular-male-upper-body-showcasing-defined-chest-strong-shoulder-and-sculpted-abdominal-muscles-in-artistic-black-and-white-fitnessgraphy-composition-photo.jpg"} className='size-[90%] ' ></img>
        </div>
    </div>
  )
}

export default Hero