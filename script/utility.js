function hideElementById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementID) {
    const elementValueText = document.getElementById(elementID)
    const value = parseInt(elementValueText.innerText)
    return value
}
function setTextElementValueById(elementID, value) {
    const elementValueText = document.getElementById(elementID)
    elementValueText.innerText = value
}

function getElementTextById(elementID) {
    const elementValueText = document.getElementById(elementID)
    const value = elementValueText.innerText
    return value
}


function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    // get random number between 0 and 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)

    const alphabet = alphabets[index]
    // console.log(index, alphabet)
    return alphabet;
}


// words per second
// add words per second

