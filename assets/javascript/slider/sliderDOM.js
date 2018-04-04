import Slider from './slider.js'

let slider = new Slider({
  elements: [1,2,3
    // {
    //   title: 'lorem ipsum',
    //   subtitle: 'ipsum',
    //   image: '../public/images/tocar.jpg',
    //   text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quo optio maiores, quisquam omnis iste quod expedita. Rem provident amet eveniet consequuntur labore iusto eos, nihil, quis odio eum magni.'
    // },
    // {
    //   title: 'lorem ipsum',
    //   subtitle: 'ipsum',
    //   image: '../public/images/tocar.jpg',
    //   text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quo optio maiores, quisquam omnis iste quod expedita. Rem provident amet eveniet consequuntur labore iusto eos, nihil, quis odio eum magni.'
    // }
],
    animationFunc: function(element){
      console.log(element);
    }
}) 

slider.play
setTimeout(slider.stop, 5000)