# To-Do List Application

## Overview

This project is a command-line to-do list application built with Node.js. It allows users to add, list, and delete tasks, which are stored in a JSON file. The application demonstrates the use of the `fs` module for file operations, command-line argument parsing, and basic data manipulation in JavaScript.

## Features

### Add Task

- **Command:** `add`
- **Description:** Adds a new task to the to-do list.
- **Usage:** `node todo.js add "task name"`
- **Implementation:**
  - Reads the existing tasks from the JSON file.
  - Generates a new unique ID for the task.
  - Appends the new task to the list.
  - Writes the updated list back to the JSON file.
  - Logs a success message to the console.

### List Tasks

- **Command:** `list`
- **Description:** Lists all tasks in the to-do list.
- **Usage:** `node todo.js list`
- **Implementation:**
  - Reads the tasks from the JSON file.
  - Logs the tasks to the console.

### Delete Task

- **Command:** `delete`
- **Description:** Deletes a task from the to-do list by task name.
- **Usage:** `node todo.js delete "task name"`
- **Implementation:**
  - Reads the tasks from the JSON file.
  - Finds the task with the specified name.
  - Filters out the task with the matching ID.
  - Writes the updated list back to the JSON file.
  - Logs a success or failure message to the console.

## Learning Points

### File System Operations

- **Reading Files:** Using `fs.readFileSync` to read the contents of a file.
- **Writing Files:** Using `fs.writeFileSync` to write data to a file.

### JSON Manipulation

- **Parsing JSON:** Using `JSON.parse` to convert a JSON string into a JavaScript object.
- **Stringifying JSON:** Using `JSON.stringify` to convert a JavaScript object into a JSON string.

### Command-Line Arguments

- **Accessing Arguments:** Using `process.argv` to access command-line arguments passed to the Node.js script.

### Data Manipulation

- **Array Methods:** Using array methods like `map`, `find`, and `filter` to manipulate task data.

### Debugging

- **Logging:** Using `console.log` to output debugging information to the console.

## Usage

Run the application from the command line using Node.js with the following commands:

### Add a Task

```sh
node todo.js add "task name"
```

**Example:**

```sh
node todo.js add "buy milk"

```

### List All Tasks

```sh
node todo.js list
```

### Delete a Task

```sh
node todo.js delete "task name"
```

**Example:**

```sh
node todo.js delete "buy milk"
```
