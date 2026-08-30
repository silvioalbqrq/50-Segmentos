(function(){"use strict";
document.addEventListener("contextmenu",function(e){e.preventDefault();return false;},{capture:true});
document.addEventListener("keydown",function(e){
  if(e.key==="F12"||e.keyCode===123){e.preventDefault();e.stopPropagation();return false;}
  if(e.ctrlKey&&e.shiftKey&&["I","J","C","i","j","c"].includes(e.key)){e.preventDefault();e.stopPropagation();return false;}
  if(e.ctrlKey&&(e.key==="u"||e.key==="U"||e.key==="s"||e.key==="S")){e.preventDefault();e.stopPropagation();return false;}
  if(e.metaKey&&e.altKey&&["I","J","C","i","j","c"].includes(e.key)){e.preventDefault();e.stopPropagation();return false;}
  if(e.metaKey&&(e.key==="u"||e.key==="U")){e.preventDefault();e.stopPropagation();return false;}
},{capture:true});
document.addEventListener("dragstart",function(e){if(e.target.tagName==="IMG"||e.target.tagName==="A"){e.preventDefault();return false;}});
if(typeof console!=="undefined"){setInterval(function(){try{console.clear();}catch(e){}},4000);}
})();