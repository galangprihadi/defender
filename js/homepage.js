
class GameMenu {
    eCurtain = document.querySelector("#curtain");
    btnGames = document.querySelectorAll("button");

    constructor (param) {
        const appUrls = param.appUrls;

        // localStorage.clear();

        // ============================================================================ Player Id Check
        if (localStorage.getItem("playerId")) {
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
        else {
            this.playerIdForm();
        }

        // ============================================================================ Button Games
        for (let i=0; i < this.btnGames.length - 1; i++) {
            this.btnGames[i].addEventListener("click", (event) => {
                this.sounds.pop.play();

                anime({
                    targets: this.eCurtain,
                    opacity: 1,
                    duration: 800,
                    easing: "easeInQuart",
                    begin: () => {
                        this.eCurtain.style.pointerEvents = "auto";
                        console.log(localStorage.getItem("playerId"));
                    },
                    complete: () => {
                        window.location.replace(appUrls[i]);
                    }
                });
            });
        }

        // ============================================================================ Button Reset Id
        document.querySelector("#btnReset").addEventListener("click", (event) => {
            this.sounds.pop.play();
            
            localStorage.clear();

            anime({
                targets: this.eCurtain,
                opacity: 1,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "auto"; 
                    this.playerIdForm();
                },
            }); 
        });
    }


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


    // ============================================================================ Player Id Form
    playerIdForm() {
        this.eCurtain.innerHTML = `
            Your identity:
            <input type="text" id="formId" name="detektifName" placeholder="NIM" required maxlength="10" autocomplete="off">
            <button disabled="true" id="btnSave">Simpan</button>
        `;

        const eFormId = document.querySelector("#formId");
        const btnSave = document.querySelector("#btnSave");

        eFormId.addEventListener("input", (event) => {
            if (event.target.value.length >= 8) {
                btnSave.disabled = false;
            }
            else {
                btnSave.disabled = true;
            }
        });

        btnSave.addEventListener("click", (event) => {
            this.sounds.pop.play();

            localStorage.setItem("playerId", eFormId.value);

            anime({
                targets: this.eCurtain,
                opacity: 0,
                duration: 800,
                easing: "easeInQuart",
                begin: () => {
                    this.eCurtain.style.pointerEvents = "none"; 
                },
                complete: () => {
                    this.eCurtain.innerHTML = "";
                },
            });
        }, {once: true});
    }
}