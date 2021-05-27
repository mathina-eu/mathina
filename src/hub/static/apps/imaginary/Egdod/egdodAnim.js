/*
 * Put <script src="egdodAnim.js" data-scriptid="YOURINITSCRIPTID"></script> before your createCindy.
 */
(function(){
	var code = document.createTextNode(`

	///////////////////////////////////////////////////////////////////////////////////////////////////
	// This library needs egdodMath to work!
	///////////////////////////////////////////////////////////////////////////////////////////////////

	




	// ************************************************************************************************
	// Gets the current time from the computer clock converted to seconds.
	// ************************************************************************************************
	computerSeconds() := (
		regional(actualTime);

		actualTime = time();

		actualTime_1 * 3600 + actualTime_2 * 60 + actualTime_3 + actualTime_4 * 0.001;
	);

	timeBufferEBOW = 0;
	scriptStartTimeEBOW = 0;
	// ************************************************************************************************
	// Sets up time-keeping variables. Will be automatically called when included.
	// Has to be called together with playanimation()!
	// ************************************************************************************************
	setupTime() := (
		timeBufferEBOW = computerSeconds();
		scriptStartTimeEBOW = timeBufferEBOW;
	);
	now() := computerSeconds() - scriptStartTimeEBOW;

	// ************************************************************************************************
	// Returns the duration ofthe last frame/tick in seconds.
	// Needs to run on every frame!
	// ************************************************************************************************
	deltaTime() := (
		regional(result);

		result = computerSeconds() - timeBufferEBOW;
		timeBufferEBOW = computerSeconds();

		result;
	);

	// ************************************************************************************************
	// Returns the current FPS with a given precision.
	// ************************************************************************************************
	fps(digits) := (
		0.1^digits * round(10^digits / deltaTime());
	);
	fps() := fps(0);


	// ************************************************************************************************
	// Easing functions.
	// ************************************************************************************************
	easeInSine(x)        := 1 - cos((x * pi) / 2);
	easeOutSine(x)       := sin((x * pi) / 2);
	easeInOutSine(x)     := -(cos(pi * x) - 1) / 2;
   
	easeInQuad(x)        := x^2;
	easeOutQuad(x)       := 1 - (1 - x)^2;
	easeInOutQuad(x)     := if(x < 0.5, 2 * x^2, 1 - (-2 * x + 2)^2 / 2);
	   
	easeInCubic(x)       := x^3;
	easeOutCubic(x)      := 1 - (1 - x)^3;
	easeInOutCubic(x)    := if( x < 0.5, 4 * x^3, 1 - (-2 * x + 2)^3 / 2);
	   
	easeInQuart(x)       := x^4;
	easeOutQuart(x)      := 1 - (1 - x)^4;
	easeInOutQuart(x)    := if(x < 0.5, 8 * x^4, 1 - (-2 * x + 2)^4 / 2);
	   
	easeInQuint(x)       := x^5;
	easeOutQuint(x)      := 1 - (1 - x)^5;
	easeInOutQuint(x)    := if(x < 0.5, 16 * x^5, 1 - (-2 * x + 2)^5 / 2);
   
	easeInExpo(x)        := if(x == 0, 0, 2^(10 * x - 10));
	easeOutExpo(x)       := if(x == 1, 1, 1 - 2^(-10 * x));
	easeInOutExpo(x)     := if(x == 0, 0, if(x == 1, 1, if(x < 0.5, 2^(20 * x - 10) / 2, (2 - 2^(-20 * x + 10)) / 2)));
   
	easeInCirc(x)        := 1 - sqrt(1 - x^2);
	easeOutCirc(x)       := sqrt(1 - (x - 1)^2);
	easeInOutCirc(x)     := if(x < 0.5, (1 - sqrt(1 - 4 * x^2)) / 2, (sqrt(1 - (-2 * x + 2)^2) + 1) / 2);

	easeInBack(x)        := 2.70158 * x^3 - 1.70158 * x^2;
	easeOutBack(x)       := 1 - easeInBack(1 - x);
	easeInOutBack(x)     := if(x < 0.5, 4 * x^2 * ((1.70158 * 1.525 + 1) * 2 * x - 1.70158 * 1.525) / 2, ((2 * x - 2)^2 * ((1.70158 * 1.525 + 1) * (2 * x - 2) + 1.70158 * 1.525) + 2) / 2);

	easeInElastic(x)     := if(x == 0, 0, if(x == 1, 1, -2^(10 * x - 10) * sin(2 * pi / 3 * (10 * x - 10.75))));
	easeOutElastic(x)    := 1 - easeInElastic(1 - x);
	easeInOutElastic(x)  := if(x == 0, 0, if(x == 1, 1, if(x < 0.5, -2^(20 * x - 10) * sin(4 * pi / 9 * (20 * x - 11.125)) / 2, 2^(-20 * x + 10) * sin(4 * pi / 9 * (20 * x - 11.125)) / 2 + 1)));



	// ************************************************************************************************
	// Basic animation functionlity.
	// ************************************************************************************************

	setupAnimationTrack(s, e) := {
		"start":    s,
		"end":      e,
		"duration": e - s,
		"timeLeft": e - s,
		"progress": 0,
		"running":  true,
		"looping":  false
	}; 

	trackStarted(track) := now() >= track.start;

	// Needs to run on every frame!
	updateAnimationTrack(track, delta) := (
		if(track.running & trackStarted(track),
			track.timeLeft = track.timeLeft - delta;	
			track.progress = 1 - track.timeLeft / track.duration;
			if(track.timeLeft <= 0,
				if(track.looping,
					track.timeLeft = track.end - track.start;
				, // else //
					//track.timeLeft = 0;
					//track.running = false;		
				);
			);
		);
	);

	tween(obj, prop, from, to, track, easing) := (
		regional(t);

		t = track.progress;
		
		if(t <= 1,
			if(easing != "none",
				t = parse(easing + "(" + t + ")");
			);
		
			if(contains(keys(obj), prop),
				obj_prop = lerp(from, to, t);
			);	
		);
	);
	tween(obj, prop, from, to, track) := tween(obj, prop, from, to, track, "none");

	tweenMany(list, prop, from, to, track, delay, easing) := (
		regional(t);

		forall(1..length(list),
			t = 1 - (track.timeLeft + (# - 1) * delay) / track.duration;
			
			if(t <= 1,
				if(easing != "none",
					t = parse(easing + "(" + t + ")");
				);
			
				if(contains(keys(list_#), prop),
					list_#_prop = lerp(from, to, t);
				);	
			);
		);
	);
	tweenMany(list, prop, from, to, track, delay) := tweenMany(list, prop, from, to, track, delay, "none");

	// ************************************************************************************************
	// Setting up several animation tracks with delay.
	// ************************************************************************************************
	setupAnimationCascade(number, start, duration, step) := (
		apply(0..number - 1,
			setupAnimationTrack(start + # * step, start + # * step + duration);	
		);
	);

	// ************************************************************************************************
	// Updating all tracks in a cascade. Has to run on every frame.
	// ************************************************************************************************
	updateAnimationCascade(cascade, delta) := (
		forall(cascade, track,
			updateAnimationTrack(track, delta);
		);
	);

	// ************************************************************************************************
	// Updating all tracks in a cascade. Has to run on every frame.
	// ************************************************************************************************
	runAnimationCascade(cascade) := forall(cascade, track, track.running = true);




	// ************************************************************************************************
	// Rendering various animation objects.
	// ************************************************************************************************
	// Text objects needs
	// pos
	// text
	// percentVisible
	// size
	// color 
	// fontFamily
	// align
	// ************************************************************************************************
	drawTextObject(obj) := (
		drawtext(obj.pos, substring(obj.text, 0, round(obj.percentVisible * length(obj.text))), size->obj.size, color->obj.color, align->obj.align, family->obj.fontFamily, align->obj.align);
	);


	// ************************************************************************************************
	// Stroke object needs
	// pos
	// stroke (list of points, relative to pos)
	// drawPercent
	// lineColor
	// lineSize
	// fillColor
	// fillAlpha
	// arrow
	// arrowSize
	// ************************************************************************************************
	drawStrokeObject(obj) := (
		regional(absoluteStroke, ratio);
		absoluteStroke = apply(obj.stroke, obj.pos + #);
		ratio = 1..ceil(obj.drawPercent * length(absoluteStroke));
		fillpoly(absoluteStroke_ratio, color->obj.fillColor, alpha->obj.fillAlpha);
		connect(absoluteStroke_ratio, size->obj.lineSize, color->obj.lineColor, alpha->obj.lineAlpha);
		if(obj.arrow, 
			 if(length(ratio) >= 3,
				connect(arrowTip(absoluteStroke_(ratio_(-1)), absoluteStroke_(ratio_(-1)) - absoluteStroke_(ratio_(-3)), obj.arrowSize), size->obj.lineSize, color->obj.lineColor, alpha->obj.lineAlpha);
			,if(length(ratio) >= 2,
				connect(arrowTip(absoluteStroke_(ratio_(-1)), absoluteStroke_(ratio_(-1)) - absoluteStroke_(ratio_(-2)), obj.arrowSize), size->obj.lineSize, color->obj.lineColor, alpha->obj.lineAlpha);
			));
		);
	);
	arrowTipAngleEBOW = pi/ 6;
	arrowTip(tipPos, dir, size) := (
		if(abs(dir) > 0, dir = dir / abs(dir));

		[
			tipPos - size * rotation(arrowTipAngleEBOW) * dir,
			tipPos,
			tipPos - size * rotation(-arrowTipAngleEBOW) * dir
		];		
	);


	// ************************************************************************************************
	// Flipbook object needs
	// pos
	// scale
	// flipbook
	// index
	// flipx
	// flipy
	// rotation
	// alpha
	// ************************************************************************************************
	drawFlipbookObject(obj) := (
		drawimage(obj.pos, obj.flipbook_(obj.index), scale->obj.scale, rotation->obj.rotation, flipx->obj.flipx, flipy->obj.flipy, alpha->obj.alpha);
	);
	

	// ************************************************************************************************
	// Cycles through flipbook of a flipbook object. Flipbook pages are equdistantly 
	// spread across animation track as key frames.
	// ************************************************************************************************
	animateFlipbook(obj, track) := (
		regional(n);
		n = length(obj.flipbook);

		obj.index = floor(lerp(1, n + 0.9999, track.timeLeft, track.end, track.start));
	);


	
	//if(isundefined(strokeSampleRateEBOW), println("test"); strokeSampleRateEBOW = 64);
	strokeSampleRateEBOW = 64;
	// ************************************************************************************************
	// Setting up a stroke object.
	// ************************************************************************************************
	createRootStrokeObject(pos, lineColor, fillColor, fillAlpha) := {
		"pos": pos,
		"stroke": apply(1..strokeSampleRateEBOW, [0,0]),
		"drawPercent": 0,
		"lineSize": 0,
		"lineColor": lineColor,
		"fillColor": fillColor,
		"fillAlpha": fillAlpha,
		"arrow": false,
		"arrowSize": 0
	};
	
	// ************************************************************************************************
	// Zero strokes.
	// ************************************************************************************************
	zeroStrokeCenter() := apply(1..strokeSampleRateEBOW, [0,0]);
	zeroStrokeRight() := apply(1..strokeSampleRateEBOW, [1,0]);
	
	// ************************************************************************************************
	// Creates stroke around a circle.
	// ************************************************************************************************
	sampleCircle(rad, angle) := apply(0..strokeSampleRateEBOW - 1, rad * [cos(angle * # / (strokeSampleRateEBOW - 1)), sin(angle * # / (strokeSampleRateEBOW - 1))]);
	
	
	// ************************************************************************************************
	// Subdivides the distance between two points.
	// ************************************************************************************************
	subdivideSegment(p, q, n) := apply(1..n, lerp(p, q, # / (n + 1)));
	
	// ************************************************************************************************
	// Creates stroke around a polygon.
	// ************************************************************************************************
	samplePolygon(poly, closed) := (
		regional(pairs, dists, totalDist, effectiveNumber, splitNumbers, stepSize);
		
		if(closed, 
			pairs = cycle(poly);
		, // else //
			pairs = consecutive(poly);
		);
		
		dists = apply(pairs, dist(#_1, #_2));
		totalDist = sum(dists);
		
		effectiveNumber = strokeSampleRateEBOW - length(poly) - 1;
		splitNumbers = [];

		forall(1..length(poly) - 1,
			splitNumbers = splitNumbers :> floor(effectiveNumber * dists_# / totalDist);	
		);

		splitNumbers = splitNumbers :> effectiveNumber - sum(splitNumbers);
		
		flatten(apply(1..length(pairs), pairs_#_1 <: subDivideSegment(pairs_#_1, pairs_#_2, splitNumbers_#))) ++ if(closed, [poly_1], []);
	);
	samplePolygon(poly) := 	samplePolygon(poly, true);
		

	// ************************************************************************************************
	// Creates stroke as Bezier curves.
	// ************************************************************************************************
	sampleBezierLin(a, b) := (
		regional(t);
		apply(0..strokeSampleRateEBOW - 1, 
			t = # / (strokeSampleRateEBOW - 1);

			t*b + (1-t)*a;
		);
	);
	sampleBezierQuad(a, b, c) := (
		regional(t);
		apply(0..strokeSampleRateEBOW - 1, 
			t = # / (strokeSampleRateEBOW - 1);

			t^2*c + 2*t*(1-t)*b + (1-t)^2*a;
		);
	);
	sampleBezierCube(a, b, c, d) := (
		regional(t);
		apply(0..strokeSampleRateEBOW - 1, 
			t = # / (strokeSampleRateEBOW - 1);

			t^3*d + 3*t^2*(1-t)*c + 3*t*(1-t)^2*b + (1-t)^3*a;
		);
	);


	// ************************************************************************************************
	// Creates a stroke based on a function graph.
	// ************************************************************************************************
	sampleFunctionGraph(func, start, end) := (
		apply(0..strokeSampleRateEBOW-1,
			t = lerp(start, end, #, 0, strokeSampleRateEBOW-1);

			(t, parse(func + "(" + t + ")"));	
		);
	);
	sampleCurve(curve, start, end) := (
		apply(0..strokeSampleRateEBOW-1,
			t = lerp(start, end, #, 0, strokeSampleRateEBOW-1);

			parse(curve + "(" + t + ")");	
		);
	);


	// ************************************************************************************************
	// Draws a stroke object as a stroke.
	// ************************************************************************************************
	constructStrokeDraw(obj, lineSize, arrowSize, track) := (
		tween(obj, "lineSize", 0, lineSize, track, "easeOutCirc");
		tween(obj, "drawPercent", 0, 1, track, "easeInOutCubic");
		tween(obj, "arrowSize", 0, arrowSize, track);	
		);
	destroyStrokeDraw(obj, lineSize, arrowSize, track) := (
		tween(obj, "lineSize", lineSize, 0, track, "easeInCirc");
		tween(obj, "drawPercent", 1, 0, track, "easeInOutCubic");
		tween(obj, "arrowSize", arrowSize, 0, track);	
	);
	
	constructStrokeDrawMany(list, lineSize, arrowSize, track, delay) := (
		tweenMany(list, "lineSize", 0, lineSize, track, delay, "easeOutCirc");
		tweenMany(list, "drawPercent", 0, 1, track, delay, "easeInOutCubic");
		tweenMany(list, "arrowSize", 0, arrowSize, track, delay);	
	);

	// ************************************************************************************************
	// Grows a circle.
	// ************************************************************************************************
	constructCircleGrow(obj, rad, lineSize, track) := (
		tween(obj, "lineSize", 0, lineSize, track);
		obj.stroke = sampleCircle(lerp(0, rad, 1 - easeOutQuad(track.timeLeft / track.duration)), 2 * pi);
	);
		
		
	
	// ************************************************************************************************
	// Transformation matrices.
	// ************************************************************************************************
	rotation(alpha) := [[cos(alpha), -sin(alpha)], [sin(alpha), cos(alpha)]];

	
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
