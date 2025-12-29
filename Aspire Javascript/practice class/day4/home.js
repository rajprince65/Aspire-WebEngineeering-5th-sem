// import myFun from './scripts.js'

// import As from './scripts.js'
// const obj1=new As()
// obj1.disp()
// console.log("name of college is",obj1.name)
// console.log("sum:",myFun())

// import {name,disp,sum} from './scripts.js'

// console.log("name is",name);
// disp()
// console.log("sum is ",sum())

import myFun,* as A from './scripts.js';

console.log("name is",A.name);
myFun()
console.log("sum is ",A.sum())