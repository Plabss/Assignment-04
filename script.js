// first class + sign

 const increaseFirstClass=document.getElementById("increaseFirstClass");
 increaseFirstClass.addEventListener("click",function(){
     var numberOfFirstClass=document.getElementById("numberOfFirstClass").value ;
     numberOfFirstClass=parseInt(numberOfFirstClass);
     numberOfFirstClass=numberOfFirstClass+1;
     document.getElementById("numberOfFirstClass").value=numberOfFirstClass;
     
     const subtotalCost=subtotalVatTotal();
     document.getElementById("subtotal").innerText=subtotalCost[0];


     const vat=subtotalVatTotal();
     document.getElementById("vat").innerText=vat[1];


     const total=subtotalVatTotal();
     document.getElementById("total").innerText=total[2];

 })




 // first class - sign

 const decreaseFirstClass=document.getElementById("decreaseFirstClass");
 decreaseFirstClass.addEventListener("click",function(){
     var numberOfFirstClass=document.getElementById("numberOfFirstClass").value ;
     numberOfFirstClass=parseInt(numberOfFirstClass);
     if(numberOfFirstClass>0){
        numberOfFirstClass=numberOfFirstClass-1;
     }
     document.getElementById("numberOfFirstClass").value=numberOfFirstClass;
     
     const subtotalCost=subtotalVatTotal();
     document.getElementById("subtotal").innerText=subtotalCost[0];


     const vat=subtotalVatTotal();
     document.getElementById("vat").innerText=vat[1];


     const total=subtotalVatTotal();
     document.getElementById("total").innerText=total[2];

 })


 // Economy + sign

 const increaseEconomy=document.getElementById("increaseEconomy");
 increaseEconomy.addEventListener("click",function(){
     var numberOfEconomy=document.getElementById("numberOfEconomy").value ;
     numberOfEconomy=parseInt(numberOfEconomy);
     numberOfEconomy=numberOfEconomy+1;
     document.getElementById("numberOfEconomy").value=numberOfEconomy;
    
     const subtotalCost=subtotalVatTotal();
     document.getElementById("subtotal").innerText=subtotalCost[0];


     const vat=subtotalVatTotal();
     document.getElementById("vat").innerText=vat[1];


     const total=subtotalVatTotal();
     document.getElementById("total").innerText=total[2];

 })




 // Economy - sign

 const decreaseEconomy=document.getElementById("decreaseEconomy");
 decreaseEconomy.addEventListener("click",function(){
     var numberOfEconomy=document.getElementById("numberOfEconomy").value ;
     numberOfEconomy=parseInt(numberOfEconomy);
     if(numberOfEconomy>0){
        numberOfEconomy=numberOfEconomy-1;
     }
     document.getElementById("numberOfEconomy").value=numberOfEconomy;
     
     const subtotalCost=subtotalVatTotal();
     document.getElementById("subtotal").innerText=subtotalCost[0];


     const vat=subtotalVatTotal();
     document.getElementById("vat").innerText=vat[1];


     const total=subtotalVatTotal();
     document.getElementById("total").innerText=total[2];

 })


 // subtotal,vat,total calculation


function subtotalVatTotal(){
    const numberOfFirstClass=parseInt(document.getElementById("numberOfFirstClass").value);
    const numberOfEconomy=parseInt(document.getElementById("numberOfEconomy").value);
    return [((numberOfFirstClass*150) + (numberOfEconomy*100)),(((numberOfFirstClass*150) + (numberOfEconomy*100))*0.1),(((numberOfFirstClass*150) + (numberOfEconomy*100))+(((numberOfFirstClass*150) + (numberOfEconomy*100))*0.1))];
    // return subtotal*0.1;
    // return subtotal+vat;
}





bookBtn=document.getElementById("bookBtn");
bookBtn.addEventListener("click",function(){
    const firstPage=document.getElementById("firstPage");
    firstPage.style.display="none";
    const secondPage=document.getElementById("secondPage");
    secondPage.style.display="block"
    const body=document.getElementById("body");
    body.style.background="none";

    var numberOfFirstClassTicket=document.getElementById("numberOfFirstClass").value;
    document.getElementById("firstclassTicket").innerText=numberOfFirstClassTicket + " "


    var numberOfEconomyTicket=document.getElementById("numberOfEconomy").value;
    document.getElementById("economyTicket").innerText=numberOfEconomyTicket + " "
    
})
























 