/*
 * Put <script src="egdod.js" data-scriptid="YOURINITSCRIPTID"></script> before your createCindy.
 */
(function(){
	var code = document.createTextNode(`
		// ************************************************************************************************
		// Checks whether float a lies between floats c and d.
		// ************************************************************************************************
		between(a, c, d) := (a >= c) & (a <= d);


		// ************************************************************************************************
		// Clamps x between the values a and b.
		// ************************************************************************************************
		clamp(x, a, b) := if(a <= b, min(max(x, a), b), min(max(x, b), a));

		// ************************************************************************************************
		// t-conorm dual to normal multiplication. (I.e. Hamacher p with p = 1).
		// ************************************************************************************************
		oplus(x, y) := x + y - x * y;


		pNorm(p, v) := (
			v = apply(v, abs(#));

			if(p == 0,
				max(v);
			, // else //
				sum(apply(v, #^p))^(1 / p);
			);
		);

		distPointSet(point, set) := (
			min(apply(set, dist(point,#)));
		);

		// *************************************************************************************************
		// Computes the binomial n over k.
		// *************************************************************************************************
		binom(n, k) := (
		    if((n < 0) % (k < 0) % (k > n),
		        err("binom: wrong numbers")
		    , // else //
		        faculty(n) / faculty(k) / faculty(n - k)
		    );
		);
		


		// *************************************************************************************************
		// Computes the convexhulls of a list of points
		// *************************************************************************************************
		cross(o, a, b) := (
			(a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x)
		  );
		convexHull(points) := (
			regional(ordered, upper, lower);
		  
			ordered = set(sort(points));
			if(length(ordered) <= 3,
			  ordered;
			, // else //
			  lower = [];
			  forall(ordered,
				while((length(lower) > 1) & (cross(lower_(-2), lower_(-1), #) <= 0),
				  lower = pop(lower);
				);
				lower = lower :> #;
			  );
			  upper = [];
			  forall(reverse(ordered),
				while((length(upper) > 1) & (cross(upper_(-2), upper_(-1), #) <= 0),
				  upper = pop(upper);
				);
				upper = upper :> #;
			  );
		  
			  pop(lower) ++ pop(upper);
			);
		  );
		



		// *************************************************************************************************
		// Area of a (simple?) polygon.
		// *************************************************************************************************
		areaOfPolygon(points) := (
			0.5 * abs(sum(apply(1..(length(points) - 1),
			  (points_#).x * (points_(# + 1)).y - (points_(# + 1)).x * (points_#).y;
			)));
		  );


		// *************************************************************************************************
		// Lagrange interpolation for a list of points.
		// *************************************************************************************************
		lagrange(list, x) := sum(apply(list, p,
			p.y * product(apply(list -- [p], q, (x - q.x) / (p.x - q.x)));
		));



		// *************************************************************************************************
		// The GJK collison detection algorithm for finite convex polygons in 2D.
		// *************************************************************************************************
		/*
		GJKcollision(shapeA, shapeB) := (
			regional(dir, simplex, found, a, b, c, perpB, perpC);

			if(shapeA == [] % shapeB == [],
				false;
			, // else //
				dir = sum(shapeB) / length(shapeB) - sum(shapeA) / length(shapeA);
				simplex = [polySupport(shapeA, shapeB, dir)];
				dir = (0,0) - simplex_1;

				result = false;
				searching = true;
				while(searching,
					a = polySupport(shapeA, shapeB, dir);
					if(a * dir < 0,
						searching = false;
					, // else //
						simplex = simplex :> a;
						if(length(simplex) == 2,
							[b, a] = simplex;
							if(triangleheight(a,b,(0,0)) ~= 0,
								result = true;
								searching = false;
							, // else // 
								dir = perp(b-a) * sign(triangleheight(a,b,(0,0)));
							);
						, // else //
							[c, b, a] = simplex;
							if(triangleheight(a,b,(0,0)) * triangleheight(a,c,(0,0)) * triangleheight(b,c,(0,0)) ~= 0,
								result = true;
								searching = false;
							, // else // 
								perpB = perp(b-a) * sign(triangleheight(a,b,(0,0)));
								perpC = perp(c-a) * sign(triangleheight(a,c,(0,0)));

								 if(perpB * a < 0,
									simplex = simplex_[2,3];
									dir = perpB;
								,if(perpC * a < 0,
									simplex = simplex_[1,3];
									dir = perpC;
								, // else //
									result = true;
									searching = false;
								));
							);
						);
					);
				);

				result;
			);
		);
		polySupport(shape, dir) := sort(shape, # * dir)_(-1);
		polySupport(shapeA, shapeB, dir) := polySupport(shapeA, dir) - polySupport(shapeB, -dir);
		*/

		lazyCollision(shapeA, shapeB) := (
			regional(mink);
			
			mink = convexHull(flatten(apply(shapeA, a, apply(shapeB, b, b - a))));

			result = true;
			forall(cycle(mink),
				result = result & (triangleheight(#_1, #_2, (0,0)) >= 0);
			);

			result;
		);

		// CONVEX POLYGONS ONLY!!!
		pointInPolygon(point, poly) := (
			regional(resultForwards, resultBackwards);

			resultForwards = true;
			resultBackwards = true;
			forall(cycle(poly),
				resultForwards  = and(resultForwards , triangleheight(#_1, #_2, point) >= 0);
				resultBackwards = and(resultBackwards, triangleheight(#_1, #_2, point) <= 0);
			);


			or(resultForwards, resultBackwards);
		);
				


		// *************************************************************************************************
		// Computes the angle at q from p to r. The result lies in [0, 2 * pi].
		// *************************************************************************************************
		computeangle(p, q, r) := (
		    regional(x, y, s, w);

		     x = p - q;
		     y = r - q;
		     s = (x * y) / (abs(x) * abs(y));
		     s = if(s < -1, -1, if(s > 1, 1, s));
		     w = arccos(s) + 0;

		     if(perp(x) * y >= 0, w, 2*pi - w);
		);


		// *************************************************************************************************
		// The sign of a number x.
		// *************************************************************************************************
		sign(x) := if(abs(x) == 0, 0, x / abs(x));


		// *************************************************************************************************
		// The faculty of the positive number n.
		// *************************************************************************************************
		faculty(n) := if(n <= 0, 1, n * faculty(n - 1));

		



		// *************************************************************************************************
		// Checks, whether two line segments intersect.
		// *************************************************************************************************
		intersect(a, b) := (
		      area(a_1, a_2, b_1) * area(a_1, a_2, b_2) < 0
		    & area(b_1, b_2, a_1) * area(b_1, b_2, a_2) < 0
		);


		
		// *************************************************************************************************
		// Computes the signed distance of x to the line a-b.
		// *************************************************************************************************
		triangleheight(a, b, x) := if(a ~= b, dist(x, a), det(a :> 1, b :> 1, x :> 1) / dist(a, b));




		// *************************************************************************************************
		// Computes logarithms to p digits after the decimal point.
		// *************************************************************************************************
		arbiLog(x, b, p) := 10^(-p) * round(10^p * log(x) / log(b));
		log2(x, p)       := arbiLog(x, 2, p);
		log2(x)          := log2(x, 6);



		// *************************************************************************************************
		// The Kaylee way to scale probabilities.
		// *************************************************************************************************
		fuzzyScale(x, c) := c * x / ((c - 1) * x + 1);
		fuzzyS(x, c, lambda) := (x < lambda, lambda * fuzzyScale(x / lambda, 1 / c),  lambda + (1 - lambda) * fuzzyScale((x - lambda) / (1 - lambda), c));

		fuzzyVectorScale(x, c) := apply(x, fuzzyScale(#, c));


		
		// *************************************************************************************************
		// Computes the fractional part of a float.
		// *************************************************************************************************
		residual(x) := x - floor(x);
		fract(x)    := residual(x);



		// *************************************************************************************************
		// Computes a random point on the unit circle.
		// *************************************************************************************************
		randomDirection() := (
			regional(alpha);
			
			alpha = 2*pi*random();
			[sin(alpha), cos(alpha)];
		);


		// *************************************************************************************************
		// Returns the middle of three numbers.
		// Call it as mid(x, min_value, max_value) to clamp x in the interval [min_value, max_value].
		// *************************************************************************************************
		mid(a, b, c) := [a,b,c]--[min([a,b,c]),max([a,b,c])];



		// *************************************************************************************************
		// Checks, whether the distance of a point is less than eps to a segment (given by two points).
		// *************************************************************************************************
		closeToSegment(p, seg, eps) := (
		  (abs(triangleheight(seg_1, seg_2, p)) < eps)
		  & ((seg_2 - seg_1) * (p - seg_1) >= -0.5 * eps * abs(seg_2 - seg_1) * abs(p - seg_1))
		  & ((seg_1 - seg_2) * (p - seg_2) >= -0.5 * eps * abs(seg_1 - seg_2) * abs(p - seg_2));
		);




		// *************************************************************************************************
		// Linear interpolation between x and y.
		// *************************************************************************************************
		lerp(x, y, t) := t * y + (1 - t) * x;
		inverseLerp(x, y, p) := if(dist(y, x) != 0, min(1, max(0, dist(p, x) / dist(y, x))), 0);
		// Lerp relative to t in interval [a, b].
		lerp(x, y, t, a, b) := lerp(x, y, inverseLerp(a, b, t));

		slerp(u, v, t) := (
			regional(angle);

			angle = arccos(u * v);

			if(angle ~= 0,
				u;
			, // else //
				(sin((1 - t) * angle) * u + sin(t * angle) * v) / sin(angle);
			);
		);





		// *************************************************************************************************
		// Computes signed area of simple polygons (i.e. not self intersecting.)
		// *************************************************************************************************
		areaOfPolygon(points) := (
		  0.5 * abs(sum(apply(1..(length(points) - 1),
		    (points_#).x * (points_(# + 1)).y - (points_(# + 1)).x * (points_#).y;
		  )));
		);




		lissajoue(a, b, d, t) := [sin(a * t + d), cos(b * t)];







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
