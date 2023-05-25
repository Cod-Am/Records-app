//Java Script
let totalbill=120;
totalbill=totalbill+20;
totalbill=totalbill+3.33;
console.log(totalbill);
let present=false;
console.log(present);
let ourName="Amrit Gulati";
ourName="My name is "+ourName+". Hellewww, nice to meet you.";
console.log(ourName);
console.log(typeof ourName);
console.log(typeof totalbill);
const myName="Amrit Gulati";// doesnt let the variable change the value
let num=3;
console.log(typeof num);
let x=[1,2,3,4,5,6];
console.log(x);
console.log(x[1]);
let y={
    myName:"Amrit Gulati",
    myAge:18,
}
console.log(y);
//function definition
let z=function(){
    console.log(2*2)
}
z();
//variable function definition
let mul=function(val){
    return val*val;
};
console.log(mul(3));
console.log(1==1);
console.log(1==false);
console.log(1!=true);
console.log(1!==true);//does no type conversion
console.log(1=="1");// doess type conversion
let a=5;
let b=9;
let c=89;
if(c>a&&c>b){
    console.log("c is greatest");
}
