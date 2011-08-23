<link rel="stylesheet" href="<?php echo GL_WEB_PATH; ?>css/gncStyle.css" type="text/css" />
<link rel="stylesheet" href="<?php echo GL_WEB_PATH; ?>css/globalfunds.css" type="text/css" />

<script type="text/javascript">
    var gncLinkMap = new Array();
        //gncLinkMap['template.light.php'] = '#shopping/1';
        gncLinkMap['world-is-prospering.jsf'] = '#prospering/0';
        gncLinkMap['world-is-shopping.jsf'] = '#shopping/0';
        gncLinkMap['world-is-building.jsf'] = '#building/0';
        gncLinkMap['world-is-resource-hungry.jsf'] = '#resource/0';
        gncLinkMap['world-is-connected.jsf'] = '#connected/0';
        gncLinkMap['global-the-new-core-pub.jsf'] = '#globalnewcore/0';
</script>

<h1>Discover a World of Opportunity</h1>

<div id="gnc">
    
    <?php // Tabs ?>
    <ul class="tabs"></ul>

    <?php // Sidebar Area ?>
	<div class="sidebar_area">

        <!-- Signal stuff goes below. -->
        <div id="gncSidebar">
            <div class="fundFinder">
                <span class="fundFinderHead">
					<span id="gncFundCounter" class="count"></span>
					<span class="title"><p>Franklin Templeton Global Funds</p></span>
					<span class="carrot"></span>
				</span>
				<span class="fundFindCTA">FILTER TO VIEW FUNDS BELOW</span>
                <div id="gncFundFinder" class="fundFinderContent open">
                    <form id="gncFundFinderForm" name="gncFundFinderForm">
	                    <span class="fundFinderSelectWrapper">
		                    <h2>Global Investment Categories</h2>
							<span class="checkboxWrapper">
		                        <label for="gncFF2"><input id="gncFF2" name="Global Equity" type="checkbox"/>Global Equity</label>
		                        <label for="gncFF3"><input id="gncFF3" name="Emerging Markets" type="checkbox"/>Emerging Markets</label>
		                        <label for="gncFF4"><input id="gncFF4" name="Global Fixed Income" type="checkbox"/>Global Fixed Income</label>
							</span>
		                    <h2>Region/Country of Interest</h2>
	                        <select id="fundFinderSelect" name="fundFinderSelect">
	                            <option selected>All Regions</option>
	                        </select>
						</span>
                    </form>
                </div>
				<div class="resultsShadow">
					<span class='resultsShadow'></span>
				</div>
                <div id="gncFundFinderResult"></div>	
            </div>	

			<div id="sbAccordion">
				<h2 class="current"><span class="arrow"></span>Global Asset Categories</h2>
				<div class="pane" style="display: block;">
					<ul>
						<li><a href="https://www.franklintempleton.com/funds/global/global-equity">Why Global Equity</a></li>
						<li><a href="https://www.franklintempleton.com/funds/global/emerging-markets">Why Emerging Markets</a></li>
						<li><a href="https://www.franklintempleton.com/funds/global/global-fixed-income">Why Global Fixed Income</a></li>
					</ul>
				</div>
				
				<h2 class="current"><span class="arrow"></span>Portfolio Manager Blogs</h2>
				<div class="pane" style="display: block;">
					<ul>
						<li><a href="http://us.beyondbullsandbears.com/">Beyond Bulls & Bears</a></li>
                        <li><a href="http://mobius.blog.franklintempleton.com/">Mark Mobius: Investment Adventures In Emerging Markets</a></li>
					</ul>
				</div>
				
				<h2><span class="arrow"></span>Financial Advisor Tools</h2>
				<div class="pane">
					<ul>
						<li><a href="#helloWorldContent" class="tab_trigger">Resources: Global &#151; The New Core</a></li>
                        <li><a href="https://www.franklintempleton.com/retail/pages/generic_content/sales_tools/hypos/hypothetical_sales-tools.jsf">Hypothetical Tool</a></li>
                        <li><a href="https://www.franklintempleton.com/retail/pages/generic_content/home/splash_FA/portfoliogenerator.jsf">Portfolio Generator</a></li>
                        <li><a href="https://www.franklintempleton.com/retail/pages/generic_content/sales_tools/2020vision/index.jsf">2020 Vision: The Case for Equities</a></li>
                        <!--
                            Login required. 
                            Register for Access : https://www.franklintempleton.com/retail/jsp_app/access/reg_select.jsp
                            (Why?) : https://www.franklintempleton.com/retail/pages/generic_content/access/why_register.jsf
                        -->
					</ul>
				</div>
				
				<h2><span class="arrow"></span>Tell Us What You Think</h2>
				<form id="feedbackForm" class="pane sidebar_form feedback" action="/siteContentGenericEmailFormActionRequest.do" method="post">
                    <input value="investmentservices@frk.com" type="hidden" name="fromEmailAddress" />
                    <input value="investmentservices@frk.com" type="hidden" name="toAddress" />
                    <input value="Feedback: Global The New Core" type="hidden" name="subject" />
                    <input value="/" type="hidden" name="confirmPageURL" />
					<textarea value="comments" class="required">Questions, comments or content suggestions? Enter your comments here.</textarea>
					<input type="submit" class="button" value="Submit"/>
				</form>
				
				<h2><span class="arrow"></span>Sign Up For Updates</h2>
				<form id="signupForm" class="pane sidebar_form signup" action="/siteContentGenericEmailFormActionRequest.do" method="post">
				    <input value="/" type="hidden" name="confirmPageURL" />
				    <input value="New Subscriber – GNC" type="hidden" name="subject" />
                    <input value="Franklin Templeton Investments" type="hidden" name="fromEmailAddress" />
                    <input value="globalnewcoresubscribe@frk.com" type="hidden" name="toAddress" />
				    
					<input type="text" name="emailAddress" value="Enter your email address" class="required"/>
					<input type="submit" class="button" value="Submit"/>
				</form>
				<div class="sidebar_form confirmation">Thank you for your email.</div>
			</div>
			<div id="social">
				<a href="https://www.facebook.com/franklintempleton?sk=wall"><span class="fb"></span></a>
				<span class="fblike">
					<iframe src="http://www.facebook.com/plugins/like.php?app_id=172333696172361&amp;href=www.franklintempleton.com&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>
				</span>
				<span class="gplus">
					<!-- Place this tag where you want the +1 button to render -->
					<g:plusone size="medium"></g:plusone>

					<!--  Place this tag after the last plusone tag -->
					<script type="text/javascript">
					  (function() {
					    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
					    po.src = 'https://apis.google.com/js/plusone.js';
					    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
					  })();
					</script>
				</span>
			</div>
			<div id="downloads">
				<span id="brochure">
					<span class="image"></span>
					<span class="dlbtn"><a href="https://www.franklintempleton.com/share/pdf/lit/GNC_B.pdf" class="button large">Download the Brochure</a></span>
				</span>
				<span id="prezi">
					<span class="image"></span>
					<span class="dlbtn"><a rel="#overlay" href="http://access.workshopdomain.com/FranklinTempleton/GlobalNewCore/GlobalNewCore.swf" class="button large">Discover a World of Opportunity</a></span>
				</span>
			</div>
        </div>
    </div>


    <div class="wrapper">
    
        <?php // Main Area ?>
        <div class="main_area">
            <div class="panes"></div>
            
            <!-- Additional Pane Content Goes Here -->
            <div class="pane custom" id="globalnewcore">
                <h3 class="title">Global -<br/>The New Core</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <!--div class="pane custom" id="globalnewcore2">
                <h3 class="title">Global 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div-->
            
        </div>
        
        <?php // Video Area ?>
        <div class="video_area">
        
            <!-- Start of Brightcove Player -->
            
            <div style="display:none">
            
            </div>
            
            <!--
            By use of this code snippet, I agree to the Brightcove Publisher T and C 
            found at https://accounts.brightcove.com/en/terms-and-conditions/. 
            -->
            
            <h3>Our Perspective on a World of Opportunity</h3>
            
            <script language="JavaScript" type="text/javascript" src="http://admin.brightcove.com/js/BrightcoveExperiences.js"></script>
            <!--script language="JavaScript" type="text/javascript">
                var params = {};
                params.playerID = "1090026872001";
                params.videoId = "1375772128";
                params.autoStart = "true";
                params.bgcolor = "#f5f6f1";
                params.width = "588";
                params.height = "410";
                params.isVid = "true";
                
                var player = brightcove.createElement("object");
                player.id = playerName;
                var parameter;
                for (var i in params) {
                     parameter = brightcove.createElement("param");
                     parameter.name = i;
                     parameter.value = params[i];
                     player.appendChild(parameter);
                }
                
                var playerContainer = document.getElementById("placeHolder");
                
                brightcove.createExperience(player, playerContainer, true);
                
            </script>
            
            <div id="placeholder"></div-->
            
            <object id="myExperience" class="BrightcoveExperience">
              <param name="bgcolor" value="#f5f6f1" />
              <param name="width" value="588" />
              <param name="height" value="410" />
              <param name="playerID" value="1090026872001" />
              <param name="playerKey" value="AQ~~,AAAAv1s4woE~,9AdfJ6EMauNrZD5m6q7DOBBw0rhqSmis" />
              <param name="isVid" value="true" />
              <param name="isUI" value="true" />
              <param name="dynamicStreaming" value="true" />
            </object>
            
            <!-- 
            This script tag will cause the Brightcove Players defined above it to be created as soon
            as the line is read by the browser. If you wish to have the player instantiated only after
            the rest of the HTML is processed and the page load is complete, remove the line.
            -->
            <script type="text/javascript">brightcove.createExperiences();</script>
            
            <!-- End of Brightcove Player -->
        
        </div>

    </div>
    
</div>

<div id="overlay" class="overlay">
    <div id="overlay_wrapper" class="content_wrapper close_trigger"></div>
    <a href="#" class="close close_trigger">
        <img class="icon close" alt="Close icon" src="<?php echo GL_WEB_PATH; ?>img/space.gif"/>Close
    </a>
</div>


<script src="http://cdn.jquerytools.org/1.2.5/all/jquery.tools.min.js"></script>
<!--script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/lib/jquery.tools.min.js"></script-->
<script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/lib/modernizr-1.7.min.js"></script>
<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.8.1/jquery.validate.min.js"></script>

<script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/configs/constants.js"></script>
<script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/models/gncTabContent.js"></script>
<script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/models/gncEventMediator.js"></script>				
<script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/models/gncFundFinder.js"></script>		
<script type="text/javascript" src="<?php echo GL_WEB_PATH; ?>js/gncGlobal.js"></script>