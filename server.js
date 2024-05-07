const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Serve static files (e.g., index.html)
app.use(express.static('public'));

// Handle GET request to /search
app.get('/search', async (req, res) => {
    const query = req.query.query;
    console.log('Search query:', query); // Added console log for debugging
    console.log('Fetching API Data...');
    
    try {
        const image = await openai.images.generate({ model: 'dall-e-2', prompt: query, size: '512x512', n: 1 });
        console.log("Generating Image. Please wait...");
        const imageUrl = image.data[0].url;
        res.json({ imageUrl });
        console.log("Generation Successful.")
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('An error occurred while processing your request.');
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


