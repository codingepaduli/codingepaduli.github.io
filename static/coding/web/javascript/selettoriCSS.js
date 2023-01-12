/* eslint-disable-next-line no-unused-vars, jsdoc/require-jsdoc */
function seleziona(selector) {
    let elements = document.querySelectorAll(selector);
    for (let element of elements) {
        alert(element.innerHTML);
    }
}
