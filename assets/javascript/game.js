
var image = [
    'assets/images/Crystal-Blue.png',
    'assets/images/Crystal-Purple.png',
    'assets/images/Crystal-Red.png',
    'assets/images/Crystal-Yellow.png'
    ]

var targetNumber = randomNumber(19,120);
// console.log("Global" + targetNumber);
var counter = 0;
// var imageCrystal;
var wins = 0;
var loss = 0;
$(".wins").text(wins);
$(".loss").text(loss);
$(".total-score").html(counter);
function randomNumber(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function reset(){
    counter = 0;
    targetNumber = randomNumber(19,120);
    // console.log("reset TN" + targetNumber);
    $(".total-score").html(counter);
    $(".target-number").html(targetNumber);
    $(".crystals").empty();
    setImageCrystal();
};

$(".target-number").html(targetNumber);

setImageCrystal();
// Next we create a for loop to create crystals for every numberOption.
function setImageCrystal(){
    for (var i = 0; i < image.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", image[i]);
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", randomNumber(1,12));
    // imageCrystal.attr("height", "50");
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(".crystals").append(imageCrystal);
    // console.log(imageCrystal);
    }

};
function crystalClick() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  $(".total-score").html(counter);
  // All of the same game win-lose logic applies. So the rest remains unchanged.
//   alert("New score: " + counter);
//   console.log("crystalClick" + targetNumber);
  if (counter === targetNumber) {
    // alert("You win!");
    wins ++;
    $(".wins").text(wins);
    reset();
  }else if(counter > targetNumber){
    // alert("You lose!!");
    loss ++;
    $(".loss").text(loss);
    reset();
  } 
};
$(document).on('click','.crystal-image',crystalClick);




