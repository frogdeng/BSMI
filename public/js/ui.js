
$(function(){



$('.switch').click(function(){
	$('.fat_footer').toggleClass( "fat-footer_show" )
	return false
});


$('.alert').click(function(){
  $('.alert_message').toggleClass( "show_show" )
  return false
});


$('.font_size').click(function(){
  $('.font_size_message').toggleClass( "show_show" )
  return false
});

$('.fun_icons > .fun_edit').click(function(){
  $('.edit_dropdown').toggleClass( "show_show" )
  return false
});

$('.main_fun_edit').click(function(){
  $('.main_edit_dropdown').toggleClass( "show_show" )
  return false
});






});






