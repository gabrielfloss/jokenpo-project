const result = document.querySelector(".result")
const humanScore = document.querySelector("#humanScore")
const machineScore = document.querySelector("#alexaScore")

let humanScoreNumber = 0
let machineScoreNumber = 0


const GAME_OPTIONS = {
    PAPER: "paper",
    ROCK: "rock",
    SCISSORS: "scissors"
     

}

const playHuman = (humanChoise) => {

    playTheGame(humanChoise, playMachine())

}

const playMachine = () => {
    const choises = [ GAME_OPTIONS.ROCK , GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNuber = Math.floor(Math.random() * 3)

    return choises[randomNuber]

}

const playTheGame = (human, machine) => {

    console.log("Humano: " + human + "Maquina: " + machine)
    if (human === machine) {
        result.innerHTML = "O jogo Empatou"
    }
    else if ((human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    }
    else {
        machineScoreNumber ++
        machineScore.innerHTML= machineScoreNumber
        result.innerHTML = "A Alexa Ganhou!"
    }
}
