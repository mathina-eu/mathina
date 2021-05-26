/*
 * Put <script src="egdod.js" data-scriptid="YOURINITSCRIPTID"></script> before your createCindy.
 */
(function(){
	var code = document.createTextNode(`

		// *************************************************************************************************
		// Given a list of points, this returns the box circumscribing the points.
		// *************************************************************************************************
		box(list) := (
		    regional(bl, diag);

		    bl   = min(list);
		    diag = max(list) - bl;
		    expandrect(bl, diag.x, diag.y);
		);

`);


	var scriptId = document.currentScript.dataset.scriptid;
	if (!scriptId) scriptId = 'csinit';

	var scriptElement = document.getElementById(scriptId);
	if (!scriptElement) {
		scriptElement = document.createElement("script");
		scriptElement.id = scriptId;
		scriptElement.type = "text/x-cindyscript";
		document.head.appendChild(scriptElement);
	}
	if (scriptElement.firstChild) {
		scriptElement.insertBefore(code, scriptElement.firstChild);
	} else {
		scriptElement.appendChild(code);
	}

})();
