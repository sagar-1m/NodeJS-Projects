// Purpose: A simple command-line to-do list application that allows users to add, list, and delete tasks.  The tasks are stored in a JSON file.  The application uses the fs module to read and write files in the file system.  The application also exports the functions to make them accessible to other modules.  The application is run from the command line using node and takes the following commands as arguments: add, list, or delete.  The add command is followed by the task to be added.  The delete command is followed by the taskname of the task to be deleted. The list command lists all the tasks in the to-do list. The application logs messages to the console to indicate the success or failure of the operations.

const fs = require("fs"); // Import the fs module to read and write files in the file system
const filePath = "./tasks.json"; // Define the path to the file where the tasks will be stored

// Function to read the tasks from the file and return them as an array of objects
function readTasks() {
  try {
    const tasks = fs.readFileSync(filePath); // Read the file
    return JSON.parse(tasks); // Parse the content of the file to convert it to an array of objects
  } catch (error) {
    return []; // If the file is empty or doesn't exist, return an empty array
  }
}

// Function to write the tasks to the file
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks)); // Write the tasks to the file after converting them to a string
}

// Function to add a new task to the list of tasks
function addTask(task) {
  const tasks = readTasks(); // Read the tasks from the file
  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1; // Generate a new ID based on the highest existing ID
  tasks.push({ id: newId, task: task }); // Add the new task to the list of tasks
  writeTasks(tasks); // Write the updated list of tasks to the file
  console.log("Task added successfully!"); // Log a message to the console
}

// Function to list all the tasks
function listTasks() {
  const tasks = readTasks(); // Read the tasks from the file
  console.log("Tasks:", tasks); // Log the tasks to the console
}

// Function to delete a task from the list of tasks
function deleteTask(taskName) {
  console.log(`Attempting to delete task with name: ${taskName}`); // Debugging statement
  const tasks = readTasks(); // Read the tasks from the file
  console.log(`Tasks before deletion: ${JSON.stringify(tasks)}`); // Debugging statement
  const taskToDelete = tasks.find((task) => task.task === taskName); // Find the task with the specified name
  if (taskToDelete) {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id); // Filter out the task with the specified ID
    console.log(`Tasks after deletion: ${JSON.stringify(updatedTasks)}`); // Debugging statement
    writeTasks(updatedTasks); // Write the updated list of tasks to the file
    console.log("Task deleted successfully!"); // Log a message to the console
  } else {
    console.log("Task not found!"); // Log a message if the task is not found
  }
}

const command = process.argv[2]; // Get the command from the command line arguments
const taskName = process.argv[3]; // Get the task from the command line arguments

// Check the command and call the appropriate function
if (command === "add") {
  addTask(taskName);
} else if (command === "list") {
  listTasks();
} else if (command === "delete") {
  deleteTask(taskName);
} else {
  console.log("Invalid command. Please use add, list, or delete."); // Log a message to the console
}

// Export the functions to make them accessible to other modules
module.exports = { addTask, listTasks, deleteTask };
