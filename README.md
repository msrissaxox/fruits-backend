# Fruit Finder Backend

This is the backend for the Fruit Finder application, an interactive web application that provides detailed information about fruits, including nutritional data and images. The backend is built using Node.js and Express.js, and it fetches fruit data from the Fruityvice API while also serving API keys for the Pixabay image service.

## ✨ Features

- **Fruit Data Fetching:** Retrieves detailed fruit information such as botanical details and nutritional values from the Fruityvice API.
- **Pixabay API Key Exposure:** Provides the front end with the API key needed to fetch fruit images.
- **CORS Enabled:** Supports cross-origin requests for seamless frontend integration.
- **Static File Serving:** Serves static frontend files from the `Fruit-frontend/src` directory.

## 🚀 Technologies Used

### Backend:
- Node.js
- Express.js
- `dotenv` for environment variable management
- `cors` for handling cross-origin requests
- `node-fetch` for making API requests

### APIs:
- **Fruityvice API** – Provides fruit-related data
- **Pixabay API** – Fetches fruit images

### Deployment:
- **Render** (for hosting the backend)

## 📌 Installation & Setup

To set up and run the backend locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- Node.js

### 1. Clone the Repository
Clone the backend repository to your local machine:
```sh
git clone https://github.com/your-username/fruit-finder-backend.git
```

### 2. Navigate to the Project Directory
```sh
cd fruit-finder-backend
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Set Up Environment Variables
Create a `.env` file in the root directory and add your API keys:
```
API_KEY=your_pixabay_api_key
PORT=3002
```

### 5. Run the Server
Start the server with the following command:
```sh
npm start
```
The server should now be running on `http://localhost:3002`

## 🔥 API Endpoints

### 1. Get the Pixabay API Key
**Endpoint:**
```
GET /api/pixabay-key
```
**Response:**
```json
{
  "apiKey": "your_pixabay_api_key"
}
```

### 2. Get Fruit Information
**Endpoint:**
```
GET /api/fruit/:fruitName
```
**Example Request:**
```
GET /api/fruit/apple
```
**Example Response:**
```json
{
  "family": "Rosaceae",
  "order": "Rosales",
  "genus": "Malus",
  "calories": 52,
  "fats": 0.2,
  "sugars": 10.4,
  "carbs": 13.8,
  "protein": 0.3
}
```

## 🚀 Deployment
To deploy the backend on Render:
1. Create a new service on [Render](https://render.com/)
2. Connect the repository
3. Set the build command to:
   ```sh
   npm install && npm start
   ```
4. Add environment variables (`API_KEY`, `PORT`)
5. Deploy and obtain the public backend URL

## 💡 Notes
- Ensure the `.env` file is correctly configured.
- If running locally, the frontend should point to `http://localhost:3002` for API requests.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).


