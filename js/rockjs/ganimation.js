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



