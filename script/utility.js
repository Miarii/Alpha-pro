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