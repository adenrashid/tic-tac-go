# TIC TAC GO 

![game](/game.png)

### Click here to play: https://adenrashid.github.io/tic-tac-go/

## How to Play 

- The objective of the game is to get 3 of the same symbol in the same row, column, or diagnomally. 
- The first player that achieves this wins! 
- The game involves two players, and I have made it possible for players to choose their icon. 
- Just click your icon when the game prompts you to select it. 
- Enjoy!

## Development / Functionality 

## Technologies Used

- Vanilla Javascript
- HTML
- CSS 

## Planning 

![plan](/plan.png)

- Approach: Outlined above in planning, written plan and mockup drawn first. I figured out how the game would work in my planning and then implemented this when I started building the game. Started by declaring variables, then writing the functions and within those, all the if statements to create the logic of the game. 

- After I got the Javascript functionality working and met the core requirements specified, most of my time was spent on creating the CSS and user experience. I really wanted to achieve the nostalgic feeling of playing the old pokemon games. 

- Instructions: P1 picks an icon, then P2 picks an icon. Then players play tic tac GO until one wins or it draws. Reset button at the bottom.

## Problems 

### Solved Problems 

- One of the problems I faced was trying to get the user to choose which icon they wanted to use and implementing that in the grid. I didn't want P1 and P2 to be able to choose the same icon, so I had to figure out a way to prevent that from happening. To solve this I used removeEventListener once a player had clicked on which icon they wanted to play with, so the other player couldnt choose the same icon. This was the same with once a player had placed an icon in a grid, I didnt want it to be able to be changed, so had to removeEventListener again. 

- I didnt want to display the game board until users had selected their icons. This was also a challenge. To resolve this I used display: none and used the .classList add and remove functions. 

- A CSS problem I faced was getting the victory messages to show up overlapping the game. I fixed this by using the display: none function and then removing this and using position: absolute. Initially I had their opacity set at 0 and then changed it to 1 but this meant that the player couldnt click on the grid because the message was overlapping it. Setting display: none fixed this. 

### Unsolved Problems 

- Simplifying JS Code to use arrays and for loops, as it is very repetitive currently. 

- Formatting the game for mobile, and different web browsers. Tried to open it on an iphone but the grid was not visible. Simplifying the javascript code, as it is very repetitive and could be cut down using loops + arrays rather than multiple if statements. 

## Challenges 

- Attempting to simplify the javascript in a short time. Only created more bugs so I had to leave it as it is. Need more time and planning to be able to refactor it. 

## Lessons

- Planning is the most important thing you can do! Going in having a clear cut plan helped a lot in creating the game. Previously when I have tried to create things, in homework etc, it has seemed more complicated because of not having a clear plan and creates more bugs and confusing logic. 
- Hit the requirements before being carried away by other bonus aspects. 

## Stretch Goals 
- Implement player vs computer option 
- Would have liked to add AI if I had more time and figure out the logic in how to do that. 
- Refactoring, cleaning code and directories, layout of project 

## Credits

- Icons: https://www.flaticon.com/packs/pokemon-go/2
- Credit: Roundicons Freebies (free to use)
- Background Image: https://www.pinterest.com.au/pin/151574343683447160/
- Credit: https://www.deviantart.com/schmoek
- Background music audio: https://www.youtube.com/watch?v=-BKfhq_TtcE&t=38s&ab_channel=braix
- Credit: Youtube (Creative Commons Attribution license (reuse allowed))
- Animations: https://animate.style/
- Font: Google Fonts
- Trees for grid: Screenshot from Pokemon game
- Audio sound effects: https://freesound.org (free to use)
- GO: https://www.flickr.com/photos/bagogames/25914117692/in/photostream/ (Creative Commons)