const heroCarouselContainer = document.querySelector('.sliderContainer');
const plantCollectionContainer = document.querySelector('.plantCollectionCarousel');
const plantCarouselForward = document.querySelector('.plantCarouselForward');
const plantCarouselBackward = document.querySelector('.plantCarouselBackward');
const heroLeftSlider = document.querySelector('.heroLeftSlider');
const heroRightSlider = document.querySelector('.heroRightSlider');
const heroSlider = document.querySelectorAll('.heroSlider');
const clientCard = document.querySelectorAll('.clientTalkCard');
let heroCurrentIndex = 0;
let clientCardIndex = 0;

const heroImageAddress = [
    {
        img: "./images/heroSection/plant.png"
    },
    {
        img: "./images/heroSection/leave.avif"
    },
    {
        img: "./images/heroSection/greenLeave.avif"
    },
];

const plantCollectionData = [
    {
        text: "Bird of paradise",
        imageName: "paradise.png"
    },
    {
        text: "Rubber plants",
        imageName: "rubber.png"
    },
    {
        text: "String of pearls",
        imageName: "pearls.png"
    },
    {
        text: "Bird of paradise",
        imageName: "paradise.png"
    },
];

function handleResizeHero() {
    if (window.innerWidth >= 1200) {
        heroCarouselImage[heroCurrentIndex].style.marginRight = `-80px`;
        heroCarouselImage.forEach((item) => {
            item.style.height = "38rem"
        });
        heroCarouselImage[heroCurrentIndex].style.height = "32rem";
    } else {
        heroCarouselImage[heroCurrentIndex].style.marginRight = '0';
        heroCarouselImage.forEach((item) => {
            item.style.height = "100%"
        });
        heroCarouselImage[heroCurrentIndex].style.height = "100%";
    }
}

window.addEventListener('resize', () => {
    handleResizeHero();
});

function updateHeroCarousel(heroCarouselImage, heroCurrentIndex) {
    heroCarouselImage.forEach((item) => {
        // item.style.height = window.innerWidth > 998 ? "38rem" : "100%";
        item.style.transform = `translateX(-${100 * heroCurrentIndex}%)`;
        item.style.marginRight = `0`;
        item.style.zIndex = 0;
    });
    handleResizeHero();
    // heroCarouselImage[heroCurrentIndex].style.height = "32rem";
    heroCarouselImage[heroCurrentIndex].style.zIndex = 2;
}


heroImageAddress.forEach((element) => {
    const carouselImage = document.createElement('img');
    carouselImage.setAttribute('class', 'heroCarouselImage')
    carouselImage.setAttribute('src', `${element.img}`);
    heroCarouselContainer.appendChild(carouselImage);
})

const heroCarouselImage = document.querySelectorAll('.heroCarouselImage')
updateHeroCarousel(heroCarouselImage, heroCurrentIndex);

heroRightSlider.addEventListener('click', () => {
    heroSlider[heroCurrentIndex].style.backgroundColor = "#92B896"
    heroCurrentIndex = (heroCurrentIndex + 1) % heroImageAddress.length;
    heroSlider[heroCurrentIndex].style.backgroundColor = "#3E8646"
    updateHeroCarousel(heroCarouselImage, heroCurrentIndex)
})

heroLeftSlider.addEventListener('click', () => {
    heroSlider[heroCurrentIndex].style.backgroundColor = "#92B896";
    heroCurrentIndex = (heroCurrentIndex - 1 + heroImageAddress.length) % heroImageAddress.length;
    heroSlider[heroCurrentIndex].style.backgroundColor = "#3E8646";
    updateHeroCarousel(heroCarouselImage, heroCurrentIndex);
})

function createPlantCarousel() {
    plantCollectionData.forEach((element) => {
        const container = document.createElement('div');
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'plantCollectionImage mb-4')
        const carouselImage = document.createElement('img');
        carouselImage.setAttribute('src', `./images/plantCollection/${element.imageName}`);
        imageContainer.appendChild(carouselImage);
        container.appendChild(imageContainer);
        const textContainer = document.createElement('span');
        textContainer.textContent = element.text;
        textContainer.setAttribute('class', 'collectionImageHeading');
        container.appendChild(textContainer);
        plantCollectionContainer.appendChild(container);
    })
}

createPlantCarousel()

plantCarouselBackward.addEventListener('click', (item) => {
    let lastImage = plantCollectionData.shift();
    plantCollectionData.push(lastImage);
    plantCollectionContainer.innerHTML = '';
    createPlantCarousel();
});

plantCarouselForward.addEventListener('click', (item) => {
    let lastImage = plantCollectionData.pop();
    plantCollectionData.unshift(lastImage);
    plantCollectionContainer.innerHTML = '';
    createPlantCarousel();
})

setInterval(() => {
    clientCard.forEach((item) => {
        item.style.transform = `translateX(-${100 * clientCardIndex}%)`;
    })
    clientCardIndex = (clientCardIndex + 1) % 3;
}, 2000)