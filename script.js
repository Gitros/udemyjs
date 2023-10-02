const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2')

function handleClick() {
    console.log("nasicsnales");
}

function math() {
    console.log(2 + 2);
}

btn1.addEventListener('click', handleClick);

btn2.addEventListener('click', math);