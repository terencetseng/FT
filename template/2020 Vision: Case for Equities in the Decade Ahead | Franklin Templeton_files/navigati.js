jQuery( function() {
	// primary navigation
		jQuery("ul.secNavDropDwn").hide();
		jQuery("ul.secLevel li").not("#currentLink").find("ul").hide();
		jQuery("ul.terLevel li").not("#currentLink").find("ul").hide();

	
	jQuery("ul.priNav li > a").append("<b></b>");
	jQuery("ul#globalNav > li:last a").css("border-right", "0px");
	jQuery("div#footer ul > li:first a").css("border-right", "0px");
	jQuery("#priNavBlock ul.priNav > li").hover( function() {
		jQuery(this).addClass("dropTrigger");
		jQuery("ul.secNavDropDwn", this).show();
		jQuery(this).prev("li").find("a b").addClass("border");
	}, function() {
		jQuery(this).removeClass("dropTrigger");
		jQuery("ul.secNavDropDwn", this).hide();
		jQuery(this).prev("li").find("a b").removeClass("border");
	});
	
	jQuery("label.LegalCopy").click(
	function(){
	return false;
	});
	jQuery("label.LegalCopy a").click(
	function(){
	var legalCopyTarget = jQuery(this).attr("href");
	window.location = legalCopyTarget;
	});

	jQuery("ul.secNavDropDwn li:first").addClass("fc");
	jQuery("ul.secNavDropDwn li:last").addClass("lc");

	jQuery("ul.priNav #currentPriNav").prev("li").find("a b").remove();

	jQuery("#sideNav li.focused > a:first").addClass("path");
	jQuery("ul.terLevel li.focused > a:first").addClass("path");
	jQuery("#sideNav li:last-child").addClass("lc");

	jQuery("#sideNav ul>li.focused>a, #sideNav ul>li#currentLink>span").append("<b></b>");

	//jQuery("table :first-child").addClass("fc");
	//jQuery("table :last-child").addClass("lc");
	jQuery("#sideNav ul li:first-child").addClass("fc");

	jQuery("#sideNav ul li:last-child").addClass("lc");

	/* Added for side Navigation - start */
	var commFullStoryLink = jQuery("#currentLink").find("a").text();
	if(commFullStoryLink.indexOf("Full Story") == 0 ){
		jQuery("#currentLink").find("a").prepend("- ");
		jQuery("ul.terLevel").show();
	}
	if(commFullStoryLink.indexOf("Full Story") > 0 ){
		jQuery("ul.terLevel").hide();
	}	
	
	jQuery("ul.secLevel li.focused").find("ul").show();
	jQuery("ul.terLevel li.focused").find("ul").show();
	
	

	jQuery("ul.terLevel li a").click(
			function() {
				var currentURL = jQuery(this).attr("href");
				if (currentURL.indexOf("#") >= 0) {
					var target = jQuery(this).next("ul").find("li:first-child")
							.find("a").attr("href");
					if (target != null) {
						window.location = target;
					} else {
						window.location = window.location;
					}
				}
			}
	);
	

	jQuery("ul.secLevel li a").click(
			function() {
				var currentURL = jQuery(this).attr("href");
				if (currentURL.indexOf("#") >= 0) {
					var target = jQuery(this).next("ul").find("li:first-child")
							.find("a").attr("href");
					if (target != null) {
						window.location = target;
					} else {
						window.location = window.location;
					}
				}
			}
	);
	
	/* Added for side Navigation - end */
	

	jQuery('a.restrictedLink').each(function(){
			jQuery(this).cluetip({
			width: 200,
			arrows: true,
			showTitle: false,
			activation: 'click',
			sticky: true,
			positionBy: 'bottomTop',
			local: true,
			attribute: 'href',
			hideLocal: true,
			closePosition:    'bottom',
			dropShadow: false,
			closeText: '<img style="padding:5px;" src="/retail/new/img/tooltip/tool_tip_close.PNG"/>'
			});
		});	
	

	/* side navigation */
	jQuery("ul.secLevel > li").not("#currentLink").hover( function() {
		jQuery(this).addClass('sideLinkHover');
	}, function() {
		jQuery(this).removeClass('sideLinkHover');
	});

	jQuery("thead th").not(".ignore").hover( function() {
		jQuery(this).addClass('hvr');
	}, function() {
		jQuery(this).removeClass('hvr');
	});

	jQuery("ul.secLevel > li:last").css("border-bottom", "1px solid #ddd");

	/* Added for actor's Home Page - Start*/
	jQuery("#leftNavHomePage").nextAll("#fundsearch").addClass("fundsearchhomepage");
	/* Added for actor's Home Page - End*/
	

	if (parseInt(jQuery("#sideNav").length + jQuery("#userSideNav").length) == 0) {
		jQuery("#contentWrapper").addClass("contentOneCol");

		if (parseInt(jQuery("#advisorbar").length) == 1) {
			jQuery("#advisorbar").prependTo("#mainContent");
			jQuery("#mainContent h1:first").addClass("offset");
		}

	} else {
		jQuery("#advisorbar").prependTo("#sideNav");
		jQuery("#sideNav").prepend("<b class='sn-shad pngfix'></b>");
		if (parseInt(jQuery("#sideBar").length) == 1) {
			jQuery("#contentWrapper").addClass("contentThreeCol");
		} else {
			jQuery("#contentWrapper").addClass("contentTwoCol");
		}
	}

	//LALALA extra stuff

	jQuery("#ppss ul.tabList li:last, #fundInfo ul.tabList li:last").addClass(
			"shadow");

	jQuery(".tabContainer ul.tabList > li:last").removeClass("shadow");

	/**/
	
jQuery("#PF:ppss_main_panelgrid").before('<br class="clear" />');

	jQuery("hr").wrap("<div class='hr'></div>");

	jQuery.fn.axeHeight = function(px) {
		jQuery(this).each( function() {
			var myTallest = 0;
			var children = jQuery(".equal", this);

			children.each( function(i) {
				//alert(jQuery(this).height());
					if (jQuery(this).height() > myTallest) {
						myTallest = jQuery(this).height();
					}
				});

			if (jQuery.browser.msie && jQuery.browser.version == 6.0) {
				children.css( {
					'height' : myTallest
				});
			}
			children.css( {
				'height' : myTallest
			});
		});
		return this;
	};

	jQuery(".equalize").axeHeight();

	jQuery("#advmenu").hide();
	jQuery("#advisorbar a.trigger").hover( function() {
		jQuery(this).addClass("advactive");
	}, function() {
		jQuery(this).removeClass("advactive");
	}).click( function() {
		jQuery(this).toggleClass("advclicked");
		jQuery("#advmenu").css("top", "34px").slideToggle();
	});

	jQuery("input:text, input:password").each( function() {
		var t = jQuery(this).attr("title");

		if (t !== "") {
			jQuery(this).addClass("defval").val(t);

			jQuery(this).focus( function() {
				jQuery(this).removeClass("defval");
				if (jQuery(this).val() == t) {
					jQuery(this).val("");
				}
			});

			jQuery(this).blur( function() {
				if (jQuery(this).val() == "") {
					jQuery(this).addClass("defval").val(t);
				}
			});
		}
		jQuery(this).addClass("txt");
	});

	/***************************************************************************
	 * expand Collapse model, apply to a container holding exp/collapse items
	 **************************************************************************/
	jQuery.fn.initExpCollapse = function(settings) {
		settings = jQuery.extend( {
			speed : 'fast',
			ctrlExpand : 'expandAll',
			ctrlCollapse : 'collapseAll'
		}, settings ? settings : {});

		var globalControls = jQuery('li.expControl a', this);
		var expPanes = jQuery('> li', this).not('.expControl');
		var expTriggers = jQuery('> div:first', expPanes);
		var expContents = jQuery('> div:last', expPanes);
		globalControls.click( function() {
			if (jQuery(this).hasClass(settings.ctrlExpand)) {
				expPanes.addClass('active');
				expContents.slideDown();
			}

			if (jQuery(this).hasClass(settings.ctrlCollapse)) {
				expPanes.removeClass('active');
				expContents.slideUp();
			}
			return false;
		});

		expTriggers.click( function() {
			jQuery(this).parent("li").toggleClass('active');

		});

		expTriggers.click( function() {
			jQuery(this).next(expContents).slideToggle();
		});

		expTriggers.hover( function() {
			jQuery(this).addClass("current");
		}, function() {
			jQuery(this).removeClass("current");
		});
		return this;
	};

	function anchorScroll() {
		function filterPath(string) {
			return string.replace(/^\//, '').replace(
					/(index|default).[a-zA-Z]{3,4}$/, '').replace(/\/$/, '');
		}

		var locationPath = filterPath(location.pathname);

		var scrollElement = 'html, body';
		jQuery('html, body').each( function() {
			var initScrollTop = jQuery(this).attr('scrollTop');
			jQuery(this).attr('scrollTop', initScrollTop + 1);
			if (jQuery(this).attr('scrollTop') == initScrollTop + 1) {
				scrollElement = this.nodeName.toLowerCase();
				jQuery(this).attr('scrollTop', initScrollTop);
				return false;
			}
		});

		jQuery('.anchor a[href*=#]').each(
						function() {
							var thisPath = filterPath(this.pathname)
									|| locationPath;
							if (locationPath == thisPath
									&& (location.hostname == this.hostname || !this.hostname)
									&& this.hash.replace(/#/, '')) {
								if (jQuery(this.hash).length) {
									jQuery(this)
											.click(
													function(event) {
														var targetOffset = jQuery(
																this.hash)
																.offset().top;
														var target = this.hash;
														event.preventDefault();
														jQuery(scrollElement)
																.animate(
																		{
																			scrollTop : targetOffset
																		},
																		500,
																		function() {
																			location.hash = target;
																		});
													});
								}
							}
						});
		}

	anchorScroll();

	if (jQuery("#mainContent .legalinfo").length > 0) {
		jQuery("#contentWrapper").css("padding-bottom", "0");
	}

	if (!jQuery("#userSideNav").length) {
		jQuery("#sideNav").prepend("<b id='cover'></b>");
	}

});

function btnStyle(){
	jQuery("#mainContent").find("input:button, input:submit, input:reset").not(
	".cancel, .go, .inactive, .inactivego, :disabled").wrap(
	"<span class='btn'></span>");
}