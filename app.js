// variable declaration
var boxes = document.querySelectorAll('span');
var resetButton = document.querySelector('.resetButton');

var gameContainer = document.querySelector('.game-container')

var icons = document.querySelectorAll('img');

var player1 = null;
var player2 = null;

// tracking clicks on icons, odd clicks are P1, even clicks are P2
var timesClicked = 0;

// choose your icon

for (var i = 1; i < icons.length; i++) {
    icons[i].addEventListener('click', addToPlayers);
}

function addToPlayers(event) {
    if (timesClicked == 0) {
        player1 = event.target;
        player1.removeEventListener('click', addToPlayers)
        timesClicked++;
        document.querySelector('.player1Choose').classList.add('hidden');
        document.querySelector('.player2Choose').classList.remove('hidden');

    } else if (timesClicked == 1) {
        player2 = event.target;
        timesClicked++;
        document.querySelector('.player2Choose').classList.remove('hidden');
    };
    if (timesClicked > 1) {
        document.querySelector('.player1Choose').classList.add('hidden');
        document.querySelector('.player2Choose').classList.add('hidden');
        document.querySelector('.play').classList.remove('hidden');
        document.querySelector('.player1turn').classList.remove('gone');
        document.querySelector('.player2turn').classList.remove('gone');
        document.querySelector('.game-container').classList.remove('gone');
        document.querySelector('.resetButton').classList.remove('gone');
        timesClicked = 0;
    };
};

// loop to add event listener to each one of the boxes(spans)

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick);
};

function handleClick(event) {
    event.target.classList.remove('hidden');
    timesClicked++;
    // player2
    if (timesClicked % 2 == 0) {
        event.target.classList.add(player2.classList[0]);
        document.querySelector('.player1turn').classList.remove('hidden');
        document.querySelector('.player2turn').classList.add('hidden');
    } else {
    // player1
        event.target.classList.add(player1.classList[0]);
        document.querySelector('.player2turn').classList.remove('hidden');
        document.querySelector('.player1turn').classList.add('hidden');
    };
    // horizontal line wins
    if (boxes[0].classList[1] == boxes[1].classList[1] && boxes[0].classList[1] == boxes[2].classList[1]) {
        if (boxes[0].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[0].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        };
    }
    if (boxes[3].classList[1] == boxes[4].classList[1] && boxes[3].classList[1] == boxes[5].classList[1]) {
        if (boxes[3].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[3].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        };
    };
    if (boxes[6].classList[1] == boxes[7].classList[1] && boxes[6].classList[1] == boxes[8].classList[1]) {
        if (boxes[6].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[6].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    };
    // vertical line wins
    if (boxes[0].classList[1] == boxes[3].classList[1] && boxes[0].classList[1] == boxes[6].classList[1]) {
        if (boxes[0].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[0].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (boxes[1].classList[1] == boxes[4].classList[1] && boxes[1].classList[1] == boxes[7].classList[1]) {
        if (boxes[1].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[1].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (boxes[2].classList[1] == boxes[5].classList[1] && boxes[2].classList[1] == boxes[8].classList[1]) {
        if (boxes[2].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[2].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    // diagonal line wins
    if (boxes[0].classList[1] == boxes[4].classList[1] && boxes[0].classList[1] == boxes[8].classList[1]) {
        if (boxes[0].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[0].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }; 
    if (boxes[2].classList[1] == boxes[4].classList[1] && boxes[2].classList[1] == boxes[6].classList[1]) {
        if (boxes[2].classList[1] == player1.classList[0]) {
            document.querySelector('.victory1').classList.remove('hidden');
        };
        if (boxes[2].classList[1] == player2.classList[0]) {
            document.querySelector('.victory2').classList.remove('hidden');
        }
    }
    for (var i = 0; i < boxes.length; i++) {
        if (event.target.classList.contains('hidden')) {
            timesClickedBoxes++;
        }
    }
    // draw condition
    if (timesClicked % 9 == 0 && document.querySelector('.victory1').classList.contains('hidden') && document.querySelector('.victory2').classList.contains('hidden')) {
        document.querySelector('.draw').classList.remove('hidden')
    };
    if (event.target.classList != " ") {
        event.target.removeEventListener('click', handleClick)
    };
    if (document.querySelector('.victory1').classList.contains('hidden') == false || document.querySelector('.victory2').classList.contains('hidden') == false) {
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
    document.querySelector('.victory1').classList.add('hidden');
    document.querySelector('.victory2').classList.add('hidden');
    document.querySelector('.draw').classList.add('hidden');
    document.querySelector('.player2turn').classList.add('hidden');
    document.querySelector('.player1turn').classList.remove('hidden');
    document.querySelector('.player1Choose').classList.remove('hidden');
    document.querySelector('.player2Choose').classList.add('hidden');
    document.querySelector('.play').classList.add('hidden');
    document.querySelector('.player1turn').classList.add('gone');
    document.querySelector('.player2turn').classList.add('gone');
    document.querySelector('.game-container').classList.add('gone');
    document.querySelector('.resetButton').classList.add('gone');
};

resetButton.addEventListener('click', reset);