// set default option as original text. Must be a global variable
var option = "1";

// function to identify
function identifyOutputType() {
	// set the option depending on what the user clicked on
	option = event.target.id;
	// call the text tranform function
	transform();
	// toggle active/inactive class of teh button
	toggleClass();
}

/* toggle active/inactive class */
function toggleClass() {
	$('li.active').removeClass();
	document.getElementById(option).parentNode.setAttribute('class', 'active');
}

/* main function to catch onkeypress events */
function transform() {
	var source = document.getElementById("source");
	var s = source.value;
	//TODO switch case
	var result = document.getElementById("result");

	switch (option) {
		case "1":
			toDefault(s);
			break;
		case "2":
			toASCII(s);
			break;
		case "3":
			toReversed(s);
			break;
		case "4":
			toMorse(s);
			break;
		case "5":
			toBinary(s);
			break;
		case "6":
			toHex10(s);
			break;
		case "7":
			toBASE64(s);
			break;
		case "8":
			toROT13(s);
			break;
		case "9":
			toPython(s);
			break;
		default:
			break;
	}

}

/* default function that keeps original source */
function toDefault(s) {
	result.innerText = s;
}

/* translates source to ASCII */
function toASCII(s) {
	ascii = "";
	for (var i = 0, n = s.length; i < n; i++) {
		ascii += s.charCodeAt(i);
	}
	result.innerText = ascii;
}

/* reverses the original text */
function toReversed(s) {
	var rev_str = s.split('').reverse().join('');
	result.innerText = rev_str;
}

/* translates the source into the Morse Code */
function toMorse(s) {
	var charCodes = new Array(46);
	charCodes["a"] = "• —";
	charCodes["b"] = "— • • •";
	charCodes["c"] = "— • — •";
	charCodes["d"] = "— • •";
	charCodes["e"] = "•";
	charCodes["f"] = "• • — •";
	charCodes["g"] = "— — •";
	charCodes["h"] = "• • • •";
	charCodes["i"] = "• •";
	charCodes["j"] = "• — — —";
	charCodes["k"] = "— • —";
	charCodes["l"] = "• — • •";
	charCodes["m"] = "— —";
	charCodes["n"] = "— •";
	charCodes["o"] = "— — —";
	charCodes["p"] = "• — — •";
	charCodes["q"] = "— — • —";
	charCodes["r"] = "• — •";
	charCodes["s"] = "• • •";
	charCodes["t"] = "—";
	charCodes["u"] = "• • —";
	charCodes["v"] = "• • • —";
	charCodes["w"] = "• — —";
	charCodes["x"] = "— • • —";
	charCodes["y"] = "— • — —";
	charCodes["z"] = "— — • •";
	charCodes["1"] = "• — — — —";
	charCodes["2"] = "• • — — —";
	charCodes["3"] = "• • • — —";
	charCodes["4"] = "• • • • —";
	charCodes["5"] = "• • • • •";
	charCodes["6"] = "— • • • •";
	charCodes["7"] = "— — • • •";
	charCodes["8"] = "— — — • •";
	charCodes["9"] = "— — — — •";
	charCodes["0"] = "— — — — —";
	charCodes[" "] = "   ";
	charCodes["."] = ".";
	charCodes["?"] = "?";
	charCodes["!"] = "!";
	charCodes["("] = "(";
	charCodes[")"] = ")";
	charCodes["+"] = "+";
	charCodes["-"] = "-";
	charCodes["*"] = "*";
	charCodes["/"] = "/";

	morse = "";
	for (var i = 0, n = s.length; i < n; i++) {
		for (morseEncoding in charCodes) {
			if (s.charAt(i).toLowerCase() === morseEncoding) {
				morse += charCodes[morseEncoding];
			}
		}
	}
	result.innerText = morse;
}

/* translates source to Binary */
function toBinary(s) {
	var charCodes = new Array(46);
	charCodes["a"] = "01100001";
	charCodes["b"] = "01100010";
	charCodes["c"] = "01100011";
	charCodes["d"] = "01100100";
	charCodes["e"] = "01100101";
	charCodes["f"] = "01100110";
	charCodes["g"] = "01100111";
	charCodes["h"] = "01101000";
	charCodes["i"] = "01101001";
	charCodes["j"] = "01101010";
	charCodes["k"] = "01101011";
	charCodes["l"] = "01101100";
	charCodes["m"] = "01101101";
	charCodes["n"] = "01101110";
	charCodes["o"] = "01101111";
	charCodes["p"] = "01110000";
	charCodes["q"] = "01110001";
	charCodes["r"] = "01110010";
	charCodes["s"] = "01110011";
	charCodes["t"] = "01110100";
	charCodes["u"] = "01110101";
	charCodes["v"] = "01110110";
	charCodes["w"] = "01110111";
	charCodes["x"] = "01111000";
	charCodes["y"] = "01111001";
	charCodes["z"] = "01111010";

	charCodes["A"] = "01000001";
	charCodes["B"] = "01000010";
	charCodes["C"] = "01000011";
	charCodes["D"] = "01000100";
	charCodes["E"] = "01000101";
	charCodes["F"] = "01000110";
	charCodes["G"] = "01000111";
	charCodes["H"] = "01001000";
	charCodes["I"] = "01001001";
	charCodes["J"] = "01001010";
	charCodes["K"] = "01001011";
	charCodes["L"] = "01001100";
	charCodes["M"] = "01001101";
	charCodes["N"] = "01001110";
	charCodes["O"] = "01001111";
	charCodes["P"] = "01010000";
	charCodes["Q"] = "01010001";
	charCodes["R"] = "01010010";
	charCodes["S"] = "01010011";
	charCodes["T"] = "01010100";
	charCodes["U"] = "01010101";
	charCodes["V"] = "01010110";
	charCodes["W"] = "01010111";
	charCodes["X"] = "01011000";
	charCodes["Y"] = "01011001";
	charCodes["Z"] = "01011010";

	charCodes["1"] = "00110001";
	charCodes["2"] = "00110010";
	charCodes["3"] = "00110011";
	charCodes["4"] = "00110100";
	charCodes["5"] = "00110101";
	charCodes["6"] = "00110110";
	charCodes["7"] = "00110111";
	charCodes["8"] = "00111000";
	charCodes["9"] = "00111001";
	charCodes["0"] = "00110000";
	charCodes[" "] = "00100000";
	charCodes["."] = "00101110";
	charCodes["?"] = "00111111";
	charCodes["!"] = "00100001";
	charCodes["("] = "00101000";
	charCodes[")"] = "00101001";
	charCodes["+"] = "00101011";
	charCodes["-"] = "00101101";
	charCodes["*"] = "00101010";
	charCodes["/"] = "00101111";

	binary = "";
	for (var i = 0, n = s.length; i < n; i++) {
		for (binaryEncoding in charCodes) {
			if (s.charAt(i) === binaryEncoding) {
				binary += charCodes[binaryEncoding];
			}
		}
	}
	result.innerText = binary;
}

/* translates source to hexadecimal */
function toHex10(s) {
	var output = "";

	function pad_four(input) {
		var l = input.length;
		if (l == 0)
			return '0000';
		if (l == 1)
			return '000' + input;
		if (l == 2)
			return '00' + input;
		if (l == 3)
			return '0' + input;
		return input;
	}

	for (var i = 0, l = s.length; i < l; i++)
		output += pad_four(s.charCodeAt(i).toString(16)).toUpperCase();

	result.innerText = output;
}

/* translates source to base 64 */
function toBASE64(s) {
	// avoiding Character Out Of Range exception.
	function utf8_to_b64(str) {
		return window.btoa(decodeURIComponent(encodeURIComponent(str)));
	}
	result.innerText = utf8_to_b64(s);
}

/* translates source to ROT13 encoding */
function toROT13(s) {
	// NOTE: doesn't handle numericals
	function rot(t, u, v) {
		return String.fromCharCode(((t - u + v ) % (v * 2 ) ) + u);
	}

	var b = [], c, i = s.length, a = 'a'.charCodeAt(), z = a + 26, A = 'A'.charCodeAt(), Z = A + 26;
	while (i--) {
		c = s.charCodeAt(i);
		if (c >= a && c < z) {
			b[i] = rot(c, a, 13);
		} else if (c >= A && c < Z) {
			b[i] = rot(c, A, 13);
		} else {
			b[i] = s.charAt(i);
		}
	}
	result.innerText = b.join('');
}

/* Python parser */
function toPython(s) {

	var reserved = ["and", "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "exec", "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not", "or", "pass", "print", "raise", "return", "True", "try", "while", "with", "yield"]

	// GRAMMAR START

	//----- Step 1. Split the astring into words
	var arrayOfWords = s.split(" ");

	//----- Step 2. Process syntax
	
	// START WITH THIS: http://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/
	
	// REFERENCE: http://docs.python.org/2/reference/grammar.html
	// REFERENCE: http://docs.python.org/release/2.5.2/ref/grammar.txt
	// REFERENCE: http://zaach.github.com/jison/demos/calc/
	
	// REFRENCE: http://blog.oleganza.com/post/106246432/recursive-descent-parser-in-javascript

	var parsed = "";
	if (arrayOfWords.length > 1) {
		for (word in arrayOfWords) {
			// get rid of semicolons
			if (arrayOfWords[word].match(/;/)) {
				arrayOfWords[word] = arrayOfWords[word].replace(/;/, "");
			}
			// function example
			if (arrayOfWords[word] === 'function') {
				arrayOfWords[arrayOfWords.indexOf("function")] = "def";
			}
			// power calculation example
			if (arrayOfWords[word].match(/Math.pow\((\d)[\,](\d)\)/)) {
				arrayOfWords[word] = arrayOfWords[word].replace(/Math.pow\((\d)[\,](\d)\)/, "$1**$2");
			}
			parsed += arrayOfWords[word] + " ";
		}
	}

	//----- Step 3. merge into one string
	result.innerText = parsed;
}

