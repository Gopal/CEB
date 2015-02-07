var keyFileNew = [<!--------------------------------------------------------------------FILE NEW TAB------------------------------------------------------------------------------------------>	
	//ROW 1	
	//x, y, width, height, alt key, disabled, image path
	[157, 141, 16, 158,"\x12FNS",'N'],
	[151, 175, 16, 192,"\x12FNU",'N'],			//N
	[184, 431, 16, 448,"\x12FNL",'N'],			//O
	[787, 139, 16, 156,"\x12FNG"],
	[403, 431, 23, 448,"\x12FNM1",'N'],
	[633, 431, 19, 448,"\x12FNZ1",'N']
];

var tabFileNew = 
	{
		headerimg: '../images/MainmenuTabs/fileTab/new.png', 
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
				,m_FileNewTab:					[0, 104, 120, 141, ['p10'],['',''],[]]
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