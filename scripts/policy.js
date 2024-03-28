const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const elementLogo = document.getElementById("logo");
const elementLogo2 = document.getElementById("logo2");
const elementArrowtop = document.getElementById("arrowtop")

elementLogo.addEventListener('click', function(){
    window.open("index.html", "_self");
})

elementLogo2.addEventListener('click', function(){
    window.open("index.html", "_self");
})

const para = document.getElementById('para');

para.addEventListener('scroll',function(){
    var scrollPercent = Math.round(para.scrollTop );
    if(scrollPercent>700) {
        elementArrowtop.style.display="inline-flex";
    }
    if(scrollPercent>2800){
        elementArrowtop.style.bottom="8rem";
    }
    if(scrollPercent<700) {
        elementArrowtop.style.display="none";
    }
    if(scrollPercent<2800) {
        elementArrowtop.style.bottom="2rem";
    }
})