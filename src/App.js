import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ChatForm from "./components/chatForm";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container p-4'>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/form" Component={ChatForm} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
