var menuData;
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
				,m_Synonyms_submenu:			[0, 257, 145, 281, ['a_s'], ['h_Synonyms'], [],[]]
				,m_Translate: 					[0, 281, 145, 305, ['a_s'], ['h_Translate'], [], []]	
				,m_Search: 						[0, 305, 145, 329, ['a_s'], ['h_Search'], [], []]	
				,m_Hyperlink: 					[0, 329, 145, 353, ['a_s'], ['h_Hyperlink'], [], []]	
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
		img: '../images/item34/submenu_synonyms.png', 
		htmls: {
			t_Font: 						[]			
		},
		
		marks: {			
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				//no key highlight
				
				
				m_Cut1: 							[0, 0, 275, 25, ['a_s'], ['h_Cut1'], [], []]
				,m_Copy: 						[0, 105, 145, 130, ['a_s'], ['h_Copy'], [], []]
				,m_Paste: 						[25, 151, 65, 182, ['a_s'], ['h_Paste'], [], []]
				,m_Font: 						[0, 182, 145, 207, ['a_s'], ['h_Font'], [], []]
				,m_Paragraph:		 			[0, 208, 145, 232, ['a_s'], ['h_Paragraph'], [], []]
				,m_Define: 						[0, 233, 145, 257, ['a_s'], ['h_Define'], [], []]
				,m_Synonyms: 					[0, 257, 145, 281, ['a_s'], ['h_Synonyms'], [],[]]
				,m_Translate: 					[0, 281, 145, 305, ['a_s'], ['h_Translate'], [], []]	
				,m_Search: 						[0, 305, 145, 329, ['a_s'], ['h_Search'], [], []]	
				,m_Hyperlink: 					[0, 329, 145, 353, ['a_s'], ['h_Hyperlink'], [], []]	
				,m_NewComment: 					[0, 355, 145, 379, ['a_s'], ['h_NewComment'], [], []]	
		},
		
		action: {
		
				
				
				h_Cut1:	 						[0, 0, 275, 25]
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
				
				
		}		
	}
]




	
function doRightClickHandler(ctrl){
	incorrectMsg=false;
	isShowRightClickMenu=true;
	$('#glasscontainer').html('');	
	//$("#rightclickmenu")[0].src = rightClickMenuData[rClickImg].img;
	console.log(event.target.id+"=hotspot right clicked..."+rightClickMenuData[rClickImg].img)
	menuData = rightClickMenuData[rClickImg];
	loadRightClickData(0,0);	
	//return false;
}

function subMenuHandler(xPos, yPos){
	isShowSubMenu=true;
	rClickImg=1;
	$("#submenu")[0].src = rightClickMenuData[rClickImg].img;	
	menuData = rightClickMenuData[rClickImg];
	loadRightClickData(xPos, yPos);
}
	

function loadRightClickData(xVal, yVal) {
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
			xPos=event.offsetX;
			yPos=event.offsetY+150;
		}
		subMenuX=xPos;subMenuY=yPos;
	}else{
		
		rCtrl=$("#submenucontainer"), rhCtrl=$("#submenu")
		rCtrl.html("");
		xPos=subMenuX+147;
		yPos=subMenuY+yVal;
		
	}
	setTimeout(function() {
		
		rhCtrl.css({left:xPos,top:yPos})
		//console.log(xPos+"---"+yPos+"--"+rhCtrl.position().left)
		rCtrl.css({left:rhCtrl.position().left, top:rhCtrl.position().top, "width":rhCtrl.width(), "height":rhCtrl.height()});
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
			newItem.attr("onclick", "doClickAction(this);correctClick=true;");
			newItem.attr("onmouseover", "doOverAction(this)");
			newItem.attr("onmouseout", "doOutAction(this)");
			
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

function clearKeyHighlights(){
	console.log("Clear Key Highlights...")
	for(var i in menuData.marks) {
		if(i.substring(0,1)!="n"){
			curItem = i.substring(2)		
			$("#m_"+curItem).css({"background-color":"LightSteelBlue","opacity":"0"});
		}	
	}
}

function rightClickKeyHandler(keycode,rClick, eName){	
	console.log("rightClickKeyHandler...."+keycode,rClick, eName);	
	var rCorrectKey,rNextPath;
	for(var i=0; i<questionHotspots.length;i++){
		if(currentSegment==questionHotspots[i].id){			
			rCorrectKey=questionHotspots[i].actions.keys.keyUp.correct			
			for(var j=0; j<rCorrectKey.length; j++){
				console.log("in rch"+rCorrectKey[j].dropDown)
				if(rCorrectKey[j].element == String(eName) && (rCorrectKey[j].rightClick == String(rClick) || rCorrectKey[j].dropDown == String(rClick)) && rCorrectKey[j].code == keycode){
					rNextPath=rCorrectKey[j].nextPath;
					for(var k=0; k<questionData.length;k++){
						if(rNextPath == questionData[k].id){
							currentSegment=questionData[k].id;
							//incorrectMsg=true;
							console.log("succes...")
							isShowDropdown=false;
							$("#question").css({"left":"10px","top":"151px"});
							loadSegments(questionData[k].path, questionData[k].id)
							break;
						}
					}					
					break;
				}//else{incorrectMsg=false;}
			}break;
		}
	}
}


var liItem,arrKeyCount=0;

function doRightClickKeyAction(keycode){
	incorrectMsg=true;
	var curItem,liItem=[];
	for(var i in menuData.marks) {
		if(i.substring(0,1)!="n"){
			curItem = i.substring(2)		
			liItem.push(curItem)
		}
	}
	if(keycode==40){//downArrow
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0"});	
		arrKeyCount++;
	}else if(keycode==38){//upArrow		
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0"});		
		arrKeyCount--;
		if(arrKeyCount<0){arrKeyCount=liItem.length;}
	}
	
	if(liItem.length>arrKeyCount && event.type != "contextmenu"){		
	console.log("in doRC"+event.type)
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0.5"});	
	}else if(event.type != "contextmenu"){
		if(keycode==40){
			arrKeyCount=0;
		}else if(keycode==38){
			arrKeyCount=liItem.length-1;
		}
		$("#m_"+liItem[arrKeyCount]).css({"background-color":"LightSteelBlue","opacity":"0.5"});
	}
	if(keycode==13 || keycode==32){incorrectMsg=true;rightClickKeyHandler(keycode,true, liItem[arrKeyCount])}	
	
}

