var menuData;
var subMenuData,checkSubMenu;
var xPos=0,yPos=0;
var subMenuX,subMenuY;
var isShowRightClickMenu=false;
var isShowSubMenu=false;
var rightClickMenuData = [

//mbBht
	{
		img: '../images/item34/shortcut_menu_for_item34.png', 
		htmls: {
			t_Font: 						[]			
		},
		
		marks: {			
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				//no key highlight
				n_FontText: 					[85, 6, 100, 30, ['a_s'], ['h_FontText'], [], []]
				,n_FontSize: 					[125, 6, 140, 30, ['a_s'], ['h_FontSize'], [], []]
				,n_Increase: 					[140, 6, 165, 30, ['a_s'], ['h_Increase'], [], []]
				,n_Decrease: 					[165, 6, 185, 30, ['a_s'], ['h_Decrease'], [], []]
				,n_FormatPainter:				[185, 6, 205, 30, ['a_s'], ['h_FormatPainter'], [], []]
				,n_Styles:						[208, 2, 248, 61, ['a_s'], ['h_Styles'], [], []]
				
				,n_Bold: 						[4, 33, 26, 58, ['a_s'], ['h_Bold'], [], []]
				,n_Italic: 						[27, 33, 48, 58, ['a_s'], ['h_Italic'], [], []]
				,n_Underline:					[49, 33, 70, 58, ['a_s'], ['h_Underline'], [], []]
				,n_TextHighlight:				[71, 33, 91, 58, ['a_s'], ['h_TextHighlight','b_TextHighlight'], [], []]
				,n_TextHighlightDropdown:		[91, 33, 105, 58, ['a_s'], ['h_TextHighlightDropdown','b_TextHighlight'], [], []]
				,n_FontColor:					[105, 33, 125, 58, ['a_s'], ['h_FontColor','b_FontColor'], [], []]
				,n_FontColorDropdown:			[125, 33, 139, 58, ['a_s'], ['h_FontColorDropdown','b_FontColor'], [], []]
				,n_Bullets:						[139, 33, 159, 58, ['a_s'], ['h_Bullets','b_Bullets'], [], []]
				,n_BulletsDropdown:				[159, 33, 173, 58, ['a_s'], ['h_BulletsDropdown','b_Bullets'], [], []]
				,n_Numbering:					[173, 33, 193, 58, ['a_s'], ['h_Numbering','b_Numbering'], [], []]
				,n_NumberingDropdown:			[193, 33, 207, 58, ['a_s'], ['h_NumberingDropdown','b_Numbering'], [], []]
				
				,m_Cut: 						[0, 78, 145, 105, ['a_s'], ['h_Cut'], [], []]
				,m_Copy: 						[0, 105, 145, 130, ['a_s'], ['h_Copy'], [], []]
				,m_Paste: 						[25, 151, 65, 182, ['a_s'], ['h_Paste'], [], []]
				,m_Font: 						[0, 182, 145, 207, ['a_s'], ['h_Font'], [], []]
				,m_Paragraph:		 			[0, 208, 145, 232, ['a_s'], ['h_Paragraph'], [], []]
				,m_Define: 						[0, 233, 145, 257, ['a_s'], ['h_Define'], [], []]
				,m_Synonyms:					[0, 257, 145, 281, ['a_s'], ['h_Synonyms'], [],[]]
				,m_Translate: 					[0, 281, 145, 305, ['a_s'], ['h_Translate'], [], []]	
				,m_Search: 						[0, 305, 145, 329, ['a_s'], ['h_Search'], [], []]	
				,m_Hyperlink:		 			[0, 329, 145, 353, ['a_s'], ['h_Hyperlink'], [], []]	
				,m_NewComment: 					[0, 355, 145, 379, ['a_s'], ['h_NewComment'], [], []]	
		},
		
		action: {
		
				h_FontText: 					[85, 6, 100, 30]
				,h_FontSize: 					[125, 6, 140, 30]
				,h_Increase: 					[140, 6, 165, 30]
				,h_Decrease: 					[165, 6, 185, 30]
				,h_FormatPainter:				[185, 6, 205, 30]
				,h_Styles:						[208, 2, 248, 61]
				
				,h_Bold: 						[4, 33, 26, 58]
				,h_Italic: 						[27, 33, 48, 58]
				,h_Underline:					[49, 33, 70, 58]
				,h_TextHighlight:				[71, 33, 91, 58]
				,h_TextHighlightDropdown:		[91, 33, 105, 58]
				,h_FontColor:					[105, 33, 125, 58]
				,h_FontColorDropdown:			[125, 33, 139, 58]
				,h_Bullets:						[139, 33, 159, 58]
				,h_BulletsDropdown:				[159, 33, 173, 58]
				,h_Numbering:					[173, 33, 193, 58]
				,h_NumberingDropdown:			[193, 33, 207, 58]
				
				,h_Cut:	 						[0, 78, 145, 105]
				,h_Copy: 						[0, 105, 145, 130]
				,h_Paste: 						[26, 151, 60, 182]
				,h_Font: 						[0, 182, 145, 207]
				,h_Paragraph:					[0, 208, 145, 232]
				,h_Define: 						[0, 233, 145, 257]	
				,h_Synonyms: 					[0, 257, 145, 281]	
				,h_Translate: 					[0, 281, 145, 305]	
				,h_Search: 						[0, 305, 145, 329]	
				,h_Hyperlink: 					[0, 329, 145, 353]	
				,h_NewComment: 					[0, 355, 145, 379]
				
				,b_TextHighlight:				[71, 33, 105, 58]
				,b_FontColor:					[105, 33, 139, 58]
				,b_Bullets:						[139, 33, 173, 58]
				,b_Numbering:					[173, 33, 207, 58]
		}
	},
	{
		img: '../images/item04/right_click_shortcut_menu_in_insert_picture_dialog.png', 
		htmls: {
			t_Font: 						[]			
		},
		
		marks: {			
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				
				m_Select: 						[0, 0, 295, 30, ['a_s'], ['h_Select'], [], []]
				,m_Open: 						[0, 28, 295, 55, ['a_s'], ['h_Open'], [], []]
				,m_Background: 					[0, 55, 295, 80, ['a_s'], ['h_Background'], [], []]
				,m_Edit: 						[0, 77, 295, 100, ['a_s'], ['h_Edit'], [], []]
				,m_Print:		 				[0, 100, 295, 122, ['a_s'], ['h_Print'], [], []]
				,m_Preview: 					[0, 122, 295, 147, ['a_s'], ['h_Preview'], [], []]
				,m_RotateClockwise:				[0, 148, 295, 176, ['a_s'], ['h_RotateClockwise'], [],[]]
				,m_RotateCounter: 				[0, 176, 295, 200, ['a_s'], ['h_RotateCounter'], [], []]	
				,m_SendTo: 						[0, 200, 295, 226, ['a_s'], ['h_SendTo'], [], []]	
				,m_Cut:		 					[0, 226, 295, 252, ['a_s'], ['h_Cut'], [], []]	
				,m_Copy: 						[0, 252, 295, 280, ['a_s'], ['h_Copy'], [], []]	
				,m_CreateShortcut: 				[0, 280, 295, 306, ['a_s'], ['h_CreateShortcut'], [], []]	
				,m_Delete: 						[0, 306, 295, 330, ['a_s'], ['h_Delete'], [], []]	
				,m_Rename:			 			[0, 330, 295, 355, ['a_s'], ['h_Rename'], [], []]	
				,m_Openfile: 					[0, 355, 295, 380, ['a_s'], ['h_Openfile'], [], []]	
				,m_Properties: 					[0, 385, 295, 410, ['a_s'], ['h_Properties'], [], []]
		},
		
		action: {
		
				h_Select: 						[0, 0, 295, 30]
				,h_Open: 						[0, 28, 295, 55]
				,h_Background: 					[0, 55, 295, 80]
				,h_Edit: 						[0, 77, 295, 100]
				,h_Print:		 				[0, 100, 295, 122]
				,h_Preview: 					[0, 122, 295, 147]
				,h_RotateClockwise:				[0, 148, 295, 176]
				,h_RotateCounter: 				[0, 176, 295, 200]	
				,h_SendTo: 						[0, 200, 295, 226]	
				,h_Cut:		 					[0, 226, 295, 252]	
				,h_Copy: 						[0, 252, 295, 280]	
				,h_CreateShortcut: 				[0, 280, 295, 306]	
				,h_Delete: 						[0, 306, 295, 330]	
				,h_Rename:			 			[0, 330, 295, 355]	
				,h_Openfile: 					[0, 355, 295, 380]	
				,h_Properties: 					[0, 385, 295, 410]	
				
		}
	}
]
	
function doRightClickHandler(event, ctrl){
	//console.log("doRightClickHandler.....")
	incorrectMsg=false;
	isShowRightClickMenu=true;
	$('#glasscontainer').html('');	
	//$("#rightclickmenu")[0].src = rightClickMenuData[rClickImg].img;
	console.log(event.target.id+"=hotspot right clicked..."+rightClickMenuData[rClickImg].img)
	menuData = rightClickMenuData[rClickImg];
	loadRightClickData(event, 0,0);	
	//return false;
}

function loadRightClickData(event, xVal, yVal) {
	var i, actionType, curItem, newItem, rCtrl, rhCtrl, item;
	
	
	if(!isShowSubMenu){
		console.log("in lrc="+event.type)
		rCtrl=$("#rightclickmenucontainer"), rhCtrl=$("#rightclickmenu");
		rCtrl.html("");
		console.log("First="+xPos+"---"+yPos+"--")
		if(event.type=="keydown"){
			xPos=kxPos;
			yPos=kyPos;
		}else{
			xPos=event.offsetX+400;
			yPos=event.offsetY+100;
		}
		subMenuX=xPos;subMenuY=yPos;
	}
	setTimeout(function() {
		
		rhCtrl.css({left:xPos,top:yPos})
		console.log(event.offsetX+"--xpos--"+xPos+"-ypos--"+yPos+"--"+rhCtrl.position().left)
		rCtrl.css({left:rhCtrl.position().left, top:rhCtrl.position().top, "width":rhCtrl.width(), "height":rhCtrl.height()});
		//console.log("ccccccccccccccccccc="+rightClickMenuData[rClickImg].img);
		$("#rightclickmenu")[0].src = rightClickMenuData[rClickImg].img;
		
	}, 100);   
	
	console.log(event.offsetX+"---"+event.pageX)
	for(i in menuData.htmls) {
		curItem = menuData.htmls[i];
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
	
	for(i in menuData.marks) {
		curItem = menuData.marks[i];
		
		
		newItem = $("<div></div>");
		newItem.attr("id", i);
		if (!DESIGN_MODE) {
			newItem.attr("onclick", "doClickActionInRCMenu(event,this);correctClick=true;");
			newItem.attr("onmouseover", "doOverActionInRCMenu(event,this)");
			newItem.attr("onmouseout", "doOutActionInRCMenu(event,this)");
			
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
	for(i in menuData.action) {
		actionType = i.substring(0,1);		
		if ('hbB'.indexOf(actionType)>=0) {
			curItem = menuData.action[i];
			
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
	doRightClickKeyAction(event)
}

function doClickActionInRCMenu(event, ctrl) {
	doAllActionInRCMenu(event, ctrl, 4);
}


function doOverActionInRCMenu(event, ctrl) {	
	//console.log("ctttl="+ctrl.id+"---"+isShowRightClickMenu)
	checkSubMenu=ctrl.id.split('_')[2]
		
	if(checkSubMenu=="submenu"){
		console.log("if"+ctrl.id);
		var xPos = menuData.marks[ctrl.id][0];
		var yPos = menuData.marks[ctrl.id][1];
		subMenuHandler(xPos, yPos);
		$("#submenu").show();
	}else{
		$("#submenucontainer").html('');
		$("#submenu").hide();
	}
	doAllActionInRCMenu(event, ctrl, 5);	
	clearKeyHighlights();
}

function doOutActionInRCMenu(event, ctrl) {
	doAllActionInRCMenu(event, ctrl, 5, true);
}



function doAllActionInRCMenu(event, ctrl, idx, isActionRevert) {	
	//console.log("in sinfinf"+menuData.marks)
	var actionList = menuData.marks[ctrl.id][idx];
	for(var i=0;i<actionList.length;i++) {
		doAction(event, actionList[i], isActionRevert);
	}
}

function clearKeyHighlights(){
	//console.log("Clear Key Highlights...")
	for(var i in menuData.marks) {
		if(i.substring(0,1)!="n"){
			curItem = i.substring(2)		
			$("#m_"+curItem).css({"background-color":"LightSteelBlue","opacity":"0"});
		}	
	}
}

function rightClickKeyHandler(keycode,rClick, eName){	
	//console.log("rightClickKeyHandler...."+keycode,rClick, eName);	
	var rCorrectKey,rNextPath;
	for(var i=0; i<questionHotspots.length;i++){
		if(currentSegment==questionHotspots[i].id){			
			rCorrectKey=questionHotspots[i].actions.keys.keyUp.correct			
			for(var j=0; j<rCorrectKey.length; j++){
				console.log("in rch"+rCorrectKey[j].dropDown+"-seqLen-"+seqLen)
				if(rCorrectKey[j].element == String(eName) && ((rCorrectKey[j].rightClick||rCorrectKey[j].dropDown) == String(rClick)) && rCorrectKey[j].code == keycode){
					rNextPath=rCorrectKey[j].nextPath;
					for(var k=0; k<questionData.length;k++){
						if(rNextPath == questionData[k].id){
							currentSegment=questionData[k].id;
							incorrectMsg=true;
							console.log("succes...")
							isShowDropdown=false;
							$("#question").css({"left":"10px","top":"151px"});
							loadSegments(questionData[k].path, questionData[k].id)
							break;
						}
					}					
					break;
				}else{
					if(seqLen!=3 && keycode!=37 && keycode!=38 && keycode!=39 && keycode!=40){incorrectMsg=false;}else{incorrectMsg=true;}
					//console.log("tttttttttttt;")
				}
			}break;
		}
	}
}


var liItem,arrKeyCount=0;

function doRightClickKeyAction(keycode){
	console.log("doRightClickKeyAction="+isShowSubMenu)
	incorrectMsg=false;
	var curItem,liItem=[];
	
	for(var i in menuData.marks) {
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
		console.log("isShowSubMenu in 666666="+isShowSubMenu);
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

