a=1234;
sum=0;
while (a>0)
{
  var rem=a%10;
if(rem%2==0)
{
	sum=rem+sum;
	a=(a-rem)/10;
}
}
	console.log(sum)