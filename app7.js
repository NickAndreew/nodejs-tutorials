const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gzip).pipe(writeStream);

const gunzip = zlib.createGunzip();
readStream.pipe(gunzip).pipe(writeStream); 