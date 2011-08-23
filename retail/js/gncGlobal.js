var gncEventMed = new gncEventMediator(),
    gncFundFinder = new gncFundFinder(),
    tabContent = new tabContent();

gncFundFinder.init();
tabContent.init();
tabContent.initHistory();

$(function(){

    //add legal container
    $('.legalinfo').after('<div class="legalinfo additional"></div>');
    
    //init accordion
    $('h2', '#sbAccordion').bind('click', function(ev){
        var $this = $(this),
            $pane = $this.next();
        
        $pane['slide' + ( $pane.is(':visible') ? 'Up':'Down' )](200);
        $this[( $(this).hasClass('current') ? 'remove':'add' ) + 'Class']('current');
    });
    
    $('#sbAccordion a.tab_trigger').bind('click', function(ev){
        ev.preventDefault();
        var $this = $(this),
            target = $this.attr('href'),
            apiTabs = $('.tabs').data('tabs');
        apiTabs.click(target);
        window.scrollTo(0,$('#gnc .tabs').offset().top);
    });
    
    //sidebar forms
    $('form.sidebar_form', '#sbAccordion').validate();
    $('textarea, input[type=text]', '#sbAccordion').each(function(ev,ix){
        
        var $this = $(this);
        
        // Cache default value
        $this.data('value', $(this).val());
    
        function handler(ev){
            var $this = $(this),
                value = $this.val(),
                defaultValue = $this.data('value');
                
            if (value === defaultValue) {
                $this.val('');
            } else if (value.length >1 && value !== defaultValue) {
                // do nothing
            } else {
                $this.val(defaultValue);
            }
            
        }
        
        $this.bind('click blur', handler);
    });

    //move overlay template html to bottom of DOM
    $('body').append($('.overlay'));
    
    //sidebar prezi
    $('#prezi a.button').overlay({
        close: '.close_trigger',
        fixed: false,
        mask: { color: '#000000', loadSpeed: 200, opacity: 0.8 },
        onBeforeLoad: function(){
            var wrap = this.getOverlay().find('.content_wrapper'),
                swfSRC = this.getTrigger().attr('href'),
                embedOptions = {
                    src: swfSRC
                };
            //wrap.parent().find('.icon.pdf').remove();
            //wrap.flashembed(embedOptions);
            //wrap.html('<img src="'+src+'"/>').after('<a class="" href="'+pdf+'"><img class="icon pdf" alt="PDF icon" src="'+GL_WEB_PATH+'img/space.gif"/></a>');
        }
    }).click(function(ev){
        ev.preventDefault();
    });
    
    //center align downloads sidebar buttons
    $('a.button', '#downloads').each(function(){
        $(this).css('left', ($('#downloads').width() - $(this).outerWidth() ) /2 );
    });
    
});