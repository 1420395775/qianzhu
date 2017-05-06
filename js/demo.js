
	$(function () {

		var oNavtop = $('.navTop');
		var oFf = $('.off');
		var oFf2 = $('.off2');
		var oUl4 = $('#ul4');
		var now = 0;
		var onoff = true;
		oFf.on('click',function () {
			if (onoff) {
				oUl4.animate({right:-50},200);
				$(this).css('transform','rotate('+45+'deg)'); 
			} else {
				oUl4.animate({right:0},200);
				$(this).css('transform','rotate('+0+'deg)'); 
			}
			onoff = !onoff;
		})

		//首页侧导航

		var oNine = $('.nine');
		var oTex2 = $('.tex2');
		var otex2_2 = $('.tex2_2');

		oNine.animate({left:450,opacity:1},600);
		oTex2.animate({right:420,opacity:1},600);

		// 首页字体

		var oNews = $('.news');
		var oTex3 = $('.tex3');
		var oUl = $('.tex3 ul');
		var timer = null;
		var num = -20;

		oTex3.on('mouseover',function(){
			clearInterval(timer);
		})
		oTex3.on('mouseout',function(){
			timer = setInterval(show,1500);
		})
		timer = setInterval(show,1500);
		function show() {
			oUl.animate({top:num});
			num+=-20;
			if(num == -80){
				num = 0;
			}
		}

		// 首页广告轮播文字

		var oDown = $('#down');
		var oDown2 = $('.down2');
		var oUp = $('#up');
		var onoff2 = true;

		oDown2.on('click',function (e) {
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		})
		// 轮播中间下翻页
		
		oUp.on('click',function (e) {
			e.preventDefault();
			$.fn.fullpage.moveSectionUp();

	   })
	
		oDown.on('click',function (e) {
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		
	   })
	  // 上下翻页

		var oBx4 = $('.box4');
		var oB_act = $('.box4 .active');
		var oB_ul4 = $('.box4 ul');	
		var oB_li4 = $('.box4 ul li');
		var oB_i = $('.box4 .active');	

		oB_li4.on('mouseover' , function(){
			var m = $(this).index();
			if(m <=5 ){
				oB_i.css({left:(m-1)*231+20,top:20})
			}else{
				oB_i.css({left:(m-6)*231+20,top:171})
			}
		})

		oB_ul4.on('mouseenter mouseleave', function () {
			oB_i.toggle();

		})

		// 客户页面
		var oActive1 = $('.ul3 .activn1');
		var oUl3 = $('.ul3');
		var aLi = $('.ul3 li');
		var oContent1 = $('.content1');
		// aLi.on('mouseover',function () {
		// 	$(this).addClass('active').siblings().removeClass('active');
		// 	var li = $(this).index();
		// 	oContent1.animate({
		// 		left:li*-480
		// 	},500)
		// })
		aLi.on('mouseover',function () {
			var aIndex = $(this).index();
			aLi.removeClass('active');
			$(this).addClass('active');
			oActive1.css('top',(aIndex*50)+'px');
			console.log(aIndex)
			oContent1.css('transform','translate3d('+(-480*aIndex -480)+'px,0px,0px)');
		})
		var sw = new Swiper ('.more-container',{
			onSlideChangeStart:function (swiper) {
				var q = swiper.realIndex;
				aLi.removeClass('active');
				aLi.eq(q).addClass('active');
				oActive1.css('top',(q*50)+'px');
			},
			loop:true,
			centeredSlides:true,
			autoplay:2500,
			autoplayDisableOnInteraction:false
		})


		// 关于页面的轮播

	});

	