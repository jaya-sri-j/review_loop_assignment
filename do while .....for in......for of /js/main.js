//do while
/*var i = 0;
do 
{
  //i += 1;
  console.log(i);
  i++;
} 
while (i < 5);*/

//for in 

var person=
{
"name":"jayasri",
"subname":"jaya",
"age":"23"
};
//delete person["name"];
//person["height"]="45";
for (var prop in person)
{
	console.log(person[prop]);
}
/*var fruit=["mango","orange","apple","grapes","strabery"];
for (var i of fruit)
{
	console.log(i);
	
}*/