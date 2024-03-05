const contents = document.querySelector('.contents');
const aboutMe = document.querySelector('.about-me');
const footer = document.querySelector('.global-footer');
const contact = document.querySelector('.contact');

let winScrollTop;
let sectionIsMoving = false;

function setProperty() {
  winScrollTop = window.scrollY
  sectionMainTop = winScrollTop + contents.getBoundingClientRect().top;
  sectionMainBottom = contents.offsetHeight

  sectionContactBottom = contact.getBoundingClientRect().top;
}

function moveStartRender() {
  setProperty()

  if (!footer.classList.contains('is-hidden')) {
    footer.classList.add('is-hidden')

    $('html').stop(true).animate({
      scrollTop: sectionMainBottom + 1
    }, 500, function () {
      sectionIsMoving = false;
    })
  } else {
    footer.classList.remove('is-hidden')

    $('html').stop(true).animate({
      scrollTop: sectionMainTop
    }, 500, function () {
      sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
    })
  }
}

function moveSection() {
  setProperty()

  if (winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) {
    if (!sectionIsMoving) {
      sectionIsMoving = true;
      moveStartRender();
    }
  }

  if (winScrollTop >= sectionMainBottom) {
    footer.classList.add('is-hidden')
  }
}

function init() {
  moveSection
};

window.addEventListener('load', moveSection)
window.addEventListener('resize', moveSection)
window.addEventListener('scroll', moveSection)

init()