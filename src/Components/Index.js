import React from 'react';
import "../Style.css";
import {Link} from 'react-router-dom';

function Index()
{
	return(
		<div className="container">
			<section className="banner-data">
				<div className="image-section">
					<img src="assets/banner1.jpg" />
				</div>
				<div className="content-section">
					<h2>JSON Placeholder</h2>
					<p>JSONPlaceholder is a simple fake REST API for testing and prototyping. It's like an image placeholder but for web developers. .</p>
					<Link to='/about'><button>Read More</button></Link>
					<Link to='/contact'><button>Contact Us</button></Link>
				</div>
			</section>	

			<section className="about-us">
				<h2>About JSON Placeholder </h2>
				<div className="about-data">
					<div className="about-image">
						<img src="assets/banner2.jpg" />
					</div>
					<div className="about-content">
						<h3>About JSON Placeholder </h3>
						<p>JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
						<button >Read More</button>
					</div>
				</div>
			</section>
		</div>
		);
}

export default Index;