var fs = require ('fs')
var path = require ('path')

var pathToScan = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(pathToScan, function (error, data) {
  if (error) return error;
      data.forEach (function (Arch) {
		    if ( path.extname(Arch) === ext)
	  	    console.log(Arch)
  })
	
});