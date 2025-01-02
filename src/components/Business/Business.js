import React from "react";
function Business() {
	return (
		<div>
			<figure>
				{/* <img src = /> */}
				<figcaption>
					<h2 className="resto-name">Restaurant Name</h2>
					<p className="address"> Address, City, State, Zipcode</p>
					<p className="category">Category</p>
					<p className="rating">4.5 stars</p>
					<p className="review-count">154 reviews</p>
				</figcaption>
			</figure>
		</div>
	);
}

export default Business;
