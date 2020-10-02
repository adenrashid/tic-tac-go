# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Overview

Let's start out with something fun - **a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – Let's start out with something fun - a game! We'll be making **tic tac toe** (knots and crosses). What a nice surprise! But it's up to you to come up with a fun and interesting approach to this classic game. 

**You will be working individually for this project**, but we'll be guiding you along the process and helping you as you go. Show us what you've got!

---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Switch turns** between more than one player
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** principles
* Use **Javascript** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables


* At least one artefact of either pseudocode, flow diagram, wireframe, mockup or storyboard demonstrating planning - **Due tomorrow** 
* A **working game, that can win, draw & lose, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and **frequent commits** dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
* Submission & presentation on **Friday 2:30pm**

---

### Bonus extensions

These are for extra credit! DON'T focus on these until you've hit the core requirements.

* Keep track of multiple game rounds with a win counter
* Allow game customizable options, time limits, board size, game rounds, name & profiles etc  
* Allow players to customize their token (X, O, name, picture, avatar etc)
* Get inventive with your styling - research CSS effects, animations to spiff things up
* **Research** **LocalStorage** or **SessionStorage** to persist data locally to allow games to continue after page refresh or loss of internet connectivity
* Use timers to display "waiting..." messages while users are waiting to be matched
* **Research** web audio API and add sound effects to your game
* Be creative! Bend the rules and give it a twist!


---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, markup, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, debugger, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.


## Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_

### DOM
* dom cheat sheet https://gist.github.com/epoch/34cab9e673e6568c466675f97e26ac59
* [using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) 

### deployment/hosting

* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_

### animations

* https://animista.net/
* https://daneden.github.io/animate.css/

### sound effects

* https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

### other
* [lol commits](https://lolcommits.github.io/)

planning 

// do basic html and css first 
// make a grid 3 by 3 
// make divs for each grid box 
// make the items hidden, and unhidden when clicked on the grid box through DOM principles as we have practiced
// functions are called on click 
// when one player gets 3 in a row or diagonally, its a win 
    // can program this in an if statement and class name as hidden or unhidden 
// make a pop up only visible when one person wins  
alternate clicking mean its P1 or P2s turn i.e. even clicks are P1 and odd clicks are P2

// make a reset button so you can start the game over again --> on click, reset all of the icons to hidden again and restart the game 

// turns between more than one player --> get computer to say whos turn it is. make it go one at a time. ie player one then player two. need to create seperate variables? 

// at the top of the page you can put the icons that players want to play with, and depending on which one is clicked, go with those in the code 

// for AI, can make it like the pre work exercise, random generation to fill in a box Math.random Math.floor and give the grid boxes numbers 

// https://www.flaticon.com/packs/pokemon-go/2 to get the icons 

// optional 
    // choose your icon
    // vs AI --> this would include random generation of which grid it would fill
    // expanding board? 

* * *

Click here to play: https://adenrashid.github.io/tic-tac-go/

1. How to Play 
The objective of the game is to get 3 of the same symbol in he samr row, column, or diagnomally. The first player that achieves this wins! 
The game involves two players, and I have made it possible for players to choose their icon. Just click your icon when the game prompts you to select it. 
Enjoy!

2. Development
Technologies Used: HTML, CSS, Javascript

Approach: Outlined above in planning, written plan and mockup drawn first. I figured out how the game would work in my planning and then implemented this when I started building the game. Started by declaring variables, then writing the functions and within those, all the if statements to create the logic of the game. 

After I got the Javascript functionality working and met the core requirements specified, most of my time was spent on creating the CSS and user experience. I really wanted to achieve the nostalgic feeling of playing the old pokemon games. 

Instructions: P1 picks an icon, then P2 picks an icon. Then players play tic tac GO until one wins or it draws. Reset button at the bottom.
Unsolved problems: Simplifying JS Code to use arrays and for loops, as it is very repetitive currently. 

3. Problems 
One of the problems I faced was trying to get the user to choose which icon they wanted to use and implementing that in the grid. I didn't want P1 and P2 to be able to choose the same icon, so I had to figure out a way to prevent that from happening. To solve this I used removeEventListener once a player had clicked on which icon they wanted to play with, so the other player couldnt choose the same icon.

I also didnt want to display the game board until users had selected their icons. This was also a challenge. To resolve this I used display: none and used the .classList add and remove functions. 

A CSS problem I faced was getting the victory messages to show up overlapping the game. I fixed this by using the display: none function and then removing this and using position: absolute. Initially I had their opacity set at 0 and then changed it to 1 but this meant that the player couldnt click on the grid because the message was overlapping it. Setting display: none fixed this. 

Problems not yet solved: Formatting the game for mobile, and different web browsers. Tried to open it on an iphone but the grid was not visible. Simplifying the javascript code, as it is very repetitive and could be cut down using loops + arrays rather than multiple if statements. 

4. Challenges 
Attempting to simplify the javascript in a short time. Only created more bugs so I had to leave it as it is. Need more time and planning to be able to refactor it. 

5. Lessons
Planning is the most important thing you can do! Going in having a clear cut plan helped a lot in creating the game. Previously when I have tried to create things, in homework etc, it has seemed more complicated because of not having a clear plan and creates more bugs and confusing logic. 
Hit the requirements before being carried away by other bonus aspects. 

6. Credits: 
Icons: https://www.flaticon.com/packs/pokemon-go/2
Credit: Roundicons Freebies (free to use if credited)
Background Image: https://www.pinterest.com.au/pin/151574343683447160/
Credit: https://www.deviantart.com/schmoek
Background music audio: https://www.youtube.com/watch?v=-BKfhq_TtcE&t=38s&ab_channel=braix
Credit: Youtube (Creative Commons Attribution license (reuse allowed))
Animations: https://animate.style/
Font: Google Fonts
Audio sound effects: https://freesound.org/browse/tags/pop/ (free to use)
