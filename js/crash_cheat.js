var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '💙不要走，再看看💙';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '发现宝藏~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });