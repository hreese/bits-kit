/* http://www.kryogenix.org/code/browser/searchhi/ */
/* Modified 20021006 to fix query string parsing and add case insensitivity */
/* Modified 20070316 to stop highlighting inside nosearchhi nodes */
/* Modified 20071201 to use the script as document-search by Michael Loesler - http://derletztekick.com */
    
function DocSearch() {
 
	this.highlightWord = function(node,word) {
		// Iterate into this nodes childNodes
		if (node.hasChildNodes) {
			var hi_cn;
			for (hi_cn=0;hi_cn<node.childNodes.length;hi_cn++) {
				this.highlightWord(node.childNodes[hi_cn],word);
			}
		}
 
		// And do this node itself
		if (node.nodeType == 3) { // text node
			tempNodeVal = node.nodeValue.toLowerCase();
			tempWordVal = word.toLowerCase();
			if (tempNodeVal.indexOf(tempWordVal) != -1) {
				pn = node.parentNode;
				// check if we're inside a "nosearchhi" zone
				checkn = pn;
				while (checkn.nodeType != 9 && 
				checkn.nodeName.toLowerCase() != 'body') { 
				// 9 = top of doc
					if (checkn.className.match(/\bnosearchhi\b/)) { return; }
					checkn = checkn.parentNode;
				}
				if (pn.className != "searchword") {
					// word has not already been highlighted!
					nv = node.nodeValue;
					ni = tempNodeVal.indexOf(tempWordVal);
					// Create a load of replacement nodes
					before = document.createTextNode(nv.substr(0,ni));
					docWordVal = nv.substr(ni,word.length);
					after = document.createTextNode(nv.substr(ni+word.length));
					hiwordtext = document.createTextNode(docWordVal);
					hiword = document.createElement("strong");
					hiword.className = "searchword";
					hiword.appendChild(hiwordtext);
					pn.insertBefore(before,node);
					pn.insertBefore(hiword,node);
					pn.insertBefore(after,node);
					pn.removeChild(node);
				}
			}
		}
	}   
}

var DOMContentLoaded = false;
function addContentLoadListener (func) {
	if (document.addEventListener) {
		var DOMContentLoadFunction = function () {
			window.DOMContentLoaded = true;
			func();
		};
		document.addEventListener("DOMContentLoaded", DOMContentLoadFunction, false);
	}
	var oldfunc = (window.onload || new Function());
	window.onload = function () {
		if (!window.DOMContentLoaded) {
			oldfunc();
			func();
		}
	};
}

addContentLoadListener( function() {
	var q = window.location.search.substring(1).split('&');
	if(!q.length) 
		return false;
	var docSearch = new DocSearch();
	var bodyEl = document.body;
	for(var i=0; i<q.length; i++){
		var vars = q[i].split('=');
		new DocSearch().highlightWord(bodyEl,decodeURIComponent(vars[1]));
	}
});

/*
window.onload = function() {
	var q = window.location.search.substring(1).split('&');
	if(!q.length) 
		return false;
	var docSearch = new DocSearch();
	var bodyEl = document.body;
	for(var i=0; i<q.length; i++){
		var vars = q[i].split('=');
		new DocSearch().highlightWord(bodyEl,decodeURIComponent(vars[1]));
	}
}
*/