var num=parseInt(prompt("enter number"));
sum=0;
while(num>0)
{
	rem=num%10;
	sum=rem+(sum*10);
	num=(num-rem)/10;
	console.log(rem);
}
