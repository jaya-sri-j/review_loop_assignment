var num=parseInt((prompt(" enter num")));
var sum=0;
var sum1=0;
while(num>0)
{
	var rem=num%10;
	if (rem%2==0)
	{
		sum=rem+sum;
	}
	else
	{
		sum1=sum1+rem;
	}
	num=(num-rem)/10;
}
console.log(sum,sum1);