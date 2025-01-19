// import "./App.css";

//Components

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar//SearchBar";
import Wave from "../Wave/Wave";
// import "./App.css";

//pictures
import tencups from "./picture/10cups.jpeg";
import anjin from "./picture/Anjin.jpeg";
import garden from "./picture/garden house crafts.jpeg";
import nomu from "./picture/Nomu.jpeg";
import roastery from "./picture/Roastery.jpeg";
import aoyama from "./picture/aoyama.jpeg";

//Array of businesses
const businesses = [
	{
		src: garden,
		name: "Garden House Crafts Daikanyama",
		address: "Log Road Daikanyama Building 5",
		city: "Shibuya",
		state: "Tokyo",
		postalcode: "150-0034",
		category: "Cafe",
		rating: "4.3",
		reviewCount: "453 reviews",
	},
	{
		src: aoyama,
		name: "Aoyama Flower Market Green House",
		address: "Minamiaoyama, 5-4-41 Glassarea Aoyama 1",
		city: "Minato",
		state: "Tokyo",
		postalcode: "107-0062",
		category: "Cafe",
		rating: "4.2",
		reviewCount: "558 reviews",
	},
	{
		src: anjin,
		name: "Anjin Lounge",
		address: "2F Tsutaya Books No.2, 17-5 Sarugakucho",
		city: "Shibuya",
		state: "Tokyo",
		postalcode: "150-0033",
		category: "Cafe",
		rating: "3.8",
		reviewCount: "250 reviews",
	},
	{
		src: nomu,
		name: "Nicolai Bergmann Nomu Aoyama",
		address: "5-7-2 Minamiaoyama",
		city: "Minato",
		state: "Tokyo",
		postalcode: "107-0062",
		category: "Cafe",
		rating: "3.68",
		reviewCount: "931 reviews",
	},
	{
		src: tencups,
		name: "Ten Cups",
		address: "3-26-21 Tokyu Stay Shibuya Next South Exit 1F",
		city: "Shibuya",
		state: "Tokyo",
		postalcode: "150-0002",
		category: "Cafe",
		rating: "4.7",
		reviewCount: "133 reviews",
	},
	{
		src: roastery,
		name: "Roastery Coffee Laboratory",
		address: "Jinnan 1-6-3 Jinnan Flag 1F",
		city: "Shibuya",
		state: "Tokyo",
		postalcode: "150-0041",
		category: "Cafe",
		rating: "3.8",
		reviewCount: "539 reviews",
	},
];

function App() {
	return (
		<div className="App">
			<SearchBar />
			<Wave />
			<BusinessList businesses={businesses} />
		</div>
	);
}

export default App;
