// PrintKthLevel nodes only for a binary tree.



// JavaScript implementation to print the
// nodes of Kth Level without duplicates

// Structure of Binary Tree node
class node {

	constructor()
	{
		this.data = 0;
		this.left = null;
		this.right = null;
	}
};

// Function to create new
// Binary Tree node
function newNode(data)
{
	var temp = new node();
	temp.data = data;
	temp.left = null;
	temp.right = null;
	return temp;
}

// Function to print the nodes
// of Kth Level without duplicates
function nodesAtKthLevel(root, k){

	// Condition to check if current
	// node is None
	if (root == null)
		return;
		
	// Create Queue
	var que = [];

	// Enqueue the root node
	que.push(root);

	// Create a set
	var s = new Set();

	// Level to track
	// the current level
	var level = 0;
	var flag = 0;

	// Iterate the queue till its not empty
	while (que.length != 0) {

		// Calculate the number of nodes
		// in the current level
		var size = que.length;

		// Process each node of the current
		// level and enqueue their left
		// and right child to the queue
		while (size-- > 0) {
			var ptr = que[0];
			que.shift();

			// If the current level matches the
			// required level then add into set
			if (level == k) {

				// Flag initialized to 1
				flag = 1;

				// Inserting node data in set
				s.add(ptr.data);
			}
			else {

				// Traverse to the left child
				if (ptr.left != null)
					que.push(ptr.left);

				// Traverse to the right child
				if (ptr.right != null)
					que.push(ptr.right);
			}
		}

		// Increment the variable level
		// by 1 for each level
		level++;

		// Break out from the loop
		// if the Kth Level is reached
		if (flag == 1)
			break;
	}
	for(var it of s) {
		console.log(it+ " ");
	}
	
}

// Driver code
var root = new node();

// Tree Construction
root = newNode(60);
root.left = newNode(20);
root.right = newNode(30);
root.left.left = newNode(80);
root.left.right = newNode(10);
root.right.left = newNode(40);
var level = 1;
nodesAtKthLevel(root, level);


