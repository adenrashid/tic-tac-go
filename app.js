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

var pikachu = document.querySelector('.icon1');
var charmander = document.querySelector('.icon2');
var bulbasaur = document.querySelector('.icon3');
var squirtle = document.querySelector('.icon4');
var eevee = document.querySelector('.icon5');

var icons = document.querySelectorAll('img');

var player1 = "X";
var player2 = "O";

// for (var i = 0; i < icons.length; i++) {
//     icons[i].addEventListener('click', addToP1);
//     icons[i].addEventListener('click', addToP2);
// };

// function addToP1(event) {
//     player1 = event.target;
//     document.querySelector('.player1Choose').classList.add('hidden');
//     document.querySelector('.player2Choose').classList.remove('hidden');
// };

// function addToP2(event) {
//     player2 = event.target;
//     document.querySelector('.player1Choose').classList.add('hidden');
//     document.querySelector('.player2Choose').classList.add('hidden');
// }

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick);
};

var timesClicked = 0;

function handleClick(event) {
    event.target.classList.remove('hidden');
    timesClicked++;
    if (timesClicked%2==0) {
        event.target.innerHTML = player2;
        document.querySelector('.player1turn').classList.remove('hidden');
        document.querySelector('.player2turn').classList.add('hidden');
    } else {
        event.target.innerHTML = player1;
        document.querySelector('.player2turn').classList.remove('hidden');
        document.querySelector('.player1turn').classList.add('hidden');
    };
    if (contents1.innerHTML == contents2.innerHTML && contents1.innerHTML == contents3.innerHTML) {
        if (contents1.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents1.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        };
    };
    if (contents4.innerHTML == contents5.innerHTML && contents4.innerHTML == contents6.innerHTML) {
        if (contents4.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents4.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        };
    };
    if (contents7.innerHTML == contents8.innerHTML && contents7.innerHTML == contents9.innerHTML) {
        if (contents7.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents7.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    };
    if (contents1.innerHTML == contents4.innerHTML && contents1.innerHTML == contents7.innerHTML) {
        if (contents1.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents1.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (contents2.innerHTML == contents5.innerHTML && contents2.innerHTML == contents8.innerHTML) {
        if (contents2.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents2.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (contents3.innerHTML == contents6.innerHTML && contents3.innerHTML == contents9.innerHTML) {
        if (contents3.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents3.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (contents1.innerHTML == contents5.innerHTML && contents1.innerHTML == contents9.innerHTML) {
        if (contents1.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents1.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (contents3.innerHTML == contents5.innerHTML && contents3.innerHTML == contents7.innerHTML) {
        if (contents3.innerHTML == player1) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (contents3.innerHTML == player2) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }
    for (var i = 0; i < boxes.length; i++) {
        if (event.target.classList.contains('hidden')) {
            timesClicked++;
        }
    }
    if (timesClicked % 9 == 0 && document.querySelector('.victory1').classList.contains('hidden') && document.querySelector('.victory2').classList.contains('hidden')) {
        document.querySelector('.draw').classList.remove('hidden')
    };
    if (event.target.innerHTML != " ") {
        event.target.removeEventListener('click', handleClick)
    };
    if (document.querySelector('.victory1').classList.contains('hidden') == false || document.querySelector('.victory2').classList.contains('hidden') == false) {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener('click', handleClick);
        }
    }
};

// if (document.querySelector('.victory1').classList.contains('hidden');
// document.querySelector('.victory2').classList.add('hidden');
// document.querySelector('.draw').classList.add('hidden')) {

function reset() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('hidden');
        contents1.textContent = " ";
        contents2.textContent = " ";
        contents3.textContent = " ";
        contents4.textContent = " ";
        contents5.textContent = " ";
        contents6.textContent = " ";
        contents7.textContent = " ";
        contents8.textContent = " ";
        contents9.textContent = " ";
        boxes[i].addEventListener('click', handleClick);
        timesClicked = 0;
    };
    document.querySelector('.victory1').classList.add('hidden');
    document.querySelector('.victory2').classList.add('hidden');
    document.querySelector('.draw').classList.add('hidden')
};

resetButton.addEventListener('click', reset);