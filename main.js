import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import './node_modules/waypoints/lib/noframework.waypoints';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
//Typed Script
let typed = new Typed('#element', {
    strings: ['Food...', 'Drink...'],
    typeSpeed: 30,
    loop:true,
    backDelay:3000,
    backSpeed:30
  });

  //Scroll Reveal
  let toDown = {
    distance: '50px',
    origin: 'top',
    interval:300,
    duration:800
};

ScrollReveal().reveal('.toDown', toDown);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval:300,
    duration:800
};

ScrollReveal().reveal('.toRight', toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval:300,
    duration:800
};

ScrollReveal().reveal('.toLeft', toLeft);

//Waypoints
 new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavlink=document.querySelector(".nav-link.active");
        //console.log(oldNavlink);
        if(oldNavlink != null){
        oldNavlink.classList.remove("active");
        }
      let currNavlink=document.querySelector(`[href="#home"]`);
      currNavlink.classList.add("active");
    },
    offset: "0%" 
  })

// new Waypoint({
//     element: document.getElementById('about'),
//     handler: function(direction) {
//         let oldNavlink=document.querySelector(".nav-link.active");
//         oldNavlink.classList.remove("active");
//       let currNavlink=document.querySelector(`[href="#about"]`);
//       currNavlink.classList.add("active");
//     },
//     //offset: "50%" 
//   })

//   new Waypoint({
//     element: document.getElementById('services'),
//     handler: function(direction) {
//         let oldNavlink=document.querySelector(".nav-link.active");
//         oldNavlink.classList.remove("active");
//       let currNavlink=document.querySelector(`[href="#services"]`);
//       currNavlink.classList.add("active");
//     },
//     offset: "50%" 
//   })

//   new Waypoint({
//     element: document.getElementById('menu'),
//     handler: function(direction) {
//         let oldNavlink=document.querySelector(".nav-link.active");
//         oldNavlink.classList.remove("active");
//       let currNavlink=document.querySelector(`[href="#menu"]`);
//       currNavlink.classList.add("active");
//     },
//     offset: "50%" 
//   })

  let sections=['about','services','menu'];
  sections.forEach(function(section){
    new Waypoint({
      element: document.getElementById(section),
      handler: function(direction) {
          let oldNavlink=document.querySelector(".nav-link.active");
          oldNavlink.classList.remove("active");
        let currNavlink=document.querySelector(`[href="#${section}"]`);
        currNavlink.classList.add("active");
      },
      offset: "50%" 
    })
  })

  new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldNavlink=document.querySelector(".nav-link.active");
        oldNavlink.classList.remove("active");
      let currNavlink=document.querySelector(`[href="#contact"]`);
      currNavlink.classList.add("active");
    },
    offset: "75%" 
  })
  //Adding Menus with array
  let menulists=[
   {
    id:1,
    img:"img/plate1.png",
    title:"Barbeque Salad",
    description:"Special delicious dish",
    price:50.9,
    currency:"$"
   },
   {
    id:2,
    img:"img/plate2.png",
    title:"Salad with Fish",
    description:"Special delicious dish",
    price:30.9,
    currency:"$"
   },
   {
    id:3,
    img:"img/plate3.png",
    title:"Spainach Salad",
    description:"Special delicious dish",
    price:25.9,
    currency:"$"
   }
  ];
  let menuRow=document.getElementById("menuRow");
  menulists.forEach(function(menulist){
    let div=document.createElement("div");
    div.classList.add("col-8","col-md-4","col-lg-2");
    div.innerHTML=`
    <div class="card plate-card mb-5 ">
            <img src="${menulist.img}" alt="" class=" w-75 card-img mx-auto d-block my-4">
            <div class="card-body">
              <p class="fw-bold">${menulist.title}</p>
              <p class="text-black-50 small">${menulist.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0">${menulist.currency} ${menulist.price}</p>
                <button class="btn btn-primary">
                  <i class="bi bi-cart"></i>
                </button>
              </div>
            </div>
          </div>
    `;
    menuRow.append(div);
   
  })