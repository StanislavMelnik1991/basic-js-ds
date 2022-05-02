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

  min() {
    const minNode = (node)=> {
      if (node === null) {
        return null
      }else {
        if (node.left !== null) {
          return minNode(node.left)
        }else { return node.data }
        
      }
    }
    return minNode(this.rootValue);
  }

  max() {
    const maxNode = (node)=> {
      if (node === null) {
        return null
      }else {
        if (node.right !== null) {
          return maxNode(node.right)
        }else { return node.data }
        
      }
    }
    return maxNode(this.rootValue);
  }

  remove(data) {
    const minNode = (node)=> {
      // если слева от узла ноль тогда это должен быть минимальный узел
      if (node.left === null)
          return node;
      else
          return minNode(node.left);
    }

    const removeNode = (node, data)=> {
      if (node === null) {
          return null;
      } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
      } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
      } else {
          if (node.left === null && node.right === null) {
              node = null;
              return node;
          }
          if (node.left === null) {
              node = node.right;
              return node;
          } else if(node.right === null) {
              node = node.left;
              return node;
          }
          let newNode = minNode(node.right);
          node.data = newNode.data;
          node.right = removeNode(node.right, newNode.data);
          return node;
      }
  }
  
  this.rootValue = removeNode(this.rootValue, data)
  }
  
}

module.exports = {
  BinarySearchTree
};