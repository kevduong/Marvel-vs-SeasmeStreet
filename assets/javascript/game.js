//Global Variable - Declare variables to be accessed on any function
    //Step 1: Game needs player, cpu, hp, attack value, scores for players and cpu
    //Step 2: Create an array or object for characters? Refer to Cobweb activity...

var player;
var cpu;

var attackStrength;
var playerHP;
var cpuHP;

var characters = [{
   
    name:"Spiderman",
    hp: 1000,
    attackStrength: 100
},
{   name:"Wolverine",
    hp: 2000,
    attackStrength: 100
},
{
    name:"Oscar",
    hp: 750,
    attackStrength: 100
},
{
    name:"Big Bird",
    hp: 3000,
    attackStrength: 100
    
}];
// Start Game

fightNow();
$('#characters').on('click', '.character', selectCharacter);
$('#btnAttackRestart').click(attackRestart);


// Setting function before the fight
function fightNow() {
    
    //Set values. Refer to calculator assignment.
    player = undefined;
    cpu = undefined;
    attackStrength = 0;
    playerHP = 0;
    cpuHP = 0;
    
    //Loop - Add HP and Name variable to characters
    for(var i=0;i<characters.length;i++){
        
        //Replace fig by object name value
        $('#' + i +' > figcaption:first-child').text(characters[i].name); 
        //Replace fig by object hp value
        $('#'+ i +' > figcaption:last-child').text(characters[i].hp);
        
        
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
        
        $('#message').html("Pick enemy to fight");
        $('#msgCharacters').html("Available Enemies");
        
        player = parseInt($(this).attr('id')); 
        $('#chosenPlayer').prepend($(this));   //div goes behind selected character
        playerHP = characters[player].hp;   
        attackStrength = characters[player].attackStrength; 
        
        
    }else if (cpu === undefined){
        
        $('#characters').children().prop("disabled", true);
        $('#btnAttackRestart').show();
        $('#btnAttackRestart').attr("disabled", false);
        $('#message').html("ATTACK");
        if ($('#characters').children().length === 0) {
            $('#msgCharacters').html("No enemies left.");
        }
        
        cpu = parseInt($(this).attr('id'));
        cpuHP = characters[cpu].hp;
        $('#cpu').prepend($(this));
        
    }
}

function attackRestart() {
    if($('#btnAttackRestart').html() === "Restart") {
        restart();
    }else if ($('#btnAttackRestart').html() === "Attack") {
        attack();
    }
}

function attack() {
   
    cpuHP -= (attackStrength++ * .5);
    playerHP -= characters[cpu].attackStrength;
    
    
    
    $('#'+ player +' > figcaption:last').text(playerHP);
    $('#'+ cpu +' > figcaption:last').text(cpuHP);
    
    $('#msgBattle').html("<span>"+"You attacked "+characters[cpu].name+" for "+(attackStrength++ * .5)+" damage."+"</span>"+"<br>"
                        + "<span>" + characters[cpu].name + " attacked you back for " +characters[cpu].attackStrength + " damage."+"</span>")
    .css('background-color', '#00664f');
    
    whoWon();
}

function whoWon(){
        //Tie Game
    if(playerHP===0 && cpuHP===0){
        console.log("tie");
        $('#message').html("<span>"+"It's a tie. Game over...!"+"</span>"+"<br>");
        beforeRestart();    
        return;
     //Defeated
    }else if (playerHP <= 0 && cpuHP>0){
        console.log("defeated");
        $('#message').html("<span>"+"You got defeated by "+characters[cpu].name+". Game over...!"+"</span>"+"<br>");
        beforeRestart();
        return;
     //Lose game over
    }else if(playerHP<0 && cpuHP<0){
        console.log("lost");
        $('#msgBattle').prepend("<span>"+"You lost! Game over...!"+"</span>"+"<br>");
        beforeRestart();
        return;
     //Beat one enemy
    }else if(playerHP>0 &&  cpuHP<=0){
        console.log("win");      
        $('#msgBattle').prepend("<span>"+"You defeated "+characters[cpu].name+"</span>"+"<br>");
        
        if($('#characters').children().length ===0){
            $('#msgBattle').prepend("<span>"+"You defeated all everyone!"+"</span>"+"<br>");
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
    }else if(cpuHP>0 &&  playerHP>0){
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

//Play Music
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
