
var tarnum = [];
var wins = 0;
var losses = 0;
var score = 0;
var crysScore = [1,2,3,4,5,6,7,8,9,10,11,12]
var circCrys = [];
var pyrmCrys = [];
var purpCrys = [];
var whitCrys = [];
$('#currentScore').html(score);

function sgame() {
	//generating the target number.
	tarnum = Math.floor(Math.random() * 102) + 19;
	document.getElementById('targetscore').innerHTML = tarnum;

	//generating the value for the Crystals
	circCrys = crysScore[Math.floor(Math.random() *crysScore.length)];
	pyrmCrys = crysScore[Math.floor(Math.random() *crysScore.length)];
	purpCrys = crysScore[Math.floor(Math.random() *crysScore.length)];
	whitCrys = crysScore[Math.floor(Math.random() *crysScore.length)];

	score = 0;
}

sgame ()
//Starting the game with a new target score, 0 wins and 0 losses

document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('currentScore').innerHTML = 0;

//Adding the value of the crystal to the score
$('#circcry').on('click', function (){
	score = score + circCrys;
	$('#currentScore').html(score);
	if (score == tarnum) {
       alert('You WON!');
       wins++;
       sgame();
     } else if (score > tarnum) {
       alert("You LOST");
       losses++;
       sgame();
     }

     $("#wins").html(wins);
     $("#losses").html(losses);
}

	);
$('#pyramidcry').on('click', function (){
	score = score + pyrmCrys;
	$('#currentScore').html(score);
		if (score == tarnum) {
       alert('You WON!');
       wins++;
       sgame();
     } else if (score > tarnum) {
       alert("You LOST");
       losses++;
       sgame();
     }

     $("#wins").html(wins);
     $("#losses").html(losses);
     
}

	);
$('#purpcry').on('click', function (){
	score = score + purpCrys;
	$('#currentScore').html(score);
		if (score == tarnum) {
       alert('You WON!');
       wins++;
       sgame();
     } else if (score > tarnum) {
       alert("You LOST");
       losses++;
       sgame();
     }

     $("#wins").html(wins);
     $("#losses").html(losses);
}

	);
$('#whitcry').on('click', function (){
	score = score + whitCrys;
	$('#currentScore').html(score);
		if (score == tarnum) {
       alert('You WON!');
       wins++;
       sgame();
     } else if (score > tarnum) {
       alert("You LOST");
       losses++;
       sgame();
     }

     $("#wins").html(wins);
     $("#losses").html(losses);
}

	);
