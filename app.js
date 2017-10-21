
'use strict';

var score = 0;
// //opening question asking for name
var user = prompt('Greetings aspiring Historian of all things Dean. May I have your name?');
console.log('Users name:', user);
console.log('Score:', score);

alert('Welcome ' + user + '! Let us begin uncovering the secrets of Dean. You will be asked a series of Yes or No questions at first.');

var birth = ('Was Dean delivered in a barn by a nearby farmer?');
var dogs = ('Does Dean love dogs?');
var travel = ('Has Dean driven across the United States of America?');
var grandma = ('Is Dean\'s best friend his grandmother?');
var skate = ('Is Dean an accomplished skater, surpassing even the great Brian Nations?');
var birthRight = ('CORRECT! Off to a good start ' + user + '.');
var birthWrong = ('No ' + user + ', it\'s the 21st Century. He was delivered in a hospital by a doctor.');
var dogsRight = ('CORRECT! Of course you knew that he does ' + user + '! Anybody who knows Dean knows that his own dog Winnie is the most important thing in the world to him!');
var dogsWrong = ('FALSE! Wow, ' + user + '. What does Dean look like to you? A cat person?');
var travelRight = ('DING DING DING! He drove from Florida to Seattle with his co-captain Winnie!');
var travelWrong = ('FALSE! He drove to Seattle from Florida to attend CodeFellows and learn how to write this very code.');
var grandmaRight = ('CORRECT! Of course he is, she\'s the best!');
var grandmaWrong = ('FALSE! What\'s the matter ' + user + '? Old people can\'t be cool too?');
var skateRight = ('CORRECT! Dean could never surpass the great Brian Nations in skating, ever. Don\'t ask him to try... it\'s bad.');
var skateWrong = ('FALSE! While the praise is welcome, no he is not at all. Brian is the superior skater. Dean is merely his student trying to butter him up with questions like this.');


var questions = [birth, dogs, travel, grandma, skate];
var answers = ['no', 'yes', 'yes', 'yes', 'no'];
var rightAlerts = [birthRight, dogsRight, travelRight, grandmaRight, skateRight];
var wrongAlerts = [birthWrong, dogsWrong, travelWrong, grandmaWrong, skateWrong];

function yesNo(item) {
  var ask = prompt(questions[item]);
  var askLower = ask.toLowerCase();
  console.log('Answer:', askLower);
  console.log('Score:', score);

  if (askLower === answers[i] || askLower === answers[i][0]) {
    alert(rightAlerts[i]);
    score++;
  } else {
    alert(wrongAlerts[i]);
  }
}

for (var i = 0; i < questions.length; i++) {
  console.log(questions[i]);
  yesNo([i]);
}

// //favorite number guessing game
var number;
var numGuesses = 0;

while (numGuesses < 4) {
  number = parseInt(prompt('Tell me ' + user + ' what is Dean\'s favorite number?'));

  if (number < 13) {
    alert('Not quite there yet ' + user + ' try something a little higher');
    numGuesses++;
  } else if (number > 13) {
    alert('Ooh a little too high with that one ' + user + ' try something a little lower');
    numGuesses++;
  } else if (isNaN(number)) {
    alert('Come on now ' + user + ' I asked for a NUMBER!');
  } else {
    numGuesses = 4;
    alert('BINGO! Excellent guess ' + user + '!');
    score++;
    console.log('Score:', score);
  }
}

console.log('Favorite Number Guesses:', numGuesses);

//seventh question with multiple answers
var interests = ['music', 'dogs', 'food', 'gaming', 'roadtrips', 'fitness'];
var answer;
var intGuesses = 0;
var flag;


while (intGuesses < 6) {
  answer = prompt('What do you think some of Dean\'s interests are ' + user + ' ?');
  intGuesses++;
  for (var j = 0; j < interests.length; j++) {
    console.log('Interests Guesses:', intGuesses);
    console.log('answer:', answer);
    console.log(interests[j]);
    flag = false;

    if (answer.toLowerCase() === interests[j]) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert('Correct ' + user + '! His interests include: Music, Dogs, Food, Gaming, Roadtrips, and Fitness!');
    intGuesses = 7;
    score++;
    console.log('Score:', score);
  } else {
    alert('Does that really strike you as something Dean would be interested in ' + user + '?');
    console.log('Score:', score);
  }
}

var scoreAlert = alert('Congratulations ' + user + ' you answered ' + score + ' out of 7 correctly!');
