# Simple HTTP Server

This project is a simple HTTP server built using Node.js. The server serves static files from the current directory and returns appropriate HTTP status codes based on the file's existence and any errors encountered.

## Features

- Serves static files from the current directory.
- Returns a `404` error if the file is not found.
- Returns a `500` error for any other server errors.
- Uses the `fs` module to read files from the file system.
- Uses the `path` module to handle file paths.
- Uses the `http` module to create an HTTP server.
- Automatically determines the content type based on the file extension.

## Learning Objectives

- Understanding how to create a basic HTTP server using Node.js.
- Learning how to handle file system operations using the `fs` module.
- Understanding how to work with file paths using the `path` module.
- Learning how to handle different HTTP status codes and responses.
- Understanding how to serve static files with appropriate content types.

## Usage

1. **Clone the Repository**
2. **Install Node.js:** Ensure you have Node.js installed on your machine. You can download it from `nodejs.org`.
3. **Run the Server:**

```sh
node server.js
```

4. **Access the Server**:
   Open your web browser and navigate to `http://localhost:3000/`. If you have an `index.html` file in the same directory as `server.js`, it will be served. You can also access other files by specifying their paths in the URL, e.g., `http://localhost:3000/about.html`.
