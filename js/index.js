//顶部导航弹窗效果
{
    $(".sn-menu1").mouseenter(function(){
        $(".mytan").css("display","block");
    });
    $(".sn-menu1").mouseleave(function(){
        $(".mytan").css("display","none");
    })
    $(".sn-menu2").mouseenter(function(){
        $(".lovetan").css("display","block");
    });
    $(".sn-menu2").mouseleave(function(){
        $(".lovetan").css("display","none");
    })
}
//topbar效果
{
    $(window).scroll(function(){
        var st=$(window).scrollTop();
        if(st>600){
            $(".topbar").show();
        }
        else{
            $(".topbar").hide();
        }
        if(st>1200){
            $(".leftbar").show();
        }
        else{
            $(".leftbar").hide();
        }
    });
}
//分类效果
{
    var li=document.querySelectorAll(".banner_label");
    var inner=document.querySelectorAll(".banner_inner");
    let obj=inner[0]
    li.forEach(function(ele,index){
        ele.onmouseover=function(){
            // for(var i=0;i<inner.length;i++) {
            // 	inner[i].style.display="none";
            // }
            obj.style.display="none";
            inner[index].style.display="block";
            obj=inner[index];
        }
        ele.onmouseleave=function(){
            inner[index].style.display="none";
        }
    })
}
//返回顶部
{
    $(".totop").click(function(){
        $("html,body").animate({scrollTop:0});
    });
}
//右侧弹出效果
{
    $(".mui-mbar-tab li").each(function(ele){
        $(this).mouseenter(function(){
                $(".buycar_tan").eq(ele).animate({right:'35px'},100);
                $(".buycar_tan").eq(ele).show();
        });
        $(this).mouseleave(function(){
            $(".buycar_tan").eq(ele).animate({right:'70px'});
                $(".buycar_tan").hide();
        });
    })
}
//楼层跳转效果
{
    let item=$(".supermarket");
    let tip=$(".fpLift a");
    let arr=["#EAA8DC","orange","#A9EAE4","green","blue","pink","#EA5F8D","#0AA6E8"]
    $(tip).click(function(){
        let index=$(tip).index(this);
        let ot=$(item).eq(index).offset().top-70;
        $("html").animate({scrollTop:ot},100);
    })
    $(window).scroll(function(){
        let st=$(window).scrollTop();
        $(item).each(function(index,ele){
            if(st>=$(this).offset().top-90){
                $(tip).css("background","rgba(0,0,0,0.8)").eq(index).css("background",arr[index]);
            }
        })
    })
}
//选项卡效果
{
    let span=$(".floor-tab-head span");
    let detail=$(".floor-tab-detail");
    $(span).mouseenter(function(){
        let index=$(span).index(this);
        $(span).removeClass("active").eq(index).addClass("active");
        $(detail).css("display","none").eq(index).css("display","block");
    })
}
//轮播图效果
{
    let imgs=document.querySelectorAll(".banner_img");
    let pagers=document.querySelectorAll(".slider-nav li");
    let banner=document.querySelector(".banner");
    //通过点击实现轮播
    pagers.forEach(function(ele,index){
        ele.onmouseover=function(){
            // 删除、添加类名
            for(let i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    // 自动执行代码，让图片自动播放
    var n=0;
    let t=setInterval(move,2000);
    function move(){
        n++;
        if(n==imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        pagers[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    //鼠标移入轮播停止
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    };
}