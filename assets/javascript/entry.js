import '../css/app.scss';
import './slider/sliderDOM.js';

 document.querySelector('.btn-menu')
    .addEventListener("click",function(){
        document.querySelector('.menu').classList.add("active");
    })

 document.querySelector('.close')
    .addEventListener("click",function(){
        document.querySelector('.menu').classList.remove("active");
    })