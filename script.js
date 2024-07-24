const body = document.body;
const colorCodeElement = document.getElementById("color-code");

body.addEventListener("click", changeBackgroundColor);
colorCodeElement.addEventListener("click", copyToClipboard);

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    colorCodeElement.textContent = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function copyToClipboard() {
    const colorCode = colorCodeElement.textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert(`Copied ${colorCode} to clipboard`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
