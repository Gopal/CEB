var fileMenuTabData;
var selectedFileMenu="I";
var isShowFileTab=false;

function doFileMenuKeyHandler(ctrl){
	console.log("Gopal:" + ctrl + ", selectedFileMenu:" + selectedFileMenu );
	incorrectMsg=false;
	isShowFileTab=true;
	$('#glasscontainer').html('');	
	//fileMenuTabData = pageData[8];
	if(ctrl == 38) {
		switch(selectedFileMenu) {
			case "I":
				changeFileMenuTab("T");
				break;
			case "N":
				changeFileMenuTab("I");
				break;
			case "O":
				changeFileMenuTab("N");
				break;
			case "S":
				changeFileMenuTab("O");
				break;
			case "A":
				changeFileMenuTab("S");
				break;
			case "P":
				changeFileMenuTab("A");
				break;
			case "H":
				changeFileMenuTab("P");
				break;
			case "E":
				changeFileMenuTab("H");
				break;
			case "C":
				changeFileMenuTab("E");
				break;
			case "D":
				changeFileMenuTab("C");
				break;
			case "T":
				changeFileMenuTab("D");
				break;				
		}
	} else if(ctrl == 40) {
		switch(selectedFileMenu) {
			case "I":
				changeFileMenuTab("N");
				break;
			case "N":
				changeFileMenuTab("O");
				break;
			case "O":
				changeFileMenuTab("S");
				break;
			case "S":
				changeFileMenuTab("A");
				break;
			case "A":
				changeFileMenuTab("P");
				break;
			case "P":
				changeFileMenuTab("H");
				break;
			case "H":
				changeFileMenuTab("E");
				break;
			case "E":
				changeFileMenuTab("C");
				break;
			case "C":
				changeFileMenuTab("D");
				break;
			case "D":
				changeFileMenuTab("T");
				break;
			case "T":
				changeFileMenuTab("I");
				break;				
		}
	}	
}

function changeFileMenuTab(strKey) {
	isShowFileTab=true;
	
	switch(strKey) {
		case "I":
			selectedFileMenu = strKey;
			actionLoadPage(9);
			break;
		case "N":
			selectedFileMenu = strKey;
			actionLoadPage(10);
			break;
		case "O":
			selectedFileMenu = strKey;
			actionLoadPage(11);
			break;
		case "S":
			selectedFileMenu = strKey;
			//actionLoadPage(12);
			break;
		case "A":
			selectedFileMenu = strKey;
			actionLoadPage(13);
			break;
		case "P":
			selectedFileMenu = strKey;
			actionLoadPage(14);
			break;
		case "H":
			selectedFileMenu = strKey;
			actionLoadPage(15);
			break;
		case "E":
			selectedFileMenu = strKey;
			actionLoadPage(16);
			break;
		case "C":
			selectedFileMenu = strKey;
			//actionLoadPage(17);
			break;
		case "D":
			selectedFileMenu = strKey;
			actionLoadPage(18);
			break;
		case "T":
			selectedFileMenu = strKey;
			//actionLoadPage(19);
			break;				
	}
}