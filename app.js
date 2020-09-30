var boxes = document.querySelectorAll('span');
var resetButton = document.querySelector('.resetButton');

var gameContainer = document.querySelector('.game-container')

var contents1 = document.querySelector('.contents1');
var contents2 = document.querySelector('.contents2');
var contents3 = document.querySelector('.contents3');
var contents4 = document.querySelector('.contents4');
var contents5 = document.querySelector('.contents5');
var contents6 = document.querySelector('.contents6');
var contents7 = document.querySelector('.contents7');
var contents8 = document.querySelector('.contents8');
var contents9 = document.querySelector('.contents9');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick);
};

function handleClick(event) {
    event.target.classList.remove('hidden');
    var timesClicked = 0;
    $(gameContainer).click(function() {
        timesClicked++;
        if (timesClicked%2==0) {
            event.target.textContent = "hi";
        } else {
            event.target.textContent = "bye";
        }
    })
    if (contents1.innerHTML == contents2.innerHTML && contents1.innerHTML == contents3.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    };
    if (contents4.innerHTML == contents5.innerHTML && contents4.innerHTML == contents6.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    };
    if (contents7.innerHTML == contents8.innerHTML && contents7.innerHTML == contents9.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    };
    if (contents1.innerHTML == contents4.innerHTML && contents1.innerHTML == contents7.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    }; 
    if (contents2.innerHTML == contents5.innerHTML && contents2.innerHTML == contents8.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    }; 
    if (contents3.innerHTML == contents6.innerHTML && contents3.innerHTML == contents9.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    }; 
    if (contents1.innerHTML == contents5.innerHTML && contents1.innerHTML == contents9.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    }; 
    if (contents3.innerHTML == contents5.innerHTML && contents3.innerHTML == contents7.innerHTML) {
        document.querySelector('.victory').classList.remove('hidden');
    }
    var counter = 0;
    for (var i = 0; i < boxes.length; i++) {
        if (event.target.classList.remove('hidden')) {
            counter++;
        }
    }
    if (counter == 9) {
        document.querySelector('.draw').classList.remove('hidden')
    }
} 

function reset() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('hidden');
    };
    document.querySelector('.victory').classList.add('hidden');
};

resetButton.addEventListener('click', reset);