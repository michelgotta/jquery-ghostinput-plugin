/*
	jQuery ghostInput Plugin
	
	Author:
	Michel Gotta / michel@michelgotta.de
	
	URL:
	https://github.com/michelgotta/jquery-ghostinput-plugin
	
*/
jQuery.noConflict()(function($){

$.fn.ghostInput = function(options, change) {
  options = $.extend({
    ghostText: ".foo.bar",
    ghostLabel: undefined
  },options);

  ghost = {
    init : function(element) {
      wrapper = $('<span/>').addClass('ghostInput_wrapper').attr('id', 'ghostInput_wrapper_'+element.attr('id'));
      element.wrap(wrapper);
      $('#'+wrapper.attr('id')).css({
              'width': element.width()+'px',
              'height': element.height()+'px',
              'display': 'inline-block',
              'overflow': 'hidden'});
              
      element.css('margin', '0');
      element.after($('<span/>').addClass('ghostInput_input').html($('<span/>').addClass('ghostInput_copy')));
      
      if (options.ghostLabel!==undefined ) {
        element.before( $('<label/>').attr({'for': element.attr('name'), 'class': 'ghostInput_label'}).html(options.ghostLabel) );
      }
    },
    textchange : function() {
      if ($(this).val() !== wrapper.find('.ghostInput_copy').html()) {
        wrapper = $('#ghostInput_wrapper_'+$(this).attr('id'));
        if ($(this).val() !== '') {
          wrapper.find('.ghostInput_label').fadeOut('fast');
          wrapper.find('.ghostInput_input').show().html($('<span/>').addClass('ghostInput_copy').html($(this).val() ));
          wrapper.find('.ghostInput_copy').after(options.ghostText);
        } else {
          wrapper.find('.ghostInput_label').fadeIn(100);
          wrapper.find('.ghostInput_input').fadeOut(100, function() {
            $(this).html('');
          });
        }
        if (options.change!==undefined) {
          options.change();
        }
      }
    }
  };
  ghost.init($(this));
  $(this).bind('keyup', ghost.textchange);
};

});