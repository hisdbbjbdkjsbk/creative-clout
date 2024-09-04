const modalWindow = document.getElementById('modal-window')
const declaimer = document.getElementById('declaimer')
const main = document.getElementById('main')
const mainOpen = document.getElementById('open-contact')
const declaimerOpen = document.getElementById('declaimer-open')
const mainContact = document.getElementById('main-contact')
const mainShort = document.getElementById('main-short')
const openModal = document.getElementById('open-modal')
const infoItem = document.getElementById('info-item')
const modalContent = document.getElementById('modal-content')
const randomElem = document.querySelectorAll('[data-random]')
const hoverElem = document.querySelectorAll('[data-hover]')

const heart = document.getElementById('heart')
const footerFollow = document.getElementById('footer-follow')

const cursor = document.querySelector(".cursor"); // #1
const cursorTray = document.querySelector(".cursor-tray"); // #1


let mobile = false


const mouseMove = function (e) { // #2
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    setTimeout(() => {
        cursorTray.style.left = x + "px";
        cursorTray.style.top = y + "px";
    }, 100)
};

document.addEventListener("mousemove", mouseMove); // #3


openModal.addEventListener('click', () => {
    modalWindow.classList.add('open')
    infoItem.classList.add('short')
    mainShort.classList.add('short')
    modalContent.classList.add('open')
    main.classList.add('hide')
})

modalWindow.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-window__content')) {
        modalWindow.classList.remove('open')
        modalContent.classList.remove('open')
        infoItem.classList.remove('short')
        mainShort.classList.remove('short')
        main.classList.remove('hide')

    }
})

declaimerOpen.addEventListener('click', () => {
    declaimer.classList.add('open')
    main.classList.add('hide')
    infoItem.classList.add('short')
    mainShort.classList.add('short')
})

mainOpen.addEventListener('click', () => {
   main.classList.add('contact')
})

declaimer.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-window__content')) {
        declaimer.classList.remove('open')
        main.classList.remove('hide')
        infoItem.classList.remove('short')
        mainShort.classList.remove('short')
    }
})

document.addEventListener('click', (e) => {
    console.log(e.target.closest('.main__contact'))
    if (e.target.closest('.main__contact') === null && mobile) {
         main.classList.remove('contact')
        mobile = false
    } else {
        mobile = true
    }
})

hoverElem.forEach((item) => {

    item.addEventListener('mouseenter', () => {
        cursorTray.classList.add('big')
        cursor.classList.add('big')
    })

    item.addEventListener('mouseout', () => {
        cursorTray.classList.remove('big')
        cursor.classList.remove('big')
    })
})

function randomString(i) {
    let rnd = '';
    while (rnd.length < i)
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
}

function addMusic(elem, id) {
    let soundBg = document.getElementById('sound');
    let sound = document.getElementById(id);

    elem.addEventListener("click", () => {
        soundBg.pause()
        sound.duration
        console.log(sound.duration)
        sound.volume = 0.7
        sound.play();

        setTimeout(() => {
            sound.pause()
        }, sound.duration * 1000)

    }, false);
}

heart.addEventListener('mouseenter', () => {
    let sound = document.getElementById('sound-heart');
    sound.play()
})
let play = false

heart.addEventListener('click', () => {
    let sound = document.getElementById('sound');

    console.log(play)
    if (play) {
        sound.pause()
        play = false
    } else {
        play = true
        sound.volume = 0.1
        sound.play()

    }
})

heart.addEventListener('mouseleave', () => {
    let sound = document.getElementById('sound-heart');
    sound.pause()
})

// document.addEventListener("mouseenter", function() {
//     let sound = document.getElementById('sound');
//     sound.volume = 0.1
//     sound.play();
// }, false);

// addMusic(document, 'sound')

addMusic(declaimerOpen, 'sound-footer')

addMusic(footerFollow, 'sound-follow')
addMusic(openModal, 'sound-contact')
addMusic(mainOpen, 'sound-contact')

document.addEventListener('mousemove', (e) => {
    console.log()
    let nav = e.screenY < 500 ? 'N' : 'S'
    randomElem[0].innerHTML = randomString(2)
    randomElem[1].innerHTML = randomString(3)
    randomElem[2].innerHTML = Math.floor(Math.random() * 1000)
    randomElem[3].innerHTML = e.screenY + ' ' + nav
    randomElem[4].innerHTML = e.screenX
})





