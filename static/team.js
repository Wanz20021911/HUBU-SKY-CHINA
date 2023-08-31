
(function($) {
$.fn.timeline = function() {
    //定义了一个对象 "selectors"，它包含了用于选择元素的jQuery 选择器。
    var selectors = {
    id: $(this),//用于选择时间线的容器元素。
    item: $(this).find(".timeline-item"),//用于选择时间线中的每个项。
    activeClass: "timeline-item--active",//类名，用于表示当前活动项的样式。
    img: ".timeline__img",//选择器，用于选择时间项中的图像元素 

    };

    var itemLength = selectors.item.length;
    //创建一个窗口滚动事件处理程序。当用户滚动窗口时，执行以下操作：
    $(window).scroll(function() {
    var max, min;
    var pos = $(this).scrollTop();//获取窗口的滚动位置，使用 "scrollTop" 方法获取。
    selectors.item.each(function(i) {//遍历每个时间线项，计算每个项的位置范围

        //获取当前项的顶部位置和高度。
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        //将当前项存储在 "that" 变量中。
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
        selectors.item.removeClass(selectors.activeClass);//移除所有活动项的样式。
        selectors.item.last().addClass(selectors.activeClass);//将最后一个时间线项添加为活动项。

        //否则，如果滚动位置在当前项的可见范围内（顶部和底部距离小于项的高度），则更新时间线活动项和背景图像：
        } else if (pos <= max - 40 && pos >= min) {
        selectors.item.removeClass(selectors.activeClass);//移除所有活动项的样式。
        $(this).addClass(selectors.activeClass);//将当前项添加为活动项。
        }
    });
    });
};
})(jQuery);

$("#timeline-1").timeline();

var img1 = document.getElementById("img1");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");

img1.addEventListener('click',function(){
modal1.style.display = 'block';
});
img2.addEventListener('click',function(){
modal2.style.display = 'block';
});
img3.addEventListener('click',function(){
modal3.style.display = 'block';
});
img4.addEventListener('click',function(){
modal4.style.display = 'block';
});
img5.addEventListener('click',function(){
modal5.style.display = 'block';
})
img6.addEventListener('click',function(){
modal6.style.display = 'block';
})

var allmodals = document.getElementsByClassName('modal');
function closeModal() {  
for (var i = 0; i < allmodals.length; i++){
    var modal = document.getElementsByClassName('modal')[i]; // 获取第一个模态窗口元素  
    modal.style.display = 'none'; // 隐藏模态窗口  
}
}
