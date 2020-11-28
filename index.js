var readlineSync = require("readline-sync")

console.log("Namaste ji! You have asked a lot about me in family weddings and meetup. So let me see what all you know about me.");

var Name = readlineSync.question("Enter your name here: ");
console.log("Namaste! ",Name,"ji");

var score = 0;

function hello(question,answer)
{
  var getanswer = readlineSync.question(question); //or answer
  if(getanswer===answer)
  {
    score++;
    console.log("Absolutely correct.");
  }
  else
  {
    console.log("You don't remember much about me ;)");
  }
  console.log("Your current score is ",score);
  console.log("-----------------------------------")
}
var guess = [{
  question : "What is my height? ",
  answer: "5.11"
},
{
  question: "In which college do I study? ",
  answer: "JIMS"
},
{
  question : "What am I pursuing? ",
  answer: "BCA"
},
{
  question : "When is my birthday (Enter in dd-mm-yyyy format)? ",
  answer: "01-01-2000"
},
{
  question : "What is my weight (in kg)? ",
  answer: "70"
}];

//loop for running that function
for( var i=0;i<guess.length;i++ )
{
  hello(guess[i].question,guess[i].answer)
}

console.log("Your score is ",score, "out of", guess.length);