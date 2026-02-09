const products={
 "MT001":{name:"Wintermelon",price:120},
 "MT002":{name:"Okinawa",price:110},
 "MT003":{name:"Taro",price:130}
};

let total=0;

function scanProduct(){

 let code=document.getElementById("barcode").value;
 let product=products[code];

 if(product){

  total+=product.price;

  let li=document.createElement("li");
  li.innerText=product.name+" ₱"+product.price;
  document.getElementById("cart").appendChild(li);

  document.getElementById("total").innerText=total;
 }
}
