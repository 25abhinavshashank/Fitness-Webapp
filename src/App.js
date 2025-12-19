import Home from "./Home";
import {Routes, Route } from "react-router-dom";
import React from 'react'
import SearchResults from "./components/SearchResult";
import Layout from "./components/layout";
import Exercises from "./components/Exercises";

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Home />}></Route>
        <Route path="search/:query" element={<SearchResults />} />
        <Route path="/exercises" element={<Exercises/>}></Route>
      </Route>   
    </Routes>
  )
}

export default App