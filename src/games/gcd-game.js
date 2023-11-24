import getRandomInt from './tools/tools.js';

const getRightAnswer = (leftOperand, rightOperand) => {
  if (!rightOperand) {
    return leftOperand;
  }

  return getRightAnswer(rightOperand, leftOperand % rightOperand);
};

const ruleMessage = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const leftOperand = getRandomInt();
  const rightOperand = getRandomInt();

  const question = `Question: ${leftOperand} ${rightOperand}`;
  const rightAnswer = getRightAnswer(leftOperand, rightOperand);

  return [question, rightAnswer];
};

export { ruleMessage, brainGcd };
