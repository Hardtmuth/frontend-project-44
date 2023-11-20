import readlineSync from 'readline-sync';

const namedGreeting = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

export default namedGreeting;
