let animationTime = 0.8
let animationDelay = 0

let menuItems = document.getElementsByClassName("menuItem")
let menuButtons = document.getElementsByClassName("menuButton")

window.onload = function() {

    for (let item of menuItems) {

        item.style.animation = "fadeIn " + animationTime + "s"
    }
    for (let button of menuButtons) {

        if (button.classList.contains("menuItemButton")) {

            button.classList.add("menuButtonActive")
        }
    }
}

function menuSortItems(category) {

    let i = 0
    let height

    for (let item of menuItems) {

        i++
        height = item.scrollHeight

        item.classList.add("menuItemHide")
    }

    for (let item of menuItems) {

        if (item.classList.contains(category)) {

            item.classList.remove("menuItemHide")
        } else {

            item.classList.add("menuItemHide")
        }
    }

    for (let button of menuButtons) {

        if (button.classList.contains(category + "Button")) {

            button.classList.add("menuButtonActive")
        } else {

            button.classList.remove("menuButtonActive")
        }
    }
}