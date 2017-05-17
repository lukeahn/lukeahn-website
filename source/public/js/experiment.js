$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });   

    $(window).bind('scroll',function(e){
      dotnavigation();
    });
    
    function dotnavigation(){
             
        var numSections = $('section').length;
        
        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');     
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          
          console.log(ele.next().html());
          
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
          }
          else {
            thisTop = 0;
          }
          
          var docTop = $(document).scrollTop();
          var docBot = $(document).scrollTop() + $(window).height();
          var pageBot = $(document).height();

          
          if(docTop >= thisTop && (docTop < nextTop) && (docBot<pageBot-20)){
            // alert(i)
            $('#dot-nav li').eq(i).addClass('active');
          }

          if(docBot>= pageBot-20){
            
            $('#dot-nav li').eq(5).addClass('active');

          }
          
        });   
    }

    /* get clicks working */
    $('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding +3;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });

/* end dot nav */
});
