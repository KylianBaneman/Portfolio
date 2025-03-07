let pages = document.querySelectorAll(".header__menu li")


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
