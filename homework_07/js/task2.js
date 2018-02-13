var EnterNumber;
var maxNumber;
var randomNumber;
var Attempts = 0;	
var TotalPrize = 0;
var maxPrize;
var PosiblePrize;	
var continueGame = true;
var guessed = true;

if(confirm("Do you want to play a game?"))
	while(continueGame){
		maxNumber = 5;
		maxPrize = 20;	
		EnterNumber = -1;
		while(continueGame){
			randomNumber = Math.floor(Math.random() * (maxNumber + 1));
			PosiblePrize = maxPrize;			
			while(Number(EnterNumber)!=randomNumber){
				if(Attempts == 3){
					Attempts = 0;
					guessed = false;
					break;		
				}	
				PosiblePrize=parseInt(PosiblePrize/2);	
				EnterNumber = prompt("Enter a number from 0 to " + maxNumber + " \n" + "Attempts left: " + Attempts + "\n" + "Total prize: " + TotalPrize + "$" + "\n" + "Possible prize on current attempt: " + PosiblePrize + "$");			
				if(EnterNumber == null){
					EnterNumber = -1;
				}
				Attempts++;    	
			}
			if(guessed){
				TotalPrize += PosiblePrize;
				maxPrize *= 3;
				maxNumber *= 2;
				Attempts = 0;
				EnterNumber = -1;	
				continueGame=confirm("Your prize is: " + TotalPrize + "$" + "\n" + "Do you want continue play a game?")							
			}	
			else{
				continueGame=false;
			}		
		}	
		console.log("Thank you for a game. Your prize is: "+TotalPrize+"$");	
		continueGame = confirm("Do you want to play again?");		
	}
else{
	console.log("You did not become a millionaire.");
}