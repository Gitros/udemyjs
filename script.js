const arrow = document.querySelector('fas fa-arrow-down');
const button = document.querySelector('.arrow');
const firstImage = document.querySelector('.item1')

function add() {
    firstImage.classList.toggle('show');

    if (firstImage.classList.contains('show')) {
        console.log("ok");
    }
    else {
        console.log("nie ok");
    }
};

button.addEventListener('click', add)

