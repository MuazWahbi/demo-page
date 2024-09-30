// window.addEventListener("resize",function(){
//     location.reload
// })
// const header = document.querySelector("header")
// let lsp = window.scrollY
// window.addEventListener("scroll", function(){
//     const stp = window.scrollY
//     if (stp > lsp) {
//         if (lsp > 150) {
//             header.style.cssText = "transform: translateY(-100%);"
//         }
//     }else if (stp < lsp) {
//         header.style.cssText = "transform: translateY(0%);"
//     }
//     lsp = stp
// })
// header animation
const i = document.querySelector("header i");
const nav = document.querySelector("header nav");
i.onclick = () => {
    nav.classList.toggle("navanimation")
};
const nava = document.querySelectorAll("nav a")
nava.forEach(a =>{
    a.onclick = () =>{
        nav.classList.remove("navanimation")
    } 
})
document.addEventListener("click", function(e){
    if (e.target.className != "navanimation" && e.target != i){
        nav.classList.remove("navanimation")
    }
})

function sendMail(){
    let prams = {
        name : document.getElementById("name").value,
        emai : document.getElementById("email").value,
        title : document.getElementById("title").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ej3sqac","template_c42r5tq",prams)
}