var keyView = [
	//ROW 1	
	[145, 45, 84, 62,"\x12WU"],			//U
	[220, 45, 84, 62,"\x12WR"],			//R
	[430, 45, 84, 62,"\x12W1"],			//1
	[545, 45, 84, 62,"\x12WN"],			//N
	[655, 45, 84, 62,"\x12WB"],			//B
	
	//ROW 2
	[145, 80, 128, 133,"\x12WE"],		//E
	[220, 80, 128, 133,"\x12WG"],		//G
	[430, 80, 128, 133,"\x12W2"],		//2
	[545, 80, 128, 133,"\x12WA"],		//A
	[655, 80, 128, 133,"\x12WVS",'Y'],	//VS
		
	//ROW 3	
	[20, 115, 128, 133,"\x12WF"],		//F
	[60, 115, 128, 133,"\x12WP"],		//P
	[100, 115, 128, 133,"\x12WL"],		//L
	[220, 115, 128, 133,"\x12WK"],		//K
	[345, 115, 128, 133,"\x12WQ"],		//Q
	[390, 115, 128, 133,"\x12WJ"],		//J
	[430, 115, 128, 133,"\x12WI"],		//I
	[545, 115, 128, 133,"\x12WS"],		//S
	[655, 115, 128, 133,"\x12WT",'Y'],	//T
	[690, 115, 128, 133,"\x12WW"],		//W
	[755, 115, 128, 133,"\x12WM"]		//M
];

var tabView = {
		headerimg: '../images/MainmenuTabs/view.png', 
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
				,m_PageLayoutTab:				[259, 26, 365, 47, ['p3'],['i_PageLayoutTab',''],[]]
				,m_ReferencesTab:				[365, 26, 462, 47, ['p4'],['i_ReferencesTab',''],[]]
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['i_MailingsTab',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],[],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---VIEWS SECTION-->	
				,m_ReadMode: 					[4, 54, 46, 122, ['a_\x12WF'], ['h_ReadMode'], []]	
				,m_PrintLayout: 				[46, 54, 88, 122, ['a_\x12WP'], ['h_PrintLayout'], []]	
				,m_WebLayout: 					[88, 54, 130, 122, ['a_\x12WL'], ['h_WebLayout'], []]	
				,m_Outline: 					[130, 51, 200, 75, ['a_\x12WU'], ['h_Outline'], []]	
				,m_Draft: 						[130, 76, 185, 97, ['a_\x12WE'], ['h_Draft'], []]	
				
			<!---SHOW SECTION-->	
				,m_Ruler: 						[208, 51, 262, 75, ['a_\x12WR'], ['h_Ruler'], []]	
				,m_Gridlines: 					[208, 77, 278, 97, ['a_\x12WG'], ['h_Gridlines'], []]	
				,m_NavigationPane:	 			[208, 99, 323, 122, ['a_\x12WK'], ['h_NavigationPane'], []]	

			<!---ZOOM SECTION-->	
				,m_Zoom: 						[330, 51, 372, 115, ['a_\x12WQ'], ['h_Zoom'], []]	
				,m_Zoom100: 					[374, 51, 414, 115, ['a_\x12WJ'], ['h_Zoom100'], []]	
				,m_OnePage:	 					[414, 54, 495, 75, ['a_\x12W1'], ['h_OnePage'], []]			
				,m_MultiPages: 					[414, 77, 520, 97, ['a_\x12W2'], ['h_MultiPages'], []]	
				,m_PageWidth:	 				[414, 99, 503, 122, ['a_\x12WI'], ['h_PageWidth'], []]		
			
			<!---WINDOW SECTION-->	
				,m_NewWindow: 					[530, 51, 630, 75, ['a_\x12WN'], ['h_NewWindow'], []]	
				,m_ArrangeAll: 					[530, 77, 616, 97, ['a_\x12WA'], ['h_ArrangeAll'], []]	
				,m_Split:	 					[530, 99, 584, 122, ['a_\x12WS'], ['h_Split'], []]			
				,m_ViewSide: 					[640, 51, 662, 75, ['a_\x12WB'], ['h_ViewSide'], []]	
				,m_SwitchWindows:	 			[670, 53, 734, 122, ['a_\x12WW'], ['h_SwitchWindows'], []]			
				,m_Macros: 						[741, 53, 787, 90, ['a_\x12WM'], ['h_Macros','b_Macros'], []]	
				,m_MacrosDropdown:	 			[741, 85, 787, 122, ['a_\x12WM'], ['h_MacrosDropdown','b_Macros'], []]					
		},
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']
				,i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
				,i_DesignTab:					[208, 33, 259, 47, '../images/ToggleImages/design.png']
				,i_PageLayoutTab:				[277, 33, 365, 47, '../images/ToggleImages/pagelayout.png']
				,i_ReferencesTab:				[383, 33, 462, 47, '../images/ToggleImages/references.png']
				,i_MailingsTab:					[479, 33, 546, 47, '../images/ToggleImages/mailings.png']
				,i_ReviewTab:					[562, 33, 619, 47, '../images/ToggleImages/review.png']
				,i_FileTab:						[20, 33, 65, 47, '../images/toggleImages/file.png']
				
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
				
			<!---VIEWS SECTION-->	
				,h_ReadMode: 					[4, 54, 46, 122]	
				,h_PrintLayout: 				[46, 54, 88, 122]	
				,h_WebLayout: 					[88, 54, 130, 122]	
				,h_Outline: 					[130, 51, 200, 75]
				,h_Draft: 						[130, 76, 185, 97]
				
			<!---SHOW SECTION-->	
				,h_Ruler: 						[210, 57, 223, 70]	
				,h_Gridlines: 					[210, 80, 223, 93]	
				,h_NavigationPane: 				[210, 102, 223, 116]
				
			<!---ZOOM SECTION-->	
				,h_Zoom: 						[330, 51, 372, 115]		
				,h_Zoom100: 					[374, 51, 414, 115]
				,h_OnePage:	 					[414, 54, 495, 75]	
				,h_MultiPages: 					[414, 77, 520, 97]		
				,h_PageWidth:	 				[414, 99, 503, 122]	
				
			<!---WINDOW SECTION-->	
				,h_NewWindow: 					[530, 51, 630, 75]
				,h_ArrangeAll: 					[530, 77, 616, 97]		
				,h_Split:	 					[530, 99, 584, 122]			
				,h_ViewSide: 					[640, 51, 662, 75]	
				,h_SwitchWindows:	 			[670, 53, 734, 122]			
				,h_Macros: 						[741, 53, 787, 90]	
				,h_MacrosDropdown:	 			[741, 90, 787, 122]							

		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->		
				,b_Undo: 						[65, 2, 97, 22]			
				,b_Macros:						[741, 53, 787, 122]
			
		}
	}