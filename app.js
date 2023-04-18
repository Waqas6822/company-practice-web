const nav_btn=document.querySelector("navbtn");
const navhead=document.querySelector("nav");
const tooglenavbar=()=>{
    navhead.classList.toogle("active")
}



nav_btn.addEventListener("click" ,()=>tooglenavbar());