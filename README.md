# TODOAPP
TODOAPP is a Node.js-based application designed to manage a to-do list. It provides functionalities to create, read, update, and delete to-do items, utilizing a structured MVC (Model-View-Controller) architecture.


# Installation
# Clone the repository:
git clone https://github.com/princekrmishra/todoAPP.git

# Navigate to the project directory:
cd todoAPP

# Install the dependencies:
npm install

# Configuration
# Environment Variables
1. Create a .env file in the root directory.
2. Add the following variables:
  PORT=3000
  DB_URI=your_mongodb_connection_string
3. Replace your_mongodb_connection_string with your actual MongoDB connection string.
   
# Database Configuration
The database configuration is located in config/database.js. Ensure the settings match your database setup.

# Usage
Start the server:
npm run dev
This will start the server with Nodemon, allowing automatic restarts on code changes. The server will run on the port specified in the .env file (default: 3000).

# API Endpoints
# 1. Create a To-Do Item
  POST /api/todos
  Request Body:
{
  "title": "Sample To-Do",
  "description": "This is a sample to-do item."
}

# 2. Get All To-Do Items
GET /api/todos

# 3. Get a To-Do Item by ID
GET /api/todos/:id

# 4. Update a To-Do Item
PUT /api/todos/:id
Request Body:
{
  "title": "Updated To-Do",
  "description": "This is an updated to-do item."
}
# Delete a To-Do Item
DELETE /api/todos/:id

# Dependencies
# Express: Fast, unopinionated, minimalist web framework for Node.js.
# Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
# dotenv: Module that loads environment variables from a .env file into process.env.

# Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

# License
This project is licensed under the MIT License. See the LICENSE file for details.


