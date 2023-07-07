import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChatForm from "./components/chatForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container p-4'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/form" Component={ChatForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
