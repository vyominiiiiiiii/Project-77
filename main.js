function newPg(){
    var uname=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;


if(uname=="Vyomini" && pwd=="1234"){
    window.location="welcomePage.html";
}
else{
    alert("Check your username & password");
}
  }