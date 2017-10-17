'use strict';

var user = prompt('Greetings aspiring Historian of all things Dean. May I have your name?');
console.log('Users name:', user);

alert('Welcome ' + user + ' let us begin uncovering the secrets of Dean. You will be asked a series of Yes or No questions.');

var birth = prompt('Was Dean was delivered in a barn by a nearby farmer?');
var birthLower = birth.toLowerCase();
console.log('Birth answer:', birthLower);

if (birthLower === 'yes' || birthLower === 'y') {
  alert('No ' + user + ', it\'s the 21st Century. He was delivered in a hospital by a doctor.');
} else {
  alert('CORRECT! Off to a good start ' + user + '.');
}

var grandma = prompt('Is Dean\'s best friend his grandmother?');
var grandmaLower = grandma.toLowerCase();
console.log('Grandma rules:', grandmaLower);

if (grandmaLower === 'yes' || grandmaLower === 'y') {
  alert('CORRECT! Of course he is, she\'s the best!');
} else {
  alert('FALSE! What\'s the matter ' + user + '? Old people can\'t be cool too?');
}

var dogs = prompt('Does Dean love dogs?');
var dogsLower = dogs.toLowerCase();
console.log('Dog lover:', dogsLower);

if (dogsLower === 'yes' || dogsLower === 'y') {
  alert('CORRECT! Of course you knew that he does ' + user + '! Anybody who knows Dean knows that his own dog Winnie is the most important thing in the world to him!');
} else {
  alert('FALSE! Wow, ' + user + '. What does Dean look like to you? A cat person?');
}

var travel = prompt('Has Dean driven across the United States of America?');
var travelLower = travel.toLowerCase();
console.log('Travel answer:', travelLower);

if (travelLower === 'yes' || travelLower === 'y') {
  alert('DING DING DING! He drove from Florida to Seattle with his co-captain Winnie!');
} else {
  alert('FALSE! He drove to Seattle from Florida to attend CodeFellows and learn how to write this very code.');
}

var skate = prompt('Is Dean an accomplished skater, surpassing even the great Brian Nations?');
var skateLower = skate.toLowerCase();
console.log('Skater:', skateLower);

if (skateLower === 'yes' || skateLower === 'y') {
  alert('FALSE! While the praise is welcome, no he is not at all. Brian is the superior skater. Dean is merely his student trying to butter him up with questions like this.');
} else {
  alert('CORRECT! Dean could never surpass the great Brian Nations in skating, ever. Don\'t ask him to try... it\'s bad.');
}
