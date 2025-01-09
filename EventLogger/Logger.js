// This file demonstrates how to use the EventEmitter class to create a custom event emitter that logs messages to a file.  It logs messages to a file whenever the message event is emitted.  It also logs the memory usage of the system every 3 seconds. The log file is created in the current directory and is named log.txt.
const fs = require("fs");
const os = require("os");

const EventEmitter = require("events"); // EventEmitter is a class  in the events module  that we can use to raise events in our application  and handle them asynchronously  using event listeners.  It is a class that we can extend in our own classes to add event-driven functionality to them.

// Logger class extends EventEmitter class  to add event-driven functionality to it.  The log method emits a message event with the message as the payload.
class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

// Create a new instance of the Logger class and log messages to a file.  The logToFile function is called when the message event is emitted.  It writes the message to a log file.
const logger = new Logger();
const logFile = "./log.txt";

// logToFile function writes the message to a log file.
const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}${os.EOL}`;

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

// Add an event listener to the message event that calls the logToFile function.  This will write the message to a log file whenever the message event is emitted.
logger.on("message", logToFile);

// Log memory usage every 3 seconds.  The setInterval function is used to log the memory usage every 3 seconds.  It calculates the memory usage as a percentage of the total memory available on the system and logs it using the logger instance.
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log("Application started");
logger.log("Application event occurred");
