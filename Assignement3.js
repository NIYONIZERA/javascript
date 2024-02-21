// Define a variable called userName that is set to an empty string.
let userName='Benigne';
// Ternary expression to decide what to do if the user enters a name or not.
userName  ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
// Create a variable named userQuestion with the user's question.
const userQuestion='What is my career';
console.log(`${userName !== '' ? userName + ' asked: ' : ''} ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall='';
switch(randomNumber){
    
case 0:
  eightBall='It is certain';
  break;
  case 1:
  eightBall= 'It is decidedly so';
  break;
  case 2:
   eightBall='Reply hazy try again';
  break;
  case 3:
   eightBall='Cannot predict now';
  break;
  case 4:
   eightBall='Do not count on it';
  break;
  case 5:
   eightBall='My sources say no';
  break;
  case 6:
   eightBall='Outlook not so good';
  break;
  case 7:
   eightBall='Signs point to yes';
   break;
}
console.log(eightBall);
