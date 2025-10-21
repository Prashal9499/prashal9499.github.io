//preloader 
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

//change theme light and dark mode
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
}

// sidenav toggle buttons
const openNav = () => {
    document.getElementById('mySidenav').style.width = "250px";
  }
  
  const closeNav = () => {
    document.getElementById('mySidenav').style.width = "0";
  }

  // add year automatically to the copyright section
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))