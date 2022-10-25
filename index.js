// Pick color and save it in a global variable
// Change the background color of the color input

// Get slider number and save it in a global variable
// Update the value of squares

// Calculate the length of each square
// Calculate the number of squares to put inside the sketchpad

// Create a square div and put all the attributes
// Clear the current squares added
// Add the squares to the sketchpad wrap

// Add listener for mouse down and mouse up events

// Add event listeners to the squares
// If right click is pressed and hover, 
// change the background color of the div
let color = '#000000'
let numberOfSquares = 16
let squareLength = 32
const sketchpadLength = 512
let totalNumberOfSquares = numberOfSquares * numberOfSquares
let isMouseDown = false



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



// Create a square div
const createSquareDiv = () => {
    const square = document.createElement('div')
    square.setAttribute('style', `
    width: ${squareLength}px; 
    height: ${squareLength}px; `)
    
    return square
}



// Add event listeners to the squares
const addSquaresEventlistener = () => {
    const sketchpad = document.querySelector('.sketchpadWrap')
    const squares = sketchpad.querySelectorAll('div')
    squares.forEach(square => {
        square.addEventListener('mouseover', e => {
            if (isMouseDown) {
                square.setAttribute('style', `
                width: ${squareLength}px; 
                height: ${squareLength}px;
                background-color: ${color}; `)
            }
        })
    })
}


// Add squares to the sketchpad
const addSquaresToSketchpad = () => {
    const sketchpad = document.querySelector('.sketchpadWrap')

    // Get the created div and append it to the sketchpad
    for (let i = 0; i < totalNumberOfSquares; i++) {
        const child = createSquareDiv()
        sketchpad.appendChild(child)
    }

    // Call function to add event listeners for the squares
    addSquaresEventlistener()
}



// Clear squares in sketchpad
const clearSquaresInSketchpad = () => {
    const sketchpad = document.querySelector('.sketchpadWrap')

    // Get all the squares
    const squares = sketchpad.querySelectorAll('div')

    // Loop through the squares and remove first child element from sketchpad
    squares.forEach(square => {
        sketchpad.removeChild(sketchpad.firstElementChild)
    })

    // Call function to add square to sketchpad
    addSquaresToSketchpad()
}


// Set total number of squares needed
const setTotalNumberOfSquares = () => {
    totalNumberOfSquares = numberOfSquares * numberOfSquares

    // Call the function to clear current squares
    clearSquaresInSketchpad()
}



// Set the length of each square
const setSquareLength = () => {
    squareLength = 
        sketchpadLength / numberOfSquares

    // Call the function to set the total number of squares needed
    setTotalNumberOfSquares()
}



// Set number of squares
const setNumberOfSquares = () => {
    const spanSquares = document.querySelector("#spanSquares")
    const inputRange = document.querySelector('#inputRange')

    // Set listener
    inputRange.addEventListener('input', e => {
        numberOfSquares = inputRange.value
        spanSquares.textContent = inputRange.value

        // Set the length of each square
        setSquareLength()
    })

    // Set the length of each square
    setSquareLength()
}
setNumberOfSquares()



// Set mouse down and up listeners
document.body.onmousedown = () => isMouseDown = true
document.body.onmouseup = () => isMouseDown = false