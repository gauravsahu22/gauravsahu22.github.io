function Swap() {
    var inputTag = document.getElementById("from");
    var outTag = document.getElementById("to");
  
    inputTag.appendChild(outTag.firstElementChild);
    outTag.appendChild(inputTag.firstElementChild);
  }
  
  function convert() {
    var iNum = document.getElementById("ipNum").value;
    var iType = document.getElementById("from").firstElementChild.value;
    var oType = document.getElementById("to").firstElementChild.value;
    var oNum;
  
    //conversion from binary to oct, dec, hex
    if (iType == "bin" && oType == "dec") oNum = bin2dec(iNum);
    if (iType == "bin" && oType == "oct") oNum = bin2oct(iNum);
    if (iType == "bin" && oType == "hex") oNum = bin2hex(iNum);
    if (iType == "bin" && oType == "bin") oNum = "INVALID";
    //conversion from decimal to bin, oct, hex
    if (iType == "dec" && oType == "bin") oNum = dec2bin(iNum);
    if (iType == "dec" && oType == "oct") oNum = dec2oct(iNum);
    if (iType == "dec" && oType == "hex") oNum = dec2hex(iNum);
    if (iType == "dec" && oType == "dec") oNum = "INVALID";
    //conversion from octal to bin, dec, hex
    if (iType == "oct" && oType == "bin") oNum = oct2bin(iNum);
    if (iType == "oct" && oType == "dec") oNum = oct2dec(iNum);
    if (iType == "oct" && oType == "hex") oNum = oct2hex(iNum);
    if (iType == "oct" && oType == "oct") oNum = "INVALID";
    //conversion from hexadecimal to bin, dec, oct
    if (iType == "hex" && oType == "bin") oNum = hex2bin(iNum);
    if (iType == "hex" && oType == "oct") oNum = hex2oct(iNum);
    if (iType == "hex" && oType == "dec") oNum = hex2dec(iNum);
    if (iType == "hex" && oType == "hex") oNum = "INVALID";
  
    document.getElementById("opNum").value = oNum;
  }
  //=============================================================
  //function binary to decimal conversion
  function bin2dec(iNum) {
    return parseInt(iNum, 2);
  }
  //function binary to octal conversion
  function bin2oct(iNum) {
    return parseInt(iNum, 2).toString(8);
  }
  //function binary to hexadecimal conversion
  function bin2hex(iNum) {
    return parseInt(iNum, 2).toString(16);
  }
  //===========================================
  //function decimal to binary conversion
  function dec2bin(iNum) {
    return parseInt(iNum).toString(2);
  }
  //function decimal to octal conversion
  function dec2oct(iNum) {
    return parseInt(iNum).toString(8);
  }
  //function decimal to hexadecimal conversion
  function dec2hex(iNum) {
    return parseInt(iNum).toString(16);
  }
  //===========================================
  //function octal to binary conversion
  function oct2bin(iNum) {
    return parseInt(iNum, 8).toString(2);
  }
  //function octal to decimal conversion
  function oct2dec(iNum) {
    return parseInt(iNum, 8).toString(10);
  }
  //function octal to hexadecimal conversion
  function oct2hex(iNum) {
    return parseInt(iNum, 8).toString(16);
  }
  //===========================================
  //function hexadecimal to binary conversion
  function hex2bin(iNum) {
    return parseInt(iNum, 16).toString(2);
  }
  //function hexadecimal to octal conversion
  function hex2oct(iNum) {
    return parseInt(iNum, 16).toString(8);
  }
  //function hexadecimal to decimal conversion
  function hex2dec(iNum) {
    return parseInt(iNum, 16).toString(10);
  }