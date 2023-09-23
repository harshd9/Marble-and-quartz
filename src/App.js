import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Main from './components/Main';
import Navbar from './components/Navbar';
import Places from './components/Places';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Details from './components/Details';
import BookNow from './components/BookNow';
import TajMahalSlideshow from './components/TajMahalSlideshow.js';
import MaldivesSlideshow from './components/MaldivesSlideshow';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
              <Route path="/Main" element={<Main/>}/>
                <Route path="/places" element={<Places />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/details" element={<Details/>} />
                <Route path="/details/:id" element={<Details/>} />
                <Route path="/BookNow" element={<BookNow/>} />
                <Route path="/tajmahal-slideshow" element={<TajMahalSlideshow/>} />
                <Route path="/maldives-slideshow" element={<MaldivesSlideshow/>} />
                


            </Routes>
        </Router>
    );
}

export default App;