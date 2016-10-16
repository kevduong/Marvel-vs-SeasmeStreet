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

    whoWon();
}

//Conditions for tie, winning, losing
function whoWon(){
        //Tie Game
    if(playerScore===0 && cpuScore===0){
        console.log("here 1");
        $('#message').html("<span>"+"It's a tie. Game over...!"+"</span>"+"<br>");
        beforeRestart();    
        return;
     //Defeated
    }else if (playerScore <= 0 && cpuScore>0){
        console.log("here 2");
        $('#message').html("<span>"+"You got defeated by "+characters[cpu].name+". Game over...!"+"</span>"+"<br>");
        beforeRestart();
        return;
     //Lose game over
    }else if(playerScore<0 && cpuScore<0){
        console.log("here 3");
        $('#msgBattle').prepend("<span>"+"You lost. Better luck next time. Game over!"+"</span>"+"<br>");
        beforeRestart();
        return;
     //Beat one enemy
    }else if(playerScore>0 &&  cpuScore<=0){
        console.log("here 4");      
        $('#msgBattle').prepend("<span>"+"You defeated "+characters[cpu].name+"</span>"+"<br>");
        
        if($('#characters').children().length ===0){
            $('#msgBattle').prepend("<span>"+"You defeated all the enemeis. WOOO!"+"</span>"+"<br>");
            $('#msgCharacters').html("CONGRATULATIONS..!!!!");  
            beforeRestart();
        }else{
            $('#message').html("Pick another enemy to fight.");
        }
        
        if($('#btnAttackRestart').html() ==="Attack"){
            $('#'+cpu).hide();
            cpu=undefined;
            $('#btnAttackRestart').attr("disabled",true);
            $('#characters').children().prop("disabled",false);
        }
    }else if(defenderScore>0 &&  attackerScore>0){
        console.log("here 5");
        $('#btnAttackRestart').attr("disabled",false);
    }
}

 
function beforeRestart(){
    
    $('#btnAttackRestart').attr("disabled",false);
    $('#btnAttackRestart').html("Restart");
    $('#message').html("Press restart to play again");
}

function restart(){
    
    $('.character').each(function(idx,ele){
            $(ele).show();
            $('#characters').prepend($(ele));
        });
    fightNow();
}


// Play/Pause Song //
$(document).ready(function() {

$(".themeButton").on("click", function(){
                audioElement.play();
            });

            $(".pauseButton").on("click", function(){
                audioElement.pause();
            });

 var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'assets/8bit-sesamestreet.mp3');

            // Theme Button
            $(".themeButton").on("click", function(){
                audioElement.play();
            });

            $(".pauseButton").on("click", function(){
                audioElement.pause();
            });
});
