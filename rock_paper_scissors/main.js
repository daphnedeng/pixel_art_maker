$(document).ready(function(){ 
    var img = ["img/paper.png", "img/rock.png", "img/scissor.png"];
    var $playerScore = $("#player-score");
    var $pcScore = $("#pc-score");

    //change img when click on button
    $("button").click(function() { 

        //make sure player-choice's img is the same as the clicked button
        var playerChoice = "img/" + this.id + ".png"; 

        //pc-choice is random
        var pcChoice = img[Math.floor(Math.random()*img.length)];

        $("#player-choice img, #pc-choice img").css("display", "block");
        $("#player-choice img").attr("src", playerChoice);
        $("#pc-choice img").attr("src", pcChoice);

        //check the current src for player
        var playerTurn = $("#player-choice img").attr("src");
        var pcTurn = $("#pc-choice img").attr("src");

        //determind the conditions
        //if tie, show tie message, change role's img
        if (playerTurn === pcTurn) {
            $("#mesg").text("Tie, next round!")
            $("#player img").attr("src", "img/cattie.png")
            $("#pc img").attr("src", "img/pctie.png")
            $("#player-score")
        //if player wins, show winning message, change role's img
        } else if ((playerTurn === img[0] && pcTurn === img[1]) || (playerTurn === img[1] && pcTurn === img[2]) || (playerTurn === img[2] && pcTurn === img[0])) {
            $("#mesg").text("YEA!! YOU WIN!")
            $("#player img").attr("src", "img/catwin.png")
            $("#pc img").attr("src", "img/pclose.png")
            //update player score
            $playerScore.text(Number($playerScore.text()) +1);
        //if pc wins, show lose message, change role's img
        } else {
            $("#mesg").text("Oh noo, you lose :(")
            $("#player img").attr("src", "img/catlose.png")
            $("#pc img").attr("src", "img/pcwin.png")
            //update pc score
            $pcScore.text(Number($pcScore.text()) +1);
        }      
        
    })
   
});