import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
	//state for search input, location input, and selected sort option
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");
	const [sortOption, setSortOption] = useState("best_match");

	//Handle changes in the search term input

	const handleSearchTermChange = (event) => {
		setSearchTerm(event.target.value);
	};

	//Handle changes in the location input
	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};

	//Define the handleSortChange function to update the sortOption state
	const handleSortChange = (value) => {
		setSortOption(value);
	};

	// Define separate functions for each sort option
	const handleBestMatch = () => {
		setSortOption("best_match");
	};

	const handleRating = () => {
		setSortOption("rating");
	};

	const handleReviewCount = () => {
		setSortOption("review_count");
	};
	//Handle the search button click
	const handleSearch = (event) => {
		event.preventDefault(); //Prevent  Prevent the default form action

		//log the search message to the console
		console.log(
			`Searching Yelp with ${searchTerm}, ${location}, ${sortOption}`
		);
	};

	return (
		<div className={styles.search}>
			<h1>ravenous</h1>

			<div className={styles.searchBar}>
				{/*Sort Options */}
				<div className={styles.sortOptions}>
					<button
						className={sortOption === "best_match" ? "active" : ""}
						onClick={handleBestMatch}
					>
						Great Match
					</button>
					<button
						className={sortOption === "rating" ? "active" : ""}
						onClick={handleRating}
					>
						Highest Rated
					</button>
					<button
						className={sortOption === "review_count" ? "active" : ""}
						onClick={handleReviewCount}
					>
						Most Reviewed
					</button>
				</div>
				<div className={styles.input}>
					{/*Search term input */}
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearchTermChange}
						placeholder="Search Businesses"
					/>

					{/*Location input */}
					<input
						type="text"
						value={location}
						onChange={handleLocationChange}
						placeholder="Enter a location"
					/>
				</div>
				{/*Search button*/}
				<button className={styles.button} onClick={handleSearch}>
					Let's Go
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
