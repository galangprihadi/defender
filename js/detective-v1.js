
class Detective {
    eCurtain = document.querySelector("#curtain");
    eGameInfo = document.querySelector("#game-info");
    eGamePanel = document.querySelector("#game-panel");
    eToast = document.querySelector("#toast");

    /* ===========================================================================================
       SOUNDS 
    =========================================================================================== */

    sounds = {
        transition: new Howl({
            src: "../sounds/transition.mp3",
        }),

        pop: new Howl({
            src: "../sounds/pop.mp3",
        }),

        cling: new Howl({
            src: "../sounds/cling.mp3",
        }),

        shake: new Howl({
            src: "../sounds/shake.mp3",
        }),

        backsound: new Howl({
            src: "../sounds/winter-weather.mp3",
            loop: true,
            volume: 0.5,
            // autoplay: true,
        }),
    }


    /* ===========================================================================================
       LOAD GAME 
    =========================================================================================== */

    loadGame() {
        // ============================================================================== Game Info
        this.eGameInfo.innerHTML = `
            <div class="text" id="stage"></div>
            <button class="left" id="btnExit">❌</button>
        `;
        
        this.eGameInfo.querySelector("#btnExit").addEventListener("click", () => {
            anime({
                targets: this.eCurtain,
                opacity: 1,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "auto";
                },
                complete: () => {
                    window.location.replace(gameData.homePage);
                }
            });
        });

        // ============================================================================== Load Level
        this.loadLevel();
    }


    /* ===========================================================================================
       LOAD LEVEL 
    =========================================================================================== */

    loadLevel() {
        this.stageScore = 0;
        this.typeChosen = 1;
        this.trusChosen = 0;
        this.answers = [...this.quest[this.stage].choices[this.quest[this.stage].type - 1]].splice(0, this.quest[this.stage].nCorrect);

        this.setLayout();
        this.setButtons();
    }


    /* ===========================================================================================
       SET LAYOUT 
    =========================================================================================== */

    setLayout () {
        // ============================================================================== Open Curtain
        anime({
            targets: this.eCurtain,
            opacity: 0,
            duration: 800,
            easing: "easeInQuart",
            begin: () => {
                this.eCurtain.style.pointerEvents = "none";
            },
        });

        // ============================================================================== Game Info
        document.querySelector("#stage").innerHTML = `Stage ${this.stage} <span>Score: ${this.score}</span>`;

        // ============================================================================== Game Panel
        this.eGamePanel.innerHTML = `
            <div id="intro"></div>
            <div id="chat-panel"></div>
            <div class="quest-panel" id="classification"></div>
            <div class="quest-panel" id="reason"></div>
            <button id="btnSubmit">Cek Analisis</button>
        `;

        // ============================================================================== Intro
        this.eGamePanel.querySelector("#intro").innerHTML = this.quest[this.stage].intro;

        // ============================================================================== Chat
        let chatHtml = `
            <div class="header">
                <img src="${this.quest[this.stage].image}" alt="pict">
                ${this.quest[this.stage].sender}
            </div>
        `;

        this.quest[this.stage].chat.forEach((text) => {
            if (text.substring(0, 1).toLowerCase() == "x") {
                chatHtml += `<div class="text">${text.substring(3)}</div>`;
            }
            else {
                chatHtml += `<div class="text me">${text.substring(3)}</div>`;
            }
        });

        this.eGamePanel.querySelector("#chat-panel").innerHTML = chatHtml;

        // ============================================================================== Classification
        this.eGamePanel.querySelector("#classification").innerHTML = `
            <div class="text">Apa klasifikasi dari pesan tersebut?</div>
            <div class="wrapper">
                <input type="radio" name="chat-type" id="a1">
                <label for="a1">${gameData.types[0]}</label>
                <input type="radio" name="chat-type" id="a2">
                <label for="a2">${gameData.types[1]}</label>
                <input type="radio" name="chat-type" id="a3">
                <label for="a3">${gameData.types[2]}</label>
            </div>
            <div class="text">Seberapa yakin Anda dengan jawaban <br>yang Anda pilih?</div>
            <div class="wrapper">
                <input type="radio" name="trust" id="b1">
                <label for="b1">1</label>
                <input type="radio" name="trust" id="b2">
                <label for="b2">2</label>
                <input type="radio" name="trust" id="b3">
                <label for="b3">3</label>
                <input type="radio" name="trust" id="b4">
                <label for="b4">4</label>
                <input type="radio" name="trust" id="b5">
                <label for="b5">5</label>
            </div>
        `;

        // ============================================================================== Reason
        this.eGamePanel.querySelector("#reason").innerHTML = `
            <div class="text" id="reasonText">Kenapa pesan tersebut termasuk <br>dalam kategori ${gameData.types[0]}?
            <span>(Pilih lebih dari satu jawaban!)</span></div>
            <input type="checkbox" name="reason" id="c1">
            <label for="c1">${this.quest[this.stage].choices[0][0]}</label>
            <input type="checkbox" name="reason" id="c2">
            <label for="c2">${this.quest[this.stage].choices[0][1]}</label>
            <input type="checkbox" name="reason" id="c3">
            <label for="c3">${this.quest[this.stage].choices[0][2]}</label>
            <input type="checkbox" name="reason" id="c4">
            <label for="c4">${this.quest[this.stage].choices[0][3]}</label>
            <input type="checkbox" name="reason" id="c5">
            <label for="c5">${this.quest[this.stage].choices[0][4]}</label>
        `;
    }


    /* ===========================================================================================
       SET BUTTON
    =========================================================================================== */

    setButtons () {
        // ============================================================================== Type Buttons
        const btnTypes = document.querySelectorAll('input[name="chat-type"]');
        const btnReason = document.querySelectorAll('input[name="reason"]');
        const reasonText = document.querySelector("#reasonText");
        const labelReasons = document.querySelectorAll("#reason label");

        btnTypes[0].checked = true;

        btnTypes.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                this.sounds.pop.play();

                let id = 0;

                switch (btn.id) {
                    case "a1" : id = 0; break;
                    case "a2" : id = 1; break;
                    case "a3" : id = 2; break;
                }

                this.typeChosen = id + 1;

                const randChoices = this.shuffleArray([...this.quest[this.stage].choices[id]]);

                reasonText.innerHTML = `
                Kenapa pesan tersebut termasuk <br>dalam kategori ${gameData.types[id]}?
                <span>(Pilih lebih dari satu jawaban!)</span>
                `;

                labelReasons.forEach((label, i) => {
                    label.innerHTML = randChoices[i];
                });

                btnReason.forEach((btn) => {
                    btn.checked = false;
                });

                this.eGamePanel.querySelector("#classification").classList.remove("wrong");
                this.eGamePanel.querySelector("#reason").classList.remove("wrong");
            });
        });


        // ============================================================================== Trust Buttons
        const btnTrust = document.querySelectorAll('input[name="trust"]');

        btnTrust.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                this.sounds.pop.play();

                switch (btn.id) {
                    case "b1" : this.trusChosen = 1; break;
                    case "b2" : this.trusChosen = 2; break;
                    case "b3" : this.trusChosen = 3; break;
                    case "b4" : this.trusChosen = 4; break;
                    case "b5" : this.trusChosen = 5; break;
                }

                btnSubmit.disabled = false;
            });
        });


        // ============================================================================== Reason Buttons
        btnReason.forEach((btn) => {
            btn.addEventListener("click", () => {
                this.sounds.pop.play();

                this.eGamePanel.querySelector("#reason").classList.remove("wrong");
            });
        });


        // ============================================================================== Check Button
        const btnSubmit = document.querySelector("#btnSubmit");
        btnSubmit.disabled = true;
        
        btnSubmit.addEventListener("click", () => {
            let correct = false;

            // ============================================================================== Check Type
            if (this.typeChosen == this.quest[this.stage].type) {
                correct = true;
            }
            else {
                this.eGamePanel.querySelector("#classification").classList.add("wrong");
                
                this.eGamePanel.querySelector("#classification").scrollIntoView({ 
                    behavior: "smooth",
                    block: "start",
                });

                btnTrust.forEach((btn) => {
                    btn.checked = false;
                });

                btnReason.forEach((btn) => {
                    btn.checked = false;
                });

                btnSubmit.disabled = true;

                this.stageScore -= this.trusChosen;

                this.toast("Analisis Anda kurang tepat!");
            }

            // ============================================================================== Check Reason
            if (correct) {
                this.sounds.cling.play();

                const chosen = [];

                let allCorrect = true;

                btnReason.forEach((btn) => {
                    let itIsCorrect = false;

                    this.answers.forEach((ans, i) => {
                        if (btn.labels[0].textContent == ans) {
                            itIsCorrect = true;
                        }
                    });

                    if (itIsCorrect) {                  // Correct but not checked
                        if (btn.checked == false) {
                            allCorrect = false;
                        }
                    }
                    else {                              // Wrong but checked
                        if (btn.checked == true) {
                            allCorrect = false;
                            this.stageScore -= 1;
                        } 
                    }
                });

                if (allCorrect == true) {
                    this.stageScore += (this.trusChosen * 2);
                    this.score += this.stageScore

                    // ============================================================================== Close Curtain
                    anime({
                        targets: this.eCurtain,
                        opacity: 1,
                        duration: 800,
                        easing: "easeInQuart",
                        begin: () => {
                            this.eCurtain.style.pointerEvents = "auto";
                        },
                        complete: () => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                            });

                            if (this.stage < this.numOfQuestion) {
                                this.stage += 1;
                                this.loadLevel();
                            }
                        },
                    });
                }
                else {
                    this.eGamePanel.querySelector("#reason").classList.add("wrong");

                    btnReason.forEach((btn) => {
                        btn.checked = false;
                    });

                    this.toast("Kriterianya kurang tepat!");
                }
            }
            else {
                this.sounds.shake.play();
            }
        });        
    }


    /* ===========================================================================================
       FUNCTIONS
    =========================================================================================== */

    // ============================================================================== Shuffle Array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    
        return array;
    }

    // ============================================================================== Toast
    
    
    toast(text) {
        const nextAnime = () => {
            anime({
                targets: this.eToast,
                opacity: [1, 0],
                duration: 400,
                translateY: [0, "-150%"],
                easing: "easeInQuart",
                delay: 3000,
                complete: () => {
                    this.eToast.innerHTML = "";
                },
            });
        }
        
        anime({
            targets: this.eToast,
            opacity: [0, 1],
            duration: 400,
            translateY: ["-150%", 0],
            easing: "easeOutQuart",
            delay:500,
            begin: () => {
                this.eToast.innerHTML = text;
            },
            complete: () => {
                nextAnime();
            },
        });
    }


    /* ===========================================================================================
       CONSTRUCTOR
    =========================================================================================== */

    constructor (param) {
        this.numOfQuestion = gameData.numOfQuestion;
        this.quest = [...gameData.question];
        
        this.score = 0;
        this.stageScore = 0;
        this.stage = 1;

        this.loadGame();


    }
}