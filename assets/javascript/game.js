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

// Start Game
fightNow();
$('#characters').on('click', '.character', pickPlayerandCpu);
$('#btnAttackRestart').click(attackRestart);


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
        
        //^^Ask Cameron or Charlie/Angie^^
        console.log("why is # working but not #characters .character");
        
        
        //Messages and Buttons
            $('#message').html("Pick a character");
            $('#msgBattle').html("");
            $('#msgCharacters').html("Available characters");

            $('#btnAttackRestart').html("Attack");
            $('#btnAttackRestart').hide();      //switches from Attack and Restart btn

    }
}


// Pick a character

function selectCharacter() {
    
    console.log ("start");
    
    if (player === undefined) {
        
        player = parseInt($(this).attr('id')); // convert to integer & add
        $('#chosenPlayer').prepend($(this));   //div goes behind selected character
        playerScore = characters[player].hp;    
        attackStrength = characters[player].attackStrength;
        $('#message').html("Pick enemy to fight");
        $('#msgCharacters').html("Available Enemies");
        
    }else if (cpu === undefined){
        
        cpu = parseInt($(this).attr('id'));
        cpuScore = characters[cpu].hp;
        $('#cpu').prepend($(this));
        $('#characters').children().prop("disabled", true);
        $('#btnAttackRestart').show();
        $('#btnAttackRestart').attr("disabled", false);
        $('#message').html("ATTACK");
        if ($('#characters').children().length === 0) {
            $('#msgCharacters').html("No enemies left.");
        }
    }
}
// Player clicks 'btnAttack' to reduce HP of CPU.

function attackRestart() {
    if($('#btnAttackRestart').html() === "Restart") {
        restart();
    }else if ($('#btnAttackRestart').html() === "Attack") {
        attack();
    }
}
// PLayer attacks and CPU attacks back
function attack() {
    
    cpuScore -= attackStrength; 
    playerScore -= characters[cpu].attackStrength;
    
    $('#'+ player +' > figcaption:last').text(playerScore);
    $('#'+ cpu +' > figcaption:last').text(cpuScore);
    
    $('#msgBattle').html("<span>"+"You attacked "+characters[cpu].name+" for "+characters[player].attackStrength+" damage."+"</span>"+"<br>"
                        + "<span>" + characters[cpu].name + " attacked you back for " +characters[cpu].attackStrength + " damage."+"</span>");
}

//Conditions for defeating first enemy, winning by defeating all three, losing, and tie

//Results


// Play/Pause Song //
