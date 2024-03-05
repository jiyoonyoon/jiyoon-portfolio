const contactSection = document.querySelector('.contact')
const footerSection = document.querySelector('.global-footer')
const footerButton = footerSection.querySelector('.global-footer-item button')
const SCROLLDOWN = "Scroll Down"
const SCROLLUP = "Scroll Up"

const iconTge = document.createElement('i')
iconTge.classList.add('ic-right')
iconTge.setAttribute('aria-hidden', true)

function changingValue() {
  const contactSectionHeight = window.scrollY + contactSection.getBoundingClientRect().top

  let winscrollBottom = window.scrollY + window.innerHeight * 0.25;

  if (contactSectionHeight <= winscrollBottom) {
    contactSection.classList.add('is-active')
  } else {
    contactSection.classList.remove('is-active')
  }

}

function footerVisibility() {
  let footerSectionHeight = window.scrollY + contactSection.getBoundingClientRect().bottom - 10

  let winscrollFooter = window.scrollY + window.innerHeight

  if (footerSectionHeight <= winscrollFooter) {
    if (footer.classList.contains('is-hidden')) {
      footerSection.classList.remove('is-hidden')

      if (!footer.classList.contains('is-hidden')) {
        iconTge.classList.add('up')
        footerButton.innerHTML = SCROLLUP
        footerButton.prepend(iconTge)
      }
    } else {
      footerSection.classList.add('is-hidden')
    }
  } else {
    if (!footer.classList.contains('is-hidden')) {
      iconTge.classList.remove('up')
      footerButton.innerHTML = SCROLLDOWN
      footerButton.appendChild(iconTge)
    }
  }
}

function init() {
  changingValue()
  footerVisibility()
};

window.addEventListener('load', changingValue)
window.addEventListener('load', footerVisibility)
window.addEventListener('resize', changingValue)
window.addEventListener('scroll', changingValue)
window.addEventListener('scroll', footerVisibility)

init()