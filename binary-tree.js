'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
}


	insert(data) {
		var newNode = new Node();
		newNode.data = data;
		var currentNode = new Node();
		if (this.root === null){
			this.root = newNode;
		}
		else {
			currentNode = this.root;
			while (currentNode != null) {
				if (data < currentNode.data ){
					if (currentNode.left == null){
						currentNode.left = newNode;
						return;
					}
					else {
						currentNode = currentNode.left;
					}
				}
				else {
					if (currentNode.right == null){
						currentNode.right = newNode;
						return;
					}
					else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}

	contains(data) {
		var contain = false;
		var inOrder = function (node){
			if (node) {
				inOrder(node.left);
				inOrder(node.right);
				if (node.data == data) {
					contain = true;
				}
			}
			return contain;
		};
		return inOrder(this.root);
	}

	remove(data) {
		if (data == this.root.data && this.root.left == null && this.root.right == null){
			this.root = null;
			return;
		}
		var minimum = function(node){
			if (node.left == null){
				return node;
			}
			return minimum(node.left);
		};

		var deleteNode = function(node, data){
			if (node == null){
				return node;
			}
			if (data < node.data) {
				node.left = deleteNode (node.left, data);
			}
			else if (data > node.data){
				node.right = deleteNode(node.right, data);
			}
			else if(node.left != null && node.right != null){
				node.data = minimum(node.right).key;
				node.right = deleteNode(node.right, node.right.key);
			}
			else if (node.left != null){
				node = node.left;
			}
			else {
				node = node.right;
			}
			return node;
		};
		deleteNode(this.root, data);
	}

	size() {
		//var mas = 0;
		//	var inOrder = function (node){
		//		if (node){
		//			inOrder(node.left);
		//			inOrder(node.right);
		//			mas++;
		//		}
		//	return mas;
		//};
		//return inOrder(this.root);
		if (arguments[0] === undefined) {
			return this.size(this.root)
		}
		else if (arguments[0]=== null){
			return 0;
		}
		else {
			return 1 + this.size(arguments[0].right) + this.size(arguments[0].left);
		}
	}

	isEmpty() {
		return this.root == null;
	}
}
