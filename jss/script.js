var zoom=15;var latitude=41.038966;var longitude=28.984451;$(document)["\x72\x65\x61\x64\x79"](function (){$("\x62\x6F\x64\x79")["\x77\x69\x64\x74\x68"]($(window)["\x77\x69\x64\x74\x68"]());$("\x62\x6F\x64\x79")["\x68\x65\x69\x67\x68\x74"]($(window)["\x68\x65\x69\x67\x68\x74"]());openSection($("\x2E\x73\x65\x63\x74\x69\x6F\x6E\x2D\x68\x6F\x6D\x65"),true);$("\x2E\x63\x6C\x6F\x73\x65\x2D\x62\x74\x6E")["\x63\x6C\x69\x63\x6B"](function (event){event["\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74"]();closeSection($($(this)["\x61\x74\x74\x72"]("\x64\x61\x74\x61\x2D\x63\x6C\x6F\x73\x69\x6E\x67\x2D\x69\x64")),$("\x2E\x73\x65\x63\x74\x69\x6F\x6E\x2D\x68\x6F\x6D\x65"));} );$("\x2E\x6D\x65\x6E\x75\x2D\x69\x74\x65\x6D\x20\x61")["\x63\x6C\x69\x63\x6B"](function (event){event["\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74"]();closeSection($("\x2E\x73\x65\x63\x74\x69\x6F\x6E\x2D\x68\x6F\x6D\x65"),$($(this)["\x61\x74\x74\x72"]("\x68\x72\x65\x66")));} );$("\x2E\x72\x65\x61\x64\x6D\x6F\x72\x65")["\x63\x6C\x69\x63\x6B"](function (event){event["\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74"]();closeSection($("\x2E\x73\x65\x63\x74\x69\x6F\x6E\x2D\x62\x6C\x6F\x67"),$($(this)["\x61\x74\x74\x72"]("\x68\x72\x65\x66")));} );function openSection(selector,isHome){var counter=1;var elementCount=selector["\x66\x69\x6E\x64"]("\x2E\x69\x6E\x69\x74")["\x6C\x65\x6E\x67\x74\x68"];selector["\x66\x69\x6E\x64"]("\x2E\x69\x6E\x69\x74")["\x65\x61\x63\x68"](function (){var el=$(this);var delay=counter*120;counter=counter<elementCount?counter+1:counter;el["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x61\x6E\x69\x6D\x61\x74\x65\x64");setIn(el,delay,elementCount,isHome,selector);} );} ;function closeSection(closeSelector,toOpen){var counter=1;var elementCount=closeSelector["\x66\x69\x6E\x64"]("\x2E\x69\x6E\x69\x74")["\x6C\x65\x6E\x67\x74\x68"];closeSelector["\x66\x69\x6E\x64"]("\x2E\x69\x6E\x69\x74")["\x65\x61\x63\x68"](function (){var el=$(this);var delay=counter*160;counter=counter<elementCount?counter+1:counter;setOut(el,delay,elementCount,toOpen,closeSelector);} );} ;var inCounter=0;function setIn(element,delay,maxElements,isHome,openingSection){inCounter=maxElements<inCounter?0:inCounter;setTimeout(function (){if($("\x68\x74\x6D\x6C")["\x68\x61\x73\x43\x6C\x61\x73\x73"]("\x69\x65")){element["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x68\x69\x64\x64\x65\x6E")["\x63\x73\x73"]("\x6F\x70\x61\x63\x69\x74\x79",0);element["\x61\x6E\x69\x6D\x61\x74\x65"]({opacity:1});} else {element["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x61\x6E\x69\x6D\x61\x74\x65\x64\x20\x62\x6F\x75\x6E\x63\x65\x49\x6E\x44\x6F\x77\x6E");element["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x68\x69\x64\x64\x65\x6E");} ;inCounter++;if(inCounter==maxElements){inCounter=0;openingSection["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x63\x75\x72\x72\x65\x6E\x74");if(isHome){$("\x2E\x6D\x65\x6E\x75\x2D\x70\x6F\x72\x74\x66\x6F\x6C\x69\x6F")["\x6F\x72\x62\x69\x74"]($("\x2E\x61\x76\x61\x74\x61\x72\x2D\x68\x6F\x6C\x64\x65\x72"),{orbits:100,period:120000,clockwise:false,offset:0});$("\x2E\x6D\x65\x6E\x75\x2D\x61\x62\x6F\x75\x74")["\x6F\x72\x62\x69\x74"]($("\x2E\x61\x76\x61\x74\x61\x72\x2D\x68\x6F\x6C\x64\x65\x72"),{orbits:100,period:80000,clockwise:false,offset:400});$("\x2E\x6D\x65\x6E\x75\x2D\x62\x6C\x6F\x67")["\x6F\x72\x62\x69\x74"]($("\x2E\x61\x76\x61\x74\x61\x72\x2D\x68\x6F\x6C\x64\x65\x72"),{orbits:100,period:90000,clockwise:true,offset:200});$("\x2E\x6D\x65\x6E\x75\x2D\x63\x6F\x6E\x74\x61\x63\x74")["\x6F\x72\x62\x69\x74"]($("\x2E\x61\x76\x61\x74\x61\x72\x2D\x68\x6F\x6C\x64\x65\x72"),{orbits:100,period:70000,offset:900});$("\x2E\x6D\x65\x6E\x75\x2D\x73\x6B\x69\x6C\x6C\x73")["\x6F\x72\x62\x69\x74"]($("\x2E\x61\x76\x61\x74\x61\x72\x2D\x68\x6F\x6C\x64\x65\x72"),{orbits:100,period:90000,offset:600});$("\x2E\x6D\x65\x6E\x75\x2D\x69\x74\x65\x6D")["\x64\x65\x6C\x61\x79"](100)["\x61\x6E\x69\x6D\x61\x74\x65"]({opacity:1});} ;setupSkills();checkContactForm();setupPortfolio();setupMap();} ;} ,delay);} ;var outCounter=0;function setOut(element,delay,maxElements,openSec,closeSection){outCounter=maxElements<outCounter?0:outCounter;setTimeout(function (){if($("\x68\x74\x6D\x6C")["\x68\x61\x73\x43\x6C\x61\x73\x73"]("\x69\x65")){element["\x61\x6E\x69\x6D\x61\x74\x65"]({opacity:0});} else {element["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x61\x6E\x69\x6D\x61\x74\x65\x64\x20\x62\x6F\x75\x6E\x63\x65\x4F\x75\x74\x55\x70");} ;outCounter++;if(outCounter==maxElements){setTimeout(function (){outCounter=0;closeSection["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x68\x69\x64\x64\x65\x6E")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x63\x75\x72\x72\x65\x6E\x74");closeSection["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x61\x6E\x69\x6D\x61\x74\x65\x64")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x62\x6F\x75\x6E\x63\x65\x4F\x75\x74\x55\x70");closeSection["\x66\x69\x6E\x64"]("\x2E\x61\x6E\x69\x6D\x61\x74\x65\x64")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x61\x6E\x69\x6D\x61\x74\x65\x64");closeSection["\x66\x69\x6E\x64"]("\x2E\x69\x6E\x69\x74")["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x68\x69\x64\x64\x65\x6E");closeSection["\x66\x69\x6E\x64"]("\x2E\x62\x6F\x75\x6E\x63\x65\x4F\x75\x74\x55\x70")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x62\x6F\x75\x6E\x63\x65\x4F\x75\x74\x55\x70");closeSection["\x66\x69\x6E\x64"]("\x2E\x62\x6F\x75\x6E\x63\x65\x49\x6E\x44\x6F\x77\x6E")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x62\x6F\x75\x6E\x63\x65\x49\x6E\x44\x6F\x77\x6E");openSec["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x61\x6E\x69\x6D\x61\x74\x65\x64\x20\x62\x6F\x75\x6E\x63\x65\x49\x6E\x55\x70");openSec["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x68\x69\x64\x64\x65\x6E");openSection(openSec,false);} ,500);} ;} ,delay);} ;function setupSkills(){if($("\x2E\x70\x61\x67\x65\x2E\x63\x75\x72\x72\x65\x6E\x74")["\x66\x69\x6E\x64"]("\x2E\x73\x6B\x69\x6C\x6C")["\x6C\x65\x6E\x67\x74\x68"]>0){var opts={lines:12,angle:0,lineWidth:0.4,pointer:{length:0.5,strokeWidth:0.035,color:"\x23\x30\x30\x30\x30\x30\x30"},colorStart:"\x23\x43\x45\x33\x33\x30\x36",colorStop:"\x23\x43\x45\x33\x33\x30\x36",strokeColor:"\x23\x45\x45\x45\x45\x45\x45"};$("\x2E\x73\x6B\x69\x6C\x6C")["\x67\x61\x75\x67\x65"](opts);} ;} ;function checkContactForm(){if($("\x2E\x70\x61\x67\x65\x2E\x63\x75\x72\x72\x65\x6E\x74")["\x66\x69\x6E\x64"]("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D")["\x6C\x65\x6E\x67\x74\x68"]>0){var formStatus=$("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D")["\x76\x61\x6C\x69\x64\x61\x74\x65"]();$("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D")["\x73\x75\x62\x6D\x69\x74"](function (e){e["\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74"]();if(formStatus["\x65\x72\x72\x6F\x72\x4C\x69\x73\x74"]["\x6C\x65\x6E\x67\x74\x68"]===0){$("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D\x20\x2E\x73\x75\x62\x6D\x69\x74")["\x66\x61\x64\x65\x4F\x75\x74"](function (){$("\x23\x6C\x6F\x61\x64\x69\x6E\x67")["\x63\x73\x73"]("\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x76\x69\x73\x69\x62\x6C\x65");$["\x70\x6F\x73\x74"]("\x73\x75\x62\x6D\x69\x74\x2E\x70\x68\x70",$("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D")["\x73\x65\x72\x69\x61\x6C\x69\x7A\x65"](),function (data){$("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D\x20\x69\x6E\x70\x75\x74\x2C\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D\x20\x74\x65\x78\x74\x61\x72\x65\x61")["\x6E\x6F\x74"]("\x2E\x73\x75\x62\x6D\x69\x74")["\x76\x61\x6C"]("");$("\x2E\x6D\x65\x73\x73\x61\x67\x65\x2D\x62\x6F\x78")["\x68\x74\x6D\x6C"](data);$("\x23\x6C\x6F\x61\x64\x69\x6E\x67")["\x63\x73\x73"]("\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x68\x69\x64\x64\x65\x6E");$("\x2E\x63\x6F\x6E\x74\x61\x63\x74\x2D\x66\x6F\x72\x6D\x20\x2E\x73\x75\x62\x6D\x69\x74")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x64\x69\x73\x61\x62\x6C\x65\x64")["\x63\x73\x73"]("\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B");} );} );} ;} );} ;} ;function setupPortfolio(){if($("\x2E\x70\x61\x67\x65\x2E\x63\x75\x72\x72\x65\x6E\x74")["\x66\x69\x6E\x64"]("\x23\x67\x72\x69\x64")["\x6C\x65\x6E\x67\x74\x68"]>0){$("\x61\x5B\x64\x61\x74\x61\x2D\x72\x65\x6C\x5E\x3D\x27\x70\x72\x65\x74\x74\x79\x50\x68\x6F\x74\x6F\x27\x5D")["\x70\x72\x65\x74\x74\x79\x50\x68\x6F\x74\x6F"]();$("\x23\x67\x72\x69\x64\x20\x3E\x20\x2E\x70\x6F\x72\x74\x66\x6F\x6C\x69\x6F\x2D\x69\x74\x65\x6D")["\x65\x61\x63\x68"](function (){$(this)["\x68\x6F\x76\x65\x72\x64\x69\x72"]({hoverDelay:400});} );$("\x2E\x66\x69\x6C\x74\x65\x72\x2D\x6F\x70\x74\x69\x6F\x6E\x73\x20\x6C\x69")["\x6F\x6E"]("\x63\x6C\x69\x63\x6B",function (){var $this=$(this),$grid=$("\x23\x67\x72\x69\x64");$("\x2E\x66\x69\x6C\x74\x65\x72\x2D\x6F\x70\x74\x69\x6F\x6E\x73\x20\x2E\x61\x63\x74\x69\x76\x65")["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x61\x63\x74\x69\x76\x65");$this["\x61\x64\x64\x43\x6C\x61\x73\x73"]("\x61\x63\x74\x69\x76\x65");$grid["\x73\x68\x75\x66\x66\x6C\x65"]($this["\x64\x61\x74\x61"]("\x67\x72\x6F\x75\x70"));} );$("\x23\x67\x72\x69\x64")["\x73\x68\x75\x66\x66\x6C\x65"]({group:"\x61\x6C\x6C",speed:1000,easing:"\x65\x61\x73\x65\x2D\x69\x6E\x2D\x6F\x75\x74"});setTimeout(function (){$("\x23\x67\x72\x69\x64")["\x70\x61\x72\x65\x6E\x74"]()["\x61\x6E\x69\x6D\x61\x74\x65"]({opacity:1},function (){$(this)["\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73"]("\x69\x6E\x69\x74");} );} ,500);} ;} ;var mapIsActive=false;function setupMap(){if($("\x2E\x70\x61\x67\x65\x2E\x63\x75\x72\x72\x65\x6E\x74")["\x66\x69\x6E\x64"]("\x2E\x6D\x61\x70\x2D\x68\x6F\x6C\x64\x65\x72")["\x6C\x65\x6E\x67\x74\x68"]>0&&!mapIsActive){mapIsActive=true;$("\x2E\x6D\x61\x70")["\x67\x6D\x61\x70\x33"]({map:{options:{center:[latitude,longitude],zoom:zoom,mapTypeControl:true,navigationControl:true,scrollwheel:true,streetViewControl:false}},marker:{latLng:[latitude,longitude]}});} ;} ;} );$(window)["\x72\x65\x73\x69\x7A\x65"](function (){$("\x62\x6F\x64\x79")["\x77\x69\x64\x74\x68"]($(window)["\x77\x69\x64\x74\x68"]());$("\x62\x6F\x64\x79")["\x68\x65\x69\x67\x68\x74"]($(window)["\x68\x65\x69\x67\x68\x74"]());} );$["\x66\x6E"]["\x6F\x72\x62\x69\x74"]=function (s,options){var settings={orbits:1,period:3000,maxfps:25,clockwise:true,offset:0};$["\x65\x78\x74\x65\x6E\x64"](settings,options);return (this["\x65\x61\x63\x68"](function (){var p=$(this);var p_top=p["\x63\x73\x73"]("\x74\x6F\x70");var p_left=p["\x63\x73\x73"]("\x6C\x65\x66\x74");if($("\x68\x74\x6D\x6C")["\x68\x61\x73\x43\x6C\x61\x73\x73"]("\x77\x65\x62\x6B\x69\x74")){var s_top=s["\x63\x73\x73"]("\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70");var s_left=s["\x63\x73\x73"]("\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74");} else {var s_top=s["\x63\x73\x73"]("\x74\x6F\x70");var s_left=s["\x63\x73\x73"]("\x6C\x65\x66\x74");} ;var p_x=parseInt(p_top)+p["\x68\x65\x69\x67\x68\x74"]()/2,p_y=parseInt(p_left)+p["\x77\x69\x64\x74\x68"]()/2,s_x=parseInt(s_top)+s["\x68\x65\x69\x67\x68\x74"]()/2,s_y=parseInt(s_left)+s["\x77\x69\x64\x74\x68"]()/2;var a=s_x-p_x,o=s_y-p_y;var r=Math["\x73\x71\x72\x74"](a*a+o*o);var theta=Math["\x61\x63\x6F\x73"](a/r)+settings["\x6F\x66\x66\x73\x65\x74"];var niters=Math["\x63\x65\x69\x6C"](Math["\x6D\x69\x6E"](4*r,settings["\x70\x65\x72\x69\x6F\x64"],0.001*settings["\x70\x65\x72\x69\x6F\x64"]*settings["\x6D\x61\x78\x66\x70\x73"]));var delta=2*Math["\x50\x49"]/niters;var delay=settings["\x70\x65\x72\x69\x6F\x64"]/niters;if(!settings["\x63\x6C\x6F\x63\x6B\x77\x69\x73\x65"]){delta=-delta;} ;niters*=settings["\x6F\x72\x62\x69\x74\x73"];var timeout_loop=function (s,r,theta,delta,iter,niters,delay,settings){setTimeout(function (){var w=theta+iter*delta;var a=r*Math["\x63\x6F\x73"](w);var o=r*Math["\x73\x69\x6E"](w);if($("\x68\x74\x6D\x6C")["\x68\x61\x73\x43\x6C\x61\x73\x73"]("\x77\x65\x62\x6B\x69\x74")){var x=parseInt(s["\x63\x73\x73"]("\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74"))+(s["\x68\x65\x69\x67\x68\x74"]()/2)-a;var y=parseInt(s["\x63\x73\x73"]("\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70"))+(s["\x77\x69\x64\x74\x68"]()/2)-o;} else {var x=parseInt(s["\x63\x73\x73"]("\x6C\x65\x66\x74"))+(s["\x68\x65\x69\x67\x68\x74"]()/2)-a;var y=parseInt(s["\x63\x73\x73"]("\x74\x6F\x70"))+(s["\x77\x69\x64\x74\x68"]()/2)-o;} ;p["\x63\x73\x73"]({top:(y-p["\x68\x65\x69\x67\x68\x74"]()/2),left:(x-p["\x77\x69\x64\x74\x68"]()/2)});if(iter<(niters-1)){timeout_loop(s,r,theta,delta,iter+1,niters,delay,settings);} ;} ,delay);} ;timeout_loop(s,r,theta,delta,0,niters,delay,settings);} ));} ;$["\x66\x6E"]["\x67\x61\x75\x67\x65"]=function (opts){$("\x2E\x73\x6B\x69\x6C\x6C")["\x65\x61\x63\x68"](function (){var $this=$(this),data=$this["\x64\x61\x74\x61"]();var level=$this["\x61\x74\x74\x72"]("\x64\x61\x74\x61\x2D\x6C\x65\x76\x65\x6C");if(data["\x67\x61\x75\x67\x65"]){data["\x67\x61\x75\x67\x65"]["\x73\x74\x6F\x70"]();delete data["\x67\x61\x75\x67\x65"];} ;if(opts!==false){data["\x67\x61\x75\x67\x65"]= new Gauge(this)["\x73\x65\x74\x4F\x70\x74\x69\x6F\x6E\x73"](opts);data["\x67\x61\x75\x67\x65"]["\x6D\x61\x78\x56\x61\x6C\x75\x65"]=100;data["\x67\x61\x75\x67\x65"]["\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x53\x70\x65\x65\x64"]=100;data["\x67\x61\x75\x67\x65"]["\x73\x65\x74"](level);} ;} );return this;} ;