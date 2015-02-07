var keyPageLayout = [
	//ROW 1	
	[225, 45, 84, 62,"\x12PB"],			//B
	[710, 45, 84, 62,"\x12PAF",'Y'],	//AF
	[830, 45, 84, 62,"\x12PAA"],		//AA
	
	//ROW 2
	[225, 80, 128, 133,"\x12PLN"],		//LN
	[340, 80, 128, 133,"\x12PIL"],		//IL
	[470, 80, 128, 133,"\x12PSB"],		//SB
	[710, 80, 128, 133,"\x12PAB",'Y'],	//AB
	[830, 80, 128, 133,"\x12PAG",'Y'],	//AG
	
	//ROW 3	
	[20, 115, 128, 133,"\x12PM"],		//M
	[80, 115, 128, 133,"\x12PO"],		//O
	[130, 115, 128, 133,"\x12PSZ"],		//SZ
	[180, 115, 128, 133,"\x12PJ"],		//J
	[225, 115, 128, 133,"\x12PH"],		//H
	[340, 115, 128, 133,"\x12PIR"],		//IR
	[470, 115, 128, 133,"\x12PSA"],		//SA
	[620, 115, 128, 133,"\x12PPO",'Y'],	//PO
	[660, 115, 128, 133,"\x12PTW",'Y'],	//TW
	[710, 115, 128, 133,"\x12PAP"],		//AP
	[830, 115, 128, 133,"\x12PAY",'Y'],	//AY
	
	//ROW 4
	[305, 140, 128, 133,"\x12PSP"],		//SP
	[575, 140, 128, 133,"\x12PPG"],		//PG
	
];

var tabPageLayout = {
		headerimg: '../images/MainmenuTabs/pagelayout.png',
		
		htmls: {
			t_IndentLeft: 					[393, 80, 442, 96, '<input type="text" class="textboxplain" value="0&#34" style="font-size:12px;>']
			,t_IndentRight:					[393, 102, 442, 119, '<input type="text" class="textboxplain" value="0&#34" style="font-size:12px;>']
			,t_SpacingBefore:				[527, 80, 576, 96, '<input type="text" class="textboxplain" value="0 pt" style="font-size:12px;>']
			,t_SpacingAfter:				[527, 102, 576, 119, '<input type="text" class="textboxplain" value="0 pt" style="font-size:12px;>']
		},
		
		marks: {		
		
			<!---HEADER -->		
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				m_Save: 						[35, 2, 60, 22, ['a_s'], ['h_Save'], []]
				,m_Undo: 						[65, 2, 86, 22, ['a_s'], ['h_Undo','b_Undo'], []]
				,m_UndoDropdown:				[86, 2, 97, 22, ['a_s'], ['h_UndoDropdown','b_Undo'], []]
				,m_Repeat:						[105, 2, 126, 22, ['a_s'], ['h_Repeat'], []]
				,m_Customize:					[134, 2, 145, 22, ['a_s'], ['h_Customize'], []]			
				,m_Help: 						[795, 2, 822, 22, ['a_s'], ['h_Help'], []]
				,m_DisplayOptions: 				[823, 2, 852, 22, ['a_s'], ['h_DisplayOptions'], []]
				,m_Minimize:					[852, 2, 880, 22, ['a_s'], ['h_Minimize'], []]
				,m_Maximize: 					[882, 2, 910, 22, ['a_s'], ['h_Maximize'], []]
				,m_Close:	 					[912, 2, 938, 22, ['a_s'], ['h_Close'], []]
				
			<!---MAIN MENU TABS-->		
				,m_HomeTab: 					[64, 26, 122, 47, ['p0'],['i_HomeTab',''],[]]
				,m_InsertTab:					[122, 26, 188, 47, ['p1'],['i_InsertTab',''],[]]
				,m_DesignTab:					[188, 26, 259, 47, ['p2'],['i_DesignTab',''],[]]
				,m_PageLayoutTab:				[259, 26, 365, 47, ['p3'],['',''],[]]
				,m_ReferencesTab:				[365, 26, 462, 47, ['p4'],['i_ReferencesTab',''],[]]
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['i_MailingsTab',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---PAGE SETUP SECTION-->	
				,m_Margins:						[3, 53, 54, 122, ['a_\x12PM'], ['h_Margins'], []]	
				,m_Orientation: 				[53, 53, 118, 122, ['a_\x12PO'], ['h_Orientation'], []]	
				,m_Size: 						[120, 53, 155, 122, ['a_\x12PSZ'], ['h_Size'], []]	
				,m_Columns: 					[159, 53, 211, 122, ['a_\x12PJ'], ['h_Columns'], []]	
				,m_Breaks: 						[212, 53, 282, 75, ['a_\x12PB'], ['h_Breaks'], []]	
				,m_LineNumbers: 				[212, 76, 320, 99, ['a_\x12PLN'], ['h_LineNumbers'], []]	
				,m_Hyphenation: 				[212, 100, 315, 122, ['a_\x12PH'], ['h_Hyphenation'], []]	
				,m_PageSetupDialogBox: 			[312, 128, 327, 142, ['a_\x12PSP'], ['h_PageSetupDialogBox'], []]	
				
			<!---PARAGRAPH SECTION-->	
				,m_IndentLeftUp:				[444, 76, 461, 88, ['a_s'], ['h_IndentLeftUp','b_IndentLeft'], []]		
				,m_IndentLeftDown:				[444, 88, 461, 99, ['a_s'], ['h_IndentLeftDown','b_IndentLeft'], []]		
				,m_IndentRightUp:				[444, 100, 461, 111, ['a_s'], ['h_IndentRightUp','b_IndentRight'], []]		
				,m_IndentRightDown:				[444, 111, 461, 122, ['a_s'], ['h_IndentRightDown','b_IndentRight'], []]			
				,m_SpacingBeforeUp:				[579, 76, 596, 88, ['a_s'], ['h_SpacingBeforeUp','b_SpacingBefore'], []]		
				,m_SpacingBeforeDown:			[579, 88, 596, 99, ['a_s'], ['h_SpacingBeforeDown','b_SpacingBefore'], []]		
				,m_SpacingAfterUp:				[579, 100, 596, 111, ['a_s'], ['h_SpacingAfterUp','b_SpacingAfter'], []]		
				,m_SpacingAfterDown:			[579, 111, 596, 122, ['a_s'], ['h_SpacingAfterDown','b_SpacingAfter'], []]
				
			<!---ARRANGE SECTION-->	
				,m_SelectionPane:				[694, 97, 798, 122, ['a_\x12PAP'], ['h_SelectionPane'], []]	
				,m_Align: 						[816, 53, 880, 75, ['a_\x12PAA'], ['h_Align'], []]	
					
		},
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']
				,i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
				,i_DesignTab:					[208, 33, 259, 47, '../images/ToggleImages/design.png']			
				,i_ReferencesTab:				[383, 33, 462, 47, '../images/ToggleImages/references.png']
				,i_MailingsTab:					[479, 33, 546, 47, '../images/ToggleImages/mailings.png']
				,i_ReviewTab:					[562, 33, 619, 47, '../images/ToggleImages/review.png']
				,i_ViewTab:						[630, 32, 677, 47, '../images/ToggleImages/view.png']
				
		<!---------------------------HIGHLIGHT BACKGROUND----------------------------------------------->
			
			<!---HEADER-->
				,h_Save: 						[35, 2, 60, 22]
				,h_Undo: 						[65, 2, 86, 22]
				,h_UndoDropdown:				[86, 2, 97, 22]
				,h_Repeat:						[105, 2, 126, 22]
				,h_Customize:					[134, 2, 145, 22]			
				,h_Help: 						[795, 2, 822, 22]
				,h_DisplayOptions: 				[823, 2, 852, 22]
				,h_Minimize:					[852, 2, 880, 22]
				,h_Maximize: 					[882, 2, 910, 22]
				,h_Close:	 					[912, 2, 938, 22]
				
			<!---PAGE SETUP SECTION-->	
				,h_Margins: 					[3, 53, 54, 122]	
				,h_Orientation: 				[53, 53, 118, 122]	
				,h_Size: 						[120, 53, 155, 122]	
				,h_Columns: 					[159, 53, 211, 122]	
				,h_Breaks: 						[212, 53, 282, 75]	
				,h_LineNumbers: 				[212, 76, 320, 99]	
				,h_Hyphenation: 				[212, 100, 315, 122]	
				,h_PageSetupDialogBox: 			[312, 128, 327, 142]	
			
			<!---PARAGRAPH SECTION-->	
				,h_IndentLeftUp:				[444, 76, 461, 88]
				,h_IndentLeftDown:				[444, 88, 461, 99]	
				,h_IndentRightUp:				[444, 100, 461, 111]		
				,h_IndentRightDown:				[444, 111, 461, 122]			
				,h_SpacingBeforeUp:				[579, 76, 596, 88]					
				,h_SpacingBeforeDown:			[579, 88, 596, 99]		
				,h_SpacingAfterUp:				[579, 100, 596, 111]		
				,h_SpacingAfterDown:			[579, 111, 596, 122]
				
			<!---ARRANGE SECTION-->		
				,h_SelectionPane:				[694, 97, 798, 122]
				,h_Align: 						[816, 53, 880, 75]				
				
		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->		
				,b_Undo: 						[65, 2, 97, 22]			
				,b_IndentLeft:					[444, 76, 461, 99]		
				,b_IndentRight:					[444, 100, 461, 122]
				,b_SpacingBefore:				[579, 76, 596, 99]
				,b_SpacingAfter:				[579, 100, 596, 122]
		}
	}