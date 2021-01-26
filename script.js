// namespace object 
const app = {}

// Hamburger nav function

// burger nav vanilla - get this working
// app.burgerNav = function() {
//     const hamburger = document.querySelector('.hamburger');
//     // const menu = document.querySelector('.hamburgerMenu');
//     // const top = document.querySelector('.hamburger span:nth-of-type(1)');
//     // const middle = document.querySelector('.hamburger span:nth-of-type(2)');
//     // const bottom = document.querySelector('.hamburger span:nth-of-type(3)')

//     hamburger.addEventListener('click', function() {
//         console.log("Click!");
//         // menu.classList.toggle('hamburgerMenuOpen');
//     });
// }

$('.clickOpen').click(function () {
    $('.hamburgerMenu')
        .toggleClass('hamburgerMenuOpen hamburgerMenuClosed');
    $('.hamburger span:nth-of-type(1)')
        .toggleClass('lineOne');
    $('.hamburger span:nth-of-type(2)')
        .toggleClass('lineTwo');
    $('.hamburger span:nth-of-type(3)')
        .toggleClass('lineThree');
})



// Function to copy Email Address in the contact section to the user's clipboard.
app.copy = function(elementId) {
    let aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

// initialize the app
app.init = function() {
    app.copy();
    app.toggleBurger();
    app.burgerNav();
}