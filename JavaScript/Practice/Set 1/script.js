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
let str="My name is Amrit Gulati";
console.log(str);
console.log(str.length);//calling of methods
console.log(str[3]);
console.log(str.indexOf("a"));
console.log(str.substring(0,2));
console.log(str.replace("Amrit","Amit"));
console.log(str.toLowerCase());
let obj={
    name: "Amrit Gulati",
    age:18,
    info:function(){
        return this.name+" ,"+this.age;
    }
}
console.log(obj.info());




let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
arr.push(11);
console.log(arr);
arr.pop();
console.log(arr);
let arr1=arr.map((val)=>{
    if(val>5){
        return val;
    }
});
console.log(arr1);




let arr2=arr.filter((val)=>{
    if(val>5){
        return val;
    }
});
console.log(arr2);

let obj1= new Set();
console.log(typeof obj1);
obj1.add(1);
obj1.add(2);
obj1.add(3);
obj1.add(4);
obj1.delete(1);
console.log(obj1);
console.log(obj1.has(2));
obj1.forEach((val)=>{
    console.log(val);
})
console.log(obj1[0]);//a little different than array.

let obj2=new Set(x);
console.log(x,obj2);
obj2.clear();
