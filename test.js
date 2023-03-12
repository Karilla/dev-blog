const { readdirSync, statSync } = require("fs");

function getDirectories(path) {
    return readdirSync(path).filter(function (file) {
      return statSync(path+'/'+file).isDirectory();
    });
  }

console.log(getDirectories('./articles/'));