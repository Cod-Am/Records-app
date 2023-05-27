let m=new Map();
m.set(1,"Hi");
m.set(2,"Hello");
console.log(m.get(1));
//m.delete(1);//To delete the value and key
// m.clear();// to clear the map
m.forEach((val,key)=>{
    console.log(val,key);
});
let j=prompt();
function print1toN(i,n){
    if(i===0) return 0;
    console.log(i);
    print1toN(i+1,n);
}
print1toN(1,x);