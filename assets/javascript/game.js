$(document).ready(function() {

    var totalScoreCounter = 0;
    var userWinsCounter = 0;
    var targetRandomNumber = 0;
    var buttonRandomNumber = [];
    var randomNumber = 0;

    // To generate the random number
    function generateTargetNumber(){
        targetRandomNumber = Math.floor((Math.random() * 102) + 19);
        var targetScore = $("<p>");
        targetScore.addClass("scoreStyle");
        targetScore.text(targetRandomNumber);
        $("#random-number").append(targetScore);
        return targetRandomNumber;
    };
    
    generateTargetNumber();
 
    
    //To create an array of 4 random numbers to assign to the crysal buttons
    function generateRandomlNumbers() { 
        for (var i = 0; i < 4; i++) {
            randomNumber = Math.floor((Math.random() * 12) + 1);
            buttonRandomNumber.push(randomNumber);
            console.log(buttonRandomNumber);
        };
        return buttonRandomNumber;
    };
  
    generateRandomlNumbers();
    
    // To assign a random number from the buttonRandomNumber array to each button
    function assignRandomNumbers(){
        for (var i = 0; i < 4; i++) {
            var crystalButtons = $("<button>");
            crystalButtons.addClass("crystal-image");
            // crystalButtons.attr("src", "../../assets/images/blue-crystal-buttons.png"); !! NEED IMAGE TAG
            crystalButtons.attr("data-crystalvalue", buttonRandomNumber[i]);
            crystalButtons.text(buttonRandomNumber[i]);
            $("#crystal-buttons").append(crystalButtons);
        };
    };
    assignRandomNumbers();
 
    // Rest Functiom
    function reset(){
        totalScoreCounter = 0;
        userWinsCounter = 0;
        generateTargetNumber();
        generateRandomlNumbers();
        assignRandomNumbers();
    }
    
    // Calculating the user's Total Score for every click

    $(".crystal-image").on("click", (function() {
        var userScore = $("<p>");
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        totalScoreCounter += crystalValue;
        console.log("total Score Counter is " + totalScoreCounter);

        if (totalScoreCounter > targetRandomNumber) {
            alert("You Lose");
            reset ();
        }
        // var userTotalScore = $("<p>");
        // userTotalScore.addClass("scoreStyle");
        // userTotalScore.text(totalScoreCounter);
        // $("#user-score").append(userTotalScore);
  
    }));
    
 

})