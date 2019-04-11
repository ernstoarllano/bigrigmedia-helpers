import { isExternal, isEmpty } from './helpers'

const anchors = document.querySelectorAll('a')
const pTags = document.querySelectorAll('p')

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