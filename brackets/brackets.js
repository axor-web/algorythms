function isBracketsValid(bracketsString) {
  const stack = [];
  for (let char of bracketsString) {
    if ('([{'.includes(char)) {
      stack.push(char);
    }
    else {
      const lastOpenBracket = stack.pop();

      if (lastOpenBracket === '(' && char !== ')') { return false; }
      if (lastOpenBracket === '[' && char !== ']') { return false; }
      if (lastOpenBracket === '{' && char !== '}') { return false; }
    }
  }

  return !stack.length;
}

const mockBrackets = ['((((]]]]', '[({})]()', '[((]))'];

for (let brackets of mockBrackets) {
  console.log(brackets, isBracketsValid(brackets));
}