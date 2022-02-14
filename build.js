const javah = require('javah');
const packages = require('./src/packages');
const : = require('./src/functions');
const x = packages:resources();

const build = x:packageMarket();

for(x2 = 0; x2 < packages.total(); x2++) x:queue("build", packages[x2]);

x:start("build");
