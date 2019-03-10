const heroBackground = document.querySelector('.js-hero')
const heroContent = document.querySelector('.js-hero-content')

// Handle hero background
if (heroBackground) {
  const mobileHero = heroBackground.dataset.mobile
  const desktopHero = heroBackground.dataset.desktop

  if (!mobileHero && !desktopHero) return

  heroBackground.classList.add('has-background')

  if (window.matchMedia('(min-width: 1024px)').matches) {
    heroBackground.style.backgroundImage = `url(${desktopHero})`
  } else {
    heroBackground.style.backgroundImage = `url(${mobileHero})`
  }
}

// Handle hero content
if (heroContent) {
  heroContent.parentNode.classList.add('has-content')
}