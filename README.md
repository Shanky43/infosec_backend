# Infosec Backend

This is the backend server for the Infosec project. It provides the necessary APIs for user authentication and password management.

## Installation

To run the backend server, follow these steps:
##Git clone 
![github clone link](https://github.com/your-username/infosec_backend.git)

cd infosec_backend
npm install
npm run server

The server will start running on `http://localhost:8080`.

## API Endpoints

The backend server exposes the following API endpoints:

- `POST /users/register`: Register a new user.
- `POST /users/login`: Log in an existing user.
- `PATCH /users/:userId/password`: Update user's password.

Please refer to the API documentation for detailed information on each endpoint.

## Technologies Used and libraries are used in this project:
- Node.js
- Mongoose
- Express.js
- MongoDB
- Bcrypt
- Cors
- Dotenv
- Express
- Jsonwebtoken(JWT)
- Mongoose
- Nodemon

## Authors
- [Shankar S](https://github.com/Shanky43)
