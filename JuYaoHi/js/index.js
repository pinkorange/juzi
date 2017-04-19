// JavaScript Document

//返回顶部
$(function(){
	var win_height=$(window).height();
	
	//当用户滚动指定的元素时，会发生 scroll 事件，
	$(window).scroll(function(e){
		var win_top=$(window).scrollTop();
		
		//判断，如果滚动条的值大于页面的高度，大于显示返回顶部按钮，否则不显示
		if(win_top>win_height){
			$('.back').stop().fadeTo(500,1);
		}else{
			$('.back').stop().fadeTo(500,0);
		}
	});
	$('.back').click(function(){
		$('html,body').animate({scrollTop:0},500);
	});
})

//导航栏
$(function(){
	$('.nav_oneUl>li').mousemove(function(e){
		$(this).children('.nav_twoUl').stop().show();
	}).mouseout(function(e){
		$(this).children('.nav_twoUl').stop().hide();
	});
})

//banner区域
$(function(){
	var length,  
	currentIndex=0, //设当前的索引值为0
	interval,
	hasStarted=false, //是否已经开始轮播
	t=3000; //轮播时间间隔
	length = $('.banner_li').length;
	//将除了第一张照片隐藏
	$('.banner_li:not(:first)').hide();
	//隐藏向前、向后按钮
	$('.banner_page').hide();
	//鼠标上悬时显示先前向后按钮，停止滑动，鼠标离开时隐藏向前向后按钮，开始滑动
	$('.banner_li, .banner_l, .banner_r').hover(function(){
		stop();
		$('.banner_page').show();
	},function(){
		$('.banner_page').hide();
		start();
	});
	
	$('.banner_l').unbind('click');
	$('.banner_l').bind('click',function(){
		pre();
	});
	$('.banner_r').unbind('click');
	$('.banner_r').bind('click',function(){
		next();
	});
	//向前翻页
	function pre(){
		var preIndex = currentIndex;
		currentIndex= (--currentIndex + length)% length;
		play(preIndex, currentIndex);
	}
	//向后翻页
	function next(){
		var preIndex = currentIndex;
		currentIndex = ++currentIndex % length;
		play(preIndex, currentIndex);
	}
	//从preIndex页(上一张图片)翻到currentIndex页(当前图片)，
	//preIndex 整数，翻页的起始页，
	//currentIndex整数，翻到的那页
	function play(preIndex, currentIndex){
		$('.banner_li').eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000);
	}
	//开始轮播
	function start(){
		if(!hasStarted){
			hasStarted = true;
			interval = setInterval(next, t);
		}
	}
	//停止轮播
	function stop(){
		clearInterval(interval);
		hasStarted = false;
	}
	//开始轮播
	start();
	
})

//美食诱惑
$(function(){
	$('.food_con .food_bottom li div').fadeTo(0,0.5);
	
	$('.food_con .food_bottom li p').each(function(index,element){
		var p_top=-50*index;
		$(element).css('background-position','0'+p_top+'px');
	});
	
	$('.food_con .food_bottom li').hover(function(e){
		$(this).children('div,p').stop().animate({bottom:0},500);
		$(this).siblings().stop().fadeTo(500,0.5);
	},function(e){
		$(this).children('div,p').stop().animate({bottom:-50},500);
		$('.food_con .food_bottom li').fadeTo(500,1);
	});
})




