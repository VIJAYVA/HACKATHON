let div=document.createElement("div");
div.innerHTML=`
<h2 class="top">BEAUTY&BLOSSOM SHOP</h2>
<input type="text" id="txt" placeholder="eg:Nail Polish,blush,mascara,foundation">
<button type="button" class="se" onclick="foo()">search</button>
<div id="name"></div>`
div.style.textAlign="center"
document.body.append(div);






async function foo(){
  try {
    let va=document.getElementById("txt").value;
    var res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${va}`);
    let result=await res.json();
    console.log(result);
      for (let i = 0; i < result.length; i++) {
        const element = result[i];
        document.getElementById("name").innerHTML=`<img height="100" src="${element.image_link}" class="img" alt="No Image"><br>
      <b class="edit">Name:</b> ${element.name} <br>
     <b class="edit">Brand:</b> ${element.brand} <br>
      <b class="edit">Price:</b> ${element.price_sign}${element.price} <br>
      <b class="edit">Link:</b>${element.product_link} <br>
      <a href="${element.website_link}" target="_blank"><button class="blink">Description</button></a>
      <a href="${element.product_link}" target="_blank"><button class="blink">Buy</button></a>` 
      }
    }
   catch (error) {
    alert ("error")
  } 
}