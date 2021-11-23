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
    $game.innerHTML = ''
    let box = document.createElement('div')

    box.style.width = box.style.height = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = '50px'
    box.style.left = '70px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}