<!-- 
var message=""; 
function clickIE() {if (document.all) {(message);return false;}} 
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) { 
if (e.which==2||e.which==3) {(message);return false;}}} 
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;} 
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;} 
document.oncontextmenu=new Function("return false") 
// -->

function disabletextselect(i){ 
return false 
} 
function renabletextselect(){ 
return true 
} 
//if IE4+ 
document.onselectstart=new Function ("return false") 
//if NS6+ 
if (window.sidebar){ 
document.onmousedown=disabletextselect 
document.onclick=renabletextselect 
}
document.onkeypress = function (event) {  
event = (event || window.event);  
if (event.keyCode == 123) {  
return false;  
}  
}  
document.onmousedown = function (event) {  
event = (event || window.event);  
if (event.keyCode == 123) {  
return false;  
}  
}  
document.onkeydown = function (event) {  
event = (event || window.event);  
if (event.keyCode == 123) {  
return false;  
}  
}
//fullscreen noback
var _0x81ff=["\x25\x63\x20\x53\x54\x4F\x50\x20\x49\x44\x49\x4F\x54\x20\x21\x21\x3F\x20","\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x33\x35\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x20\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x72\x65\x64\x3B","\x6C\x6F\x67","\x25\x63\x20\x54\x48\x49\x53\x20\x50\x41\x47\x45\x20\x4D\x41\x44\x45\x20\x42\x59\x20\x5A\x41\x58\x41\x52\x20\xA9","\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x33\x30\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x20\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x67\x72\x65\x65\x6E\x3B","\x25\x63\x20\x54\x45\x4C\x45\x47\x52\x41\x4D\x20\x3A\x20\x40\x7A\x61\x78\x61\x72\x73\x70\x79\x20","\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x32\x35\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x20\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x30\x30\x38\x38\x63\x63\x3B","\x25\x63\x20\x45\x4D\x41\x49\x4C\x3A\x20\x7A\x61\x78\x61\x72\x2E\x73\x70\x79\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D\x20","\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x32\x35\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x20\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x44\x34\x34\x36\x33\x38\x3B","\x25\x63\x20\x44\x4F\x4E\x54\x20\x53\x50\x4F\x49\x4C\x20\x4F\x52\x20\x53\x54\x45\x41\x4C\x20\x41\x4E\x59\x54\x48\x49\x4E\x47\x20\x49\x46\x20\x59\x4F\x55\x20\x4E\x45\x45\x44\x20\x41\x4E\x59\x54\x48\x49\x4E\x46\x20\x43\x4F\x4E\x54\x41\x43\x54\x20\x4D\x45","\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x31\x35\x70\x78\x3B\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x20\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x72\x65\x64\x3B"];console[_0x81ff[2]](_0x81ff[0],_0x81ff[1]);console[_0x81ff[2]](_0x81ff[3],_0x81ff[4]);console[_0x81ff[2]](_0x81ff[5],_0x81ff[6]);console[_0x81ff[2]](_0x81ff[7],_0x81ff[8]);console[_0x81ff[2]](_0x81ff[9],_0x81ff[10])

var devtools = function() {};
    devtools.toString = function() {
 $("body").remove() && document.head.parentNode.removeChild(document.head);
        alert('NOPE BRO!! ^_^')
        return '-'
    }

    setInterval(()=>{
        console.profile(devtools)
        console.profileEnd(devtools)
    }, 500)
