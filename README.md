# Word Frequency Counter

## Overview
The Word Frequency Counter is a web application that allows users to input a URL, fetch and analyze the content from that webpage, and display the most frequent words. Users can specify the number of top frequent words to retrieve, making it a useful tool for text analysis.

This project uses **React** for the frontend and **Node.js with Express** for the backend. Web scraping is performed using **Cheerio** to parse HTML and **Axios** to fetch webpage data. 

## Features
- **Fetch URL Content**: Input any URL, and the website will scrape and analyze the text content.
- **Top N Words**: Users can specify how many of the most frequent words they want to display.
- **Stop Word Removal**: Common stop words are filtered out for meaningful results.
- **Mobile-Responsive Design**: A clean, responsive interface that works well on all screen sizes.

## Prerequisites
- **Node.js** and **npm** installed on your computer. [Download Node.js](https://nodejs.org/)
- A code editor like **Visual Studio Code**.

## Project Structure
The zip file contains : 
``` Word Frequency Counter/
├── client/          # React frontend
├── server/          # Node.js backend
└── README.md        # Project documentation
```
## Getting Started

### 1. Extract the Project Folder
Extract the downloaded zip file to a folder on your computer. Open this folder in your code editor.

### 2. Install Dependencies

#### Install Backend Dependencies
1. Open a terminal.
2. Navigate to the `server` folder by running:
   ```
   cd root-directory/server
   ```
3. Install the required backend dependencies, including express, axios, cheerio, body-parser, cors, and stopword, by running:
```
npm install express axios cheerio body-parser cors stopword
```
#### Install Frontend Dependencies

1. In the same terminal (or open a new one), navigate to the client folder by running:
   ```
    cd ../client
    ```
2. Install the frontend dependencies with:
   ```
     npm install
   ```
### 3. Set Up Environment Variables

#### Frontend
1. In the client folder, create a .env file by running:
   ```
    touch .env
   ```
2. Open .env in your code editor and add the following:
   ```
    REACT_APP_API_URL=http://localhost:5001/api
   ```
### 4. Start the Application

#### Start the Backend Server

1. In your terminal, navigate to the server directory if you’re not already there:
   ```
    cd ../server
   ```
2. Start the backend server by running:
```
    node index.js
```
#### Start the Frontend Development Server

1. Open a new terminal window or tab
2. Navigate to the client directory by running:
```
    cd root-directory/client
```
3. Start the frontend server by running:
```
    npm start
```
## Usage

- Enter a URL in the input field and specify the number of top frequent words you want to retrieve.
- Click Get Word Frequency.
- The application will display a table showing the most frequent words and their counts.

## Project Walkthrough

### Backend (Server-side)
- Express.js is used for creating the API and handling requests.
- Cheerio is used to parse HTML and extract text content from specific tags (like <p>, <h1>, etc.).
- Axios is used to fetch webpage content from the provided URL.
- A simple word frequency counter is implemented, which removes stop words to keep only meaningful terms.
### Frontend (Client-side)
- React is used for building the interface.
- Axios is also used here to send requests to the backend and display the results.
- The design includes responsive styling and a table that displays the word frequency data.

## Troubleshooting
-  **Port Conflicts**: Ensure that port 5001 is not being used by another application.
- **CORS Issues**: Make sure the backend server is running, as CORS can sometimes block requests if the server isn’t responding.
- **URL Errors**: If the URL provided is invalid or the server cannot fetch content, you may see an error message. Ensure the URL is a valid, reachable webpage.



