# Movie API Project

A RESTful API for managing movies with authentication using Express.js, TypeScript, and MongoDB.

## Features

- User Authentication (Register/Login)
- JWT-based authorization
- Movie CRUD operations
- Input validation
- TypeScript support
- MongoDB integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```

## API Endpoints

### Authentication
- POST /api/auth/register
  ```json
  {
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- POST /api/auth/login
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### Movies
- GET /api/movies - Get all movies
- POST /api/movies - Create a new movie
- GET /api/movies/:id - Get movie by ID
- PUT /api/movies/:id - Update movie
- DELETE /api/movies/:id - Delete movie

## Project Structure
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret
```

4. Build the project:
```bash
npm run build
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

Watch mode (auto-compile TypeScript):
```bash
npm run watch
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Movies
- GET /api/movies - Get all movies
- POST /api/movies - Create a new movie
- GET /api/movies/:id - Get movie by ID
- PUT /api/movies/:id - Update movie
- DELETE /api/movies/:id - Delete movie

## Development

To automatically compile TypeScript files when changes are made:
1. Run `npm run watch` in one terminal
2. Run `npm run dev` in another terminal

## Error Handling

The API uses standard HTTP status codes and returns errors in the following format:
```json
{
  "status": "error",
  "message": "Error message here"
}
```

## Validation

Input validation is implemented using Joi. All requests are validated before processing.

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 3000)
- `JWT_SECRET`: Secret key for JWT token generation