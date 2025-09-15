// node class

class Node {
  constructor(data) {
    this.data = data; // The value/data the node holds - to be defined later
    this.next = null; // A reference (pointer) to the next node in the list
  }
}

/* 

What is a Node?
- A Node is like a box holding some data and a pointer to the next box.
- The data stores the node’s value.
- The next stores the address of the next node (or null if it’s the last).

*/


// The linked list class → manages list of nodes
class LinkedList {
  constructor() {
    this.head = null; // Start of the list (null means the list is empty)
    this.size = 0; // Number of nodes (blocks) in the list (chain)
  }


  // append: add a new node to the end of the list
  append(data) {
    const newNode = new Node(data); // Create a new node with the given data

    // if the list is empty, the new node becomes the head
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head; // Start at the head

      // Traverse to the end of the list
      while (current.next) {
        current = current.next
      }

      // Set the next property of the last node to the new node
      current.next = newNode;
    }

    // Increase the size of the list
    this.size++;
  } 



  // Prepend: add a new node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data); // Create the new Node
    newNode.next = this.head; // Point it to the current head
    this.head = newNode; // Make it the new head
    this.size++;
  }




  // Delete remove the first node that contains the given data
  delete(data) {

    // If the list is empty, do nothing
    if (!this.head) {
      return;
    }

    // If the head node contains the data, remove it
    if (this.head.data === data) {
      this.head = this.head.next; // Move the head to the next node
      this.size--;
      return;
    }

    // Otherwise, search for the node to delete
    let current = this.head;
    let prev = null;

    // traverse the list until we find the data
    while (current && current.data !== data) {
      prev = current; // Keep track of the previous node - remember where you are in the list
      current = current.next; // Move to the next node
    }

    // If found, unlink it by updating the previous node's next value
    if (current) {
      prev.next = current.next;
      this.size--;
    }
  }



  // Find: search for a node containing specific data
  find(data) {
    let current = this.head;

    // traverse the list
    while (current) {
      if (current.data === data) {
        return current // found it, return the node
      }
      current = current.next;
    }

    // Not found
    return null
  }
}




// EXAMPLE:
// create a new empty linked list
const list = new LinkedList();

// add a node at the end
list.append("Tim");
list.append("Mary");
list.append("Phil");
list.append("Marta");
list.append("Ami");
list.append("Cass");

// adding a node at the start
list.prepend("Shokrullah");

console.log(list.find("Mary"))

list.delete("Shokrullah");

console.log(list.head);


console.log(list);







