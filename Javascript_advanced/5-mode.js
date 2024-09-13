function changeMode(size, weight , transform, background, color){
    return function() {
        return function() {
            document.body.style.fontSize = size + 'px';      // Set font size in pixels
            document.body.style.fontWeight = weight;         // Set font weight
            document.body.style.textTransform = transform;   // Set text transform
            document.body.style.backgroundColor = background; // Set background color
            document.body.style.color = color;               // Set text color
        };
    }
}
function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green')
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white')
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Welcome Holberton!'
    document.body.appendChild(paragraph)
    const BTN = document.createElement("button")
    const BTN_text = document.createTextNode("spooky")
    BTN.appendChild(BTN_text)
    document.body.appendChild(BTN)
    BTN.onclick = () => {
        spooky()
    }
    const BTN_dark = document.createElement("button")
    const BTN_text_dark = document.createTextNode("darkMode")
    BTN.appendChild(BTN_text_dark)
    document.body.appendChild(BTN_dark)
    BTN_dark.onclick = () => {
        darkMode()
    }
    const BTN_scream = document.createElement("button")
    const BTN_text_scream = document.createTextNode("spooky")
    BTN.appendChild(BTN_text_scream)
    document.body.appendChild(BTN_scream)
    BTN_scream.onclick = () => {
        spooky()
    }
    
}
main()