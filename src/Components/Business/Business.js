import React from "react";
import styles from "./Business.module.css";

const Business = ({
	src,
	name,
	address,
	city,
	state,
	postalcode,
	category,
	rating,
	reviewCount,
}) => {
	return (
		<div className={styles.business}>
			<figure>
				<img src={src} alt={name} />
				<figcaption>
					{/* Two-column layout */}
					<div className={styles.columns}>
						<div className={styles.leftcolumn}>
							<h2>{name}</h2>
							<p>{address}</p>
							<p>{city}</p>
							<p>{state}</p>
							<p>{postalcode}</p>
						</div>
						<div className={styles.rightColumn}>
							<p>{category}</p>
							<p>{rating}</p>
							<p className={styles.reviewCount}>{reviewCount}</p>
						</div>
					</div>
				</figcaption>
			</figure>
		</div>
	);
};

export default Business;
