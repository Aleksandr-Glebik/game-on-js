let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $result = document.querySelector('#result')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')

let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

function startGame() {
    score = 0
    setGameTime()
    $timeHeader.classList.remove('hide')
    $resultHeader.classList.add('hide')

    isGameStarted = true
    // console.log('start');
    $start.classList.add('hide')
    $game.style.backgroundColor = '#fff'

    let interval = setInterval(function() {
        let time = parseFloat($time.textContent)
        // console.log('interval', $time.textContent);

    if (time <= 0) {
        //end game
        clearInterval(interval)
        endGame()
    } else {
        $time.textContent = (time - 0.1).toFixed(1)
    }

    }, 100)

    renderBox()
}

function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    let time = 5
    $time.textContent = time.toFixed(1)
}

function endGame() {
    isGameStarted = false
    setGameScore()

    $start.classList.remove('hide')
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $timeHeader.classList.add('hide')
    $resultHeader.classList.remove('hide')

}

function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }
// console.log(event.target.dataset);
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