const SINGLELINE = document.querySelector("#single");
const CONVERTED = document.querySelector(".converted");

var content; //The original content.
var converted = ""; //This will be the content converted to HTML format. Set to blank in case copied before used.
var codeDisplay; //This is the converted content displayed in the HTML code format, such as symbols like < changed to &lt;.
var oList; //Determines the current list level. 0 is none, 1 is numbers, 2 is lowercase letters, 3 is lowercase Roman numerals, 4 is uppercase letters, 5 is uppercase roman numerals
var uList; //Same as above, but for an unordered list.
// var type; //List type directly related to oList, in order 1, a, i, A, I.
var i; //Index of content, slowly going up as each character is checked in the For loop.
var pStart; //True if a <p> tag has started.

const SAMPLE = document.querySelector(".sample");
const CODEDISPLAY = document.querySelector("#codeDisplay");
const SELECTION = window.getSelection(); //Creates an object for selecting text.
const RANGE = document.createRange(); //Creates a range to be used later for copying text.
const COPY = document.querySelector(".copy"); //The SPAN tag to day when last copied.

function tabSetting(type, level){ //This adds in the right number of <ol> and <ul> tags, and their ending tags.
	let currentLevel;
	if(type == 'ol'){
		currentLevel = oList;
		oList = level;
	}
	else if(type == 'ul'){
		currentLevel = uList;
		uList = level;
	}
	else{
		console.log("tabSetting error! Did not enter 'ul' or 'ol': " + type);
		return;
	}

	if((converted.charAt(converted.length - 1) != '\n') && (converted.length != 0)){ //Adds a new line if one has not already been added.
		converted += '\n';
	}

	for(currentLevel; currentLevel < level; currentLevel++){ //Opening tags
		for(let h = 0; h < currentLevel; h++){
			converted += "\t";
		}
		converted += "<" + type + ">\n";
	}
	for(currentLevel; currentLevel > level; currentLevel--){ //Closing tags
		for(let h = 1; h < currentLevel; h++){
			converted += "\t";
		}
		converted += "</" + type + ">\n";
	}
}

function endAll(){
	if(pStart){
		converted += "</p>\n";
		pStart = false;
	}
	else if(oList > 0){
		tabSetting('ol', 0);
	}
	else if(uList > 0){
		tabSetting('ul', 0);
	}
}

function addP(){ //This function is used when a new line is detected without a list. If there is another new line after that, or it is the end of the content, a <br> tag is added. Otherwise, a <p> tag is added.
	endAll();

	for(i; content.charAt(i + 1) == '\n'; i++){ //This adds extra line breaks in case there are multiple new lines between paragraphs.
		converted += "<br>\n";
	}

	if(i + 1 >= content.length){ //In case there is an empty new line at the bottom.
		converted += "<br>";
	}
	else{ //If not at the end, starts a new paragraph
		converted += "<p>\n\t";
		pStart = true;
	}
}

function listType(char) { //Checks what type of list is being used for ordered lists.
	if(char.match(/[0-9]/)){
		return 1;
	}
	else if(char.match(/[a-h]/)){
		return 'a';
	}
	else if(char.match(/[A-H]/)){
		return 'A';
	}
	else if(char.match(/[i,v,x]/)){
		return 'i';
	}
	else if(char.match(/[I,V,X]/)){
		return 'I';
	}
	else{
		return 'Not valid: |' + char + '|';
	}
}

function isBreak(char){ //Checks if the character is a space, tab, new line, meaning the word or group of characters has ended.
	if((char == " ")/*space*/ || (char == "\n")/*newline*/ || (char == "\t")/*tab*/ || (char == undefined)){
		return true;
	}
	else{
		return false;
	}
}

function oListComing(addon){ //Var "addon" will likely be taken out later. Is is in case the ordered list starts later than i.
	let h = i + addon;
	for(let g = h; !isBreak(content.charAt(g)); g++){
		if(g > content.length){
			return false;
		}
		if(content.substring(g, g + 2) == '.\t'){
			return content.substring(h, g);
		}
	}
	return false;
}

function listNumberEntry(value){ //When a list number/letter is dectected, this enters the HTML for the ordered list. Value is the step on the list. FOr example, if the list begins with A., then the value is 'A'.
	i += value.length + 1;

	if(pStart){ //Closes a <p> tag if there is still one open.
		converted += "</p>\n";
		pStart = false;
	}
	else if(uList > 0){
		tabSetting('ul', 0);
	}

	let type = listType(value);

	if(type == 1){
		tabSetting('ol', 1);
	} //End 1
	else if(type == 'a'){
		tabSetting('ol', 2);
	} //End a
	else if(type == 'i'){
		tabSetting('ol', 3);
	} //End i
	else if(type == 'A'){
		tabSetting('ol', 4);
	} //End A
	else if(type == 'I'){
		tabSetting('ol', 5);
	} //End I

	for(let g = 0; g < oList; g++){ //Used for formatting to give the proper number of tabs before the <li> tag.
		converted += "\t";
	}
	converted += "<li type='" + type + "' value='" + value + "'>";
	i += 1;
}

function uListEntry(type){ //Function for adding <li> tags for an unordered list, •o
	if(pStart){
		converted += "</p>\n";
		pStart = false;
	}
	else if(oList > 0){
		tabSetting('ol', 0);
	}
	
	pStart = false;
	if(type == "•"){
		type = "disc";
		tabSetting('ul', 1);
	} //End of type disc
	else if(type == "o"){
		type = "circle";
		tabSetting('ul', 2);
	} //end of type circle.
	else if(type == ""){
		type = "square";
		tabSetting('ul', 3);
	}//End of type square
	
	for(let h = 0; h < uList; h++){
		converted += "\t";
	}
	converted += "<li type='" + type + "'>";
	i += 2; //Adding 2, to take into account both the symbol and the tab.
}


//MAIN FUNCTION
function convert(){
	// console.time("Convert");
	let singleLine = SINGLELINE.checked;

	content = document.querySelector("#content").value;
	oList = 0; //Determines the current list level. 0 is none, 1 is numbers, 2 is lowercase letters, 3 is lowercase Roman numerals, 4 is uppercase letters, 5 is uppercase roman numerals
	uList = false; //Same as above, but for an unordered list.
	pStart = false;
	
	converted = "";
	for(i = 0; content.charAt(i) == '\n'; i++){ //This is in case the content starts with one or more blank lines
		converted += "<br>\n";
	}

	let oListValue = oListComing(0);
	if(oListValue != false){ //In case starts with a list
		listNumberEntry(oListValue);
	}
	else if(((content.charAt(i) == "•") || (content.charAt(i) == "o") || (content.charAt(i) == "")) && (content.charAt(i + 1) == "\t")){ //True if an unordered list has been found, which is a • (disc), o (circle), or  (square), followed by a tab.
		uListEntry(content.charAt(i));
	}
	else{
		converted += "<p>\n\t";
		pStart = true;
	}

	for(i; i < content.length; i++){
		// console.log(converted); if(i > 33){console.log("|" + converted + "|");}

		let oListValue = false;
		if(content.charAt(i) == '\n'){ //Found a new line.
			if((content.charAt(i + 1) == '\n') && (!singleLine)){ //If a double-new-line was found, when new paragraphs are separtated by two new lines. This ends all, and skips the extra new line.
				endAll();
				i++;
			}

			oListValue = oListComing(1);
			if(oListValue != false){ //The new line is part of an ordered list.
				if(pStart){
					converted += "</p>\n";
					pStart = false;
				}
				listNumberEntry(oListValue);
			}
			else if(((content.charAt(i + 1) == "•") || (content.charAt(i + 1) == "o") || (content.charAt(i + 1) == "")) && (content.charAt(i + 2) == "\t")){ //True if an unordered list has been found, which is a • (disc), o (circle), or  (square), followed by a tab.
				uListEntry(content.charAt(i + 1));
			}
			else if(singleLine && (content.charAt(i + 1) == '\n')){
				endAll();
				converted += "<br>\n";
			}
			else if(singleLine || (!pStart)){ //The end of a paragraph separated by a single line was detected, or there is nothing started.
				endAll();
				addP();
			}
			else if(content.charAt(i + 1) == ""){ //If there is an extra new line at the bottom. Poor formatting, but should be taken into account.
				endAll();
				converted += "<br>\n";
			}
			else{
				converted += "<br>\n";
				if(pStart){ //For readability.
					converted += "\t";
				}
			}
		} //End of found a new line.
		else if(content.charAt(i) == "<"){
			converted += "&lt;";
		}
		else if(content.charAt(i) == ">"){
			converted += "&gt;";
		}
		else{ //Nothing special has been found, so simply adding the character.
			converted += content.charAt(i);
		} //End of character checking.
		// console.log(converted);
	} //End of the FOR loop

	//This is beginning of the endgame. The following if statements close any p, ul, or ol tags that may still be open.
	endAll();
	//For converting the <, >, and other character(s) to display the code.
	codeDisplay = "";
	for(i = 0; i < converted.length; i++){
		if(converted.charAt(i) == "<"){
			codeDisplay += "&lt;";
		}
		else if(converted.charAt(i) == ">"){
			codeDisplay += "&gt;";
		}
		else if(converted.charAt(i) == "&"){
			codeDisplay += "&amp;";
		}
		else{
			codeDisplay += converted.charAt(i);
		}
	}
	
	CODEDISPLAY.innerHTML = codeDisplay;
	SAMPLE.innerHTML = converted;
	COPY.innerHTML = "";
	// var display = "<div class=\"sample\"><hr>" + codeDisplay + "<hr>" + converted + "</div>";
	// CONVERTED.innerHTML = display;
	// toCLipboard();
	// console.timeEnd("Convert");
} //End of the main converted function. All functions before this just support this one.

function leadingZero(num){ //For aesthetics. Takes single digit numbers, and adds a leading 0.
	num = parseInt(num);
	if(num < 10){
		return '0' + num;
	}
	else{
		return num;
	}
}
function findAMPM(hour){ //returns an array, 0 is the hour, and 1 is the AM or PM. For example, hour 14 is 2 PM
	if(hour == 12){
		return [12, 'PM'];
	}
	else if((hour == 0) || (hour == 24)){
		return [12, 'AM'];
	}
	else if(hour > 12){
		return [hour-12, 'PM'];
	}
	else{
		return [hour, 'AM'];
	}
}
//https://alligator.io/js/copying-to-clipboard/
function toCLipboard(){
	if(CODEDISPLAY.innerHTML == ""){
		COPY.innerHTML = "Nothing to copy."
	}
	else{
		RANGE.selectNodeContents(CODEDISPLAY); //For the created range, adds the converted content.
		SELECTION.removeAllRanges(); //Clears out the current selection.
		SELECTION.addRange(RANGE); //Adds the converted content in the range to the selection.
		document.execCommand('copy'); //Copies the text selected above.
		SELECTION.removeAllRanges(); //Re-clears the range.

		let date = new Date();
		let hour = findAMPM(date.getHours())
		COPY.innerHTML = "Copied " + hour[0] + ":" + leadingZero(date.getMinutes()) + ":" + leadingZero(date.getSeconds()) + " " + hour[1];
	}
}