
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

    $('.advance_search').click(function(){
      $('.advance_search_dropdown').toggleClass( "show_show" )
      return false
    });




    $('.left_burger').click(function(){
      $('.institutional_knowledge_base_left').toggleClass( "switch_pillar")
      $('.left_pillar').toggleClass( "disapear")
    });

    $('.right_burger').click(function(){
      $('.institutional_knowledge_base_right').toggleClass( "switch_pillar")
      $('.right_pillar').toggleClass( "disapear")
    });


    var pillar_h = $('.institutional_knowledge_base_content').outerHeight()
    $('.institutional_knowledge_base_left').height(pillar_h)
    $('.institutional_knowledge_base_right').height(pillar_h)

    $('.unit_block').click(function(){
      $(this).siblings().slideToggle( "slideToggle")
    });





});






