
const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
var madd = ''
fs.writeFile("thing.json", madd, function(err, result) {
if(err) console.log('error', err);
});

fs.createReadStream('Dzialajtyjebnypliku.csv')
  .pipe(csv())
  .on('data', (row) => {
    var dict = row
    var dictstring = JSON.stringify(dict)
    fs.appendFile("thing.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});
  })
  .on('end', () => {
    console.log('Your csv file was succesfuly converted to JSON and saved in "thing.json" file')
  });
