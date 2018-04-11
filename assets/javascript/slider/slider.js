export default class Slider{
  constructor({elements, animationFunc,speed}){
    this.elements = elements;
    this.animationFunc = animationFunc;
    this.speed = speed;

    this.index = 0;
    this.size = elements.length;

      
  }


  next = () =>{
    this.index++;
    if(this.index >= this.size) this.index = 0

      this.animationFunc(this.elements[this.index]);   

  }

  prev = () =>{
    this.index--;
    if(this.index < 0) this.index = this.size -1
  
    this.animationFunc(this.elements[this.index]); 
  }

  clickNext = ()=>{
    this.next();
    if(this.interval){
      this.stop();
      this.play();
    }
  }
  clickPrev = ()=>{
    this.prev();
    if(this.interval){
      this.stop();
      this.play();
    }
  }

  play = ()=>{
    this.interval = setInterval(this.next,this.speed)}
      
  stop = ()=>{ clearInterval(this.interval)
  ;}

}


