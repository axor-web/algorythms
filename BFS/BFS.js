function bfs(tree) {
  const answerArray = [];

  let queue = [tree];

  while (queue.length) {
    const queueCopy = [...queue];
    queue = [];

    for (let tree of queueCopy) {
      answerArray.push(tree.value);
      
      if ('left' in tree) {
        queue.push(tree.left);
        queue.push(tree.right);
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

console.log(bfs(mockTree));