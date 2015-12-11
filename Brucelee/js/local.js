$(document).ready(function() {
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

$('ul.nav > li > a').on('click',function() {
	$('ul.nav > li.active').removeClass('active');
	$(this).closest('li').addClass('active');
	var currentSelection = $(this).prop('className');
   switch(currentSelection) {
 	case 'homeSection' :
 	      $('.row').find('.homeSection').show().end()
 	               .find('.dallasSection').hide().end()
 	               .find('.houstonSection').hide().end()
 	               .find('.texasSection').hide().end()
                 .find('.seattleSection').hide().end()
                 .find('.newsSection').hide().end()
 	               .find('.portlandSection').hide().end()
                 .find('.albuquerqueSection').hide()
                 .find('.contactusSection').hide();
        $('.carousel-inner').show();
        $('.carousel-inner').find('.slideShow').hide();
 	      break;
 	case 'dallasSection' :
 	      $('.row').find('.homeSection').hide().end()
 	               .find('.dallasSection').show().end()
 	               .find('.houstonSection').hide().end()
 	               .find('.texasSection').hide().end()
                 .find('.seattleSection').hide().end()
                 .find('.newsSection').hide().end()
 	               .find('.portlandSection').hide().end()
                 .find('.albuquerqueSection').hide()
                 .find('.contactusSection').hide();
        $('.carousel-inner').find('.slideShow').show();
        $('.carousel-inner').show();
 	      break; 
 	case 'houstonSection' :
 	      $('.row').find('.homeSection').hide().end()
 	               .find('.dallasSection').hide().end()
 	               .find('.houstonSection').show().end()
 	               .find('.texasSection').hide().end()
                 .find('.seattleSection').hide().end()
                 .find('.newsSection').hide().end()
 	               .find('.portlandSection').hide().end()
                 .find('.albuquerqueSection').hide()
                 .find('.contactusSection').hide();
        $('.carousel-inner').show();
        $('.carousel-inner').find('.slideShow').show();
 	      break;
 	case 'texasSection' :
 	      $('.row').find('.homeSection').hide().end()
 	               .find('.dallasSection').hide().end()
 	               .find('.houstonSection').hide().end()
 	               .find('.texasSection').show().end()
                 .find('.seattleSection').hide().end()
                 .find('.newsSection').hide().end()
 	               .find('.portlandSection').hide().end()
                 .find('.albuquerqueSection').hide()
                 .find('.contactusSection').hide();
        $('.carousel-inner').show();
        $('.carousel-inner').find('.slideShow').show();
 	      break;  
 	case 'portlandSection' :
 	      $('.row').find('.homeSection').hide().end()
 	               .find('.dallasSection').hide().end()
 	               .find('.houstonSection').hide().end()
 	               .find('.texasSection').hide().end()
                 .find('.seattleSection').hide().end()
                 .find('.newsSection').hide().end()
 	               .find('.portlandSection').show().end()
                 .find('.albuquerqueSection').hide()
                 .find('.contactusSection').hide();
        $('.carousel-inner').show();
        $('.carousel-inner').find('.slideShow').hide();
 	      break;
    case 'seattleSection' :
          $('.row').find('.homeSection').hide().end()
                   .find('.dallasSection').hide().end()
                   .find('.houstonSection').hide().end()
                   .find('.texasSection').hide().end()
                   .find('.seattleSection').show().end()
                   .find('.newsSection').hide().end()
                   .find('.portlandSection').hide().end()
                   .find('.albuquerqueSection').hide()
                   .find('.contactusSection').hide();
        $('.carousel-inner').show();
      $('.carousel-inner').find('.slideShow').hide();
        break; 
    case 'albuquerqueSection':
          $('.row').find('.homeSection').hide().end()
                   .find('.dallasSection').hide().end()
                   .find('.houstonSection').hide().end()
                   .find('.texasSection').hide().end()
                   .find('.seattleSection').hide().end()
                   .find('.newsSection').hide().end()
                   .find('.portlandSection').hide().end()
                   .find('.albuquerqueSection').show()
                   .find('.contactusSection').hide();
        $('.carousel-inner').show();
        $('.carousel-inner').find('.slideShow').hide();
          break;                        
    case 'newsSection' :
          $('.row').find('.homeSection').hide().end()
                   .find('.dallasSection').hide().end()
                   .find('.houstonSection').hide().end()
                   .find('.texasSection').hide().end()
                   .find('.seattleSection').hide().end()
                   .find('.newsSection').show().end()
                   .find('.portlandSection').hide().end()
                   .find('.albuquerqueSection').hide()
                   .find('.contactusSection').hide();
          $('.carousel-inner').show();
          $('.carousel-inner').find('.slideShow').hide();
          break;
    case 'contactusSection' :
          $('.row').find('.homeSection').hide().end()
                   .find('.dallasSection').hide().end()
                   .find('.houstonSection').hide().end()
                   .find('.texasSection').hide().end()
                   .find('.seattleSection').hide().end()
                   .find('.newsSection').hide().end()
                   .find('.portlandSection').hide().end()
                   .find('.albuquerqueSection').hide()
                   .find('.contactusSection').show();
          $('.carousel-inner').hide();
          break;
  case 'default' :
        $('.row').find('.homeSection').show().end()
                 .find('.dallasSection').hide().end()
                 .find('.houstonSection').hide().end()
                 .find('.texasSection').hide().end()
                 .find('.seattleSection').hide().end()
                 .find('.newsSection').hide().end()
                 .find('.portlandSection').hide().end()
                 .find('.albuquerqueSection').hide()
                 .find('.contactusSection').hide();
        setTimeout(function() { 
          $('.carousel-inner').show();
          $('.carousel-inner').find('.slideShow').hide(); 
        }, 500);
        break;
 }
});
});