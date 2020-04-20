(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

(function(e){function t(e){var t=location.href,n=t.split("").reverse(),r=e.split(""),i=[];for(var s=0,o=16;s<o;s++)i.push(r[s]+(n[s]||""));return i.join("")}var n=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.so\.com)/gi,r=e.location.href;if(r&&!n.test(r)&&window.navigator.appName){var i="//s.360.cn/so/zz.gif",o="d182b3f28525f2db83acfaaf6e696dba",u=t(o),a=new Image;r&&(i+="?url="+encodeURIComponent(r)),o&&(i+="&sid="+o),u&&(i+="&token="+u),o&&(a.src=i)}})(window);