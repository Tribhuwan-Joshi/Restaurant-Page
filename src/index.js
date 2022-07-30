import homePage from '../src/home.js'
import menuPage from '../src/menu.js'
import contactPage from '../src/contact.js'
document.body.innerHTML = `<div class="header">
        <div class="cont">
            <div class="name">Eaty</div>
            <div class="slogan">~ Share The taste </div>
        </div>

        <div class="nav">
            <div class="home current"> Home</div>
            <div class="menu">Menu</div>
            <div class="contact">Contact</div>
        </div>

    </div>
    <div class="main">
 
    </div>
    <div class="footer">
        <div class="cite">Crafted by Tjsm</div>
        <div class="img"> <a href="https://github.com/Tribhuwan-Joshi"></a> <img src="../src/github.png" alt="github"
                class="github" title="Github"></div>
    </div>`;
  
const navButtons = document.querySelectorAll(".nav div");

const main = document.querySelector(".main");
main.innerHTML = `<div class="content home">
<h1> 🔥 The Taste of Heaven 🔥</h1>
<img src="../src/img.jpeg" alt="area">
<span class="text"> <span class="first">E</span>aty is a imaginary restaurant created to learn webpacks in CSS.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quod omnis doloribus maiores voluptatibus
    repudiandae. Placeat doloribus ex quod, corporis eius quis accusantium vitae excepturi laboriosam, natus facere
    aspernatur in.
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum cupiditate accusantium facere, iusto illo quam
        pariatur nostrum numquam aspernatur! Sint excepturi in quis numquam ut culpa impedit ipsam nam necessitatibus.
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem explicabo eos atque, nihil dolorum ipsa laborum
        est dignissimos ad porro enim sint voluptates nisi sunt velit? Amet, neque id.</p>
</span>

<div class="lets">Lets Join Eaty Culture ! 🌶️🌶️🌶️</div>
</div>`



navButtons.forEach((b) => {
  b.addEventListener("click", (e) => changeContent(e));
});



function changeContent(e) {

  let btn = e.target;

  main.textContent = "";
  
  navButtons.forEach((b) => b.classList.remove('current'));
  console.log(btn.textContent,btn.textContent=="home");    // Home

 if (btn.textContent == "Contact") {

    btn.classList.add("current");
    contactPage();

  }
  else if(btn.textContent=="Menu") {

    btn.classList.add("current");
    menuPage();
  }
  else{  // even then its not entering here
    console.log("In home");
    btn.classList.add("current");
    homePage();
  }


 
}
