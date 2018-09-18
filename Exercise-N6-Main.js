var mymodule = require ('./mymodule.js')

var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext,(error,list)=> {
    if(error){
        console.log('Error')  
    }
    list.forEach (function (Arch) {
        console.log(Arch)

      });
    });