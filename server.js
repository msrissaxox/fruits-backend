import dotenv from "dotenv";
dotenv.config({ path: ".env" });



import express from "express";
import path from "path";
import cors from "cors"; // Import cors
import fetch from "node-fetch"; // Make sure to install node-fetch if using ES modules


import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//backend end point
// const port = 3001;
const port = process.env.PORT || 3002;


// Enable CORS for all routes
app.use(cors());

// const foodInput
// const protein = document.getElementById('protein');

// Serve static files from the src directory
// app.use(express.static("src"));
app.use(express.static(path.join(__dirname, "../Fruit-frontend/src")));

//api key
const apiKey = process.env.API_KEY;

// Route to serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(path.resolve("src/index.html"));
});

//API route to get api
app.get("/api/pixabay-key", (req, res) => {
  console.log("API Key:", process.env.API_KEY); // Debug
  res.json({ apiKey: process.env.API_KEY });
});

// API route to fetch fruits async function
app.get("/api/fruit/:fruitName", async (req, res) => {
  const fruitName = req.params.fruitName;
  // This creates a route for GET requests to '/api/fruits'
  // 'async' allows use of await inside the function
  // (req, res) are the request and re sponse objects
  try {
    // Start of error handling block
    // Anything that might throw an error goes inside the try block
    const response = await fetch("https://fruityvice.com/api/fruit/all");
    // Makes an HTTP GET request to the external API
    // 'await' pauses execution until the fetch is complete
    // Stores the response from the external API
    const data = await response.json();


    //does the inputted fruit contain the first few letters, minus the last letter
    // Filter fruits based on the input name
    const filteredFruit = data.find(
      (fruit) => fruit.name.toLowerCase() === fruitName.toLowerCase()
    );

    if (filteredFruit) {
      res.json({
        // filteredFruit,

        family: filteredFruit.family,
        order: filteredFruit.order,
        genus: filteredFruit.genus,
        calories: filteredFruit.nutritions.calories,
        fats: filteredFruit.nutritions.fat,
        sugars: filteredFruit.nutritions.sugar,
        carbs: filteredFruit.nutritions.carbohydrates,
        protein: filteredFruit.nutritions.protein,
      });
    } else {
      res.status(404).json({ error: "Fruit not found" });
    }
  } catch (error) {
    console.error("Error fetching fruits:", error);
    res.status(500).json({ error: "Failed to fetch fruits" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
