function func1() {

    var rtl = document.getElementById('rtl');
    var rtr = document.getElementById('rtr');
    var rbl = document.getElementById('rbl');
    var rbr = document.getElementById('rbr');
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');

    var block = document.getElementById('block');

    ttl.value = rtl.value;
    ttr.value = rtr.value;
    tbl.value = rbl.value;
    tbr.value = rbr.value;

    block.style.borderTopLeftRadius = rtl.value + 'px';
    block.style.borderTopRightRadius = rtr.value + 'px';
    block.style.borderBottomLeftRadius = rbl.value + 'px';
    block.style.borderBottomRightRadius = rbr.value + 'px';

}

function func2(){
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbr = document.getElementById('rbr').value;
    var rbl = document.getElementById('rbl').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value=rtl;
    ttr.value=rtr;
    tbr.value=rbr;
    tbl.value=rbl;

    block.style.borderRadius=rtl+'px ' +rtr + 'px ' +rbr+ 'px '+ rbl+ 'px ';
}