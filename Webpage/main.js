function spotifySearch(){
    alert("Spotify is being searched.");
}

function youtubeSearch(){
    alert("Youtube is being searched.");
    $("#ytSearch").load( "file.php" );
}

function addSong(){
    alert('Added Song');
    var elemDiv = document.createElement('div');
    alert('Made it to the end 1');
    // elemDiv.classList.add("");
    elemDiv.setAttribute("id","newDiv");
    elemDiv.setAttribute("class","px-40 py-2");
    elemDiv.style.cssText = 'width:80%; height:200px; background:#000000; border-radius:12px';
    alert('Made it to the end 2');
    // alert('Made it to the end 3');
    document.getElementById('scrollingBox').append(elemDiv);
    alert('Made it to the end 4');
    // document.getElementById("myHeader").innerHTML = "Have a nice day!";
}


$("#addSong").click(function () {
    $("#scrollingBox").append('<div class="module_holder"><div class="module_item"><img src="images/i-5.png" alt="Sweep Stakes"><br>sendSMS</div></div>');
  });