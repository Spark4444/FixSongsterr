let controls = document.querySelector("#controls");
let controlsBounding = controls.getBoundingClientRect();
let controlsMostLeft = controlsBounding.left;
let controlsMostRight = controlsBounding.left + controlsBounding.width;


let settingsButton = document.querySelector("#c-settings");
let exportButton = document.querySelector("#c-export");
let transposeButton = document.querySelector("#c-transpose");
let speedButton = document.querySelector("#c-speed");
let mixerButton = document.querySelector("#mixer-button");
let buttonsWithPopups = [settingsButton, exportButton, transposeButton, speedButton, mixerButton];

function adjustBottomPopup(originalButton, generatedPopup) {
    let originalButtonBounding = originalButton.getBoundingClientRect();
    let originalButtonCenter = originalButtonBounding.left + originalButtonBounding.width / 2;

    let generatedPopupBounding = generatedPopup.getBoundingClientRect();
    let generatedPopupCenter = generatedPopupBounding.width / 2;

    let left = originalButtonCenter - generatedPopupCenter;

    if (left < controlsMostLeft) {
        left = controlsMostLeft;
    } 

    let popupMostRightPoint = left + generatedPopupBounding.width;
    if (popupMostRightPoint > controlsMostRight) {
        left = controlsMostRight - generatedPopupBounding.width;
    }

    return left;
}

buttonsWithPopups.forEach(button => {
    button.addEventListener("click", () => {
        setTimeout(() => {
            let generatedPopup = document.querySelector(".idrtTa_popupsLayer [role='dialog']");
            console.log(generatedPopup);
            let left = adjustBottomPopup(button, generatedPopup);
            generatedPopup.style.left = `${left}px`;
        }, 10);
    });
});