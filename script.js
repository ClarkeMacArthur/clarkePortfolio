// namespace object 
const app = {}


// hamburger nav
app.nav = $('.clickOpen').click(function () {
        // opens and closes the menu
    $('.hamburgerMenu')
        .toggleClass('hamburgerMenuOpen hamburgerMenuClosed');
        // transforming hamburger icon
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
    app.nav();
}

// document ready
$(document).ready(function() {
    app.init();
});