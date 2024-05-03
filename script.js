// Dog CEO's Dog API
const dogAPI = 'https://dog.ceo/api/breeds/image/random';

// Function to fetch random dog picture
function getDogPicture() {
    fetch(dogAPI)
        .then(response => response.json())
        .then(data => {
            document.getElementById('dog-image').src = data.message;
        })
        .catch(error => {
            console.error('Error fetching dog picture:', error);
        });
}

// Initial call
getDogPicture();


