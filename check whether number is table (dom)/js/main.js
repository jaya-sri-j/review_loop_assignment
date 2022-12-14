var num1=document.createElement("input");
num1.setAttribute("type","text");
num1.setAttribute("id","num1");
num1.setAttribute("placeholder","enter which table :");
num1.setAttribute("className","btn");
document.body.appendChild(num1);
document.write("<br>"+"<br>")

var num2=document.createElement("input");
num2.type = 'text';
num2.id = 'num2';
num2.placeholder='enter limit :';
num2.className= 'btn';
document.body.appendChild(num2);
document.write("<br>"+"<br>")

var j=document.createElement("button")
document.body.appendChild(j);
j.type="button";
j.innerHTML="click me";
j.onclick=function()
{
	var n1=parseInt(document.getElementById("num1").value);
	var n2=parseInt(document.getElementById("num2").value);
	for(i=1;i<=n2;i++)
	{ 
		document.write(i+"*"+n1+"="+i*n1+"<br>");
	}
}


