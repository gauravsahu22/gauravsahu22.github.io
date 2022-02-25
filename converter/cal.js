document.getElementById("ipType").value = "ipbin";
document.getElementById("opType").value = "opbin";

function Swap(){
    var ipType = document.getElementById("ipType").value;
    var opType = document.getElementById("opType").value;
    
    var temp = ipType;
    ipType = opType;
    opType = temp;
  
    document.getElementById("ipType").value = ipType;
    document.getElementById("opType").value = opType;
}

function convert()
{
    var iNum  = document.getElementById("ipNum").value;
    var iType = document.getElementById("ipType").value;
    var oType = document.getElementById("opType").value;
    var oNum;
    
    //conversion from binary to oct, dec, hex
    if(iType=="ipbin" && oType=="opdec") oNum = bin2dec(iNum);
    if(iType=="ipbin" && oType=="opoct") oNum = bin2oct(iNum);
    if(iType=="ipbin" && oType=="ophex") oNum = bin2hex(iNum);
    if(iType=="ipbin" && oType=="opbin") oNum = "INVALID";
    //conversion from decimal to bin, oct, hex
    if(iType=="ipdec" && oType=="opbin") oNum = dec2bin(iNum);
    if(iType=="ipdec" && oType=="opoct") oNum = dec2oct(iNum);
    if(iType=="ipdec" && oType=="ophex") oNum = dec2hex(iNum);
    if(iType=="ipdec" && oType=="opdec") oNum = "INVALID";
    //conversion from octal to bin, dec, hex
    if(iType=="ipoct" && oType=="opbin") oNum = oct2bin(iNum);
    if(iType=="ipoct" && oType=="opdec") oNum = oct2dec(iNum);
    if(iType=="ipoct" && oType=="ophex") oNum = oct2hex(iNum);
    if(iType=="ipoct" && oType=="opoct") oNum = "INVALID";
    //conversion from hexadecimal to bin, dec, oct
    if(iType=="iphex" && oType=="opbin") oNum = hex2bin(iNum);
    if(iType=="iphex" && oType=="opoct") oNum = hex2oct(iNum);
    if(iType=="iphex" && oType=="opdec") oNum = hex2dec(iNum);
    if(iType=="iphex" && oType=="ophex") oNum = "INVALID";

    document.getElementById("opNum").value = oNum;
}
//=============================================================
//function binary to decimal conversion
function bin2dec(iNum)
{
    return parseInt(iNum, 2);
}
//function binary to octal conversion
function bin2oct(iNum)
{
    return parseInt(iNum, 2).toString(8);
}
//function binary to hexadecimal conversion
function bin2hex(iNum)
{
    return parseInt(iNum, 2).toString(16);
}
//===========================================
//function decimal to binary conversion
function dec2bin(iNum)
{
    return parseInt(iNum).toString(2);
}
//function decimal to octal conversion
function dec2oct(iNum)
{
    return parseInt(iNum).toString(8);
}
//function decimal to hexadecimal conversion
function dec2hex(iNum)
{
    return parseInt(iNum).toString(16);
}
//===========================================
//function octal to binary conversion
function oct2bin(iNum)
{
    return parseInt(iNum, 8).toString(2);
}
//function octal to decimal conversion
function oct2dec(iNum)
{
    return parseInt(iNum, 8).toString(10);
}
//function octal to hexadecimal conversion
function oct2hex(iNum)
{
    return parseInt(iNum, 8).toString(16);
}
//===========================================
//function hexadecimal to binary conversion
function hex2bin(iNum)
{
    return parseInt(iNum, 16).toString(2);
}
//function hexadecimal to octal conversion
function hex2oct(iNum)
{
    return parseInt(iNum, 16).toString(8);
}
//function hexadecimal to decimal conversion
function hex2dec(iNum)
{
    return parseInt(iNum, 16).toString(10);
}
