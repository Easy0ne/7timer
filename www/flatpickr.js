var flatpickr=function(b,c){var e,a,f=[],d;flatpickr.prototype=flatpickr.init.prototype;a=function(g){if(g._flatpickr){g._flatpickr.destroy()}g._flatpickr=new flatpickr.init(g,c);return g._flatpickr};if(b.nodeName){return a(b)}e=document.querySelectorAll(b);if(e.length===1){return a(e[0])}for(d=0;d<e.length;d++){f.push(a(e[d]))}return f};flatpickr.init=function(b,n){var r=this,e=document.createElement("div"),B=document.createElement("span"),p=document.createElement("table"),g=document.createElement("tbody"),u,f=new Date(),h,z,l,C,m,E,v,o,d,y,c,x,j,D,k,q,A,w,i,a,s,t;e.className="flatpickr-calendar";B.className="flatpickr-current-month";n=n||{};h=function(){u=document.createElement("div");u.className="flatpickr-wrapper";String(r.config.inline)=="true"&&u.classList.add("inline");r.element.parentNode.insertBefore(u,r.element);u.appendChild(r.element)};s=function(){var F=r.currentYearView;if(F===1&&(!((F%4)||(!(F%100)&&(F%400))))){return 29}return r.l10n.daysInMonth[r.currentMonthView]};l=function(G,J){var K="",H=new Date(J),F={d:function(){var L=F.j();return(L<10)?"0"+L:L},D:function(){return r.l10n.weekdays.shorthand[F.w()]},j:function(){return H.getDate()},l:function(){return r.l10n.weekdays.longhand[F.w()]},w:function(){return H.getDay()},F:function(){return C(F.n()-1,false)},m:function(){var L=F.n();return(L<10)?"0"+L:L},M:function(){return C(F.n()-1,true)},n:function(){return H.getMonth()+1},U:function(){return H.getTime()/1000},y:function(){return String(F.Y()).substring(2)},Y:function(){return H.getFullYear()}},I=G.split("");r.forEach(I,function(M,L){if(F[M]&&I[L-1]!=="\\"){K+=F[M]()}else{if(M!=="\\"){K+=M}}});return K};C=function(G,F){if(F===true){return r.l10n.months.shorthand[G]}return r.l10n.months.longhand[G]};E=function(){var F=document.createElement("thead"),H=r.l10n.firstDayOfWeek,G=r.l10n.weekdays.shorthand.slice();if(H>0&&H<G.length){G=[].concat(G.splice(H,G.length),G.splice(0,H))}F.innerHTML="<tr><th>"+G.join("</th><th>")+"</th></tr>";p.appendChild(F)};m=function(F){for(var G=0;G<r.config.disable.length;G++){if(F>=new Date(r.config.disable[G]["from"])&&F<=new Date(r.config.disable[G]["to"])){return true}}return false};v=function(){var I=new Date(r.currentYearView,r.currentMonthView,1).getDay(),M=s(),N=document.createDocumentFragment(),R=document.createElement("tr"),G,Q,O="",L="",K="",H,P;I-=r.l10n.firstDayOfWeek;I<0&&(I+=7);I>0&&(R.innerHTML+='<td colspan="'+I+'">&nbsp;</td>');G=I;g.innerHTML="";for(Q=1;Q<=M;Q++){if(G===7){N.appendChild(R);R=document.createElement("tr");G=0}P=new Date(r.currentYearView,r.currentMonthView,Q);O=(!r.selectedDateObj&&P.valueOf()===f.valueOf())?" today":"";L=r.selectedDateObj&&P.valueOf()===r.selectedDateObj.valueOf()?" selected":"";var F=r.config.disable&&m(P);var J=(r.config.minDate&&P<r.config.minDate)||(r.config.maxDate&&P>=r.config.maxDate);K=(F||J)?" disabled":" slot";R.innerHTML+='<td class="'+O+L+K+'"><span class="flatpickr-day">'+Q+"</span></td>";G++}N.appendChild(R);g.appendChild(N)};o=function(){B.innerHTML="<span>"+C(r.currentMonthView,false)+"</span> "+r.currentYearView};d=function(){var F=document.createElement("div"),G;G='<span class="flatpickr-prev-month">'+r.config.prevArrow+'</span><span class="flatpickr-next-month">'+r.config.nextArrow+"</span>";F.className="flatpickr-months";F.innerHTML=G;F.appendChild(B);o();e.appendChild(F)};y=function(){if(r.currentMonthView<0){r.currentYearView--;r.currentMonthView=11}if(r.currentMonthView>11){r.currentYearView++;r.currentMonthView=0}};c=function(F){if(!u.contains(F.target)){q()}};a=function(F){(F==="prev")?r.currentMonthView--:r.currentMonthView++;y();o();v()};x=function(I){I.preventDefault();var G=I.target;if(G.classList.contains("slot")||G.parentNode.classList.contains("slot")){var F=parseInt(G.childNodes[0].innerHTML||G.innerHTML,10),H;r.selectedDateObj=new Date(r.currentYearView,r.currentMonthView,F),H=r.selectedDateObj.getTime();if(r.config.altInput){document.querySelector(r.config.altInput).value=l(r.config.altFormat||r.config.dateFormat,H)}r.element.value=l(r.config.dateFormat,H);q();v();i()}};j=function(){d();E();v();p.appendChild(g);e.appendChild(p);u.appendChild(e)};D=function(){if(String(r.config.inline)!="true"){var F=(r.element.nodeName==="INPUT")?"focus":"click";r.element.addEventListener(F,k,false)}u.querySelector(".flatpickr-prev-month").addEventListener("click",function(){a("prev")});u.querySelector(".flatpickr-next-month").addEventListener("click",function(){a("next")});p.addEventListener("click",x)};k=function(){r.element.blur();document.addEventListener("click",c,false);u.classList.add("open")};q=function(){if(r.config.inline){return}document.removeEventListener("click",c,false);u.classList.remove("open");r.redraw()};i=function(){if("createEvent" in document){var F=document.createEvent("HTMLEvents");F.initEvent("change",false,true);b.dispatchEvent(F)}else{b.fireEvent("onchange")}};A=function(){var G,F;document.removeEventListener("click",c,false);r.element.removeEventListener("focus",k,false);r.element.removeEventListener("blur",q,false);r.element.removeEventListener("click",k,false);G=r.element.parentNode;G.removeChild(e);F=G.removeChild(r.element);G.parentNode.replaceChild(F,G)};t=function(F){r.currentYearView=F.getFullYear();r.currentMonthView=F.getMonth();r.currentDayView=F.getDate()};w=function(){var F,G;r.config={};r.element=b;r.destroy=A;f.setHours(0,0,0,0);for(F in r.defaultConfig){r.config[F]=n[F]||r.element.dataset[F.toLowerCase()]||r.defaultConfig[F]}typeof r.config.defaultDate==="string"&&(r.config.defaultDate=r.config.defaultDate.replace(new RegExp("-","g"),"/"));if(r.element.value||(!r.element.value&&r.config.defaultDate)){G=Date.parse(r.element.value||r.config.defaultDate);r.selectedDateObj=(!isNaN(G))?new Date(G):null}r.config.minDate&&(r.config.minDate=new Date(r.config.minDate),r.config.minDate.setHours(0,0,0,0));r.config.maxDate&&(r.config.maxDate=new Date(r.config.maxDate),r.config.maxDate.setHours(0,0,0,0));t(r.selectedDateObj||r.config.minDate||f);h();j();D()};r.redraw=function(){flatpickr(r.element,r.config)};r.set=function(F,G){F in r.config&&(r.config[F]=G,r.redraw())};w();return r};flatpickr.init.prototype={forEach:function(a,b){[].forEach.call(a,b)},l10n:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0},defaultConfig:{dateFormat:"Y-m-d",altFormat:null,altInput:null,defaultDate:null,minDate:null,maxDate:null,disable:null,shorthandCurrentMonth:false,inline:false,prevArrow:"&lt;",nextArrow:"&gt;"}};
