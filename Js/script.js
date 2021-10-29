// const themeSwitcher = document.querySelector(".theme-switcher");
// let currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//   if (currentTheme === "dark") {
//     themeSwitcher.children[0].classList.remove("active");
//     themeSwitcher.children[1].classList.add("active");
//   } else if (currentTheme === "light") {
//     themeSwitcher.children[0].classList.add("active");
//     themeSwitcher.children[1].classList.remove("active");
//   }
// }

// themeSwitcher.addEventListener("click", function (e) {
//   if (this.children[0].classList.contains("active")) {
//     this.children[1].classList.add("active");
//     this.children[0].classList.remove("active");
//     document.documentElement.setAttribute("data-theme", "dark");
//     localStorage.setItem("theme", "dark");
//   } else if (this.children[1].classList.contains("active")) {
//     this.children[0].classList.add("active");
//     this.children[1].classList.remove("active");
//     document.documentElement.setAttribute("data-theme", "light");
//     localStorage.setItem("theme", "light");
//   }
// });

const tabContainer = document.querySelector(".overview");
const tabsButton = document.querySelectorAll(".overview__btn");
const tabsContent = document.querySelectorAll(".overview__wrapper");

tabContainer.addEventListener("click", function (e) {
  let id = e.target.dataset.category;
  if (!id) return;

  tabsButton.forEach((tabBtn) => {
    tabBtn.classList.remove("overview__btn--active");
  });

  e.target.classList.add("overview__btn--active");

  tabsContent.forEach((tabContent) => {
    tabContent.classList.remove("overview__wrapper--active");
  });

  const contentElement = document.querySelector(`#${id}`);
  contentElement.classList.add("overview__wrapper--active");
});
