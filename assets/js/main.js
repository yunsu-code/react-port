/* ---------- main-loading ------------ */
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
// 커서 클릭이벤트
document.addEventListener("click", e => {
  cursor.classList.add("click")
  setTimeout(() => {
    cursor.classList.remove("click")
  }, 500)
})

/* ---------- scroll animation ---------- */
  let windowHeight,
      section,
      item;

  function init() {
    windowHeight = window.innerHeight;
    section = document.querySelectorAll(".section");
    // item = document.querySelectorAll(".item");
    header = document.getElementById("header");
  }

  function checkPosition() {
    for (let i = 0; i < section.length; i++) {
      let sectionAA = section[i];
      let positionFromTop = section[i].getBoundingClientRect().top ;
      let item = document.querySelectorAll(".item" + i);
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
          item[1].classList.add("hide");
          item[1].classList.remove("hidden");
        }, 4500)
        setTimeout(() => {
          item[1].classList.add("wow");
        }, 3500)
        setTimeout(() => {
          item[2].classList.add("fade-in");
          item[2].classList.remove("hidden");
        }, 4000)
        setTimeout(() => {
          item[3].classList.add("hide");
          item[3].classList.remove("hidden");
        }, 5000)
        setTimeout(() => {
          item[3].classList.add("wow");
        }, 4000)
        setTimeout(() => {
          item[4].classList.remove("hidden");
          item[4].classList.add("fade-box");
        }, 3500)
        setTimeout(() => {
          item[5].classList.add("fade-in");
          item[5].classList.remove("hidden"); 
        }, 7000)
        setTimeout(() => {
          item[6].classList.add("hide");
          item[6].classList.remove("hidden");
        }, 7000)
        setTimeout(() => {
          item[6].classList.add("wow");
        }, 6000)
        setTimeout(() => {
          item[7].classList.add("fade-top-right");
          item[7].classList.remove("hidden"); 
        }, 7000)
       }
       else if (i === 1) {
        setTimeout(() => {
          item[0].classList.remove('hidden');
          item[0].classList.add('fade-top-left');
        }, 1000)
        setTimeout(() => {
          item[1].classList.remove("hidden"); 
          item[1].classList.add('fade-left100');
          item[2].classList.remove("hidden"); 
          item[2].classList.add('fade-bottom100');
          item[3].classList.remove("hidden"); 
          item[3].classList.add('fade-top100');
        }, 2000)
        setTimeout(() => {
          item[1].classList.remove("hidden"); 
          item[1].classList.add('fade-left100');
          item[2].classList.remove("hidden"); 
          item[2].classList.add('fade-bottom100');
          item[3].classList.remove("hidden"); 
          item[3].classList.add('fade-top100');
        }, 2000)
        setTimeout(() => {
          item[4].classList.remove("hidden"); 
          item[4].classList.add('fade-left100');
        }, 2500)
        setTimeout(() => {
          item[5].classList.remove("hidden"); 
          item[5].classList.add('fade-left100');
        }, 2900)
        setTimeout(() => {
          item[6].classList.remove("hidden"); 
          item[6].classList.add('fade-in');
        }, 3500)
        setTimeout(() => {
          item[7].classList.remove("hidden"); 
          item[7].classList.add('fade-bottom100');
        }, 4000)
      }
       else if (i === 2) {
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

/* -------- 스크롤에 따라 transform 변경 -------- */
window.addEventListener("scroll", ()=> {
  let scrollYOffset = (window.pageYOffset || document.documentElement.scrollTop)
  //스크롤 효과          
  document.getElementById("contents").style.top = -scrollYOffset + "px";
  let scrollArea2 = scrollYOffset - document.querySelector(".scroll").offsetTop;

  let ToplevelYMinus1 = "translateY("+(scrollArea2)*-0.1+"px)",
  ToplevelY1 = "translateY("+(scrollArea2)*0.15+"px)",
  ToplevelY2 = "translateY("+(scrollArea2)*0.2+"px)",
  TopevelY3 = "translateY("+(scrollArea2)*0.3+"px)";

  document.querySelector(".main-img1").style.transform = ToplevelY1;
  document.querySelector(".main-img2").style.transform = ToplevelY1;
  document.querySelector(".main-img3").style.transform = ToplevelY1;
});

/* -------- #parachute 스크롤 이동 -------- */
function positionTheSvg() {
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  console.log(document.body.scrollTop);

  var path = document.getElementById("theMotionPath");
  var pathLen = path.getTotalLength();
  var pt = path.getPointAtLength(scrollPercentage * pathLen);
  
  var parachute = document.getElementById("parachute");
  parachute.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
};
window.addEventListener("scroll", positionTheSvg);
positionTheSvg();
