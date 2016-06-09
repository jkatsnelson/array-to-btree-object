var _ = require('lodash');

var testTree = arrayToBTreeObject([5,6,4,3,2,1], function (item, treeItem) {
  return item > treeItem;
});

module.exports = arrayToBTreeObject;

function arrayToBTreeObject (list, compareFn) {
  
  var treeFn = function (tree, item) {
    return addToTree(tree, item, compareFn);
  };

  return _.reduce(list, treeFn, {});
}

function addToTree (tree, item, compareFn) {
  if (!tree.data) {
    tree.data = item;
    return tree;
  }

  if (compareFn(tree.data, item)) {
    if (tree.left) {
      addToTree(tree.left, item, compareFn)
    } else {
      tree.left = {
        data: item
      }
    }
  } else {
    if (tree.right) {
      addToTree(tree.right, item, compareFn)
    } else {
      tree.right = {
        data: item
      }
    }
  }
  return tree;
}
