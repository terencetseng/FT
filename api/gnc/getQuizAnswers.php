<?php
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" ); 
header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" ); 
header("Cache-Control: no-cache, must-revalidate" ); 
header("Pragma: no-cache" );
header("Content-Type: application/json; charset=utf-8");

function contentData () {
    
    $data = array();
    
    /* set whether the test was success or failure */
    $contentData['state'] = 'success';
    
    /* handle errors and conduct test (future), or 
     * just pass the data along (now)
     */
    if (isset ($_REQUEST['questionId']) && $_REQUEST['questionId']) {
        //array_push($data, $_REQUEST['questionId']);
    }
    if (isset ($_REQUEST['answerId']) && $_REQUEST['answerId']) {
        //array_push($data, $_REQUEST['answerId']);
    }
    
    return $data;
}

//Create the JSON response.
sleep(1);
//if (isset ($_REQUEST['SESSION_ID']) && $_REQUEST['SESSION_ID']) {
$jsonResponse = json_encode(contentData());
//} else {
    
//}

// Put json arr into callback get param namespace. This resolves loading an external json request in jquery.getJSON() method.
if ($_REQUEST['callback']) {
	echo $_REQUEST['callback'].'('. $jsonResponse .')';
} else {
	echo $jsonResponse;
}