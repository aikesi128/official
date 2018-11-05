
	
	$(function(){
		
		$(".video img").click(function(){
		 
		//点击开始播放视频
		var video = $(".video video");
		
		video.css("display","block");
		
		video.css("autoplay","autoplay");
		
		
		video.onended = function(){
			
			$(this).css("display","none");
			
			
		}
		
		});
	
		
		
		
		
		
	})
