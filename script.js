fetch('https://rapidapi.com/3b-data-3b-data-default/api/airbnb13', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY' // Replace with your RapidAPI key
    }
})
.then(response => response.json())
.then(data => {
    const listing = data.data[0]; // Assuming there's only one listing in the response

    // Populate data into the HTML structure
    document.querySelector('.listing-title').textContent = listing.name;
    document.querySelector('.listing-info p:nth-child(1)').textContent = `Location: ${listing.city}, ${listing.address}`;
    document.querySelector('.listing-info p:nth-child(2)').textContent = `Type: ${listing.type}`;
    document.querySelector('.listing-info p:nth-child(3)').textContent = `Rating: ${listing.rating} (${listing.reviewsCount} reviews)`;
    document.querySelector('.listing-info p:nth-child(4)').textContent = `Superhost: ${listing.isSuperhost ? 'Yes' : 'No'}`;
    document.querySelector('.listing-details p:nth-child(1)').textContent = `Bathrooms: ${listing.bathrooms}`;
    document.querySelector('.listing-details p:nth-child(2)').textContent = `Bedrooms: ${listing.bedrooms}`;
    document.querySelector('.listing-details p:nth-child(3)').textContent = `Beds: ${listing.beds}`;
    document.querySelector('.listing-details p:nth-child(4)').textContent = `Maximum Guests: ${listing.persons}`;

    const imageContainer = document.querySelector('.listing-images');
    listing.images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Listing Image';
        imageContainer.appendChild(img);
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});