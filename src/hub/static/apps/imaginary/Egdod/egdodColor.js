/*
 * Put <script src="egdod.js" data-scriptid="YOURINITSCRIPTID"></script> before your createCindy.
 */
(function(){
	var code = document.createTextNode(`




		// ************************************************************************************************
		// Gets color value out of a gradient. Gradient time values have to be between 0 and 1.
		// Gradient has to be an array of JSONs with keys color and t.
		// ************************************************************************************************
		evalGradient(grad, time) := (
			regional(index);
			
			grad = sort(grad, #.t);

			time = clamp(time, 0, 1);

			index = 1;
			forall(1..(length(grad) - 1),
				if(time > grad_#.t, index = #);
			);

			lerp(grad_index.color, grad_(index + 1).color, time, grad_index.t, grad_(index + 1).t);
		);


		// ************************************************************************************************
		// Color transformation
		// ************************************************************************************************
		rgb2hsv(vec) := (
			regional(cMax, cMin, delta, maxIndex, h, s);

			maxIndex = 1;
			cMax = vec_1;
			forall(2..3, 
				if(vec_# > cMax,
					maxIndex = #;
					cMax = vec_#;
				);
			);

			cMin = min(vec);
			delta = cMax - cMin;

			h =  if(delta ~= 0,
					0;
				,if(maxIndex == 1,
					mod((vec_2 - vec_3) / delta, 6);
				,if(maxIndex == 2,
					2 + (vec_3 - vec_1) / delta
				,if(maxIndex == 3,
					4 + (vec_1 - vec_2) / delta
					
				)))) / 6;

			s = if(cMax ~= 0, 0, delta / cMax);

			[h, s, cMax];

		);

		hsv2rgb(vec) := (
			regional(c, x, m, r, g, b);

			vec_1 = vec_1 * 6;
			c = vec_2 * vec_3;
			x = c * (1 - abs(mod(vec_1, 2) - 1));
			m = vec_3 - c;

			[r, g, b] =  if(vec_1 < 1, 
							[c, x, 0];
						,if(vec_1 < 2, 
							[x, c, 0];
						,if(vec_1 < 3, 
							[0, c, x];
						,if(vec_1 < 4, 
							[0, x, c];
						,if(vec_1 < 5, 
							[x, 0, c];
						,if(vec_1 < 6, 
							[c, 0, x];
						))))));

			[r + m, g + m, b + m];
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
