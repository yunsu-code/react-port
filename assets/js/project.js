// main-loading
let mainLoader = document.getElementById("main-loader");
let body = document.getElementsByTagName("body");
function mainLoading() {
  setTimeout(function() {
    mainLoader.classList.remove("active")
    mainLoader.classList.add("noactive")
  },1700);
}
mainLoading();

/* ---------- cursor ------------ */
const cursor = document.querySelector("#cursor");
const a = document.getElementsByTagName("a")
document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + e.pageY +"px; left: "+ e.pageX+"px;")
})
document.addEventListener("click", e => {
  cursor.classList.add("click")
  setTimeout(() => {
    cursor.classList.remove("click")
  }, 500)
})

/* ---------- scroll animation ---------- */
// #main 
  let windowHeight,
      section;

  function init() {
    windowHeight = window.innerHeight;
    section = document.querySelectorAll(".section");
    header = document.getElementById("header");
  }
  function checkPosition() {
    for (let i = 0; i < section.length; i++) {
      let sectionAA = section[i];
      let positionFromTop = section[i].getBoundingClientRect().top;
      let item = document.querySelectorAll(".item" + i);
      console.log (item)
      if (positionFromTop - windowHeight <= 0) {
        
       if (i === 0 ) { 
        setTimeout(() => {
          header.classList.remove('hidden');
          header.classList.add('fade-top');
        }, 2000)
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-box");
          item[1].classList.remove("hidden");
          item[1].classList.add("fade-box");
        }, 1500)
        setTimeout(() => {
          item[2].classList.remove("hidden");
          item[2].classList.add("dash");
        }, 3500)
        setTimeout(() => {
            item[3].classList.remove("hidden");
          item[3].classList.add("fade-in");
        }, 4000)
        setTimeout(() => {
          item[4].classList.remove("hidden");
          item[4].classList.add("fade-right100");
        }, 4000)
       }
       else if (i === 1) {
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-left100");
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove('hidden');
          item[1].classList.add('fade-top-left');
          item[2].classList.remove('hidden');
          item[2].classList.add('fade-top-right');
        }, 2000)
        setTimeout(() => {
          item[3].classList.remove('hidden');
          item[3].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[4].classList.remove('hidden');
          item[4].classList.add('fade-box');
        }, 2000)
        setTimeout(() => {
          item[5].classList.remove('hidden');
          item[5].classList.add('fade-left100');    
        }, 4000)
        setTimeout(() => {
          item[6].classList.remove('hidden');
          item[6].classList.add('fade-left100');
        }, 4500)
        setTimeout(() => {
          item[7].classList.remove('hidden');
          item[7].classList.add('fade-in');
         }, 5500)
         setTimeout(() => {
          item[8].classList.remove('hidden');
          item[8].classList.add('fade-bottom100');
         }, 6500)
      }
       else if (i === 2) {
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-right100");
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove('hidden');
          item[1].classList.add('fade-top-left');
          item[2].classList.remove('hidden');
          item[2].classList.add('fade-top-right');
        }, 2000)
        setTimeout(() => {
          item[3].classList.remove('hidden');
          item[3].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[4].classList.remove('hidden');
          item[4].classList.add('fade-box');
        }, 2000)
        setTimeout(() => {
          item[5].classList.remove('hidden');
          item[5].classList.add('fade-left100');    
        }, 4000)
        setTimeout(() => {
          item[6].classList.remove('hidden');
          item[6].classList.add('fade-left100');
        }, 4500)
        setTimeout(() => {
          item[7].classList.remove('hidden');
          item[7].classList.add('fade-in');
         }, 5500)
         setTimeout(() => {
          item[8].classList.remove('hidden');
          item[8].classList.add('fade-bottom100');
         }, 6500)
       }
       else if (i === 3) {
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-left100");
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove('hidden');
          item[1].classList.add('fade-top-right');
        }, 2000)
        setTimeout(() => {
          item[2].classList.remove('hidden');
          item[2].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[3].classList.remove('hidden');
          item[3].classList.add('fade-box');
        }, 2000)
        setTimeout(() => {
          item[4].classList.remove('hidden');
          item[4].classList.add('fade-left100');    
        }, 4000)
        setTimeout(() => {
          item[5].classList.remove('hidden');
          item[5].classList.add('fade-left100');
        }, 4500)
        setTimeout(() => {
          item[6].classList.remove('hidden');
          item[6].classList.add('fade-in');
         }, 5500)
         setTimeout(() => {
          item[7].classList.remove('hidden');
          item[7].classList.add('fade-bottom100');
         }, 6500)
       }
       else if (i === 4) {
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-right100");
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove('hidden');
          item[1].classList.add('fade-top-left');
        }, 2000)
        setTimeout(() => {
          item[2].classList.remove('hidden');
          item[2].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[3].classList.remove('hidden');
          item[3].classList.add('fade-box');
        }, 2000)
        setTimeout(() => {
          item[4].classList.remove('hidden');
          item[4].classList.add('fade-left100');    
        }, 4000)
        setTimeout(() => {
          item[5].classList.remove('hidden');
          item[5].classList.add('fade-left100');
        }, 4500)
        setTimeout(() => {
          item[6].classList.remove('hidden');
          item[6].classList.add('fade-in');
         }, 5500)
         setTimeout(() => {
          item[7].classList.remove('hidden');
          item[7].classList.add('fade-bottom100');
         }, 6500)
       }
       else if (i === 5) {
        setTimeout(() => {
          item[0].classList.remove("hidden");
          item[0].classList.add("fade-left100");
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove('hidden');
          item[1].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[2].classList.remove('hidden');
          item[2].classList.add('fade-box');
        }, 2000)
        setTimeout(() => {
          item[3].classList.remove('hidden');
          item[3].classList.add('fade-left100');    
        }, 4000)
        setTimeout(() => {
          item[4].classList.remove('hidden');
          item[4].classList.add('fade-left100');
        }, 4500)
        setTimeout(() => {
          item[5].classList.remove('hidden');
          item[5].classList.add('fade-in');
         }, 5500)
         setTimeout(() => {
          item[6].classList.remove('hidden');
          item[6].classList.add('fade-bottom100');
         }, 6500)
       }
       else if (i === 6) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-in');
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove("hidden"); 
          item[1].classList.add('fade-left100');
        }, 2000)
        setTimeout(() => {
          item[2].classList.remove("hidden"); 
          item[2].classList.add('fade-left100');
        }, 2200)
        setTimeout(() => {
          item[3].classList.remove("hidden"); 
          item[3].classList.add('fade-left100');
        }, 3000)
        setTimeout(() => {
          item[4].classList.remove("hidden"); 
          item[4].classList.add('fade-bottom100');
        }, 3500)
       }
       else  {setTimeout(() => {
          sectionAA.classList.remove('hidden');
          sectionAA.classList.add('fade-in');
        }, 1500)
       }
      }
    }
  }
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
  init();
  checkPosition();


window.addEventListener("scroll", ()=> {
  let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
  //스크롤 효과          
  document.getElementById("contents").style.left = -scrollYOffset + "px";
  
  let scrollArea = scrollYOffset - document.querySelector(".scroll").offsetLeft;
  let levelXMinus2 = "translateX("+(scrollArea)*-0.2+"px)";

  document.querySelector(".slider-inner").style.transform = levelXMinus2;
});