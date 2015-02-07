var keyReview = [
	//ROW 1
	[80, 45, 84, 62,"\x12RI"],			//I
	[325, 45, 84, 62,"\x12RV",'Y'],		//V
	[510, 45, 84, 62,"\x12RTD"],		//TD
	[690, 45, 84, 62,"\x12RJ"],			//J
	
	//ROW 2
	[80, 80, 128, 133,"\x12RE"],		//E
	[325, 80, 128, 133,"\x12RN",'Y'],	//N
	[510, 80, 128, 133,"\x12RTM"],		//TM
	[690, 80, 128, 133,"\x12RF"],		//F	
	
	//ROW 3	
	[30, 115, 128, 133,"\x12RS"],		//S
	[80, 115, 128, 133,"\x12RW"],		//W
	[115, 115, 128, 133,"\x12RL"],		//L
	[170, 115, 128, 133,"\x12RU"],		//U
	[235, 115, 128, 133,"\x12RC"],		//C
	[290, 115, 128, 133,"\x12RD",'Y'],	//D
	[325, 115, 128, 133,"\x12RK",'Y'],	//K
	[465, 115, 128, 133,"\x12RG"],		//G
	[510, 115, 128, 133,"\x12RTP"],		//TP
	[655, 115, 128, 133,"\x12RA"],		//A
	[690, 115, 128, 133,"\x12RH"],		//H
	[745, 115, 128, 133,"\x12RM"],		//M
	[805, 115, 128, 133,"\x12RPB",'Y'],	//PB
	[855, 115, 128, 133,"\x12RPE"],		//PE
		
	//ROW 4
	[620, 140, 128, 133,"\x12RO"],		//O
	
	
];

var tabReview = {
		headerimg: '../images/MainmenuTabs/review.png', 
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
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---PROOFING SECTION-->	
				,m_SpellingAndGrammar:			[3, 53, 64, 122, ['a_\x12RS'], ['h_SpellingAndGrammar'], []]	
				,m_Define: 						[64, 53, 85, 75, ['a_\x12RI'], ['h_Define'], []]	
				,m_Thesaurus: 					[64, 75, 85, 97, ['a_\x12RE'], ['h_Thesaurus'], []]	
				,m_WordCount: 					[64, 98, 85, 122, ['a_\x12RW'], ['h_WordCount'], []]	
				
			<!---LANGUAGE AND COMMENTS SECTION-->	
				,m_Translate:					[95, 53, 147, 122, ['a_\x12RL'], ['h_Translate'], []]	
				,m_Language: 					[148, 53, 204, 122, ['a_\x12RU'], ['h_Language'], []]	
				,m_NewComment: 					[213, 53, 272, 124, ['a_\x12RC'], ['h_NewComment'], []]	
				
			<!---TRACKING SECTION-->	
				,m_TrackChanges:				[443, 53, 502, 91, ['a_\x12RG'], ['h_TrackChanges','b_TrackChanges'], []]	
				,m_TrackChangesDropdown:		[443, 91, 502, 124, ['a_\x12RG'], ['h_TrackChangesDropdown','b_TrackChanges'], []]	
				,m_SimpleMarkup: 				[525, 53, 630, 75, ['a_\x12RTD'], ['h_SimpleMarkup','b_SimpleMarkup'], []]	
				,m_ShowMarkup: 					[504, 77, 611, 99, ['a_\x12RTM'], ['h_ShowMarkup'], []]	
				,m_ReviewingPane: 				[504, 100, 613, 124, ['a_\x12RTP'], ['h_ReviewingPane','b_ReviewingPane'], []]	
				,m_ReviewingPaneDropdown:		[613, 100, 630, 124, ['a_\x12RTP'], ['h_ReviewingPaneDropdown','b_ReviewingPane'], []]	
				
			<!---CHANGES SECTION-->	
				,m_Accept:						[639, 53, 681, 90, ['a_\x12RA'], ['h_Accept','b_Accept'], []]	
				,m_AcceptDropdown:				[639, 90, 681, 124, ['a_\x12RA'], ['h_AcceptDropdown','b_Accept'], []]	
				,m_Reject: 						[682, 53, 703, 75, ['a_\x12RJ'], ['h_Reject','b_Reject'], []]	
				,m_RejectDropdown: 				[703, 53, 716, 75, ['a_\x12RJ'], ['h_RejectDropdown','b_Reject'], []]	
				,m_PreviousChange: 				[682, 75, 703, 99, ['a_\x12RF'], ['h_PreviousChange'], []]	
				,m_NextChange: 					[682, 100, 703, 124, ['a_\x12RH'], ['h_NextChange'], []]	
				,m_Compare:						[724, 53, 780, 124, ['a_\x12RM'], ['h_Compare'], []]		
				,m_RestrictEditing:				[843, 53, 888, 124, ['a_\x12RPE'], ['h_RestrictEditing'], []]		
		},
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']
				,i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
				,i_DesignTab:					[208, 33, 259, 47, '../images/ToggleImages/design.png']
				,i_PageLayoutTab:				[277, 33, 365, 47, '../images/ToggleImages/pagelayout.png']
				,i_ReferencesTab:				[383, 33, 462, 47, '../images/ToggleImages/references.png']
				,i_MailingsTab:					[479, 33, 546, 47, '../images/ToggleImages/mailings.png']			
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
				
			<!---PROOFING SECTION-->	
				,h_SpellingAndGrammar:			[3, 53, 64, 122]	
				,h_Define: 						[64, 53, 85, 75]	
				,h_Thesaurus: 					[64, 75, 85, 97]	
				,h_WordCount: 					[64, 98, 85, 122]	
			
			<!---LANGUAGE AND COMMENTS SECTION-->	
				,h_Translate:					[95, 53, 147, 122]		
				,h_Language: 					[148, 53, 204, 122]	
				,h_NewComment: 					[213, 53, 272, 124]	
				
			<!---TRACKING SECTION-->	
				,h_TrackChanges:				[443, 53, 502, 91]
				,h_TrackChangesDropdown:		[443, 91, 502, 124]
				,h_SimpleMarkup: 				[615, 53, 630, 75]	
				,h_ShowMarkup: 					[504, 77, 611, 99]
				,h_ReviewingPane:				[504, 100, 613, 124]
				,h_ReviewingPaneDropdown:		[613, 100, 630, 124]			
				,h_Accept:						[639, 53, 681, 90]
				,h_AcceptDropdown:				[639, 90, 681, 124]	
				,h_Reject: 						[682, 53, 703, 75]
				,h_RejectDropdown: 				[703, 53, 716, 75]	
				,h_PreviousChange: 				[682, 75, 703, 99]
				,h_NextChange: 					[682, 100, 703, 124]
				,h_Compare:						[724, 53, 780, 124]					
				,h_RestrictEditing:				[843, 53, 888, 124]		
				
		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->		
				,b_Undo: 						[65, 2, 97, 22]			
				,b_TrackChanges:				[443, 53, 502, 124]		
				,b_SimpleMarkup: 				[525, 53, 630, 75]
				,b_ReviewingPane: 				[504, 100, 630, 124]				
				,b_Accept:						[639, 53, 681, 124]	
				,b_Reject: 						[682, 53, 716, 75]	
		}
	}