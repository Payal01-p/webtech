console.log("hello world");

console.log("for loop");
for(let i=1;i<=20;i++)
{
  console.log(i);
}
let n=30;
for(i=1;i<=n;i++)
{
  console.log(i);
}
function printseries(n)
{
  for(let index=0;index<=n;index++)
  {
    console.log(index);
  
  }
}
printseries(10)

function isevenodd(n)
{ 
  for(let index=0;index<=n;index++)
  {
    if(index% 2){
      console.log("the number is odd",index);
    }
    else{
      console.log("the number is even",index);
    }

  }
}
isevenodd(10); 


function fizzbuzz(n)
{
  for(let i=1;i<=n;i++)
  {
    if(i%3==0)
    {
      console.log("fizz");
    }
    if(i%5==0)
    {
      console.log("buzz");
    }
    if(i%3==0 && i%5==0)
    {
      console.log("fizbuzz");
    }
    else{
      console.log(i);
    }
  }
}
fizzbuzz(20);

function sumofarray(n){
  let sum=0;
  const array1[12,23,43,654,];
  for(let i=0;i<n && i< array1.length;i++){
    sum+=array1[i];
    console.log(array1[i]);
  }
  console.log("sum of array",sum);

}
sumofarray(array1);





