import t from"querystring";var e=function(){function e(){this.target="",this.title="",this.env="",this.tokenKey=""}return e.prototype.init=function(e){var o=void 0===e?{}:e,i=o.tokenKey,n=void 0===i?"qm_token":i,r=o.target,l=void 0===r?"_self":r,a=o.title,s=void 0===a?"登录":a,c=o.env,d=void 0===c?"development":c;this.env=d,this.target=l,this.title=s,this.tokenKey=n;var h=t.parse(location.search.slice(1)).qm_token;h?(localStorage.setItem(n,JSON.stringify(h)),history.pushState({},"",location.href.replace(/&?qm_token=[^&]*/,""))):localStorage.getItem(n)||this.login()},e.prototype.login=function(){!function(t,e){var o=document.createElement("a"),i="___false_click";o.setAttribute("href",t),o.setAttribute("target",e),o.setAttribute("id",i),document.getElementById(i)||document.body.appendChild(o),o.click()}(("production"===this.env?"https://admin.91xiangju.com/frontend-platform/login":"http://192.168.1.66/frontend-platform-dev/login")+"?"+("qm_from="+encodeURIComponent(location.href))+("&title="+encodeURIComponent(this.title)),this.target)},e.prototype.logout=function(){this.login()},e}(),o=new e;window&&(window.qmLogin=o);export default o;export{e as Login};
1
