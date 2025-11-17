# Marshmallow Blog

A simple blog application built with the MERN stack (MongoDB, Express, React, Node.js) for a web development course.

## Features

- Create, Read, Update, and Delete blog posts.
- Custom marshmallow-inspired styling with plain CSS.
- Modern ECMAScript Module syntax on both client and server.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (a local instance or a cloud-hosted one like MongoDB Atlas)

## How to Run

### 1. Clone the Repository

Clone this project to your local machine.

```bash
git clone https://github.com/CrisMedL/posts-app.git
cd posts-app
```

### 2. Backend Setup

Navigate to the server directory and install the dependencies.

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your MongoDB connection string. This file is ignored by Git and should not be shared.

```
MONGO_URI=your_mongodb_connection_string_goes_here
PORT=5000
```

Start the backend server:

```bash
npm start
```

The server will now be running on `http://localhost:5000`.

### 3. Frontend Setup

Open a **new terminal window**, navigate to the client directory, and install its dependencies.

```bash
cd client
npm install
```

Start the React development server:

```bash
npm start
```

The application will tell you the port it's running on.
