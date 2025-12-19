import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { query } = useParams();
  const [data,setData]=useState()

  useEffect(()=>{
       const fetchdata =async ()=>{
     const res=await fetch(`https://www.exercisedb.dev/api/v1/exercises/search?offset=0&limit=10&q=${query}&threshold=0.3`)
     const response=await res.json();
     setData(response)
    }
  fetchdata();
  },[query])
 
  console.log(data?.data);
  const exercise=data?.data;
  return (
      <>
  {exercise &&exercise.map((data) => (
    <h1 key={data.exerciseId}>{data.name}</h1>
  ))}
</>

  );
}

export default SearchResults;

