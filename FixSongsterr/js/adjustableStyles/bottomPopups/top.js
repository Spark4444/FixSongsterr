// Move the buttons up
const popUpInitialPosition = 70;
let popupMoveUp = popUpInitialPosition;

let currentBtn;
const debounceTime = 100;

// Button position reference values (px)
const buttonMoveUp = 59;
const buttonInitialPosition = 54;

// Automatically adjust popup vertical offset when bottom buttons change height
function updatePopupMoveUp() {
  // Compute how much the button row has grown from its initial position
  const currentHeight =
    window.innerHeight - popupButtons[0].getBoundingClientRect().y;
  const multiplier = (currentHeight - buttonInitialPosition) / buttonMoveUp;

  popupMoveUp = popUpInitialPosition + buttonMoveUp * multiplier;
}
updatePopupMoveUp();
