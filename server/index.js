// server.js (Backend)
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const cors = require('cors');
const stopword = require('stopword');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/fetch-content', async (req, res) => {
  const { url, topN } = req.body;  // Get topN from request body

  try {
    // Fetch the page content using Axios
    const { data } = await axios.get(url);

    // Load the HTML into Cheerio for parsing
    const $ = cheerio.load(data);

    // Extract text from various elements, including paragraphs and lists
    const pageContent = $('h1, h2, h3, h4, h5, h6, p, li, ul')
      .text()  // Get text content
      .replace(/[^a-zA-Z\s]/g, ' ')  // Remove non-alphabetic characters
      .toLowerCase()
      .trim();

    // Count word frequencies in the filtered content
    const wordCounts = countWords(pageContent);

    // Sort words by frequency (descending) and limit to top N words
    const sortedWords = Object.entries(wordCounts)
      .sort((a, b) => b[1] - a[1]) // Sort by frequency
      .slice(0, topN)  // Use the user-provided topN value
      .map(([word, frequency]) => ({ word, frequency })); // Format result as objects

    // Return the sorted word frequencies as JSON
    res.json(sortedWords);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message || 'Error fetching or processing the webpage' });
  }
});

// Count word frequencies and filter out stop words
function countWords(text) {
  const words = text
    .split(/\s+/)
    .map(word => word.toLowerCase());

  const customStopWords = [
    'the', 'and', 'in', 'to', 'of', 'for', 'on', 'with', 'at', 'from', 'by', 'an', 'be', 'this', 
    'that', 'it', 'is', 'was', 'as', 'are', 'will', 'has', 'have', 'or', 'not', 'we', 'you',
    'which', 'their'
  ];

  const filteredWords = stopword.removeStopwords(words, customStopWords);

  return filteredWords.reduce((acc, word) => {
    if (word.length > 2) { // Ignore very short words
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
