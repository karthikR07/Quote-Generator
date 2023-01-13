import React from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import HomePage from "./Components/home";
import BookMarks from "./Components/bookmark"; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/bookmarks" element={<BookMarks/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
