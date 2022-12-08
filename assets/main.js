// function switcher() {
//     const x = document.getElementById("cancel-hamburger");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
// kod niyese islemir 



const bar = document.getElementById("hamburger");
const cancelBar = document.getElementById("cancel-hamburger");
const menu = document.getElementById("menu");

bar.addEventListener('click', (x) => {
    bar.style.display = "none"
    cancelBar.style.display = "block"
    menu.style.display = "flex"
})

cancelBar.addEventListener('click', (x) =>{
    cancelBar.style.display="none"
    bar.style.display="block"
    menu.style.display="none"
})
/*
bar.addEventListener('click', () => {

    let data = new FormData(event.target)
    if(data.get('password').length>5){
        console.log(`İcazə verildi.`)
    }else(
        console.log(`Giriş qadağandır.`)
    )
    
})

*/

const brandsList = document.getElementsByClassName("brands-list")
const brandBtn = document.getElementById("brand")

brandBtn.addEventListener('click', (x) => {
    brandsList.style.display="flex"
})

// cancelBar.addEventListener('click', (x) =>{
//     brandsList.style.display="none"
// })

const colaLogo = document.getElementById("coca-cola")

colaLogo.addEventListener("click",function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})