document.getElementById("myInput").addEventListener("keydown", function(event) {
    if (
        (event.keyCode >= 48 && event.keyCode <= 57) || 
        (event.keyCode >= 96 && event.keyCode <= 105) || 
        event.keyCode === 8 || event.keyCode === 46 || 
        (event.keyCode >= 37 && event.keyCode <= 40)
    ) {
    } else {
        event.preventDefault();
    }
});
