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
