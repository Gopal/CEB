var questionData=		[	{id:'MSW_04000', path:'../images/item04/04000_initial_item4.png'},
							{id:'MSW_04010', path:'../images/item04/04010_insert_picture_dialog_item4.png'},
							{id:'MSW_04020', path:'../images/item04/04020_icon_selected_item4.png'},
							{id:'MSW_04030', path:'../images/item04/right_click_shortcut_menu_in_insert_picture_dialog.png'},
							{id:'MSW_RESULT', path:'../images/item04/result_item4.png'}];
					

var questionHotspots=	[	
		{
			id:'MSW_04000', actions:{
				click:{
					correct:{
						iconName:	['Pictures'], 
						nextPath:	['MSW_04010']
						
					},
					dead:		['dead']
				},
				rightClick:{
					correct:{
						iconName:	[''], 
						nextPath:	['']
						
					},
					dead:		[]
				},
				mouseUp:{
					correct:	[],
					dead:		['']
				},
				doubleClick:{
					correct:	[],
					dead:		['dead']
				},
				
				keys: {
					keyUp: {
						correct: [
							{
							  char: "P",
							  code: "80",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "1",
							  seqLen: "3",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"true",
							  nextPath: "MSW_04010"
							}
						],
						dead: [							
						]
					}
				}
			},marks: {//s-HOTSPOT - INVISIBLE AREA
				s_dead: 							[0, 0, 940, 457, [], [], []]				
				
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
			id:'MSW_04010', actions:{
				click:{
					correct:{
						iconName:	['Iconpng','Select'], 
						nextPath:	['MSW_04020','MSW_RESULT']
						
					},
					dead:		['']
				},
				rightClick:{
					correct:{
						iconName:	['Iconpng'], 
						nextPath:	['']
						
					},
					dead:		['']
				},
				mouseUp:{
					
				},
				doubleClick:{
					correct:{
						iconName:	['Iconpng'], 
						nextPath:	['MSW_RESULT']
						
					},
					dead:		[]
				},
				keys: {
					keyUp: {
						correct: [
							{
							  char: "L",
							  code: "76",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "Select",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "L",
							  code: "76",
							  alt: "false",
							  ctrl: "false",
							  shift: "true",							  
							  page: "0",
							  seqLen: "1",
							  element: "Select",
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
							  element: "Select",
							  rightClick: "true",
							  dropDown:	"false",
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
				m_3Dlogo: 						[185, -15, 270, 75, [''], ['h_3Dlogo'], []]
				,m_Galileo: 					[300, -15, 393, 75, [''], ['h_Galileo'], []]
				,m_Iconpng: 					[419, -15, 511, 75, [''], ['h_Iconpng'], []]
			},action: {
				h_3Dlogo: 						[185, -15, 270, 75]
				,h_Galileo: 					[300, -15, 393, 75]
				,h_Iconpng: 					[419, -15, 511, 75]
			}		
		},
		{
			id:'MSW_04020', actions:{
				click:{
					correct:{
						iconName:	['InsertBtn','Select'], 
						nextPath:	['MSW_RESULT','MSW_RESULT']
						
					},
					dead:		['','']
				},
				rightClick:{
					correct:{
						iconName:	['Iconpng20'], 
						nextPath:	['']
						
					},
					dead:		['hotspot2','hotspot1']
				},
				mouseUp:{
					correct:	['mouseup'],
					dead:		['']
				},
				doubleClick:{
					click:{
						correct:{
							iconName:	['Iconpng20','','',''], 
							nextPath:	['MSW_RESULT','','','']
							
						},
						dead:		['','']
					}
				},
				
				keys: {
					keyUp: {
						correct: [
							{
							  char: "L",
							  code: "76",
							  alt: "false",
							  ctrl: "false",
							  shift: "false",							  
							  page: "0",
							  seqLen: "1",
							  element: "Select",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},
							{
							  char: "L",
							  code: "76",
							  alt: "false",
							  ctrl: "false",
							  shift: "true",							  
							  page: "0",
							  seqLen: "1",
							  element: "Select",
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
							  page: "1",
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
							  element: "Select",
							  rightClick: "true",
							  dropDown:	"false",
							  nextPath: "MSW_RESULT"
							},							
							{
							  char: "S",
							  code: "83",
							  alt: "true",
							  ctrl: "false",
							  shift: "false",							  
							  page: "4",
							  seqLen: "2",
							  element: "NA",
							  rightClick: "false",
							  dropDown:	"false",
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
				s_InsertBtn: 					[565, 313, 652, 337, [''], [], []]
				
				,m_Iconpng20: 					[419, -15, 511, 75, [''], [], []]
				
			},action: {
				
				
				
				
				
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
};