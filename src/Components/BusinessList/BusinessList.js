import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

const BusinessList = ({ businesses }) => {
	return (
		<div className={styles.businessList}>
			{businesses.map((business) => (
				<Business
					key={business.id}
					src={business.src}
					name={business.name}
					address={business.address}
					city={business.city}
					state={business.state}
					postalcode={business.postalCode}
					category={business.category}
					rating={business.rating}
					reviewCount={business.reviewCount}
					website={business.website}
				/>
			))}
		</div>
	);
};

export default BusinessList;
