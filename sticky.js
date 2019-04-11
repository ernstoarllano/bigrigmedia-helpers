/**
 * Sticky
 */
class Sticky {
  /**
   * Initialize making an element sticky
   *
   * @param {object} element - The element that will get a sticky state
   */
  constructor(element) {
    this.element = element
    this.elementTop = this.element.getBoundingClientRect().top

    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  /**
   * Start the sticky state if condition is true
   *
   * @return {boolean} - The windows scrollY position is greater or equal to the elements position relative to the viewport
   */
  startStickyState() {
    return window.scrollY >= this.elementTop
  }

  /**
   * Set the element state
   *
   * @param {object} event - The window event
   */
  onScroll(event) {
    if (this.startStickyState()) {
      this.stickyState()
    } else {
      this.staticState()
    }
  }

  /**
   * Set element to sticky state
   */
  stickyState() {
    this.element.classList.add('is-sticky')
  }

  /**
   * Set element to static state
   */
  staticState() {
    this.element.classList.remove('is-sticky')
  }
}