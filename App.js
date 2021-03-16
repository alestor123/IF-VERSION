var {readFileSync} = require('fs');
if(JSON.parse(readFileSync('./package.json')).version==process.argv[2]) process.exit(0)
process.exit(1)
