const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".buttons");
function distance2D(x1, y1, x2, y2) {
    if(x1==null || y1==null)
    {
        x1=0;
        y1=0;
    }
    return Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    );
}
function moveNoButton() {
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const yesRect = yesBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    let x, y;
    let isOverlapping = true;
    let prevX=null,prevY=null;
    let prevCheck=true;
    while (isOverlapping || prevCheck) {
        x = Math.random()* maxX;
        y = Math.random()* maxY;

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
        prevCheck=distance2D(prevX,prevY,x,y)<noBtn.offsetWidth+noBtn.offsetHeight;
    }

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    prevX=x;
    prevY=y;
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
