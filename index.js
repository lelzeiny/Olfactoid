
function Question(prompt, optionA, optionA_val, optionB, optionB_val, optionC, optionC_val, optionD, optionD_val, is_image) {
	this.prompt = prompt;
	this.optionA = optionA;
	this.optionA_val = optionA_val;
	this.optionB = optionB;
	this.optionB_val = optionB_val;
	this.optionC = optionC;
	this.optionC_val = optionC_val;
	this.optionD = optionD;
	this.optionD_val = optionD_val;
	this.is_image = is_image;
}

var questionOne = new Question(
	"When you arrived at a party before your friends, what did you do?",
	"Started talking to new people", [0, 0, 0, 3],
	"Turned around and waited in your car", [2, 1, 0, 0],
	"Found a quiet place to sit and stay on your phone", [1, 2, 0, 0],
	"Went to the kitchen to eat", [0, 0, 2, 1], false
);
var questionTwo = new Question(
	"Which did you prefer?",
	'<img src="Others/sunrise.png" class="optionImg">', [3, 0, 0, 3],
	'<img src="Others/sunset.png" class="optionImg">', [0, 3, 3, 0],
	"", [0, 0, 0, 0],
	"", [0, 0, 0, 0], true
);
var questionThree = new Question(
	"Imagine you were at home and you thought you heard a gunshot outside. What would you have done?",
	"Ran outside to see what it was", [0, 0, 1, 2],
	"Stopped what you were doing and headed to a safer spot", [0, 3, 0, 0],
	"Ignored it because you thought you imagined it", [0, 1, 2, 0],
	"Called the police", [2, 0, 0, 1], false
);
var questionFour = new Question(
	"When someone was mad at you and giving you the cold shoulder, you ... ",
	"Tried to initiate a conversation to talk about your issues", [0, 0, 0, 3],
	"Ignored them and avoided it", [0, 1, 2, 0],
	"Reciprocated the cold shoulder", [2, 1, 0, 0],
	"Made small talk to ease into a conversation", [0, 1, 2, 0], false
);
var questionFive = new Question(
	"What did you typically do the night before an important exam?",
	"You stayed up late to study", [0, 1, 2, 0],
	"You had studied for a while, so you reviewed and then went to sleep on time", [0, 2, 1, 0],
	"You had studied, but you would be worried and have difficulty falling asleep", [3, 0, 0, 0],
	"You attempted to study but got distracted", [0, 2, 0, 1], false
);
var questionSix = new Question(
	"How did you make important decisions?",
	"You wavered between the options for days", [2, 0, 1, 0],
	"You went with what your gut told you", [0, 0, 0, 3],
	"You thought it through before making a choice and didn't worry about it afterwards", [0, 0, 2, 1],
	"You made a list about the pros and cons of each option", [1, 2, 0, 0], false
);
var questionSeven = new Question(
	"When working in a team with a member not contributing, what did you do?",
	"You confronted them and told them to do their part", [0, 0, 0, 3],
	"You did their part for them", [0, 1, 2, 0],
	"You told a superior", [1, 2, 0, 0],
	"You refused to put their name on the project", [3, 0, 0, 0], false
);
var questionEight = new Question(
	"What do you remember noticing first about people you met?",
	"Eyes", [0, 0, 1, 2],
	"Hair", [2, 0, 0, 1],
	"Hands", [0, 0, 3, 0],
	"Smile", [0, 3, 0, 0], false
);
var questionNine = new Question(
	"Which of the following is a disagreeable trait that you had?",
	"You were stubborn", [0, 0, 3, 0],
	"You were self-centered", [1, 2, 0, 0],
	"You were impatient", [0, 0, 1, 2],
	"You held grudges", [3, 0, 0, 0], false
);
var questionTen = new Question(
	"How would your friends have described you?",
	"Social, open to trying new things", [0, 0, 0, 4],
	"Compassionate", [4, 0, 0, 0],
	"Calm, rational", [0, 0, 4, 0],
	"Quiet, thoughtful", [0, 3, 1, 0], false
);
//document.getElementById("option").style.backgroundColor = Transparent;
var questionEleven = new Question(
	"When you had a negative impression of someone, which of the following was most likely to change your opinion of them?",
	"Them buying you a present", [2, 0, 0, 1],
	"Seeing them give money to someone in need", [0, 1, 2, 0],
	"Them making you laugh", [0, 0, 0, 3],
	"Seeing them working diligently", [0, 2, 1, 0], false
);
var questionTwelve = new Question(
	"Which of these shapes do you like the most?",
	'<img src="Others/square.png" class="optionImg">', [0, 2, 1, 0],
	'<img src="Others/circle.png" class="optionImg">', [0, 0, 0, 3],
	'<img src="Others/triangle.png" class="optionImg">', [3, 0, 0, 0],
	'<img src="Others/rectangle.png" class="optionImg">', [1, 0, 2, 0], true
);

var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven,
	questionEight, questionNine, questionTen, questionEleven, questionTwelve];
var currentQuestion = 0;
var valueChosen;
var totalScent = [0, 0, 0, 0];
var smellArray = new Array(4);

function processScent(optionChosen) {
	//process the scent totals
	switch (optionChosen) {
		case 0: valueChosen = questionArray[currentQuestion].optionA_val;
			break;
		case 1: valueChosen = questionArray[currentQuestion].optionB_val;
			break;
		case 2: valueChosen = questionArray[currentQuestion].optionC_val;
			break;
		case 3: valueChosen = questionArray[currentQuestion].optionD_val;
			break;
	}
	//floral
	totalScent[0] += valueChosen[0];
	//oriental
	totalScent[1] += valueChosen[1];
	//woodsy
	totalScent[2] += valueChosen[2];
	//fresh
	totalScent[3] += valueChosen[3];

	var smell1 = { value: totalScent[0], scent: "floral" };
	smellArray[0] = smell1;
	var smell2 = { value: totalScent[1], scent: "oriental" };
	smellArray[1] = smell2;
	var smell3 = { value: totalScent[2], scent: "woody" };
	smellArray[2] = smell3;
	var smell4 = { value: totalScent[3], scent: "fresh" };
	smellArray[3] = smell4;

	// sort the smells from least to greatest depending on its array value
	smellArray.sort(function (a, b) {
		return a.value - b.value;
	});

	document.getElementById("back").style.display = "inline";

	//switch the question seen
	if (currentQuestion < questionArray.length - 1) {
		currentQuestion++;
		switchQuestion(currentQuestion);
	}
	else {
		computeScent();
	}
}

//Calculate scent once finished with questions
function computeScent() {
	document.getElementById("progressBar").style.width = "100%";
	save_user();
	//document.getElementById('submit').style.display = "inline";
	/*alert(smellArray[0].scent + ": " + smellArray[0].value + "\n" + smellArray[1].scent + ": " +
		smellArray[1].value + "\n" + smellArray[2].scent + ": " + smellArray[2].value + "\n" +
		smellArray[3].scent + ": " + smellArray[3].value);
	*/
	window.location.href = "thankyou.html";
}

function backQuestion() {
	document.getElementById("back").style.display = "none";
	currentQuestion--;
	//floral
	totalScent[0] -= valueChosen[0];
	//oriental
	totalScent[1] -= valueChosen[1];
	//woodsy
	totalScent[2] -= valueChosen[2];
	//fresh
	totalScent[3] -= valueChosen[3];

	switchQuestion(currentQuestion);
}

function switchQuestion(currentQuestion) {

	//check if the question is an image
	if (questionArray[currentQuestion].is_image == true) {
		for (element of document.getElementsByClassName('option')) {
			element.style.padding = "0px";
			element.style.display = "inline-grid";
		}
		//document.getElementsByClassName('option')[0].style.padding = "0px";
	}
	else {
		for (element of document.getElementsByClassName('option')) {
			element.style.padding = "10px 20px";
			element.style.display = "inline-block";
		}
	}

	document.getElementById('question').innerHTML = questionArray[currentQuestion].prompt;
	document.getElementsByClassName('option')[0].innerHTML = questionArray[currentQuestion].optionA;
	document.getElementsByClassName('option')[1].innerHTML = questionArray[currentQuestion].optionB;
	document.getElementsByClassName('option')[2].innerHTML = questionArray[currentQuestion].optionC;
	document.getElementsByClassName('option')[3].innerHTML = questionArray[currentQuestion].optionD;

	/*//change color
	if ((currentQuestion % 2) == 0) {
		document.getElementsByClassName('option')[0].style.backgroundColor = "#707E8A";
		document.getElementsByClassName('option')[1].style.backgroundColor = "#707E8A";
		document.getElementsByClassName('option')[2].style.backgroundColor = "#707E8A";
		document.getElementsByClassName('option')[3].style.backgroundColor = "#707E8A";
	}
	else {
		document.getElementsByClassName('option')[0].style.backgroundColor = "#8E99A3";
		document.getElementsByClassName('option')[1].style.backgroundColor = "#8E99A3";
		document.getElementsByClassName('option')[2].style.backgroundColor = "#8E99A3";
		document.getElementsByClassName('option')[3].style.backgroundColor = "#8E99A3";
	}*/

	//switch question number
	//document.getElementById('title').innerHTML = "QUESTION " + (currentQuestion + 1);
	document.getElementById('progress').innerHTML = "question " + (currentQuestion + 1) + " out of " + questionArray.length;

	//change progress bar
	var scrolled = (currentQuestion / questionArray.length) * (100);
	document.getElementById("progressBar").style.width = scrolled + "%";
}

var databaseRef = firebase.database().ref('users/');
var database = firebase.database();
var numOfUsers = 0;

databaseRef.once('value', function (snapshot) {
	numOfUsers = snapshot.numChildren();
	//console.log(snapshot.numChildren());
});

function save_user() {
	//var user_id = document.getElementById('user_id').value;
	var uid = firebase.database().ref().child('users').push().key;

	numOfUsers++;


	// creates and defines data object which will be pushed to Firebase
	var data = {
		user_nickname: localStorage.getItem("nickName"),
		user_scent: smellArray[3].scent,
		user_age: localStorage.getItem("age"),
		user_gender: localStorage.getItem("gender"),
		user_number: numOfUsers,
		user_id: uid,
		user_scentArray: totalScent
	}
	// push to firebase and clear the local storage
	var updates = {};
	updates['/users/' + uid] = data;
	firebase.database().ref().update(updates);
	localStorage.clear();
}
