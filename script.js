function cliCopy() {
    navigator.clipboard.writeText("npm i -g the-emojiscript");
    let copied = document.getElementById("copied");
    copied.style.transform = "translateX(0px)";
    setTimeout(() => {
        copied.style.transform = "translateX(125px)";
    }, 3000);
}

function copyalert() {
    let copied = document.getElementById("copied");
    copied.style.transform = "translateX(105px)";
}

function eraseText() {
    document.getElementById("editor").value = "";
}
/*
function output() {
    const output = document.getElementById('output');
    let editor = document.getElementById('editor');
    let outputText = document.getElementById('output-text')
    outputText.innerText = editor.value;
    output.style.display = "block";
}
*/
// let overlay = document.getElementById('overlay');
// let toggleMenu = document.getElementById('toggleMenu');
