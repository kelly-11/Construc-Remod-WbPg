let tabsList = ["Home", "About", "Gallery", "Contact", "FAQ"]

const header = document.querySelector(".header")

const title = document.createElement("div")
title.classList.add("title")
title.innerHTML = "<h1>El Kora</h1> <h2>Construction & Remodeling Co.</h2>"
header.appendChild(title)

const tabs = document.createElement("div")
tabs.classList.add("tabs")
tabs.innerHTML = `<ul> 
        <a href="#home"><li>${tabsList[0]}</li></a>
        <a href="#about"><li>${tabsList[1]}</li></a>
        <a href="#gallery"><li>${tabsList[2]}</li></a>
        <a href="#contact"><li>${tabsList[3]}</li></a>
        <a href="#faq"><li>${tabsList[4]}</li></a>
    </ul>`
header.appendChild(tabs)

const main = document.querySelector(".main")

const intro = document.createElement("div")
intro.classList.add("intro")
intro.innerHTML = "<h2>Quality work you can trust!</h2> <h2>Customer satisfaction GUARANTEED!</h2> <br> <h3>Transform your home today!<br> Contact for more information<br>619-000-0000</h3>"
main.appendChild(intro)

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 2 seconds
}
