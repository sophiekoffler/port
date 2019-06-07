var toggle=false;

const pDescs = ["<a target='_blank' href='http://www.slkdesignsjewelry.com/'>This project</a> allowed me to explore the process of designing a website in its entirety. This site's purpose is to serve as a portfolio for SLK Designs, my handcrafted artisan jewelry business. The site is fully responsive and dynamic. The content displayed on the necklace and earrings pages reflect current inventory. The site is scripted in php and utilizes javascript, AJAX and mysql. The implementation used to populate the necklace and earring pages differ, as the data for each subset was stored in a different manner on the server. This provided me the opportunity to handle both cases. Necklace data is pulled from a database by a php script that is executed through an AJAX call. Earring data is simply read from a JSON file stored on the server.",
"Colmar Academy</a> was the capstone project from Codeacademy's Pro Intensive, Build Websites from Scratch. The site is a landing page for a fictitious university and illustrates skills learned in the course which was an introduction to front end development focusing mainly on html and css. The layout was constructed with flexbox and overall the project demonstrates my ability to deliver a project to spec. The specs can be found on my github account.",
"Colorful Artistry is a project designed to explore the css grid layout and play around with its ease at making sites responsive as well as its ability to construct layouts than were not possible with flexbox. The content of the site showcases some of the artwork I've done, categorized by medium.",
"Imaginary Forum is an old project from W3C's HTML5 course that I revamped. It is a responsive form that uses HTML5 form validation, geolocation and session storage. Mapquest's geolocation api was used and the form is coded to simulate uploading the information to a web server using AJAX.",
"Grid-Play is an example of graphic design that illustrates the power of css grid. This project is best enjoyed by opening it in a desktop browser and viewing the way the design adapts as you decrease the width of the browser. This is all done through grid, no media queries needed. ",
"Cananization Demo was a web application I developed while researching descriptive complexity and graph isomorphism with Professor Neil Immerman. The application allowed users to canonize a graph, either from the selection of available graphs or one uploaded in a specified format, using the first or second dimension dimension of the Weisfeiler-Lehman methods. The algorithms were coded in Python and Matplotlib and NetworkX were used to create the data visualizations."];

const pImgs = ["./resources/images/slkdesignsjewelrysnapshot.png",
              "./resources/images/colmarAcademyB.png",
              "./resources/images/colorfulArtistry.png",
              "./resources/images/imaginaryForum.png",
              "./resources/images/gridPlay.png",
              "./resources/images/C7RandomGraph0.png"
              ];

const pLinks =["http://www.slkdesignsjewelry.com/",
  "https://sophiekoffler.github.io/Colmar-Academy/",
  "https://sophiekoffler.github.io/colorstry/",
  "https://sophiekoffler.github.io/Imaginary-Forum/",
  "https://sophiekoffler.github.io/Grid-Play/"];

let currIndex=0;
let start=true;
let open = false;

document.body.onload = function(){
  //document.getElementById('aboutL').classList.add("current");
  for(i=1;i<7;i++){
    let index = "p" + i + "B";
    console.log(index);
    document.getElementById(index).addEventListener('click',function(){
      buttonClick(parseInt(index.charAt(1)))});
    }
    //Close enlarged image with ESC key
    window.addEventListener("keydown",function(event){
      if(event.defaultPrevented)
        return;
      console.log("event "+ event.key);
      if(event.key=="Escape"){
        togYN();
      }
    });
    document.getElementById("close").addEventListener('click',function(){
       togYN()});



let currSection = "#about";

document.getElementById("about").addEventListener('mouseenter', e => { document.getElementById("portfolioL").classList.remove("current");
  document.getElementById("aboutL").classList.add("current");
  currSection = "#about";

});

document.getElementById("contact").addEventListener('mouseenter', e => {
console.log("moues entered");  document.getElementById("portfolioL").classList.remove("current");
  document.getElementById("contactL").classList.add("current");
  currSection = "#contact";

});
document.getElementById("portfolio").addEventListener('mouseenter', e => {
console.log("moues entered");  document.getElementById('contactL').classList.remove("current");
document.getElementById('aboutL').classList.remove("current");
  document.getElementById("portfolioL").classList.add("current");
  currSection = "#portfolio";

});
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("body section");
//console.log("mainNavLinks "+ JSON.stringify(mainNavLinks));


document.getElementById("aboutL").classList.add("current");
let currScrollY = window.scrollY;



window.addEventListener("scroll", event => {
//  document.getElementById('aboutL').classList.remove("current");

  let lastScrollY = currScrollY;
  currScrollY = window.scrollY;

  //debug();
//let currScrollY=0;
function prevSolution(){
  mainNavLinks.forEach(link => {
    if(link.hash != ''){
    console.log("link "+ link.hash);
    try{
      console.log("in try");
    let section = document.querySelector(link.hash);
      console.log("in try");
    if(currSection == "#about" && currScrollY <= document.getElementById("about").offsetTop)
      return;
    if(currSection == "#about" && (currScrollY - lastScrollY <=0))
      return;
    if(currSection == "#contact" && currScrollY >= lastScrollY)
      return;
    if(section.offsetTop  <= currScrollY  &&
      section.offsetTop + section.offsetHeight > currScrollY) {
      currSection = link.hash;
      console.log("adding current");
      link.classList.add("current");
    } else {

      console.log("remove");
      link.classList.remove("current");
    }
  }
  catch(e){
    console.log(e.message);
  }
}})};
});


    }

function debug(){
  let fromTop = window.scrollY;
  document.getElementById("scrollY").innerHTML="FromTop: " + fromTop;

  document.getElementById("aboutOffSetTop").innerHTML ="about.offsetTop: " +
   document.querySelector("#about").offsetTop;
   document.getElementById("aboutHeight").innerHTML = "about.offsetHeight:" +
    document.querySelector("#about").offsetHeight;

  document.getElementById("portfolioOffSetTop").innerHTML ="portfolio.offsetTop: " +
   document.querySelector("#portfolio").offsetTop;
   document.getElementById("portfolioHeight").innerHTML = "portfolio.offsetHeight:" +
    document.querySelector("#portfolio").offsetHeight;

  document.getElementById("contactOffSetTop").innerHTML ="contact.offsetTop: " +
   document.querySelector("#contact").offsetTop;
   document.getElementById("contactHeight").innerHTML = "contact.offsetHeight:" +
    document.querySelector("#contact").offsetHeight;
    document.getElementById("headerHeight").innerHTML = "headerHeight: "+
    document.getElementsByTagName("header")[0].offsetHeight; console.log("fromTop " + fromTop);
}
function togYN(){
  let modal = document.getElementById("modal");
  modal.style.display='none';
}



function buttonClick(i){
  console.log("in buttonClick");
  let modal = document.getElementById("modal");
  console.log(modal.innerHTML);
  modal.style.display="block";
  let projImg = document.getElementById("projImg");
  console.log(i);
  projImg.setAttribute("src",pImgs[i-1]);
  if(i==2 ||i==3)
    projImg.style.maxWidth="none";
  else {
    projImg.style.maxWidth="100%";
  }
  let projDesc = document.getElementById("projDesc");
  projDesc.innerHTML=pDescs[i-1];

}

function projectM(i){
  const prevIndex=currIndex;
  currIndex=i;

  console.log('in projectM: i='+i);
  pImg = document.getElementById('pImg');
  pImg.style.backgroundImage="url('"+pImgs[currIndex]+"')";
  pImg.addEventListener('click',function(){window.open(pLinks[currIndex],'_blank')});
  pImg.style.backgroundSize="contain";
  pImg.style.backgroundPosition="center";
  console.log('pimg.style '+ pImg.style['backgroundSize']);
   i = currIndex+1;
  let j = prevIndex + 1;
  desc = document.getElementById('p'+i+'D');
  name = document.getElementById('p3N');
  //console.log("name: "+ name.getElementsByTagName('p'));
  console.log(typeof(desc));
  console.log("name  "+ name.firstChild.textContent);
  name.style.display="block";
  console.log("desc" + desc.value);
  desc.style.display="inline-flex";
  desc.classList.add('appear');

  //remove previous description
  prevN = document.getElementById('p'+j+'N');
  pDesc = document.getElementById('p'+j + 'D');
  if(pDesc != null)
    pDesc.style.display="none";
  if(prevN != null)
    prevN.style.display="none;"
}
function project(i){
  console.log("in project");
console.log("start " + start);
  if(i==currIndex)
    if(!start)
        return;
  start=false;
  const prevIndex=currIndex;
  currIndex=i;

  pImg = document.getElementById('pImg');
  pImg.classList.remove('slideLeft');
  pImg.style.backgroundImage="url('"+pImgs[currIndex]+"')";
  pImg.addEventListener('click',function(){window.open(pLinks[currIndex],'_blank')});
  pImg.style.backgroundSize="contain";
  pImg.style.backgroundPosition="center";

slideImg(prevIndex);
  //window.setTimeout(slideImg(prevIndex),2500);
}

function slideImg(prevIndex){
  //alert("electric slide");
  pImg = document.getElementById('pImg');
  pImg.classList.add('slideLeft');
  textAppear(prevIndex);
//  window.setTimeout(function(){textAppear(prevIndex)},5000);

function textAppear(prevIndex){
  console.log("in text appear");
  let i = currIndex+1;
  let j = prevIndex + 1;
  desc = document.getElementById('p'+i+'D');

  console.log("desc" + desc.value);
  desc.style.display="inline-flex";
  desc.classList.add('appear');

  //remove previous description

  pDesc = document.getElementById('p'+j + 'D');
  if(pDesc != null)
    pDesc.style.display="none";
}}

function navigate(){
  console.log('in navigate');
  navIcon = document.getElementById("navIcon");
  if(open){
    navIcon.classList.remove('open');
    open = false;
  }
  else{
    console.log("opening");
    navIcon.classList.add('open');
    open = true;
  }

}
function removedFromInit(){
  for(i=0;i<5;i++ ){
    let index = "p"+i+"L";
    let pNI = "p" + i + "Dot";
    console.log("onload i= " + i);
    document.getElementById(index).addEventListener('click',function(){project(parseInt(index.charAt(1)))});
    document.getElementById(pNI).addEventListener('click',function(){projectM(parseInt(pNI.charAt(1)))});

  }
  document.getElementById('navIcon').addEventListener('click',function(){navigate()});
  const divs = document.querySelectorAll('.projArr div');
  for(d in divs){
    divs[d].addEventListener('click',function(){document.getElementById('pImg').classList.add('larger')});
  }
}
