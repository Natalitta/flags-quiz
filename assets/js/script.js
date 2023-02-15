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

        let randomImg = flags{

        };  

        let flag = document.getElementsByTagName("img");
        let img = Math.floor(Math.random()); 
        
        } 
    }   
            
    
        if (gameType === "flag") {
            displayFlagQuestion(img1);
        } else if (gameType === "landmark") {
            displayLandmarkQuestion(img2);
        }   else {
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
        }
    }

    function displayFlagQuestion(src, width, height, alt) {
        let flagImg = document.createElement("img");
        flagImg.src = "./images/flags/canada-flag.jpg";
        document.body.appendChild(img);

    }

    function displayLandmarkQuestion(operand2) {
        document.getElementsByTagName("img").textContent = operand2;
    }

    function checkAnswer() {

    }

    function calculateCorrectAnswer() {

    }

    function incrementScore() {

    }
    function incrementWrongAnswer() {

    }