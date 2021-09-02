import './style.css'

let teamOneScore = 0
let teamTwoScore = 0
const addOneToTeamOneScore = document.querySelector('i.team1add')
const addOneToTeamTwoScore = document.querySelector('i.team2add')
const subtractOneFromTeamOneScore = document.querySelector('i.team1subtract')
const subtractOneFromTeamTwoScore = document.querySelector('i.team2subtract')
const resetBothTeamScores = document.querySelector('.reset')

function handleClickButton(event: MouseEvent) {
  event.stopPropagation()
  event.preventDefault()

  const buttonClicked = event.target
  const teamOneHeader = document.querySelector('h3.team1')
  const teamTwoHeader = document.querySelector('h3.team2')

  if (buttonClicked instanceof HTMLElement) {
    if (buttonClicked.classList.contains('team1add')) {
      if (teamOneScore < 21) {
        teamOneScore++
      }
    }
    if (buttonClicked.classList.contains('team2add')) {
      if (teamTwoScore < 21) {
        teamTwoScore++
      }
    }

    if (buttonClicked.classList.contains('team1subtract')) {
      if (teamOneScore > 0) {
        teamOneScore--
      }
    }
    if (buttonClicked.classList.contains('team2subtract')) {
      if (teamTwoScore > 0) {
        teamTwoScore--
      }
    }

    if (buttonClicked.classList.contains('reset')) {
      teamOneScore = 0
      teamTwoScore = 0
    }

    if (teamOneHeader instanceof HTMLHeadingElement) {
      teamOneHeader.textContent = `${teamOneScore}`
    }
    if (teamTwoHeader instanceof HTMLHeadingElement) {
      teamTwoHeader.textContent = `${teamTwoScore}`
    }
  }
}

if (addOneToTeamOneScore instanceof HTMLElement) {
  addOneToTeamOneScore.addEventListener('click', handleClickButton)
}

if (addOneToTeamTwoScore instanceof HTMLElement) {
  addOneToTeamTwoScore.addEventListener('click', handleClickButton)
}

if (subtractOneFromTeamOneScore instanceof HTMLElement) {
  subtractOneFromTeamOneScore.addEventListener('click', handleClickButton)
}

if (subtractOneFromTeamTwoScore instanceof HTMLElement) {
  subtractOneFromTeamTwoScore.addEventListener('click', handleClickButton)
}

if (resetBothTeamScores instanceof HTMLElement) {
  resetBothTeamScores.addEventListener('click', handleClickButton)
}
