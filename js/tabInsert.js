var keyInsert = [
	//ROW 1	
	[245, 45, 84, 62,"\x12NM"],			//M
	[560, 45, 84, 62,"\x12NH"],			//H
	[720, 45, 84, 62,"\x12NQ"],			//Q
	[755, 45, 84, 62,"\x12NG"],			//G
	
	//ROW 2
	[245, 80, 128, 133,"\x12NC"],		//C
	[560, 80, 128, 133,"\x12NO"],		//O
	[720, 80, 128, 133,"\x12NW"],		//W
	[755, 80, 128, 133,"\x12ND"],		//D
	
	//ROW 3	
	[65, 115, 128, 133,"\x12NT"],		//T
	[120, 115, 128, 133,"\x12NP"],		//P
	[165, 115, 128, 133,"\x12NF"],		//F
	[205, 115, 128, 133,"\x12NSH"],		//SH
	[245, 115, 128, 133,"\x12NSC"],		//SC
	[390, 115, 128, 133,"\x12NNV"],		//NV
	[500, 115, 128, 133,"\x12NL"],		//L
	[560, 115, 128, 133,"\x12NNU"],		//NU
	[680, 115, 128, 133,"\x12NX"],		//X
	[715, 115, 128, 133,"\x12NRC",'Y'],	//RC
	[760, 115, 128, 133,"\x12NJ"],		//J
	
	//ROW 4
	[15, 140, 128, 133,"\x12NZP"],		//ZP
	[345, 140, 128, 133,"\x12NZK"],		//ZK
	[440, 140, 128, 133,"\x12NZL"],		//ZL
	[795, 140, 128, 133,"\x12NZS"],		//ZS
	
];

var tabInsert = {
		headerimg: '../images/MainmenuTabs/insert.png', 
		marks: {
				
			<!---HEADER -->		
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				m_Save: 						[35, 2, 60, 22, ['a_s'], ['h_Save'], []]
				,m_Undo: 						[65, 2, 86, 22, ['a_s'], ['h_Undo','b_Undo'], []]
				,m_UndoDropdown:				[86, 2, 97, 22, ['a_s'], ['h_UndoDropdown','b_Undo'], []]
				,m_Customize:					[134, 2, 145, 22, ['a_s'], ['h_Customize'], []]			
				,m_Help: 						[795, 2, 822, 22, ['a_s'], ['h_Help'], []]
				,m_DisplayOptions: 				[823, 2, 852, 22, ['a_s'], ['h_DisplayOptions'], []]
				,m_Minimize:					[852, 2, 880, 22, ['a_s'], ['h_Minimize'], []]
				,m_Maximize: 					[882, 2, 910, 22, ['a_s'], ['h_Maximize'], []]
				,m_Close:	 					[912, 2, 938, 22, ['a_s'], ['h_Close'], []]
			
			<!---MAIN MENU TABS-->				
				,m_HomeTab: 					[64, 26, 122, 47, ['p0'],['i_HomeTab',''],[]]
				,m_InsertTab:					[122, 26, 188, 47, ['p1'],['',''],[]]
				,m_DesignTab:					[188, 26, 259, 47, ['p2'],['i_DesignTab',''],[]]
				,m_PageLayoutTab:				[259, 26, 365, 47, ['p3'],['i_PageLayoutTab',''],[]]
				,m_ReferencesTab:				[365, 26, 462, 47, ['p4'],['i_ReferencesTab',''],[]]
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['i_MailingsTab',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---TABLE SECTION-->	
				,m_Pages: 						[3, 53, 40, 122, ['a_\x12NZP'], ['h_Pages'], []]	
				,m_Tables: 						[49, 53, 89, 122, ['a_\x12NT'], ['h_Tables'], []]
				
			<!---ILLUSTRATIONS SECTION-->
				,m_Pictures: 					[99, 53, 147, 122, ['a_\x12NP'], ['h_Pictures'], []]
				,m_OnlinePictures: 				[147, 53, 192, 122, ['a_\x12NF'], ['h_OnlinePictures'], []]
				,m_Shapes: 						[192, 53, 234, 122, ['a_\x12NSH'], ['h_Shapes'], []]
				,m_SmartArt: 					[234, 53, 310, 75, ['a_\x12NM'], ['h_SmartArt'], []]
				,m_Chart: 						[234, 78, 297, 100, ['a_\x12NC'], ['h_Chart'], []]
				,m_Screenshot: 					[234, 100, 330, 122, ['a_\x12NSC'], ['h_Screenshot'], []]
				
			<!---MEDIA AND COMMENT SECTION-->
				,m_AppsForOffice: 				[338, 52, 375, 87, ['a_\x12NZK'], ['h_AppsForOffice','b_AppsForOffice'], []]
				,m_AppsForOfficeDropdown: 		[338, 87, 375, 122, ['a_\x12NZK'], ['h_AppsForOfficeDropdown','b_AppsForOffice'], []]
				,m_OnlineVideo: 				[384, 53, 426, 122, ['a_\x12NNV'], ['h_OnlineVideo'], []]
				,m_Links: 						[432, 52, 471, 122, ['a_\x12NZL'], ['h_Links'], []]
				,m_Comments: 					[478, 53, 536, 122, ['a_\x12NL'], ['h_Comments'], []]
				
			<!---HEADER AND FOOTER SECTION-->
				,m_Header: 						[548, 53, 618, 75, ['a_\x12NH'], ['h_Header'], []]
				,m_Footer: 						[548, 75, 614, 97, ['a_\x12NO'], ['h_Footer'], []]
				,m_PageNumber: 					[548, 99, 656, 122, ['a_\x12NNU'], ['h_PageNumber'], []]
				
			<!---TEXT AND SYMBOLS SECTION-->
				,m_Textbox: 					[663, 53, 707, 122, ['a_\x12NX'], ['h_Textbox'], []]
				,m_ExploreQuickParts:			[707, 53, 740, 75, ['a_\x12NQ'], ['h_ExploreQuickParts'], []]
				,m_InsertWordArt:				[707, 75, 740, 97, ['a_\x12NW'], ['h_InsertWordArt'], []]
				,m_AddSignatureLine:			[740, 53, 762, 75, ['a_\x12NG'], ['h_AddSignatureLine', 'b_AddSignatureLine'], []]
				,m_AddSignatureLineDropdown:	[762, 53, 775, 75, ['a_\x12NG'], ['h_AddSignatureLineDropdown', 'b_AddSignatureLine'], []]
				,m_InserDateAndTime:			[740, 75, 762, 97, ['a_\x12ND'], ['h_InserDateAndTime'], []]
				,m_Object: 						[740, 99, 762, 122, ['a_\x12NJ'], ['h_Object','b_Object'], []]
				,m_ObjectDropdown:				[762, 99, 775, 122, ['a_\x12NJ'], ['h_ObjectDropdown','b_Object'], []]
				,m_Symbols:						[782, 52, 829, 122, ['a_\x12NZS'], ['h_Symbols'], []]
		},
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']			
				,i_DesignTab:					[208, 33, 259, 47, '../images/ToggleImages/design.png']
				,i_PageLayoutTab:				[277, 33, 365, 47, '../images/ToggleImages/pagelayout.png']
				,i_ReferencesTab:				[383, 33, 462, 47, '../images/ToggleImages/references.png']
				,i_MailingsTab:					[479, 33, 546, 47, '../images/ToggleImages/mailings.png']
				,i_ReviewTab:					[562, 33, 619, 47, '../images/ToggleImages/review.png']
				,i_ViewTab:						[630, 32, 677, 47, '../images/ToggleImages/view.png']
				,i_FileTab:						[20, 33, 65, 47, '../images/toggleImages/file.png']
				
		<!---------------------------HIGHLIGHT BACKGROUND----------------------------------------------->
			
			<!---HEADER-->
				,h_Save: 						[35, 2, 60, 22]
				,h_Undo: 						[65, 2, 86, 22]
				,h_UndoDropdown:				[86, 2, 97, 22]
				,h_Customize:					[134, 2, 145, 22]			
				,h_Help: 						[795, 2, 822, 22]
				,h_DisplayOptions: 				[823, 2, 852, 22]
				,h_Minimize:					[852, 2, 880, 22]
				,h_Maximize: 					[882, 2, 910, 22]
				,h_Close:	 					[912, 2, 938, 22]
				
			<!---TABLE SECTION-->	
				,h_Pages: 						[3, 53, 40, 122]	
				,h_Tables: 						[49, 53, 89, 122]
				
			<!---ILLUSTRATIONS SECTION-->
				,h_Pictures: 					[99, 53, 147, 122]
				,h_OnlinePictures: 				[147, 53, 192, 122]
				,h_Shapes: 						[192, 53, 234, 122]
				,h_SmartArt: 					[234, 53, 310, 75]
				,h_Chart: 						[234, 78, 297, 100]
				,h_Screenshot: 					[234, 100, 330, 122]
				
			<!---MEDIA AND COMMENT SECTION-->
				,h_AppsForOffice:				[338, 52, 375, 87]
				,h_AppsForOfficeDropdown:		[338, 87, 375, 122]
				,h_OnlineVideo:					[384, 53, 426, 122]
				,h_Links:	 					[432, 52, 471, 122]
				,h_Comments: 					[478, 53, 536, 122]
				
			<!---HEADER AND FOOTER SECTION-->
				,h_Header: 						[548, 53, 618, 75]
				,h_Footer: 						[548, 75, 614, 97]
				,h_PageNumber: 					[548, 99, 656, 122]
				
			<!---TEXT AND SYMBOLS SECTION-->
				,h_Textbox: 					[663, 53, 707, 122]
				,h_ExploreQuickParts:			[707, 53, 740, 75]
				,h_InsertWordArt:				[707, 75, 740, 97]
				,h_AddSignatureLine:			[740, 53, 762, 75]
				,h_AddSignatureLineDropdown:	[762, 53, 775, 75]
				,h_InserDateAndTime:			[740, 75, 762, 97]
				,h_Object: 						[740, 99, 762, 122]
				,h_ObjectDropdown:				[762, 99, 775, 122]
				,h_Symbols:						[782, 52, 829, 122]		

		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->		
				,b_Undo: 						[65, 2, 97, 22]			
				,b_AppsForOffice:				[338, 52, 375, 122]
				,b_AddSignatureLine:			[740, 53, 775, 75]	
				,b_Object:						[740, 99, 775, 122]	
		}
	}
	