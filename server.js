const express = require('express')
const app = express()
var fs = require('fs');


app.get('/:zip', function (req, res) {
var obj = JSON.parse(fs.readFileSync('us-zip-code-latitude-and-longitude.json', 'utf8'));
var zip = req.params.zip;
var count = Object.keys(obj).length;
var rowNumber=0;
for(let i=0;i<count;i++){
    if(obj[i]["fields"].zip==zip)
    {
        // console.log(obj[i]["fields"]);
        rowNumber=i;
        break;
    }
}
var newObj=(obj[rowNumber]["fields"]);
// console.log(newObj)
res.send(newObj)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
