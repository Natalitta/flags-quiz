# Flags Quiz

Flags Quiz is a game to help people learn flags of different countries. This game is mainly targeted towards students for their geography studies and anyone interested. This game checks general geography knowledge, helps to learn flags, practise and  have fun.

#### [The link to see the quiz](https://natalitta.github.io/flags-quiz/)

<img src="assets/images/mockup.png" alt="Flags quiz on various devices">

## Existing Features

### The Header
* Featured on the top of the page, the header states the name of the game: Flags Quiz.
* The user can easily anderstand what the quiz is about.

<img src="assets/images/header.png" alt="Flags quiz header">

* And on mobile screens it looks like this:

<img src="assets/images/mobile-header.png" alt="Flags quiz header on mobiles">

### The quiz game area
* There is a button "How to play" which displays a pop-up with instructions: 1) click the button "Get a flag" 2) type an answer in the input "Type the country" 3) click the button "Verify" to check the answer.
<img src="assets/images/mobile-modal.png" alt="Flags quiz game modal on mobiles">

* There's also an opportunity to get a new flag image by clicking on the image itself, it can be handy for mobile users.
* A user can use any type of case for the input, all variants will be scored as correct (e.g. Canada, canada or CANADA).

<img src="assets/images/game-area.png" alt="Flags quiz game area">

* And on mobile screens it looks like this:

<img src="assets/images/mobile-game-area.png" alt="Flags quiz game area on mobiles">


### The quiz results
* When users click on the button "Get a flag" or tap on the image they get a new flag image shown randomly by JavaScript. 
* Then users type the country they think this flag belongs to and submit their answer. If the answer is correct, an alert pops up: "Well done! You got it right!" and the score of correct answers increases. If the answer is wrong, an alert pops up: "Awww... you answered... (user's answer). The correct country was ... (the correct country name)!" and the score of incorrect answers increases.
* The results and the score are easy to understand because correct answers are coloured green and wrong ones red.

<img src="assets/images/score-area.png" alt="Flags quiz score area">

### Favicon
* The site has a favicon implemented with a flag. It shows an image in a browser tab so that the user can easily identify the website among other open tabs.

<img src="assets/images/favicon.png" alt="Flags Quiz icon">

## Features Left to Implement

* I would like to add all world countries' flags in the future.

## Testing
### The testing was done in browsers: 
* Mozilla Fireworks 108.0.2
* Google Chrome 106.0.5249.119
* Microsoft Edge 108.0.1462.54
  
### Smartphones: 
* Pixel 4a
* Xiomi Redmi 8
* iPhone 12

### Responsiveness was also tested via Developers tools for:
* iPhone 12 Pro
* iPad iPadOS 14.7.11
* Gallaxy Note 20 Android 11
* iPhone SE 2nd gen iOS 14.6
* Samsung Gallaxy A51/71

### Manual testing
#### I confirmed that the quiz results are always correct. I confirmed that all buttons and the input are clickable.

#### Get a new flag test
A new flag appears when the button is clicked. It also works if the image is clicked.
<img src="assets/images/game-area.png" alt="Flags quiz game area">

#### Empty input test
* Java Script code prevents submitting empty input. A pop-up appears with a request to type a country name.
<img src="assets/images/empty.png" alt="Flags Quiz test1">

#### Correct answer input test
* The quiz accepts answers typed in any case (e.g. Ireland, ireland, IRELAND) as correct, shows an alert "Well done!" and increments a new score.

<img src="assets/images/correct.png" alt="Flags Quiz test2">

#### Inorrect answer input test
* If the answer is incorrect, users see an alert with the correct answer and a number of wrong answers increases.

<img src="assets/images/incorrect.png" alt="Flags Quiz test3">
<img src="assets/images/increment-score.png" alt="Flags Quiz score">

#### Finish quiz and reset function test
* If users want to finish the quiz, they should click on "Finish quiz" button. When the button is clicked a modal appeares with the score of correct answers. And the score resets.

<img src="assets/images/finish.png" alt="Flags Quiz test4">


### Validator Testing
* HTML: No errors were shown when passing through the official W3C HTML validator.
<img src="assets/images/html-check.png" alt="Flags Quiz validation">

* CSS: No errors were found when passing through the official W3C CSS validator.

<img src="assets/images/css-check.png" alt="CSS Flags quiz validation">

* JS: 21 warning were found when passing through the JSHint validator about let variable.

<img src="assets/images/js-hint.png" alt="JS Flags quiz validation">
<img src="assets/images/js-hint1.png" alt="JS Flags quiz validation part 2">

* Lighthouse testing shows such results:

<img src="assets/images/lighthouse.png" alt="Lighthouse testing results of Flags quiz">

### Bugs
On some mobile devices a space was added automatically to the name of the country which resulted in incrementing wrong answer. To fix this problem I used .trim() method. Now spaces don't cause any issues.

### Unfixed Bugs
No unfixed bugs.

## Deployment
The site was created using Gitpod and pushed to GitHub to a remote repository.

#### The site was deployed to GitHub pages. The steps to deploy are as follows: 
* In the GitHub repository, navigate to the Settings tab.
* From the menu on the left, select Pages.
* From the source section drop-down menu, select the Branch: main.
* Click 'Save'
* A live link displays on the top of the section when published successfully.

#### The live link can be found here - https://github.com/Natalitta/flags-quiz

## Credits

### Code
I learned how to code a modal from:
<a href ="https://www.w3schools.com/howto/howto_css_modals.asp"></a>

### Content:
* All icons were taken from Font Awesome.

### Media
The photos for the quiz were taken from free Internet resources (Unsplash and Freepik websites):

* Irish flag by www.slon.pics on Freepik
* Ukrainian flag on Freepik
* Spanish flag Photo by Max Harlynking on Unsplash
* Canadian flag Photo by Praveen Kumar Nandagiri on Unsplash 
* German flag Photo by Mark König on Unsplash
* Japanese flag Photo by Markus Winkler on Unsplash
* Moroccan flag Photo by Alexander Schimmeck on Unsplash 
* French flag Image by jannoon028 on Freepik
* Brazilian flag Photo by www.slon.pics on Freepik
* Australian flag Photo by Caleb Russell on Unsplash
* Croatian flag Photo by Arcode ACD on Unsplash 
* Indian flag Photo by Onkarphoto on Unsplash
* Argentinian flag Photo by Angelica Reyes on UnsplashGeorgia flag 
* Georgian flag Photo by Zura Narimanishvili on Unsplash
* Cambodian flag Photo by aboodi vesakaran on Unsplash

