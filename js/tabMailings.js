var keyMailings = [
	//ROW 1
	[20, 45, 84, 62,"\x12ME"],			//E
	[550, 45, 84, 62,"\x12MU",'Y'],		//U
	[715, 45, 84, 62,"\x12MQ",'Y'],		//Q
	[745, 45, 84, 62,"\x12MM",'Y'],		//M
	[770, 45, 84, 62,"\x12MW",'Y'],		//W
	[810, 45, 84, 62,"\x12MX",'Y'],		//X
	[835, 45, 84, 62,"\x12MV",'Y'],		//V
	
	//ROW 2	
	[550, 80, 128, 133,"\x12MT",'Y'],	//T	
	[715, 80, 128, 133,"\x12MJ",'Y'],	//J
	
	//ROW 3	
	[20, 115, 128, 133,"\x12ML"],		//L
	[120, 115, 128, 133,"\x12MS"],		//S
	[180, 115, 128, 133,"\x12MR"],		//R
	[250, 115, 128, 133,"\x12MD",'Y'],	//D
	[330, 115, 128, 133,"\x12MH",'Y'],	//H	
	[385, 115, 128, 133,"\x12MA",'Y'],	//A
	[440, 115, 128, 133,"\x12MG",'Y'],	//G
	[500, 115, 128, 133,"\x12MI",'Y'],	//I
	[550, 115, 128, 133,"\x12MB",'Y'],	//B
	[670, 115, 128, 133,"\x12MP",'Y'],	//P
	[715, 115, 128, 133,"\x12MK",'Y'],	//K
	[870, 115, 128, 133,"\x12MF",'Y'],	//F

];

var tabMailings = {
		headerimg: '../images/MainmenuTabs/mailings.png', 
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
				,m_MailingsTab:					[462, 26, 546, 47, ['p5'],['',''],[]]
				,m_ReviewTab:					[546, 26, 619, 47, ['p6'],['i_ReviewTab',''],[]]
				,m_ViewTab:						[619, 26, 677, 47, ['p7'],['i_ViewTab',''],[]]
				,m_FileTab:						[0, 26, 57, 47, ['p8'],['i_FileTab',''],[]]
				
			<!---CREATE SECTION-->	
				,m_Envelopes:					[4, 63, 87, 85, ['a_\x12ME'], ['h_Envelopes'], []]	
				,m_Labels: 						[4, 91, 65, 116, ['a_\x12ML'], ['h_Labels'], []]	
				,m_StartMailMerge: 				[94, 54, 148, 126, ['a_\x12MS'], ['h_StartMailMerge'], []]	
				,m_SelectRecipients: 			[149, 54, 217, 126, ['a_\x12MR'], ['h_SelectRecipients'], []]
		},
		
		action: {
		
				i_HomeTab:						[77, 33, 128, 47, '../images/ToggleImages/home.png']
				,i_InsertTab:					[140, 33, 188, 47, '../images/ToggleImages/insert.png']
				,i_DesignTab:					[208, 33, 259, 47, '../images/ToggleImages/design.png']
				,i_PageLayoutTab:				[277, 33, 365, 47, '../images/ToggleImages/pagelayout.png']
				,i_ReferencesTab:				[383, 33, 462, 47, '../images/ToggleImages/references.png']			
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
				
			<!---CREATE SECTION-->	
				,h_Envelopes:					[4, 63, 87, 85]		
				,h_Labels: 						[4, 91, 65, 116]	
				,h_StartMailMerge: 				[94, 54, 148, 126]	
				,h_SelectRecipients: 			[149, 54, 217, 126]	
				
		<!---------------------------HIGHLIGHT BORDER---------------------------------------------------->		
				,b_Undo: 						[65, 2, 97, 22]			
			
		}
	}