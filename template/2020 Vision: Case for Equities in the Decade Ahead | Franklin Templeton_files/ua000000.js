/* detects the client browser and includes the corresponding stylesheet */

/*Added as part of EH by Venu for Cross Frame Scripting Issue*/
var path=window.location.pathname;
try{
        var parenthostname=window.parent.location.hostname;
}catch(err){
        if((path.indexOf('/retail/') != -1) || (path.indexOf('/inst/') != -1) || (path.indexOf('/intl/') != -1)){
                window.top.location=self.location;
        }
}

window.saveNavigator=window.navigator;

function detectBrowser(){
    navigator.version=0;
    navigator.family='';
    var i=0;
    var ua=window.navigator.userAgent.toLowerCase();
    if((i=ua.indexOf('msie'))!=-1){
        navigator.version=parseFloat('0'+ua.substr(i+5),10);
        if(navigator.version<4) navigator.family='ie3';
        else navigator.family='ie4'
    }else if (typeof(window.controllers)!='undefined' && typeof(window.locationbar)!='undefined'){
        i = ua.lastIndexOf('/');
        navigator.version=parseFloat('0'+ua.substr(i+1),10);
        navigator.family = 'gecko';
    }else if((ua.indexOf('mozilla')!=-1) && (ua.indexOf('spoofer')==-1) && (ua.indexOf('compatible')==-1) && (ua.indexOf('opera')==-1)&& (ua.indexOf('webtv')
==-1) && (ua.indexOf('hotjava')==-1)){
        var is_major=parseFloat(navigator.appVersion);
        if(is_major<4) navigator.version=is_major;
        else{
            i=ua.lastIndexOf('/');
            navigator.version=parseFloat('0'+ua.substr(i+1),10);
        }
        navigator.family='nn'+parseInt(navigator.appVersion);
        navigator.family='gecko';
    }

    navigator.DOMCSS1=((navigator.family == 'gecko')||(navigator.family=='ie4'));
}

detectBrowser();

function setInnerHTML(elm,str){
    if(navigator.family=='nn4'){
        elm.document.writeln(str);
        elm.document.close();
    }else if(typeof(elm.innerHTML)!='undefined') elm.innerHTML=str;
}

function newImage(arg){
    if(document.images){
        rslt=new Image();
        rslt.src=arg;
        return rslt;
    }
}

// CSS generation
function genStyle(root){
    var agt=navigator.userAgent.toLowerCase();
    var ns=(document.layers)?true : false;
    var ie=(document.all)?true : false;
    var str='<link rel=\"stylesheet\" type=\"text\/css\" href=\"\/'+root+'\/css\/styles';

    if(ns && (agt.indexOf("mac")==-1)) str+='_ns4.css\">';
    else str+='.css\">';
    document.write(str);

    str='<script language="JavaScript1.2" src="/share/js/xbStyle';
    if (navigator.DOMCSS1) str+='_ie';
    else if(navigator.family=='nn4') str+='_ns4';
    else str+='_noop';
    str+='.js" type="text/javascript"></script>';
    document.write(str);
}