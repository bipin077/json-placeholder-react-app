import React from 'react';
import "../Style.css";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Index from '../Index';
import Posts from "../Posts";
import Comments from "../Comments";
import Users from "../Users";
import About from "../About";
import Contact from "../Contact";

function Navbar() {
  return (
    <div className="App">
      <div className="nav-bars">
      <BrowserRouter>
        <div className="nav-items">
          <div className="logo">
            <Link to="/"><img src="assets/logo.png" alt="" /></Link>
          </div>
          <div className="nav-links">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about-us"><li>About Us</li></Link>
                <Link to="/posts"><li>Posts</li></Link>
                <Link to="/comments"><li>Comments</li></Link>
                <Link to="/users"><li>Users</li></Link>
                <Link to="/contact-us"><li>Contact Us</li></Link>
            </ul>
          </div>
          <div className="icons">
              
          </div>
        </div>
        <Routes>
                <Route path='/' element={ <Index /> } />
                <Route path='/about-us' element={<About />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='/users' element={<Users />} />
                <Route path='/contact-us' element={<Contact />} />
              </Routes>
      </BrowserRouter>
    </div>  
    </div>
  );
}

export default Navbar;
