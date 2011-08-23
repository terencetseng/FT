//existing
var infowin = [];
var num = 0;

function infoWinPop(url){
	
    infowin[num++] = window.open(url,'infowin','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=366,height=270,left=0,top=0');
	unicaTracking(url); //calls unica function
    if(infowin[num-1] && !infowin[num-1].closed && infowin[num-1].focus()) {
        infowin[num-1].focus();
    }
}
function infoWinPop2(url){
	 
    infowin[num++] = window.open(url,'infowin2','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=750,height=400,left=0,top=0');
 
	unicaTracking(url); 
}
function infoWinPop3(url){
		
    infowin[num++] = window.open(url,'infowin3','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=750,height=400,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop4(url,frompage){
		
    infowin[num++] = window.open(url,'infowin4','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=416,height=310,left=0,top=0');
	if(frompage=="OrderLiterature"){
		OLunicaTracking(url,"LinkClicked"); 
	}else{
	  unicaTracking(url); 
	}
}
function infoWinPop5(url){
		
    infowin[num++] = window.open(url,'infowin5','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=620,height=521,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop6(url){
	
    infowin[num++] = window.open(url,'infowin66','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=520,height=350,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop7(url){
		
    infowin[num++] = window.open(url,'infowin77','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=366,height=190,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop400x450(url){
	
    infowin[num++] = window.open(url,'infowin6','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=400,height=450,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop400(url,winHeight){
	
    infowin[num++] = window.open(url,'infowin7','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=400,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop450(url,winHeight){
	
    infowin[num++] = window.open(url,'infowin8','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=450,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
    if(infowin[num-1] && !infowin[num-1].closed && infowin[num-1].focus()) {
        infowin[num-1].focus();
    }
}
function infoWinPop500(url,winHeight){
		
    infowin[num++] = window.open(url,'infowin9','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=520,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop550(url,winHeight){
		
    infowin[num++] = window.open(url,'infowin9','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=570,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop600x450(url){
		
    infowin[num++] = window.open(url,'infowin10','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=600,height=450,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop600(url,winHeight){
		
    infowin[num++] = window.open(url,'infowin11','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=0,status=0,width=600,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop640(url,winHeight){
		
    infowin[num++] = window.open(url,'infowin12','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=0,status=0,width=640,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop645(url,winHeight){
		
    infowin[num++] = window.open(url,'infowin12','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=0,status=0,width=645,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop760x450(url){
		
    infowin[num++] = window.open(url,'infowin13','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=760,height=450,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPop760(url,winHeight){
		
    infowin[num++] = window.open(url,'infowin14','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=0,status=0,width=760,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop770(url,winHeight){
    infowin[num++] = window.open(url,'infowin14','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=770,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
}
function infoWinPop800x600(url){
    infowin[num++] = window.open(url,'infowin12','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=800,height=600,left=0,top=0');
	unicaTracking(url); 
}
function siteTour(url){
    infowin[num++] = window.open(url,'infowin15','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=760,height=450,left=0,top=0');
	unicaTracking(url); 
}
function WMPLow(url){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=509,height=460,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=audio');
}
function WMPHigh(url){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=670,height=460,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=audio');
}
function WMPAudio(url){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=509,height=287,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=audio');
}
function Video(url){
  infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=0,status=0,width=950,height=650,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=video');
}
function Audio(url){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=375,height=330,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=audio');
}
function collSavingCalc(url){
    infowin[num++] = window.open(url,'infowin17','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=720,height=580,left=0,top=0');
	unicaTracking(url); 
}
function infoWinPopCommentary(url){
    infowin[num++] = window.open(url,'infowin22','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=790,height=570,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=video');
}

//Added for chart img popup
function chartWinPop(url){
	var infowin = window.open(url,'infowin','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=800,height=500,left=0,top=0');
	unicaTracking(url); 
	infowin.focus();
}
// Added for the Site Split implementation.
function infoSalesWinPop770x580(url){
    var infosaleswin = window.open(url,'infowin13','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=770,height=580,left=0,top=0');
	unicaTracking(url); 
    infosaleswin.focus();
}
function infoSalesWinPop770x650(url){
    infowin[num++] = window.open(url,'infowin13','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=770,height=650,left=0,top=0');
	unicaTracking(url); 
    infowin[num-1].focus();
}

function checkCrossRef(url, newURL, isCrossRef) {
    if(isCrossRef) {
        infoSalesWinPop770x580(newURL);
    } else {
        window.location=url;
		unicaTracking(url); 
    }
}

function infoCSRWinPop800x600(url){
    infowin[num++] = window.open(url,'infowin12','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=800,height=600,left=0,top=0');
    unicaTracking(url); 
	if(infowin[num-1] && !infowin[num-1].closed && infowin[num-1].focus()) {
        infowin[num-1].focus();
    }
}

function infoWinPop6(url,winWidth,winHeight,title){
    var Xpos = ((screen.width - winWidth) / 2);
    var Ypos = ((screen.height - winHeight) / 2);
    infowin[num++] = window.open(url,title,'menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width='+ winWidth +',height='+ winHeight +',left='+ Xpos +',top='+ Ypos);
	unicaTracking(url); 
    if(infowin[num-1] && !infowin[num-1].closed && infowin[num-1].focus()){
        infowin[num-1].focus();
    }
}

function infoWinPop870(url,winHeight){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=870,left=0,top=0,height='+ winHeight);
	unicaTracking(url); 
    if(infowin[num-1] && !infowin[num-1].closed && infowin[num-1].focus()) {
        infowin[num-1].focus();
    }
}

function infoCSRWinPop770x580(url){
    infowin[num++] = window.open(url,'infowin13','menubar=1,toolbar=1,location=1,resizable=1,scrollbars=1,status=1,width=770,height=580,left=0,top=0');
	unicaTracking(url); 
    if(infowin[num-1] && !infowin[num-1].closed && infowin[num-1].focus()) {
        infowin[num-1].focus();
    }
}


//This function is added for CSR Site Only
function checkCSRCrossRef(url, newURL, isCrossRef) {
    if(isCrossRef) {
        infoCSRWinPop770x580(url);
    } else {
        window.location=url;
    }
	unicaTracking(url); 
}

/* the below function 'infoWinPop8' can be used to open a pop-up when there is a need to customize many attributes, but a suitable function is not available among the above functions. The attributes that can be customized are given below:

directories=[yes|no|1|0]
menubar=[yes|no|1|0]
toolbar=[yes|no|1|0]
location=[yes|no|1|0]
resizable=[yes|no|1|0]
scrollbars=[yes|no|1|0]
status=[yes|no|1|0]
titlebar=[yes|no|1|0]
width=number
height=number
left=number
top=number

For instance, if u need to enable scrollbars, we can set scrollbars=1 or scrollbars=yes and scrollbars=0 if not required. They can be passed as shown in the example below:

<!--
<script language="JavaScript">
var winOptions = 'menubar=0,toolbar=0,location=0,resizable=0,scrollbars=1,status=0,width=1020,height=200,left=45,top=55';
</script>
//-->

The above code should preferably be within the <head> tag
*/

function infoWinPop8(url,winOptions){
        infowin[num++] = window.open(url,'',winOptions);
		unicaTracking(url); 
}

// for closing the pop-ups. This is achieved on the unload event of a document.
onunload = function () {
	//alert('number of pop-ups open :' + num);
        //alert('popups not closed');
        for(var i=0; i<infowin.length; i++) {
        	infowin[i].close();
        }
	infowin.length=num=0;
}

//end existing

//new implementation of window.open script
function winPopup(url) {
	infowin[num++] = window.open(url,'infowin2','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=750,height=400,left=0,top=0');
	unicaTracking(url); 
}

//used for testing correct video check for unica remove after solution is found

function Video1(url){
  infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=1,scrollbars=0,status=0,width=950,height=650,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=video');
}
function Video2(url){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=662,height=500,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=video');
	
}
function Video3(url, contentType){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=662,height=500,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=video');
	
}
function Video4(url){
    infowin[num++] = window.open(url,'infowin16','menubar=0,toolbar=0,location=0,resizable=0,scrollbars=0,status=0,width=662,height=500,left=0,top=0');
	ntptEventTag('ev_value=' + escape( url )  + '&ev=video');
	
}

//file extension check for UNICA tagging
function unicaTracking(url) {

	if ( url.match("stream_pdf") ) { //if streaming pdf, strip out app portion for url
	  url = url.replace(/(.*)relativeDocPath=/gi,"");
	}

	var lastIndexOfDot = url.lastIndexOf('.');
	var contentType = url.substr(lastIndexOfDot + 1).toLowerCase();
	url=escape(url);
	switch(contentType) {
		case (contentType = 'pdf'):
			ntptEventTag('ev_value=' + url + '&ev=download'+'&filetype=pdf');
			break;
		case (contentType = 'ppt'):
			ntptEventTag('ev_value=' + url + '&ev=download'+'&filetype=ppt');
			break;
		case (contentType = 'doc'):
			ntptEventTag('ev_value=' + url + '&ev=download'+'&filetype=doc');
			break;	
		case (contentType = 'swf'):
			ntptEventTag('ev_value=' + url + '&ev=download'+'&filetype=swf');
			break;
		case (contentType = 'html'):
		case (contentType = 'htm'):
			ntptEventTag('ev_value=' + url + '&ev=linkclicked'+'&filetype=htm');
			break;	
		case (contentType = 'vcs'):
			ntptEventTag('ev_value=' + url + '&ev=download'+'&filetype=vcs');
			break;	
		case (contentType = 'jpg'):
		case (contentType = 'jpeg'):
		case (contentType = 'gif'):
			ntptEventTag('ev_value=' + url + '&ev=download'+'&filetype=img');
			break;	
		case (contentType = 'jsp'):
			ntptEventTag('ev_value=' + url + '&ev=linkclicked'+'&filetype=jsp');
			break;
		/*added for new page jsf redesign*/	
		case (contentType = 'jsf'):
			ntptEventTag('ev_value=' + url + '&ev=linkclicked'+'&filetype=jsf');
			break;
	    }
}
function OLunicaTracking(url,ev) { 

	var lastIndexOfDot = url.lastIndexOf('.');
	var contentType = url.substr(lastIndexOfDot + 1).toLowerCase();
	url=escape(url);
	switch(contentType) {
		case (contentType = 'pdf'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=pdf');
			break;
		case (contentType = 'ppt'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=ppt');
			break;
		case (contentType = 'doc'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=doc');
			break;	
		case (contentType = 'swf'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=swf');
			break;
		case (contentType = 'html'):
		case (contentType = 'htm'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=htm');
			break;	
		case (contentType = 'vcs'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=vcs');
			break;	
		case (contentType = 'jpg'):
		case (contentType = 'jpeg'):
		case (contentType = 'gif'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=img');
			break;	
		case (contentType = 'jsp'):
			ntptEventTag('location=OrderLitSearchResults&content=-&subcontent=-&tab=-&drawer=-&drawertab=-&ev_value=' + url + '&ev='+ev+'&filetype=jsp');
			break;	
		default:
				break;
	}
}


function newPop(uri) {

	var url=uri.split("&&");
	window.open(url[0], 'Popup', 'menubar=0,toolbar=0,location=0,resizable=1,scrollbars=1,status=0,width=750,height=500,left=0,top=0');

	if (url[1] == "OrderLiterature"){
		OLunicaTracking(url[0],"download");
	}
	else if (url[1] != "fundLiterature"){
		unicaTracking(url[0]);
	}
	else {
		unicaTracking(url[0]);
	}
}


/*added for Galileo 2.0 - open document links in a pop-up window replace .xhtml links as .jsf.*/


if (typeof jQuery != 'undefined') {
  jQuery(document).ready(function() {
		replaceDocURL();
	});
}

function replaceDocURL(){
  /*array of matching anchor types*/
  window.ancDocArr = jQuery('a[href*=.pdf], a[href*=.doc], a[href*=.ppt], a[href*=.docx]');
  window.ancXhtmlArr = jQuery('a[href*=.xhtml]');

  ancDocArr.each(function(){
    var evalStr = this.href;

    //legacy infoWinPop js
    if ( evalStr.match("^javascript:(.*)info") ) {
	    evalStr = evalStr.replace(/(javascript:(.*)info(\D*)(\d*)(x?)(\d*)\('+)/gi,"").replace(/('\)+)(\D*)$/gi,"");
    }

    if ( !evalStr.match("^javascript:newPop") ) {
    //we force whatever popup we want here by replacing href attr
    	this.href = "javascript:newPop('"+evalStr+"');";
    }

    //remove target attr to prevent 2 windows
    jQuery(this).removeAttr("target");

	});

  ancXhtmlArr.each(function(){
		/*change xhtml to jsf*/
		var xhtmlVal = this.href;
	  this.href = xhtmlVal.replace(".xhtml", ".jsf");
	});
 }

/*Galileo 2.0 changes end*/