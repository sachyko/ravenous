import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

const BusinessList = ({ businesses }) => {
	return (
		<div className={styles.businessList}>
			{businesses.map((business) => (
				<Business
					key={business.name}
					src={business.src}
					name={business.name}
					address={business.address}
					city={business.city}
					state={business.state}
					postalcode={business.postalcode}
					category={business.category}
					rating={business.rating}
					reviewCount={business.reviewCount}
				/>
			))}
		</div>
	);
};

export default BusinessList;
