// variable declaration

var boxes = document.querySelectorAll('span');
var resetButton = document.querySelector('.resetButton');
var gameContainer = document.querySelector('.game-container');
var icons = document.querySelectorAll('img');

var player1Choose = document.querySelector('.player1Choose');
var player2Choose = document.querySelector('.player2Choose');
var play = document.querySelector('.play');

var player1Turn = document.querySelector('.player1turn');
var player2Turn = document.querySelector('.player2turn');

var victory1 = document.querySelector('.victory1');
var victory2 = document.querySelector('.victory2');
var draw = document.querySelector('.draw');

var score1 = document.querySelector('.score1');
var score2 = document.querySelector('.score2');

var player1 = null;
var player2 = null;
var timesClicked = 0;
var player1Score = 0;
var player2Score = 0;

var audio = new Audio('winaudio.mp3');

// choose your icon

for (var i = 1; i < icons.length; i++) {
    icons[i].addEventListener('click', addToPlayers);
}

function addToPlayers(event) {
    if (timesClicked == 0) {
        player1 = event.target;
        player1.removeEventListener('click', addToPlayers)
        timesClicked++;
        player1Choose.classList.add('hidden');
        player2Choose.classList.remove('hidden');

    } else if (timesClicked == 1) {
        player2 = event.target;
        timesClicked++;
        player2Choose.classList.remove('hidden');
    };
    if (timesClicked > 1) {
        player1Choose.classList.add('hidden');
        player2Choose.classList.add('hidden');
        play.classList.remove('hidden');
        player1Turn.classList.remove('gone');
        player2Turn.classList.remove('gone');
        gameContainer.classList.remove('gone');
        resetButton.classList.remove('gone');
        timesClicked = 0;
            for (var i = 1; i < icons.length; i++) {
                icons[i].removeEventListener('click', addToPlayers);
            };
    };
};

// loop to add event listener to each one of the boxes(spans)

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick);
};

function handleClick(event) {
    event.target.classList.remove('hidden');
    timesClicked++;
// player2 is even number of clicks
    if (timesClicked % 2 == 0) {
        event.target.classList.add(player2.classList[0]);
        player1Turn.classList.remove('hidden');
        player2Turn.classList.add('hidden');
    } else {
// player1 is odd number of clicks
        event.target.classList.add(player1.classList[0]);
        player2Turn.classList.remove('hidden');
        player1Turn.classList.add('hidden');
    };
// horizontal line wins
    if (boxes[0].classList[1] == boxes[1].classList[1] && boxes[0].classList[1] == boxes[2].classList[1]) {
        if (boxes[0].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[0].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        };
    }
    if (boxes[3].classList[1] == boxes[4].classList[1] && boxes[3].classList[1] == boxes[5].classList[1]) {
        if (boxes[3].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[3].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        };
    };
    if (boxes[6].classList[1] == boxes[7].classList[1] && boxes[6].classList[1] == boxes[8].classList[1]) {
        if (boxes[6].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[6].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        }
    };
// vertical line wins
    if (boxes[0].classList[1] == boxes[3].classList[1] && boxes[0].classList[1] == boxes[6].classList[1]) {
        if (boxes[0].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[0].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        }
    }; 
    if (boxes[1].classList[1] == boxes[4].classList[1] && boxes[1].classList[1] == boxes[7].classList[1]) {
        if (boxes[1].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[1].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        }
    }; 
    if (boxes[2].classList[1] == boxes[5].classList[1] && boxes[2].classList[1] == boxes[8].classList[1]) {
        if (boxes[2].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[2].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        }
    }; 
// diagonal line wins
    if (boxes[0].classList[1] == boxes[4].classList[1] && boxes[0].classList[1] == boxes[8].classList[1]) {
        if (boxes[0].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[0].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        }
    }; 
    if (boxes[2].classList[1] == boxes[4].classList[1] && boxes[2].classList[1] == boxes[6].classList[1]) {
        if (boxes[2].classList[1] == player1.classList[0]) {
            victory1.classList.remove('gone');
            victory1.classList.add('win');
            audio.play();
            player1Score++;
            score1.textContent = `P1: ${player1Score}`;
        };
        if (boxes[2].classList[1] == player2.classList[0]) {
            victory2.classList.remove('gone');
            victory2.classList.add('win');
            audio.play();
            player2Score++;
            score2.textContent = `P2: ${player2Score}`;
        }
    }
    for (var i = 0; i < boxes.length; i++) {
        if (event.target.classList.contains('hidden')) {
            timesClickedBoxes++;
        }
    }
// draw condition
    if (timesClicked % 9 == 0 && victory1.classList.contains('gone') && victory2.classList.contains('gone')) {
        draw.classList.remove('gone')
    };
    if (event.target.classList != " ") {
        event.target.removeEventListener('click', handleClick)
    };
    if (victory1.classList.contains('gone') == false || victory2.classList.contains('gone') == false) {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener('click', handleClick);
        }
    }
};

// reset button functionality

function reset() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('hidden');
        boxes[i].addEventListener('click', handleClick);
        timesClicked = 0;
        boxes[i].classList.remove('eevee');
        boxes[i].classList.remove('pikachu');
        boxes[i].classList.remove('charmander');
        boxes[i].classList.remove('squirtle');
        boxes[i].classList.remove('bulbasaur');
        player1 = null;
        player2 = null;
    };
    for (var i = 1; i < icons.length; i++) {
        icons[i].addEventListener('click', addToPlayers);
    };
victory1.classList.add('gone');
victory2.classList.add('gone');
victory1.classList.remove('win');
victory2.classList.remove('win');
draw.classList.add('gone');
player1Turn.classList.add('gone');
player2Turn.classList.add('gone');
player1Turn.classList.remove('hidden');
player2Turn.classList.add('hidden');
player1Choose.classList.remove('hidden');
player2Choose.classList.add('hidden');
play.classList.add('hidden');
gameContainer.classList.add('gone');
resetButton.classList.add('gone');
};

resetButton.addEventListener('click', reset);