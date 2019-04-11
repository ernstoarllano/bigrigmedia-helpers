import { isExternal, isEmpty, dropdownState } from './helpers'

const anchors = document.querySelectorAll('a')
const pTags = document.querySelectorAll('p')
const dropdowns = document.querySelectorAll('.menu-item-has-children')

// Handle external urls
anchors.forEach(anchor => {
  if (isExternal(anchor)) {
    // Define attributes to set
    const attributes = {
      target: '__blank',
      rel: 'noopener',
    }

    // Set attributes
    Object.keys(attributes).forEach(attribute => {
      anchor.setAttribute(attribute, attributes[attribute])
    })
  }
})

// Handle empty p tags
pTags.forEach(isEmpty)

// Handle dropdowns visibility state
if (window.matchMedia('(max-width: 1023px)').matches) {
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', dropdownState)
  })
}