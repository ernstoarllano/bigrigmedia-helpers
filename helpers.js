/**
 * isExternal
 *
 * Determine if an anchors url is external
 *
 * @param {object} link - The anchor to check
 *
 * @return {boolean}
 */
const isExternal = (link) => {
  if (!link.host) return

  return link.host !== window.location.host
}

/**
 * isEmpty
 *
 * Determine if an element's innerHTML is empty
 *
 * @param {object} element - The element to potentially remove
 */
const isEmpty = (element) => {
  if (!element) return

  if (element.innerHTML === '') element.remove()
}

/**
 * disableContext
 *
 * Prevent the default right menu click
 *
 * @param {object} element - The element that will get disabled
 */
const disableContext = (element) => {
  if (!element) return

  element.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
}

/**
 * observeElements
 *
 * Determine if element is entering the frame
 *
 * @param {array} elements - The elements to watch
 */
const observeElements = (elements) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
      handleImage(element)
    }
  })
}

/**
 * handleImage
 *
 * Set an element's background
 *
 * @param {object} element - The element to set a background to
 */
const handleImage = (element) => {
  const mobileBG = element.target.dataset.mobile
  const desktopBG = element.target.dataset.mobile

  if (!mobileBG && !desktopBG) return

  if (window.matchMedia('(min-width: 1024px)').matches) {
    element.target.style.backgroundImage = `url(${mobileBG})`
  } else {
    element.target.style.backgroundImage = `url(${desktopBG})`
  }

  element.target.classList.add('has-loaded')
}

/**
 * dropdownState
 * 
 * Set a dropdowns visibility state
 * 
 * @param {object} event - The click event listener
 */
const dropdownState = (event) => {
  let currentDropdown = event.currentTarget
  let currentAnchor = event.target

  const parentAnchor = currentDropdown.children[0]
  const dropdowns = document.querySelectorAll('.menu-item-has-children')

  if (currentAnchor == parentAnchor) {
    event.preventDefault()
  } else {
    return
  }

  dropdowns.forEach(dropdown => {
    if (currentDropdown == dropdown) {
      currentDropdown.classList.add('is-open')

      return
    }

    dropdown.classList.remove('is-open')
  })
}