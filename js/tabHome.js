var keyHome = [
	//ROW 1	
	[60, 45, 84, 62,"\x12HX",'Y'],		//X
	[125, 45, 84, 62,"\x12HFF"],		//FF
	[195, 45, 84, 62,"\x12HFS"],		//FS
	[225, 45, 84, 62,"\x12HFG"],		//FG
	[250, 45, 84, 62,"\x12HFK"],		//FK
	[280, 45, 84, 62,"\x12H7"],			//7
	[315, 45, 84, 62,"\x12HE"],			//E
	[350, 45, 84, 62,"\x12HU"],			//U
	[380, 45, 84, 62,"\x12HN"],			//N
	[415, 45, 84, 62,"\x12HM"],			//M
	[460, 45, 84, 62,"\x12HAO"],		//AO
	[485, 45, 84, 62,"\x12HAI"],		//AI
	[510, 45, 84, 62,"\x12HSO"],		//SO
	[550, 45, 84, 62,"\x12H8"],			//8
	[820, 45, 128, 133,"\x12HFD"],		//FD
	
	//ROW 2
	[60, 80, 128, 133,"\x12HC",'Y'],	//C
	[825, 80, 128, 133,"\x12HR"],		//R
	
	//ROW 3	
	[20, 115, 128, 133,"\x12HV"],		//V
	[55, 115, 128, 133,"\x12HFP"],		//FP
	[89, 115, 128, 133,"\x12H1"],		//1
	[115, 115, 128, 133,"\x12H2"],		//2
	[135, 115, 128, 133,"\x12H3"],		//3
	[165, 115, 128, 133,"\x12H4"],		//4
	[195, 115, 128, 133,"\x12H5"],		//5
	[215, 115, 128, 133,"\x12H6"],		//6
	[240, 115, 128, 133,"\x12HFT"],		//FT
	[280, 115, 128, 133,"\x12HI"],		//I
	[300, 115, 128, 133,"\x12HFC"],		//FC
	[350, 115, 128, 133,"\x12HAL"],		//AL
	[375, 115, 128, 133,"\x12HAC"],		//AC
	[400, 115, 128, 133,"\x12HAR"],		//AR
	[425, 115, 128, 133,"\x12HAJ"],		//AJ
	[450, 115, 128, 133,"\x12HK"],		//K
	[490, 115, 128, 133,"\x12HH"],		//H
	[530, 115, 128, 133,"\x12HB"],		//B
	[795, 115, 128, 133,"\x12HL"],		//L
	[820, 115, 128, 133,"\x12HSL"],		//SL
	
	//ROW 4
	[55, 140, 128, 133,"\x12HF0"],		//FO
	[315, 140, 128, 133,"\x12HFN"],		//FN
	[540, 140, 128, 133,"\x12HPG"],		//PG
	[785, 140, 128, 133,"\x12HFY"],		//FY
	
];

var tabHome = 
	{
		headerimg: '../images/MainmenuTabs/home.png', 
		htmls: {
			t_Font: 						[79, 62, 153, 83, '<input type="text" class="textboxplain" value="Calibri (Body)" style="font-size:12px;">']
			,t_FontSize: 					[174, 62, 194, 83, '<input type="text" class="textboxplain" value="11" style="font-size:12px;>']
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
				,m_HomeTab: 					[64, 26, 122, 47, ['p0'],['',''],[]]
				,m_InsertTab:					[122, 26, 188, 47, ['p1'],['i_InsertTab',''],[]]
				,m_DesignTab:					[188, 26, 259, 47, ['p2'],['i_DesignTab',''],[]]
				,m_PageLayoutTab:				[259, 26, 365, 47, ['p3'],['i_PageLayoutTab',''],[]]
				,m_ReferencesTab:				[365, 26, 462, 47, ['p4'],['i_ReferencesTab',''],[]]
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['i_MailingsTab',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---CLIPBOARD SECTION-->
				,m_Cut:			 				[47, 53, 68, 78, ['a_\x12HX'], ['h_Cut'], ['r_Cut']]
				,m_Paste: 						[5, 53, 47, 92, ['a_\x12HV'], ['b_PasteIcon', 'h_Paste'], []]
				,m_PasteDropdown:				[5, 92, 47, 119, ['a_\x12HV'], ['b_PasteIcon', 'h_PasteDropdown'], []]
				,m_FormatPainter: 				[47, 100, 68, 122, ['a_\x12HFP'], ['h_FormatPainter'], []]
				,m_ClipboardDialogBox: 			[58, 127, 73, 142, ['a_\x12HFO'], ['h_ClipboardDialogBox'], []]

			<!---FONT SECTION-->
				,m_Bold: 						[78, 92, 100, 118, ['a_\x12H1'], ['h_Bold'], []]
				,m_Italic: 						[100, 92, 122, 118, ['a_\x12H2'], ['h_Italic'], []]
				,m_Underline:					[122, 92, 144, 118, ['a_\x12H3'], ['h_Underline','b_UnderlineIcon'], []]
				,m_UnderlineDropdown:			[144, 92, 156, 118, ['a_\x12H3'], ['h_UnderlineDropdown','b_UnderlineIcon'], []]
				,m_Strikethrough:				[156, 92, 178, 118, ['a_\x12H4'], ['h_Strikethrough'], []]
				,m_Subscript: 					[178, 92, 200, 118, ['a_\x12H5'], ['h_Subscript'], []]
				,m_Superscript:					[200, 92, 222, 118, ['a_\x12H6'], ['h_Superscript'], []]
				,m_TextEffect:					[232, 92, 262, 118, ['a_\x12HFT'], ['h_TextEffect'], []]
				,m_TextHighlightColor: 			[262, 92, 286, 118, ['a_\x12HI'], ['h_TextHighlightColor','b_TextHighlightColor'], []]
				,m_TextHighlightColorDropdown: 	[286, 92, 298, 118, ['a_\x12HI'], ['h_TextHighlightColorDropdown','b_TextHighlightColor'], []]
				,m_Font: 						[157, 62, 172, 83, ['a_\x12HFF'], ['h_Font', ''], []]
				,m_FontSize: 					[200, 62, 215, 83, ['a_\x12HFS'], ['h_FontSize', ''], []]
				,m_FontColor: 					[298, 92, 320, 118, ['a_\x12HFC'], ['h_FontColor', 'b_FontColor'], []]
				,m_FontColorDropdown: 			[320, 92, 332, 118, ['a_\x12HFC'], ['h_FontColorDropdown', 'b_FontColor'], []]
				,m_IncreaseFontSize: 			[214, 61, 238, 84, ['a_\x12HFG'], ['h_IncreaseFontSize'], []]
				,m_DecreaseFontSize: 			[238, 61, 260, 84, ['a_\x12HFK'], ['h_DecreaseFontSize'], []]
				,m_ChangeCase: 					[268, 61, 302, 84, ['a_\x12H7'], ['h_ChangeCase'], []]
				,m_ClearAllFormatting: 			[310, 61, 332, 84, ['a_\x12HE'], ['h_ClearAllFormatting'], []]
				,m_FontDialogBox: 				[322, 127, 337, 142, ['a_\x12HFN'], ['h_FontDialogBox'], []]
				
			<!---PARAGRAPH SECTION-->
				,m_AlignLeft: 					[338, 92, 362, 118, ['a_\x12HAL'], ['h_AlignLeft'], []]
				,m_AlignCenter: 				[360, 92, 384, 118, ['a_\x12HAC'], ['h_AlignCenter'], []]
				,m_AlignRight: 					[382, 92, 406, 118, ['a_\x12HAR'], ['h_AlignRight'], []]
				,m_AlignJustify:				[404, 92, 428, 118, ['a_\x12HAJ'], ['h_AlignJustify'], []]
				,m_LineAndSpacing: 				[438, 92, 470, 118, ['a_\x12HK'], ['h_LineAndSpacing'], []]
				,m_Shading: 					[481, 92, 502, 118, ['a_\x12HH'], ['h_Shading','b_Shading'], []]
				,m_ShadingDropdown: 			[502, 92, 514, 118, ['a_\x12HH'], ['h_ShadingDropdown','b_Shading'], []]
				,m_Borders: 					[514, 92, 535, 118, ['a_\x12HB'], ['h_Borders','b_Borders'], []]
				,m_BordersDropdown: 			[535, 92, 549, 118, ['a_\x12HB'], ['h_BordersDropdown','b_Borders'], []]
				,m_Bullets: 					[340, 61, 363, 84, ['a_\x12HU'], ['h_Bullets','b_Bullets'], []]
				,m_BulletsDropdown: 			[363, 61, 374, 84, ['a_\x12HU'], ['h_BulletsDropdown','b_Bullets'], []]
				,m_Numbering: 					[374, 61, 397, 84, ['a_\x12HN'], ['h_Numbering','b_Numbering'], []]
				,m_NumberingDropdown: 			[397, 61, 408, 84, ['a_\x12HN'], ['h_NumberingDropdown','b_Numbering'], []]
				,m_MultilevelList: 				[407, 61, 442, 84, ['a_\x12HM'], ['h_MultilevelList'], []]
				,m_DecreaseIndent: 				[450, 61, 472, 84, ['a_\x12HAO'], ['h_DecreaseIndent'], []]
				,m_IncreaseIndent: 				[472, 61, 494, 84, ['a_\x12HAI'], ['h_IncreaseIndent'], []]
				,m_Sort: 						[502, 61, 528, 84, ['a_\x12HSO'], ['h_Sort'], []]
				,m_ShowHide: 					[534, 61, 558, 84, ['a_\x12H8'], ['h_ShowHide'], []]
				,m_ParagraphDialogBox: 			[546, 127, 561, 142, ['a_\x12HPG'], ['h_ParagraphDialogBox'], []]

			<!---STYLES SECTION-->
				,m_Normal:						[567, 57, 640, 116, ['a_N'], ['B_Normal'], []]
				,m_NoSpacing:					[640, 57, 714, 116, ['a_N'], ['B_NoSpacing'], []]
				,m_Heading:						[714, 57, 784, 116, ['a_N'], ['B_Heading'], []]
				,m_Row1of6: 					[785, 78, 800, 96, ['a_N'], ['h_Row1of6'], []]
				,m_More: 						[785, 96, 800, 115, ['a_\x12HL'], ['h_More'], []]
				,m_StylesDialogBox: 			[792, 127, 807, 142, ['a_\x12HFY'], ['h_StylesDialogBox'], []]
				
			<!---EDITING SECTION-->
				,m_Find: 						[812, 52, 863, 77, ['a_\x12HFD'], ['h_Find','b_Find'], []]
				,m_FindDropdown: 				[863, 52, 878, 77, ['a_\x12HFD'], ['h_FindDropdown','b_Find'], []]
				,m_Replace: 					[812, 77, 882, 99, ['a_\x12HR'], ['h_Replace'], []]
				,m_Select: 						[812, 99, 882, 123, ['a_\x12HSL'], ['h_Select'], []]
		},
		
		action: {
		
				i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
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
				,h_Repeat:						[105, 2, 126, 22]
				,h_Customize:					[134, 2, 145, 22]			
				,h_Help: 						[795, 2, 822, 22]
				,h_DisplayOptions: 				[823, 2, 852, 22]
				,h_Minimize:					[852, 2, 880, 22]
				,h_Maximize: 					[882, 2, 910, 22]
				,h_Close:	 					[912, 2, 938, 22]
			
			<!---CLIPBOARD SECTION-->
				,h_Cut:			 				[47, 53, 68, 78]
				,h_Paste: 						[5, 53, 47, 92]
				,h_PasteDropdown:				[5, 92, 47, 119]
				,h_FormatPainter: 				[47, 100, 68, 122]
				,h_ClipboardDialogBox: 			[58, 127, 73, 142]
				
			<!---FONT SECTION-->
				,h_Bold: 						[78, 92, 100, 118]
				,h_Italic: 						[100, 92, 122, 118]
				,h_Underline: 					[122, 92, 144, 118]
				,h_UnderlineDropdown:			[144, 92, 156, 118]
				,h_Strikethrough:				[156, 92, 178, 118]
				,h_Subscript:					[178, 92, 200, 118]
				,h_Superscript:					[200, 92, 222, 118]
				,h_TextEffect:					[232, 92, 262, 118]
				,h_TextHighlightColor: 			[262, 92, 286, 118]
				,h_TextHighlightColorDropdown:	[286, 92, 298, 118]
				,h_Font: 						[157, 62, 172, 83]
				,h_FontSize: 					[200, 62, 215, 83]
				,h_FontColor:					[298, 92, 320, 118]
				,h_FontColorDropdown:			[320, 92, 332, 118]
				,h_IncreaseFontSize: 			[214, 61, 238, 84]
				,h_DecreaseFontSize: 			[238, 61, 260, 84]
				,h_ChangeCase: 					[268, 61, 302, 84]
				,h_ClearAllFormatting: 			[310, 61, 332, 84]
				,h_FontDialogBox: 				[322, 127, 337, 142]
				
			<!---PARAGRAPH SECTION-->
				,h_AlignLeft:					[340, 92, 362, 118]
				,h_AlignCenter:					[362, 92, 384, 118]
				,h_AlignRight:					[384, 92, 406, 118]
				,h_AlignJustify:				[406, 92, 428, 118]
				,h_LineAndSpacing: 				[438, 92, 470, 118]
				,h_Shading: 					[481, 92, 502, 118]
				,h_ShadingDropdown: 			[502, 92, 514, 118]
				,h_Borders: 					[514, 92, 535, 118]
				,h_BordersDropdown: 			[535, 92, 549, 118]
				,h_Bullets: 					[340, 61, 363, 84]
				,h_BulletsDropdown: 			[363, 61, 374, 84]
				,h_Numbering: 					[374, 61, 397, 84]
				,h_NumberingDropdown: 			[397, 61, 408, 84]
				,h_MultilevelList: 				[407, 61, 442, 84]
				,h_DecreaseIndent: 				[450, 61, 472, 84]
				,h_IncreaseIndent: 				[472, 61, 494, 84]
				,h_Sort: 						[502, 61, 528, 84]
				,h_ShowHide: 					[534, 61, 558, 84]
				,h_ParagraphDialogBox: 			[546, 127, 561, 142]
				
			<!---STYLES SECTION-->
				,h_Row1of6: 					[785, 78, 800, 96]
				,h_More: 						[785, 96, 800, 115]
				,h_StylesDialogBox: 			[792, 127, 807, 142]

			<!---EDITING SECTION-->			
				,h_Find: 						[812, 52, 863, 77]
				,h_FindDropdown: 				[863, 52, 878, 77]
				,h_Replace: 					[812, 77, 882, 99]
				,h_Select: 						[812, 99, 882, 123]
			
		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->	
				,b_Undo: 						[65, 2, 97, 22]
				,b_PasteIcon: 					[5, 53, 47, 119]
				,b_UnderlineIcon:				[122, 92, 156, 118]
				,b_TextHighlightColor: 			[262, 92, 298, 118]
				,b_FontColor: 					[298, 92, 332, 118]
				,b_Shading: 					[481, 92, 514, 118]
				,b_Borders: 					[514, 92, 549, 118]
				,b_Bullets: 					[340, 61, 374, 84]
				,b_Numbering: 					[374, 61, 408, 84]
				,B_Normal: 						[567, 57, 640, 116]
				,B_NoSpacing: 					[640, 57, 714, 116]
				,B_Heading: 					[714, 57, 784, 116]
				,b_Find: 						[812, 52, 878, 77]
		}
	}