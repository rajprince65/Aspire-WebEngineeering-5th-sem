// Default import
  // import class 
        // import Samsung from "./mobile.js";
        // const n = new Samsung()
        // n.volumeUp();


    // import function

        // import show from "./mobile.js"

        // show();
        

    // import variable

        // we cannot use export default with const but
        //  can be done seperately

        // import a from "./mobile.js"
        // console.log(a)


// Named import
        // import class 
                // import {Samsung} from "./mobile.js";
                // const n = new Samsung()
                // n.volumeUp();

        //import function 
                // import {show} from './mobile.js'
                // show();
        //import variable

                // import {a} from "./mobile.js"
                // console.log(a)
        //import all  using {}
                // import {Samsung,show,a} from "./mobile.js"
                
                
                // const am = new Samsung()
                // am.volumnUP();

                // show();
                // console.log(a)

        //import all using * 

        // import * as device from './mobile.js'

        // const sm= new device.Samsung()
        // sm.volumnUP();

        // device.show();

        // console.log(device.a)


//import default as well as named export 

import Samsung,{show,a} from "./mobile.js";


const sm = new Samsung()
sm.volumnUP()

show();

console.log(a)


        