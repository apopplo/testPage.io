let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
console.log("asfdsa");
let icon=document.querySelector('img');
icon.onclick = function() {
    if (icon.getAttribute("src")==="images/icon.png"){
        icon.setAttribute("src","images/stone.png");
    }else{
        icon.setAttribute("src","images/icon.png");
    }
    alert('别戳我，我怕疼。');
}


let setUserName= function(){
    let userName =prompt("enter your name");
    console.log(userName);
    sessionStorage.setItem('name', userName);
    setHead();
}
let setHead=function(){
    let userName = sessionStorage.getItem('name');
    let h1=document.querySelector('h1');
    h1.textContent='我的首页，欢迎'+userName+"!";

}
let storedName = localStorage.getItem('name');
if(!storedName) {
   //setUserName();
} else {
   setHead(storedName);
}
let changeUser = document.getElementById('changeUser');
changeUser.onclick=setUserName;


