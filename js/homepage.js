
class GameMenu {
    eCurtain = document.querySelector("#curtain");
    eButtons = document.querySelectorAll("button");

    constructor (param) {

        const appUrls = param.appUrls;

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

        // ============================================================================ Button Listeners
        this.eButtons.forEach((btn, i) => {
            btn.addEventListener("click", (event) => {
                anime({
                    targets: this.eCurtain,
                    opacity: 1,
                    duration: 800,
                    easing: "easeInQuart",
                    begin: () => {
                        this.eCurtain.style.pointerEvents = "auto"; 
                    },
                    complete: () => {
                        window.location.replace(appUrls[i]);
                    }
                });
            });
        });
    }
}