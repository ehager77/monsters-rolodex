// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below

var fiveSecondTimeout = setTimeout(fiveSeconds, 10000);

//  after 5 seconds, execute the fiveSeconds function

//  after 10 seconds, execute the tenSeconds function
var tenSecondTimeout = setTimeout(tenSeconds, 5000);
//  after 15 seconds, execute the timeUp function

var Timeout = setTimeout(timeUp, 15000)

// ---------------------
// CODE STEP TWO HERE
// ---------------------

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  $("#time-left").html("<h2>About 5 Seconds Left</h2>")
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  console.log("5 seconds Left")
  // console log 5 seconds left
}

function tenSeconds() {
  $("#time-left").html("<h2>About 10 Seconds Left</h2>")
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  console.log("10 seconds Left")
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
}

function timeUp() {

  $("#time-left").html("<h2>Times Up!</h2>")
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  console.log("Times Up!")

  // console log done

  // The following line will play the audio file above
  audio.play();
}
