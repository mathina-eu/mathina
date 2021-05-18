/*
 * Put <script src="egdod.js" data-scriptid="YOURINITSCRIPTID"></script> before your createCindy.
 */
(function(){
	var code = document.createTextNode(`

		// *************************************************************************************************
		// Creates a rectangle (as a list of its vertices) of width w and height h with at position pos.
		// The value c gives the position in relation to the rectangle according to the number pad on a key-
		// board: E.g. 2 means the position is in the center of the bottom side, 5 means the center and 7
		// means the top left corner.
		// No c results in positioning the rectangle with pos in its lower left corner. I.e. c = 1 by
		// default.
		// *************************************************************************************************
		expandrect(pos, c, w, h) := (
		    regional(d, e, shift);

		    d     = 0.5 * [w, h];
		    e     = (d_1, -d_2);
		    shift = compass()_c;
		    shift = (0.5 * w * shift.x, 0.5 * h * shift.y);
		    apply([-d, e, d, -e], pos + # + shift); //LU, RU, RO, LO
		);
		expandrect(pos, w, h) := expandrect(pos, 1, w, h);
		// Uses rect object; see below.
		expandrect(r) := expandrect(r.xy, r.c, r.w, r.h);

		compass() := apply(directproduct([1, 0, -1], [1, 0, -1]), reverse(#));

		
		
		// ************************************************************************************************
		// Draws a rectangle with rounded corners.
		// ************************************************************************************************
		roundedrectangle(tl, w, h, r) := roundedrectangle(tl, tl + [w,-h], r);
		roundedrectangle(tl, br, r) := (
			regional(tr, bl);
			tr = [br.x, tl.y];
			bl = [tl.x, br.y];
			r = min([r, |tl.x-br.x|/2, |tl.y-br.y|/2]);
			//rounded corners
			circle(tl.xy + [r,-r], r)
				++ circle(bl.xy + [r,r], r)
				++ circle(br.xy + [-r,r], r)
				++ circle(tr.xy + [-r,-r], r)
			//rectangle
				++ polygon([tl.xy + [r,0], tr.xy + [-r,0], br.xy + [-r,0], bl.xy + [r,0]])
				++ polygon([tl.xy + [0,-r], tr.xy + [0,-r], br.xy + [0,r], bl.xy + [0,r]]);
		);


		
		
		// ************************************************************************************************
		// Draws and handles button. They have to be a JSON with the following keys and value-types:
		// button = {
		//   "position":   (2D vector),
		//   "size":       (2D vector),
		//   "label":      (String),
		//   "textSize":   (float),
		//   "colors":     (array with 3 colour vectors),
		//   "corner":     (float),
		//   "pressed":    (bool),
		//   "fontFamily": (String)
		// };
		// ************************************************************************************************
		drawButton(button) := (
		    if(button.pressed,
		        fill(roundedrectangle(button.position + 0.5 * (-button.size.x, button.size.y), button.size.x, button.size.y, button.corner), color -> (button.colors)_2);
		        fill(roundedrectangle(button.position + 0.5 * (-button.size.x, button.size.y) + (0, -0.2), button.size.x, button.size.y, button.corner), color -> (button.colors)_1);
		            drawtext(button.position + (0, -0.5 * button.textSize / 35) + (0, -0.2), button.label, align->"mid", size->button.textSize, color->(1, 1, 1), bold->true, family->button.fontFamily);
		    , // else //
		        fill(roundedrectangle(button.position + 0.5 * (-button.size.x, button.size.y) + (0, -0.2), button.size.x, button.size.y, button.corner), color -> (button.colors)_3);
		        fill(roundedrectangle(button.position + 0.5 * (-button.size.x, button.size.y), button.size_1, button.size_2, button.corner), color -> (button.colors)_2);
		        drawtext(button.position + (0, -0.5 * button.textSize / 35), button.label, align->"mid", size->button.textSize, color->(1, 1, 1), bold->true, family->button.fontFamily);
		    );
		);


		// Boilerplate code for button functionality. Call via
		// if(mouseInButton(button),
		// 	SOME CODE
		// );
		// in the mousedownscript and mouseupscript. The property button.pressed has to be set/updated manually; allowing for both switch- and toggle-buttons.
		mouseInButton(button) := (
		  dist(mouse().x, button.position.x) < 0.5 * button.size.x
		& dist(mouse().y, button.position.y) < 0.5 * button.size.y;
		);




		// ************************************************************************************************
		// Draws and handles toggles. They have to be a JSON with the following keys and value-types:
		// toggle = {
		//   "position":   (2D vector),
		//   "radius":     (float),
		//   "lineSize":   (float),
		//   "label":      (String),
		//   "textSize":   (float),
		//   "color":      (3D Vector),
		//   "pressed":    (bool),
		//   "fontFamily": (String)
		// };
		// ************************************************************************************************
		drawToggle(toggle) := (
			fillcircle(toggle.position, toggle.radius, size->toggle.lineSize, color->(1,1,1));
			if(toggle.pressed,
				drawcircle(toggle.position, toggle.radius, size->5 * toggle.lineSize, color->toggle.color);
			, // else //
				drawcircle(toggle.position, toggle.radius, size->toggle.lineSize, color->(0,0,0));
			);
			drawtext(toggle.position + [0, -0.015 * toggle.textSize], toggle.label, size->toggle.textSize, align->"mid", family->toggle.fontFamily);
		  );

		  catchToggle(toggle) := if(dist(mouse().xy, toggle.position) < toggle.radius, toggle.pressed = !toggle.pressed);
  



		// *************************************************************************************************
		// Draws text with border.
		// *************************************************************************************************
		drawwithborder(pos, txt, size, align, color, bordercolor, bordersize, family) := (
		  forall(bordersize * apply(1..8, [sin(2 * pi * #/ 8), cos(2 * pi * #/ 8)]), o,
		         drawtext(pos, txt, color -> bordercolor, offset -> o, size -> size, align -> align, family -> family);
		        );
		  drawtext(pos, txt, color -> color, size -> size, align -> align, family -> family);
		);



		// *************************************************************************************************
		// Draws text over multiple lines with given line length.
		// *************************************************************************************************
		drawWrappedText(pos, txt, lineLength, lineHeight, size, align, color, family) := (
			regional(lines);

			lines = splitString(txt, lineLength);
			forall(1..length(lines),
				drawtext(pos + [0, -(# - 1) * lineHeight], lines_#, size->size, align->align, color->color, family->family);
			);
		);
		splitString(string, subLength) := (
			regional(totalSplit, result, candidate);

			totalSplit = tokenize(string, " ");

			result = [""];


			while(length(totalSplit) > 0,
				candidate = result_(-1) + totalSplit_1;
				
				if(length(candidate) <= subLength,
					result_(-1) = candidate + " ";
				, // else //
					result = result :> totalSplit_1 + " ";
				);

				totalSplit = bite(totalSplit);
			);

			result;
		);





		// *************************************************************************************************
		// Creates and handles rectangle objects.
		// *************************************************************************************************
		rect(x, y, c, w, h) := {"x": x, "y": y, "w": w, "h": h, "c": c, "xy": [x, y]};
		rect(x, y, w, h) := rect(x, y, 1, w, h);
		rect(pos, w, h)  := rect(pos.x, pos.y, w, h);
		drawRect(rect, size, color, alpha) := drawpoly(expandrect(rect), size -> size, color -> color, alpha -> alpha);
		fillRect(rect, color, alpha) := fillpoly(expandrect(rect), color -> color, alpha -> alpha);

		updateRectPos(rect, x, y) := (
			rect.x = x;
			rect.y = y;
			rect.xy = [x,y];
		);
		updateRectPos(rect, pos) := (
			rect.x = pos.x;
			rect.y = pos.y;
			rect.xy = pos;
		);

		rectContainsPoint(rect, point) := (
		  regional(expanded);

		  expanded = expandrect(rect);

		    point.x > (expanded_1).x
		  & point.x < (expanded_2).x
		  & point.y > (expanded_1).y
		  & point.y < (expanded_3).y
		);












		// *************************************************************************************************
		// Creates and handles slider UI element. Has to be a JSON object with the following keys and value-types.
		// slider = {
		//   "position":    (2D vector),
		//   "length":      (float),
		//   "size":        (float),
		//   "vertical":    (bool),
		//   "color":       (color vector),
		//   "startLabel":  (string),
		//   "endLabel":    (string),
		//   "labelSize":   (float),
		//   "value":       (float),
		//   "bulbSize":    (float),
		//   "fontFamily":  (string)
		// };
		// *************************************************************************************************
		sliderEnds(slider) := [slider.position, slider.position + if(slider.vertical, [0, -slider.length], [slider.length, 0])];

		drawSlider(slider) := (
		  regional(endPoints, startOffest, endOffset);

		  endPoints = sliderEnds(slider);

		  draw(endPoints, size -> slider.size, color -> slider.color);
		  fillcircle(lerp(endPoints_1, endPoints_2, slider.value), slider.bulbSize, color -> slider.color);
		  fillcircle(lerp(endPoints_1, endPoints_2, slider.value), 0.7 * slider.bulbSize, color -> (1,1,1));

		  startOffset = if(slider.vertical,
		    [0, 1.2 * slider.bulbSize + 0.2];
		  , // else //
		    [-1.2 * slider.bulbSize, -0.015 * slider.labelSize];
		  );
		  endOffset = if(slider.vertical,
		    [0, -1.2 * slider.bulbSize - 0.05 * slider.labelSize];
		  , // else //
		    [1.2 * slider.bulbSize, -0.015 * slider.labelSize];
		  );
		  drawtext(endPoints_1 + startOffset, slider.startLabel, align -> if(slider.vertical, "mid", "right"), size -> slider.labelSize, family->slider.fontfamily);
		  drawtext(endPoints_2 + endOffset,   slider.endLabel,   align -> if(slider.vertical, "mid", "left"),   size -> slider.labelSize, family->slider.fontfamily);
		);

		catchSlider(slider) := (
		  regional(endPoints);

		  endPoints = sliderEnds(slider);

		  if(closeToSegment(mouse().xy, endPoints, slider.bulbSize),
		    slider.value = if(slider.vertical,
		      inverseLerp((endPoints_1).y, (endPoints_2).y, mouse().y);
		    , // else //
		      inverseLerp((endPoints_1).x, (endPoints_2).x, mouse().x);
		    );
		  );
		);

		// *************************************************************************************************
		// Creates and handles selector UI element. Has to be a JSON object with the following keys and value-types.
		// selector = {
		//   "position":    (2D vector),
		//   "length":      (float),
		//   "size":        (float),
		//   "vertical":    (bool),
		//   "color":       (color vector),
		//   "textSize":    (float),
		//   "content":			(array),
		//   "index":       (int),
		//   "bulbSize":    (float),
		//   "fontFamily":  (String)
		// };
		// *************************************************************************************************
		drawSelector(selector) := (
			regional(endPoints);

		  endPoints = sliderEnds(selector);

		  draw(endPoints, size -> selector.size, color -> selector.color);
		  fillcircle(lerp(endPoints_1, endPoints_2, selector.index, 1, length(selector.content)), selector.bulbSize, color -> selector.color);
		  fillcircle(lerp(endPoints_1, endPoints_2, selector.index, 1, length(selector.content)), 0.7 * selector.bulbSize, color -> (1,1,1));

			forall(1..length(selector.content),
		    drawwithborder(lerp(endPoints_1, endPoints_2, #, 1, length(selector.content)) + (0, -0.015 * selector.textSize), selector.content_#, selector.textSize, "mid", [0,0,0], [1,1,1], 1.5, selector.fontFamily);
		  );

		);

		catchSelector(selector) := (
			regional(endPoints);

			endPoints = sliderEnds(selector);

			if(closeToSegment(mouse().xy, endPoints, selector.bulbSize),
		  	forall(1..length(selector.content),
			    if(dist(mouse().xy, lerp(endPoints_1, endPoints_2, #, 1, length(selector.content))) < selector.bulbSize,
						selector.index = #;
					);
			  );
		  );
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
