// default export
   
   //Study export class

        // default Export class

            // export default class Samsung{

            //     volumeUp(){
            //         console.log("volume up")
            //     }

            // }

        // similarly we can export like below

            // class Samsung{
            //     volumeUp()
            //     {
            //         console.log("volume up")
            //     }

            // }

            // export default Samsung;

    //study Export function

        // export default function show()
        // {
        //     console.log("hellow funcion module")

        // }

        // or

        //  function show()
        //  {
        //     console.log("hello from module")
        //  }

        //  export default show;

    //export variable

        // we cannot use export default with const but
        //  can be done seperately
        
        // const a=10;
        // export default a; 

//Named export

        // Named Export class

            // export  class Samsung{

            //     volumeUp(){
            //         console.log("volume up")
            //     }

            // }

            // or

            //    class Samsung{

            //         volumeUp(){
            //             console.log("volume up")
            //         }

            //     }

            //     export {Samsung};
        
        //Named export Function

            // export function show()
            // {
            //     console.log("Hello module")
            // }

            // or

            // function show()
            // {
            //     console.log("Hello module")
            // }

            // export {show}
        
        //export variable
            //export const a= 10; 

        //export multiple named export
        // class Samsung{

        //     volumnUP()
        //     {
        //         console.log("High volumn")

        //     }
        // }

        // function show(){
        //     console.log("hello module")

        // }

        // const a=10;

        // export {Samsung,show,a}

//  default export and named export mix

        class Samsung{

            volumnUP()
            {
                console.log("High volumn")

            }
        }

        function show(){
            console.log("hello module")

        }

        const a = 10;
        export default Samsung;
        export {show,a}


        




/*
No, inside a class in modern JavaScript (ES6+), you do not use the function keyword when defining methods. You just write the method name directly.

Example:

class Samsung {
    volumeUp() {          // ✅ correct
        console.log("volume up");
    }
    
    volumeDown() {        // ✅ another method
        console.log("volume down");
    }
}


❌ This is incorrect inside a class:

class Samsung {
    function volumeUp() { // ❌ do NOT use `function` here
        console.log("volume up");
    }
}


Using function inside a class will cause a syntax error.

The function keyword is only used outside of classes when defining standalone functions:

function volumeUp() {
    console.log("volume up");
}


So inside a class → just use methodName() {} syntax.


*/