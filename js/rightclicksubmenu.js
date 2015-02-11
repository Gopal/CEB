
var subMenuData;
var xPos=0,yPos=0;
var subMenuX,subMenuY;

var isShowSubMenu=false;

var rightClickSubMenuData = [
	
	{
		img: '../images/item34/submenu_synonyms.png', 
		htmls: {
			t_Font: 						[]			
		},
		
		marks: {			
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				//no key highlight
				
				
				m_Bing: 						[0, 0, 275, 25, ['a_s'], ['h_Bing'], [], []]
				,m_Encarta:						[0, 26, 275, 50, ['a_s'], ['h_Encarta'], [], []]
				,m_English:						[0, 51, 275, 75, ['a_s'], ['h_English'], [], []]
				,m_Factiva:						[0, 75, 275, 97, ['a_s'], ['h_Factiva'], [], []]
				,m_Highbeam:					[0, 97, 275, 120, ['a_s'], ['h_Highbeam'], [], []]
				,m_Research:					[0, 121, 275, 145, ['a_s'], ['h_Research'], [], []]
				
		},
		
		action: {
				
				h_Bing:	 						[0, 0, 275, 25]
				,h_Encarta: 					[0, 26, 275, 50]
				,h_English:						[0, 51, 275, 76]
				,h_Factiva:						[0, 75, 275, 97]
				,h_Highbeam:					[0, 97, 275, 120]
				,h_Research:					[0, 121, 275, 145]
		}		
	}
]


function subMenuHandler(xPos, yPos){
	isShowSubMenu=true;
	rClickImg=0;
	//$("#submenu")[0].src = rightClickSubMenuData[rClickImg].img;	
	subMenuData = rightClickSubMenuData[rClickImg];
	loadRightClickSubMenuData(xPos, yPos);
}
	

function loadRightClickSubMenuData(xVal, yVal) {
	var i, actionType, curItem, newItem, rCtrl, rhCtrl, item;
	
		console.log("ssssssssubmenu...")
		rCtrl=$("#submenucontainer"), rhCtrl=$("#submenu")
		rCtrl.html("");
		xPos=subMenuX+147;
		yPos=subMenuY+yVal;
		
	
	setTimeout(function() {
		
		rhCtrl.css({left:xPos,top:yPos})
		//console.log(xPos+"---"+yPos+"--"+rhCtrl.position().left)
		rCtrl.css({left:rhCtrl.position().left, top:rhCtrl.position().top, "width":rhCtrl.width(), "height":rhCtrl.height()});
		$("#submenu")[0].src = rightClickSubMenuData[rClickImg].img;
	}, 100);   
	
	console.log(event.offsetX+"---"+event.pageX)
	for(i in subMenuData.htmls) {
		curItem = subMenuData.htmls[i];
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
		rCtrl.append(newItem);
	}
	
	for(i in subMenuData.marks) {
		curItem = subMenuData.marks[i];
		
		
		newItem = $("<div></div>");
		newItem.attr("id", i);
		if (!DESIGN_MODE) {
			newItem.attr("onclick", "doClickAction(event,this);correctClick=true;");
			newItem.attr("onmouseover", "doOverActionInSubMenu(event,this)");
			newItem.attr("onmouseout", "doOutActionInSubMenu(event,this)");
			
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
		//console.log("newItem="+newItem.attr('id'));
		
		rCtrl.append(newItem);
	};
	for(i in subMenuData.action) {
		actionType = i.substring(0,1);		
		if ('hbB'.indexOf(actionType)>=0) {
			curItem = subMenuData.action[i];
			
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
			rCtrl.append(newItem);
		}
	};
	doRightClickSubMenuKeyAction(event)
}

function doOverActionInSubMenu(event, ctrl) {
	var xPos = subMenuData.marks[ctrl.id][0];
	var yPos = subMenuData.marks[ctrl.id][1];
	clearKeyHighlightsInSubMenu();
	doAllActionInSubMenu(event, ctrl, 5);
}


function doOutActionInSubMenu(event, ctrl) {
	doAllActionInSubMenu(event, ctrl, 5, true);
}

function doAllActionInSubMenu(event, ctrl, idx, isActionRevert) {	
	var actionList = subMenuData.marks[ctrl.id][idx];
	for(var i=0;i<actionList.length;i++) {
		doAction(event, actionList[i], isActionRevert);
	}
}

function doRightClickSubMenuKeyAction(keycode){
	console.log("doRightClickSubMenuKeyAction="+isShowSubMenu)
	incorrectMsg=false;
	var curItem,liItem=[];
	
	for(var i in subMenuData.marks) {
		if(i.substring(0,1)!="n"){
			curItem = i.substring(2)		
			liItem.push(curItem)
		}
	}
	console.log("3333333----333-"+liItem[arrKeyCount]+"--4--"+String(liItem[arrKeyCount]).split('_')[1])
	if(keycode==40){//downArrow
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0"});	
		arrKeyCount++;
	}else if(keycode==38){//upArrow		
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0"});		
		arrKeyCount--;
		if(arrKeyCount<0){arrKeyCount=liItem.length;}
	}else if(keycode==39){ 
		if(String(liItem[arrKeyCount]).split('_')[1]=="submenu"){
			isShowSubMenu=true;
			console.log("if in rck keys"+"m_"+liItem[arrKeyCount]);
			var xPos = menuData.marks["m_"+liItem[arrKeyCount]][0];
			var yPos = menuData.marks["m_"+liItem[arrKeyCount]][1];
			subMenuHandler(xPos, yPos);
			$("#submenu").show();
		}
	}else if(keycode==37){
		isShowSubMenu=false;
		$("#submenucontainer").html('');
		$("#submenu").hide();
	}
	
	if(liItem.length>arrKeyCount && event.type != "contextmenu"){		
		//console.log("in doRC"+event.type)
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0.5"});	
	}else if(event.type != "contextmenu"){
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

function clearKeyHighlightsInSubMenu(){
	for(var i in subMenuData.marks) {
		if(i.substring(0,1)!="n"){
			curItem = i.substring(2)		
			$("#m_"+curItem).css({"background-color":"LightSteelBlue","opacity":"0"});
		}	
	}
}
