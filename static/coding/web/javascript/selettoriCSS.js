function seleziona(selector) {
    let elements = document.querySelectorAll(selector);
    for (element of elements) {
        alert(element.innerHTML);
    }
}
