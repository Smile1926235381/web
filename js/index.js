   $(function () {
      $(".tab-item").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var idx = $(this).index();
        console.log(idx)
        $(".main").eq(idx).addClass("selected").siblings().removeClass("selected");
      });
    });
		
	