import Home from "./Home";
import {Routes, Route } from "react-router-dom";
import React from 'react'
import SearchResults from "./components/SearchResult";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="search/:query" element={<SearchResults />} />
         
    </Routes>
  )
}

export default App