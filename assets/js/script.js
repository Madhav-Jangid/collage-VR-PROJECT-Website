document.addEventListener('mousemove', function (event) {
    var cursorX = event.clientX;
    var cursorY = event.clientY;


});

DisplayCard('card1','d1','c1')
function DisplayCard(Div, Details,cover) {
    const carddiv = document.getElementById(Div);
    const cardWithid = document.getElementById(cover);
    const carddtl = document.getElementById(Details);
    const alldiv = document.querySelectorAll('.card');
    const alldtl = document.querySelectorAll('.details');
    const coverDiv = document.querySelectorAll('.coverDiv');
    const coverDivhi = document.querySelectorAll('.coverDiv h1');

    alldiv.forEach((element) => {
        element.style.width = '70px';
    });

    alldtl.forEach((element) => {
        element.style.display = 'none';
    });

    // coverDivhi.forEach((element) => {
    //     element.style.color = 'var(--red)';
    // });

    coverDiv.forEach((element) => {
        element.style.display = 'flex'
        element.style.backgroundColor = '#fff'
    });


    carddtl.style.display = 'flex';
    carddiv.style.width = '80%'
    cardWithid.style.display = 'none'
}



function slideimg() {
    const imgs = document.querySelectorAll('.slide');

    imgs.forEach((element) => {
        element.style.color = 'red';
    })
}



const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active')
    );
    this.classList.add('active');
}
list.forEach((item) => {
    item.addEventListener('click', activeLink)
});