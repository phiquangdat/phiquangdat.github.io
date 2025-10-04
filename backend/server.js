import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const dbPath = join(__dirname, "database.sqlite");
const db = new sqlite3.Database(dbPath);

// Initialize database tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL,
    readTime TEXT NOT NULL,
    icon TEXT,
    link TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Routes
app.get("/api/posts", (req, res) => {
  const query = `
    SELECT * FROM posts 
    ORDER BY date DESC
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error fetching posts:", err);
      return res.status(500).json({ error: "Failed to fetch posts" });
    }

    // Get total count
    db.get("SELECT COUNT(*) as count FROM posts", [], (err, countResult) => {
      if (err) {
        console.error("Error getting post count:", err);
        return res.status(500).json({ error: "Failed to get post count" });
      }

      res.json({
        data: rows,
        total: countResult.count,
      });
    });
  });
});

app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("Error fetching post:", err);
      return res.status(500).json({ error: "Failed to fetch post" });
    }

    if (!row) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(row);
  });
});

app.post("/api/posts", (req, res) => {
  const { title, description, date, readTime, icon, link, image_url } =
    req.body;

  if (!title || !description || !date || !readTime) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const query = `
    INSERT INTO posts (title, description, date, readTime, icon, link, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [title, description, date, readTime, icon, link, image_url],
    function (err) {
      if (err) {
        console.error("Error creating post:", err);
        return res.status(500).json({ error: "Failed to create post" });
      }

      res
        .status(201)
        .json({ id: this.lastID, message: "Post created successfully" });
    }
  );
});

app.put("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, date, readTime, icon, link, image_url } =
    req.body;

  const query = `
    UPDATE posts 
    SET title = ?, description = ?, date = ?, readTime = ?, icon = ?, link = ?, image_url = ?
    WHERE id = ?
  `;

  db.run(
    query,
    [title, description, date, readTime, icon, link, image_url, id],
    function (err) {
      if (err) {
        console.error("Error updating post:", err);
        return res.status(500).json({ error: "Failed to update post" });
      }

      if (this.changes === 0) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.json({ message: "Post updated successfully" });
    }
  );
});

app.delete("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM posts WHERE id = ?", [id], function (err) {
    if (err) {
      console.error("Error deleting post:", err);
      return res.status(500).json({ error: "Failed to delete post" });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ message: "Post deleted successfully" });
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\nShutting down server...");
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Database connection closed.");
    process.exit(0);
  });
});
