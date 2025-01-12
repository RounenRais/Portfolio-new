
const nav = `<a href="/">Home</a> | 
<a href="/proje1"></a> | 
             <a href="/proje2">Contact</a>
             <a href="/proje3">Contact</a>`;
const routes = {
  "/": `<div class="text" style="border-radius: 20px;"  >
<h2 class="header" id="work">Work</h2>

<!-- <h2>Biogrofi</h2>

  <h4>2020<b>-Arduino</b></h4>
  <h4>2020<b>-Javascript</b></h4>
  <h4>2020<b>-Vue Js</b></h4>
  <h4>2020<b>-Node Js </b></h4>




<p> -->
  <div class="works">	<b id="aboutMe">
      My name is Yunus Emre Aksu. I am 15 years old. I'm dealing with Javascript , Vue js and Svelte.  
      
</b>

</p>
<p id="aboutWork">
  I've been dealing with Javascript for 2 years and I coded this web site with Vanilia.js

</p></div>

<h2  class="header" id="projects">Projects</h2>
<div  class="examples div  " W">

<div class=" project component  div"><img  style="width: 100%; height: 100%;"  class="goProject" ;  src="bill.PNG" alt=""><a onclick="calistir()"; class="project1" href="/proje1">Go Project </a></div>
<div class=" project component  div"> <img style="width: 100%; height: 100%;"  class="goProject" src="kurs.png" alt=""><a class="project1"   href="/proje2">Go Project </a></div>
<div class=" project component  div"> <img style="width: 100%; height: 100%;"  class="goProject" src="css.png" alt=""><a class="project1"  href="/proje3">Go Project </a></div>
</div>
</div>`,
  "/proje1": `  <div class="text" style="border-radius: 20px;"  >
<a href="/" style="cursor: pointer; class="back"">Back</a>
<h2 class="header" id="work">Accounting Base</h2>


<div class="works" style="display: flex; flex-direction: column;">
  <img style=" width:40px ;height:30px" src="uk.jpg"/>
      <img style=" width:40px ;box-sizing:border-box; height:30px" src="turkey.jpg"/>
      <b id="accounting1">
     

      In this project, accounting etc. I tried to combine your account activities in one application.      </b>
<div class="box" style="display: flex;">
<p id="accounting2" >
<b>Starting Date  : </b> <p>  2021</p>
</p>
</div>

<div class=" project component  div"><a href="/proje1"><img style="width: 100%; height: 100%;" src="bill.PNG" alt=""></a></div>

</p>
<a href="AccountingBaseV2/index.html " style="text-decoration: underline;">Accounting Base</a>

</div>



</div>  `,
  "/proje2": `<div class="text" style="border-radius: 20px;"  >
<a href="/" style="cursor: pointer;" class="back">Back</a>
<h2 class="header" id="work2">Kurs Yanımda</h2>


<div class="works" style="display: flex; flex-direction: column;">
      <b id="course1">
      In this project, I prepared lessons in a simple language from basic to advanced, especially software.      </b>
<div class="box" style="display: flex;">
<p id="course2" >
<b>Starting Date: : </b> <p>  2022</p>
</p>
</div>

<div class=" project component  div"><a href="/proje1"><img style="width: 100%; height: 100%;" src="kurs.PNG" alt=""></a></div>

</p>
<a href="KursYanımda/index.html " style="text-decoration: underline;">KursYanımda</a>

</div>




</div>  `,

  "/proje3": `   <div class="text" style="border-radius: 20px;"  >
<a href="/" style="cursor: pointer; class="back"">Back</a>
<h2 class="header" id="work3">Kurs Yanımda</h2>


<div class="works" style="display: flex; flex-direction: column;">
      <b id="css1">
      In this project, I tried to present CSS in Turkish.   </b>
<div class="box" style="display: flex;">
<p id="css2" >
<b>Starting Date: : </b> <p>  2022</p>
</p>
</div>

<div class=" project component  div"><a href="/proje3"><img style="width: 100%; height: 100%;" src="css.png" alt=""></a></div>

</p>
<a href="AksuCss/index.html " style="text-decoration: underline;">Aksu.css</a>

</div>




</div> `,

};
const render = path => {
  document.querySelector("#app")
    .innerHTML = routes[path] || `<h1>404</h1>${nav}`
  ;
  document.querySelectorAll('[href^="/"]').forEach(el => 
    el.addEventListener("click", evt => {
      evt.preventDefault();
      const {pathname: path} = new URL(evt.target.href);
      window.history.pushState({path}, path, path);
      render(path);
    })
  );
};
window.addEventListener("popstate", e =>
  render(new URL(window.location.href).pathname)
);
render("/");

var sayac=0;
function calis(){

document.getElementById("a1").style.transition="all 0.5s ease-in-out"
document.getElementById("a1").style.transform="rotate(360deg)"
setTimeout(sifirla,500)


}


function sifirla(){
document.getElementById("a1").style=""



}


