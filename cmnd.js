//console.time('FirstWay');
var myArr = [];
for(var r = 2; r < process.argv.length; r++){
    myArr.push(process.argv[r]);
}
console.log(myArr);
var arr2 = [];
var arr3 = [];
var arr4 = [];
var myVar = "";
for (var x = 0; x < myArr.length; x++) {
    for (var m = 0; m < myArr[x].length; m++) { 
        var arr = [];
        var vl = "";
        for (var i = m; i < myArr[x].length; i++) { 
            vl += myArr[x][i]; 
            arr.push(vl);
        }
       // console.log(arr);
        for (var c = 0; c < myArr.length; c++) {
            for (var d = 0; d < arr.length; d++) {
                if (c != x) {
                    let res = myArr.every(function (e) {
                        return e.includes(arr[d]);
                    });
                    if (res) {
                        arr3.push(arr[d]);
                    }
                }
            }
        }
    }
}
var numbers = [];
for (var z = 0; z < arr3.length; z++) {
    numbers.push(arr3[z].length);
}
numbers.sort();
var sign = numbers[numbers.length - 1];

for (var z = 0; z < arr3.length; z++) {
    if (arr3[z].length == sign) {
        console.log(arr3[z]);
        break;
    } 
}
if( arr3[z] == undefined){
    console.log();
}
//console.timeEnd('FirstWay');