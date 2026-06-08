
class Detective {
    eCurtain = document.querySelector("#curtain");
    eGameInfo = document.querySelector("#game-info");
    eGamePanel = document.querySelector("#game-panel");
    eToast = document.querySelector("#toast");

    /* ===========================================================================================
       CONSTRUCTOR
    =========================================================================================== */

    constructor (param) {
        this.nQuest = gameData.numOfQuestion;
        this.quest = this.shuffleArray([...gameData.questions]);
        // this.quest = [...gameData.questions];

        this.tScam = gameData.btnLabels.scam || "Suspected Scam";
        this.tSafe = gameData.btnLabels.safe || "Indicated Safe";
        this.tOpening = gameData.opening || "Welcome to Chat Detective.";
        this.tClosing = gameData.closing || "You have completed the game."
        this.tStart = gameData.btnLabels.start || "Play";
        this.tNext = gameData.btnLabels.next || "Next";
        this.tHome = gameData.btnLabels.home || "Back to Home";
        this.tWrong = gameData.toasts.wrong || "Your guess is wrong!";
        this.tWrongReason = gameData.toasts.wrongReason || "Your reasons are wrong!";
        this.tBadReason = gameData.toasts.badReason || "Your reasons are wrong!"
        
        this.stage = 1;
        this.codeAll = "";

        // ============================================================================== Curtain
        this.eCurtain.innerHTML = `${this.tOpening}<button>${this.tStart}</button>`

        this.eCurtain.querySelector("button").addEventListener("click", () => {
            this.sounds.pop.play();

            this.eCurtain.innerHTML = "";
            
            // ============================================================================== Open Curtain
            anime({
                targets: this.eCurtain,
                opacity: 0,
                duration: 500,
                easing: "easeInQuart",
                delay:200,
                begin: () => {
                    this.eCurtain.style.pointerEvents = "none";
                    window.scrollTo({
                        top: 0,
                        left: 0,
                    });
                },
            });
        }, {once:true});

        // ============================================================================== Game Info
        this.eGameInfo.innerHTML = `
            <div class="text" id="stage"></div>
            <button class="left" id="btnExit">❌</button>
        `;
        
        this.eGameInfo.querySelector("#btnExit").addEventListener("click", () => {
            this.sounds.pop.play();

            this.eCurtain.innerHTML = "";

            anime({
                targets: this.eCurtain,
                opacity: 1,
                duration: 500,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "auto";
                },
                complete: () => {
                    window.location.replace(gameData.homePage);
                }
            });
        });

        // ============================================================================== Load First Level
        this.loadLevel();
    }


    /* ===========================================================================================
       GENERAL FUNCTIONS/UTILITIES 
    =========================================================================================== */

    // ============================================================================== Sounds
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

        wrong: new Howl({
            src: "../sounds/wrong.mp3",
        }),

        // backsound: new Howl({
        //     src: "../sounds/winter-weather.mp3",
        //     loop: true,
        //     volume: 0.5,
        //     // autoplay: true,
        // }),
    }

    // ============================================================================== Form Submission
    async submitForm(form, inputData) {
        if (form) {
            const formData = new FormData();

            form.entries.forEach((entry, i) => {
                formData.append(entry, inputData[i]);
            });

            try {
                await fetch(form.formAction, {
                    method: 'POST',
                    mode: 'no-cors',
                    // headers: {
                    //     'Content-Type': 'application/x-www-form-urlencoded'
                    // },
                    body: formData,
                });
            }
            catch (error) {
                console.log(error);
            }
        }
    }

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
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none';
        
        const nextAnime = () => {
            anime({
                targets: this.eToast,
                opacity: [1, 0],
                duration: 600,
                translateY: [0, "-250%"],
                easing: "easeInQuart",
                delay: 3000,
                complete: () => {
                    this.eToast.innerHTML = "";
                    document.body.style.overflow = "";
                    document.body.style.pointerEvents = 'auto';
                },
            });
        }

        anime({
            targets: this.eToast,
            opacity: [0, 1],
            duration: 600,
            translateY: ["-250%", 0],
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
       LOAD LEVEL 
    =========================================================================================== */

    loadLevel() {
        this.cQuest = this.quest[this.stage - 1];
        this.chatType = Math.floor(Math.random() * 2);
        this.cChat = this.chatType == 0 ? this.cQuest.scam : this.cQuest.real;
        this.nCorrect = this.cQuest.nCorrect;
        this.choices = this.shuffleArray([...this.cQuest.choices]);
        this.correctReason = [];

        for (let i=0; i < this.nCorrect; i++) {
            this.correctReason[i] = this.cQuest.choices[i];
        }

        this.codeType = "c";
        this.codeReason = 0;

        this.setLayout();
        this.setButton();
    }


    /* ===========================================================================================
       SET LAYOUT 
    =========================================================================================== */

    setLayout() {
        // ============================================================================== Game Info
        document.querySelector("#stage").innerHTML = `Stage ${this.stage}`;

        // ============================================================================== Game Panel
        this.eGamePanel.innerHTML = `
            <div id="intro"></div>
            <div id="chat-panel"></div>
            <div class="quest-panel" id="answer"></div>
            <div class="quest-panel" id="reason"></div>
            <button id="btnSubmit">Cek Analisis</button>
        `;

        // ============================================================================== Intro
        this.eGamePanel.querySelector("#intro").innerHTML = this.cQuest.intro;

        // ============================================================================== Chat
        let chatHtml = `
            <div class="header">
                <img src="${this.cQuest.image}" alt="pict">
                ${this.cQuest.sender}
            </div>
        `;

        this.cChat.forEach((text) => {
            if (text.substring(0, 1).toLowerCase() == "x") {
                chatHtml += `<div class="text">${text.substring(3)}</div>`;
            }
            else if (text.substring(0, 1).toLowerCase() == "y") {
                chatHtml += `<div class="text me">${text.substring(3)}</div>`;
            }
            else if (text.substring(0, 1).toLowerCase() == "u") {
                chatHtml += `<div class="text url">${text.substring(3)}</div>`;
            }
            else {
                chatHtml += `<div class="text file">${text.substring(3)}
                <div class="miniText">APK File</div><div class="miniText">Download</div></div>`;
            }
        });

        this.eGamePanel.querySelector("#chat-panel").innerHTML = chatHtml;

        // ============================================================================== Answer
        this.eGamePanel.querySelector("#answer").innerHTML = `
            <div class="text">Analisis terhadap chat tersebut?</div>
            <div class="wrapper">
                <input type="radio" name="chat-type" id="type1">
                <label for="type1">${this.tScam}</label>
                <input type="radio" name="chat-type" id="type2">
                <label for="type2">${this.tSafe}</label>
            </div>
        `;

        // ============================================================================== Reason
        this.eReason = this.eGamePanel.querySelector("#reason");
        this.eReason.style.display = "none";

        this.eReason.innerHTML = `
            <div class="text">Pilih ${this.nCorrect} alasan terbaik, mengapa chat tersebut terindikasi penipuan!</div>
            <input type="checkbox" name="reason" id="reason1">
            <label for="reason1">${this.choices[0]}</label>
            <input type="checkbox" name="reason" id="reason2">
            <label for="reason2">${this.choices[1]}</label>
            <input type="checkbox" name="reason" id="reason3">
            <label for="reason3">${this.choices[2]}</label>
            <input type="checkbox" name="reason" id="reason4">
            <label for="reason4">${this.choices[3]}</label>
            <input type="checkbox" name="reason" id="reason5">
            <label for="reason5">${this.choices[4]}</label>
        `;
    }


    /* ===========================================================================================
       SET BUTTON
    =========================================================================================== */

    setButton () {
        const btnTypes = document.querySelectorAll('input[name="chat-type"]');
        const btnReason = document.querySelectorAll('input[name="reason"]');
        const btnSubmit = document.querySelector("#btnSubmit");

        btnSubmit.disabled = true;

        // ============================================================================== Type Buttons
        btnTypes.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                this.sounds.pop.play();
                this.chosenType = btn.id == "type1" ? 0 : 1;

                if (this.chosenType == 0) {
                    this.eReason.style.display = "flex";
                    this.eReason.style.opacity = 0;

                    btnReason.forEach((btn) => {
                        btn.checked = false;
                    });

                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth',
                    });

                    anime({
                        targets: this.eReason,
                        opacity: 1,
                        duration: 300,
                        easing: "easeInQuart",
                        complete: () => {
                            btnSubmit.disabled = true;
                        },
                    });
                }
                else {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth',
                    });

                    anime({
                        targets: this.eReason,
                        opacity: 0,
                        duration: 300,
                        easing: "easeInQuart",
                        complete: () => {
                            this.eReason.style.display = "none";
                            btnSubmit.disabled = false;
                        },
                    });
                }

                this.eGamePanel.querySelector("#answer").classList.remove("wrong");
            });
        });

        // ============================================================================== Reason Buttons
        btnReason.forEach((btn) => {
            btn.addEventListener("click", () => {
                this.sounds.pop.play();
                this.eGamePanel.querySelector("#reason").classList.remove("wrong");

                let btnChecked = 0;

                btnReason.forEach((btn) => {
                    if (btn.checked == true) {
                        btnChecked += 1;
                    }
                });

                if (btnChecked == this.nCorrect) {
                    btnSubmit.disabled = false;
                }
                else {
                    btnSubmit.disabled = true;
                }
            });
        });
        
        // ============================================================================== Check Button
        btnSubmit.addEventListener("click", () => {
            let typeCorrect = this.chatType == this.chosenType ? true : false;
            btnSubmit.disabled = true;

            if (!typeCorrect) {
                this.sounds.wrong.play();

                anime({
                    targets: this.eReason,
                    opacity: 0,
                    duration: 300,
                    easing: "easeInQuart",
                    begin: () => {
                        this.eGamePanel.querySelector("#answer").classList.add("wrong");
                        this.codeType = "w";
                    },
                    complete: () => {
                        this.eReason.style.display = "none";
                        this.toast(this.tWrong);

                        this.eGamePanel.querySelector("#answer").scrollIntoView({ 
                            behavior: "smooth",
                            block: "start",
                        });

                        btnTypes.forEach((btn) => {
                            btn.checked = false;
                        });
                    },
                });
            }
            else {
                if (this.chatType == 0) {
                    let corrected = 0;

                    btnReason.forEach((btn) => {
                        if (btn.checked == true) {
                            let checkIt = false;

                            this.correctReason.forEach((answer) => {
                                if (btn.labels[0].textContent == answer) {
                                    corrected += 1;
                                    checkIt = true;
                                }
                            });

                            btn.checked = checkIt;
                        }
                    });

                    if (corrected == this.nCorrect) {
                        this.nextStage();
                    }
                    else {
                        this.sounds.wrong.play();

                        this.eGamePanel.querySelector("#reason").classList.add("wrong");
                        if (corrected == 0) {
                            this.toast(this.tWrongReason);
                        }
                        else {
                            this.toast(this.tBadReason);
                        }
                        this.codeReason += 1;
                    }
                }
                else {
                    this.nextStage();
                }
            }
        });
    }

    nextStage() {
        this.sounds.cling.play();

        anime({
            targets: this.eCurtain,
            opacity: 1,
            duration: 500,
            easing: "easeInQuart",
            begin: () => {
                this.eCurtain.style.pointerEvents = "auto";
                this.eCurtain.innerHTML = `${this.cQuest.note}<button>${this.tNext}</button>`;
            },
            complete: () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });

                this.codeAll += `${this.cQuest.id}${this.codeType}${this.codeReason}-`;
                console.log(this.codeAll);

                this.eCurtain.querySelector("button").addEventListener("click", () => {
                    this.sounds.pop.play();

                    if (this.stage < this.nQuest) {
                        anime({
                            targets: this.eCurtain,
                            opacity: 0,
                            duration: 500,
                            easing: "easeInQuart",
                            delay:200,
                            begin: () => {
                                this.eCurtain.style.pointerEvents = "none";
                                this.stage += 1;
                                this.loadLevel();
                            },
                        });
                    }
                    else {
                        this.eCurtain.innerHTML = `${this.tClosing}<button>${this.tHome}</button>`;

                        this.eCurtain.querySelector("button").addEventListener("click", () => {
                            this.sounds.pop.play();

                            window.location.replace(gameData.homePage);
                        }, {once: true});
                        
                        // ============================================================================== Form Posting
                        this.submitForm(gameData.form, [localStorage.getItem("playerId"), `${this.codeAll}`]);
                    }
                    
                }, {once:true});
            }
        });
    }
}