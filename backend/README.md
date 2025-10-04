# Backend API

This is the backend API for Dat Phi's personal website, replacing the previous Supabase implementation with a local Express.js server and SQLite database.

## Features

- RESTful API endpoints for posts management
- SQLite database for local data storage
- CORS enabled for frontend communication
- Sample data initialization
- Error handling and validation

## Setup

1. Install dependencies:

```bash
npm install
```

2. Initialize the database with sample data:

```bash
npm run init-db
```

3. Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a specific post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Health Check

- `GET /api/health` - Check server status

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=3001
NODE_ENV=development
DB_PATH=./database.sqlite
CORS_ORIGIN=http://localhost:8010
```

## Database Schema

The `posts` table includes:

- `id` (INTEGER PRIMARY KEY)
- `title` (TEXT NOT NULL)
- `description` (TEXT NOT NULL)
- `date` (TEXT NOT NULL)
- `readTime` (TEXT NOT NULL)
- `icon` (TEXT)
- `link` (TEXT)
- `image_url` (TEXT)
- `created_at` (DATETIME DEFAULT CURRENT_TIMESTAMP)

## Development

The server uses nodemon for automatic restarts during development. The database file (`database.sqlite`) will be created automatically when the server starts.
