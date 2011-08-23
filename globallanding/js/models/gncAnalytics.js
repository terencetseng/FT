/*
 * Usage: binds anchors with analytics params String, adds defaults and calls unica function
 * <a href="#" analytics="location=InvestmentSolutions&content=Carousel&ev=StoryClicked">link</a>
 */
var gncAnalytics = function (){

    this.init = function(){

        $('#gnc a[analytics]').bind('click', function(ev){
            
            var $this = $(this),
                options = gnc.urlToObject($this.attr('analytics')),
                defaults = {
                    location:	'-',
                    content:	'-',
                    tab:	    '-',
                    subcontent:	'-',
                    drawer:	    '-',
                    drawertab:	'-',
                    ev:	        '-',
                    ev_value:	'-'
                },
                options = $.extend({}, defaults, options);
                
            //console.log(options);
            //console.log($.param(options));
            
            // The required ntpagetag.js errors, and so does this func call
            //ntptEventTag( $.param(options) );

        });
    }
};