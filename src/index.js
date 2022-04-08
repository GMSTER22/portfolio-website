import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();



//animating the title
let title = document.querySelector("[data-title]").dataset.title.split("");


let titleToAnimate = document.getElementById("job-title");

const animateTitle = () => {
    for (let i = 0; i < title.length; i++) {
        setTimeout(() => {
            let El = document.createElement("span");
            El.textContent = title[i];
            titleToAnimate.appendChild(El);          
        }, 125*i);
    }
}

animateTitle();