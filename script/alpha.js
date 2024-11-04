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
        console.log('you got a point!!')

        const currentScore = getTextElementValueById('current-score')
        console.log('current score is', currentScore)
        const udatedScore = currentScore + 1
        setTextElementValueById('current-score', udatedScore)
        removeBackgroundColorById(expectedAlphabet)
        continueGame()



        // =================================================================
        // update the score
        // const currentScore = document.getElementById('current-score')
        // const currentScoreNumber = parseInt(currentScore.innerText)
        // currentScore.innerText = newScore
        // // start a new round
        // continueGame()
        // removeBackgroundColorById(expectedAlphabet)
        //==================================================================

    }
    else {
        console.log('you lost a point!!')
        // // update the life count
        // const currentLife = document.getElementById('current-life')
        // const currentLifeNumber = parseInt(currentLife.innerText)
        // const newLife = currentLifeNumber - 1
        // currentLife.innerText = newLife 


        // // check if the life count is 0


        const currentLife = getTextElementValueById('current-life')
        console.log('current life is', currentLife)
        const udatedLife = currentLife - 1
        setTextElementValueById('current-life', udatedLife)

        if(udatedLife === 0){
            alert('Game Over')
            window.location.reload()
        }



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
