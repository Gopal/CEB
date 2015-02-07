var keyFilePrint = [
	//ROW 1	
	//x, y, width, height, alt key, disabled, image path
	[201, 178, 16, 195,"\x12FPP",'N'],
	[205, 240, 16, 257,"\x12FPA",'N'],			//N
	[204, 285, 16, 302,"\x12FPS",'N'],			//O
	[205, 309, 16, 326,"\x12FPD",'N'],
	[205, 353, 16, 370,"\x12FPC",'N'],
	[205, 405, 16, 422,"\x12FPO",'N'],
	[205, 441, 16, 458,"\x12FPL",'N'],
	[204, 485, 16, 502,"\x12FPM",'N'],
	[205, 530, 16, 547,"\x12FPH",'N'],
	[308, 118, 16, 135,"\x12FPN",'N'],
	[304, 570, 16, 587,"\x12FPG",'N'],
	[462, 115, 16, 132,"\x12FPV",'N'],
	[487, 569, 16, 586,"\x12FPT",'N'],
	[736, 568, 16, 585,"\x12FPX",'N'],
	[764, 567, 16, 584,"\x12FPZ",'N'],
	[903, 568, 16, 585,"\x12FPW",'N']
];

var tabFilePrint = 
	{
		headerimg: '../images/MainmenuTabs/fileTab/print.png', 
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
				,m_FileInfoTab:					[0, 66, 120, 104, ['p9'],['i_FileInfoTab',''],[]]
				,m_FileNewTab:					[0, 104, 120, 141, ['p10'],['i_FileNewTab',''],[]]
				,m_FileOpenTab:					[0, 142, 120, 179, ['p11'],['i_FileOpenTab',''],[]]
				,m_FileSaveTab:					[0, 180, 120, 217, ['p12'],['i_FileSaveTab',''],[]]				
				,m_FileSaveAsTab:				[0, 218, 120, 255, ['p13'],['i_FileSaveAsTab',''],[]]				
				,m_FilePrintTab:				[0, 256, 120, 293, ['p14'],['',''],[]]				
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