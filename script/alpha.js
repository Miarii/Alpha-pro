// function play(){
//     // STEP 1: hide the home screen. to hide the screen add class to hidden to the home section
//     // STEP 2: show the game screen 
//     const home = document.getElementById('home-screen')
//     home.classList.add('hidden')

//     const playground = document.getElementById('playgroundx')
//     playground.classList.remove('hidden')

// }

function handleKeyboardKeyupEvent(event) {
    // get the key pressed by the player
    const pressedKey = event.key
    console.log('pressed key is', pressedKey)

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase()
    console.log('expected alphabet is', expectedAlphabet)


    // compare the pressed key with expected alphabet
    if (pressedKey === expectedAlphabet) {
        console.log('you win')
    }
    else {
        console.log('you lose')
    }
}
    // capture keyboard button press event
    document.addEventListener('keydown', handleKeyboardKeyupEvent)


    function continueGame() {
        // STEP 1: generate a random alphabet
        const alphabet = getRandomAlphabet()
        console.log('you alphabet is', alphabet)
        // STEP 2: set random aalphabet to the box
        const currentAlphabetElement = document.getElementById('current-alphabet')
        currentAlphabetElement.innerText = alphabet
        // set background color in kb
        setBackgroundColorById(alphabet)

    }


    function play() {
        hideElementById("home-screen")
        showElementById("playgroundx")
        continueGame()
    }
