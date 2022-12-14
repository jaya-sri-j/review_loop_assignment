var flex=document.createElement("div");
flex.style.display="flex";
flex.style.flexDirection="column";
flex.style.justifyContent="center";
flex.style.alignItems="center";
flex.style.height="690px";
flex.style.border="5px solid black";
flex.style.backgroundColor="lime";
document.body.appendChild(flex);

  
var head=document.createElement("h1");
flex.appendChild(head);
head.textContent="CHECK ARMSTRONG OR NOT";
head.style.color="purple";
head.style.fontStyle = "sans-serif";
head.style.borderTop = "6px ridge ";
head.style.borderBottom = "6px ridge ";
head.style.borderLeft = "6px ridge ";
head.style.borderRight = "6px ridge ";

var input=document.createElement("input");
input.setAttribute("id","input");
input.placeholder="ENTER RANGE";
input.style.margin="30px";
input.style.height="30px";
input.style.width="300px";
input.style.textAlign="center";

input.style.textDecoration="underline";
input.style.backgroundColor="azure";
input.style.border="2px solid black";
flex.appendChild(input);

var buttonElement=document.createElement("button");
buttonElement.setAttribute("id","buttonElement");
buttonElement.innerHTML="CHECK";
buttonElement.style.margin="10px";
buttonElement.style.border="2px solid black";
buttonElement.style.borderRadius="40px";
buttonElement.style.backgroundColor="pink";
flex.appendChild(buttonElement);
buttonElement.onclick=function()
{

	var number=parseInt(document.getElementById("input").value);
	var temp=number;
	var sum=0;
	var a=number;
	var count=0;
	while(a>0)
	{
		var output=document.createElement("p");
		output.style.backgroundColor="aqua";
		flex.appendChild(output);
		var rem=a%10;
		a=(a-rem)/10;
		count++;	
	}
	while(temp>0)
	{
	var digit=temp%10;
	sum+=digit**count;
	temp=parseInt(temp/10);
	}
	if(sum==number)
	{
		output.textContent=number+" IS A ARMSTRONG";
		output.style.textAlign="center";
	}
	else
	{
		output.textContent=number+" IS NOT ARMSTRONG";
		output.style.textAlign="center";	
	}
}


