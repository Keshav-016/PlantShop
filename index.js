const heroCarouselContainer = document.querySelector('.sliderContainer');
const plantCollectionContainer = document.querySelector('.plantCollectionCarousel');
const plantCarouselForward = document.querySelector('.plantCarouselForward');
const plantCarouselBackward = document.querySelector('.plantCarouselBackward');
const heroImageAddress = ['plant.png', 'plant.png', 'plant.png'];
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


heroImageAddress.forEach((element) => {
    const carouselImage = document.createElement('img');
    carouselImage.setAttribute('src', `./images/heroSection/${element}`);
    heroCarouselContainer.appendChild(carouselImage);
})

function createPlantCarousel() {
    plantCollectionData.forEach((element) => {
        const container = document.createElement('div');
        container.setAttribute('class', 'flex-shrink-0')
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

setInterval(()=>{
    let lastImage = plantCollectionData.shift();
    plantCollectionData.push(lastImage);
    plantCollectionContainer.innerHTML='';
    createPlantCarousel();
},2000)

plantCarouselBackward.addEventListener('click',(item)=>{
    let lastImage = plantCollectionData.shift();
    plantCollectionData.push(lastImage);
    plantCollectionContainer.innerHTML='';
    createPlantCarousel();
});
plantCarouselForward.addEventListener('click',(item)=>{
    let lastImage = plantCollectionData.pop();
    plantCollectionData.unshift(lastImage);
    plantCollectionContainer.innerHTML='';
    createPlantCarousel();
})