// var a=b=3;
// console.log(a, b)


(function(){
    var a=b=3; // a is functional scope; b is global scope
})()

// console.log(a)  error
console.log(b)  //3