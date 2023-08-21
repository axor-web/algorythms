function reverseList(list) {
  let currentNodes = [list, list.nextList];

  while (currentNodes[1]) {
    let nextNode = currentNodes[1].next;

    currentNodes[0].next = currentNodes[1];
    currentNodes[1] = nextNode;
  }

  return currentNodes[0];
}

const mockList = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};

console.log(reverseList(mockList));