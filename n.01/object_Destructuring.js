/* 
    ~~ Object Destructuring 
    Similar to Array dsetructuring, Object destructuring unpacks properties into distinct variables.
*/

let obj = {
    h:100,
    s:true
};
let{h, s} = obj;
console.log(h);
console.log(s);


// We can assign without declaration, but there are some syntax requirments for that:
let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'});
console.log(a + b);