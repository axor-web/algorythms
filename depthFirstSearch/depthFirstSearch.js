function depthFirstSearch(tree) {
  const answerArray = [];

  const stack = [tree];

  while (stack.length) {
    const currentTree = stack.pop();
    if ('children' in currentTree) {
      for (let index = currentTree.children.length - 1; index >= 0; index--) {
        answerArray
      }
    }
  }

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