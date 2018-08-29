/*
* @Author: admin
* @Date:   2018-08-29 09:18:57
* @Last Modified by:   admin
* @Last Modified time: 2018-08-29 10:51:29
*/
$.fn.preload = function(options) {
    var opts = $.extend({}, $.fn.preload.defaults, options)
        , o = $.meta ? $.extend({}, opts, this.data()) : opts
        , c = this.length
        , l = 0;
    return this.each(function() {
        var dom = $(this);
        $('<img/>').load(function(i){
            ++l;
            if(l == c) o.onComplete();
        }).attr('src',dom.attr('src')); 
    });
};
$.fn.preload.defaults = {
    onComplete  : function(){return false;}
};
$(document).ready(function() {
    var navOffset = 1;
    $(window).scroll(function(){
        var scrollPos=$(window).scrollTop();
        if(scrollPos >=navOffset){
            $("body").addClass("shrink");
        }else{
            $("body").removeClass("shrink");
        }
    });
});
$(function(){
    $(".glyphicon-search").click(function(){
        $(".search-form").toggleClass("cur");
    });
})
//index.html动画效果
$('#carousel-example-generic .item img').preload({
			onComplete: function () {
				setTimeout(function () {
					$('.preloader_black').fadeOut(800, function () {
						$('#carousel-example-generic').addClass('cur');
					});
					$('body').removeClass('no-wheel');
				}, 1000)
			}
		});
		$("#navbar > ul > li:nth-child(1)").addClass("active");
//man.html动画效果
$('#pages>a').eq(0).html("共有" + $('#pages>a').eq(0).text() + "记录").css({"width": "auto", "border": "none","display":"none"});
$('#pages>a').eq(1).html("&laquo;");
$('#pages>a').last().html("&raquo;");