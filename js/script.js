function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const filterBox = document.querySelectorAll(".portfolio__img")

document.querySelector(".portfolio__menu").addEventListener("click", event => {
    if (event.target.tagName !== "LI") return false;

    let filterClass = event.target.dataset["filter"]

    filterBox.forEach(elem => {
        elem.classList.remove("hide")
        if (!elem.classList.contains(filterClass) && filterClass !== "all") {
            elem.classList.add("hide")
        }
    })
})

let links = document.querySelectorAll(".portfolio__link")

links.forEach(elem => {
    elem.onclick = filter
})

function filter() {
    for (let key of links) {
        key.classList.remove("link-active")
    }
}

links.forEach(elem => {
    elem.addEventListener("click", event => {
        elem.classList.add("link-active")
    })
})


const menuLinks = document.querySelectorAll(".main-screen-link[data-goto]")

if (menuLinks.length > 0) {

    menuLinks.forEach(elem => {
        elem.addEventListener("click", e => {
            const menuLink = elem
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const goToBlock = document.querySelector(menuLink.dataset.goto);
                const goToBlockValue = goToBlock.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: goToBlockValue,
                    behavior: "smooth"
                });
                elem.preventDefault()
            }
        })
    })
}
