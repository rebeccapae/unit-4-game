$(document).ready(function() {

    var totalScoreCounter = 0;
    var userWinsCounter = 0;
    var userLoseCounter = 0;
    var targetRandomNumber = 0;
    var buttonRandomNumber = [];
    var randomNumber = 0;

    // To generate the random number
    function generateTargetNumber(){
        targetRandomNumber = Math.floor((Math.random() * 102) + 19);
        var targetScore = $("<div>");
        targetScore.addClass("scoreStyle");
        targetScore.text(targetRandomNumber);
        $("#random-number").append(targetScore);
        return targetRandomNumber;
    };
    
    generateTargetNumber();
 
    
    //To create an array of 4 random numbers to assign to the crysal buttons
    function generateRandomNumbers() { 
        for (var i = 0; i < 4; i++) {
            randomNumber = Math.floor((Math.random() * 12) + 1);
            buttonRandomNumber.push(randomNumber);
            console.log(buttonRandomNumber);
        };
        return buttonRandomNumber;
    };
  
    generateRandomNumbers();
    
    // To assign a random number from the buttonRandomNumber array to each button
    function assignRandomNumbers(){
        for (var i = 0; i < 4; i++) {
            var crystalButtons = $("<img src=../assets/images/blue-crystal-buttons.png>");
            crystalButtons.addClass("crystal-image");
            crystalButtons.attr("data-crystalvalue", buttonRandomNumber[i]);
            crystalButtons.text(buttonRandomNumber[i]);
            $("#crystal-buttons").append(crystalButtons);
        };
    };
    assignRandomNumbers();
 
    // Reset Functiom
    function reset(){
        totalScoreCounter = 0;
        targetRandomNumber = 0;
        buttonRandomNumber = [];
        randomNumber = 0;
        
        $("#random-number, #crystal-buttons, #user-score").empty();
        generateTargetNumber();
        generateRandomNumbers();
        assignRandomNumbers();
        console.log(buttonRandomNumber);

        click();
    };
    
    
  // Calculating the user's Total Score for every click
    function click(){
    $(".crystal-image").on("click", function() {
    crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    totalScoreCounter += crystalValue;
    console.log("total Score Counter is " + totalScoreCounter);
    $("#user-score").text(totalScoreCounter).css({"font-size":"100px", "text-align": "center", "color": "rgb(219, 96, 157)", "font-weight": "bold"});




    if (totalScoreCounter > targetRandomNumber) {
        userLoseCounter += 1;
        console.log("Lose" + userLoseCounter);
        $("#loss-score").text(userLoseCounter).css({"font-size": "50px"});
        reset();
    }
    else if (totalScoreCounter == targetRandomNumber) {
        userWinsCounter += 1;
        console.log("Win" + userLoseCounter);
        $("#wins-score").text(userWinsCounter).css({"font-size": "50px"});
        reset();
    }
    });
    }
    click();
});    