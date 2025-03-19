function f1(){
    document.writeln("I am f1 function from external js")
}
function f2(){
    document.write(" I am F2 function from external js ")
}
a=[1,2.5,"Manish",true,6];
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[6])

for(i=0; i<a.length;i++){
    console.log(a[i]);
}
//2d array
a=[[1,2,3],[4,5,6],[7,8,9,10]]
console.log(a);
console.log(a.length);
console.log(a[1]);
console.log(a[2].length)