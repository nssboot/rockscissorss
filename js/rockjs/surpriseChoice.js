$(document).ready(function() {
  var threeWords = ["Rock", "Paper", "Scissors"];

  $("#pickaWordBtn").on("click", function() {
    var Randomizer = Math.floor(Math.random() * threeWords.length);
    $("h1").fadeIn(500, function() {
      $(this).html(threeWords[Randomizer]);
      $(this).fadeOut(1000);
    });
    
  });
});

window.rockpaperscissors = {
  scoreBoard: {
    enemyScore: 0,
    autoScore: 0,
    rounds: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    var marker = $(this).data("tag");
    rockpaperscissors.scoreBoard[marker]++;

    $("#" + marker).html(rockpaperscissors.scoreBoard[tagName]);
  });

});