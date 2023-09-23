import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import Places from './Places'
import About from './About';

function Main() {
  return (
    <div >
    <Router>
    <div className='main-route'>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/places">Places</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/about">About</Link></li>
    </ul>
    </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Places" element={<Places/>}/>
    <Route path="About" element={<About/>}/>
    </Routes>
    </Router>
    </div>
  );
};

export default Main;