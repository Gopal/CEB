var keyFileInfo = [<!--------------------------------------------------------------------FILE INFO TAB------------------------------------------------------------------------------------------>	
	//ROW 1	
	//x, y, width, height, alt key, disabled, image path
	[154, 146, 16, 163,"\x12FIG",'N'],
	[204, 218, 16, 235,"\x12FIP",'N'],			//N
	[204, 337, 16, 354,"\x12FII",'N'],			//O
	[204, 456, 16, 473,"\x12FIR", 'N'],
	[262, 442, 16, 459,"\x12FIV", 'N'],
	[650, 510, 16, 527,"\x12FIO", 'N'],
	[650, 205, 16, 522,"\x12FIS", 'N'],
	[652, 179, 21, 196,"\x12FIQS", 'N'],
];

var tabFileInfo = 
	{
		headerimg: '../images/MainmenuTabs/fileTab/info.png', 
		htmls: {
			
		},
		
		marks: {		
		
			<!---HEADER -->		
				//,m: [, [], ['h'], []]//Mouse area marking and list of actions CLICK, OVER, RIGHTCLICK	
				m_Back: 						[15, 10, 60, 60, ['a_s'], ['h_Back'], []]				
				,m_Help: 						[823, 2, 852, 22, ['a_s'], ['h_Help'], []]
				,m_Minimize:					[852, 2, 880, 22, ['a_s'], ['h_Minimize'], []]
				,m_Maximize: 					[882, 2, 910, 22, ['a_s'], ['h_Maximize'], []]
				,m_Close:	 					[912, 2, 938, 22, ['a_s'], ['h_Close'], []]
				
			<!---MAIN MENU TABS-->										
				,m_FileInfoTab:					[0, 66, 120, 104, ['p9'],['',''],[]]
				,m_FileNewTab:					[0, 104, 120, 141, ['p10'],['i_FileNewTab',''],[]]
				,m_FileOpenTab:					[0, 142, 120, 179, ['p11'],['i_FileOpenTab',''],[]]
				,m_FileSaveTab:					[0, 180, 120, 217, ['p12'],['i_FileSaveTab',''],[]]				
				,m_FileSaveAsTab:				[0, 218, 120, 255, ['p13'],['i_FileSaveAsTab',''],[]]				
				,m_FilePrintTab:				[0, 256, 120, 293, ['p14'],['i_FilePrintTab',''],[]]				
				,m_FileShareTab:				[0, 294, 120, 331, ['p15'],['i_FileShareTab',''],[]]				
				,m_FileExportTab:				[0, 332, 120, 369, ['p16'],['i_FileExportTab',''],[]]				
				,m_FileCloseTab:				[0, 374, 120, 411, ['p17'],['i_FileCloseTab',''],[]]				
				,m_FileAccountTab:				[0, 430, 120, 467, ['p18'],['i_FileAccountTab',''],[]]				
				,m_FileOptionsTab:				[0, 467, 120, 505, ['p19'],['i_FileOptionsTab',''],[]]				
				
		},
		
		action: {
				
				i_FileInfoTab:					[0, 66, 120, 104, '../images/toggleImages/file_info.png']
				,i_FileNewTab:					[0, 104, 120, 141, '../images/toggleImages/file_info.png']
				,i_FileOpenTab:					[0, 142, 120, 179, '../images/toggleImages/file_info.png']
				,i_FileSaveTab:					[0, 180, 120, 217, '../images/toggleImages/file_info.png']				
				,i_FileSaveAsTab:				[0, 218, 120, 255, '../images/toggleImages/file_info.png']				
				,i_FilePrintTab:				[0, 256, 120, 293, '../images/toggleImages/file_info.png']				
				,i_FileShareTab:				[0, 294, 120, 331, '../images/toggleImages/file_info.png']				
				,i_FileExportTab:				[0, 332, 120, 369, '../images/toggleImages/file_info.png']				
				,i_FileCloseTab:				[0, 374, 120, 411, '../images/toggleImages/file_info.png']				
				,i_FileAccountTab:				[0, 430, 120, 467, '../images/toggleImages/file_info.png']				
				,i_FileOptionsTab:				[0, 467, 120, 505, '../images/toggleImages/file_info.png']				
		
		
		<!---------------------------HIGHLIGHT BACKGROUND----------------------------------------------->			
		
			<!---HEADER-->
				,h_Back: 						[15, 10, 60, 60]						
				,h_Help: 						[823, 2, 852, 22]				
				,h_Minimize:					[852, 2, 880, 22]
				,h_Maximize: 					[882, 2, 910, 22]
				,h_Close:	 					[912, 2, 938, 22]
		}
	}