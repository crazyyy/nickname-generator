function randomBetween(e,n){return 0>e?e+Math.random()*(Math.abs(e)+n):e+Math.random()*n}!function(){for(var e,n=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],r=t.length,i=window.console=window.console||{};r--;)e=t[r],i[e]||(i[e]=n)}();var request=new XMLHttpRequest;request.onload=function(){var e="",n=50,t=this.responseText,r=t.split("\n");for(i=0;i<=n;i++){var o=Math.floor(Math.random()*r.length),a=r[o];a=a.replace(/\s/gi,""),a=a.replace(/\d\d\d/gi,"");var d=parseInt(randomBetween(10,99));a.length<7?(a+=d,a=a.replace(/\d\d\d/gi,"")):a.match(/\d+/g)?(a+=d,a=a.replace(/\d\d\d/gi,"")):(a=a,a+=d,a=a.replace(/\d\d\d/gi,"")),a.length<7?i-=1:a.match(/\d+/g)?e=e+'<input type="text" onclick="this.select();" value="'+a+'"/>':i-=1}document.getElementById("random-nicknames").innerHTML=e},request.open("GET","sorces.txt",!0),request.send();
//# sourceMappingURL=maps/scripts.js.map
