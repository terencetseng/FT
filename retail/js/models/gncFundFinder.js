/**
*	Creates an instance of the GNC Fund Finder
*	@this {gncFundFinder}
*	@class gncFundFinder
*	@author ttseng@signaltonoise.com
*
*	Example: var fundFinder = new gncFundFinder();
*/
var gncFundFinder = function(){
	
	/*
	*	gncFundJSON contains the path to the Fund Finder JSON file. 
	*	@constant
	*/
	var gncFundsJSON = GL_WEB_PATH+"json/GNCFunds.min.json";
	
	/*
	*	this.init();
	*	Initializes the Fund Finder.
	*	@constructor
	*
	*	Example: fundFinder.init();
	*/
	this.init = function(){
		gncEventMed.initFundFinder();
		
		this.marketTotal = 0;
		this.marketList = new Array();
		this.fundList = new Array();
		this.regionList = new Array();
		this.regions = new Object();
		this.funds = new Object();
		this.fundCount = 0;
		$.ajax({
			context:this,
			url:gncFundsJSON,
			dataType:"json",
			success: function(data){
				this.setMarkets(data)
				this.setRegions();
				this.updateFunds();
				$("#gncSidebar").trigger("fundFinderJSONReady");
			}
		});
	};
	
	/*
	*	this.setNumMarkets();
	*	Modifier for this.marketTotal.
	*	@param {Array} obj The JSON object containing Fund data. 
	*/
	this.setNumMarkets = function(obj){
		this.marketTotal = obj.market.length;
	};
	
	/*
	*	this.setMarkets();
	*	Modifier for this.marketList.
	*	@param {Array} obj The JSON object containing Fund data. 
	*/	
	this.setMarkets = function(obj){
		this.setNumMarkets(obj);
		for(var i=0;i<this.marketTotal;i++){
			this.marketList.push(obj.market[i]);
		}
	};
	
	/*
	*	this.setRegions();
	*	Modifier for this.regions.
	*/
	this.setRegions = function(){
		for(var i=0;i<this.marketList.length;i++){
			for(var j=0;j<this.marketList[i].categories.length;j++){
				for(var k=0;k<this.marketList[i].categories[j].funds.length;k++){
					for(var l=0;l<this.marketList[i].categories[j].funds[k].region.length;l++){
						if(this.regions[this.marketList[i].categories[j].funds[k].region[l]] == undefined){
							this.regions[this.marketList[i].categories[j].funds[k].region[l]] = true;
						}
					}
				}
			}
		}
		
		for (var key in this.regions){
			this.regionList.push(key);
		}
	};
	
	/*
	*	this.updateFunds();
	*	Method to update fund data.
	*	@param {Array} obj The Fund Finders form values serialized into an array. 
	*/
	this.updateFunds = function(obj){
		if(obj == null){
			//initial load -> get total funds			
			this.queryFunds([1,2,3], "All Regions");
		}else{
			//every other load -> get funds based on selected inputs
			var c = new Array();
			var m = "";
			for(var i=0;i<obj.length;i++){
				if(obj[i].name == "All" || obj[i].name == "Global Fixed Income" || obj[i].name == "Global Equity" || obj[i].name == "Emerging Markets"){
					c.push(obj[i].name);
				}else{
					m = obj[i].value;
				}
			}
			
			//we have the filter parameters, so query the json file now. 
			this.queryFunds(c, m);
			
			//this.funds now has the list of funds to display, so build the results now. 
			this.buildResults();
		}
	}
	
	/*
	*	this.queryFunds();
	*	@param {Array} c An array of selected categories.
	*	@param {String} m The currently selected Region or Market.
	*/
	this.queryFunds = function(c, m){
		//reset the funds object
		this.funds = new Object();
		this.fundCount = 0;
		//if c.length == 3 that means all the checkboxes are selected. 
		if((m == "All Regions" && c.length == 0) || (m == "All Regions" && c.length == 3)){
			for(var i=0; i<this.marketList.length; i++){
				for(var j=0; j<this.marketList[i].categories.length;j++){
					for(var k=0;k<this.marketList[i].categories[j].funds.length;k++){
						if(this.funds[this.marketList[i].categories[j].funds[k].name] == undefined){
							this.funds[this.marketList[i].categories[j].funds[k].name] = this.marketList[i].categories[j].funds[k].url;
							this.fundCount++;
						}
					}
				}
			}
		}else{
			if(m == "All Regions"){
				for(var l=0;l<c.length;l++){
					for(var i=0; i<this.marketList.length; i++){
						for(var j=0; j<this.marketList[i].categories.length;j++){
							if(this.marketList[i].categories[j].name == c[l]){
								for(var k=0;k<this.marketList[i].categories[j].funds.length;k++){
									if(this.funds[this.marketList[i].categories[j].funds[k].name] == undefined){
										this.funds[this.marketList[i].categories[j].funds[k].name] = this.marketList[i].categories[j].funds[k].url;
										this.fundCount++;
									}
								}
							}
						}
					}
				}
			}else if(this.regions[m] != null){
				for(var l=0;l<c.length;l++){
					for(var i=0; i<this.marketList.length; i++){
						for(var j=0; j<this.marketList[i].categories.length;j++){						
							for(var k=0;k<this.marketList[i].categories[j].funds.length;k++){
								for(var n=0; n<this.marketList[i].categories[j].funds[k].region.length; n++){
									if(this.funds[this.marketList[i].categories[j].funds[k].name] == undefined && this.marketList[i].categories[j].funds[k].region[n] == m && this.marketList[i].categories[j].name == c[l]){
										this.funds[this.marketList[i].categories[j].funds[k].name] = this.marketList[i].categories[j].funds[k].url;	
										this.fundCount++;								
									}
								}
							}							
						}
					}
				}
			}else{
				for(var l=0;l<c.length;l++){
					for(var i=0; i<this.marketList.length; i++){
						if(this.marketList[i].name == m){
							for(var j=0; j<this.marketList[i].categories.length;j++){
								if(this.marketList[i].categories[j].name == c[l]){
									for(var k=0;k<this.marketList[i].categories[j].funds.length;k++){
										if(this.funds[this.marketList[i].categories[j].funds[k].name] == undefined){
											this.funds[this.marketList[i].categories[j].funds[k].name] = this.marketList[i].categories[j].funds[k].url;
											this.fundCount++;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		$("#gncFundCounter").html(this.fundCount);
	}
	
	/*
	*	this.buildResults();
	*	Method to build results HTML and print onto page.
	*/
	this.buildResults = function(){
		
		var html = "<ul>";
		for(var key in this.funds){
			html += "<li><a href='" + this.funds[key] +"'>" + key + "</a></li>";
		}
		html += "</ul>";
		
		$("div.resultsShadow").css({"display":"block"});
		$("#gncFundFinderResult").html(html).slideDown(400);
	};
	
	/*
	*	this.buildRegionSelect()
	*	Method to build the Region/Market drop down menu.
	*/
	this.buildRegionSelect = function(){
		var html = "";
		html += "<option disabled></option>";
		html += "<option disabled>Regions</option>";
		html += "<option disabled>-------------</option>";
		
		for(var i=0;i<this.regionList.length;i++){
			html += "<option>" + this.regionList[i] + "</option>";
		}
		
		html += "<option disabled></option>";
		html += "<option disabled>Countries</option>";
		html += "<option disabled>-------------</option>";

		for(var i=0;i<this.marketTotal;i++){
			html += "<option>" + this.marketList[i].name + "</option>";
		}
		$("#fundFinderSelect").append(html);
	};
}