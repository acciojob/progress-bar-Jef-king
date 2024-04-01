const circles = document.querySelectorAll('.circle');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentCircle = 0;

function updateButtons() {
    prevButton.disabled = currentCircle === 0;
    nextButton.disabled = currentCircle === circles.length - 1;
}

nextButton.addEventListener('click', () => {
    if (currentCircle < circles.length - 1) {
        circles[currentCircle].classList.remove('active');
        currentCircle++;
        circles[currentCircle].classList.add('active');
        updateButtons();
    }
});

prevButton.addEventListener('click', () => {
    if (currentCircle > 0) {
        circles[currentCircle].classList.remove('active');
        currentCircle--;
        circles[currentCircle].classList.add('active');
        updateButtons();
    }
});

updateButtons(); // Initialize button states
