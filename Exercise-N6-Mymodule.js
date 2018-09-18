var fs = require ('fs')
var path = require ('path')

module.exports = function (dir, file, callback){

fs.readdir( dir , function (error, data) {
  if (error) return callback(error)

     let result = data.filter (Element => path.extname(Element) == "." + file);
  callback(null,result);
    });	
};
