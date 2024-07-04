document.addEventListener('DOMContentLoaded', () => {
    // Banner images array
    const banners = [
        'banner-image1.jpg',
        'banner-image2.jpg',
        'banner-image3.jpg'
    ];
    let bannerIndex = 0;

    // Function to change banner image
    function changeBanner() {
        bannerIndex = (bannerIndex + 1) % banners.length;
        document.getElementById('bannerImage').src = banners[bannerIndex];
    }

    // Change banner every 5 seconds
    setInterval(changeBanner, 5000);

    // Search functionality
    document.getElementById('searchButton').addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        if (query) {
            alert(`You searched for: ${query}`);
            // Add search functionality here, such as redirecting to a search results page
        } else {
            alert('Please enter a search term.');
        }
    });
});
