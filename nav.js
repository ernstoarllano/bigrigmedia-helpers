const body = document.querySelector('body')
const navToggle = document.querySelector('.js-toggle-nav')
const dropdownAnchor = document.querySelector('.menu-item-has-children')
const dropdownAnchors = [].slice.call(document.querySelectorAll('.menu-item-has-children'))

// Handle toggling mobile menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-is-open')
  })
}

// Handle mobile menu dropdowns
if (window.matchMedia('(max-width: 1199px)').matches) {
  dropdownAnchor.addEventListener('click', function (e) {
    const firstAnchor = this.children[0]

    if (e.target !== firstAnchor) {
      return
    } else {
      e.preventDefault()
    }

    dropdownAnchors.forEach(anchor => {
      if (this == anchor) {
        this.classList.toggle('is-open')

        return
      }

      anchor.classList.remove('is-open')
    })
  })
}