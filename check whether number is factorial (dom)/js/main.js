document.body.setAttribute("style", "background-color:pink","border: 3px solid black;");
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
buttonElement.style.backgroundColor="skyblue";
buttonElement.style.border=" 3px solid black";
buttonElement.style.color="black";
buttonElement.type="button";
buttonElement.innerHTML="Check me";
buttonElement.onclick=function()
{
var number=parseInt(document.getElementById("inputElement").value);
fact=1
for(i=1;i<=number;i++)
{
fact=fact*i;
}
document.body.innerHTML=fact;
}