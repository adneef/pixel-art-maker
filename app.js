$(document).ready(function() {
  console.log('ready!');

  var artbox = $('<div class="artbox"></div>')
  $("body").append(artbox)

function makeGrid() {
for(var i =0; i < 1920; i++){
  var grid = $('<div class="square"></div>')
  artbox.append(grid)
}
}

var colors = ["black","gray","silver","white","maroon","red","olive","yellow","green","lime","teal","aqua","navy","blue","purple","fuchsia", ""]

var palette = $('<div class="palette"></div>')
$("body").append(palette)

var currentColor = $('<h2 class="curentColor"></h2>')
currentColor.text("Current Color:  ")
palette.append(currentColor)

var brushColor = $('<div class="brushColor"></div>')
palette.append(brushColor)

var colorGet;

function makePalette(array){
  array.reverse()
  for (var j = 0; j < array.length; j++){
    var paletteColor = $('<div class="paletteColor"></div>')
    paletteColor.css("background-color", array[j])
    paletteColor.css("background-image" , `radial-gradient(circle farthest-corner at 2px 2px, ghostWhite 10%, ${array[j]} 50%)`)

    palette.prepend(paletteColor)

    paletteColor.click(function() {
      colorGet = $(this).css("background-color")
      brushColor.css("background", "none")
      brushColor.css("background-color", colorGet)
    })
}
}

makeGrid()
makePalette(colors)
drag()


function drag(){
$(".square").on("mousedown mousenter mousedown", function(){
  ($(this).css("background-color", colorGet))
})
}
// $(".artbox").on("click", drag)


// function drag() {
// // $(".artbox").on("click", $(".square"),function(){
//   console.log("dragged?")
//   $(".square").on("mousedown mouseenter", function() {
//     $(this).css("background-color", colorGet)
//     })
//     // $(".artbox").on("click", offClick)
//   }
//
// function offClick(){
//   drag();
//   console.log("offed?")
// }


  //   if(offClick === colorGet){
  //   $(".artbox").off("clickS" )
  // }
    // $(".artbox").off("click")

// function offClick(){
// $(".artbox").on("click", $(".square"), function(){
//   if ($(".square").css("background-color") === colorGet){
//    $(".artbox").off("click")
//   }
// })
// }
// $("body").append($("<h3> Hi, Sexy Lisa Girlfriend! I love you and I hope you had a great day at work a great happy hour with your friends! Sad I couldn't be there. :( I'm at work now, I'm sure busy checking in bikes and wishing I was at home. Soon enough! I have a few things for you: 1. I hope you like the pixel art maker!  It's still a little broken, but getting better! 2. There is dinner for you: I made chicken for salads, nachos, or the gnocchi in the freezer! There are also more noodles if you want gadogado. 3. What do you think of the rewire job on the bookcase? The tv cord is a little short, and the new hung surge protector is a little ugly, but everything is better protected, and I think maybe a little cleaner (???) ? Anyway, let me know what you think, and I'll put the books back in it tonite after work. Finally, and most importantly, I love the shit out of you! You're amazing, sexy, Gorgeous, and I'm so glad everyday that we are together. I love you, - Adam) </h>"))
// offClick()
})
