import './style.css'

let teamOneScore = 0
let teamTwoScore = 0

function handleClickButton(event: MouseEvent) {
  event.stopPropagation()
  event.preventDefault()

  const buttonClicked = event.target

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

    const teamOneHeader = document.querySelector('h3.team1')
    if (teamOneHeader instanceof HTMLHeadingElement) {
      teamOneHeader.textContent = `${teamOneScore}`
    }
    const teamTwoHeader = document.querySelector('h3.team2')
    if (teamTwoHeader instanceof HTMLHeadingElement) {
      teamTwoHeader.textContent = `${teamTwoScore}`
    }
  }
}

const addOneTeamOneScore = document.querySelector('i.team1add')
if (addOneTeamOneScore instanceof HTMLElement) {
  addOneTeamOneScore.addEventListener('click', handleClickButton)
}

const addOneTeamTwoScore = document.querySelector('i.team2add')
if (addOneTeamTwoScore instanceof HTMLElement) {
  addOneTeamTwoScore.addEventListener('click', handleClickButton)
}

const subtractOneTeamOneScore = document.querySelector('i.team1subtract')
if (subtractOneTeamOneScore instanceof HTMLElement) {
  subtractOneTeamOneScore.addEventListener('click', handleClickButton)
}

const subtractOneTeamTwoScore = document.querySelector('i.team2subtract')
if (subtractOneTeamTwoScore instanceof HTMLElement) {
  subtractOneTeamTwoScore.addEventListener('click', handleClickButton)
}
