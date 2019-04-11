import { dropdownState } from './helpers'

const body = document.querySelector('body')
const navToggle = document.querySelector('.js-toggle-nav')
const dropdowns = document.querySelectorAll('.menu-item-has-children')

// Handle toggling mobile menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-is-open')
  })
}

// Handle dropdowns visibility state
if (window.matchMedia('(max-width: 1023px)').matches) {
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', dropdownState)
  })
}