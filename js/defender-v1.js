


class Defender {
    eCurtain = document.getElementById("curtain");

    // questPanels = document.querySelectorAll(".quest-panel");
    // quest1 = document.querySelectorAll('input[name="q1"]');

    questNum = 0;
    finished = false;
    
    /* ================================================================================
        GENERAL FUNCTIONS
    ================================================================================ */

    // ================================================================================ Transition
    transition(type){
        if (type == "open") {
            anime({
                targets: this.eCurtain,
                opacity: 0,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "none";
                },
            });
        }
        else if (type == "close") {
            anime({
                targets: this.eCurtain,
                opacity: 1,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "auto";
                },
                complete: () => {
                    // Home
                }
            });
        }
        else if (type == "reload") {
            const nextAnime = () => {
                anime({
                    targets: this.eCurtain,
                    opacity: 0,
                    duration: 800,
                    easing: "easeInQuart",
                    begin: () => {
                        this.eCurtain.style.pointerEvents = "none";
                    },
                });
            }
            
            anime({
                targets: this.eCurtain,
                opacity: 1,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "auto";
                },
                complete: () => {
                    this.reloadLevel();
                    nextAnime();
                }
            });
        }
    }


    /* ================================================================================
        GAME FUNCTIONS
    ================================================================================ */

    // ================================================================================ Load Game
    loadGame() {
        setTimeout(() => {
            anime({
                targets: this.eCurtain,
                opacity: 0,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "none";
                },
            });
        }, 1000);
        
        this.setQuestion();
    }

    // ================================================================================ Reload Level
    // reloadLevel() {
    //     console.log("Reload Level");
    // }

    setQuestion() {
        this.questPanels.forEach((panel) => {
            panel.style.display = "none";
        });

        this.questPanels[this.questNum].style.display = "flex";

        this.question = this.questPanels[this.questNum].querySelector(".question");
        this.answers = this.questPanels[this.questNum].querySelectorAll("input");

        this.explanation = this.questPanels[this.questNum].querySelector(".explanation");
        this.btnOk = this.explanation.querySelector("button");

        this.btnOk.classList.remove("green");

        // ================================================================================= Button Functions

        this.answers.forEach((answer) => {
            answer.addEventListener("click", (event) => {
                if (event.target.id == this.questPanels[this.questNum].dataset.answer) {
                    // console.log("Correct");
                    this.btnOk.innerHTML = "Lanjut";
                    this.btnOk.classList.add("green");
                }
                else {
                    this.btnOk.innerHTML = "Perbaiki Jawaban";
                }

                const nextAnime = () => {
                    anime({
                        targets: this.questPanels[this.questNum],
                        opacity: 1,
                        duration: 300,
                        easing: "easeOutQuart",
                        complete: () => {
                            if (event.target.id == this.questPanels[this.questNum].dataset.answer) {
                                if (this.questNum < this.questPanels.length - 1) {
                                    this.questNum += 1;
                                }
                                else {
                                    // console.log("Selesai");
                                    this.finished = true;
                                }
                            }
                        },
                    });
                };

                anime({
                    targets: this.questPanels[this.questNum],
                    opacity: 0,
                    duration: 300,
                    delay: 500,
                    easing: "easeOutQuart",
                    complete: () => {
                        nextAnime();
                        this.question.style.visibility = "hidden";
                        this.explanation.style.visibility = "visible";
                    }
                });
            }, {once: true});

        });

        this.btnOk.addEventListener("click", (event) => {
            // console.log("Okay");
            
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
                    targets: this.questPanels[this.questNum],
                    opacity: 0,
                    duration: 300,
                    easing: "easeOutQuart",
                    complete: () => {
                        this.setQuestion();
                    }
                });
            }
        }, {once: true});


        // ================================================================================= Animations

        this.question.style.visibility = "visible";
        this.explanation.style.visibility = "hidden";
        this.questPanels[this.questNum].style.opacity = "0";

        anime({
            targets: this.questPanels[this.questNum],
            opacity: 1,
            duration: 300,
            easing: "easeOutQuart",
        });

    }

    constructor(param) {
        this.questPanels = document.querySelectorAll(".quest-panel");

        this.homeAddress = param.home || "../index.html";
        this.nextAddress = param.next || "../index.html";

        


        // this.quest1 = this.questPanels[0].querySelectorAll('input');

        // this.checkTime = undefined;

        this.loadGame();

        


        // console.log(this.questPanels[0].dataset.answer);

        

        

        // this.quest1.forEach((radio) => {
        //     radio.addEventListener("click", (event) => {

        //         if (this.checkTime) {
        //             clearTimeout(this.checkTime);
        //         }

        //         if (event.target.id == this.questPanels[0].dataset.answer) {
        //             console.log("Correct");

        //             // this.checkTime = setTimeout(() => {
        //             //     console.log("Correct");
        //             // }, 1000);

                    
                    
        //         }
        //     });
        // });
        

        // document.addEventListener("keydown", (event) => {
        //     if (event.code == "Space") {
        //         this.transition("reload");
        //     } 
        // });
    }


    
    
    
}