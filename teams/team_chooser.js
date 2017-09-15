// JavaScript Document

// TDL
// Auto populate selects
//

/////////////////////////////////////////////////
// Games List
// Reference Links
//      http://espn.go.com/nfl/schedule
//      http://espn.go.com/nfl/powerrankings
//      http://espn.go.com/nfl/picks
/////////////////////////////////////////////////

var gGameSlate     = [0];
var gNumberOfGames = "";
var gWinningGame   = "";
var gWinningTeam   = "";
var gLosingGame    = "";
var gLosingTeam    = "";


/////////////////////////////////////////////////
// Returns a random integer between min (inclusive) and max (inclusive)
// Using Math.round() will give you a non-uniform distribution!
// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
/////////////////////////////////////////////////

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}	

/////////////////////////////////////////////////
// Clear previous results
///////////////////////////////////////////////////

function clearPreviouResults() {
	gWinningGame  = "";
	gWinningTeam  = "";
	gLosingGame   = "";
	gLosingTeam   = "";
	}
	
/////////////////////////////////////////////////
// Check if team has been chosen before
///////////////////////////////////////////////////

function prevChosenCheck( outcome, winLose ) {
	// Determine if winning team has been chosen before
	// window[gWinningTeam][1] uses the string result to identify the 
	// variable of the same name and then gets the win value in the 
	// variable's array
	if(window[outcome][winLose] < 1 ){
		return false;
		}
	else {
		return true;
		}
	}
	
/////////////////////////////////////////////////
// Get Winners Game and Team
///////////////////////////////////////////////////

function getWinner(){
	
	var prevChosen = true;  // team previously chosen check
	
	while( prevChosen == true ) {
		
		//get game
		gWinningGame = getRandomInt( 1, gNumberOfGames );
		
		//get winner, 0 = away, 1 = home
		var winner = getRandomInt( 0, 1 );
		
		//determine winning team
		if( winner < 1 ){ 
			winner = 2 * gWinningGame - 1;
			}
		else {
			winner = 2 * gWinningGame;
			}
		gWinningTeam = gameList[winner-1];
		
		prevChosen = prevChosenCheck( gWinningTeam, 1 );
		}
	//Show winning game and team in form
	gWinningTeam = window[gWinningTeam][0];	
	document.getElementById("WinGame").innerHTML  = gWinningGame;
	document.getElementById("WinTeam").value      = gWinningTeam;
	
	}
	
/////////////////////////////////////////////////
// Get Losers Game and Team
///////////////////////////////////////////////////

function getLoser(){

	var prevChosen = true;  // team previously chosen check
	
	while( prevChosen == true ) {
		
		var sameGame = true; //game check
		
		// Winning game and losing game should not 
		// be the same
		 do {
			gLosingGame = getRandomInt( 1, gNumberOfGames );
			if( gLosingGame != gWinningGame ) sameGame = false;
			} while( sameGame == true )
		
		//get winner, 0 = away, 1 = home
		var loser = getRandomInt( 0, 1 );
		
		//determine losing team
		if( loser < 1 ){ 
			loser = 2 * gLosingGame - 1;
			}
		else {
			loser = 2 * gLosingGame;
			}
			
		gLosingTeam = gameList[loser-1];

		prevChosen = prevChosenCheck( gLosingTeam, 2 );
		}
	
	//Show losing game and team in form
	gLosingTeam = window[gLosingTeam][0];	
	document.getElementById("LoseGame").innerHTML  = gLosingGame;
	document.getElementById("LoseTeam").value      = gLosingTeam;
	}
	
/////////////////////////////////////////////////
// Get Results
///////////////////////////////////////////////////

function getResults() {
	clearPreviouResults();
	getWinner();
	getLoser();
	}
	

	
	