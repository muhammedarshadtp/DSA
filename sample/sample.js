// class Node {
//     constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(data) {
//       const newNode = new Node(data);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//     }
  
//     insertNode(node, newNode) {
//       if (newNode.data < node.data) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this.insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this.insertNode(node.right, newNode);
//         }
//       }
//     }
  
//     search(node, data) {
//       if (node === null) return null;
//       if (data < node.data) return this.search(node.left, data);
//       if (data > node.data) return this.search(node.right, data);
//       return node;
//     }
  
//     inOrderTraversal(node) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left);
//         console.log(node.data);
//         this.inOrderTraversal(node.right);
//       }
//     }
//     preOrderTraversal(node) {
//         if (node !== null) {
//           console.log(node.data);
//           this.preOrderTraversal(node.left);
//           this.preOrderTraversal(node.right);
//         }
//       }
    
//       getHeight(node) {
//         if (node === null) return -1;  
//         let leftHeight = this.getHeight(node.left);
//         let rightHeight = this.getHeight(node.right);
//         return Math.max(leftHeight, rightHeight) + 1;
//       }
    
     
    
      
//   }
  

//   const bst = new BinarySearchTree();
//   bst.insert(15);
//   bst.insert(25);
//   bst.insert(10);
//   bst.insert(7);
//   bst.insert(22);
//   bst.insert(17);
//   bst.insert(13);
  
//   bst.inOrderTraversal(bst.root);
  
//   console.log(bst.search(bst.root, 17));  
  
//   bst.preOrderTraversal(bst.root);
//   console.log('==============');  
//    // Example usage:
//    console.log(bst.getHeight(bst.root)); 

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(data) {
//       const newNode = new Node(data);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//     }
  
//     insertNode(node, newNode) {
//       if (newNode.data < node.data) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this.insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this.insertNode(node.right, newNode);
//         }
//       }
//     }
  
//     contains(data) {
//       return this.search(this.root, data) !== null;
//     }
  
//     search(node, data) {
//       if (node === null) return null;
//       if (data < node.data) return this.search(node.left, data);
//       if (data > node.data) return this.search(node.right, data);
//       return node;
//     }
  
//     delete(data) {
//       this.root = this.deleteNode(this.root, data);
//     }
  
//     deleteNode(node, data) {
//       if (node === null) return null;
  
//       if (data < node.data) {
//         node.left = this.deleteNode(node.left, data);
//         return node;
//       } else if (data > node.data) {
//         node.right = this.deleteNode(node.right, data);
//         return node;
//       } else {
//         if (node.left === null && node.right === null) {
//           return null;
//         } else if (node.left === null) {
//           return node.right;
//         } else if (node.right === null) {
//           return node.left;
//         } else {
//           const minRight = this.findMinNode(node.right);
//           node.data = minRight.data;
//           node.right = this.deleteNode(node.right, minRight.data);
//           return node;
//         }
//       }
//     }
  
//     findMinNode(node) {
//       if (node.left === null) return node;
//       return this.findMinNode(node.left);
//     }
  
//     inOrderTraversal(node) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left);
//         console.log(node.data);
//         this.inOrderTraversal(node.right);
//       }
//     }
  
//     preOrderTraversal(node) {
//       if (node !== null) {
//         console.log(node.data);
//         this.preOrderTraversal(node.left);
//         this.preOrderTraversal(node.right);
//       }
//     }
  
//     postOrderTraversal(node) {
//       if (node !== null) {
//         this.postOrderTraversal(node.left);
//         this.postOrderTraversal(node.right);
//         console.log(node.data);
//       }
//     }
//     findClosestValue(target) {
//         return this.findClosest(this.root, target, this.root.data);
//       }
      
//       findClosest(node, target, closest) {
//         if (node === null) return closest;
//         if (Math.abs(target - closest) > Math.abs(target - node.data)) {
//           closest = node.data;
//         }
//         if (target < node.data) {
//           return this.findClosest(node.left, target, closest);
//         } else if (target > node.data) {
//           return this.findClosest(node.right, target, closest);
//         } else {
//           return closest;
//         }
//       }
//       isValidBST(node, min = null, max = null) {
//         if (node === null) return true;
//         if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
//           return false;
//         }
//         return this.isValidBST(node.left, min, node.data) && this.isValidBST(node.right, node.data, max);
//       }
      
      
      
     
//   }
  
//   // Example usage:
//   const bst = new BinarySearchTree();
//   bst.insert(15);
//   bst.insert(25);
//   bst.insert(10);
//   bst.insert(7);
//   bst.insert(22);
//   bst.insert(17);
//   bst.insert(13);
// // Example usage:
// console.log("Is valid BST:", bst.isValidBST(bst.root)); 

  


// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = array;
//       for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1);
//     }
  
//     remove() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
//       return root;
//     }
  
//     heapifyUp(index) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
//         [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//         index = parentIndex;
//         parentIndex = Math.floor((index - 1) / 2);
//       }
//     }
  
//     heapifyDown(index) {
//       let smallest = index;
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
  
//       if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
//         smallest = leftChild;
//       }
//       if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
//         smallest = rightChild;
//       }
//       if (smallest !== index) {
//         [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//         this.heapifyDown(smallest);
//       }
//     }
    
  
//     getMin() {
//       return this.heap.length > 0 ? this.heap[0] : null;
//     }
//   }
  
  // Example usage:
//   const minHeap = new MinHeap();
//   minHeap.buildHeap([3, 9, 2, 1, 4, 5]);
//   console.log(minHeap.heap);  
//   minHeap.insert(0);
//   console.log(minHeap.heap);  
//   console.log("Removed:", minHeap.remove()); 
//   console.log(minHeap.heap); 









//   function heapSort(array, isMinHeap = true) {
//     const heap = isMinHeaps ? new MinHeaps() : new MaxHeaps();
//     heap.buildHeap(array);
    
//     const sortedArray = [];
//     while (heap.heap.length > 0) {
//       sortedArray.push(heap.remove());
//     }
//     return isMinHeaps ? sortedArray : sortedArray.reverse();
//   }
  
//   // Example usage:
//   const unsortedArray = [3, 9, 2, 1, 4, 5];
//   console.log("Heap Sort (Min Heap):", heapSort(unsortedArray));  // Output: [1, 2, 3, 4, 5, 9]
//   console.log("Heap Sort (Max Heap):", heapSort(unsortedArray, false));  // Output: [9, 5, 4, 3, 2, 1]


// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = array;
//       for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
  
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1);
//     }
  
//     remove() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
//       return root;
//     }
  
//     heapifyUp(index) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
//         [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//         index = parentIndex;
//         parentIndex = Math.floor((index - 1) / 2);
//       }
//     }
  
//     heapifyDown(index) {
//       let largest = index;
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
  
//       if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
//         largest = leftChild;
//       }
//       if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
//         largest = rightChild;
//       }
//       if (largest !== index) {
//         [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//         this.heapifyDown(largest);
//       }
//     }
  
//     getMax() {
//       return this.heap.length > 0 ? this.heap[0] : null;
//     }
//   }
  
//   // Example usage:
//   const maxHeap = new MaxHeap();
//   maxHeap.buildHeap([3, 9, 2, 1, 4, 5]);
//   console.log(maxHeap.heap);  // Output: [9, 4, 5, 1, 3, 2]
//   maxHeap.insert(10);
//   console.log(maxHeap.heap);  // Output: [10, 9, 5, 4, 3, 2, 1]
//   console.log("Removed:", maxHeap.remove());  // Output: Removed: 10
//   console.log(maxHeap.heap);  // Output: [9, 4, 5, 1, 3, 2]


// function heapify(array, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
  
//     if (left < n && array[left] > array[largest]) {
//       largest = left;
//     }
  
//     if (right < n && array[right] > array[largest]) {
//       largest = right;
//     }
  
//     if (largest !== i) {
//       [array[i], array[largest]] = [array[largest], array[i]];
//       heapify(array, n, largest);
//     }
//   }
  
//   function heapSort(array) {
//     let n = array.length;
  
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(array, n, i);
//     }
  
//     for (let i = n - 1; i >= 0; i--) {
//       [array[0], array[i]] = [array[i], array[0]];
//       heapify(array, i, 0);
//     }
  
//     return array;
//   }
  
//   // Example usage:
//   let array = [12, 11, 13, 5, 6, 7];
//   console.log("Sorted array:", heapSort(array));  // Output: [5, 6, 7, 11, 12, 13]

// function minHeapify(array, n, i) {
//     let smallest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
  
//     if (left < n && array[left] < array[smallest]) {
//       smallest = left;
//     }
  
//     if (right < n && array[right] < array[smallest]) {
//       smallest = right;
//     }
  
//     if (smallest !== i) {
//       [array[i], array[smallest]] = [array[smallest], array[i]];
//       minHeapify(array, n, smallest);
//     }
//   }
  
//   function heapSortUsingMinHeap(array) {
//     let n = array.length;
  
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       minHeapify(array, n, i);
//     }
  
//     for (let i = n - 1; i >= 0; i--) {
//       [array[0], array[i]] = [array[i], array[0]];
//       minHeapify(array, i, 0);
//     }
  
//     return array.reverse();
//   }
  
//   // Example usage:
//   let array2 = [12, 11, 13, 5, 6, 7];
//   console.log("Sorted array:", heapSortUsingMinHeap(array2));  // Output: [5, 6, 7, 11, 12, 13]
  
  
  
// function heapifyWithComparator(array, n, i, comparator) {
//     let target = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
  
//     if (left < n && comparator(array[left], array[target]) > 0) {
//       target = left;
//     }
  
//     if (right < n && comparator(array[right], array[target]) > 0) {
//       target = right;
//     }
  
//     if (target !== i) {
//       [array[i], array[target]] = [array[target], array[i]];
//       heapifyWithComparator(array, n, target, comparator);
//     }
//   }
  
//   function heapSortWithComparator(array, comparator) {
//     let n = array.length;
  
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapifyWithComparator(array, n, i, comparator);
//     }
  
//     for (let i = n - 1; i >= 0; i--) {
//       [array[0], array[i]] = [array[i], array[0]];
//       heapifyWithComparator(array, i, 0, comparator);
//     }
  
//     return array;
//   }
  
//   // Example usage:
//   let array3 = [12, 11, 13, 5, 6, 7];
//   const maxComparator = (a, b) => a - b;
//   console.log("Sorted array (Max Heap):", heapSortWithComparator(array3, maxComparator));  // Output: [5, 6, 7, 11, 12, 13]
  
//   const minComparator = (a, b) => b - a;
//   console.log("Sorted array (Min Heap):", heapSortWithComparator(array3, minComparator));  // Output: [13, 12, 11, 7, 6, 5]
  



// class TrieNode {
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }
  
//     search(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return node.isEndOfWord;
//     }
  
//     startsWith(prefix) {
//       let node = this.root;
//       for (let char of prefix) {
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return true;
//     }
//   }
  
//   // Example usage:
//   const trie = new Trie();
//   trie.insert("apple");
//   console.log(trie.search("apple"));
//   console.log(trie.search("app"));   
//   console.log(trie.startsWith("app")); 
  
  

// class TrieNode {
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }
  
//     getWordsWithPrefix(prefix) {
//       let node = this.root;
//       for (let char of prefix) {
//         if (!node.children[char]) {
//           return [];
//         }
//         node = node.children[char];
//       }
//       return this._getWordsFromNode(node, prefix);
//     }
  
//     _getWordsFromNode(node, prefix) {
//       let words = [];
//       if (node.isEndOfWord) {
//         words.push(prefix);
//       }
//       for (let char in node.children) {
//         words = words.concat(this._getWordsFromNode(node.children[char], prefix + char));
//       }
//       return words;
//     }
//   }
  
//   // Example usage:
//   const trie = new Trie();
//   trie.insert("apple");
//   trie.insert("app");
//   trie.insert("apricot");
//   trie.insert("banana");
  
//   console.log(trie.getWordsWithPrefix("ap"));  
//   console.log(trie.getWordsWithPrefix("ban")); 
//   console.log(trie.getWordsWithPrefix("b"));   
  




// class TrieNode {
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }
  
//     delete(word) {
//       this._delete(this.root, word, 0);
//     }
  
//     _delete(node, word, index) {
//       if (index === word.length) {
//         if (!node.isEndOfWord) {
//           return false;
//         }
//         node.isEndOfWord = false;
//         return Object.keys(node.children).length === 0;
//       }
  
//       const char = word[index];
//       if (!node.children[char]) {
//         return false;
//       }
  
//       const shouldDeleteCurrentNode = this._delete(node.children[char], word, index + 1);
  
//       if (shouldDeleteCurrentNode) {
//         delete node.children[char];
//         return Object.keys(node.children).length === 0;
//       }
  
//       return false;
//     }
//   }
  
//   // Example usage:
//   const trie = new Trie();
//   trie.insert("apple");
//   trie.insert("app");
//   console.log(trie.search("apple")); 
//   trie.delete("apple");
//   console.log(trie.search("apple"));
//   console.log(trie.search("app"));    

// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     printGraph() {
//       for (const vertex in this.adjacencyList) {
//         console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
//       }
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   graph.printGraph();
  
  
// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     dfs(start) {
//       const result = [];
//       const visited = new Set();
  
//       const dfsHelper = (vertex) => {
//         if (!vertex) return;
//         visited.add(vertex);
//         result.push(vertex);
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             dfsHelper(neighbor);
//           }
//         });
//       };
  
//       dfsHelper(start);
//       return result;
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   console.log(graph.dfs("A"));  



// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     bfs(start) {
//       const result = [];
//       const visited = new Set();
//       const queue = [start];
  
//       visited.add(start);
  
//       while (queue.length > 0) {
//         const vertex = queue.shift();
//         result.push(vertex);
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             visited.add(neighbor);
//             queue.push(neighbor);
//           }
//         });
//       }
  
//       return result;
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   console.log(graph.bfs("A")); 
  
  


// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     bfs(start) {
//       const result = [];
//       const visited = new Set();
//       const queue = [start];
  
//       visited.add(start);
  
//       while (queue.length > 0) {
//         const vertex = queue.shift();
//         result.push(vertex);
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             visited.add(neighbor);
//             queue.push(neighbor);
//           }
//         });
//       }
  
//       return result;
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   console.log(graph.bfs("A"));  // Output: [ 'A', 'B', 'C' ]
  



// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     dfs(start) {
//       const result = [];
//       const visited = new Set();
  
//       const dfsHelper = (vertex) => {
//         if (!vertex) return;
//         visited.add(vertex);
//         result.push(vertex);
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             dfsHelper(neighbor);
//           }
//         });
//       };
  
//       dfsHelper(start);
//       return result;
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   console.log(graph.dfs("A"));  // Output: [ 'A', 'B', 'C' ]
  








  class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
    class BinarySearchTree{
        constructor(){
            this.root=null
        }
        isempty(){
            return this.root==null
        }
        insert(value){
            const node = new Node(value)
            if(this.isempty()){
                this.root=node
            }else{
                this.insertNode(this.root,node)
            }
        }
        insertNode(root,node){
            if(node.value <root.value){
                if(root.left==null){
                    root.left=node
                }else{
                    this.insertNode(root.left,node)
                }
            }else{
                if(root.right==null){
                    root.right= node
                }else{

                    this.insertNode(root.right,node)
                }
            }
        } 
        findsecondlargest(){
            if(this.isempty() || (!this.root.left && ! this.root.right)){
                return null
            }
            let curr = this.root
            let prev = null
            while(curr.right !== null){
                prev=curr
                curr=curr.right
            }
            if(curr.left !== null){
                curr=curr.left
                while(curr.right !== null){
                    curr=curr.right
                }
                return curr.value
            }
            return prev.value
        }
    
}

const binary = new BinarySearchTree()

binary.insert(10)
binary.insert(12)
binary.insert(9)
binary.insert(1)

console.log('gfghfghjhg',binary.findsecondlargest());



// class maxHeap{
//     constructor(){
//         this.heap=[]
//     }
//     parentIndex(index){
//         return Math.floor((index-1)/2)
//     }
//     leftchild(index){
//         return (2*index)+1
//     }
//     rightchild(index){
//         return (2*index)+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapify()
//     }
//     heapify(){
//         let index = this.heap.length-1
//         while(index>0){
//             let parentIdx=this.parentIndex(index)
//             if(this.heap[parentIdx]<this.heap[index]){
//                 this.swap(parentIdx,index)
//                 index=parentIdx
//             }else{
//                 break
//             }
//         }
//     }
//     extractMax(){
//         if(this.heap.lenght){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         let max=this.heap(0)
//         this.heap(0)=this.heap.pop()
//         this.heapifyDown()
//         return max
//     }
//     heapifyDown(index){
//         let largest=index
//         let leftIdx=this.leftchild(index)
//         let rightIdx=this.rightchild(index)
//         if(leftIdx<this.heap.length && this.heap[leftIdx]>this.heap[largest]){
//             largest=leftIdx
//         }
//         if(rightIdx<this.heap.lenght && this.heap[rightIdx]>this.heap[largest]){
//             largest=rightIdx
//         }
//         if(largest !=null){
//             this.swap(index,largest)
//             this.heapifyDown(largest)
//         }
//     }


// }


// const max= new maxHeap()

// max.insert(78)
// max.insert(10)
// max.insert(7)
// max.insert(9)
// console.log(max.heap);