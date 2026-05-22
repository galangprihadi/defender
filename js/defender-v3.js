
class Defender {
    
    /* ==============================================================================================
        LOAD GAME
    ============================================================================================== */

    loadGame() {
        // ============================================================================ Opening Animation
        anime({
            targets: this.eCurtain,
            opacity: 0,
            duration: 800,
            easing: "easeInQuart",
            begin: () => {
                this.eCurtain.style.pointerEvents = "none";
            },
        });
        
        this.loadGameInfo();
        this.loadChat();
        this.loadQuestion()
    }

    /* ==============================================================================================
        LOAD GAME INFO
    ============================================================================================== */

    loadGameInfo() {
        this.eGameInfo.innerHTML = `${this.gameData.gameInfo}<button class="left" id="btnExit">❌</button>`;
        this.eIntro.innerHTML = this.gameData.intro;

        this.eGameInfo.querySelector("#btnExit").addEventListener("click", (event) => {
            anime({
                targets: this.eCurtain,
                opacity: 1,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "auto";
                },
                complete: () => {
                    window.location.replace(this.homeAddress);
                }
            });
        });
    }


    /* ==============================================================================================
        LOAD CHAT
    ============================================================================================== */

    loadChat() {
        this.eChatPanel.innerHTML = "";

        let chatPanelHtml = "";

        chatPanelHtml += `<div class="header"><img src="${this.gameData.picture}" alt="pict">${this.gameData.id}</div>`;

        this.gameData.chat.forEach((text) => {
            if (text.substring(0, 1).toLowerCase() == "x") {
                chatPanelHtml += `<div class="text">${text.substring(3)}</div>`;
            }
            else {
                chatPanelHtml += `<div class="text me">${text.substring(3)}</div>`;
            }
        });
        this.eChatPanel.innerHTML = chatPanelHtml;
    }


    /* ==============================================================================================
        LOAD QUESTION
    ============================================================================================== */

    loadQuestion() {
        // ============================================================================ Draw Question
        const questionText = this.gameData.quest[this.questNum][0];
        const choicesText = [...this.gameData.quest[this.questNum][1]];
        const answerText = this.gameData.quest[this.questNum][1][0];
        const lessonText = [...this.gameData.quest[this.questNum][2]];

        for (let i = choicesText.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [choicesText[i], choicesText[randomIndex]] = [choicesText[randomIndex], choicesText[i]];
            [lessonText[i], lessonText[randomIndex]] = [lessonText[randomIndex], lessonText[i]];
        }

        this.eQuestPanel.innerHTML = `
            <div class="question">
                <div class="text">${questionText}</div>
                <input type="radio" name="tes1" id="a"> <label for="a">${choicesText[0]}</label>
                <input type="radio" name="tes1" id="b"> <label for="b">${choicesText[1]}</label>
                <input type="radio" name="tes1" id="c"> <label for="c">${choicesText[2]}</label>
                <input type="radio" name="tes1" id="d"> <label for="d">${choicesText[3]}</label>
            </div>
            <div class="explanation">
                <div class="text" id="lesson-text"></div>
                <button class="btnOk">Okay</button>
            </div>
        `;


        // ============================================================================ Opening Animation
        const eQuestion = this.eQuestPanel.querySelector(".question");
        const eFeedback = this.eQuestPanel.querySelector(".explanation");
        
        eQuestion.style.visibility = "visible";
        eFeedback.style.visibility = "hidden";
        this.eQuestPanel.style.opacity = "0";

        anime({
            targets: this.eQuestPanel,
            opacity: 1,
            duration: 300,
            easing: "easeOutQuart",
        });


        // ============================================================================ Button Functions
        const btnAnswers = this.eQuestPanel.querySelectorAll("input");
        const eLesson = this.eQuestPanel.querySelector("#lesson-text");
        const btnOk = this.eQuestPanel.querySelector("button");

        btnAnswers.forEach((btnAns, i) => {
            btnAns.checked = false;
            btnAns.disabled = false;

            btnAns.addEventListener("click", (event) => {
                eLesson.innerHTML = lessonText[i];

                if (btnAns.labels[0].textContent == answerText) {
                    btnOk.innerHTML = "Lanjut";

                    if (this.questNum < this.gameData.quest.length - 1) {
                        this.questNum += 1;
                    }
                    else {
                        this.finished = true;
                    }
                }
                else {
                    btnOk.innerHTML = "Perbaiki Jawaban";
                }

                const nextAnime = () => {
                    anime({
                        targets: this.eQuestPanel,
                        opacity: 1,
                        duration: 300,
                        easing: "easeOutQuart",
                    });
                }

                anime({
                    targets: this.eQuestPanel,
                    opacity: 0,
                    duration: 300,
                    delay: 500,
                    easing: "easeOutQuart",
                    complete: () => {
                        nextAnime();
                        eQuestion.style.visibility = "hidden";
                        eFeedback.style.visibility = "visible";

                        if (btnAns.labels[0].textContent == answerText) {
                            this.eQuestPanel.classList.add("green");
                        }
                        else {
                            this.eQuestPanel.classList.add("red");
                        }
                    }
                });
            }, {once: true});
        })

        btnOk.addEventListener("click", (event) => {
            if (this.finished) {
                anime({
                    targets: this.eCurtain,
                    opacity: 1,
                    duration: 800,
                    easing: "easeInQuart",
                    begin: () => {
                        this.eCurtain.style.pointerEvents = "auto";
                    },
                    complete: () => {
                        // window.location.replace(this.nextAddress);
                        window.location.href = this.nextAddress;
                    }
                });
            }
            else {
                anime({
                    targets: this.eQuestPanel,
                    opacity: 0,
                    duration: 300,
                    easing: "easeOutQuart",
                    complete: () => {
                        this.loadQuestion();
                        this.eQuestPanel.classList.remove("green");
                        this.eQuestPanel.classList.remove("red");
                    }
                });
            }
        }, {once: true});
    }


    /* ==============================================================================================
        CONSTRUCTOR
    ============================================================================================== */
    
    eCurtain = document.getElementById("curtain");
    eGameInfo = document.getElementById("game-info");
    eIntro = document.getElementById("intro");
    eChatPanel = document.getElementById("chatPanel");
    eQuestPanel = document.getElementById("questPanel");

    questNum = 0;
    finished = false;

    constructor(param) {
        this.homeAddress = param.home || "../index.html";
        this.nextAddress = param.next || "../index.html";

        this.gameData = param;

        this.loadGame();

        

        


        
        
    } 
}