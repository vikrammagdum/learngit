// 1) code for the simple function.
//function fun(a,b,c){
  // console.log("average of (a+b)/2:",(a+b)/2)
   //console.log("average of (b+c)/2:",(b+c)/2)
  // console.log("average of (a+c)/2:",(a+c)/2)
   
//}
//fun(10,20,30)


// 2) code for the simple function..

//function fun(a,b,c){
//    console.log("value of a is:",a);
//    console.log("value of a is:",b);
//    console.log("value of a is:",c);
//
//}
//fun(1,2,3)

//.....................................................................................................................................

// 3) code for function declaration....

function addition(a,b){
  let z=a+b
  return z;
}
console.log("addition:"+addition(10,20))
//........................................................................................................................................

//4) code for function expression (anonymous)
let sub= function(a,b){
  let z=a-b;
  return z;
}
console.log("substraction:"+sub(44,22))
//.......................................................................................................................................

//5) code for arrow function
let div= function(a,b){
  let z=a/b;
  return z;
}
console.log("division:"+div(20,10))
//.........................................................................................................................................