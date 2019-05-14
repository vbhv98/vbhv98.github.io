const menuToggle = document.querySelector('#menu-switch')
const menu = document.querySelector('#menu')
const strokes = Array.from(menuToggle.querySelectorAll('span'))
const menuItems = Array.from(menu.querySelectorAll('.menu-item'))
const sections = Array.from(document.querySelectorAll('section'))

const MenuToggleListener = e => {
  menu.classList.toggle('open')
  strokes.forEach(stroke => stroke.classList.toggle('back'))
}

menuToggle.addEventListener('click', MenuToggleListener)
menu.addEventListener('click', MenuToggleListener)

const menuItemHoverListener = e => {
  menuItems.forEach(menuItem => {
    if (menuItem.innerText !== e.target.innerText)
      menuItem.classList.remove('active')
    else menuItem.classList.add('active')
  })

  const visibleSectionId = '#' + e.target.innerText.toLowerCase()
  console.log(visibleSectionId)
  sections.forEach(section => {
    section.classList.remove('visible')
  })
  document.querySelector(visibleSectionId).classList.add('visible')
}

menuItems.forEach(menuItem =>
  menuItem.addEventListener('mouseover', menuItemHoverListener),
)

const newLocal = 'vaibhavb98.vb@gmail.com'
document.querySelector('#contact h2').addEventListener('click', () => {
  cpy(newLocal)
})
