!function(a){function e(a,e){return a=a.replace("#",""),r=parseInt(a.substring(0,2),16),g=parseInt(a.substring(2,4),16),b=parseInt(a.substring(4,6),16),result="rgba("+r+","+g+","+b+","+e/100+")"}function h(a,e){a=String(a).replace(/[^0-9a-f]/gi,""),a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),e=e||0;var r,h,t="#";for(h=0;3>h;h++)r=parseInt(a.substr(2*h,2),16),r=Math.round(Math.min(Math.max(0,r+r*e),255)).toString(16),t+=("00"+r).substr(r.length);return t}var t=new Array("#1ABC9C","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c"),o=new Array("NE","SE","SW","NW"),i={fade:!1,color:"random",boxShadow:!1,angle:"random"};a.fn.flatshadow=function(r){var x=a.extend({},i,r);return this.each(function(){if(el=a(this),1==x.fade?(width=Math.round(el.outerWidth()/3),height=Math.round(el.outerHeight()/3)):(width=Math.round(el.outerWidth()),height=Math.round(el.outerHeight())),0!=x.boxShadow)var r=x.boxShadow;if("random"==x.color||el.attr("data-color")){var i=t[Math.floor(Math.random()*t.length)];if(el.attr("data-color"))var i=el.attr("data-color")}else var i=x.color;if("random"==x.angle||el.attr("data-angle")){var p=o[Math.floor(Math.random()*o.length)];if(el.attr("data-angle"))var p=el.attr("data-angle")}else var p=x.angle;var d=h(i,-.3),g="";if(0!=x.boxShadow)var n="";else var n="none";switch(p){case"N":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+="0px "+-1*2*l+"px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+="0px "+-1*l+"px 0px "+f,l!=height&&(g+=", ",n+=", ")}break;case"NE":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+=2*l+"px "+-1*2*l+"px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+=l+"px "+-1*l+"px 0px "+f,l!=height&&(g+=", ",n+=", ")}break;case"E":for(var l=1;width>=l;l++){if(0!=x.boxShadow&&(n+=2*l+"px 0px 0px "+e(r,50-100*(l/width))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+=l+"px 0px 0px "+f,l!=width&&(g+=", ",n+=", ")}break;case"SE":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+=2*l+"px "+2*l+"px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+=l+"px "+l+"px 0px "+f,l!=height&&(g+=", ",n+=", ")}break;case"S":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+="0px "+2*l+"px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+="0px "+l+"px 0px "+f,l!=height&&(g+=", ",n+=", ")}break;case"SW":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+=-1*2*l+"px "+2*l+"px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+=-1*l+"px "+l+"px 0px "+f,l!=height&&(g+=", ",n+=", ")}break;case"W":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+=-1*2*l+"px 0px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+=-1*l+"px 0px 0px "+f,l!=height&&(g+=", ",n+=", ")}break;case"NW":for(var l=1;height>=l;l++){if(0!=x.boxShadow&&(n+=-1*2*l+"px "+-1*2*l+"px 0px "+e(r,50-100*(l/height))),0!=x.fade)var f=e(d,100-100*(l/height));else var f=d;g+=-1*l+"px "+-1*l+"px 0px "+f,l!=height&&(g+=", ",n+=", ")}}el.css({background:i,color:h(i,1),"text-shadow":g,"box-shadow":n})})}}(window.jQuery);