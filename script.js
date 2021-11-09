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

let sidemenu = document.getElementById('smenu')
let menuBtn = document.getElementById('bMenu')

menuBtn.addEventListener('click',()=>{
    console.log("clicked")
    if(sidemenu.classList.contains('sactive'))
    {
        sidemenu.classList.remove('sactive')
    }
    else
    {
        sidemenu.classList.add('sactive')
    }
})