let navBar = document.querySelector(".header__menu")
let logo = document.querySelector(".header__img")
let pages = document.querySelectorAll(".header__menu li")
let lastScrollTop = 0
let headerHidden = false
let colorCard = document.querySelectorAll(".projets__content__card")

if (window.matchMedia("(pointer : fine)").matches) {
  window.addEventListener("mousemove" , Projbouge)
  window.addEventListener("mouseout" , Projpart)
}

window.addEventListener("scroll" , scrollHeader)


pages.forEach(page => page.addEventListener("mouseenter" , () =>{
  let titleLink = page.querySelector(".lien")
  titleLink.style.transform = "scale(1.05)"
  titleLink.style.color = "#fff"
}))
pages.forEach(page => page.addEventListener("mouseleave" , () =>{
  let titleLink = page.querySelector(".lien")
  titleLink.style.transform = "scale(1)"
  titleLink.style.color = "rgba(240, 240, 240, 0.8)"
}))


function Projbouge(e){
  colorCard.forEach(card =>{
    let proj = card.querySelector(".projecteur")
    let cardRect = card.getBoundingClientRect()
    proj.style.opacity = "1"
    proj.style.transform = `translate(calc(${e.clientX - cardRect.left}px - 50%) , calc(${e.clientY  - cardRect.top}px - 50%))`
  })
}
function Projpart(e){
  colorCard.forEach(card => {
    let proj = card.querySelector(".projecteur")
    proj.style.opacity = "0"
  });
}

function scrollHeader(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Si on scrolle vers le bas et qu'on a dépassé 50px, cache le header
    navBar.style.top = "-100px";
    logo.style.top = "-200px";
    headerHidden = true; // On marque que le header a été caché
  } else if (scrollTop < lastScrollTop && headerHidden) {
    // Si on remonte ET que le header avait été caché, on l'affiche
    navBar.style.top = "40px";
    logo.style.top = "20px";

  }
  lastScrollTop = scrollTop
}