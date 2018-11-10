
	
	//入口函数
	$(function(){
		
		
		//列表内容的点击效果
		$(".list-l .content li").click(function(){
			//隐藏所有 显示当前点击的盒子
			 $(".list-r div").hide().eq($(this).index()).show();
			
			//不加粗所有盒子, 加粗当前盒子文字
			$(".list-l .content li").css("fontWeight",400).eq($(this).index()).css("fontWeight",700);
			
			//显示黄色线条
			$(".list-l .content li span").css("opacity",0);
			$(".list-l .content li").eq($(this).index()).children().last().css("opacity",1);
			
			 var index = $(this).index();
			 
			 //全部不加粗 2015 2016 ...
			 	$(".list-l .num span").css("font-weight",400);
			 if(index <2)
			 {	
			 	//加粗2015 以此类推
			 	$(".list-l .num span").eq(0).css("font-weight",700);
			 	
			 }else if(index <4)
			 {
			 	$(".list-l .num span").eq(1).css("font-weight",700);
			 }else if(index < 6)
			 {
			 	$(".list-l .num span").eq(2).css("font-weight",700);
			 }else if(index < 8)
			 {
			 	$(".list-l .num span").eq(3).css("font-weight",700);
			 }
			
		});
		
		
		//点击软件技术中的li标签
		$(".soft ul li").click(function(){
			
			if($(this).hasClass("so-current"))
			{
				//do nothing
			}else {
				//other remove class, this add class
				$(".soft ul li").removeClass("so-current");//隐藏其他元素的类 
				$(this).addClass("so-current");//当前元素添加
				$(".soft ul li span").css("opacity",0);
				$(this).children().css("opacity",1);
				$(".soft div").css("display","none");
				$(".soft div").eq($(this).index()).css("display","block");
			}			
		});
		
		
	 
		
	})
