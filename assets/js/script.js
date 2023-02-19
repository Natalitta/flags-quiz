document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

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
        flagImg[6] = 'assets/images/flags/uk-flag.jpg';
        flagImg[7] = 'assets/images/flags/ukraine-flag.jpg';
       
        let displayFlag = Math.floor(Math.random() * flagImg.length);
        return document.getElementById("flag-image").innerHTML = '<img src="'+flagImg[displayFlag]+'" class="img">';
        
    }


    function displayLandmarkQuestion() {
        
    }

    function checkAnswer() {
        let userAnswer = document.getElementById("answer-box").value;
        let correctAnswer = rightAnswer();
        let isCorrect = userAnswer === rightAnswer[0];

    if (isCorrect) {
        alert("Well done! You got it right!");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct country was ${rightAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(correctAnswer[1]);

    }

    function rightAnswer() {
        
        if (flagImg[0] === userAnswer.value("CANADA")){
            } else if (flagImg[1] === userAnswer.value("GERMANY")) {
            } else if (flagImg[2] === userAnswer.value("IRELAND")) {
            } else if (flagImg[1] === userAnswer.value("JAPAN")) {
            } else if (flagImg[1] === userAnswer.value("MOROCCO")) {
            } else if (flagImg[1] === userAnswer.value("SPAIN")) {
            } else if (flagImg[1] === userAnswer.value("UK")) {
            } else if (flagImg[1] === userAnswer.value("UKRAINE")) {
            

    }

    function incrementScore() {

    }
    function incrementWrongAnswer() {

    }