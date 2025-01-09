// Purpose: Create a simple HTTP server that serves static files from the current directory and returns a 404 error if the file is not found. The server listens on port 3000.  If the file is not found, the server returns a 404 error. If there is an error other than file not found, the server returns a 500 error. The server uses the fs module to read files from the file system and the path module to get the file path from the URL. The server also uses the http module to create an HTTP server that listens on port 3000.  The server returns the file content with the appropriate content type based on the file extension.

// Import Node.js core modules  http, fs, and path  using require method
const http = require("http"); // Import Node.js core module http
const fs = require("fs"); // Import Node.js core module fs
const path = require("path"); // Import Node.js core module path

// Define the port on which to listen for requests
const port = 3000;

// Create a server that listens on the port 3000
const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  ); // Get the file path  from the URL  and join it with the current directory  using path.join method

  console.log(filePath);
  const extname = String(path.extname(filePath)).toLowerCase(); // Get the file extension from the file path  using path.extname method and convert it to lowercase using toLowerCase method

  // Define the mime types for different file extensions
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
  };

  // define the content type for the response based on the file extension
  const contentType = mimeTypes[extname] || "application/octet-stream"; // If the file extension is not found in the mimeTypes object, set the content type to 'application/octet-stream'

  // Read the file from the file path using fs.readFile method
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // If the file is not found, return a 404 error

        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(
          "404: File Not Found - Please check the URL and try again",
          "utf-8"
        );
      } else {
        // If there is an error other than file not found, return a 500 error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // If the file is found, return the file content with the appropriate content type
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Start the server and listen on the port 3000 for incoming requests using the listen method of the server object  and log a message to the console when the server is running and listening on the port 3000
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
