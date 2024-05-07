const searchForm = document.getElementById('searchForm');
        const imageContainer = document.getElementById('imageContainer');

        searchForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent form submission

            const queryInput = document.getElementById('searchInput');
            const query = queryInput.value.trim();

            if (query) {
                try {
                    const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
                    const data = await response.json();
                    const { imageUrl } = data;
                    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image" class="max-w-full">`;
                } catch (error) {
                    console.error('An error occurred:', error);
                    alert('An error occurred while processing your request.');
                }
            } else {
                alert('Please enter a search query.');
            }
        });