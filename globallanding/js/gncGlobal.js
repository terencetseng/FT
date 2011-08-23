var gncEventMed = new gncEventMediator(),
    gncFundFinder = new gncFundFinder(),
    tabContent = new tabContent(),
    gncAnalytics = new gncAnalytics();

var gnc = {
    /* Takes a URL String and returns an Object out of it
    */
    urlToObject: function(url){
        var urlObj = {};
        $.each(url.split('&'), function(ix,v){
            var temp = v.split('=');
            urlObj[temp[0]] = temp[1];
        });
        console.log('urlObj',urlObj);
        return urlObj;
    }
};

gncFundFinder.init();

// Load content from filename
// Only execute if no hash is present and no selectedPage specified
(function(){
    if (window.location.hash.length > 0) {
        var fileName = document.location.href.split('#')[0].split('/').pop();
        if (gncLinkMap[ fileName ]) {
            window.location.hash = gncLinkMap[ fileName ];
        }
    }
})();

tabContent.init();
tabContent.initHistory();

$(function(){

    //add legal container
    $('#gnc').after('<div class="legalinfo additional"></div>');
    
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
            $('#overlay_wrapper').css({ width: 880, height: 387 });
            var wrap = this.getOverlay().find('.content_wrapper'),
                embedOptions = {
                    src: this.getTrigger().attr('href')
                };
            wrap.parent().find('.icon.pdf').remove();
            flashembed('#overlay_wrapper', embedOptions);
            
            // hide flash content
            $('#gnc object').css('visibility','hidden');
        },
        onClose: function() {
            $('#overlay_wrapper').removeAttr('style');
            $('#gnc object').removeAttr('style');
        }
    }).click(function(ev){
        ev.preventDefault();
    });
    
    //center align downloads sidebar buttons
    $('a.button', '#downloads').each(function(){
        $(this).css('left', ($('#downloads').width() - $(this).outerWidth() ) /2 );
    });
    
});