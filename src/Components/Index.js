import React from 'react';

function Index()
{
	return(
		<>
			<section className="banner-data">
				<div className="image-section">
					<img src="assets/banner1.jpg" />
				</div>
				<div className="content-section">
					<h2>JSON Placeholder</h2>
					<p>The Biggest API In The World For Fake Data.</p>
					<button>Read More</button>
					<button>Contact Us</button>
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
						<button>Read More</button>
					</div>
				</div>
			</section>
		</>
		);
}

export default Index;