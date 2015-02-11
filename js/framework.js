var DESIGN_MODE = !true;

var curPage = 0;

var curPageData;// = $.extend({}, pageData[curPage]);
var curKeySeq = "";
var validateKeySeq = "";
var seqLen;
var canTakeKeyDown = true;
var correctClick=false;
var incorrectMsg=false;
var isShowDropdown=false;
var isDropdownSeqLen;


$(document).keydown(function(e) { //Should be the FIRST keydown handler
	
});

$(document).keydown(function(e) {
	if (!canTakeKeyDown && ((e.which==121 && !event.shiftKey) || e.which==18))
		return false;
		
	canTakeKeyDown = false;
	document.title = e.which;
	var curChar = String.fromCharCode(e.which);	
	if (e.which == 27) {
		curKeySeq = "";
	} else {
		if (curKeySeq=="" && e.which==121 && !event.shiftKey) 
			curChar = String.fromCharCode(18);	
			
		curKeySeq += curChar;		
	}
	
	console.log(event.shiftKey+"in key down="+e.which)
	return handleKey();
});

$(document).keyup(function(e) {
	canTakeKeyDown = true;
	console.log(event.shiftKey+"key up..."+isShowDropdown)
	
	if(isShowDropdown=="true" || isShowDropdown==true){
		incorrectMsg=true;
		//$("#questioncontainer").html('');
		$("#question").css({"left":"10px","top":"4px"});
		console.log("inside iff...in keyup")
		doDropdownkeyHandler(event.which);
		
	}
	if(!incorrectMsg){
		//console.log("call incorrect...")			
		doKeyWrongAction();
	}
	
});

function handleKey() {
	var allowedKeys;
	var retVal = true;
	
	seqLen = curKeySeq.length;
	var matchCount = 0;
	var actionDone = false;
	$(".keypanel").remove();
	document.title = "";
	keysDisplayed = [];	
	console.log("handlekey="+seqLen)
	if (seqLen==1 && curKeySeq=='\x12' && !isShowDropdown && !isShowFileTab) {
		retVal = false;
		incorrectMsg=true;
		for(var i in keyLevel1Action) {
			matchCount++;
			displayKey(i, keyLevel1Action[i], false);					
		}
		//console.log("ALT..."+isShowDropdown)
	} else {
		incorrectMsg=false;
		//this code is used to change the navigation image according to the selected tab
		if (seqLen==2 && curKeySeq.indexOf('\x12')==0) {				
			if (keyLevel1Action[curKeySeq.substring(1,2)]){
				incorrectMsg=true;
				console.log("--------"+keyLevel1Action[curKeySeq.substring(1,2)][4].substring(1))
				actionLoadPage(keyLevel1Action[curKeySeq.substring(1,2)][4].substring(1));
			}else{
				incorrectMsg=false;
			}
		} 
				
		else if (seqLen==3 && curKeySeq.indexOf('\x12')==0 && curKeySeq.indexOf('F')==1) {		
			changeFileMenuTab(curKeySeq.substring(2,3));			
		}
		console.log("hhhhhhh"+seqLen+"---"+curKeySeq.indexOf('\x12')+"---"+curKeySeq.indexOf('F'))
		for(var i=0;i<keyData[curPage].length;i++) {
			
			if (keyData[curPage][i][4].indexOf(curKeySeq) == 0) {			
				retVal = false;				
				if (seqLen==1) {
					matchCount++;
					//NO USE: displayKey(keyData[curPage][i][4].substring(1,2), keyLevel1Action[keyData[curPage][i][4].substring(1,2)], false);
				} else if (keyData[curPage][i][4] == curKeySeq) {
					isDropdownSeqLen=seqLen;
					doKeyAction(curKeySeq);
					curKeySeq = "";					
					break;
				} else if (seqLen>1) {
					if (seqLen == 2 && !actionDone) {
						
						if(curKeySeq.substring(1,2) == "F") {
							actionDone = false;
						} else {
							actionDone = true;
						}
						
						$(keyLevel1Action[curKeySeq.substring(1,2)][4]).each(function(idx, item) {							
							doAction(item, false);
						});
					} else if (seqLen == 3 && !actionDone) {
						actionDone = true;
												
						$(keyLevel1Action[curKeySeq.substring(1,2)][4]).each(function(idx, item) {							
							doAction(item, false);
						});
					}
					matchCount++;
					console.log(isShowFileTab+"cccccccccc="+keyData[curPage][i][4].substring(seqLen))
					if(isShowFileTab){
						displayKey(keyData[curPage][i][4].substring(seqLen),keyData[curPage][i],(keyData[curPage][i][5]=='Y'));
					}else{
						displayKey(keyData[curPage][i][4].substring(seqLen>2?2:seqLen),keyData[curPage][i],(keyData[curPage][i][5]=='Y'));					
					}
				}
			}
		}
		console.log(event.shiftKey+"=ctrl="+event.which)
		//actionOffice(seqLen)
		if(isShowRightClickMenu){
			doRightClickKeyAction(event.which)
		}
		else if(isShowFileTab) {
			if(event.which == 37 || event.which == 38 || event.which == 39 || event.which == 40)
				doFileMenuKeyHandler(event.which)
			else 
				keyHandler(event.which,event.ctrlKey,event.shiftKey,event.altKey);
		} else {
			keyHandler(event.which,event.ctrlKey,event.shiftKey,event.altKey);
		}
		if(isDropdownSeqLen==3 && isShowDropdown=="true"){
			for(var i in dropDownKeys) {
				//	matchCount++;
				displayKey(i, dropDownKeys[i], false);					
			}			
		}
		if(event.shiftKey && event.which==121){doRightClickUsingKeys($("#rightclickmenucontainer"));console.log("ssssss");}
	}
	if (matchCount==0) {
		if ('\x12\x79'.indexOf(curKeySeq.substring(curKeySeq.length-1))>-1) {retVal = false;}
		curKeySeq = "";
	}

	return retVal;
}

var keysDisplayed = [];

function doKeyWrongAction() {
	//console.log("Wrong key pressed");
	showIncorrect();
}

function doKeyAction(keySeq) {
	keysDisplayed = [];
	$(".keypanel").remove();
	doAction("a_"+keySeq, false);
}

function displayKey(text, pos, isDehighlight) {
	if (keysDisplayed.indexOf(text) > -1) return;
	keysDisplayed[keysDisplayed.length] = text;
	console.log("in displayKey..."+text);
	var gCtrl=$("#glasscontainer")
	var newItem = $("<div class='keypanel' style='background-color:#404040;text-align:center;color:white;font-family:verdana;font-size:12px;position:absolute;left:"+pos[0]+"px;top:"+pos[1]+"px;width:20px;height:16px;cursor:default;'>"+text+"</div>");
	if (isDehighlight) newItem.css("opacity", "0.5");
	
	if(isShowDropdown){$("#questioncontainer").append(newItem)}else{
	gCtrl.append(newItem);}
}

function keyHandler(curKey,ctrlKey,shiftKey,altKey){
	console.log("keyHandler--"+curKey+"---"+shiftKey);
	var correctKey,deadKey,nextPath;
	for(var i=0; i<questionHotspots.length;i++){
		if(currentSegment==questionHotspots[i].id){
			correctKey=questionHotspots[i].actions.keys.keyUp.correct
			deadKey=questionHotspots[i].actions.keys.keyUp.dead
			for(var j=0; j<correctKey.length; j++){
				if(correctKey[j].ctrl == String(ctrlKey) && correctKey[j].shift == String(shiftKey) && correctKey[j].alt == String(altKey) &&
				correctKey[j].seqLen == seqLen && correctKey[j].page == curPage && correctKey[j].code == curKey){
					nextPath=correctKey[j].nextPath;
					isShowDropdown=correctKey[j].dropDown;
					for(var k=0; k<questionData.length;k++){						
						if(nextPath == questionData[k].id){
							currentSegment=questionData[k].id;
							incorrectMsg=true;
							loadSegments(questionData[k].path, questionData[k].id)
							break;
						}
					}
					break;
				}
			}
			
			for(var d=0;d<deadKey.length;d++){				
				if(deadKey[d].ctrl == String(ctrlKey) && deadKey[d].shift == String(shiftKey) && deadKey[d].alt == String(altKey) &&
				deadKey[d].seqLen == seqLen && deadKey[d].page == curPage && deadKey[d].code == curKey){
					incorrectMsg=true;
					event.preventDefault();
				}
			}
			
			break;
		}
	}
	
		
}

function doClickAction(ctrl) {	
	console.log("in fw.js=click="+ctrl.id.substring(2,3));
	var currItem=ctrl.id.substring(2);
	if(currItem=="Breaks"){
		isShowDropdown = true;
		$("#question").css({"left":"10px","top":"4px"});
	}else if(ctrl.id.substring(2,3)=="F"){
		$("#questioncontainer").html('');
		$("#question").remove();
		
	}
	doAllAction(ctrl, 4);
}
var test;
function doOverAction(ctrl) {	
	//console.log("ctttl="+ctrl.id+"---"+isShowRightClickMenu)
	if(isShowRightClickMenu){
		test=ctrl.id.split('_')[2]
		
		if(test=="submenu"){
			console.log("if");
			var xPos = menuData.marks[ctrl.id][0];
			var yPos = menuData.marks[ctrl.id][1];
			
			//subMenuHandler(xPos, yPos);
			//$("#submenu").show();
		}else if(test==""){
			console.log("else."+test)
		}
		clearKeyHighlights();
	}
	doAllAction(ctrl, 5);
}

function doOutAction(ctrl) {
	doAllAction(ctrl, 5, true);
}

function doRightClickAction(ctrl) {
	doAllAction(ctrl, 6);
}

function doAllAction(ctrl, idx, isActionRevert) {	
	
	if(isShowRightClickMenu){
		var actionList = menuData.marks[ctrl.id][idx];		
	}else{
		var actionList = curPageData.marks[ctrl.id][idx];
	}
	//console.log("actionList in fjs="+actionList)	
	for(var i=0;i<actionList.length;i++) {
		doAction(actionList[i], isActionRevert);
	}
}

function doAction(dataId, isActionRevert) {	
	
	var actionType = dataId.substring(0,1);
	
	if (actionType =='p') {
		actionLoadPage(dataId.substring(1)-0);
	} if (actionType =='a') {
		validateKeySeq = dataId.substring(2);
		//validateKey();
		actionOffice(dataId);
	} if ('hbBi'.indexOf(actionType) >= 0) {
		if (isActionRevert) {			
			$("#"+dataId).hide();
		} else {
			$("#"+dataId).show();
		}
	}
}

function actionOffice(actionId) {
	//alert("ACTION: "+actionId+"------");	
	console.log(event.which+"-hello---"+event.type+"----"+event.target.id)	
	
	var exitPath,correctElement,deadElement;
	
	incorrectMsg=false;
	
	for(var i=0; i<questionHotspots.length;i++){
		if(currentSegment==questionHotspots[i].id){
			console.log("=event.type="+event.type)
			if(event.type!="contextmenu"){
				correctElement=questionHotspots[i].actions.click.correct.iconName;
				deadElement=questionHotspots[i].actions.click.dead;			
				exitPath=questionHotspots[i].actions.click.correct.nextPath;
			}else{
				correctElement=questionHotspots[i].actions.rightClick.correct.iconName;
				deadElement=questionHotspots[i].actions.rightClick.dead;			
				exitPath=questionHotspots[i].actions.rightClick.correct.nextPath;
				incorrectMsg=true;
				
				if(correctElement==event.target.id.substring(2))
				doRightClickHandler($("#rightclickmenucontainer"))
			}
				for(var j=0; j<correctElement.length; j++){					
					if(correctElement[j]==event.target.id.substring(2)){
						for(var k=0; k<questionData.length;k++){						
							if(exitPath[j] == questionData[k].id){
								currentSegment=questionData[k].id;
								incorrectMsg=true;
								loadSegments(questionData[k].path, questionData[k].id)
								break;
							}
						}					
						break;
					}	
				}
			

				for(var d=0;d<deadElement.length;d++){
					//console.log("deadElement="+deadElement[d]+"--tar--"+event.target.id.substring(2))
					if(deadElement[d]==event.target.id.substring(2))incorrectMsg=true;
				}
			
			break;
		}			
	}
	console.log("in actoffice"+incorrectMsg)
	//if(!incorrectMsg&&event.type!="keydown")showIncorrect();
		
}

var segmentId;
var nextPath;

function loadSegments(path, id){	
	nextPath=path;
	segmentId=id;		
	console.log("nextPath in ls="+nextPath)
	$("#question")[0].src = nextPath;	
	console.log("loadSegments..."+isShowDropdown+"=isShowRightClickMenu="+isShowRightClickMenu)
	//if(isShowDropdown){$("#question").css({"left":"10px","top":"0px"});}//else{$("#question").css({"left":"10px","top":"151px"})}
	if(isShowRightClickMenu){$("#rightclickmenu").hide();$("#rightclickmenucontainer").html('');}	
	loadQuestions($("#questioncontainer"),segmentId);	
}


function showIncorrect(){
	$("#incorrect").css("display","block");	
	$("#incorrect").fadeIn(1000, function() {
		timeout = setTimeout('hideIncorrect()', 1000);		
	});
}

function hideIncorrect() {
	$("#incorrect").fadeOut(1000, function() {
		$("#incorrect").css("display","none");
		clearTimeout(timeout);
	});
}

function actionLoadPage(pageIdx) {	
	if(event.target.id+"in actionload")
	if (pageIdx < pageData.length) {
		curPage = pageIdx;
		curPageData = $.extend({}, pageData[curPage]);
		
		$("#headercontainer")[0].src = curPageData.headerimg;		
		loadPageData();
		$("#incorrect")[0].src = '../images/incorrectMessage.png';				
		
	}
	
}

function loadPageData() {	
	var i, actionType, curItem, newItem, gCtrl=$("#glasscontainer"), hCtrl=$("#headercontainer");
	
	gCtrl.html("");
	setTimeout(function() {
		gCtrl.css({left:hCtrl.position().left, top:hCtrl.position().top, width:hCtrl.width(), height:hCtrl.height()});
	}, 100);   
	
	for(i in curPageData.htmls) {
		curItem = curPageData.htmls[i];
		newItem = $(curItem[4]);
		newItem.css({
						position:"absolute",
						border: "0px",
						"z-index": 9,
						left: curItem[0]+"px",
						top: curItem[1]+"px",
						width: (curItem[2] - curItem[0])+"px",
						height: (curItem[3] - curItem[1])+"px"
		});
		gCtrl.append(newItem);
	}
	
	for(i in curPageData.marks) {
		curItem = curPageData.marks[i];
		
		newItem = $("<div></div>");
		newItem.attr("id", i);
		if (!DESIGN_MODE) {
			newItem.attr("onclick", "doClickAction(this);correctClick=true;");
			newItem.attr("onmouseover", "doOverAction(this)");
			newItem.attr("onmouseout", "doOutAction(this)");
			newItem.attr("onrightclick", "doRightClickAction(this)");
		} else {
			newItem.attr("title", i);
		}
		newItem.css({
						border:(DESIGN_MODE?"1px solid blue":"0px"),
						position:"absolute",
						"z-index": 99,
						left: curItem[0]+"px",
						top: curItem[1]+"px",
						width: (curItem[2] - curItem[0])+"px",
						height: (curItem[3] - curItem[1])+"px"
		});
		gCtrl.append(newItem);
	};
	for(i in curPageData.action) {
		actionType = i.substring(0,1);
		
		if ('i'.indexOf(actionType)>=0) {
			curItem = curPageData.action[i];
			newItem = $('<img src="'+curItem[4]+'"></img>');
			newItem.attr("id", i);
			newItem.css({
							display: "none",
							position:"absolute",
							left: curItem[0]+"px",
							top: curItem[1]+"px"
			});
			gCtrl.append(newItem);
		} else if ('hbB'.indexOf(actionType)>=0) {
			curItem = curPageData.action[i];
			newItem = $("<div></div>");
			newItem.attr("id", i);
			newItem.css({
							display: "none",
							"background-color":(actionType=='h'?"LightSteelBlue":""),
							border:(actionType=='b'?"1px solid lightblue":(actionType=='B'?"4px solid LightSteelBlue":"0px")),
							'box-sizing': 'border-box',
							opacity: 0.5,
							position:"absolute",
							left: curItem[0]+"px",
							top: curItem[1]+"px",
							width: (curItem[2] - curItem[0])+"px",
							height: (curItem[3] - curItem[1])+"px"
			});
			gCtrl.append(newItem);
		}
	};
	console.log("outside"+curKeySeq.indexOf('F'))
	if(String(event.target.id).substring(2,6) != "File" && curKeySeq.indexOf('F') !=1){
		console.log("in ifff."+String(event.target.id).substring(2,6))
		loadSegments(questionData[0].path,currentSegment);
	}else{
		$("#questioncontainer").html('');
		$("#question").remove();
		$("#questioncontainer").css({"z-index":"50"});
		console.log("elllllllllse..")
	}
}
 
function initApp(ctrl) {
	ctrl.html('');
	ctrl.html('<img id="headercontainer" style="display:block;margin:0px;padding:0px;xborder:1px solid blue;"></img><img id="incorrect" style="position:absolute;display:none;z-index:9999;left:0px;top:0px;"></img><div id="glasscontainer" style="position:absolute;z-index:100;left:0px;top:0px;width:1200px;height:500px;box-sizing:border-box;xborder:1px solid red;"></div><img id="question" style="display:block;position:absolute;z-index:110;"></img><div id="questioncontainer" style="display:block;position:absolute;z-index:120;left:8px;top:151px;width:948px;height:463px;box-sizing:xborder-box;xborder:1px solid red;"></div><img id="rightclickmenu" style="position:absolute;display:block;z-index:130;"></img><div id="rightclickmenucontainer" style="position:absolute;display:block;z-index:140;box-sizing:border-box;xborder:1px solid blue;"></div><div id="submenucontainer" style="position:absolute;display:block;z-index:160;box-sizing:border-box;xborder:1px solid blue;"></div><img id="submenu" style="position:absolute;display:block;z-index:150;"></img>');
	
	if (DESIGN_MODE) {
		$("#glasscontainer").click(function(e) {
			alert(e.offsetX+", "+e.offsetY);			
		});
	}
	$("#glasscontainer,#rightclickmenucontainer,#submenucontainer").click(function(e) {
		if (!correctClick) {			
			console.log("WRONG CLICK");
			//showIncorrect();
		}
		correctClick=false;
		//console.log("in fw.js="+e.offsetX+"---"+e.offsetY+"=id="+e.target.id)
	});
	actionLoadPage(curPage);
}

