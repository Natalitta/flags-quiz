
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let displayFlag = null;

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type"); 
                    runGame(gameType);
                }
            });
        }
    
        document.getElementById("answer-box").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });
    
        runGame("flag");
    
    });

    function runGame(gameType) {

        document.getElementById("answer-box").value = "";
        document.getElementById("answer-box").focus();         
    
        if (gameType === "flag") {
            displayFlagImage();
        } else if (gameType === "landmark") {
            displayLandmarkQuestion();
        }   else {
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
        }
    }

    function displayFlagImage() {

        let flagImg = new Array (); 
        flagImg[0] = 'assets/images/flags/canada-flag.jpg';
        flagImg[1] = 'assets/images/flags/germany-flag.jpg';
        flagImg[2] = 'assets/images/flags/ireland-flag.jpg';
        flagImg[3] = 'assets/images/flags/japan-flag.jpg';
        flagImg[4] = 'assets/images/flags/morocco-flag.jpg';
        flagImg[5] = 'assets/images/flags/spain-flag.jpg';
        flagImg[6] = 'assets/images/flags/france-flag.jpg';
        flagImg[7] = 'assets/images/flags/ukraine-flag.jpg';
        flagImg[8] = 'assets/images/flags/brazil-flag.jpg';
        flagImg[9] = 'assets/images/flags/australia-flag.jpg';
       
        displayFlag = Math.floor(Math.random() * flagImg.length);
        return document.getElementById("flag-image").innerHTML = '<img src="'+flagImg[displayFlag]+'" class="img">';
        
    }
    function checkAnswer() {
        let userAnswer = document.getElementById("answer-box").value.toLowerCase();
        let correctAnswer = rightAnswer().toLowerCase();
        let isCorrect = userAnswer === correctAnswer;
   
    if (isCorrect) {
        alert("Well done! You got it right!");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct country was ${correctAnswer.toUpperCase()}!`);
        incrementWrongAnswer();
    }
    runGame("flag");
   
    }
   
    function rightAnswer() {        
        if (displayFlag === 0) {
             return "canada"
        } else if (displayFlag === 1) {
            return "germany"
        } else if (displayFlag === 2) {
            return "ireland"
        } else if (displayFlag === 3) {
            return "japan"
        } else if (displayFlag === 4) {
            return "morocco"
        } else if (displayFlag === 5) {
            return "spain"
        } else if (displayFlag === 6) {
            return "france"
        } else if (displayFlag === 7) {
            return "ukraine"
        } else if (displayFlag === 8) {
            return "brazil"
        } else if (displayFlag === 9) {
            return "australia"
        } else {
            alert("Sorry, it's a wrong country");
        }
    }

    function displayLandmarkQuestion() {
        
    }

    function incrementScore() {

    }
    function incrementWrongAnswer() {

    }