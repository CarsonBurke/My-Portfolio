addStyles()

function addStyles() {
    let styles = `
    
    @keyframes cursorPulse {
        0% {
            box-shadow: hsl(209, 88%, 56%, 0.6) 0 0 0 2px;
        }
        100% {
            box-shadow: hsl(209, 88%, 56%, 0) 0 0 0 60px;
        }
    }

    * {
    cursor: none !important;
    }

    html:hover .cursor, scrollbar:hover .cursor {
        pointer-events: none;
        transform: translate(-50%, -50%);
        width: 25px;
        aspect-ratio: 1/1;
        border: black 3px solid;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.1s, width 0.2s, box-shadow 0.2s, border 0.2s;
        box-shadow: rgb(0,0,0,0.25) 0 8px 30px 0;
        background: rgb(255,255,255);
        z-index: 1000;
    }
    .cursorDown {
        width: 17.5px;
        box-shadow:  rgb(0,0,0,0.3) 0 1px 3px 0;
    }
    .cursorAnimation {
        animation: cursorPulse 0.4s;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

//

let newCursor = document.createElement("div")

newCursor.classList.add("cursor")

document.body.appendChild(newCursor)

//

let cursor = document.getElementsByClassName("cursor")[0]

//

window.addEventListener("mousemove", followCursor)
window.addEventListener("wheel", followCursor)
window.addEventListener("mousedown", followCursor)
window.addEventListener("mouseup", followCursor)

function followCursor(e) {

    let top = "calc(" + cursor.scrollHeight * -0.5 + "px + " + e.pageY + "px)"
    let left = "calc(" + cursor.scrollWidth * -0.5 + "px + " + e.pageX + "px)"

    cursor.style.transform = "translate(" + left + ", " + top + ")"
}

//

window.addEventListener("mousedown", cursorDown)

function cursorDown() {

    cursor.classList.add("cursorDown")
}

//

window.addEventListener("mouseup", cursorUp)

function cursorUp() {

    cursor.classList.remove("cursorDown")
}

window.addEventListener("click", cursorAnimation)

async function cursorAnimation(e) {

    if (e.target.classList.contains("waveButton")) return

    cursor.classList.add("cursorAnimation")

    function timer(seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve()
            }, seconds * 1000)
        })
    }

    await timer(0.4)

    cursor.classList.remove("cursorAnimation")
}