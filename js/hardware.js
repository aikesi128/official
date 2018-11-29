

$(document).ready(function(){
	
	
	//li元素点击事件
	$(".list li").click(function(){
		
		//切换内部元素
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
		
		//修改图片
		$(this).parent().children().eq(0).find("img").attr('src','img/product/list_icon/obd icon.png');
		$(this).parent().children().eq(1).find("img").attr('src','img/product/list_icon/terminal icon.png');
		$(this).parent().children().eq(2).find("img").attr('src','img/product/list_icon/cam icon.png');
		$(this).parent().children().eq(3).find("img").attr('src','img/product/list_icon/sensor icon.png');
		
		//显示选中的图片  隐藏其他盒子 显示当前盒子
		var className = ".page" + ($(this).index() + 1);
		
		$(className).siblings().hide();
		
		$(className).show();
		
		//切换选中的图片
		switch($(this).index())
		{
			case 0:
				$(this).find("img").attr("src","img/product/list_icon/obd icon F.png");
				break;
			
			case 1:
				$(this).find("img").attr("src","img/product/list_icon/terminal icon F.png");
				break;
				
			case 2:
				$(this).find("img").attr("src","img/product/list_icon/cam icon F.png");
				break;
			
			case 3:
				$(this).find("img").attr("src","img/product/list_icon/sensor icon F.png");
				break;
			
		}
		
		
		
	});
	
	
	//播放视频  
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
