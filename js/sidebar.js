const sidebar = document.querySelector('.sidebar')
const sidebarMenuList = sidebar.querySelector('.sidebar-menu-list')
const sidebarButtonList = sidebarMenuList.querySelectorAll('button')
const sidebarButton = document.querySelector('.gnb-right .gnb-menu-button')
const overlay = document.querySelector('.overlay')

const TOP_HEADER_DASKTOP = 70;
const TOP_HEADER_TABLET = 80;
const TOP_HEADER_MOBILE = 65;

let disableUpdating = false

const gnbChangText = document.querySelector('.gnb-center .change-text')
const mainSectionText = "Hello :)"
const aboutSectionText = "About Jiyoon"
const projectSectionText = "Jiyoon's Project"
const designSectionText = "Design Story"
const contectSectionText = "Thank You ♥︎"


function sidebarToggle() {
  sidebar.classList.toggle('is-active')
  overlay.classList.toggle('is-open')
  sidebarButton.parentNode.classList.toggle('is-active')
}

sidebarButton.addEventListener('click', sidebarToggle)

function sidebarOverlayClick() {
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-open')
  sidebarButton.parentNode.classList.remove('is-active')
}

overlay.addEventListener('click', sidebarOverlayClick)



let currentActiveTab = sidebarMenuList.querySelector('.is-active')

function activeButton() {
  const buttonItem = this.parentNode

  if (currentActiveTab !== buttonItem) {
    disableUpdating = true
    buttonItem.classList.add('is-active')
    if (currentActiveTab !== null) {
      currentActiveTab.classList.remove('is-active')
    }
    currentActiveTab = buttonItem

    setTimeout(() => {
      disableUpdating = false
    }, 500)
  }
}

function scrollToButtonPanel() {
  const buttonPanelId = this.parentNode.getAttribute('aria-labelledby')
  const buttonPanel = document.querySelector('#' + buttonPanelId);

  const scrollAmount = buttonPanel.getBoundingClientRect().top - (window.innerWidth <= 1300 ? (window.innerWidth >= 768 ? TOP_HEADER_TABLET : TOP_HEADER_MOBILE) : TOP_HEADER_DASKTOP);

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth'
  })

}

sidebarButtonList.forEach((button, index) => {
  button.addEventListener('click', activeButton)
  button.addEventListener('click', function (event) {
    if (index === 3) {
      const contectPanelId = this.parentNode.getAttribute('aria-labelledby');
      const contectPanel = document.querySelector('#' + contectPanelId);

      const contectScrollAmount = contectPanel.getBoundingClientRect().top;

      window.scrollBy({
        top: contectScrollAmount,
        behavior: 'smooth'
      });
    } else {
      scrollToButtonPanel.call(this);
    }
  })
})

const buttonPanelIdList = [
  'about',
  'project',
  'design',
  'contact'
]

const buttonPanelList = buttonPanelIdList.map((panelId) => {
  const buttonPanel = document.querySelector('#' + panelId);
  return buttonPanel
})


const buttonPanelPositionMap = {}

function buttonPanelPosition() {
  buttonPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    buttonPanelPositionMap[id] = position
  })

  updateActiveButtonOnScroll()
}

function updateActiveButtonOnScroll() {
  if (disableUpdating) {
    return
  }

  const scrolldAmount = window.scrollY + (window.innerWidth <= 1300 ? (window.innerWidth >= 768 ? TOP_HEADER_TABLET + 10 : TOP_HEADER_MOBILE + 20) : TOP_HEADER_DASKTOP + 20);

  let newActiveButton
  if (scrolldAmount >= buttonPanelPositionMap['contact']) {
    newActiveButton = sidebarButtonList[3]
    gnbChangText.innerHTML = contectSectionText
  } else if (scrolldAmount >= buttonPanelPositionMap['design']) {
    newActiveButton = sidebarButtonList[2]
    gnbChangText.innerHTML = designSectionText
  } else if (scrolldAmount >= buttonPanelPositionMap['project']) {
    newActiveButton = sidebarButtonList[1]
    gnbChangText.innerHTML = projectSectionText
  } else if (scrolldAmount >= buttonPanelPositionMap['about']) {
    newActiveButton = sidebarButtonList[0]
    gnbChangText.innerHTML = aboutSectionText
  } else {
    gnbChangText.innerHTML = mainSectionText
  }

  if (newActiveButton) {
    newActiveButton = newActiveButton.parentNode
    newActiveButton.classList.add('is-active')
    if (newActiveButton !== currentActiveTab) {
      newActiveButton.classList.add('is-active')

      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveButton
    }
  } else {
    if (currentActiveTab !== null) {
      currentActiveTab.classList.remove('is-active')
    }
  }
}

window.addEventListener('load', buttonPanelPosition)
window.addEventListener('resize', _.throttle(buttonPanelPosition, 1000))
window.addEventListener('scroll', _.throttle(updateActiveButtonOnScroll, 300))