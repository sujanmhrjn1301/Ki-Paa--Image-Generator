document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    const imageContainer = document.getElementById('imageContainer');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const searchInput = document.getElementById('searchInput').value;

        

        try {
            const response = await fetch(`/search?query=${encodeURIComponent(searchInput)}`);
            const data = await response.json();
            const imageUrl = data.imageUrl;

            // Create a new img element
            const resultImage = document.createElement('img');

            // Set attributes for the img tag
            resultImage.src = imageUrl;
            resultImage.style.width = '300px'; // Set width to 300px
            resultImage.style.height = '300px'; // Set height to 300px
            resultImage.onmouseenter = function(){
                this.style.transform = "scale(1.1)"; // Zoom in when mouse over
            }
            resultImage.onmouseleave = function(){
                this.style.transform = "scale(1)";
            }

            // Append the img tag to the image container
            imageContainer.innerHTML = ''; // Clear previous content
            imageContainer.appendChild(resultImage);

            // Apply styles to the image container (if needed)
            imageContainer.style.display = 'flex';
            imageContainer.style.position = 'absolute';
            imageContainer.style.top = '50%';
            imageContainer.style.left = '50%';
            imageContainer.style.transform = 'translate(-50%, -50%)';
            imageContainer.style.backgroundColor = 'lightgray';

            // const imageLink = document.getElementById('viewImage');
            // console.log(imageLink);
            // const imgLink = imageUrl;
            // imageLink.href = imgLink;

        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred while processing your request.');
        }
    });
});


