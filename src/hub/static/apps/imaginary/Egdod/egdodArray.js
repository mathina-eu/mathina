/*
 * Put <script src="egdod.js" data-scriptid="YOURINITSCRIPTID"></script> before your createCindy.
 */
(function(){
	var code = document.createTextNode(`

		
		// ************************************************************************************************
		// Takes two arrays of the same length and pairs elements with the same index together.
		// ************************************************************************************************
		zip(a, b) := transpose([a, b]);



		// *************************************************************************************************
		// Removes the first i elements of a list.
		// *************************************************************************************************
		bite(list, i) := list_((i + 1)..length(list));
		bite(list) := bite(list, 1);


		// *************************************************************************************************
		// Intersecting and joining a list of lists.
		// *************************************************************************************************
		cap(list) := (
		    regional(res);
		    if(list == [],
		        [];
		    , // else //
		        res = list_1;
		        forall(bite(list),
		            res = res ~~ #;
		        );

		        res;
		    );
		);
		cup(list) := set(flatten(list));



		// *************************************************************************************************
		// Generates all triples of consecutive elements of a list.
		// *************************************************************************************************
		consectriples(list) := (
		    regional(res);

		    res = [];
		    if(length(list) <= 2,
		        res = [];
		    , // else //
		        forall(1..(length(list) - 2),
		            res = res :> list_[#, # + 1, # + 2];
		        );
		    );
		);

		// *************************************************************************************************
		// Returns a list of length n where every entry is the object x.
		// *************************************************************************************************
		const(n, x) := if(n == 0, [], apply(1..n, x));


		
		// *************************************************************************************************
		// Finds first index at which x appears in list. Returns 0, when x is not in list.
		// *************************************************************************************************
		findin(list, x) := (
		    regional(occs);

		    occs = select(1..length(list), list_# == x);
		    if(length(occs) == 0, 0, occs_1);
		);

		// ************************************************************************************************
		// Returns the number of elements in list that are equal to x.
		// ************************************************************************************************
		frequency(list, x) := length(select(list, # == x));



		// *************************************************************************************************
		// Checks whether a list is constant or constant with a specific value.
		// *************************************************************************************************
		isconst(list) := (
		         list == const(length(list), list_1);
		);
		isconst(list, x) := (
		         list == const(length(list), x);
		);

		// *************************************************************************************************
		// For two lists consisting of distinct elements this function returns the permutation mapping the
		// first list to the second. It does it such that list1_result = list2.
		// Please make sure yourself, that the lists are compatible, i.e. that such a permutation exists.
		// *************************************************************************************************
		findperm(list1, list2) := (
		    apply(list2, e, select(1..length(list1), list1_# == e)_1);
		);

		// *************************************************************************************************
		// Removes last i elements of an array.
		// *************************************************************************************************
		pop(list) := list_(1..(length(list) - 1));
		pop(list, i) := list_(1..(length(list) - i));

		// *************************************************************************************************
		// Provides a list of all integers 1...n randomly sorted.
		// *************************************************************************************************
		randomindex(n) := randsort(1..n);

		// *************************************************************************************************
		// Sorts a list randomly.
		// *************************************************************************************************
		randsort(list) := (
			regional(l, temp, i);

			l = length(list);

			while(l > 0,
				i = randomint(l) + 1;

				temp = list_l;
				list_l = list_i;
				list_i = temp;
				l = l - 1;
			);

			list;
		);

		

		// *************************************************************************************************
		// Chooses randomly k elements of a list.
		// *************************************************************************************************
		randchoose(list, k) := (
				regional(res, i);

				if(k > length(list),
					randsort(list);
				, // else //
					res = [];
					forall(1..k,
						i = randomint(length(list)) + 1;
						res = res :> list_i;
						list = remove(list, i);
					);

					res;
				);
		);

		randchoose(list) := randchoose(list, 1)_1;



		// *************************************************************************************************
		// Removes the i-th element of an array.
		// *************************************************************************************************
		remove(arr, i) := (
		   if(i <= 1,
		    bite(arr);
		  ,if(i >= length(arr),
		    pop(arr);
		  , // else //
		    arr_((1..(i - 1)) ++ ((i + 1)..length(arr)));
		  ));
		);


		// *************************************************************************************************
		// Removes elements from a that lie in b.
		// *************************************************************************************************
		setMinus(a, b) := a -- b; //select(a, !contains(b, #));





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
