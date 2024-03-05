let mouseCursor = document.querySelector(".cursor");
const projectItem = document.querySelectorAll(".project-wrapper-contents-item")
const designItem = document.querySelectorAll(".design-project-item.reveal-up .image")
const gnbSideBar = document.querySelector(".gnb-right")
const buttons = document.querySelectorAll("button.btn-18")

const inputs = document.querySelectorAll('.contact-form-wrapper input')
const textarea = document.querySelector('.contact-form-wrapper textarea')

const sideBarItem = document.querySelectorAll('.sidebar-nav li')

const footerMail = document.querySelector('.global-footer-item address')

function cursor(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  mouseCursor.style.left = mouseX + 'px';
  mouseCursor.style.top = mouseY + 'px';
}

projectItem.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("cursor-link");
  })
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-link");
  });
})

designItem.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("cursor-link");
  })
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-link");
  });
})

buttons.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("cursor-active");
  })
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-active");
  });
})

inputs.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("cursor-point");
  })
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-point");
  });
})

sideBarItem.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("cursor-point");
  })
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-point");
  });
})

textarea.addEventListener('mouseover', () => {
  mouseCursor.classList.add("cursor-point");
})
textarea.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove("cursor-point");
})

footerMail.addEventListener('mouseover', () => {
  mouseCursor.classList.add("cursor-point");
})
footerMail.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove("cursor-point");
})

gnbSideBar.addEventListener('mouseover', () => {
  mouseCursor.classList.add("cursor-point");
})
gnbSideBar.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove("cursor-point");
})

document.addEventListener("mousemove", cursor);
window.addEventListener("scroll", cursor);