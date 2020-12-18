
// Simple function to copy Email Address in the contact section to the user's clipboard.
function copyToClipboard(elementId) {
    let aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}