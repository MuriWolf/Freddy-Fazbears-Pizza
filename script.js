const header = document.body.querySelector("header")
const mainTitle = document.querySelector(".main-title")
const subtitle = document.querySelector(".subtitle")
const headerImg = document.body.querySelector(".main-pizza-img")

const footer = document.querySelector(".footer")
const footerContent = document.querySelector(".footer-content")
const redesSociais = Array.from(footerContent.querySelector(".redes-sociais").children)

const pageHeight = document.documentElement.scrollHeight;
const windowHeight = window.innerHeight;


function changeNav() {
    if (scrollY >= headerImg.offsetHeight) {
        header.classList.add("fix-header")
        subtitle.style.display = "none"
        mainTitle.style.marginBottom = "20px"
    } else {
        header.classList.remove("fix-header")
        subtitle.style.display = "block"
        mainTitle.style.marginBottom = "0px"
    }
}

function showFooter() {
    if (scrollY+windowHeight >= pageHeight - footerContent.offsetHeight) {
        footerContent.classList.remove("hide")
        redesSociais.forEach(redeSocial => {
            redeSocial.classList.remove("hide")
        })
    } else {
        footerContent.classList.add("hide")
        redesSociais.forEach(redeSocial => {    
            redeSocial.classList.add("hide")
        })
    }
}

window.addEventListener("scroll", showFooter)
window.addEventListener("scroll", changeNav)