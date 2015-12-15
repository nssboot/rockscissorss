$(document).ready(function() {
  var myWords = ["Rock", "Paper", "Scissors"];

  //radio button input - code below
  $('#selectPlayer input').on('change', function() {
   alert($('input[name=optradio]:checked', '#selectPlayer').val()); 
});

  $("#changeWordBtn").on("click", function() {
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").fadeIn(250, function() {
      $(this).html(myWords[myRandomNumber]);
      $(this).fadeOut(1000);
    });
    
  });
});
//randomStrings.js above

//radio button input - code below


//scoreTracker.js below
window.rockgame5 = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    var tagName = $(this).data("tag");
    rockgame5.gameState[tagName]++;

    $("#" + tagName).html(rockgame5.gameState[tagName]);
  });

});



//helloGoodbye.js below

$(document).ready(function() {
  var buttonChoices = ["Rock", "Paper", "Scissors"];

  function randomButton() {
    var randomIndex = Math.floor(Math.random() * buttonChoices.length);
    $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
  }

  $(".btn-primary").on("click", function() {
    var computerChoice = Math.floor(Math.random() * buttonChoices.length);
    var userChoice = parseInt($(this).attr("data-selection"));

    if(computerChoice === userChoice) {
      $(".modal-body").html("Same choice. No points");
    } else if(computerChoice === 0 && userChoice === 1) {
      // Computer gets a point
      $(".modal-body").html("Computer wins!");
      rockgame5.gameState.computerScore++;
    } else {
      // User gets a point
      $(".modal-body").html("User wins!");

      rockgame5.gameState.userScore++;
    }
    $("#myModal").modal("show");
    rockgame5.gameState.roundCount++;

    $("span").each(function() {
      $(this).html(rockgame5.gameState[$(this).attr("id")]);
    });

    randomButton();
  });

  randomButton();
});


//audio player below - which is ganimation2.js

$(document).ready(function() {  
  $('#gifpic img').on("load", function() {
    $(this).addClass("loaded");
  });


  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'dlart/announcer.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    
    $('#play').click(function() {
        audioElement.play();
    });
    
    $('#pause').click(function() {
        audioElement.pause();
    });


function swapImage(imgID, imgSrc) {
     var trumpAnnouncer = document.getElementById(imgID)
     trumpAnnouncer.src = imgSrc;
}


});


//controls for switch - html shown in game.tml 7.2 session
$(document).ready(function() {
  $(".btn-danger").on("click", function() {
    if($(this).attr("data-state") === "off") {
      $(this)
        .attr("data-state", "on")
        .addClass("btn-default")
        .removeClass("btn-danger")
        .html("GAME ON");

      $(".btn-info").off("click");
    } else {
      $(this)
        .attr("data-state", "off")
        .removeClass("btn-default")
        .addClass("btn-danger")
        .html("GAME OFF");

      bindControls();
    }
  });

  function bindControls() {
    $(".btn-info").on("click", function() {
      alert("I got clicked");
    });    
  }

  bindControls();
});


