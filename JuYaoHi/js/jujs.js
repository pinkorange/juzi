// JavaScript Document

//糕点区域
$(function(){
	$('.content_con .content_bottom .content_bottom_r .img1').hover(function(e){
		$(this).children('div').show();
		$(this).siblings().stop().fadeTo(500,0.5);
	},function(e){
		$(this).children('div').hide();
		$(this).siblings().stop().fadeTo(500,1);
	});
	
	$('.content_con .content_bottom .content_bottom_r .img2').hover(function(e){
		$(this).children('div').show();
		$(this).siblings().stop().fadeTo(500,0.5);
	},function(e){
		$(this).children('div').hide();
		$(this).siblings().stop().fadeTo(500,1);
	});
	
	$('.content_con .content_bottom .content_bottom_r .img3').hover(function(e){
		$(this).children('div').show();
		$(this).siblings().stop().fadeTo(500,0.5);
	},function(e){
		$(this).children('div').hide();
		$(this).siblings().stop().fadeTo(500,1);
	});
	
	$('.content_con .content_bottom .content_bottom_r .img4').hover(function(e){
		$(this).children('div').show();
		$(this).siblings().stop().fadeTo(500,0.5);
	},function(e){
		$(this).children('div').hide();
		$(this).siblings().stop().fadeTo(500,1);
	});
})


