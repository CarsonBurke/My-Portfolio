let navParent = document.getElementsByClassName("navParent")[0]

let navTopBar = document.getElementsByClassName("navTopBar")[0]
let navSideBar = document.getElementsByClassName("navSideBar")[0]
let navSideBarButton = document.getElementsByClassName("navSideBarButton")[0]

let navRightLeft = document.getElementsByClassName("navRightLeft")[0]
let navRightButtons = document.getElementsByClassName("navRightButton")

let bar1 = document.getElementsByClassName("bar1")[0]
let bar2 = document.getElementsByClassName("bar2")[0]
let bar3 = document.getElementsByClassName("bar3")[0]

window.addEventListener("load", tooBig)
window.addEventListener("resize", tooBig)

function tooBig() {
    if (window.innerWidth <= navParent.dataset.tooBig) {

        navRightLeft.style.display = "none"
        navSideBarButton.style.display = "block"
        navSideBar.style.display = "block"

        for (let button of navRightButtons) {

            button.style.display = "none"
        }
    } else {

        navRightLeft.style.display = "flex"
        navSideBarButton.style.display = "none"
        navSideBar.style.display = "none"

        for (let button of navRightButtons) {

            button.style.display = "flex"
        }
    }
}

window.onscroll = function navParentTop() {

    let itemPosTop = document.documentElement.scrollTop

    if (itemPosTop == 0) {

        navTopBar.classList.remove("navTopBarNotTop")
    } else {

        navTopBar.classList.add("navTopBarNotTop")
    }
}

function navSideBarToggle() {

    navTopBar.classList.toggle("navTopBarNotTop")

    navSideBar.classList.toggle("navSideBarActive")

    bar1.classList.toggle("barActive1")

    bar2.classList.toggle("barActive2")

    bar3.classList.toggle("barActive3")

    document.body.classList.toggle("navBodyStopOverflow")
}

window.onclick = element => {
    clickOutSideBar(element)
}

window.ontouchend = element => {
    clickOutSideBar(element)
}

function clickOutSideBar(element) {
    let sideBarAnchors = navSideBar.getElementsByTagName("a")

    function sideBarAnchorValid() {

        let result = false

        for (let i = 0; i < sideBarAnchors.length; i++) {

            if (element.target == sideBarAnchors[i]) {

                result = true
                break
            }
            if (i == sideBarAnchors.length) {

                result = false
            }
        }

        return result
    }

    if (element.target != navSideBar && element.target != navSideBarButton && element.target != bar1 && element.target != bar2 && element.target != bar3 && sideBarAnchorValid() == false) {

        navSideBar.classList.remove("navSideBarActive")

        bar1.classList.remove("barActive1")

        bar2.classList.remove("barActive2")

        bar3.classList.remove("barActive3")

        document.body.classList.remove("navBodyStopOverflow")
    }
}

//IMAGE SLIDER

let sliderParent = document.getElementsByClassName("sliderParent")[0]

let slides = document.getElementsByClassName("slideParent")

let slidesIndex = -1

window.addEventListener("load", slideForward)

function slideForward() {

    if (slidesIndex < slides.length - 1) {

        slidesIndex++
    } else {

        slidesIndex = 0
    }

    for (let i = 0; i < slides.length; i++) {

        let slide = slides[i]

        if (i == slidesIndex) {

            slide.classList.add("slideActive")
        } else {

            slide.classList.remove("slideActive")
        }
    }
}

function slideBack() {

    if (slidesIndex > 0) {

        slidesIndex--
    } else {

        slidesIndex = slides.length - 1
    }

    for (let i = 0; i < slides.length; i++) {

        let slide = slides[i]

        if (i == slidesIndex) {

            slide.classList.add("slideActive")
        } else {

            slide.classList.remove("slideActive")
        }
    }
}
/* window.addEventListener("load", tooltipStyles)

function tooltipStyles() {

    let tooltips = document.getElementsByClassName("tooltip")

    for (let tooltip of tooltips) {

        let parent = document.getElementById(tooltip.dataset.tooltipFor)

        let topAmount = parent.getBoundingClientRect().top * 0.5

        topAmount -= tooltip.offsetHeight * 0.25

        tooltip.style.top = topAmount + "px"
    }
}

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve()
        }, time)
    })
}

function tooltipShow(parent) {

    let tooltips = document.getElementsByClassName("tooltip")

    for (let tooltip of tooltips) {

        let tooltipParent = document.getElementById(tooltip.dataset.tooltipFor)

        if (tooltipParent == parent) {

            tooltip.style.opacity = "1"

            break
        }
    }
} */

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve()
        }, time)
    })
}

async function sendMessage(element, icon, requirements) {

    for (let requirement of requirements) {

        let element = document.getElementById(requirement)

        if (element.value == "") {

            return
        }
    }

    element.childNodes[1].style.transform = "rotate(360deg)"

    await wait(300)

    element.childNodes[1].innerHTML = icon

    element.childNodes[2].style.maxWidth = 0
    element.childNodes[2].style.opacity = 0

    element.classList.add("sendButtonActive")
}

function changeText(element, text) {

    element.childNodes[1].style.transform = "rotate(360deg)"

    element.childNodes[2].innerText = text

    element.childNodes[2].style.transition = "none"

    element.childNodes[2].style.maxWidth = "200px"

    element.classList.remove("callButtonDefault")
    element.classList.add("callButtonActive")
}