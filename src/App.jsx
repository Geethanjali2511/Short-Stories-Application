import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup.jsx"
import Signin from "./Signin.jsx"
import Appbar from "./Appbar.jsx"
import AddCourse from "./AddCourse"
import Courses from "./Courses"
import Course from "./Course"
//import Landing from "./Landing"
import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  
    return (
      <div style={{width: "100vw", 
      height:"100vh", 
      backgroundColor:"#eeeeee"}}>
        
        <Router>
        <Appbar/>
        
            <Routes>
                <Route path={"/signup"} element={<Signup />} />
            <Route path={"/signup"} element={<Signup />} />
                <Route path={"/addcourse"} element={<AddCourse />} />
                <Route path={"/course/:courseId"} element={<Course />} />
                <Route path={"/signin"} element={<Signin />} />
                <Route path={"/courses"} element={<Courses />} />
               
    
            </Routes>
        </Router>
        
        </div>
    );
}

export default App;
