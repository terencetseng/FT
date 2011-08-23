/**
*	Creates an instance of the GNC landing page Event Mediator
*	@this {gncEventMediator}
*	@class gncEventMediator
*	@author ttseng@signaltonoise.com
*
*	Example: var eventMediator = new gncEventMediator();
*/
var gncEventMediator = function(){
	/*
	*	this.initFundFinder();
	*	Initializes the Fund Finders Event Mediator.
	*	@constructor
	*
	*	Example: eventMediator.initFundFinder();
	*/
	this.initFundFinder = function(){
		$("#gncSidebar .gncSidebarHead").bind("click", function(evt){
			var t = $(evt.target.parentNode.getElementsByTagName("div")[0]);
			(t.hasClass("open")) ? t.removeClass("open") : t.addClass("open");
		});

		$("#gncSidebar").bind("fundFinderJSONReady",function(obj){
			gncFundFinder.buildRegionSelect();
		});
		
		$("#gncSidebar input[type='checkbox']").bind("change", function(evt){
			if(evt.target.id == "gncFF2" || evt.target.id == "gncFF3" || evt.target.id == "gncFF4"){
				var form = getFundFinderValues();
				gncFundFinder.updateFunds(form);
			}
		});
		
		$("#gncSidebar select").bind("change",function(evt){
			var form = getFundFinderValues();
			gncFundFinder.updateFunds(form);
		});
	};
	
	/*
	*	getFundFinderValues();
	*	Method to get the values of the inputs in the Fund Finder form.
	*	@private
	*/
	var getFundFinderValues = function(){
		var ff2 = $("#gncFF2").attr("checked");
		var ff3 = $("#gncFF3").attr("checked");
		var ff4 = $("#gncFF4").attr("checked");

		if(ff2 == false && ff3 == false && ff4 == false){
			$("#gncFF2").attr("checked", true);
			$("#gncFF3").attr("checked", true);
			$("#gncFF4").attr("checked", true);
		}
		
		return $("#gncFundFinderForm").serializeArray();
	};
}