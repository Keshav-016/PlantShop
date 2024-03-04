const carouselContainer = document.querySelector('.sliderContainer');
let arr = ['plant.png' ,'plant.png' , 'plant.png'];

arr.forEach((element) => {
    let carouselImage = document.createElement('img');
    carouselImage.setAttribute('src', `./images/heroSection/${element}`);
    carouselContainer.appendChild(carouselImage);
})
