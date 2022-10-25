// Pick color and save it in a global variable
// Change the background color of the color input

// Get slider number and save it in a global variable
// Update the value of squares

// Calculate the length of each square
// Calculate the number of squares to put inside the sketchpad

// Create a square div and put all the attributes
// Add the squares to the sketchpad wrap

// Add event listeners to the squares
// If right click is pressed and hover, 
// change the background color of the div
let color = ''
let numberOfSquares = 16
let squareLength = 32
const sketchpadLength = 512
let totalNumberOfSquares = numberOfSquares * numberOfSquares


// Set the length of each square
const setSquareLength = () => {
    squareLength = 
        Math.round(sketchpadLength / numberOfSquares).toFixed(1)

    // Set total number of squares needed
    totalNumberOfSquares = numberOfSquares * numberOfSquares
}

// Set number of squares
const setNumberOfSquares = () => {
    const spanSquares = document.querySelector("#spanSquares")
    const inputRange = document.querySelector('#inputRange')

    // Set listener
    inputRange.addEventListener('input', e => {
        numberOfSquares = inputRange.value
        spanSquares.textContent = inputRange.value
    })

    // Set the length of each square
    setSquareLength()
}
setNumberOfSquares()

// Pick Color
const pickColor = () => {
    const inputColor = document.querySelector("#color")
    
    // Set listener
    inputColor.addEventListener('input', e => {
        color = inputColor.value
        inputColor.setAttribute('style', `background-color: ${color}` )
    })
}
pickColor()