function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    let color = `rgb(${red}, ${green}, ${blue})`;
    let hex = `#${parseInt(red).toString(16).padStart(2, '0')}${parseInt(green).toString(16).padStart(2, '0')}${parseInt(blue).toString(16).padStart(2, '0')}`;

    document.getElementById("colorBox").style.backgroundColor = color;
    document.getElementById("hexValue").textContent = hex.toUpperCase();
    document.getElementById("rgbValue").textContent = color;
}
