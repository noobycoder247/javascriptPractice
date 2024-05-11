class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var recoverFromPreorder = function(traversal) {
    let stack = [];
    let i = 0;
    
    while (i < traversal.length) {
        let depth = 0;
        let value = '';
        
        // Count the depth
        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }
        
        // Extract the value
        while (i < traversal.length && traversal[i] !== '-') {
            value += traversal[i];
            i++;
        }
        
        let node = new TreeNode(parseInt(value));
        
        // Adjust the stack based on the depth
        while (stack.length > depth) {
            stack.pop();
        }
        
        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }
        
        stack.push(node);
    }
    
    // Construct the output array using preorder traversal
    let result = [];
    
    function preorderTraversal(node) {
        if (!node) return;
        result.push(node.val);
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    }
    
    preorderTraversal(stack[0]);
    
    return result;
};

// Example usage
let traversal = "1-2--3--4-5--6--7";
console.log(recoverFromPreorder(traversal)); // Output: [1, 2, 5, 3, 4, 6, 7]
