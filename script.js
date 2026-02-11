const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");
function moveNoButton() {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const yesRect = yesBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    let x, y;
    let isOverlapping = true;
    const positions = [0.2, 0.4, 0.6, 0.8, 1];
    while (isOverlapping) {
        x = positions[Math.floor(Math.random() * positions.length)] * maxX;
        y = positions[Math.floor(Math.random() * positions.length)] * maxY;

        const noRect = {
            left: containerRect.left + x,
            right: containerRect.left + x + noBtn.offsetWidth,
            top: containerRect.top + y,
            bottom: containerRect.top + y + noBtn.offsetHeight
        };

        isOverlapping = !(
            noRect.right < yesRect.left ||
            noRect.left > yesRect.right ||
            noRect.bottom < yesRect.top ||
            noRect.top > yesRect.bottom
        );
    }

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* Desktop */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile */
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevents click
    moveNoButton();
});

/* YES button */
yesBtn.addEventListener("click", () => {
    window.location.href = "yes_page.html";
});
// gokul
