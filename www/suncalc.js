(function(){var w=Math.PI,a=Math.sin,c=Math.cos,B=Math.tan,q=Math.asin,m=Math.atan2,t=Math.acos,F=w/180;var D=1000*60*60*24,g=2440588,I=2451545;function x(e){return e.valueOf()/D-0.5+g}function E(e){return new Date((e+0.5-g)*D)}function l(e){return x(e)-I}var C=F*23.4397;function i(K,e){return m(a(K)*c(C)-B(e)*a(C),c(K))}function r(K,e){return q(a(e)*c(C)+c(e)*a(C)*a(K))}function y(e,K,L){return m(a(e),c(e)*a(K)-B(L)*c(K))}function n(e,K,L){return q(a(K)*a(L)+c(K)*c(L)*c(e))}function z(K,e){return F*(280.16+360.9856235*K)-e}function k(e){if(e<0){e=0}return 0.0002967/Math.tan(e+0.00312536/(e+0.08901179))}function H(e){return F*(357.5291+0.98560028*e)}function v(L){var K=F*(1.9148*a(L)+0.02*a(2*L)+0.0003*a(3*L)),e=F*102.9372;return L+K+e+w}function A(K){var N=H(K),e=v(N);return{dec:r(e,0),ra:i(e,0)}}var j={};j.getPosition=function(K,O,e){var N=F*-e,M=F*O,P=l(K),Q=A(P),L=z(P,N)-Q.ra;return{azimuth:y(L,M,Q.dec),altitude:n(L,M,Q.dec)}};var p=j.times=[[-0.833,"sunrise","sunset"],[-0.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];j.addTime=function(K,L,e){p.push([K,L,e])};var f=0.0009;function u(K,e){return Math.round(K-f-e/(2*w))}function s(e,K,L){return f+(e+K)/(2*w)+L}function d(K,N,e){return I+K+0.0053*a(N)-0.0069*a(2*e)}function G(e,K,L){return t((a(e)-a(K)*a(L))/(c(K)*c(L)))}function o(O,K,P,N,e,Q,R){var T=G(O,P,N),S=s(T,K,e);return d(S,Q,R)}j.getTimes=function(ab,N,ac){var K=F*-ac,e=F*N,Z=l(ab),V=u(Z,K),U=s(0,K,V),P=H(U),Q=v(P),T=r(Q,0),aa=d(U,P,Q),X,Y,O,S,W;var R={solarNoon:E(aa),nadir:E(aa-0.5)};for(X=0,Y=p.length;X<Y;X+=1){O=p[X];S=o(O[0]*F,K,e,T,V,P,Q);W=aa-(S-aa);R[O[1]]=E(W);R[O[2]]=E(S)}return R};function J(Q){var K=F*(218.316+13.176396*Q),R=F*(134.963+13.064993*Q),P=F*(93.272+13.22935*Q),N=K+F*6.289*a(R),e=F*5.128*a(P),O=385001-20905*c(R);return{ra:i(N,e),dec:r(N,e),dist:O}}j.getMoonPosition=function(K,P,Q){var e=F*-Q,M=F*P,N=l(K),O=J(N),S=z(N,e)-O.ra,L=n(S,M,O.dec),R=m(a(S),B(M)*c(O.dec)-a(O.dec)*c(S));L=L+k(L);return{azimuth:y(S,M,O.dec),altitude:L,distance:O.dist,parallacticAngle:R}};j.getMoonIllumination=function(K){var Q=l(K),L=A(Q),e=J(Q),N=149598000,M=t(a(L.dec)*a(e.dec)+c(L.dec)*c(e.dec)*c(L.ra-e.ra)),O=m(N*a(M),e.dist-N*c(M)),P=m(c(L.dec)*a(L.ra-e.ra),a(L.dec)*c(e.dec)-c(L.dec)*a(e.dec)*c(L.ra-e.ra));return{fraction:(1+c(O))/2,phase:0.5+0.5*O*(P<0?-1:1)/Math.PI,angle:P}};function b(e,K){return new Date(e.valueOf()+K*D/24)}j.getMoonTimes=function(ab,L,ae,Q){var U=new Date(ab);if(Q){U.setUTCHours(0,0,0,0)}else{U.setHours(0,0,0,0)}var M=0.133*F,R=j.getMoonPosition(U,L,ae).altitude-M,P,O,K,V,ad,ac,W,e,aa,N,Z,Y,T;for(var X=1;X<=24;X+=2){P=j.getMoonPosition(b(U,X),L,ae).altitude-M;O=j.getMoonPosition(b(U,X+1),L,ae).altitude-M;ad=(R+O)/2-P;ac=(O-R)/2;W=-ac/(2*ad);e=(ad*W+ac)*W+P;aa=ac*ac-4*ad*P;N=0;if(aa>=0){T=Math.sqrt(aa)/(Math.abs(ad)*2);Z=W-T;Y=W+T;if(Math.abs(Z)<=1){N++}if(Math.abs(Y)<=1){N++}if(Z<-1){Z=Y}}if(N===1){if(R<0){K=X+Z}else{V=X+Z}}else{if(N===2){K=X+(e<0?Y:Z);V=X+(e<0?Z:Y)}}if(K&&V){break}R=O}var S={};if(K){S.rise=b(U,K)}if(V){S.set=b(U,V)}if(!K&&!V){S[e>0?"alwaysUp":"alwaysDown"]=true}return S};j.getGalaxyPosition=function(K,O,e){var N=F*-e,M=F*O,P=l(K),Q={dec:-28.9333333*F,ra:266.5*F},L=z(P,N)-Q.ra;h=n(L,M,Q.dec);h=h+k(h);return{azimuth:y(L,M,Q.dec),altitude:h}};j.getGalaxyTimes=function(ab,L,ae,Q){var U=new Date(ab);if(Q){U.setUTCHours(0,0,0,0)}else{U.setHours(0,0,0,0)}var M=0.133*F,R=j.getGalaxyPosition(U,L,ae).altitude-M,P,O,K,V,ad,ac,W,e,aa,N,Z,Y,T;for(var X=1;X<=24;X+=2){P=j.getGalaxyPosition(b(U,X),L,ae).altitude-M;O=j.getGalaxyPosition(b(U,X+1),L,ae).altitude-M;ad=(R+O)/2-P;ac=(O-R)/2;W=-ac/(2*ad);e=(ad*W+ac)*W+P;aa=ac*ac-4*ad*P;N=0;if(aa>=0){T=Math.sqrt(aa)/(Math.abs(ad)*2);Z=W-T;Y=W+T;if(Math.abs(Z)<=1){N++}if(Math.abs(Y)<=1){N++}if(Z<-1){Z=Y}}if(N===1){if(R<0){K=X+Z}else{V=X+Z}}else{if(N===2){K=X+(e<0?Y:Z);V=X+(e<0?Z:Y)}}if(K&&V){break}R=O}var S={};if(K&&V){S.mid=b(U,(K+V)/2)}if(K){S.rise=b(U,K)}if(V){S.set=b(U,V)}if(!K&&!V){S[e>0?"alwaysUp":"alwaysDown"]=true}return S};if(typeof define==="function"&&define.amd){define(j)}else{if(typeof module!=="undefined"){module.exports=j}else{window.SunCalc=j}}}());
