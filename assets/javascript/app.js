// GLOBAL VARIABLES
// ---------------------------------------------------------------------------
// Arrays and Variables for holding data
var trivia = [
{	question: "What is the name of Ross & Rachel's daughter?",
	answers1: {
		wrong1: "Ella",
		wrong2: "Janine",
		right: "Emma",
		wrong3: "Phoebe"
	}
},{	question: "Who did Gunther have a crush on?",
	answers2: {
		wrong1: "Monica",
		wrong2: "Joey",
		wrong3: "Phoebe",
		right: "Rachel"
	}
}/*,{	question: "q3",
	answers: {
		wrong1:
		wrong2:
		right:
		wrong3:
	}
},{	question: "q4",
	answers: {
		wrong1:
		wrong2:
		right:
		wrong3:
	}}*/
];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 45;
var intervalId;

//FUNCTIONS (Reusable blocks of code that I will call upon when needed)
// ---------------------------------------------------------------------------
 //  The run function sets an interval
 //  that runs the decrement function once a second.
function gameTimer() {
	intervalId = setInterval(decrement, 1000);   
};
//  The decrement function.
function decrement() {
      //  Decrease number by one.
      timer--;
      //  Show the number in the #show-number tag.
      $("#show-timer").html('Time remaining: ' + timer);
      //  Once number hits zero...
      if (timer === 0) {
        //  ...run the stop function.
        stop();
        //  TO DO: Alert the user that time is up.
        
      }
    }
 //  The stop function
function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }; 

function startGame() {

	$(".heading").html("Friends Trivia Test");
	var timerDiv = $("<div id='show-timer'>");
	$(".jumbotron").append(timerDiv);
	// console.log(timer);

	// Looping through the array of trivia
    for (var i = 0; i < trivia.length; i++) {
		// console.log("Play: " + trivia[i].question);
		var q = $("<h2 class='question-line'>")
		q.text(trivia[i].question);
		$(".jumbotron").append(q);
		
		var a00 = $("<input type='radio' name='rchoice0' value='" + trivia[i].answers1.wrong1 + "' id='choice0'>");
		var b00 = $("<label name='lblChoices' for='choice0' value=''>");
		
		b00.text(trivia[i].answers1.wrong1);
		$(".jumbotron").append(a00);
		$(".jumbotron").append(b00);

		var a01 = $("<input type='radio' name='rchoice0' value='" + trivia[i].answers1.wrong2 + "' id='choice1'>");
		var b01 = $("<label name='lblChoices' for='choice1' value=''>");
		
		b01.text(trivia[i].answers1.wrong2);
		$(".jumbotron").append(a01);
		$(".jumbotron").append(b01);
		
		var a02 = $("<input type='radio' name='rchoice0' value='" + trivia[i].answers1.right + "' id='choice2'>");
		var b02 = $("<label name='lblChoices' for='choice2' value=''>");
		
		b02.text(trivia[i].answers1.right);
		$(".jumbotron").append(a02);
		$(".jumbotron").append(b02);

		var a03 = $("<input type='radio' name='rchoice0' value='" + trivia[i].answers1.wrong3 + "' id='choice2'>");
		var b03 = $("<label name='lblChoices' for='choice2' value=''>");
		
		b03.text(trivia[i].answers1.wrong3);
		$(".jumbotron").append(a03);
		$(".jumbotron").append(b03);

		var a11 = $("<input type='radio' name='rchoice1' value='" + trivia[i].answers2.wrong1 + "' id='choice0'>");
		var b11 = $("<label name='lblChoices' for='choice0' value=''>");
		
		b11.text(trivia[i].answers2.wrong1);
		$(".jumbotron").append(a11);
		$(".jumbotron").append(b11);

		

	};
	
	$(".btn-primary").text("Submit");
	// TO-DO: move this button to the bottom
	// $(".jumbotron").append(submitButton);
	// gameTimer();

};



function checkAnswers() {
	if (trivia.answers.right === checked) {

	}

};

function showScore() {

};








$(document).ready(function() {

	$(".btn-primary").on("click", startGame);
	

})	