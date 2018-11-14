
	
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
		
		
		//播放视频开始
		$(".play").click(function(){
			
			//显示播放区域
			$(".playarea").fadeIn("slow");
			//开始播放
			$(".playarea video").get(0).play();
 			
 			//禁止浏览器滚动
 			$("body").css("overflow","hidden");
 			
 			window.scrollTo(0,0);
			 
	 
		});
		
		$(".playarea").mouseenter(function(){
			
			$(".playarea i").fadeIn(400);
			
		})
		
		$(".playarea").mouseleave(function(){
			
			$(".playarea i").fadeOut(400);
			
		})
		
		$(".playarea i").mouseenter(function(){
			
			$(this).css("opacity",1);
			
		})
		
		$(".playarea i").mouseleave(function(){
			
			$(this).css("opacity",.6);
		})
		
		$(".playarea i").click(function(){
			
			$(".playarea").fadeOut("slow");
			$(".playarea video").get(0).pause();
			$(".playarea video").get(0)["currentTime"] = 0;
			//设置浏览器滚动
 			$("body").css("overflow","auto");
		})
		
		//监听播放完毕事件
		$(".playarea video").get(0).onended =  function(){
			
			$(".playarea").fadeOut("fast");
			$(".playarea video").get(0).pause();
			$(".playarea video").get(0)["currentTime"] = 0;
			//设置浏览器滚动
 			$("body").css("overflow","auto");
		}
		
			//监听全屏
			function checkFull(){
				var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
				if(isFull === undefined) isFull = false;
				return isFull;
				}
		
				$(window).resize(function () {
					if (!checkFull()) {
						console.log("退出全屏");
						$(".playarea video").css("object-fit","fill");
					}else {
						$(".playarea video").css("object-fit","none");
					}
					
				});

 			//播放视频结束
 			
 			
 			//监听移动端导航的点击事件 点击菜单
 			$(".title .show").click(function(){
 				 
 				// 1 隐藏当前图标，2 展示XX图标 3 展示导航栏
 				$(this).hide(600);
 				
 				$(".title .btn").show(600);
 				
 				$(".navi-m .menu").slideDown("fast");
 				
 			});
 
 			//监听移动端导航的点击事件 点击XX
 			function slideUp(){
 				 
 				// 1 隐藏当前图标，2 展示XX图标 3 展示导航栏
 				$(".navi-m .title .btn").hide(600);
 				
 				$(".title .show").show(600);
 				
 				$(".navi-m .menu").slideUp("fast");
 				
 			};
 			
 			$(".title .btn").click(slideUp);
 
 			
 			$(window).scroll(function(){
 				
// 				if($(window).scroll().offset().top < 10)return;
 				//判断菜单是否关闭
 				if($(".navi-m .menu").css("display") === "block")
 				{
 					//隐藏导航
 					slideUp();
 				}
 				
 			});
 
 
 
 
		
	})
