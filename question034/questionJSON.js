var questionData=		[	{id:'MSW_34000', path:'../images/item34/34000_initial_item34.png'},							
							{id:'MSW_RESULT', path:'../images/item34/result_item34.png'}];
					

var questionHotspots=	[	
		{
			id:'MSW_34000', actions:{
				click:{
					correct:{
						iconName:	['Cut'], 
						nextPath:	['MSW_RESULT']
						
					},
					dead:		['SelectedText']
				},
				rightClick:{
					correct:{
						iconName:	['SelectedText'], 
						nextPath:	['']
						
					},
					dead:		[]
				},
				mouseUp:{
					correct:	['mouseup'],
					dead:		['']
				},
				doubleClick:{
					correct:	['dblclick'],
					dead:		['']
				},
				
				keys: {
					keyUp: {
						correct: [
							{
							  char: "X",
							  code: "88",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "3",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "X",
							  code: "88",
							  alt: "false",
							  ctrl: "true",
							  shift: "false",
							  page: "0",
							  seqLen: "1",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "",
							  code: "114",
							  alt: "false",
							  ctrl: "true",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "",
							  code: "46",
							  alt: "false",
							  ctrl: "false",
							  shift: "true",							  
							  page: "0",
							  seqLen: "1",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "T",
							  code: "84",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "Cut",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "T",
							  code: "84",
							  alt: "false",
							  ctrl: "false",
							  shift: "true",							  
							  page: "0",
							  seqLen: "1",
							  element: "Cut",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "",
							  code: "13",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "Cut",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "",
							  code: "32",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "Cut",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							}
						],
						dead: [
							{
							  char: "A",
							  code: "65",
							  alt: "false",
							  ctrl: "true",
							  shift: "false",
							  page: "0",
							  seqLen: "1",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"false"
							}
						]
					}
				}
			},marks: {//s-HOTSPOT - INVISIBLE AREA
				s_SelectedText: 					[390, 110, 550, 150, [], [], []]				
				
				//FOOTER-STATUSBAR
				,m_Page:	 						[1, 434, 78, 457, [''], ['h_Page'], []]
				,m_Word:	 						[80, 434, 175, 457, [''], ['h_Word'], []]
				,m_Book:	 						[180, 434, 205, 457, [''], ['h_Book'], []]
				,m_ReadMode: 						[650, 434, 685, 457, [''], ['h_ReadMode'], []]
				,m_PrintLayout: 					[685, 434, 725, 457, [''], ['h_PrintLayout'], []]
				,m_WebLayout: 						[725, 434, 760, 457, [''], ['h_WebLayout'], []]
				,m_ZoomOut: 						[765, 440, 775, 450, [''], ['h_ZoomOut'], []]
				,m_Zoom:	 						[775, 440, 881, 450, [''], ['h_Zoom'], []]
				,m_ZoomIn:	 						[880, 440, 892, 450, [''], ['h_ZoomIn'], []]
				,m_ZoomLevel: 						[898, 434, 938, 457, [''], ['h_ZoomLevel'], []]
				////
				
			},action: {
				//FOOTER-STATUSBAR
				h_Page:	 							[1, 434, 78, 457]
				,h_Word:	 						[80, 434, 175, 457]
				,h_Book:	 						[180, 434, 205, 457]
				,h_ReadMode: 						[650, 434, 685, 457]
				,h_PrintLayout: 					[685, 434, 725, 457]
				,h_WebLayout: 						[725, 434, 760, 457]
				,h_ZoomOut: 						[765, 440, 775, 450]
				,h_Zoom:	 						[824, 438, 830, 450]
				,h_ZoomIn:	 						[880, 440, 892, 450]
				,h_ZoomLevel: 						[898, 434, 938, 457]
				////
			}			
		}		
];
