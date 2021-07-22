const fs = require("fs");
const sha3_256 = require('js-sha3').sha3_256;
var mySet = [];
fs.readdirSync(process.cwd(), "utf8").forEach(fileName => {
    if (checkIsFile(fileName)) {
        console.log(fileName + " " + sha3_256(fs.readFileSync(fileName, "utf8")
            .replace("\n", "")));
        mySet.push(fileName)
    }
});
function checkIsFile(path) {
    return fs.lstatSync(path).isFile();
}