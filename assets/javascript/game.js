//Global Variable - Declare variables to be accessed on any function
 
 //1: Game needs player, cpu, hp, attack value, scores for players and cpu
var player;
var cpu;

var attackStrength;
var playerScore;
var cpuScore;

 //2: Create an array or object for characters? Refer to Cobweb activity...
var characters = [{

	name: "Spiderman";
	hp: 1500,
	strengthAttack: 75
},
{	name: "Wolverine";
	hp: 3000,
	strengthAttack: 150
},
{	name: "Oscar"
	hp: 500,
	strengthAttack: 300
},
{
	name: "Big Bird"
	hp: 5000,
	strengthAttack: 20
}];

// Setting function before the fight
function fightNow() {
    
    //Set values. Refer to calculator assignment.
    player = undefined;
    cpu = undefined;
    attackStrength = 0;
    playerScore = 0;
    cpuScore = 0
    
    //Loop - Add HP and Name variable to characters
    for(var i=0;i<characters.length;i++){
        
        //Replace fig by object name value
        $('#' + i +' > figcaption:first-child').text(characters[i].name); 
        //Replace fig by object hp value
        $('#'+ i +' > figcaption:last-child').text(characters[i].hp);
        
        //Ask Cameron or Charlie/Angie
        console.log("why is # working but not #characters .character");
        
        
        //Messages and Buttons
            $('#message').html("Pick a character");
            $('#msgBattle').html("");
            $('#msgCharacters').html("Available characters");

            $('#btnAttackRestart').html("Attack");
            $('#btnAttackRestart').hide();      //switches from Attack and Restart btn

    }
}

// Start Game
fightNow();
$('#characters').on('click', '.character', pickPlayerandCpu);
$('#btnAttackRestart').click(attackRestart);

// Pick a character

// Player clicks 'btnAttack' to reduce HP of CPU.
// CPU attacks back

//Conditions for defeating first enemy, winning by defeating all three, losing, and tie

//Results


// Play/Pause Song //
