$(document).ready(function(){
    $('ul.tabs li').click(function(){
		let dataid = $(this).attr('data-id');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+dataid).addClass('current');
	})


    $(".text").click(function(){
      $(this.nextElementSibling).slideToggle("slow");
    });
  });



  