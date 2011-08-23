//Extended for urlVariable retrieve
	jQuery.extend({
	  getUrlVars: function(){
	    var vars = [], hash;
					var uri = window.location.href.slice(window.location.href.indexOf('?') + 1);
	    var hashes = uri.split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	      hash = hashes[i].split('=');
	      vars.push(hash[0]);
	      vars[hash[0]] = hash[1];
	    }
	    return vars;
	  },
	  getUrlVar: function(name){
	    return jQuery.getUrlVars()[name];
	  }
	});

// Landing Page Home Quiz Ajax Behavior
jQuery(document).ready(function() {
    jQuery("form.quiz input:submit").live("click",function(e){
		var $form = jQuery(this).parents(".quiz");

		var req = $form.attr("action") + "?" + $form.serialize();
		$form.parent("div").load(req);
		// Call event tracking code
		ntptEventTag('location=2020Landing&content=BottomRight&subcontent=' + $form .find("#quizId").val() + '&tab=-&drawer=-&drawertab=-&ev=LinkClicked&ev_value=' + $form .attr("action"));
		//console.log('location=2020Landing&content=BottomRight&subcontent=' + $form .find("#quizId").val() + '&tab=-&drawer=-&drawertab=-&ev=LinkClicked&ev_value=' + $form .attr("action"));
		e.preventDefault();
		return false;
    });


});


/* Listen for download tracking */
jQuery('body').click(function(e) {
	var target = jQuery(e.target).closest('a');
	if (target.length > 0) { // if its a link and not something else, like a quiz button
		//check download || regular link
		var h = jQuery(e.target).attr('href');
		var evType = "LinkClicked";
		var dlType = null;
		var conloc = null; //2020 landing specific
		
		if ( h.match(/(\.pdf|\.doc|\.ppt|\.doc)/gi) ) {
			evType = "download";
			if ( h.match("stream_pdf") ) { //if streaming pdf, strip out app portion for url
			  h = h.replace(/(.*)relativeDocPath=/gi,"").replace(/'\);$/gi, "");
			} else if ( h.match(/^javascript:newPop/i) ) { //if in newPop, strip out
			  h = h.replace(/javascript:newPop\('/gi,"").replace(/'\);$/gi, "");
			}

			var l = h.lastIndexOf('.');
			dlType = h.substr(l + 1).toLowerCase().replace(/'\);$/gi, "");
		}
	
		if (target.parents("#listContainer").length > 0) {
			conloc = "TopRight";
		} else	if (target.parents(".columnA").length > 0) {
			conloc = "BottomLeft";
		} else	if (target.parents(".columnB").length > 0) {		
			conloc = "BottomCenter";
		} else	if (target.parents(".columnC").length > 0) {
			conloc = "BottomRight";
		}

		if (dlType != null ) {			
			ntptEventTag('location=2020Landing&content='+conloc+'&subcontent=-&tab=-&drawer=-&drawertab=-&ev=' + evType + '&ev_value=' + escape(h) + '&filetype='+dlType);
			//console.log('location=2020Landing&content='+conloc+'&subcontent=-&tab=-&drawer=-&drawertab=-&ev=' + evType + '&ev_value=' + h + '&filetype='+dlType);
		} else {
			ntptEventTag('location=2020Landing&content='+conloc+'&subcontent=-&tab=-&drawer=-&drawertab=-&ev=' + evType + '&ev_value=' + escape(h) );
			//console.log('location=2020Landing&content='+conloc+'&subcontent=-&tab=-&drawer=-&drawertab=-&ev=' + evType + '&ev_value=' + h );
		}

	}
});

/* Overriding pop-up functions in win_pop.js */
function Video(url){
  var plocation = jQuery("#page2020ID").val();
  
	infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=950,height=650,left=0,top=0');
 ntptEventTag('location='+ plocation +'&content=Funds&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev=Video');
 //console.log('location='+ plocation +'&content=Funds&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev=Video');
}

function newPop(uri) {	
	infowin[num++] = window.open(uri, 'Popup', 'menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=750,height=500,left=0,top=0');
}
