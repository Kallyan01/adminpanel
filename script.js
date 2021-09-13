let list = document.querySelectorAll(".list")

function removeclass() {
    Array.from(list).forEach((element, idx) => {
        element.classList.remove('active');
    });
}

Array.from(list).forEach((element) => {

    element.addEventListener('click', () => {
        removeclass();
        element.classList.add('active');
    })
});