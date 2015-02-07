
var keyData = [
// \x10=SHIFT, \x11=CTRL, \x12=ALT, \x1B=ESC, \x09=TAB, \x08=BACKSPACE, \x0D=ENTER, \x20=SPACE, \x2D=INSERT, \x2E=DELETE

keyHome,			//0
keyInsert,			//1
keyDesign,			//2
keyPageLayout,		//3
keyReferences,		//4
keyMailings,		//5
keyReview,			//6
keyView,			//7
[<!--------------------------------------------------------------------FILE TAB------------------------------------------------------------------------------------------>	
	//ROW 1	
	//x, y, width, height, alt key, disabled, image path
	[10, 65, 84, 62,"\x12FI",'N'],		//I
	[10, 105, 84, 62,"\x12FN",'N'],		//N
	[10, 145, 84, 62,"\x12FO",'N'],		//O
	[10, 180, 84, 62,"\x12FS"],			//S
	[10, 220, 128, 133,"\x12FA"],		//A
	[10, 260, 128, 133,"\x12FP"],		//P
	[10, 295, 128, 133,"\x12FH"],		//H
	[10, 330, 128, 133,"\x12FE"],		//E
	[10, 370, 128, 133,"\x12FC",'N'],	//C
	[10, 430, 128, 133,"\x12FD"],		//D
	[10, 470, 128, 133,"\x12FT"]		//T
],					//8
keyFileInfo,		//9
keyFileNew,			//10
keyFileOpen,		//11
keyFileSave,		//12
keyFileSaveAs,		//13
keyFilePrint		//14
];

var keyLevel1Action = {
	"H" : [89, 42, 84, 62, "p0"],
	"N" : [150, 42, 84, 62, "p1"],
	"G" : [220, 42, 84, 62, "p2"],
	"P" : [310, 42, 84, 62, "p3"],
	"S" : [410, 42, 84, 62, "p4"],
	"M" : [500, 42, 84, 62, "p5"],
	"R" : [575, 42, 84, 62, "p6"],
	"W" : [635, 42, 84, 62, "p7"],
	"F" : [10, 42, 84, 62, "p8"],
};

var pageData = [
	tabHome,			//0
	tabInsert,			//1
	tabDesign,			//2
	tabPageLayout,		//3
	tabReferences,		//4
	tabMailings,		//5
	tabReview,			//6
	tabView,			//7
	tabFileInfo,		//8
	tabFileInfo,		//9
	tabFileNew,			//10
	tabFileOpen,		//11
	tabFileSave,		//12
	tabFileSaveAs,		//13
	tabFilePrint,		//14
	tabFileShare,		//15
	tabFileExport,		//16
	tabFileClose,		//17
	tabFileAccount,		//18
	tabFileOptions		//19
];
