const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(data) {
    this.rootValue = data ? new Node(data) : null;
  }
  root() {
    return this.rootValue
  }

  add(data) {
    let newNode = new Node(data);
    const insertNode = (node, newNode)=> {
      if (newNode.data < node.data) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              insertNode(node.right, newNode);
          }
      }
    }
    if (this.rootValue === null) {
        this.rootValue = newNode;
    } else {
        insertNode(this.rootValue, newNode);
    }
  }

  find(findData) {
    
    const findNode = (node, findData)=> {
      if (node === null) {
        return null
      }
      if (findData === node.data) {
        return node
      }else{
        if (findData < node.data) {
            return findNode(node.left, findData);
          }
        else {
            return findNode(node.right, findData);
        }
      }
      
    }
    
      return findNode(this.rootValue, findData);
 
  }

  has(data) {
    const tmp = this.find(data)
    return (tmp === null ? false: true);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};