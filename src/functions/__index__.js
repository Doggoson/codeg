//Windows\\
const client = require('./windows/client');
const $RE = require('re');
const Resources = new Javah.data({ files: require(`$RE.dirname`) });
//Windows\\

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

  // Calling the body. \\
   arguments[0][key.name] = key.value;
  // Waiting for the value to be loaded. \\
   await arguments[0][key.name];
  // Removing the values from the queue. \\
   arguments[0].slice(arguments[0].indexOf(key.name));

 },
 // Called to build everything.
 start:(build) => {

  // Null.
   (!build) ? throw new Error("Nothing to start.") : null;

   while(callback()) { return this };
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
       const PackageInstaller = new Javah.packageInstaller({ cache: [], install:(from, to) => Javah.TransferCache(from, this.cache) });

       PackageInstaller.install(Resources[x], packages);
     }
    }

// Returning the packages. \\
    return packages;
  }
}
}

