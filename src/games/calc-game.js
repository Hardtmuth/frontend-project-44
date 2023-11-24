import getRandomInt from './tools/tools.js';

const getRightAnswer = (leftOperand, action, rightOperand) => {
  switch (action) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      return null;
  }
};

const ruleMessage = 'What is the result of the expression?';

const brainCalc = () => {
  const actions = ['+', '-', '*'];
  const action = actions[Math.floor(Math.random() * actions.length)];

  const leftOperand = getRandomInt();
  const rightOperand = getRandomInt();

  const question = `Question: ${leftOperand} ${action} ${rightOperand}`;
  const rightAnswer = getRightAnswer(leftOperand, action, rightOperand);

  return [question, rightAnswer];
};

export { ruleMessage, brainCalc };
