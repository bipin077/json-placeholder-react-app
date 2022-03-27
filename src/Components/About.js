import React from 'react';
import "./Style.css";

const About=()=>
{
	return (
		<>
		<div className="about-section">
			<div className="about-heading">
				<h2>About JSON Placeholder</h2>
			</div>
			<div className="about-content">
				<div className="content-section">
					<h1>What is JSON Placeholder?</h1>
					<p>JSON Placeholder is a fake REST API that is primarily used for prototyping and testing. You can call it a web developer's image placeholder. JSON Placeholder is an online service that can be used when you need fake data to prototype or test some fake data. The code for JSON Placeholder can be run from anywhere under the support of JSONP and CORS. The primary use of JSON Placeholder is to fake a server, sharing the code, and many such REST API uses are associated with it.</p>
				</div>
				<div className="image-section">
					<img src="assets/fake1.jpg" alt="" /> 
				</div>
			</div>
			<div className="about-content">
				<div className="image-section">
					<img src="assets/fake2.jpg" alt="" />
				</div>
				<div className="content-section">
					<h1>Why is JSON Placeholder used?</h1>
					<p>Most developers experience when they put their hands on a new library and try some exploring methods or hacking a prototype or tutorial. Hence, to test out new libraries and frameworks, they need some data for testing or exploring the aspects. They also refrain from the idea of using some API that is public because it usually takes more time to register a client and understand how things work in such a complex API rather than having to focus on the task he needs to do. In all such instances, there arises a need for some data that is available to be tested and can be faked using the REST API. This is the main reason why most developers use JSON Placeholder to gain insights. This is where the Placeholder comes in handy, like that of image placeholders mostly needed by web developers.</p>
				</div>
			</div>
		</div>

		</>);
}

export default About;