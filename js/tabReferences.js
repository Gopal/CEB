var keyReferences = [	
	//ROW 1	
	[80, 45, 84, 62,"\x12SA"],			//A
	[240, 45, 84, 62,"\x12SE"],			//E
	[420, 45, 84, 62,"\x12SM"],			//M
	[590, 45, 84, 62,"\x12SG"],			//G
	[790, 45, 84, 62,"\x12SX"],			//X
	[875, 45, 84, 62,"\x12SRT"],		//RT
	
	//ROW 2
	[80, 80, 128, 133,"\x12SU"],		//U
	[240, 80, 128, 133,"\x12SO"],		//O
	[420, 80, 128, 133,"\x12SL"],		//L
	[590, 80, 128, 133,"\x12SV",'Y'],	//V
	[790, 80, 128, 133,"\x12SD",'Y'],	//D
	[875, 80, 128, 133,"\x12SRU",'Y'],	//RU
	
	//ROW 3	
	[20, 115, 128, 133,"\x12ST"],		//T
	[190, 115, 128, 133,"\x12SF"],		//F
	[240, 115, 128, 133,"\x12SH",'Y'],	//H
	[370, 115, 128, 133,"\x12SC"],		//C
	[420, 115, 128, 133,"\x12SB"],		//B
	[555, 115, 128, 133,"\x12SP"],		//P
	[590, 115, 128, 133,"\x12SRF"],		//RF
	[750, 115, 128, 133,"\x12SN"],		//N
	[840, 115, 128, 133,"\x12SI"],		//I
		
	//ROW 4
	[335, 140, 128, 133,"\x12SQ"],		//Q	
	
];

var tabReferences = {
		headerimg: '../images/MainmenuTabs/references.png', 
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
				,m_ReferencesTab:				[365, 26, 462, 47, ['p4'],['',''],[]]
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['i_MailingsTab',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---TABLE OF CONTENTS SECTION-->	
				,m_TableOfContents:				[3, 53, 66, 122, ['a_\x12ST'], ['h_TableOfContents'], []]	
				,m_AddText:						[65, 53, 148, 75, ['a_\x12SA'], ['h_AddText'], []]	
				,m_UpdateTable:					[65, 77, 162, 99, ['a_\x12SU'], ['h_UpdateTable'], []]

			<!---FOOTNOTES SECTION-->	
				,m_InsertFootNote:				[172, 53, 227, 122, ['a_\x12SF'], ['h_InsertFootNote'], []]	
				,m_InsertEndNote:				[227, 53, 328, 75, ['a_\x12SE'], ['h_InsertEndNote'], []]	
				,m_NextFootNote:				[227, 77, 328, 99, ['a_\x12SO'], ['h_NextFootNote','b_NextFootNote'], []]		
				,m_NextFootNoteDropdown:		[328, 77, 343, 99, ['a_\x12SO'], ['h_NextFootNoteDropdown','b_NextFootNote'], []]		
			
			<!---CITATIONS AND BIBLIOGRAPHY SECTION-->	
				,m_InsertCitation:				[350, 53, 407, 122, ['a_\x12SC'], ['h_InsertCitation'], []]
				,m_ManageSources:				[407, 53, 520, 75, ['a_\x12SM'], ['h_ManageSources'], []]
				,m_Style:						[510, 77, 524, 99, ['a_\x12SL'], ['h_Style'], []]
				,m_Bibliography:				[407, 100, 510, 122, ['a_\x12SB'], ['h_Bibliography'], []]
			
			<!---CAPTIONS SECTION-->		
				,m_InsertCaption:				[534, 53, 582, 122, ['a_\x12SP'], ['h_InsertCaption'], []]
				,m_InsertTableOfFigures:		[584, 53, 724, 75, ['a_\x12SG'], ['h_InsertTableOfFigures'], []]	
				,m_CrossReference:				[582, 99, 692, 122, ['a_\x12SRF'], ['h_CrossReference'], []]	
				
			<!---INDEX AND TABLE OF AUTHORITY SECTION-->
				,m_MarkEntry:					[734, 53, 776, 122, ['a_\x12SN'], ['h_MarkEntry'], []]
				,m_InsertIndex:					[778, 53, 798, 75, ['a_\x12SX'], ['h_InsertIndex'], []]
				,m_MarkCitation:				[820, 53, 868, 122, ['a_\x12SI'], ['h_MarkCitation'], []]
				,m_InsertTableOfAuthority:		[870, 53, 890, 75, ['a_\x12SRT'], ['h_InsertTableOfAuthority'], []]		
		},
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']
				,i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
				,i_DesignTab:					[208, 33, 259, 47, '../images/ToggleImages/design.png']
				,i_PageLayoutTab:				[277, 33, 365, 47, '../images/ToggleImages/pagelayout.png']			
				,i_MailingsTab:					[479, 33, 546, 47, '../images/ToggleImages/mailings.png']
				,i_ReviewTab:					[562, 33, 619, 47, '../images/ToggleImages/review.png']
				,i_ViewTab:						[630, 32, 677, 47, '../images/ToggleImages/view.png']
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
				
			<!---TABLE SECTION-->	
				,h_TableOfContents:				[3, 53, 66, 122]	
				,h_AddText:						[65, 53, 148, 75]	
				,h_UpdateTable:					[65, 77, 162, 99]	
			
			<!---FOOTNOTES SECTION-->	
				,h_InsertFootNote:				[172, 53, 227, 122]	
				,h_InsertEndNote:				[227, 53, 328, 75]		
				,h_NextFootNote:				[227, 77, 328, 99]	
				,h_NextFootNoteDropdown:		[328, 77, 343, 99]	
			
			<!---CITATIONS AND BIBLIOGRAPHY SECTION-->	
				,h_InsertCitation:				[350, 53, 407, 122]
				,h_ManageSources:				[407, 53, 520, 75]
				,h_Style:						[510, 77, 524, 99]
				,h_Bibliography:				[407, 100, 510, 122]
				
			<!---CAPTIONS SECTION-->		
				,h_InsertCaption:				[534, 53, 582, 122]
				,h_InsertTableOfFigures:		[584, 53, 724, 75]		
				,h_CrossReference:				[582, 99, 692, 122]

			<!---INDEX AND TABLE OF AUTHORITY SECTION-->		
				,h_MarkEntry:					[734, 53, 776, 122]
				,h_InsertIndex:					[778, 53, 798, 75]
				,h_MarkCitation:				[820, 53, 868, 122]
				,h_InsertTableOfAuthority:		[870, 53, 890, 75]

		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->		
				,b_Undo: 						[65, 2, 97, 22]			
				,b_NextFootNote:				[227, 77, 343, 99]				
			
		}
	}