const startGame = (gameRules, gameQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRules); // Сообщение с правилами запускаемой игры

  const questionsCount = 3; // Количество вопросов в игре
  for (let i = 0; i < questionsCount; i += 1) {
    // Вопрос из игры
    const answer = readlineSync.question('Your answer: '); // Запрос ответа у пользователя

    // Проверка ответа пользователя с верным ответом
    if (true) {
      console.log('Correct!'); // Сообщение при правильном ответе
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 
      '${correct}'.\nLet's try again, ${name}!`);
      return; // Сообщение при неправльном ответе и выход из игры
    }
  }
  console.log(`Congratulations, ${name}!`); // Сообщение при успешном прохождении игры
}
