// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to create card HTML
function createCard(card, index) {
    let iconsHtml = '';
    if (card.icons) {
        iconsHtml = card.icons.map(icon => `<div class="icon-img"><img src="${icon}" class="icon-img" width="20" height="20"></div>`).join('');
    }

    // Check if htmlFile property exists
    const readMoreButton = card.htmlFile ? `<button id="myBtn${index}" class="button style4">Read more</button>` : '';

    return `
        <div class="card-1 card-div">
            <div class="card-div-parent">
                <div class="like-icon-div">${iconsHtml}</div>
                <div class="gow-img-div img-div">
                    <img src="${card.imgSrc}">
                </div>
                <div class="text-container">
                    <p class="item-title">${card.title}
                        ${readMoreButton}
                    </p>
                    <p class="company-name">${card.company}</p>
                    <p class="position-text">${card.position}</p>
                    <p class="date">${card.date}</p>
                </div>
            </div>
        </div>
    `;
}


// Fetch and process JSON data
fetch('../../Data/projects.json')
    .then(response => response.json())
    .then(cards => {
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
    });

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
