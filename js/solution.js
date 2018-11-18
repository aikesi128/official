
	//入口函数
	$(document).ready(function(){
	 
	 	var selectIndex = 0;
		//点击左侧列表项
		$(".solution .list ul li").click(function(){
			
			selectIndex = $(this).index();
			//显示对应的盒子
			$(".solution .content div").css("display","none");
			$(".solution .content div").eq($(this).index()).css("display","block");
			
			if($(document.body).width() < 768)
			{
				
				$(this).siblings().find("i").removeClass("current");
				$(this).find("i").addClass("current");
				return;
					//修改样式 li 宽度144
				$(this).siblings().find("i").animate({
					"fontSize":"8px",
					"fontWeight":400,
				 
				},100);
			
				$(this).siblings().find("i").css("color","#989695");
				
				$(this).siblings().find("span").hide();
	//			$(this).find("span").show();
				var ele = $(this);
				$(this).find("i").animate({
					"fontSize":"11px",
					"fontWeight":700,
	 			},100,function(){
	 				
	 				 //设置span的left值
	 				var liW = ele.find("i")[0].offsetWidth;
	 				var left = (150-liW)/2;
	 				ele.find("span").css("left",left);
	 				ele.find("span").show();
	 			});
  				
				$(this).find("i").css("color","#000");
				//判断是否需要动画
					// 1 计算当前元素居中的话,marginleft是否大于20 是否小于边界值 计算之前元素的总和
					var sum = 190 * $(this).index();
				
					var screenW = $(document.body).width();
					//当前元素的宽度
					var width = this.offsetWidth;
					//屏幕左侧留出的距离
					var left = (screenW - width) / 2;
					//原本有marginleft为20像素 屏幕的一半减去之前元素宽度和 - 20
					var mleft = left - 0 - sum;
					
					//计算临界值
					var linjieValue = 190 * 8 - screenW - 60;
					
					// margin-left 不能小于临界值 不能大于20px
		 			if(mleft > 20)
		 			{
		 				mleft = 20;
		 			}
		 			
		 			if(mleft < -linjieValue)
		 			{
		 				mleft = -linjieValue - 20;
		 			}
		 			
		 			$(this).parent().animate({
		 				"marginLeft":mleft
		 			},"normal");
				
 				return;
			}
			 
			//修改样式
			$(this).siblings().find("i").animate({
				"fontSize":"16px",
				"fontWeight":400,
			 
				"height":"16px",
				"lineHeight":"16px",
			},100);
			
			$(this).siblings().find("i").css("color","#989695");
			
			$(this).siblings().find("span").hide();
			$(this).find("span").css("left",0);
			$(this).find("span").show();
			$(this).find("i").animate({
				"fontSize":"18px",
				"fontWeight":700,
		 
				"height":"23px",
				"lineHeight":"23px",
			},100);
			$(this).find("i").css("color","#000");
			
			
			
			
			
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
					
					//设置视频的拉伸模式
					if (!checkFull()) {
						console.log("退出全屏");
						
						$(".playarea video").css("object-fit","fill");
					}else {
						$(".playarea video").css("object-fit","none");
					}
					
					//设置列表文字大小和线条的边距
					
					if(width < 768)
					{
						
		
					}else if(width < 1220)
					{
						$(".solution ul li").find("span").css("left",0);
						
					}else{
						
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
 
	
	
	
	});
