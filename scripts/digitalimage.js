const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2");
        }else{
            entry.target.classList.remove("show2");
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el)=> observer2.observe(el));

const elementHome = document.getElementById("home");
const elementServices = document.getElementById("services");
const elementProjects = document.getElementById("projects");
const elementAbout = document.getElementById("about");
const elementContact = document.getElementById("contact");
const elementLogo = document.getElementById("logo");
const elementLogo2 = document.getElementById("logo2");

const elementArrowtop = document.getElementById("arrowtop")

elementLogo.addEventListener('click', function(){
    window.open("index.html", "_self");
})

elementLogo2.addEventListener('click', function(){
    window.open("index.html", "_self");
})

elementArrowtop.addEventListener('click', function(){
    window.open("index.html", "_self");
})

document.querySelectorAll('.header-text').forEach((headerItem) => {
    const headerItemText = headerItem.textContent.trim().toUpperCase();
    headerItem.addEventListener('click', function() {
        
        if(headerItemText == 'ΑΡΧΙΚΗ' ){
            elementHome.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ΥΠΗΡΕΣΙΕΣ'){
            elementServices.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ'){
            elementAbout.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ΕΠΙΚΟΙΝΩΝΙΑ'){
            elementContact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else{
            window.open("index.html", "_self");
        }
    })    
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


const menuIcon = document.getElementById('menu'); 
const floationMenu = document.getElementById('floating-menu');
var menuActivated = false;

document.querySelector(".para").addEventListener('click',function(){
    if(menuActivated){
        para.style.filter = "blur(0rem)"
        floationMenu.style.display = "none"
        menuActivated = false;        
    }
})

menuIcon.addEventListener('click', function(){
    if(!menuActivated){
        para.style.filter = "blur(0.4rem)"
        floationMenu.style.display = "flex"
        menuActivated = true;
    }else{
        para.style.filter = "blur(0rem)"
        floationMenu.style.display = "none"
        menuActivated = false; 
    }    
})

document.querySelectorAll('.header-text2').forEach((headerItem) => {
    const headerItemText = headerItem.textContent.trim().toUpperCase();
    headerItem.addEventListener('click', function() {
        para.style.filter = "blur(0rem)"
        floationMenu.style.display = "none"
        menuActivated = false;

        if(headerItemText == 'ΑΡΧΙΚΗ' ){
            elementHome.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ΥΠΗΡΕΣΙΕΣ'){
            elementServices.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ'){
            elementAbout.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(headerItemText == 'ΕΠΙΚΟΙΝΩΝΙΑ'){
            elementContact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else{
            window.open("index.html", "_self");
        }
    })    
})

document.querySelectorAll('.next-div').forEach((textItem) => {
    const nextDivItemText = textItem.textContent.trim().toUpperCase();
    textItem.addEventListener('click', function() {
        
        if(nextDivItemText == 'ΑΡΧΙΚΗ' ){
            elementHome.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(nextDivItemText == 'ΥΠΗΡΕΣΙΕΣ'){
            elementServices.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });        
        }else if(nextDivItemText == 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ'){
            elementAbout.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else if(nextDivItemText == 'ΕΠΙΚΟΙΝΩΝΙΑ'){
            elementContact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }else{
            window.open("index.html", "_self");
        }
    })    
})

document.querySelectorAll('.promo-div').forEach((promo)=> {
    promo.addEventListener('click', function() {
        elementServices.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })
})

function sendMail(){
    var params = {
        surname: document.getElementById("surname").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_ium26vu"
    const templateID = "template_fcszylt"

    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("surname").value = ""
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("company").value = ""
            document.getElementById("message").value = ""
            alert("Το μήνυμα εστάλη επιτυχώς");
        }        
    )
    
}




