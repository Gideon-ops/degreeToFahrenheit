

function fvToDeg()
{
    let deg = document.getElementById('fv').value;

    let newdeg = ((deg - 32) * (5/9));

    

    document.getElementById('deg').value = newdeg;
}

function degToFv()
{
    let fv = document.getElementById('deg1').value;

    let newfv = (fv*(9/5))+32;

    

    document.getElementById('fv1').value = newfv;

}



function del()
{
    let cleardeg = document.getElementById('deg').value;
    let clearfv = document.getElementById('fv').value;
    
    let cleardeg2 = null;
    let clearfv2 = null;

    document.getElementById('deg').value = cleardeg2;
    document.getElementById('fv').value = clearfv2;
}


function del1()
{
    let cleardeg = document.getElementById('deg1').value;
    let clearfv = document.getElementById('fv1').value;
    
    let cleardeg2 = null;
    let clearfv2 = null;

    document.getElementById('deg1').value = cleardeg2;
    document.getElementById('fv1').value = clearfv2;
}