document.addEventListener("keydown", function(event) {
    alert(`ASCII Code: ${event.keyCode}`);

    if (event.altKey) {
        alert("Alt key is pressed");
    }
    if (event.ctrlKey) {
        alert("Ctrl key is pressed");
    }
    if (event.shiftKey) {
        alert("Shift key is pressed");
    }
});
