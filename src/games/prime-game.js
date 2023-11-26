import getRandomInt from './tools/tools.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (int) => {
  for (let i = 2; i < int / 2; i += 1) {
    if (int % i === 0) return false;
  }
  return int !== 1;
};

const brainPrime = () => {
  const questionInt = getRandomInt(2, 160);
  const rightAnswer = isPrime(questionInt) ? 'yes' : 'no';

  return [questionInt, rightAnswer];
};

export { ruleMessage, brainPrime };
