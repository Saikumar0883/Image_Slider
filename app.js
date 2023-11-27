const images = document.querySelectorAll('.div-container img');
let div = document.querySelector('div');
let setFullImg = document.querySelector('.full');
let nextbtn = document.querySelector('.nextbtn');
let prevbtn = document.querySelector('.prevbtn');
let closeFullImgBtn = document.querySelector('.closeFullImgbtn');
let imagediv = document.querySelector('.div-container');

nextbtn.style.visibility = 'hidden';
prevbtn.style.visibility = 'hidden';
closeFullImgBtn.style.visibility = 'hidden';

closeFullImgBtn.addEventListener("click", () => {
    close();
})


let currentImageIndex = 0;

function clicked(index) {
    currentImageIndex = index;
    div.classList.add('full-img')
    closeFullImgBtn.style.visibility = 'visible';
    prevbtn.style.visibility = 'visible';
    nextbtn.style.visibility = 'visible';
    imagediv.style.visibility = 'hidden';
    setImage(images[currentImageIndex].src);

}
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        clicked(index)
    });
});

function close() {
    imagediv.style.visibility = 'visible';
    setFullImg.setAttribute('src', '');
    div.classList.toggle('full-img')
    nextbtn.style.visibility = 'hidden';
    prevbtn.style.visibility = 'hidden';
    closeFullImgBtn.style.visibility = 'hidden';
}

function setImage(src) {
    setFullImg.setAttribute('src', src);
    if (currentImageIndex == images.length - 1) {
        nextbtn.style.visibility = 'hidden';
    }
    if (currentImageIndex == 0) {
        prevbtn.style.visibility = 'hidden';
    }

}
function nextImage() {
    currentImageIndex += 1;
    if (prevbtn.style.visibility == 'hidden');
    prevbtn.style.visibility = 'visible';
    setImage(images[currentImageIndex].src);
}

function prevImage() {
    currentImageIndex -= 1;
    if (nextbtn.style.visibility == 'hidden');
    nextbtn.style.visibility = 'visible';
    setImage(images[currentImageIndex].src);
}

