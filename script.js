// Efeito de click dos links na barra de navegação (Seguindo, procurar, etc)
const navLinks = document.querySelectorAll('.nav-link div:first-child')
const navDash = document.querySelectorAll('.link-dash')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveClasses()

    link.classList.add('click')
    console.log('a')
  })
})

function removeActiveClasses() {
  navLinks.forEach(link => {
    link.classList.remove('click')
  })
}


// Funções do input na barra de navegação
const inputNav = document.querySelector('.input-container input')
const buttonSearchNav = document.querySelector('.center-scope button')
const buttonClearNavInput = document.querySelector('.input-container i')

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


// Dark mode
const html = document.getElementsByTagName('html')[0]

function darkmode() {
  html.classList.toggle('dark')
}