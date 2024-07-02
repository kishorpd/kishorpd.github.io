// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Array of card data
var cards = [
  {
      htmlFile: "Projects/Gazi.html",
      imgSrc: "images/Projects/marvel.png",
      title: "Marvel Heroes Omega",
      company: "Gazillion Entertainment",
      position: "Associate UI Engineer",
      date: "31/03/2021 _________ 31/03/2021"
  },
  {
      htmlFile: "Projects/GaziOmega.html",
      imgSrc: "images/Projects/avengers (1).png",
      title: "Another Project",
      company: "Another Company",
      position: "Senior Developer",
      date: "01/04/2021 _________ 01/04/2022",
      icons: [
          "images/Projects/Icons/unity.png",
          "images/Projects/Icons/C++.png"
      ]
  },
  {
      htmlFile: "Projects/FZero.html",
      imgSrc: "images/Projects/CandyTrap.png",
      title: "F-ZERO",
      company: "FIEA",
      position: "Programmer",
      date: "2015",
      icons: [
          "images/Projects/Icons/unity.png",
          "images/Projects/Icons/C++.png",
          "images/Projects/Icons/vr.png"
      ]
  },
    // Add more card data here...
];

// Function to create card HTML
function createCard(card, index) {
    let iconsHtml = '';
    if (card.icons) {
        iconsHtml = card.icons.map(icon => `<img src="${icon}" width="20" height="20">`).join('');
    }
    return `
        <div class="card-1 card-div">
            <div class="like-icon-div">${iconsHtml}</div>
            <div class="gow-img-div img-div">
                <img src="${card.imgSrc}">
            </div>
            <div class="text-container">
                <p class="item-title">${card.title}</p>
                <p class="company-name">${card.company}</p>
                <p class="position-text">${card.position}</p>
                <p class="date">${card.date}</p>
                <button id="myBtn${index}" class="button style4">Read more</button>
            </div>
        </div>
    `;
}

// Populate cards in the container
var container = document.querySelector(".container");
cards.forEach((card, index) => {
    container.innerHTML += createCard(card, index);
});

// Loop through the cards array
cards.forEach((card, index) => {
    var btn = document.getElementById(`myBtn${index}`);
    btn.onclick = function() {
        modal.style.display = "block";
        $("#p2").load(card.htmlFile);
    };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
