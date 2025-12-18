import React from 'react'

function Search() {
  return (
    <div className='flex justify-center items-center gap-4 m-5 '>
        <input placeholder='Enter the name of Body part or Exercise' className= 'w-[400px] h-[50px] border-black border-4 text-yellow-600 font-bold px-1.5 '/>
        <button className='bg-yellow-500 border-yellow-600 .border-1 text-lg rounded-sm w-50 h-10'>Search Exercises</button>
    </div>
  )
}

export default Search