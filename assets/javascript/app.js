// GLOBAL VARIABLES
// ---------------------------------------------------------------------------
// Arrays and Variables for holding data
var questions = ["What is the name of Ross & Rachel's daughter?", "Who did Gunther have a crush on?", "What was the name of the boat Joey accidentally bought at a charity auction?", 'What was Janice\'s husband the "King" of?', "Where did Joey work when his movie was shut down in Las Vegas?"]
var answerSets = [
	[ "Ella", "Janine", "Emma", "Phoebe"],
	[ "Monica", "Joey", "Phoebe", "Rachel"],
	[ "The Mr. Beaumont", "Knicks Rule All", "The Pam", "How You Doin'?"],
	[ "Stereos", "Mattresses", "New Jersey", "Comedy"],
	[ "Circus Circus", "MGM Grand", "Caesar's Palace", "The Venetian" ]];
var correctAnswers = ["Emma", "Rachel", "The Mr. Beaumont", "Mattresses", "Caesar's Palace"];


var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 60;
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
      $(".show-timer").html('Time remaining: ' + timer);
      //  Once number hits zero...
      if (timer === 0) {
        //  ...run the stop function.
        stop();
        //  TO DO: Alert the user that time is up.
        $(".heading").html("Friends Trivia Test");
        $(".show-timer").hide();
        $(".show-game").hide();
        $(".giphy-embed").hide();
        var allDone = $("<h2 id='done'>");
        allDone.html("Time's Up!");
        $(".jumbotron").append(allDone);
        var sorrygif = $("<iframe src='https://giphy.com/embed/XJCL959KwYbE4' width='480' height='433' frameBorder='0' class='giphy-embed2'>");
      	$(".jumbotron").append(sorrygif);
        checkAnswers();
        
      };
    };
 //  The stop function
function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }; 

function startGame() {

	$(".heading").html("Friends Trivia Test");

	$(".btn-primary").hide();


	gameTimer();
	// console.log(timer);
	
	// Looping through the array of trivia
    // for (var i = 0; i < questions.length; i++) {
		//console.log("Play: " + questions[i]);
		var q1 = $("<h2 class='question-line'>")
		q1.text(questions[0]);
		$(".show-game").append(q1);
	//};	
	
	for (var c = 0; c < answerSets[0].length; c++) {
		var a1 = $("<input type='radio' name='set1' value='" + answerSets[0][c] + "' id='choice0" + c + "'>");
		var b1 = $("<label name='lblChoices' for='choice0" + c + "' value=''>");
		b1.text(answerSets[0][c]);
		
		//console.log(answerSets[c]);

		$(".show-game").append(a1);
		$(".show-game").append(b1);

	};

		var q2 = $("<h2 class='question-line'>")
		q2.text(questions[1]);
		$(".show-game").append(q2);

	for (var d = 0; d < answerSets[1].length; d++) {
		var a2 = $("<input type='radio' name='set2' value='" + answerSets[1][d] + "' id='choice0" + d + "'>");
		var b2 = $("<label name='lblChoices' for='choice0" + d + "' value=''>");
		b2.text(answerSets[1][d]);

		$(".show-game").append(a2);
		$(".show-game").append(b2);
	};	

		var q3 = $("<h2 class='question-line'>")
		q3.text(questions[2]);
		$(".show-game").append(q3);

	for (var e = 0; e < answerSets[2].length; e++) {
		var a3 = $("<input type='radio' name='set3' value='" + answerSets[2][e] + "' id='choice0" + e + "'>");
		var b3 = $("<label name='lblChoices' for='choice0" + e + "' value=''>");
		b3.text(answerSets[2][e]);

		$(".show-game").append(a3);
		$(".show-game").append(b3);
	};	

		var q4 = $("<h2 class='question-line'>")
		q4.text(questions[3]);
		$(".show-game").append(q4);

	for (var f = 0; f < answerSets[3].length; f++) {
		var a4 = $("<input type='radio' name='set4' value='" + answerSets[3][f] + "' id='choice0" + f + "'>");
		var b4 = $("<label name='lblChoices' for='choice0" + f + "' value=''>");
		b4.text(answerSets[3][f]);

		$(".show-game").append(a4);
		$(".show-game").append(b4);
	};	

		var q5 = $("<h2 class='question-line'>")
		q5.text(questions[4]);
		$(".show-game").append(q5);

	for (var g = 0; g < answerSets[4].length; g++) {
		var a5 = $("<input type='radio' name='set5' value='" + answerSets[4][g] + "' id='choice0" + g + "'>");
		var b5 = $("<label name='lblChoices' for='choice0" + g + "' value=''>");
		b5.text(answerSets[4][g]);

		$(".show-game").append(a5);
		$(".show-game").append(b5);
	};	
		
	$(".show-game").append($("<br>"));	
	var submitButton = $("<button type='button' class='btn btn-primary' id='subB'>");
	submitButton.show();
	submitButton.text("Submit");
	$(".show-game").append(submitButton);
	
};


function checkAnswers() {

// Unanswered: check each set to see whether nothing was checked, add to unanswered count
	//for (var z = 0; z < answerSets.length; z++) {
	/*if (!$("input[name='set1']:checked").val() || !$("input[name='set2']:checked").val() || !$("input[name='set3']:checked").val() 
		|| !$("input[name='set4']:checked").val() || !$("input[name='set5']:checked").val()) {
		unanswered++;
	}; /*else if ($("input[name='set1']:checked").val() === correctAnswers[0]) {
		correct++;
	};*/	
	if (!$("input[name='set1']:checked").val()) {
		unanswered++;
	} else if ($("input[name='set1']:checked").val() === correctAnswers[0]) {
		correct++;
	} else {
		incorrect++;
	};

	if (!$("input[name='set2']:checked").val()) {
		unanswered++;
	} else if ($("input[name='set2']:checked").val() === correctAnswers[1]) {
		correct++;
	} else {
		incorrect++;
	};

	if (!$("input[name='set3']:checked").val()) {
		unanswered++;
	} else if ($("input[name='set3']:checked").val() === correctAnswers[2]) {
		correct++;
	} else {
		incorrect++;
	};

	if (!$("input[name='set4']:checked").val()) {
		unanswered++;
	} else if ($("input[name='set4']:checked").val() === correctAnswers[3]) {
		correct++;
	} else {
		incorrect++;
	};

	if (!$("input[name='set5']:checked").val()) {
		unanswered++;
	} else if ($("input[name='set5']:checked").val() === correctAnswers[4]) {
		correct++;
	} else {
		incorrect++;
	};

    showScore();

	};



function showScore() {
	$(".heading").html("Friends Trivia Test");
	$(".giphy-embed").hide();
    $(".show-timer").hide();
    $(".show-game").hide();
	var scoreDiv = $("<div id='show-score'>");
    $(".jumbotron").append(scoreDiv);
    var corr = $("<p>").text("Correct answers: " + correct);
    $("#show-score").append(corr);
    var incorr = $("<p>").text("Incorrect answers: " + incorrect);
    $("#show-score").append(incorr);
    var unans = $("<p>").text("Unanswered questions: " + unanswered);
    $("#show-score").append(unans);
};



$(document).ready(function() {

	$(".btn-primary").on("click", startGame);
	$("#subB").on("click", function() {
	checkAnswers();
	var allDone = $("<h2 id='done'>");
    allDone.html("All done!");
    $(".jumbotron").append(allDone);
	});

})	