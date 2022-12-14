var num=parseInt(prompt("enter number"));
sum=0;
temp=num;
while(num>0)
{
	rem=num%10;
	sum=rem+(sum*10);
	num=(num-rem)/10;
}
if (sum==temp)
{
	console.log("palindrom");
}
else
{
	console.log("not palindrom");
}
	