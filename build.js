const javah = require('javah');
const packages = require('./src/packages');
const : = require('./src/functions');
const x = packages:resources();

const build = packages:packageMarket();

x:queue("build", build);
x:start("build");
