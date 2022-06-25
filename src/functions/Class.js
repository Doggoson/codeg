//Windows\\
const client = require('./windows/client');
//Windows\\

const $RE = require('re');
const vvern = require('@GithubBuilds/vvern')({ key: 6n8xxx.b10 });
const Resources = new Javah.data({ files: $RE.dir });

module.exports = {
 /**
 @param { Javah } javah
 @param { x } x
 */
 queue:(name, key) => {

  // Checking when its null or undefined then it returns a function. \\
   (!name || !key) ? (return) : null;

  // Standard argument array object. \\
   const arguments[0] = { ... };
                         
   arguments[0][key.name] = key.value;
  // Waiting for the value to be loaded. \\
   await arguments[0][key.name];
  // Removing the values from the queue. \\
   arguments[0].slice(arguments[0].indexOf(key.name));

 },
 // Called to build everything. \\
 start:(build) => {

   (!build) ? throw new Error("Nothing to start.") : null;

   while(callback()) { return this };
   while(x == null) { return vvern.builder() };
   continue(x);

 },
 resources:() => {
   return Resources;
 },
// Install and Return Packages \\
 packageMarket:() => {
// For looping everything. \\
    for(x = 0;x < Resources.total();x++) {
// The place where the packages are stored. \\
    /**
    @type {ObjectArray<string>}
    */
    var packages = [];
        
// If the "Package Resource" is the "Package Manager" then we add that to our package list. \\
   if(Resources[x].type === "package") {
       const PackageInstaller = new Javah.packageInstaller({ cache: [ 0xV2.wav body.htm ], install:(from, to) => Javah.TransferCache(from, this.cache) });

       PackageInstaller.install(Resources[x], packages);
     }
    }

// Returning the packages. \\
    return packages;
  }
}
}

