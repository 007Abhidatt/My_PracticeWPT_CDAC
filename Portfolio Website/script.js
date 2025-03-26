function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".h-icon");
   
    icon.classList.toggle("open");
     menu.classList.toggle("open");

}
function ProDetail()
{
    const btn =document.getElementsByClassName("btn btn-color-2 project-btn");
             const div1=document.getElementById("Pdiv");
    btn.addEventListener("click",function(){
        div1.innerHTML="This website name is parallex website in this website we use HTML , CSS , Js "
        
    })


}