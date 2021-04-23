const harmburger = document.querySelector(".harmburger");
const closeButton = document.querySelector(".close");
const headerBox = document.querySelector(".mobile-header__box");
const linkItem = document.querySelectorAll(".mobile-header__navigation li");
const navigationLink = document.querySelectorAll(".mobile-header__navigation__link");
const buttonBox = document.querySelector(".mobile-header__btn-box");

harmburger.addEventListener("click", () => {
      headerBox.classList.add("open");
      linkItem.forEach(link => {
            link.classList.add("fade");
      })
})

closeButton.addEventListener("click", () => {
      headerBox.classList.remove("open");
      linkItem.forEach(link => {
            link.classList.remove("fade");
      })
})

buttonBox.addEventListener ("click", () => {
      headerBox.classList.remove("open");
})
navigationLink.forEach (navlink => {
      navlink.addEventListener("click", () => {
            headerBox.classList.remove("open");
      })
})