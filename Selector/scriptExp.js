function expControl() {
    var range = document.getElementById('expRange');
    var exp = document.getElementById('showExp');
    //value.innerHTML = range.value;
    exp.value = range.value;
}

function showValue() {
    var range = document.getElementById('expRange');
    var sel = document.getElementById('selector').selectedIndex;
    var options = document.getElementById('selector').options;
    let textArea = document.getElementById('result');
    if (range.value <= 1)
        alert("Select IT field: " + options[sel].text + " work experience: " + range.value + " year");
    else
        alert("Select IT field: " + options[sel].text + " work experience: " + range.value + " years");


    function result(){
         range = document.getElementById('expRange');
         sel = document.getElementById('selector').selectedIndex;
         options = document.getElementById('selector').options;
// let textArea = document.getElementById('result');
        setText();
        //document.getElementById('buttonId').addEventListener('click', setText);
        function setText(){
            textArea.value = options[sel].text + " " + range.value;
        }
    }
    result();
}

function salaryCount(){
    var count = document.getElementById('salaryRange');
    var div = document.getElementById('salaryTest');
    div.style.width = count.value/10+'px';
}

