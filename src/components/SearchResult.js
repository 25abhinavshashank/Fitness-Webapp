import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Workout from "./Workout";

function SearchResults() {
  const { query } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const res = await fetch(
        `https://www.exercisedb.dev/api/v1/exercises/search?offset=0&limit=10&q=${query}&threshold=0.3`
      );
      const response = await res.json();
      setData(response);
      setLoading(false);
    };
    fetchdata();
  }, [query]);

  // 🔹 loading state
  if (loading) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  // 🔹 wrong input check (IMPORTANT)
  if (!data?.data || data.data.length === 0) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center text-center">
        <h1 className="text-red-600 font-extrabold text-5xl">
          Wrong Input!!!!! <br />
          <span className="text-gray-900 underline">
            Please Enter The Valid Exercise
          </span>
        </h1>
      </div>
    );
  }

  // 🔹 valid result
  return (
    <div className="mt-8 ">
    <div>
      <h1 className="text-4xl font-bold mb-4  flex justify-center items-center">
        Showing exercises for<span className="text-yellow-500 ml-4"> "{query}"</span>
      </h1>
    </div>
    <div>
      <Workout data={data?.data}></Workout>
    </div>
    </div>
  );
}

export default SearchResults;
