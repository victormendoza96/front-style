import Slider from './slider.js'
import Preloader from '../preloader/preloader'
import elements from './elements'
let slidertext = document.getElementById('slider-text');
let slidertitle =document.getElementById('slider-title');
let slidersubtitle = document.getElementById('slider-subtitle');
let sliderimage = document.getElementById('slider-image');
let content = document.getElementById('slider-content');
let arrowleft =document.querySelector('.a-left');
let arrowright =document.querySelector('.a-right');
console.log(arrowright);
console.log(arrowleft);

let slider = new Slider({
  elements,
  animationFunc: function(element){
    content.classList.add("hide")
    sliderimage.classList.add("hide")
   setTimeout(function(){

    slidertitle.innerHTML = element.title
    slidersubtitle.innerHTML = element.subtitle
    slidertext.innerHTML = element.text
    sliderimage.src = element.image
    content.classList.remove("hide")
    sliderimage.classList.remove("hide")
   },600)
    
  },
  speed:3000
}) 

slider.play();

arrowleft.addEventListener('click',slider.clickPrev);
arrowright.addEventListener('click',slider.clickNext);

const imagesPaths = elements.map(el => el.image)

Preloader.preloaderImages({
  images: imagesPaths,
  completed: function(){
    document.querySelector('.arrows').style.display = "block";
  }

})
