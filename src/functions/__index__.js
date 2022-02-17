//Windows\\
const client = require('./windows/client');
//Windows\\

// Calling the functions object function. \\
const functions = {
 // When called it calls the value from name or key \\
 /**
 @param { Javah } javah
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

 }
}

// export "functions"
module.exports = functions;

