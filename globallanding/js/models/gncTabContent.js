var tabContent = function(){
    var that = this;
    
    that.init = function(){
        that.getJSON();
    };
    
    /* Move Legal Content
     */
    function renderTabs(data) {
        
        var tab_data = data['tabs'],
            tab_HTML = '',
            pane_HTML = '',
            pane_custom_HTML = '',
            defaultAnswer = that.getTab().answer;
            
        // Render tabs
        $.each(tab_data, function(ix,v){
            var analyticsAttr_HTML = '';
            if (v['analytics']) {
                analyticsAttr_HTML = ' analytics="';
                $.each(v['analytics'], function(ix,v){
                    analyticsAttr_HTML += ix+'='+v+'&';
                });
                analyticsAttr_HTML += '"';
            }
            tab_HTML += '<li><a href="#"'+analyticsAttr_HTML+'><span class="wrapper">' + v['title'] + '</span></a></li>';
        });
        // Render additional tabs
        if ($('.pane.custom').length >= 0) {
            $('.pane.custom').each(function(ix,v){
                var that = $(this);
                    c = {};
                c.id = that.attr('id');
                c.title = that.find('.title').text();
                tab_HTML += '<li><a class="custom" href="#'+c['id']+'"><span class="wrapper">' + c['title'] + '</span></a></li>';
                pane_custom_HTML += '';
            });
        }
        $('.tabs').html(tab_HTML);
        
        // Render panes
        $.each(tab_data, function(ix,v){
            var content = v.content
                content_id = v.id;
            
            pane_HTML += '<div id="pane_'+content_id+'" class="pane">';
            
            pane_HTML += '<div class="scrollable">';
                pane_HTML += '<div class="items">';
                
                // Scrollable Panes
                $.each(content, function(ix, v){
                    var card = v['card'],
                        alpha_char = [ 'A','B','C','D','E','F' ];
                    
                    pane_HTML += '<div class="scrollable_'+v.id+'">';
                        
                        pane_HTML += '<h3>' +v['title']+'</h3>';
                        
                        pane_HTML += '<div class="blurb">';
                        
                            // Quiz
                            pane_HTML += '<div class="quiz">';
                                pane_HTML += '<h4>'+v['quiz']['question']+'</h4>';
                                pane_HTML += '<input name="answer" type="hidden" value="'+v['quiz']['answer']+'"/>';
                                pane_HTML += '<ol class="options">';
                                $.each(v['quiz']['options'], function(ix, v){
                                    // prepend alpha list characters
                                    var character = alpha_char[ix];
                                    pane_HTML += '<li><a href="#" id="option_'+ix+'">'+character+'. '+v+'</a></li>';
                                });
                                pane_HTML += '</ol>';
                                pane_HTML += '<div class="answer">';
                                    pane_HTML += '<h5>'+v['quiz']['answerInfo']['title']+'</h5><p>'+v['quiz']['answerInfo']['message']+'</p>';
                                    pane_HTML += '<a class="source" href="#" title="'+v['quiz']['source']+'">Source</a>';
                                pane_HTML += '</div>';
                            pane_HTML += '</div>';

                            pane_HTML += '<img class="abstract" src="'+GL_IMG_PATH+'space.gif" rel="'+GL_IMG_CONTENT_PATH+'headshots/sm/'+v['imgAbstractURL']+'" alt="Image of '+card['name']+'"/>';
                            pane_HTML += '<p>'+v['content']+'</p>';
                            pane_HTML += '<div class="card">';
                                pane_HTML += '<div><span class="name">'+card['name']+'</span>';
                                pane_HTML += (card['title'].length > 0) ? ', <span class="title">'+card['title']+'</span>':'';
                                pane_HTML += '</div>';
                                pane_HTML += '<div><span class="company">'+card['company']+'</span>';
                                pane_HTML += (card['note'].length > 0) ? ', <span class="note">'+card['note']+'</span>':'';
                                pane_HTML += '</div>';
                            pane_HTML += '</div>';
                            
                        pane_HTML += '</div>';
                        
                        // Quote
                        pane_HTML += '<div class="quote"><hr/>'+v['quote']+'<hr/></div>';
        
                        // Infographic
                        pane_HTML += '<div class="infographic">';
                            pane_HTML += '<a href="'+GL_IMG_CONTENT_PATH+'infographic/lg/'+v['infographic']['largeImgURL']+'" pdf="'+GL_FILE_CONTENT_PATH+v['infographic']['fileURL']+'" rel="#overlay" class="trigger"> \
                                <img class="graphic" src="'+GL_IMG_PATH+'space.gif" rel="'+GL_IMG_CONTENT_PATH+'infographic/sm/'+v['infographic']['smallImgURL']+'" style="height:'+v['infographic']['smallImgHeight']+'px;"/></a>';
                            pane_HTML += '<a href="'+GL_FILE_CONTENT_PATH+v['infographic']['fileURL']+'"><img class="icon pdf" src="'+GL_IMG_PATH+'space.gif" alt="PDF icon"/></a>';
                            pane_HTML += '<a href="'+GL_IMG_CONTENT_PATH+'infographic/lg/'+v['infographic']['largeImgURL']+'" rel="#overlay" class="button trigger">Zoom</a>';
                        pane_HTML += '</div>';
                        
                        // Legal
                        if (v['legal']) {
                            pane_HTML += '<div class="legal">';
                                $.each(v['legal'], function(ix,v){
                                    pane_HTML += v;
                                });
                            pane_HTML += '</div>';
                        }
    
                    pane_HTML += '</div>';
                });
                
                pane_HTML += '</div>';
            pane_HTML += '</div>';

            pane_HTML += '<a class="next">&gt;</a>';
            pane_HTML += '<a class="prev">&lt;</a>';
            
            pane_HTML += '</div>';
        });
        
        // Render additional panes
        if ($('.pane.custom').length >= 0) {
            $('.pane.custom').each(function(ix,v){
                var that = $(this);
                    c = {};
                c.id = that.attr('id');
                pane_HTML += '<div id="pane_'+c['id']+'" class="pane">';
                pane_HTML += that.html();
                pane_HTML += '</div>';
            }).remove();
        }
        $('.panes').html(pane_HTML);
        
        // set tab width
        that.tabWidth();
        
        // init event functions after render
        that.initTabsArea();
        that.initScrollableArea();
        that.initInfographic();
        gncAnalytics.init();
        
        // init default answer if hash flag is set
        if (defaultAnswer === true) {
            var $quiz = $('.quiz:visible'),
                answer = $quiz.find('input[name=answer]').val();
            $quiz.find('.options a').eq(answer).trigger('click');
        }

    }
    
    that.getJSON = function() {
        $.ajax({
            url: GL_WEB_PATH+'json/GNCTabs.json',
            dataType: 'json',
            success: renderTabs
        });
    }
    
    // Make tabs fit .tabs pixel width
    that.tabWidth = function() {
        var container_width = $('.tabs').width(),
            tabs_width = 0,
            tab_width = -10;
        $('.tabs li').not(':last').find('a').each(function(ix,v){
            tabs_width += $(this).width();            
        });
        tab_width += container_width - tabs_width;

        $('.tabs li:last a').css({
            width: tab_width,
            maxWidth: tab_width
        });
    }
    
    /* History/Hash Initialize
     */    
    that.initHistory = function(){
        var hash = window.location.hash;
        if (hash) {
            hash = hash.split('/');
            $('body').data('historyTab', hash[0]).data('historyPane', hash[1]);
        }
        //return hash;
    }

    /* Set window.location History/Hash
     */
    that.putHistory = function(currPane) {
        var currPane = (currPane) ? currPane : $('body').data('historyPane');
        window.location.hash = $('body').data('historyTab') + '/' + currPane;
    }
    
    /*
     * answer is returned once, and removed from hash, so default answer is only shown once
     */
    that.getTab = function() {
        var apiTabs = $('.tabs').data('tabs'),
            tabData = {};

        var hash = window.location.hash;
        if (hash) {
            hash = hash.split('/');
            tabData['tabName'] = hash[0].replace('#','');
            tabData['tabPos'] = $('#pane_' + hash[0].replace('#',''), '.panes').index();
            tabData['scrollablePos'] = parseInt(hash[1]);
            tabData['answer'] = (hash[2]) ? true : false;
        }
        return tabData;
    }
    
    that.initTabsArea = function() {
        var apiTabs,
            opts = {
                // IE7 doesn't support anti-alias text on dynamic DOM elements
                //effect: ($.browser.version.substr(0,1) === 7) ? 'default' : 'fade'
				effect: 'fade'
            },
            $currPane = {};
            
        $('.tabs').tabs('.panes > .pane', opts);
        
        apiTabs = $('.tabs').data('tabs');
		master_initload = true;
        // Set default tab 
        apiTabs.click(that.getTab().tabPos);
        
        // Set default scrollable
        // Here
        
        that.initQuiz();
        
        if ($.browser.version.substr(0,1) === 7) {
            that.initImages(apiTabs.getCurrentPane());
        }
        
		apiTabs.onBeforeClick(function(ev,ix){
			if(master_initload){
				console.log("cancel tab switch");
				return false;
			}
			else
				return true;
		});

        apiTabs.onClick(function(ev,ix){
			
      	 	var $currPane = $(this.getCurrentPane()),
            $currTab = $(this.getCurrentTab()),
            replaceStr = 'pane_';

            that.initImages($currPane);
           
            // Store tab history
            $('body').data('historyTab', $currPane.attr('id').replace(replaceStr, '' ) );
           
            // Reset pane position (always show first pane on Tab click)
            if (that.getTab().tabPos !== apiTabs.getIndex()) {
                $('body').data('historyPane', 0);
            }
           
            // update hash url with current tab and pane
            // note: pane only updates when scrollable.onseek triggered
            //     <currentTab>.data('historyPaneInThisTab')
            that.putHistory();
           
            that.getPane( $('#pane_'+that.getTab().tabName) );


        });
    }
    
    that.initScrollableArea = function() {
    
        var opts = {
                easing: 'swing'
            };
        
        $('.wrapper .panes .pane .scrollable').scrollable(opts);
        
        that.getPane( $('#pane_'+that.getTab().tabName) );
    }
    
    /* loads images by changing attribute rel to src, thus loading the image (occurs once)
     */
    that.initImages = function($tab) {
        
        $('img[rel]', $tab).each(function(){
            var $this = $(this);
            
            $this.attr('src', $this.attr('rel') );
            $this.removeAttr('rel');
            
        });
        
    }
    
    // pane: gets, sets, stores history
    that.getPane = function($tab) {
        
        if (window.location.hash) {
            var apiScrollable = $('.scrollable', $tab).data('scrollable');
            
            // Show scrollable pane
            // Ensures this only happens once on init, since tab data isn't entered yet.
            // Otherwise, don't auto seek
            if ( $tab.data('historyPaneInThisTab') === undefined){
                apiScrollable.seekTo(that.getTab().scrollablePos);
            }
            
            apiScrollable.onSeek(function(ev){
                
                var currentPane = this.getIndex(),
                    $currTab = $('.scrollable_'+currentPane+':visible').parents('.pane');
                
                // Store history pane in DOM
                $('body').data('historyPane', currentPane );
                
                // Move legal
                var $legal = $('.scrollable_'+currentPane , $tab).find('.legal');
                if ( $legal.length > 0 ) {
                    $('.legalinfo.additional').html( $legal.html() );
                }
                
                that.putHistory();
                
                // Store current pane ID in tab
                $currTab.data('historyPaneInThisTab', currentPane);
                
                that.setPaneHeight( $('.scrollable_'+currentPane) );
                
                ev.stopPropagation();
                
            });
        }
    }
    
    /* Set pane height
     */
    that.setPaneHeight = function($pane) {
        var $pane = $pane.filter(':visible'),
            $scrollable = $pane.parents('.scrollable'),
            heightInt = 0;
        
        $pane.children().filter(':visible').each(function(){
            heightInt += $(this).outerHeight(true);
        });
        
        // Set height
        $scrollable.css({ height: heightInt });
    }
    
    /* Initialize Quiz
     */
    that.initQuiz = function() {
        $('.quiz').each(function(ix,v){

            var $quiz = $(v),
                answer = $('input[name=answer]', $quiz).val(),
                answer_msg = {
                    'correct': 'Correct answer',
                    'incorrect': 'Incorrect answer'
                };

            function contentData(selection) {
                // Assemble user entered Question/Answer data
                var questionData = {
                    questionId: answer,
                    answerId: selection,
                    result: (answer === selection) ? 'correct':'wrong'
                };
                
                return questionData;
            }
            
            /* compare answer id and selection id */
            function answerSelect($target, selection) {
                
                /* store answers for each item */
                $('li a', $quiz).each(function(){
                    $(this).data('option', $(this).text() );
                });
                
                /* make all answers disabled */
                $('li a', $quiz).addClass('disabled').unbind('click').bind('click', function(ev){
                    ev.preventDefault();
                });
            
                /* mark selected button */
                $target.addClass(answer === selection ? 'correct':'incorrect').text(answer === selection ? answer_msg['correct']:answer_msg['incorrect']);
                if ($target.hasClass('incorrect')){
                    /* mark correct button */
                    $('li a', $quiz).eq(answer).addClass('correct').text(answer_msg['correct']);
                }
            }
            
            function answerScreen() {
                $('.options', $quiz).css({marginTop:10});
                $('li a.correct', $quiz).html($('li a.correct', $quiz).data('option'));
                $('li a', $quiz).not('.correct').parent().fadeOut(100, function(){
                    if (Modernizr.opacity === true) {
                        $('.answer', $quiz).css({position: 'static', opacity: 1});
                    } else {
                        $('.answer', $quiz).fadeIn(400);
                    }
                });
            }
            
            function loader(power, $triggered_element) {
                var topPos = (typeof $triggered_element !== 'undefined' && $triggered_element) ? topPos = $triggered_element.position().top - $triggered_element.outerHeight() - 5 : 0;

                if (power === 'on') {
                    $quiz.prepend('<span class="loader"><img class="loader_img" src="'+GL_IMG_PATH+'space.gif"/></span>');
                    $('.loader_img', $quiz).css('top',topPos).fadeIn(100);
                } else {
                    $('.loader_img', $quiz).fadeOut(100, function(){ $(this).parent().remove(); });
                }
            }
            
            contentData();
            
            $('li a', $quiz).bind('click',function(ev){
                var $this = $(this),
                    selection = $this.attr('id').replace('option_','');
                
                ev.stopPropagation();
                ev.preventDefault();
                
                answerSelect($this ,selection);
                
                // power on loading img
                loader('on', $this);
                
                // Init source tooltip
                $('.quiz a[title]').bind('click', function(ev){
                    ev.preventDefault();
                    ev.stopEventPropagation();
                }).tooltip({
                    effect: 'fade',
                    position: 'bottom center', 
                    layout: '<div class="tooltip"><img class="tip up" src="'+GL_IMG_PATH+'space.gif"/></div>'
                });
                
                if (GL_API_PATH === false) {
                    // power off loading img
                    loader('off');
                    
                    /* advance to answer screen */
                    answerScreen();
                
                } else {
    
                    $.ajax({
                        url: GL_API_PATH+'getQuizAnswers.php', 
                        data: contentData(selection), 
                        type: 'POST',
                        dataType: 'json',
                        jsonp: 'onQuizLoad',
                        success: function(data, textStatus){
                            
                            // power off loading img
                            loader('off');
                            
                            if (textStatus === 'success') {
                                /* advance to answer screen */
                                answerScreen();
                            }
                        }
                    });
                    
                }
                
            });
        });
    }
    
    that.initInfographic = function() {

        $('.infographic .trigger').overlay({
            close: '.close_trigger',
            fixed: false,
            mask: { color: '#000000', loadSpeed: 200, opacity: 0.8 },
            onBeforeLoad: function(){
                var wrap = this.getOverlay().find('.content_wrapper'),
                    src = this.getTrigger().attr('href'),
                    pdf = this.getTrigger().attr('pdf');
                    
                // hide flash content
                $('#gnc object').css('visibility','hidden');

                wrap.parent().find('.icon.pdf').remove();
                wrap.html('<img src="'+src+'"/>').after('<a class="" href="'+pdf+'"><img class="icon pdf" alt="PDF icon" src="'+GL_WEB_PATH+'img/space.gif"/></a>');
            },
            onClose: function() {
                $('#gnc object').removeAttr('style');
            }
        });
    }
};