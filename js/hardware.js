

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
	
	
	
	
	
	
})
