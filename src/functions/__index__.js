//Windows\\
const client = require('./windows/client');
//Windows\\

const functions = {
 /**
 @param { Javah } javah
 */
 queue:(name, key) => {

   (!name || !key) ? (return) : null;

   const arguments[0] = { ... };

   arguments[0][key.name] = key.value;
   await arguments[0][key.name];
   arguments[0].slice(arguments[0].indexOf(key.name));

 },
 resources:() => {
   const Resources = new Javah.data({});

   packageMarket:() => {
     for(x = 0;x < Resources.total();x++) {
        var packages = [];
        
        if(Resources[x].type === "package") {
          const PackageInstaller = new Javah.packageInstaller({ cache: true });

          PackageInstaller.install(Resources[x], packages);
        }
     }

     return packages;
   }

   return Resources;
 },
 start:(build) => {

   (!build) ? throw new Error("Nothing to start.") : null;

   while(callback()) { return this };
   continue(x);

 }
}

module.exports = functions;

