import React from 'react';
import { Link }  from 'react-router-dom';
import "../Style.css";

function Footer()
{
	return(<section className="footer">
			<div className="footer-data">
				<div className="section-one">
					<h2>About JSON Placeholder</h2>
					<p>JSONPlaceholder is a simple fake REST API for testing and prototyping. It's like an image placeholder but for web developers. JSONPlaceholder is powered by JSON Server.</p>
					<button>Read More</button>
				</div>
				<div className="section-two">
					<h2>Other Pages</h2>
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Posts</li>
						<li>Comments</li>
						<li>Users</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className="section-three">
					<h2>Social Media Links</h2>
					<ul>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
						<li>Whatsapp</li>
						<li>Linkedin</li>
						<li>Skype</li>
					</ul>
				</div>
			</div>
			<div className="copyright-content">
				<p>@2022 All Rights Are Reserved | JSON Placeholder design by Vipin Chauhan</p>
			</div>
		</section>);
}
export default Footer;