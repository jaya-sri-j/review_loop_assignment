document.body.setAttribute("style", "background-color:silver");
document.body.style.margin="190px";
document.body.style.height="400px";
document.body.style.width="2000px";
var inputElement=document.createElement("input");
inputElement.setAttribute("type","text");
inputElement.setAttribute("id","inputElement");
inputElement.setAttribute("placeholder","ENTER NUMBER :");
inputElement.setAttribute("className","btn");
document.body.appendChild(inputElement);
document.write("<br>"+"<br>")
//button create
var buttonElement=document.createElement("button")
document.body.appendChild(buttonElement);
buttonElement.style.backgroundColor="lavender";
buttonElement.style.border=" 3px solid black";
buttonElement.style.color="black";

buttonElement.type="button";
buttonElement.innerHTML="print";
buttonElement.onclick=function()
{
	var num=parseInt(document.getElementById("inputElement").value);

 while(num>0)
 {
     rem=num%10;
     num=(num-rem)/10;
     if (rem===1)
	 {
		 document.write("one");    
		
	 }
	 else if (rem===2)
	 {
		 document.write("two");
	 }
	 else if (rem===3)
	 {
		 document.write()"three";
	 }
	 else if(rem===4)
	 {
		 document.body.innerHTML="four";
	 }
	 else if (rem===5)
	 {
		 document.body.innerHTML="five";
	 }
	 else if (rem===6)
	 {
		 document.body.innerHTML="six";
	 }
	 else if (rem===7)
	 {
		 document.body.innerHTML="seven";
	 }
	 else if (rem===8)
	 {
		 document.body.innerHTML="eight";
	 }
	 else if (rem===9)
	 {
		 document.body.innerHTML="nine";
	 }
	 else 
	 {
		 document.body.innerHTML="zero";
	 }
 }
}
