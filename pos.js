import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let cart=[];
let total=0;

window.addProduct=async function(){

let name=name.value;
let price=parseFloat(price.value);
let stock=parseInt(stock.value);

await addDoc(collection(db,"products"),{
name,price,stock
});

loadProducts();
}

async function loadProducts(){

let list=document.getElementById("list");
if(!list) return;

list.innerHTML="";

const querySnapshot=await getDocs(collection(db,"products"));

querySnapshot.forEach(doc=>{
let li=document.createElement("li");
li.textContent=doc.data().name+" ₱"+doc.data().price;
list.appendChild(li);
});
}

window.addCart=function(){

let p=product.value;
let pr=parseFloat(price.value);

cart.push({p,pr});
total+=pr;

renderCart();
}

function renderCart(){

let ui=document.getElementById("cart");
if(!ui) return;

ui.innerHTML="";

cart.forEach(i=>{
let li=document.createElement("li");
li.textContent=i.p+" ₱"+i.pr;
ui.appendChild(li);
});

document.getElementById("total").innerText=total;
}

loadProducts();
