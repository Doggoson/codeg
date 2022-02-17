const Javah = require('javah');
const Resources = new Javah.data({ files: require(__dirname) });

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
