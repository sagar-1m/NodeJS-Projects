# Event Logger

This project demonstrates how to use the `EventEmitter` class to create a custom event emitter that logs messages to a file. It logs messages to a file whenever the `message` event is emitted. It also logs the memory usage of the system every 3 seconds. The log file is created in the current directory and is named `log.txt`.

## Features

- **Custom Event Emitter**: Utilizes Node.js `EventEmitter` class to create custom events.
- **File Logging**: Logs messages to a file named `log.txt`.
- **Memory Usage Monitoring**: Logs system memory usage every 3 seconds.

## Learning Objectives

- Understand how to extend the `EventEmitter` class to create custom events.
- Learn how to handle file operations using the `fs` module.
- Gain knowledge on how to retrieve system information using the `os` module.
- Implement periodic tasks using `setInterval`.

## Implementation

### Logger Class

The `Logger` class extends the `EventEmitter` class to add event-driven functionality. The `log` method emits a `message` event with the message as the payload.

```javascript
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}
```

### Log to File

A new instance of the `Logger` class is created, and messages are logged to a file. The `logToFile` function is called when the `message` event is emitted. It writes the message to a log file.

```javascript
const fs = require("fs");
const os = require("os");

const logger = new Logger();
const logFile = "./log.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}${os.EOL}`;

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

logger.on("message", logToFile);
```

### Memory Usage Logging

The memory usage is logged every 3 seconds. The `setInterval` function is used to log the memory usage every 3 seconds. It calculates the memory usage as a percentage of the total memory available on the system and logs it using the `logger` instance.

```javascript
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Memory usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log("Application started");
logger.log("Application event occurred");
```

## Usage

1. Ensure you have Node.js installed on your system.
2. Save the code in a file named `logger.js`.
3. Run the script using the command:

```sh
node logger.js
```

4. The log messages and memory usage will be written to `log.txt` in the current directory.

## Example Output

The `log.txt` file will contain entries similar to the following:

```
2023-10-01T12:00:00.000Z - Application started
2023-10-01T12:00:00.000Z - Application event occurred
2023-10-01T12:00:03.000Z - Memory usage: 45.67%
2023-10-01T12:00:06.000Z - Memory usage: 45.89%
...
```
