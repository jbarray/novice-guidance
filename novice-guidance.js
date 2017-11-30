//获得数据
var $arr=$('.guidance-img');
var rel=document.cookie.substring(5);
//如果cookie不存在,执行下列操作
if(rel!=='www.open.com.cn'){
    //父元素开始显示
    $('#guidance').css('display','block');
    $arr.css('display','none');
    //子元素不断循环
     $arr.eq(0).css('display','block');
     $arr.click(function(){
         var current=$(this);
         current.hide();
         current.next().show();
    });
    // language=JQuery-CSS
    //添加cookie
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+30);
    document.cookie="name=www.open.com.cn;expires="+oDate;
}
//最后一个引导图结束后,整个引导内容结束
$('.guidance-img:last').click(function(){
    $('#guidance').hide();
});