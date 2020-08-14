function fun() {
var select;
var select1;
var select2;
select = document.getElementById('JavaScript');
select1 = document.getElementById('Java');
select2 = document.getElementById('C#');

var check;
check = document.getElementsByName('var');


    if (select.checked) {
        alert(select.id);
    }if (select1.checked) {
        alert(select1.id);
    }if(select2.checked){
        alert(select2.id);
    }
}

function fun1() {
    var radio;
    radio = document.getElementsByName('number');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert(radio[i].value);
        }
    }
}