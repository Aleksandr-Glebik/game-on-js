let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let score = 0

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

function startGame() {
    // console.log('start');
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'

    renderBox()
}

function handleBoxClick(event) {
console.log(event.target.dataset);
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

function renderBox() {
    // console.log(getRandom(30, 100));
    $game.innerHTML = ''
    let box = document.createElement('div')
    let boxSize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect()
    // console.log(gameSize);
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize

    box.style.width = box.style.height = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}