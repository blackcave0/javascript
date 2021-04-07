/* 
    ~~  Array Destructuring
    The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. ES6 has added a shorthand syntax for destructuring an <_array_>.
*/

/* 
let arr = ['1', '2', '3'];
let [one, two, three] = arr;
console.log(one); //1
console.log(two); //2
console.log(three); //3
*/ 


//<< We can use also destructure an <_array_> returned by a funcion =>
/* let a = () => {
    return [1, 3, 2];
};
let [one, , two] = a(); */


// ! Notice that we left the second argument's place empty. 
//>> The destructuring syntax also simplifies assignment and swapping values.

let a, b, c = 4, d = 8;
[a, b = 6] = [2];    // a =2 , b 6

[c, d] = [d, c]     // c = 8, d =4;
// console.log(d);


//---What is the out put of the following code?
let names = ['John', 'Fred', 'Ann'];
let [Ann, Fred, John] = names;
console.log(John);