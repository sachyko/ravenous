const apiKey =
	"HJD2Lpa-l98Ol_8-ca-lOw92xpS6_dFkvQG601PDqTKUCX1S8Ilm77BPEDoklN14VpLMKR76YsJdvYFGTHZILkCI52EKPinVEFtEejiFB2p736vzWA3cYhX57OOOZ3Yx";

const Yelp = {
	search(searchTerm = "cafe", location = "Tokyo", sortBy = "rating") {
		const url = `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortBy}`;

		return fetch(url, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch data from YELP API");
				}
				return response.json();
			})
			.then((data) => {
				if (!data.businesses) {
					return [];
				}

				//extract relevant data from each business
				return data.businesses.map((business) => ({
					id: business.id,
					name: business.name,
					src: business.image_url,
					address: business.location.address1,
					city: business.location.city,
					postalCode: business.location.zip_code,
					category: business.categories[0]?.title,
					rating: business.rating,
					reviewCount: business.review_count,
					website: business.url,
				}));
			})
			.catch((error) => {
				console.error("Error fetching Yelp data:", error);
				return []; // In case of an error, return an empty array
			});
	},
};

export default Yelp;
