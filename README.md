## The TIC TAC TOE game
(READ ME file)


## Summary:
This is a file which explains the goals, features and future
considerations of the Tic-Tac-Toe game.

## Technologies used:
-Macbook Pro
-Atom
-Google
-Web Browser
-Git Hub repo - local and remote


## Outline:
-A wireframe of what the game project will look like (scroll to "Wire frames" to read more)
-How the developer will represent the game board in JS.
-How the developer plan to approaches this project.
-4-8 user stories for the game project (for example, using the As a < type of user >, I want < some goal > so that < some reason >. format from the readings).
-How the developer plans to keep the code modular.
-Future considerations
-Version control to backup / track project?


## Approach:
The developer has done a checkout the html, as to develop an idea of what it would look like for the user. Then the developer worked on the authentication. Future considerations, such as CSS and HTML would be applied for a better UX/UI. In detail, the order would be as followed:


## Project List of “To-Dos”:
1st thing - Make a game board in .HTML, with minimal styling, but should have the idea of a tic tac toe board game
2nd thing - setting up click handlers on each of the 9 boxes
3rd thing - when someone clicks the box, there would start with an “X”
4th thing - write the logic to alternate/switching between “X” and “O” (it would be an “if statement”)
5th thing - Write something to prevent changing a square that’s already been filled in
6th thing - write some code to see if the game is over
7th thing - move over to the authentication - making buttons for signing in out, signing up, ajax
8th thing - make a button to reset the game
9th thing - Make to when you start the game, it creates a game on the API
10th thing - Make it so that whenever an X or O goes on the board, that you make a PATCH request to the API with the info (find it in the API doc)
11th thing - Instead of scoreboard, write a board of how many times the game has been played
(I’d have to make a GET request, which is found in the API doc)

Test, re-test, and peer critique will be done.


## User Stories:
1.) As a user, I want to be able to sign up > so that < I can play the game correctly>
2.) As a user, I want  to be able to sign in > so that I can stay logged in and keep count of the many times I played.
3.) As a user, I wantt to change my password > so that < I may want to use a password that is most memorable to me.
4.) As a user, I want to have a refresh button  so that the board can clear so I can play again.
5.) As a user, I want to be able to alternate between X and O so that I can take turns, even if I am playing with a friend on my computer.
6.) As a user, I want to click on the boxes and display either an X or O in an order so that even if I took a break, without logging out, I can know which turn (either X or O) I’m on.
7.) As a user, I want the browser refresh box to not have an effect on my board game, so that I will have no disruption and a comfortable experience.
8.) As aa user, I want to be able to have a refresher boxer inside the page to only clear the boxes, but not the scorecard so that I can remember how many times I played.


## Keeping Modular Code:
First, create separate tabs, working out of atom, and separating them by their own function: App, API, Events, HTML
Secondly, putting the necessary spaces between and indentation of code.
Thirdly, perhaps putting a commentary in certain instances of code.


## Creative Spin:
Developer was hoping to ultimately:
a.) Play around with CSS, so that competitors have their own colors (perhaps blue for “X” and “Red” for “O” or some other colors, and whenever there is a winner, it would display “X” or “O” wins, in a specific color.
b.) Something that displays “X” or “O” wins or if there was a draw.

## Wire Frames
All 8 wireframes can be found in the link (below)

https://github.com/Palmoze5/tic-tac-toe-client/tree/master/public

## Tracking Projects through Version Control:
Developer ensures making a featured branch, but most of all, staging and committing whenever working on a feature. Developer commited whenever a new button is added, changed the CSS and HTML, or the layout of the forms, and any extra features. The commits will be
simple to read providing a more in depth detail of the updates in the commentary.


## Future Project Considerations:
1.) Fonts, typography, and colors to provide a better UI/UX
2.) A pop up box that shows a message whenever the loser loses that gives an inspirational quote (10 quotes stored), that would randomize for every time (or maybe every 3rd time played there is a loss) to keep going. This would be found through an open sourced type Quote API via Google.
3.)  More consideration into front end to provide for a high quality
UX/UI.
