let action = "ask";
let menu = ["add", "list", "delete", "quit"];
let todos = [];

/**
 * Get user input for their menu selection
 * Returns valid menu selection
 */
function ask() {
  let reply = prompt("What would you like to do?");
  while (!menu.includes(reply.toLowerCase())) {
    reply = prompt(
      "What would you like to do? Options: add, list, delete, quit"
    );
  }
  return reply;
}

/**
 * Ends the user requested task by printing *s and returning to the main menu
 */
function endTask() {
  console.log("*********");
  action = "ask";
}

/**
 * Get item and add it to the to-do list
 */
function add() {
  let reply = prompt("What would you like to add?");

  // add item to the to-do list
  todos.push(reply);

  // confirmation message
  console.log(`${reply} added to list`);
}

/**
 * List out all items in the to-do list
 * If there are no items, tell the user the list is empty
 */
function list() {
  if (todos.length === 0) {
    console.log("To-do list is empty");
  } else {
    // display all items and their position in the to-do list
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
  }
}

/**
 * Asks user to select the item they would like to delete
 */
function deleteItem() {
  let reply = prompt(
    `Enter the index of the item you wish to delete. Options: 0-${
      todos.length - 1
    }`
  );
  let parsedReply = parseInt(reply);

  // if it's an invalid index, tell the user there is nothing there to delete
  if (parsedReply === NaN || parsedReply >= todos.length) {
    console.log(`Cannot delete index of: ${parsedReply}`);
  } else {
    // remove item from to-do list
    let removedItem = todos.splice(parsedReply, 1);
    // provide confirmation that it has been removed
    console.log(`${removedItem} removed`);
  }
}

// runs the program
while (action !== "quit") {
  switch (action) {
    case "add":
      // add a to-do to the list
      add();
      endTask();
      break;
    case "list":
      // list all to-dos
      list();
      endTask();
      break;
    case "delete":
      // remove specific to-do
      deleteItem();
      endTask();
      break;
    case "quit":
      // quit the app
      console.log("Quitting program");
      break;
    case "ask":
    // ask what they would like to do
    default:
      // same as ask
      ask();
  }
}
