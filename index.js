const range = document.querySelector('#range')
const squares = document.querySelector('#squares')
squares.textContent = range.value

const squareLength = 512

// range.oninput = () => {
//     squares.innerHTML = this.value
// }

range.addEventListener('input', (e) => {
    squares.textContent = range.value
})

range.addEventListener('click', (e) => {
    changeSketchpad(range.value)
})

const changeSketchpad = (squares) => {

}


// Change color
const color = document.querySelector('#color')
let colorValue = '#ff0000'
color.addEventListener('input', (e) => {
    colorValue = color.value
    color.setAttribute('style', `background-color: ${colorValue}`)
})