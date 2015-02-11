var currentSegment="MSW_04000";
var rClickImg = 1;
var kxPos,kyPos;
var hsArea=false;
var qCtrl,segID;

function loadQuestions(qctrl, sID){
	qCtrl = qctrl;
	segID = sID;
	
	drawHotspots();
	
}

function drawHotspots(){	
	console.log("in draw....")
	$('#questioncontainer').html('');
	var curItem, newItem;	
	for(var i=0;i<questionHotspots.length;i++){
		
		if(questionHotspots[i].id==segID){	
			
			for(j in questionHotspots[i].marks) {
				curItem = questionHotspots[i].marks[j];
				newItem = $("<div></div>");
				newItem.attr("id", j);
				newItem.attr("onclick", "doClickHandlerInQues(event, this);correctClick=true;");
				newItem.attr("onmouseover", "doOverActionInQues(event, this)");
				newItem.attr("onmouseout", "doOutActionInQues(event, this)");
				newItem.bind("contextmenu",function(e){
					actionOffice(event, this);
					return false;			
				});
				
				newItem.css({"position":"absolute","display":"block","z-index":"2000","left":curItem[0]+"px","top":curItem[1]+"px","width":(curItem[2]-curItem[0])+"px",						"height": (curItem[3] - curItem[1])+"px"});
				if(j.substring(0,1)=="s"){hsArea=true;newItem.css({"background-color":"red","opacity":"0"})}
				$('#questioncontainer').append(newItem);
			}
			for(var k in questionHotspots[i].action) {
				actionType = k.substring(0,1);
				
				if ('h'.indexOf(actionType)>=0) {
					curItem = questionHotspots[i].action[k];
					newItem = $("<div></div>");
					newItem.attr("id", k);
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
					$('#questioncontainer').append(newItem);
				}
			};
			screenPage=i;
			break;
		}	
	}	
}

function doRightClickUsingKeys(ctrl){
	console.log("doRightClickUsingKeys...")
	kxPos=450;kyPos=210;
	doRightClickHandler(ctrl)
}

function doClickHandlerInQues(event, ctrl){
	console.log(hsArea+"hotspot clicked..."+event.target.id+"=="+isShowDropdown);
	
	if(!isShowDropdown){
		hsArea=false;
		$("#question").css({"left":"8px","top":"151px"});
	}else{$("#question").css({"left":"8px","top":"4px"})}
	actionOffice(event, ctrl)
}

function doOverActionInQues(event, ctrl) {	
	//console.log("ctttl=in q js.."+ctrl.id)

	doAllActionInQues(event, ctrl, 5);
	clearKeyHighlightsInDropdown();
}

function doOutActionInQues(event, ctrl) {
	doAllActionInQues(event, ctrl, 5, true);
}

function doAllActionInQues(event, ctrl, idx, isActionRevert) {
	//console.log("screenPage="+screenPage+"----"+hsArea);
	
	
	if(hsArea){
		var actionList = questionHotspots[screenPage].marks[ctrl.id][idx];	
		//console.log("actionList in ques="+actionList)
		for(var i=0;i<actionList.length;i++) {
			doAction(event, actionList[i], isActionRevert);
		}
	}	
		
}

var liItem,arrKeyCount=0;

function doDropdownkeyHandler(keycode){
	console.log(isShowDropdown+"doDropdownkeyHandler..."+canTakeKeyDown)
	//incorrectMsg=false;
	var curItem,liItem=[];
	
	
	
	for(var i in questionHotspots[screenPage].marks) {
		curItem = i.substring(2)		
		liItem.push(curItem)		
	}
	
	if(keycode==40){//downArrow
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0"});	
		arrKeyCount++;
	}else if(keycode==38){//upArrow		
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0"});		
		arrKeyCount--;
		if(arrKeyCount<0){arrKeyCount=liItem.length;}
	}
	if(liItem.length>arrKeyCount){		
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0.5"});	
	}else{
		if(keycode==40){
			arrKeyCount=0;
		}else if(keycode==38){
			arrKeyCount=liItem.length-1;
		}
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0.5"});
	}
	//if(keycode==13 || keycode==32){incorrectMsg=true;rightClickKeyHandler(keycode,true, liItem[arrKeyCount])}	
	rightClickKeyHandler(keycode,true, liItem[arrKeyCount])
}


function clearKeyHighlightsInDropdown(){
	for(var i in questionHotspots[screenPage].marks) {
		curItem = i.substring(2)		
		$("#m_"+curItem).css({"background-color":"LightSteelBlue","opacity":"0"});
	}
}