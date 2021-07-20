console.time('FirstWay');
var s = "xac";
var s1 = "acbdxf";
var s2 = "acbdxxf";
var s3 = "xfacb";
var arr1 = [s, s1, s2, s3];
var arr2 = [];
var arr3 = [];
var arr4 = [];
var myVar = "";
for (var x = 0; x < arr1.length; x++) {
    for (var m = 0; m < arr1[x].length; m++) { 
        var arr = [];
        var vl = "";
        for (var i = m; i < arr1[x].length; i++) { 
            vl += arr1[x][i]; 
            arr.push(vl);
        }
       // console.log(arr);
        for (var c = 0; c < arr1.length; c++) {
            for (var d = 0; d < arr.length; d++) {
                if (c != x) {
                    let res = arr1.every(function (e) {
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
//console.log(arr2);
//console.log(arr3);
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
console.timeEnd('FirstWay');