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

function handleUserInput(event: any) {
  event.stopPropagation()
  event.preventDefault()

  const userInput = event.target.value
  const teamOneNameHeader = document.querySelector('h2.team1')
  const teamTwoNameHeader = document.querySelector('h2.team2')

  if (teamOneNameHeader instanceof HTMLHeadingElement) {
    teamOneNameHeader.textContent = `${userInput}` || 'Team Name'
  }
  if (teamTwoNameHeader instanceof HTMLHeadingElement) {
    teamTwoNameHeader.textContent = `${userInput}` || 'Team Name'
  }
}

const changeTeamOneName = document.querySelector('.team-1-input')
if (changeTeamOneName instanceof HTMLElement) {
  changeTeamOneName.addEventListener('input', handleUserInput)
}
const changeTeamTwoName = document.querySelector('.team-2-input')
if (changeTeamTwoName instanceof HTMLElement) {
  changeTeamTwoName.addEventListener('input', handleUserInput)
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
