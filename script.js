const whoWhon = document.querySelector('.who-whon')
const player = document.querySelector('.player')
const machineX = document.querySelector('.machineX')

const GAME_OPTIONS = {
    PAPER: 'paper',
    ROCK: 'rock',
    SCISSORS: 'scissors'
}


scoreplayer = 0
scoreMachineX = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = ( )=> {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randonChoices = choices[randomIndex]
    return randonChoices
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human +' '+'Maquina: ' + machine)

    if (human === machine) {
        whoWhon.innerHTML = 'Empate!'
    } else if (
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
            scoreplayer++;
            whoWhon.innerHTML = 'Você ganhou!'
            player.innerHTML = scoreplayer
    } else {
        scoreMachineX ++
        whoWhon.innerHTML = 'A maquina ganhou!'
        machineX.innerHTML = scoreMachineX
    }
}