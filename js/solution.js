
	//入口函数
	$(document).ready(function(){
	 
	 	var selectIndex = 0;
		//点击左侧列表项
		$(".solution .list ul li").click(function(){
			
			selectIndex = $(this).index();
			//显示对应的盒子
			$(".solution .content div").css("display","none");
			$(".solution .content div").eq($(this).index()).css("display","block");
			
			//删除其他元素的类
			$(this).siblings().find("i").removeClass("current");
			$(this).siblings().find("span").removeClass("show");
			
			//添加当前元素的类
			$(this).find("i").addClass("current");
			$(this).find("span").addClass("show");
			
			if($(document.body).width() < 768)
			{
				 
					var ele = $(this);			
					 //设置span的left值
	 				var liW = ele.find("i")[0].offsetWidth;
	 				var left = (150-liW)/2;
	 				ele.find("span").css("left",left);			 
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
		
				//声明变量来记录是否已经用代码触发过点击事件
				var isTrigger = false;
				$(window).resize(function () {
					
					//设置视频的拉伸模式
					if (!checkFull()) {
						console.log("退出全屏");
						
						$(".playarea video").css("object-fit","fill");
					}else {
						$(".playarea video").css("object-fit","none");
					}
					
					//设置列表文字大小和线条的边距
					
					var left = 	$(".solution .list ul").css("marginLeft");
					var left_span = 	$(".solution .list ul span.show").css("left");
					var width = $(document.body).width();
					if(width < 768)
					{
						if(width < 750)
						{
							if(isTrigger === false)
							{
								//需要将在小于768时候的距离设置给他 --> 重新出发点击事件
								$(".solution .list ul li").eq(selectIndex).click();
								isTrigger = true;
							}
						}
						
		
						
						isTrigger = false;
						
						//如果两个数据都不为0 就将他们设置为0
						if(parseInt(left) != 0)
						{
							// 消除列表的左侧外边距	
							$(".solution .list ul").css("marginLeft",0);
						} 
						
						
						if(parseInt(left_span) != 0)
						{
							// 消除列表的左侧外边距	
							$(".solution .list ul span.show").css("left",0);
						} 
						
							$(".solution .list ul span").css("left",0);
						
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
