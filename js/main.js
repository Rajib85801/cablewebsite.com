
$(document).ready(function(){

	// fixed navbar 
	$(window).scroll(function(){
		var scrollPos = $(document).scrollTop();
		if(scrollPos > 100){
			$('.main_nav').addClass('navbar_fixed');
		}else {
			$('.main_nav').removeClass('navbar_fixed');
		}
	})


	//nav login btn active when click
	$('.login_btn').click(function(){
		$('.nav_login_system').toggleClass('active_nav_login');
		$(this).css('color','#03a9f4');
	})
	

	//nav panel btn active when click
	$('.panel_btn').click(function(){
		$('.panel_name').removeClass('active_panel')
		$(this).parent().addClass('active_panel')
	})

})