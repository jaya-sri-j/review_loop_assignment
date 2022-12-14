/*var num=prompt("enter  number");

for(i=1; i<=30; i++)
{
a=num*i;
console.log(a);
}
*/
var arr=[2,42,16,30,5];
var arr_sort=arr.sort(function(a,b)
{
	if(a>b)
	{
		return(1);
	}
	if(a<b)
	{
		return(-1);
	}
});
console.log(arr_sort);

