window.rockpaperscissors = {
  scoreBoard: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    var tagName = $(this).data("tag");
    rockpaperscissors.scoreBoard[tagName]++;

    $("#" + tagName).html(rockpaperscissors.scoreBoard[tagName]);
  });

});