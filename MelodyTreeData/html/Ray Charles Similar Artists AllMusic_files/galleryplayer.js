!function(){"use strict";function r(e,i,c,l){return new(c=c||Promise)(function(n,t){function o(e){try{r(l.next(e))}catch(e){t(e)}}function a(e){try{r(l.throw(e))}catch(e){t(e)}}function r(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(o,a)}r((l=l.apply(e,i||[])).next())})}function i(n,o){var a,r,i,e,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,r&&(i=2&t[0]?r.return:t[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,t[1])).done)return i;switch(r=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,r=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){c.label=t[1];break}if(6===t[0]&&c.label<i[1]){c.label=i[1],i=t;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(t);break}i[2]&&c.ops.pop(),c.trys.pop();continue}t=o.call(n,c)}catch(e){t=[6,e],r=0}finally{a=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var c="https://ad.doubleclick.net/favicon.ico?ad=300x250&ad_box_=1&adnet=1&showad=1&size=250x250",l="https://ad-delivery.net/px.gif?ch=1&e="+Math.random();function s(a){return new Promise(function(t){var e=document.createElement("img");e.style.setProperty("display","none","important"),e.style.setProperty("width","1px","important"),e.style.setProperty("height","1px","important");var n=!1;function o(e){n||(n=!0,t(e))}e.addEventListener("error",function(e){o(!1)}),e.addEventListener("load",function(e){o(!0)}),e.src=a,(window.document.body||window.document.documentElement).appendChild(e)})}var u,a,d,b,m;u="5694350362148864",a="btloader.com",d="api.btloader.com",b="2.0.2-2-gfdc9054",m="";var o={"Totalprosports.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5691017048096768"},"allmusic.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"4795159637131264"},"bloody-disgusting.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5764550407225344"},"comicskingdom.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5650539997036544"},"complex.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5741666032943104"},"dmarge.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5692282062766080"},"firstwefeast.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5654364212428800"},"gameranx.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5104746449862656"},"hiphopdx.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5743444942127104"},"joblo.com":{"content_enabled":false,"mobile_content_enabled":false,"website_id":"5699588791992320"},"kicksonfire.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5732124616294400"},"lambgoat.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5958115783606272"},"metalinjection.net":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5686394878951424"},"metalsucks.net":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5638827579277312"},"solecollector.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5756156917055488"},"theprp.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5786154755424256"},"vladtv.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5674037901524992"},"whosampled.com":{"content_enabled":true,"mobile_content_enabled":false,"website_id":"5650457004343296"}},w={traceID:function(e,t,n){if(!e||"number"!=typeof t||"number"!=typeof n||t<=0||n<=0||n<t)throw new TypeError;for(var o=Math.floor(Math.random()*(n+1-t))+t,a="",r=0;r<o;r++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",8,10)},p={websiteID:void 0,contentEnabled:!1,mobileContentEnabled:!1};!function(){var e=function(){var e,t=window.location.hostname;try{if("disqusservice.com"===t){var n=function(e,t){e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("sourceUrl",window.location.href);t=(null!=(e=n.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i))&&2<e.length&&"string"==typeof e[2]&&0<e[2].length?e[2]:null)+"-disqus"}}catch(e){t=window.location.hostname}return 0===t.indexOf("www.")&&(t=t.replace("www.","")),t}(),t=!1;if(e&&e in o)p.websiteID=o[e].website_id,p.contentEnabled=o[e].content_enabled,p.mobileContentEnabled=o[e].mobile_content_enabled,t=!0;else for(var n in o)(-1<e.indexOf(n.toLowerCase())||-1<document.location.hostname.indexOf(n.toLowerCase()))&&(t=!0,p.websiteID=o[n].website_id,p.contentEnabled=o[n].content_enabled,p.mobileContentEnabled=o[n].mobile_content_enabled);t||((new Image).src="//"+d+"/l?event=unknownDomain&org="+u+"&domain="+e)}(),window.__bt_tag_d={orgID:u,domain:a,apiDomain:d,version:b,websitesData:o,siteInfo:p};var f,v="w",h="o",g="r",y="aa",_="tid",k="cv",E="rt";function x(n,a){return r(this,void 0,void 0,function(){var t;return i(this,function(e){switch(e.label){case 0:return(t={})[_]=w.traceID,t[v]=p.websiteID,t[h]=u,t[k]=b,t[g]=n,t.pageURL=window.location.href,n&&(t[E]=0,t[y]=a),[4,(o=function(e,t){void 0===t&&(t={}),(e=e||"/").startsWith("/")||(e="/"+e),t.upapi=!0;var n="",o="?";for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=t[a];n+=""+o+a+"="+encodeURIComponent(r),o="&"}return"https://"+d+e+n}("/pv",t),new Promise(function(e,t){var n=new window.XMLHttpRequest;n.open("GET",o,!0),n.onerror=function(){console.log("Error in get request for "+o),t()},n.onload=function(){e(n.responseText)},n.send()}))];case 1:return e.sent(),[2]}var o})})}function I(){var e="latest",t="BT_BUNDLE_VERSION",n="BT_DIGEST_VERSION",o=function(e,t,n){if(void 0===n&&(n="latest"),!e)return null;if(!t||"object"!=typeof t||Object.keys(t).length<=0)return null;var o=0,a=0,r=0,i={},c=t.global;if(null!=c&&c.bundles){Object.keys(c.bundles).sort().forEach(function(e){var t=c.bundles[e];i[e]={min:Math.trunc(100*(+o+0)),max:Math.trunc(100*(+o+0+t))},o+=t})}var l=t[0];if(null!=l&&l.bundles){var s=o,u=1-o;Object.keys(l.bundles).sort().forEach(function(e){var t=l.bundles[e];i[e]={min:Math.trunc(100*(s+u*a)),max:Math.trunc(100*(s+u*(a+t)))},a+=t})}var d=t[e];if(null!=d&&d.bundles){var b=o+(1-o)*a,m=(1-o)*(1-a);Object.keys(d.bundles).sort().forEach(function(e){var t=d.bundles[e];i[e]={min:Math.trunc(100*(b+m*r)),max:Math.trunc(100*(b+m*(r+t)))},r+=t})}if(Object.keys(i).length<=0)return null;if(0<(1-o)*(1-a)*(1-r)){var w=o+(1-o)*a+(1-o)*(1-a)*r;i[n]={min:Math.trunc(100*w),max:100}}return i}(p.websiteID,f,e);if(window.__bt_tag_d&&(window.__bt_tag_d.probabilities=o),o&&!(Object.keys(o).length<=0)){var a=f[p.websiteID]||f[0]||f.global;if(a){var r=a.digest;localStorage.getItem(n)!=r&&(localStorage.setItem(n,r),localStorage.removeItem(t));var i=localStorage.getItem(t);if(!i)i=function(e,t){if("number"!=typeof e||e<0||100<e)return null;if(!t||"object"!=typeof t)return null;for(var n=Object.keys(t),o=0;o<n.length;o++){var a=n[o],r=t[a];if(r.min<=e&&r.max>e)return a}return null}(Math.trunc(100*Math.random()),o)||e,localStorage.setItem(t,i);return i===e?void 0:i}}}function D(e){var t=e.eventName,n=e.payload||{bubbles:!1,cancelable:!1,detail:void 0};if(window.CustomEvent)try{var o=new window.CustomEvent(t,n);return void window.dispatchEvent(o)}catch(e){}var a=document.createEvent("CustomEvent");a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),window.dispatchEvent(a)}f={},window.__bt_intrnl={traceID:w.traceID};try{!function(){r(this,void 0,void 0,function(){var t,n,o;return i(this,function(e){switch(e.label){case 0:return window.__bt_already_invoked||!p.websiteID?[2]:(window.__bt_already_invoked=!0,[4,function(){return r(this,void 0,void 0,function(){return i(this,function(e){return[2,new Promise(function(n){var o="BT_AA_DETECTION",a=JSON.parse(localStorage.getItem(o));a&&a.ab&&a.acceptable&&n(a),Promise.all([function(t){return void 0===t&&(t=c),r(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,!e.sent()]}})})}(),function(t){return void 0===t&&(t=l),r(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,s(t)];case 1:return[2,e.sent()]}})})}()]).then(function(e){var t={ab:e[0],acceptable:e[1]};localStorage.setItem(o,JSON.stringify(t)),!(a&&a.ab&&a.acceptable)||t.ab&&t.acceptable||(window.__bt_intrnl.stopFlag=!0),n(t)})})]})})}()]);case 1:if(x((t=e.sent()).ab,t.acceptable),t.ab&&t.acceptable&&!window.disableUponit&&((0<=window.location.href.indexOf("bt_debug=true")||"true"==window.localStorage.getItem("bt_debug"))&&(p.contentEnabled="true"==localStorage.getItem("forceContent")||p.contentEnabled,p.mobileContentEnabled="true"==localStorage.getItem("forceMobileContent")||p.mobileContentEnabled),p.websiteID&&p.contentEnabled&&(!(n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))||n&&p.mobileContentEnabled)))return o=I(),function(e){if(!e)return;var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,(window.document.head||window.document.body||window.document.documentElement).appendChild(t)}(function(e){var t="https://"+a+"/recovery?w="+p.websiteID+"&upapi=true";e&&(t=t+"&b="+e);""!==m&&(t=t+"&"+m);return t}(o)),[2];try{D({eventName:"AcceptableAdsInit",payload:{detail:!1}}),D({eventName:"uponitInit",payload:{detail:!1}})}catch(e){}return[2]}})})}()}catch(e){}}();
