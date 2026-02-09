function login(){

 let user=document.getElementById("username").value;
 let pass=document.getElementById("password").value;
 let role=document.getElementById("role").value;

 if(role==="admin" && user==="admin" && pass==="1234"){
  window.location="dashboard.html";
 }

 else if(role==="employee" && user==="staff" && pass==="1234"){
  window.location="pos.html";
 }

 else{
  alert("Invalid login");
 }
}
