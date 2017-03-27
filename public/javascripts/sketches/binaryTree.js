var tree;

function setup() {
    noCanvas();
    tree = new Tree();
    for (var i = 0; i < 10; i++) {
        tree.addValue(floor(random(0, 100)));
    }
    tree.traverse();
    console.log(tree);
}


function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function() {
  this.root.visit();
}

Tree.prototype.search = function(val) {
  var found = this.root.search(val);
  return found;
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
}

Tree.prototype.search = function(val) {
    return this.root.search(val);
}

Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n
        } else {
            this.left.addNode(n);
        }
    } else 
    if (n.value > this.value) {
        if (this.right == null) { 
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
}

Node.prototype.search = function(val) {
    if (this.value == val) {
        return this;
    } else if (val < this.value && this.left != null) {
        return this.left.search(val)
    } else if (val > this.value && this.right != null) {
        return this.left.search(val)        
    }
    return null;
}

Node.prototype.visit = function() {
    if (this.left != null) {
        this.left.visit();
    }
    if (this.right != null) {
        this.right.visit();
    }    
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}