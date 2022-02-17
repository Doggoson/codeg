const Javah = require('javah');
const Resources = new Javah.data({});

module.exports = {
// Return Array of Package Resources. \\
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
        
// If the resource is true then we call another data manager. \\
   if(Resources[x].type === "package") {
       const PackageInstaller = new Javah.packageInstaller({ cache: true });

       PackageInstaller.install(Resources[x], packages);
     }
    }

// Returning the packages. \\
    return packages;
  }
}
