$(document).ready(function() {
  var buttonChoices = ["shalom", "sayonara"];

  function randomButton() {
    var randomIndex = Math.floor(Math.random() * buttonChoices.length);
    $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
  }

  $(".btn-primary").on("click", function() {
    var computerChoice = Math.floor(Math.random() * buttonChoices.length);
    var userChoice = parseInt($(this).attr("data-selection"));

    if(computerChoice === userChoice) {
      $(".modal-body").html("Both same. No points");
    } else if(computerChoice === 0 && userChoice === 1) {
      // Computer gets a point
      $(".modal-body").html("Computer wins!");
      shalomSayonara.gameState.computerScore++;
    } else {
      // User gets a point
      $(".modal-body").html("User wins!");

      shalomSayonara.gameState.userScore++;
    }
    $("#myModal").modal("show");
    shalomSayonara.gameState.roundCount++;

    $("span").each(function() {
      $(this).html(shalomSayonara.gameState[$(this).attr("id")]);
    });

    randomButton();
  });

  randomButton();
});