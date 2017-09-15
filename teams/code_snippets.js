// JavaScript Document

/**************************************************************

  CONSOLE CODE: Gets game list from NFL schedule page code
  and formats it as an array
  
  Based on:
  http://dangoldin.com/2013/08/26/extract-info-from-a-web-page-using-javascript/
  
 	 teams = document.getElementsByClassName("team-name")

 	 for (var i = 0; i < teams.length; i++) { 
     	 console.log( teams[i].textContent ); 
     	 }
	  
 JavaScript REGEX Search and Replace Notes
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 http://stackoverflow.com/questions/19801351/what-is-a-regular-expression-for-removing-spaces-between-uppercase-letters-but
  
  2-3 letter team codes
  Find a space followed by 2 or 3 uppercase letters = code
  
 	 if code == NYJ, replace with "Jets"
 	 if code == NYG, replace with "Giants"
 	 else delete 2-3 letters and their leading space
  
  Defining JavaScript regular expressions:
  
 	 var re = /pattern/flags; or 
 	 var re = new RegExp("pattern, flags");
	 
v2

	2015-10-02
	Added code to remove spaces between words and "." from St. Louis
	to fix a bug in team_chooser.js which was trying to reference 
	variable names that had spaces
	
	2015-10-06
	Error with teams listed in "Bye" section
		TypeError: code is null

		...ng Giants and Jets
			if( code == " NYG" ){
    			team = team.replace( rexp, " Giant...

		/* EXPR...le.log( (line 14)
  
/*************************************************************/

teams = document.getElementsByClassName("team-name")

var rexp   = new RegExp( " [A-Z]{2,3}"); // matches 2- and 3-letter codes

console.log( 'var gameList = [' );

for( var i = 0; i < teams.length; i++ ) {
  
	team = teams[i].textContent;
    
	code = rexp.exec( team );
  
	code.toString(); 
  
	//Removing codes, differentiating Giants and Jets
	if( code == " NYG" ){
    team = team.replace( rexp, " Giants");
      }
		else if( code == " NYJ" ){
      team = team.replace( rexp, " Jets");
      }
		else {
      team = team.replace( rexp, "");
      }
	
	team = team.replace( /\s|\.\s/g, "");
	  
	if( i < teams.length-1 ){ console.log( '    "', team,'",' );} 
		else { console.log( '    "', team,'"' );}
 }

console.log( '    ];' );

/*

	SAME GAME CHECK
	If possible, winning game and losing game should be different based on available choices
	
	1) available winning game slots and losing game slots will be the same unless 
	   only a winner or loser is chosen for a week's pick (option not programmed)
	2) If only a single winning slot and single losing slot are available, then
	   then same game is allowed.
	3) Teams with available slots may not be available due to having a bye week

*/
function sameGame() {
	var availSlots = 0;
	
	for ( var i = 0; i < 32; i++ ){
		if( teams[i][1] < 1 ){
			availSlots++;
			}
		if( availSlots == 2 ){
	 		break;
			}
		}
		
	 if( availSlots == 1 ){
	 	gSameGame = true;
	 	}
	}