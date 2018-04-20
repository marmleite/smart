$(window).scroll(function(){
    var documentHeight = $(document).height();
    var windowHeight   = $(window).height();
    var distanceToTop  = $(window).scrollTop();
    var percentScrolled = distanceToTop/(documentHeight - windowHeight) * 100;
    $('#progress-bar').css({'width': percentScrolled + '%'});
});	