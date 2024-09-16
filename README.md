# Movie Booking System
A full-stack movie booking system where users can sign up, browse available movies, and book tickets. Movie providers can manage the movies by adding, editing, or deleting movie listings.

# Features
User Signup/Login: Users can sign up and log in to their respective dashboards (User or Movie Provider).
Movie Listing: Users can view all the available movies.
Movie Management: Movie providers can add, edit, and delete movies from their dashboard.
Role-based Access: Separate dashboards for users and movie providers.
# Tech Stack
Frontend: React.js with Bootstrap for styling.
Backend: Node.js and Express.js.
Database: MongoDB for storing user and movie data.
Axios: For making API requests.
# Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js
MongoDB (running locally or a cloud instance)
# Getting Started
## 1. Clone the repository:

git clone https://github.com/Madhumitha2305/MovieBooking_Frontend.git
cd movie-booking-system
## 2. Install dependencies:
### Backend

cd backend
npm install
### Frontend
cd frontend
npm install
## 3. Set up environment variables:
Create a .env file in the backend directory and configure it with your environment variables:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
## 4. Run MongoDB
Make sure MongoDB is running. If you're using a local instance, start it with the following command:
bash
Copy code
mongod
## 5. Start the Backend
Navigate to the backend directory and start the server:
cd backend
npm start
The server will start running at http://localhost:5000.

## 6. Start the Frontend
Navigate to the frontend directory and start the React app:
cd frontend
npm start
The React application will start at http://localhost:3000.

## API Endpoints
Here are some of the main API routes for this system:
### Auth
POST /api/auth/register: Register a new user or movie provider.
POST /api/auth/login: Log in a user or movie provider.
### Movies
GET /api/movies/: Get all movies.
GET /api/movies/provider/:providerId: Get movies added by a specific movie provider.
POST /api/movies/: Add a new movie (Movie Provider).
PUT /api/movies/:id: Update a movie by ID (Movie Provider).
DELETE /api/movies/:id: Delete a movie by ID (Movie Provider).
## Project Structure


backend/                # Backend files
│   ├── controllers/        # API controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── server.js           # Main backend server
frontend/               # Frontend files
│   ├── public/             # Public directory
│   ├── src/                # Source code (React components)
│   ├── App.js              # Main app entry point
│   └── index.js            # React DOM rendering
└── README.md               # Project documentation
# How to Use
### For Users:
Visit the signup page and register as a user.
Log in to your account and view the list of available movies.
Book movies as per availability.
### For Movie Providers:
Register as a movie provider during the signup process.
Log in to your provider dashboard.
Add, edit, or delete movies from the dashboard.
### Contributing
If you'd like to contribute, please fork the repository and submit a pull request. You can also report any issues or suggest new features in the Issues section.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
