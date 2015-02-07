var keyDesign = [
	//ROW 1	
	[600, 45, 84, 62,"\x12GPS"],		//PS	
	
	//ROW 2
	[600, 80, 128, 133,"\x12GTE"],		//TE
	
	//ROW 3	
	[15, 115, 128, 133,"\x12GTH"],		//TH
	[495, 115, 128, 133,"\x12GS"],		//S
	[515, 115, 128, 133,"\x12GTC"],		//TC
	[560, 115, 128, 133,"\x12GTF"],		//TF
	[600, 115, 128, 133,"\x12GD"],		//D
	[755, 115, 128, 133,"\x12GPW"],		//PW
	[805, 115, 128, 133,"\x12GPC"],		//PC
	[855, 115, 128, 133,"\x12GPB"],		//PB
	
];

var tabDesign = {
		headerimg: '../images/MainmenuTabs/design.png', 
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
				,m_DesignTab:					[188, 26, 259, 47, ['p2'],['',''],[]]
				,m_PageLayoutTab:				[259, 26, 365, 47, ['p3'],['i_PageLayoutTab',''],[]]
				,m_ReferencesTab:				[365, 26, 462, 47, ['p4'],['i_ReferencesTab',''],[]]
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['i_MailingsTab',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---DOCUMENT FORMATTING SECTION-->	
				,m_Themes: 						[4, 53, 50, 122, ['a_\x12GTH'], ['h_Themes'], []]	
				,m_Title1: 						[53, 57, 125, 116, ['a_s'], ['B_Title1'], []]	
				,m_Title2: 						[124, 57, 195, 116, ['a_s'], ['B_Title2'], []]	
				,m_Title3: 						[194, 57, 268, 116, ['a_s'], ['B_Title3'], []]	
				,m_Title4: 						[267, 57, 340, 116, ['a_s'], ['B_Title4'], []]	
				,m_Title5: 						[339, 57, 412, 116, ['a_s'], ['B_Title5'], []]	
				,m_Title6: 						[411, 57, 486, 116, ['a_s'], ['B_Title6'], []]	
				,m_Row1of5: 					[486, 77, 500, 97, ['a_s'], ['h_Row1of5'], []]	
				,m_More: 						[486, 97, 500, 117, ['a_\x12GS'], ['h_More'], []]				
				,m_Colors: 						[504, 53, 546, 122, ['a_\x12GTC'], ['h_Colors'], []]	
				,m_Fonts: 						[547, 53, 587, 122, ['a_\x12GTF'], ['h_Fonts'], []]	
				,m_ParagraphSpacing:			[588, 53, 723, 75, ['a_\x12GPS'], ['h_ParagraphSpacing'], []]	
				,m_Effects: 					[588, 76, 658, 97, ['a_\x12GPE'], ['h_Effects'], []]	
				,m_SetAsDefault:				[588, 100, 688, 122, ['a_\x12GD'], ['h_SetAsDefault'], []]	
			
			<!---PAGE BACKGROUND SECTION-->	
				,m_Watermark: 					[733, 53, 796, 122, ['a_\x12GPW'], ['h_Watermark'], []]	
				,m_PageColor: 					[796, 53, 838, 122, ['a_\x12GPC'], ['h_PageColor'], []]	
				,m_PageBorders: 				[838, 53, 883, 122, ['a_\x12GPB'], ['h_PageBorders'], []]	
		},
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']
				,i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
				,i_PageLayoutTab:				[277, 33, 365, 47, '../images/ToggleImages/pagelayout.png']
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
				
			<!---DOCUMENT FORMATTING SECTION-->	
				,h_Themes: 						[4, 53, 50, 122]	
				,h_Row1of5: 					[486, 77, 500, 97]	
				,h_More: 						[486, 97, 500, 117]	
				,h_Colors: 						[504, 53, 546, 122]	
				,h_Fonts: 						[547, 53, 587, 122]	
				,h_ParagraphSpacing:			[588, 53, 723, 75]	
				,h_Effects: 					[588, 76, 658, 97]	
				,h_SetAsDefault:				[588, 100, 688, 122]

			<!---PAGE BACKGROUND SECTION-->	
				,h_Watermark: 					[733, 53, 796, 122]	
				,h_PageColor: 					[796, 53, 838, 122]	
				,h_PageBorders: 				[838, 53, 883, 122]				

		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->	
				,b_Undo: 						[65, 2, 97, 22]			
				,B_Title1: 						[53, 57, 125, 116]
				,B_Title2: 						[124, 57, 195, 116]
				,B_Title3: 						[194, 57, 268, 116]
				,B_Title4: 						[267, 57, 340, 116]
				,B_Title5: 						[339, 57, 412, 116]
				,B_Title6: 						[411, 57, 486, 116]				
		}
	}