$(document).ready(function() {
  var 3Words = ["Rock", "Paper", "Scissors"];

  $("#pickaWordBtn").on("click", function() {
    var Randomizer = Math.floor(Math.random() * 3Words.length);
    $("h1").fadeIn(500, function() {
      $(this).html(3Words[Randomizer]);
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