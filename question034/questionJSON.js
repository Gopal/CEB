var questionData=		[	{id:'MSW_34000', path:'../images/item34/34000_initial_item34.png'},
							{id:'MSW_34010', path:'../images/item34/34010_second_item34.png'},
							{id:'MSW_34020', path:'../images/item34/34020_third_item34.png'},
							{id:'MSW_RESULT', path:',,/images/item34/result_item34.png'}];
					

var questionHotspots=	[	
		{
			id:'MSW_34000', actions:{
				click:{
					correct:{
						iconName:	['Cut','Bold','OkBtn','Breaks'], 
						nextPath:	['MSW_34010','MSW_RESULT','MSW_34010','MSW_34020']
						
					},
					dead:		['hotspot2','hotspot1']
				},
				rightClick:{
					correct:{
						iconName:	['OkBtn'], 
						nextPath:	['']
						
					},
					dead:		['hotspot2','hotspot1']
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
							  nextPath: "MSW_34010"
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
							},{
							  char: "X",
							  code: "66",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "3",
							  seqLen: "3",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"true",
							  nextPath: "MSW_34020"
							}
						],
						dead: [
							{
							  char: "b",
							  code: "66",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",
							  page: "0",
							  seqLen: "1"									
							},
							{
							  char: "a",
							  code: "65",
							  alt: "false",
							  ctrl: "true",
							  shift: "false",
							  page: "0",
							  seqLen: "1"								
							}
						]
					}
				}
			},marks: {//s-HOTSPOT - INVISIBLE AREA
				s_OkBtn: 							[90, 100, 850, 150, [], [], []]
				,s_hotspot2: 						[690, 400, 750, 450, [], [], []]
				
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
		},
		{
			id:'MSW_34010', actions:{
				click:{
					correct:{
						iconName:	['Italic',''], 
						nextPath:	['MSW_RESULT','']
						
					},
					dead:		['Paste']
				},
				rightClick:{
					
				},
				mouseUp:{
					
				},
				doubleClick:{
					
				},
				keys: {
					keyUp: {
						correct: [
							{
							  char: "a",
							  code: "65",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  nextPath: "MSW_RESULT"
							}
							
						],
						dead: [
							{
							  char: "a",
							  code: "0",
							  alt: "false",
							  ctrl: "false",
							  shift: "false"							  
							}
						]
					}
				}
			},marks: {
				
			},action: {
				
			}		
		},
		{
			id:'MSW_34020', actions:{
				click:{
					correct:{
						iconName:	['Option1','','',''], 
						nextPath:	['MSW_RESULT','','','']
						
					},
					dead:		['','']
				},
				rightClick:{
					correct:{
						iconName:	[''], 
						nextPath:	['']
						
					},
					dead:		['hotspot2','hotspot1']
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
							  nextPath: "MSW_34010"
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
							  code: "80",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "Option1",
							  rightClick: "false",
							  dropDown:	"true",
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
							  element: "Option1",
							  rightClick: "false",
							  dropDown:	"true",
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
							  element: "Option1",
							  rightClick: "false",
							  dropDown:	"true",
							  nextPath: "MSW_RESULT"
							}
						],
						dead: [
							{
							  char: "b",
							  code: "66",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",
							  page: "0",
							  seqLen: "1"									
							},
							{
							  char: "a",
							  code: "65",
							  alt: "false",
							  ctrl: "true",
							  shift: "false",
							  page: "0",
							  seqLen: "1"								
							}
						]
					}
				}
			},marks: {
				m_Option1: 						[214, -40, 513, 20, [''], ['h_Option1'], []]
				,m_Option2: 					[214, 23, 513, 80, [''], ['h_Option2'], []]
				,m_Option3: 					[214, 83, 513, 140, [''], ['h_Option3'], []]
				,m_Option4: 					[214, 163, 513, 220, [''], ['h_Option4'], []]
				,m_Option5: 					[214, 223, 513, 280, [''], ['h_Option5'], []]
				,m_Option6: 					[214, 283, 513, 340, [''], ['h_Option6'], []]				
				,m_Option7: 					[214, 343, 513, 400, [''], ['h_Option7'], []]
			},action: {
				h_Option1: 						[214, -40, 513, 20]
				,h_Option2: 					[214, 23, 513, 80]
				,h_Option3: 					[214, 83, 513, 140]
				,h_Option4: 					[214, 163, 513, 220]
				,h_Option5: 					[214, 223, 513, 280]
				,h_Option6: 					[214, 283, 513, 340]				
				,h_Option7: 					[214, 343, 513, 400]
			}			
		},
		{
			id:'MSW_RESULT', actions:{
				click:{
					correct:{
						iconName:	['',''], 
						nextPath:	['','']
						
					},
					dead:		['Paste']
				},
				rightClick:{
					
				},
				mouseUp:{
					
				},
				doubleClick:{
					
				}
			},marks: {
				
			},action: {
				
				
			}		
		}	
];

var dropDownKeys = {
	"P" : [240, -12, 84, 62, ""],
	"C" : [240, 52, 84, 62, ""],
	"T" : [240, 112, 84, 62, ""],
	"N" : [240, 192, 84, 62, ""],
	"O" : [240, 252, 84, 62, ""],
	"E" : [240, 312, 84, 62, ""],
	"D" : [240, 372, 84, 62, ""]
	
};