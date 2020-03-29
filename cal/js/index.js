$(document).ready(function(){
	

	$('.inner-city ul li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});

	$('.share-close').click(function(){
		$(this).parents('.mark').hide();
		// $('.mark').hide();
	});

	$('.find-fk ul li.nx6 a').click(function(){
		$('.mark').show();
	});

	$('.topchabar ul li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});

	$('.tell-set ul li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});

	$('.djqie ul li').click(function(){
		
		var nx1=$(this).index();
		var nx2=$('.inrsqievb').find('.randqie').index();
		nx2=nx1;
		$('.djqie ul li').eq(nx1).addClass('cur').siblings().removeClass('cur');
		$('.inrsqievb').find('.randqie').eq(nx2).addClass('cur').siblings().removeClass('cur');
	});

	$('.gdmore').click(function(){
		$(this).parent('.cityboxmr').find('.slide_up').toggle();
		// $(this).parents('.whifor').find('.zhantogl').toggle();
 		$(this).html()=="更多" ? $(this).html("收起") : $(this).html("更多");
	});

	$('.transurp ul li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});

	$('.findetop ul li.cur3').click(function(){
		$('body,html').stop().animate({
			scrollTop:0
		}, 300)
	});

	$(document).ready(function(){
            $(".select_box").click(function(event){   
                event.stopPropagation();
                $(this).find(".option").toggle();
                $(this).parent().siblings().find(".option").hide();
            });
            $(document).click(function(event){
                var eo=$(event.target);
                if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
                $('.option').hide();                                      
            });
            /*赋值给文本框*/
            $(".option a").click(function(){
                var value=$(this).text();
                $(this).parent().siblings(".select_txt").text(value);
                $("#select_value").val(value)
             })
        })

	$('.backspan span').click(function(){

		var lenx=$(this).index();

		if (lenx==0) {
			$('.findsetr').css({
				background: '#88abda'
			});
		}
		if (lenx==1) {
			$('.findsetr').css({
				background: '#acd598'
			});
		}
		if (lenx==2) {
			$('.findsetr').css({
				background: '#aa89bd'
			});
		}
	});

	$('.zhankbox').click(function(){
		$(this).toggleClass('cur');
		$(this).parents('.whifor').find('.zhantogl').toggle();
 		$(this).find('a').html()=="展开" ? $(".zhankbox a").html("收起") : $(".zhankbox a").html("展开");
  	});

  	$('.cityboxmr ul li').click(function(){
  		$(this).parents('.cityboxmr').find('li').removeClass('cur');
  		$(this).addClass('cur');
  	});

	
	// js改变字体大小
	$(function(){ 
		$(".fonst-up a").click(function(){ 
		var thisEle = $("#para p").css("font-size"); 
		var textFontSize = parseFloat(thisEle , 10); 
		var unit = thisEle.slice(-2); //获取单位 
		var cName = $(this).attr("class"); 
		if(cName == "bigger"){ 
		if( textFontSize <= 22 ){ 
		textFontSize += 2; 
		} 
		}else if(cName == "smaller"){ 
		if( textFontSize >= 12 ){ 
		textFontSize -= 2; 
		} 
		} 
		$("#para p").css("font-size", textFontSize + unit); 
		}); 
	}); 


	$(".shux").click(function(){
        refresh();
        $(this).addClass('cur');
    });

	function refresh(){
    window.location.reload();//刷新当前页面.
     
	    //或者下方刷新方法
	    //parent.location.reload()刷新父亲对象（用于框架）--需在iframe框架内使用
	    // opener.location.reload()刷新父窗口对象（用于单开窗口
	  //top.location.reload()刷新最顶端对象（用于多开窗口）
	}

	$('.findetop ul li').hover(function(){
		$(this).find('.divwxin').animate({left: '-100px'}, 300)
	},function(){
		$(this).find('.divwxin').animate({left: '0'}, 300)
	});

	$('.findetop ul li.cur2').click(function(){
		$('.flktanc').show();
	});

	$('.colse_but').click(function(){
		$('.flktanc').hide();
	});


});