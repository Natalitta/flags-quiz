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

        for (let i=0; i< randomImg; i++) {  
            let number = Math.floor(Math.random()*randomImg.length); 
            document.getElementById("result").innerHTML += '<img src='+ randomImg[number]>'; 
        } 
    }   
            
    
        if (gameType === "flag") {
            displayFlagQuestion(num1, num2);
        } else if (gameType === "landmark") {
            displayLandmarkQuestion(num1, num2);
        }   else {
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
        }
    }

    function displayFlagQuestion() {
        document.getElementsByTagName("img").textContent = operand1;
    }