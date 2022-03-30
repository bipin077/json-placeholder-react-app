import React from 'react';

const Contact=()=>
{
	return (
		<>
			<div className="contact-us">
				<div class="col-6">
					<img src="assets/contact.png" alt="contact" />
				</div>
				<div class="col-6">
					<form>
					<h2> Submit Your Enquiry Here.. </h2>
						<div className="form-fields">
							<input type="text" name="name" id="name" placeholder="Enter Your Name" />
							<input type="email" name="email" id="email" placeholder="Enter Your Email" />
							<input type="number" name="phone" id="phone" placeholder="Enter Your Phone No" />
							<button>Enquire Now</button>
						</div>
					</form>
				</div>
			</div>
			<div className="google-map">
				
			</div>

		</>);
}

export default Contact;