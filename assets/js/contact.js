/* ---------- loading ---------- */
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
          }, 2000)
          setTimeout(() => {
            item[1].classList.remove("hidden");
            item[1].classList.add("fade-top-right");
          }, 4500)
        //   
          setTimeout(() => {
            item[2].classList.remove("hidden");
            item[2].classList.add("fade-in");
          }, 5500)
          setTimeout(() => {
            item[3].classList.remove("hidden");
            item[3].classList.add("fade-in");
          }, 6500)
          setTimeout(() => {
            item[4].classList.remove("hidden");
            item[4].classList.add("fade-in");
            item[4].classList.add("typing");
          }, 7500)
        //   setTimeout(() => {
        //     item[5].classList.remove("hidden");
        //     item[5].classList.add("fade-in");
            
        //   }, 6000)
         }
         else if (i === 1) {
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

