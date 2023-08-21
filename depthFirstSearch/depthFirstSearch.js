function depthFirstSearch(tree) {
  const answerArray = [];

  function depthFirstSearchInner(tree) {
    answerArray.push(tree.value);
    if ('left' in tree) {
      depthFirstSearchInner(tree.left);
      depthFirstSearchInner(tree.right);
    }
  }

  depthFirstSearchInner(tree);

  return answerArray;
}

const mockTree = {
  value: 5,
  left: {
    value: 1,
    left: {
      value: 3
    },
    right: {
      value: 0
    }
  },
  right: {
    value: 5
  }
}

console.log(depthFirstSearch(mockTree));