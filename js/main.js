const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentImgIndex = 0;
const totalImgs = images.length;

const carouselImage = document.getElementById('carousel-img');
const carouselTitle = document.getElementById('carousel-title');
const carouselText = document.getElementById('carousel-text');

const showImg = (index) => {
    const { image, title, text } = images[index];
    carouselImage.src = image;
    carouselTitle.textContent = title;
    carouselText.textContent = text;
    
    console.log({ image, title, text });
}

const prevButton = document.getElementById('prevBtn');
prevButton.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + totalImgs) % totalImgs;
    showImg(currentImgIndex);
})

const nextButton = document.getElementById('nextBtn');
nextButton.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % totalImgs;
    showImg(currentImgIndex);
})