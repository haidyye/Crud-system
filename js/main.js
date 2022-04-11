var addproduct = document.getElementById("add")
var inputs = document.getElementById('inputs')
var productPrice= document.getElementById("productPrice");
var productName= document.getElementById("productName");
var productdesc = document.getElementById("productDesc");
var productCat = document.getElementById("productCat")
var productSearch = document.getElementById("search")
var currentIndex = 0;
var productContainer;
var mybtn = document.getElementById("insert");
console.log(mybtn)



addproduct.addEventListener("click", function(){
   inputs.style.display = "flex"
   $(".sk-cube").fadeOut(3000 , function(){
    $("#loading").fadeOut(1000)
   })
})


if (localStorage.getItem("product") == null ){
    productContainer =[];
   }
   else{
   productContainer = JSON.parse(localStorage.getItem("product")) 
    displayProduct(productContainer)
    console.log(productContainer)
   }
   
   
   mybtn.addEventListener("click"  , function(){ 
   if(mybtn.innerHTML == "insert"){
       insertProduct()
        
       $('.Inputs').fadeOut(3000)
   }
   else if(mybtn.innerHTML == "update"){
       updateProduct()
       clearForm()
       $('.Inputs').fadeOut(3000)
   }
   mybtn.innerHTML = "insert"
   displayProduct(productContainer)
    //  if(mybtn.innerHTML == "insert"){
    //      insertProduct()
    //      $('.Inputs').fadeOut(2000)
    //  }
    //  else if(mybtn.innerHTML == "update"){
    //      updateProduct()
    //  }
    //  displayProduct(productContainer)
    
   })
   
   
   function insertProduct(){
           var product=
           {
               name: productName.value, 
               prodprice: productPrice.value,
               proddesc: productdesc.value,
               prodcat: productCat.value
           }
           productContainer.push(product);
           console.log(productContainer);
           localStorage.setItem("product" , JSON.stringify(productContainer));
           displayProduct(productContainer)
           clearForm()
       }
    
   
   function displayProduct(productList){
       cartoona = "";
       
       for(i=0; i<productList.length; i++){
        cartoona+=`
        <tr > 
        <td>${i}</td>
        <td>  ${productList[i].name}</td>
        <td>  ${productList[i].prodprice}</td> 
        <td>  ${productList[i].proddesc}</td>
        <td>  ${productList[i].prodcat}</td> 
        <td> <button onclick="getProductInfo(${i})" class="btn btn-warning" id="delete"> update</button></td>
        <td> <button onclick="deleteProduct(${i})" class="btn btn-danger" id="update"> delete</button></td>
        </tr>
        
        
        `
       }
       document.getElementById("display").innerHTML= cartoona;
   }
   
   function clearForm(){
       productName.value = "";
       productPrice.value = "";
       productdesc.value = "";
       productCat.value = "";
   }
   
   function deleteProduct(ind){
     productContainer.splice(ind, 1)
     displayProduct(productContainer)
     localStorage.setItem("product" , JSON.stringify(productContainer));
   
   }
   
   
   function searchProduct(term){
       
       var search =[];
       for( i=0 ; i<productContainer.length; i++){
           if(productContainer[i].name.toLowerCase().includes(term.toLowerCase() )== true)
           {
              search.push(productContainer[i])
           }
       }
     displayProduct(search)
   }
   
   function getProductInfo(index){
       currentIndex = index;
       var product = productContainer[index];
       productName.value = product.name;
       productPrice.value = product.prodprice;
       productdesc.value = product.proddesc;
       productCat.value = product.prodcat;
       mybtn.innerHTML = "update"
       inputs.style.display = "flex"
       $(".sk-cube").fadeOut(2000 , function(){
        $("#loading").fadeOut(1000)
       })
   }
   
   function updateProduct(){
     
       var product=
       {
           name: productName.value,
           prodprice: productPrice.value,
           proddesc: productdesc.value,
           prodcat: productCat.value
       }
       productContainer[currentIndex].name = product.name;
       productContainer[currentIndex].prodprice = product.prodprice;
       productContainer[currentIndex].prodcat = product.prodcat;
       productContainer[currentIndex].proddesc = product.proddesc;
   }
   
   $(document).ready(function(){
      
   })
