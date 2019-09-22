  $(document).ready(function(){
	  // parallax
	  	  $(".content").height($(window).height());
	  	  $.stellar({
	  	   			horizontalScrolling: false,  // 设置垂直 视差滚动效果  不是水平的
	  	  			responsive: true,
	  	  			//data-stellar-background-ratio="0.3"  设置背景滚动速度
	  	  			//data-stellar-ratio="2"              设置元素滚动速度
	  	  	});
  });
  