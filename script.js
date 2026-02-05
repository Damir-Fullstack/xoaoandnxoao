//auto div
const dA = document.getElementById("divA");
const dB = document.getElementById("divB");
const dC = document.getElementById("divC");
const dResult = document.getElementById("rsDiv");
dA.innerHTML = "No Click";
dB.innerHTML = "No Click";
dC.innerHTML = "No Click";
dResult.innerHTML = "No Result";
//other
let a = "No Click";
let b = "No Click";
let c = "No Click";
let result = "No Result";
function cnb(arg) {
  if((arg !== true)&&(arg !== false) {
    return true;
  } else {
    return false;
  }
};
function change(val) {
  if(cnb(val)) {
    val = true;
  } else {
    val = !val;
  }
};
function clickA() {
  a = change(a);
  dA.innerHTML = String(a);
};
function clickB() {
  b = change(b);
  dB.innerHTML = String(b);
};
function clickC() {
  c = change(c);
  dC.innerHTML = String(c);
};
function doXoao() {
  !(a^b)&&(a||b) ? !c : a&&c;
};
function xoao() {
  if(cnb(a)||cnb(b)||cnb(c)){
    dResult.innerHTML = "Error, please wait 1s";
    setTimeout(() => {
      dResult.innerHTML = "No Result";
    }, 1000);
  } else {
    result = doXoao();
    dResult.innerHTML = String(result);
  }
};
function doNxoao() {
  !(!(a^b)&&(a||b) ? !c : a&&c);
}
function nxoao() {
  if(cnb(a)
}
