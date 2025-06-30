let dayNight=document.querySelector('.dayOrNight');
let banner=document.querySelector('.banner');
dayNight.addEventListener('click',()=>{
  banner.classList.toggle("night")
})

let typingEffect= new Typed('#text',{
  strings:[' an Entreprenuer','a farmer','a Developer',' a Philanthropist'
    
  ],
  loop:true,
  typeSpeed:100,
  backSpeed:50,
  backDelay:1000
});