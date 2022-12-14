/*var num=parseInt(prompt("enter number :"));
n=0
for(a=num;num%2==0&&a==num;a++)
{
	document.write(num+" is even");
	n+=1;
}
for(n1=n;n1==0;n1++)
{
	document.write(num+" is odd");
}*/

var value=parseInt(prompt("enter value :"));
for(i=value;i>=0;i--)
{
	num=i;
	n=0;
	for(b=num;b%2===0 && b===num;b++)
	{
		console.log(num+" is EVEN");
		n+=1;
	}
	for(a=n;a===0;a++)
	{
		console.log(num+" is ODD");
	}
}