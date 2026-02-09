import { db } from "./firebase.js";
import {
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let cart=[];
let total=0;

window.addProduct = async function(){
let name=document.getElementById("name").value;
let price=parseFloat(document.getElementById("price").value);
let stock=parseInt(document.getElementById("stock").value);

await addDoc(collection(db,"products"),{
name,price,stock
});

alert("Product Added");
loadProducts();
}

async function loadProducts(){
let list=document.getElementById("list");
if(!list) return;

list.innerHTML="";
const querySnapshot=await getDocs(collection(db,"products"));

querySnapshot.forEach(doc=>{
let li=document.createElement("li");
li.textContent=doc.data().name+" ₱"+doc.data().price+" Stock:"+doc.data().stock;
list.appendChild(li);
});
}

window.addCart=function(){
let name=document.getElementById("product").value;
let price=parseFloat(document.getElementById("price").value);

cart.push({name,price});
total+=price;

renderCart();
}

function renderCart(){
let cartUI=document.getElementById("cart");
if(!cartUI) return;

cartUI.innerHTML="";
cart.forEach(i=>{
let li=document.createElement("li");
li.textContent=i.name+" ₱"+i.price;
cartUI.appendChild(li);
});

document.getElementById("total").innerText=total;
}

loadProducts();
