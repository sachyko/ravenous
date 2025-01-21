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
	website,
}) => {
	//format the full adress
	const fullAdress = `${address}, ${city},  ${postalcode}`;
	//Google Maps Url
	const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
		fullAdress
	)}
`;
	return (
		<div className={styles.business}>
			<figure>
				<a href={website} target="_blank" rel="noopener noreferrer">
					<img src={src} alt={name} />
				</a>
				<figcaption>
					{/* Two-column layout */}
					<div className={styles.columns}>
						<div className={styles.leftcolumn}>
							<p className={styles.address}>
								<a
									href={googleMapsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.addressLink}
								>
									{fullAdress}
								</a>
							</p>
							{/* <p>{address}</p>
								<p>{city}</p>
								<p>{state}</p>
								<p>{postalcode}</p> */}
						</div>
						<div className={styles.rightColumn}>
							<p>{category}</p>
							<p>
								{rating} <i class="fa-solid fa-star"></i>
							</p>
							<p className={styles.reviewCount}>
								{reviewCount} <i class="fa-regular fa-pen-to-square"></i>
							</p>
						</div>
					</div>
				</figcaption>
			</figure>
		</div>
	);
};

export default Business;
