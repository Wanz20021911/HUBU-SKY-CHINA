/*tab选项卡*/
$(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
    });
    $(".step01").click( function() {
    $(".discovery").addClass("active").siblings().removeClass("active");
    });
    $(".step02").click( function() {
    $(".strategy").addClass("active").siblings().removeClass("active");
    });
    $(".step03").click( function() {
    $(".creative").addClass("active").siblings().removeClass("active");
    });
    $(".step04").click( function() {
    $(".production").addClass("active").siblings().removeClass("active");
    });
    $(".step05").click( function() {
    $(".analysis").addClass("active").siblings().removeClass("active");
    });
/* 时间轴 */
(function($) {
$.fn.timeline = function() {
    var selectors = {
    id: $(this),
    item: $(this).find(".timeline-item"),
    activeClass: "timeline-item--active",
    // img: ".timeline__img",
    };

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
    var max, min;
    var pos = $(this).scrollTop();
    selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
        // selectors.item.removeClass(selectors.activeClass);
        selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
        
        $(this).addClass(selectors.activeClass);//将当前项添加为活动项。
        }
    });
    });
};
})(jQuery);

$("#timeline-2").timeline();

var allmodals = document.getElementsByClassName('modal');
function closeModal() {  
  for (var i = 0; i < allmodals.length; i++){
    var modal = document.getElementsByClassName('modal')[i]; // 获取第一个模态窗口元素  
    modal.style.display = 'none'; // 隐藏模态窗口  
  }
}


var eng_img1_1 = document.getElementById("eng-img1-1");
var eng_img1_2 = document.getElementById("eng-img1-2");
var eng_img1_3 = document.getElementById("eng-img1-3");
var eng_img1_4 = document.getElementById("eng-img1-4");

var eng_modal1_1 = document.getElementById("eng-modal1-1");
var eng_modal1_2 = document.getElementById("eng-modal1-2");
var eng_modal1_3 = document.getElementById("eng-modal1-3");
var eng_modal1_4 = document.getElementById("eng-modal1-4");


eng_img1_1.addEventListener('click',function(){
    eng_modal1_1.style.display = 'block';
});
eng_img1_2.addEventListener('click',function(){
    eng_modal1_2.style.display = 'block';
});
eng_img1_3.addEventListener('click',function(){
    eng_modal1_3.style.display = 'block';
});
eng_img1_4.addEventListener('click',function(){
    eng_modal1_4.style.display = 'block';
});


var eng_img2_1 = document.getElementById("eng-img2-1");
var eng_img2_2 = document.getElementById("eng-img2-2");
var eng_img2_3 = document.getElementById("eng-img2-3");
var eng_img2_4 = document.getElementById("eng-img2-4");
var eng_img2_5 = document.getElementById("eng-img2-5");
var eng_img2_6 = document.getElementById("eng-img2-6");

var eng_modal2_1 = document.getElementById("eng-modal2-1");
var eng_modal2_2 = document.getElementById("eng-modal2-2");
var eng_modal2_3 = document.getElementById("eng-modal2-3");
var eng_modal2_4 = document.getElementById("eng-modal2-4");
var eng_modal2_5 = document.getElementById("eng-modal2-5");
var eng_modal2_6 = document.getElementById("eng-modal2-6");


eng_img2_1.addEventListener('click',function(){
    eng_modal2_1.style.display = 'block';
});
eng_img2_2.addEventListener('click',function(){
    eng_modal2_2.style.display = 'block';
});
eng_img2_3.addEventListener('click',function(){
    eng_modal2_3.style.display = 'block';
});
eng_img2_4.addEventListener('click',function(){
    eng_modal2_4.style.display = 'block';
});
eng_img2_5.addEventListener('click',function(){
    eng_modal2_5.style.display = 'block';
});
eng_img2_6.addEventListener('click',function(){
    eng_modal2_6.style.display = 'block';
});

var eng_img3_1 = document.getElementById("eng-img3-1");
var eng_img3_2 = document.getElementById("eng-img3-2");
var eng_img3_3 = document.getElementById("eng-img3-3");
var eng_img3_4 = document.getElementById("eng-img3-4");

var eng_modal3_1 = document.getElementById("eng-modal3-1");
var eng_modal3_2 = document.getElementById("eng-modal3-2");
var eng_modal3_3 = document.getElementById("eng-modal3-3");
var eng_modal3_4 = document.getElementById("eng-modal3-4");


eng_img3_1.addEventListener('click',function(){
    eng_modal3_1.style.display = 'block';
});
eng_img3_2.addEventListener('click',function(){
    eng_modal3_2.style.display = 'block';
});
eng_img3_3.addEventListener('click',function(){
    eng_modal3_3.style.display = 'block';
});
eng_img3_4.addEventListener('click',function(){
    eng_modal3_4.style.display = 'block';
});

var eng_img4_1 = document.getElementById("eng-img4-1");
var eng_modal4_1 = document.getElementById("eng-modal4-1");
eng_img4_1.addEventListener('click',function(){
    eng_modal4_1.style.display = 'block';
});

var eng_img5_1 = document.getElementById("eng-img5-1");
var eng_img5_2 = document.getElementById("eng-img5-2");
var eng_img5_3 = document.getElementById("eng-img5-3");
var eng_img5_4 = document.getElementById("eng-img5-4");
var eng_img5_5 = document.getElementById("eng-img5-5");
var eng_img5_6 = document.getElementById("eng-img5-6");

var eng_modal5_1 = document.getElementById("eng-modal5-1");
var eng_modal5_2 = document.getElementById("eng-modal5-2");
var eng_modal5_3 = document.getElementById("eng-modal5-3");
var eng_modal5_4 = document.getElementById("eng-modal5-4");
var eng_modal5_5 = document.getElementById("eng-modal5-5");
var eng_modal5_6 = document.getElementById("eng-modal5-6");

eng_img5_1.addEventListener('click',function(){
    eng_modal5_1.style.display = 'block';
});
eng_img5_5.addEventListener('click',function(){
    eng_modal5_5.style.display = 'block';
});
eng_img5_3.addEventListener('click',function(){
    eng_modal5_3.style.display = 'block';
});
eng_img5_4.addEventListener('click',function(){
    eng_modal5_4.style.display = 'block';
});
eng_img5_5.addEventListener('click',function(){
    eng_modal5_5.style.display = 'block';
});
eng_img5_6.addEventListener('click',function(){
    eng_modal5_6.style.display = 'block';
});