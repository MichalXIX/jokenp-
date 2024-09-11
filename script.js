const whoWhon = document.querySelector('.who-whon')
const player = document.querySelector('.player')
const machineX = document.querySelector('.machineX')

scoreplayer = 0
scoreMachineX = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = ( )=> {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randonChoices = choices[randomIndex]
    return randonChoices
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human +' '+'Maquina: ' + machine)

    if (human === machine) {
        whoWhon.innerHTML = 'Empate!'
    } else if (
        human === 'rock' && machine === 'scissors' ||
        human === 'paper' && machine === 'rock' ||
        human === 'scissors' && machine === 'paper') {
            scoreplayer++;
            whoWhon.innerHTML = 'Você ganhou!'
            player.innerHTML = scoreplayer
    } else {
        scoreMachineX ++
        whoWhon.innerHTML = 'A maquina ganhou!'
        machineX.innerHTML = scoreMachineX
    }
}