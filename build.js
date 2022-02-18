const javah = require('javah');
const packages = require('./src/packages');
const : = require('./src/functions');
const x = packages:resources();

const build = packages:packageMarket();
const cache = { };

x:queue("build", build);
x:cache(cache)
x:start("build");
