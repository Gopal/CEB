var currentSegment="MSW_34000";
var rClickImg = 0;
var kxPos,kyPos;
var hsArea=false;
var qCtrl,segID;


function loadQuestions(qctrl, sID){
	qCtrl = qctrl;
	segID = sID;
	drawHotspots();
}

function drawHotspots(){	
	//console.log("in draw....")
	$('#questioncontainer').html('');
	var curItem, newItem;	
	for(var i=0;i<questionHotspots.length;i++){
		
		if(questionHotspots[i].id==segID){	
			
			for(j in questionHotspots[i].marks) {
				curItem = questionHotspots[i].marks[j];
				newItem = $("<div></div>");
				newItem.attr("id", j);
				newItem.attr("onclick", "doClickHandlerInQues(event, this);correctClick=true;");
				//newItem.attr("onmouseup", "doUpHandlerInQues(event, this);correctClick=true;");
				newItem.attr("onmouseover", "doOverActionInQues(event, this)");
				newItem.attr("onmouseout", "doOutActionInQues(event, this)");
				newItem.bind("contextmenu",function(e){
					isShowDropdown=false;
					actionOffice(event, this);
					return false;			
				});
				
				newItem.css({"position":"absolute","display":"block","z-index":"2000","left":curItem[0]+"px","top":curItem[1]+"px","width":(curItem[2]-curItem[0])+"px",						"height": (curItem[3] - curItem[1])+"px"});
				if(j.substring(0,1)=="s"){hsArea=true;newItem.css({"background-color":"red","opacity":"0.2"})}
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
	doRightClickHandler(event, ctrl)
}

function doClickHandlerInQues(event, ctrl){
	console.log(hsArea+"hotspot clicked..."+event.target.id+"=="+isShowDropdown);
	if(!isShowDropdown){
		hsArea=false;
		$("#question").css({"left":"8px","top":"151px"});
	}else{$("#question").css({"left":"8px","top":"151px"})}
	actionOffice(event, ctrl)
}

function doUpHandlerInQues(event, ctrl){
	console.log("doUpHandlerInQues..............")
}

function doOverActionInQues(event, ctrl) {	
	//console.log("ctttl=in q js.."+ctrl.id)
	doAllActionInQues(event, ctrl, 5);
	
}

function doOutActionInQues(event, ctrl) {
	doAllActionInQues(event, ctrl, 5, true);
}

function doAllActionInQues(event, ctrl, idx, isActionRevert) {
	//console.log("screenPage="+screenPage+"----"+hsArea);
	if(hsArea){
		var actionList = questionHotspots[screenPage].marks[ctrl.id][idx];	
		for(var i=0;i<actionList.length;i++) {
			doAction(event, actionList[i], isActionRevert);
		}
	}	
		
}