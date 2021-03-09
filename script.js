const inputNav = document.querySelector('.input-container input')
const buttonSearchNav = document.querySelector('.center-scope button')
const buttonClearNavInput = document.querySelector('.input-container i')
const html = document.getElementsByTagName('html')[0]

function disableSearchButton() {
  buttonSearchNav.disabled = true
  buttonSearchNav.classList.add('disable')
  buttonClearNavInput.style.display = 'none'
}

function enableSearchButton() {
  buttonSearchNav.disabled = false
  buttonSearchNav.classList.remove('disable')
  buttonClearNavInput.style.display = 'block'
}

function verifyValueOfNavInput() {
  if (inputNav.value === '') {
    disableSearchButton()
  }  else {
    enableSearchButton()
  }
}

inputNav.addEventListener('keydown', () => verifyValueOfNavInput())
inputNav.addEventListener('keyup', () => verifyValueOfNavInput())

function clearNavInput() {
  inputNav.value = ''
  disableSearchButton()
}

disableSearchButton()

function darkmode() {
  html.classList.toggle('dark')
}