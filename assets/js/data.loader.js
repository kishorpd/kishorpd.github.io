// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Array of card data
var cards = [
    {
    htmlFile: "Projects/Gazi.html",
    buttonId: "myBtn1"
    },
    {
      htmlFile: "Projects/Toyoto.html",
      buttonId: "myBtn2"
    },
    {
      htmlFile: "Projects/QuadTree.html",
      buttonId: "myBtn3"
    },
  // Add more card data here...
];

// Loop through the cards array
for (var i = 0; i < cards.length; i++) {
      // Get the button that opens the modal
      var btn = document.getElementById(cards[i].buttonId);

      var cardIndex = i; // This is the variable you want to pass

      btn.onclick = (function(cardIndex) {
        return function() {
          modal.style.display = "block";
          $( "#p2" ).load( cards[cardIndex].htmlFile);
        };
      })(cardIndex);
  
  }


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  
}