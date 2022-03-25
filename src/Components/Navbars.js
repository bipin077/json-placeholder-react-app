import React from 'react';
import "./Style.css";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Index from "./Index";

function Navbars()
{
	return(
		<div className="nav-bars">
			<BrowserRouter>
				<div className="nav-items">
					<div className="logo">
						<img src="assets/logo.png" alt="" />
					</div>
					<div className="nav-links">
						<ul>
						  <Link to="/"><li>Home</li></Link>
			              <Link to="/posts"><li>Posts</li></Link>
			              <Link to="/comments"><li>Comments</li></Link>
			              <Link to="/users"><li>Users</li></Link>
			              <Link to="/about-us"><li>About Us</li></Link>
			              <Link to="/contact-us"><li>Contact Us</li></Link>
							<Routes>
								<Route path='/' element={ <Index /> } />
								<Route path='/posts' element={<Index />} />
								<Route path='/comments' element={<Index />} />
								<Route path='/users' element={<Index />} />
								<Route path='/about-us' element={<Index />} />
								<Route path='/contact-us' element={<Index />} />
							</Routes>
						</ul>
					</div>
					<div className="extralinks">
						<ul>
							<li>Login</li>
							<li>Menus</li>
						</ul>
					</div>
				</div>
			</BrowserRouter>
		</div>
		);
}

export default Navbars;