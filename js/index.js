//顶部固定导航栏
$(function () {
    window.onscroll = function () {
        if ($('body').scrollTop() < 580) {
            $('#topnav').addClass('fixeds');
            $('#navbar').removeClass('fixeds');
            if($('body').scrollTop() < 50){
                $('#main').css('margin-top','50px');
            }else{
               $('#main').css('margin-top','0px'); 
            }
        } else {
            $('#topnav').removeClass('fixeds');
            $('#navbar').addClass('fixeds');
        }
        //通过计算当前页，选择第二个导航栏哪个被选中
        if(($('#twobg').offset().top<$('body').scrollTop()+10)&&($('#all').offset().top>$('body').scrollTop()+10)){
            $('#list li a').removeClass('comcolor');
            $('#list li').eq(0).find('a').addClass('comcolor');
        }
        else if(($('#all').offset().top<$('body').scrollTop()+10)&&($('#car-bg5').offset().top>$('body').scrollTop()+10)){
            $('#list li a').removeClass('comcolor');
            $('#list li').eq(1).find('a').addClass('comcolor');
        }
        else if(($('#car-bg5').offset().top<$('body').scrollTop()+10)&&($('#nextnew').offset().top>$('body').scrollTop()+10)){
            $('#list li a').removeClass('comcolor');
            $('#list li').eq(2).find('a').addClass('comcolor');
        }
        else if(($('#nextnew').offset().top<$('body').scrollTop()+10)&&($('#page-tag').offset().top>$('body').scrollTop()+10)){
            $('#list li a').removeClass('comcolor');
            $('#list li').eq(3).find('a').addClass('comcolor');
        }
        else if($('#page-tag').offset().top<$('body').scrollTop()+10){
            $('#list li a').removeClass('comcolor');
            $('#list li').eq(4).find('a').addClass('comcolor');
        }
        // 
    }
})

//<!--中间悬浮视窗-->
$(function () {
    $(".btn-one").mouseenter(function() {
        $(this).children(1).show().parent().siblings().children("img").hide();
        $(this).find("img").animate({"left": "60px"}, 500, "linear");
    })
    $(".btn-one").mouseleave(function () {
        //$(".btn-one>img").hide();
        $(this).find("img").animate({"left": "40px"}, 50, "linear", function () {
            $(this).hide();
        })
    })
})


//下面video部分
$(function () {
    $(".video>.play").mouseenter(function () {
        $(this).animate({"height": "60px"}, 800, "linear")
        $(".video> .pic").animate({"width": "200px", "height": "62px"}, 800, "linear");
    })
    $(".video").mouseleave(function () {
        $(".play").animate({"height": "85px"}, 800, "linear");
        $(".video> .pic").animate({"width": "198px", "height": "60px"}, 800, "linear");
    })
})

//微博部分
$(function () {
    $(".weibo>img").mouseenter(function () {
        $(this).css("opacity", "0.4").siblings().css("opcity", "1");
    })
    $(".weibo>img").mouseleave(function () {
        $("img").css("opacity", "1");
    })
})

//微信部分
$(function () {
    $(".cont-one").mouseenter(function () {
        $(".pic-one").show();
        $(".pic-one").css("z-index", "1000");

    })
    $(".text").mouseleave(function () {
        $(".pic-one").hide();
    })
    $(".cont-two").mouseenter(function () {
        $(".pic-two").show();
        $(".pic-two").css("z-index", "1000")
    })
    $(".text").mouseleave(function () {
        $(".pic-two").hide();
    })
})
//<!--右侧的固定栏-->
$(function () {
    $(".right-fix>ul>li").mouseenter(function () {
        $(this).children(0).slideDown(400, function () {
            $(this).parents().siblings().children("span").hide();
        });
    })
    $(".right-fix>ul>li").mouseleave(function () {
        $(this).find("span").hide();
    })
})


//第二个背景图片
//汽车变色
$(function(){

    //1.入口函数
    $(document).ready(function(){
//            2.移入某个li的时候 显示对应center的图片
        $("#colorc>div").mouseenter(function(){
            var index=$(this).index();
            $("#colorcar>img").eq(index).show().siblings().hide();
            $(this).siblings().children("div").hide();
            $(this).children("div").show(400);

        })
        // $("#colorc>div").mouseleave(function(){
        //     $("#colorcar>img").eq(0).show().siblings().hide();
        // })

        $("#lode>img").mouseenter(function(){
            $(".centerlode").animate({"width":"120px","height":"30px"},400,function(){
                //$(".leftlode").animate({"width":"50px","height":"10px"},400)
            })
        })
        $("#lode").mouseleave(function(){
            $(".centerlode").animate({"width":"103px","height":"21px"},400,function(){
                //$(".leftlode").animate({"width":"103px","height":"21px"},400)
            })
        })
    })

//关闭开启天窗部分
    $(function(){
        $(".openwindow>span").click(function(){
                $(".openwindow").hide(800,function(){
                    $(".openwindow-close").show(800,function(){
                        $(".openwindow-close>span").show();
                        $(".openwindow-close>span").animate({"height":"35px"});
                        $(".bgcar>.close").show();
                    });
                });
        })
        $(".openwindow-close>span").click(function(){
            $(".openwindow-close").hide(800,function(){
                $(".openwindow").show(800,function(){
                    $(".openwindow>span").show();
                    $(".openwindow>span").animate({"height":"35px"});
                    $(".bgcar>.close").hide();
                    $(".bgcar>.clo").show();
                })
            })
        })
    })

    //车展 收起部分
    $(function(){
        $(".openwindow>span").click(function(){
            $(".openwindow").hide(800,function(){
                $(".openwindow-close").show(800,function(){
                    $(".openwindow-close>span").show();
                    $(".openwindow-close>span").animate({"height":"35px"});
                    $(".chezhan>.clo").hide();
                    $(".chezhan>.close").show();
                });
            });
        })
        $(".openwindow-close>span").click(function(){
            $(".openwindow-close").hide(800,function(){
                $(".openwindow").show(800,function(){
                    $(".openwindow>span").show();
                    $(".openwindow>span").animate({"height":"35px"});
                    $(".chezhan>.close").hide();
                    $(".chezhan>.clo").show();
                })
            })
        })
    })


//车展轮播图部分
    var all=document.getElementById("all");
    var allboth=all.children[0]
    var screen=allboth.children[0];
    var divs=screen.children;
    var ol=all.children[1];

    //获取图片宽
    var imgWid = allboth.offsetWidth;
    //第一步是点击下部的小方块

    for (var i = 0; i < divs.length; i++) {
      var li=document.createElement("li");
        ol.appendChild(li);
    }
    var lisol = ol.children;
    lisol[0].className = "cc";

    for (var i = 0; i < lisol.length; i++) {
        lisol[i].index = i;
        lisol[i].onclick=function(){
            for (var i = 0; i < lisol.length; i++) {
                lisol[i].className = "";
            }
            this.className="cc";

            //让screen进行滚动
            //需要借助当前li的索引设置移动位置
            var target = -this.index * imgWid;
            animate(screen, target);
        }

    }

    function animate(tag, target) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {
            var leader = tag.offsetLeft;
            //step = ( target - leader ) / 10
            var step = (target - leader) / 10;
            //处理一下step的值，对step进行向上取整
            step = leader > target ? Math.floor(step) : Math.ceil(step);
            //leader = leader +  step
            leader = leader + step;

            //设置给left值
            tag.style.left = leader + "px";
            if (leader == target) {
                clearInterval(tag.timer);
            }
        }, 17);
    }
})


//第四个页面
$(function(){
    $(".neirong span").mouseenter(function(){
        $(this).css("background","#9c6b51");
        var idx = $(this).index();
        $(".car-light .car-bg").eq(idx).stop(true,true).fadeIn().siblings().fadeOut();
        $(".car-light .car-bg").eq(idx).addClass("select")
                .siblings().removeClass("select");
    });
    $(".neirong span").mouseleave(function(){
        $(this).css("background","#18130E");
    });
})

//第五个页面
$(function(){
    $(".cti-contrast-model").mouseenter(function(){
        $(this).find("p").css("color","#fff");
    })
    $(".cti-contrast-model").mouseleave(function(){
        $(this).find("p").css("color","");
    })
})

$(function(){
    $("#arrright").click(function(){
        $(".swiper-slide").hide();
        $(".swiner-slider").show();
        })
    $("#arrleft").click(function(){
        $(".swiner-slider").hide();
        $(".swiper-slide").show();
    })
})

//第六个页面
$(function(){
    $(".new-count").mouseenter(function(){
        // $(this).find(".cont").hide(500,function(){
        //     $(".topone").show();
        // });
        $(this).find(".topone").fadeIn();
    })
    $(".new-count").mouseleave(function(){
        // $(this).find(".topone").hide(500,function(){
        //     $(".cont").show();
        // });
        $(this).find(".topone").fadeOut();
    })
})


