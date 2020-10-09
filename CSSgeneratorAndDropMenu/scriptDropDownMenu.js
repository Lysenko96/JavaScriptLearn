document.getElementById('nav').onmouseover = function (ev){
    var tar  = ev.target;
    if (tar.className == 'menu'){
        var  sub = tar.getElementsByClassName('drop-item');
        closeMenu();
        sub[0].style.display='block';
    }
}
document.onmouseover=function (event){
    var myTarget = event.target;
    console.log(event.target);
    if(myTarget.className!='menu' && myTarget.className!='drop-item'){
        closeMenu();
    }
}

function closeMenu(){
    var topMenu = document.getElementById('nav');
    var subMenu = document.getElementsByClassName('drop-item');
    for(var i =0; i < subMenu.length; i++){
        subMenu[i].style.display = 'none';
    }
}