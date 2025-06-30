function ChangeFont(font) {
    document.getElementById("PAR").style.fontFamily = font;
}

function ChangeAlign(align) {
    document.getElementById("PAR").style.textAlign = align;
}

function ChangeHeight(height) {
    document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace(space) {
    document.getElementById("PAR").style.letterSpacing = space;
}

function ChangeIndent(indent) {
    document.getElementById("PAR").style.textIndent = indent;
}

function ChangeTransform(transform) {
    document.getElementById("PAR").style.textTransform = transform;
}

function ChangeDecorate(decorate) {
    document.getElementById("PAR").style.textDecoration = decorate;
}

function ChangeBorder(border) {
    if (border === "none") {
        document.getElementById("PAR").style.borderStyle = "none";
    } else {
        document.getElementById("PAR").style.borderStyle = border;
        document.getElementById("PAR").style.borderWidth = "2px";
    }
}

function ChangeBorderColor(color) {
    document.getElementById("PAR").style.borderColor = color;
}
