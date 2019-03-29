$(document).ready(function() {

    // To generate the random number
    var targetScore = $("<p>");
    var targetRandomNumber = Math.floor((Math.random() * 102) + 19);
    targetScore.addClass("scoreStyle");
    $("targetScore").text("Target Score is: " + targetRandomNumber);
    

    // To assign a random number to each button
    
    var buttonRandomNumber = [];

    for (var i = 0; i < 4; i++) {
        randomNumber = Math.floor((Math.random() * 12) + 1);
        buttonRandomNumber.push(randomNumber);
        console.log(buttonRandomNumber);
        $("#b1").text(buttonRandomNumber[0]);
        $("#b2").text(buttonRandomNumber[1]);
        $("#b3").text(buttonRandomNumber[2]);
        $("#b4").text(buttonRandomNumber[3]);
    };
 
    // When the user clicks on a button, the score gets added to the Total Score

    $(".crystal-button").on("click", (function () {
        var userScore = $("<p>");
        userScore.text($(this).attr("color", "pink"));
        $("#user-score").append(userScore);
        console.log(userScore);
    }));
 

})