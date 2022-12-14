function navslide(){
    const nav=document.querySelector(".main");
    const menu=document.querySelector(".right");
    const burger=document.querySelector(".burger");


    burger.addEventListener('click',()=>{
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })
}
navslide();












// const accordion=document.getElementsByClassName("contentBX");
// for(i=0;i<accordion.length;i++){
//     accordion[i].addEventListener('click',function(){
//         accordion.classList.toggle('active')
//     })
// }



const accordion=document.querySelectorAll(".contentBX");
accordion.forEach(contentBX =>{
    contentBX.addEventListener('click',()=>{
        contentBX.classList.toggle('active');
    });
});



