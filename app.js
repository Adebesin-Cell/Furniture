const harmburger = document.querySelector(".harmburger");
const closeButton = document.querySelector(".close");
const headerBox = document.querySelector(".mobile-header__box");
const linkItem = document.querySelectorAll(".mobile-header__navigation li");
const navigationLink = document.querySelectorAll(".mobile-header__navigation__link");
const buttonBox = document.querySelector(".mobile-header__btn-box");

// console.log(harmburger, closeButton, headerBox, linkItem);
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

// navigationLink.addEventListener ("click", () => {
//       navigationLink.forEach(navLink => {
//             navLink.classList.remove("open");
//       })
// })
buttonBox.addEventListener ("click", () => {
      headerBox.classList.remove("open");
})
navigationLink.forEach (navlink => {
      navlink.addEventListener("click", () => {
            headerBox.classList.remove("open");
      })
})