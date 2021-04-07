/* 
    ~~ Object.assign()
    ES6 ass a new Object Method assign() that allows us to combine multiple source into one target to create a single new <object> Object.assign() is also useful for creating a duplicate of an existing <_object_> 
*/

/* let person = {
    name : 'jack',
    age :  19,
    sex : 'male'
};

let student ={
    name : "bob",
    age : 20,
    xp : '2'
} */

//? WHAT IS OUTPUT OF THIS CODE?
const obj1 = {
    a:0, 
    b:2,
    c:4
};

const obj2 = Object.assign({c:5, d:6}, obj1);
document.write(obj2.c, obj2.d);


