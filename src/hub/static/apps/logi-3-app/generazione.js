function Load(N) {
	if (N==1) {
		var S1=Math.floor((dimension[0]-1300)/2);
		var S2=Math.floor((dimension[1]-600)/2);
		AggiungiSegmento([0+S1,0+S2],[700+S1,0+S2]);
		AggiungiSegmento([0+S1,200+S2],[700+S1,200+S2]);
		AggiungiSegmento([0+S1,600+S2],[1300+S1,600+S2]);
		AggiungiSegmento([0+S1,600+S2],[400+S1,0+S2]);
		AggiungiSegmento([0+S1,0+S2],[0+S1,600+S2]);
		AggiungiSegmento([400+S1,0+S2],[1300+S1,600+S2]);
		AggiungiSegmento([700+S1,0+S2],[700+S1,600+S2]);
		AggiungiSegmento([267+S1,0+S2],[267+S1,600+S2]);
	}
	
	if (N==2) {
		Polizia = [
                    [100, 100],
                    [100, 250]
                ];
		PoliziaIntersezioni = [
			[-1],
			[-1]
		];
		
		AggiungiSegmento([679,867],[873,214]);
		AggiungiSegmento([1389,413],[807,720]);
		AggiungiSegmento([1708,883],[884,82]);
		AggiungiSegmento([477,220],[1282,469]);
		AggiungiSegmento([287,286],[679,867]);
		AggiungiSegmento([679,867],[1708,883]);
	}
	
	if (N==3) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([372,465],[1559,695]);
		AggiungiSegmento([210,827],[1511,329]);
		AggiungiSegmento([587,188],[1574,144]);
		AggiungiSegmento([534,270],[1511,329]);
		AggiungiSegmento([888,166],[210,827]);
		AggiungiSegmento([1559,695],[879,175]);
		
		
		
	}
	
	if (N==4) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([950,555],[185,642]);
		AggiungiSegmento([1681,849],[366,261]);
		AggiungiSegmento([848,748],[751,61]);
		AggiungiSegmento([1093,65],[366,261]);
		AggiungiSegmento([1693,305],[807,458]);
		AggiungiSegmento([764,154],[185,642]);
		AggiungiSegmento([1093,65],[1681,849]);
		
		
		
	}	
	
	if (N==5) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([198,577],[993,62]);
		AggiungiSegmento([699,176],[1397,317]);
		AggiungiSegmento([609,734],[1273,913]);
		AggiungiSegmento([1340,769],[789,195]);
		AggiungiSegmento([923,735],[198,577]);
		AggiungiSegmento([923,735],[993,62]);
		
		
		
	}	
	
	if (N==6) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([411,225],[1225,92]);
		AggiungiSegmento([1362,619],[282,348]);
		AggiungiSegmento([1659,876],[456,758]);
		AggiungiSegmento([424,857],[1362,619]);
		AggiungiSegmento([996,774],[1225,92]);
		AggiungiSegmento([1225,92],[1659,876]);
		AggiungiSegmento([1225,92],[456,758]);
		
		
		
	}
	
	if (N==7) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1747,668],[1200,230]);
		AggiungiSegmento([1689,231],[162,512]);
		AggiungiSegmento([858,810],[918,106]);
		AggiungiSegmento([1693,104],[918,106]);
		AggiungiSegmento([1233,715],[1693,104]);
		AggiungiSegmento([858,810],[162,512]);
		AggiungiSegmento([858,810],[1747,668]);
		
		
		
	}
	
	if (N==8) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1149,203],[1113,918]);
		AggiungiSegmento([353,428],[897,76]);
		AggiungiSegmento([1757,651],[563,769]);
		AggiungiSegmento([1391,688],[897,76]);
		AggiungiSegmento([1172,515],[353,428]);
		AggiungiSegmento([563,769],[897,76]);
		
		
	}
	
	if (N==9) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([916,895],[1653,267]);
		AggiungiSegmento([334,352],[1641,648]);
		AggiungiSegmento([842,127],[374,889]);
		AggiungiSegmento([1366,256],[659,426]);
		AggiungiSegmento([262,164],[1366,256]);
		AggiungiSegmento([916,895],[334,352]);
		AggiungiSegmento([792,208],[916,895]);
		
		
	}
	
	if (N==10) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1274,795],[1215,97]);
		AggiungiSegmento([303,98],[1661,527]);
		AggiungiSegmento([746,149],[772,855]);
		AggiungiSegmento([1765,257],[772,855]);
		AggiungiSegmento([810,676],[303,98]);
		AggiungiSegmento([1215,97],[772,855]);
		AggiungiSegmento([1661,527],[764,623]);
		
		
	}
	if (N==11) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([994,128],[1697,384]);
		AggiungiSegmento([1685,574],[662,709]);
		AggiungiSegmento([354,494],[1468,93]);
		AggiungiSegmento([1222,892],[994,128]);
		AggiungiSegmento([713,855],[1031,250]);
		AggiungiSegmento([1222,892],[1468,93]);
		AggiungiSegmento([1222,892],[1697,384]);
		
		
	}
	if (N==12) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1279,89],[1177,859]);
		AggiungiSegmento([1675,561],[482,102]);
		AggiungiSegmento([1581,87],[655,556]);
		AggiungiSegmento([978,631],[482,102]);
		AggiungiSegmento([287,726],[482,102]);
		AggiungiSegmento([1581,87],[482,102]);
		AggiungiSegmento([1177,859],[287,726]);
		
		
	}
	if (N==13) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([408,518],[1673,895]);
		AggiungiSegmento([667,694],[1374,248]);
		AggiungiSegmento([1456,776],[813,896]);
		AggiungiSegmento([1615,91],[1673,895]);
		AggiungiSegmento([1551,449],[408,518]);
		AggiungiSegmento([1343,797],[1615,91]);
		
		
	}
	if (N==14) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1563,173],[680,167]);
		AggiungiSegmento([944,302],[1763,674]);
		AggiungiSegmento([779,211],[339,705]);
		AggiungiSegmento([152,444],[1563,173]);
		AggiungiSegmento([224,884],[1763,674]);
		
		
	}
	
	if (N==15) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1187,569],[337,283]);
		AggiungiSegmento([1477,281],[387,404]);
		AggiungiSegmento([1180,864],[1613,315]);
		AggiungiSegmento([549,612],[1180,864]);
		AggiungiSegmento([186,676],[1187,569]);
		
		
	}
	
	if (N==16) {
		
		Polizia = [
                    [100, 100],
                    [100, 250],
                    [100, 400]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([259,128],[1685,616]);
		AggiungiSegmento([236,822],[377,172]);
		AggiungiSegmento([506,451],[1526,149]);
		AggiungiSegmento([714,708],[259,128]);
		AggiungiSegmento([852,888],[1526,149]);
		AggiungiSegmento([714,708],[1685,616]);
		
		
	}
	if (N==17) {
		
		Polizia = [
                    [100, 100],
                    [100, 250]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1]
                ];
				
		AggiungiSegmento([1148,105],[793,721]);
		AggiungiSegmento([1741,591],[434,259]);
		AggiungiSegmento([465,51],[1166,787]);
		AggiungiSegmento([1394,805],[1148,105]);
		AggiungiSegmento([1739,263],[736,335]);
		AggiungiSegmento([1148,105],[465,51]);
		
		
	}
	if (N==18) {
		
		Polizia = [
                    [100, 100],
                    [100, 250]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1]
                ];
				
		

		AggiungiSegmento([1413,387],[196,719]);
		AggiungiSegmento([168,371],[1610,55]);
		AggiungiSegmento([239,192],[619,830]);
		AggiungiSegmento([1427,580],[325,336]);
		AggiungiSegmento([994,197],[503,636])
		
		
	}
	if (N==19) {
		
		Polizia = [
                    [100, 100],
                    [100, 250]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1]
                ];
				
		

		AggiungiSegmento([817,164],[1692,807]);
		AggiungiSegmento([1518,455],[754,312]);
		AggiungiSegmento([1204,332],[176,826]);
		AggiungiSegmento([1689,71],[1692,807]);
		AggiungiSegmento([232,277],[1689,71]);
		
		
	}
	if (N==20) {
		
		Polizia = [
                    [100, 100],
                    [100, 250]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1]
                ];
				
		

		AggiungiSegmento([647,790],[1588,402]);
		AggiungiSegmento([215,533],[1342,873]);
		AggiungiSegmento([1491,619],[951,60]);
		AggiungiSegmento([479,330],[1369,492]);
		AggiungiSegmento([299,787],[951,60]);
		
		
	}
	
	if (N==21) {
		
		Polizia = [
                    [100, 100],
                    [100, 250]
                ];
                PoliziaIntersezioni = [
                    [-1],
                    [-1]
                ];
				
		

		AggiungiSegmento([483,181],[1682,365]);
		AggiungiSegmento([1494,60],[869,275]);
		AggiungiSegmento([1436,405],[369,603]);
		AggiungiSegmento([696,885],[939,251]);
		AggiungiSegmento([946,574],[1494,60]);
		
		
	}
	
}

function GeneraSegmento(EstremiFissi) {
	XMin=150;
	XMax=CanvasMathina.width-150;
	YMin=50;
	YMax=CanvasMathina.height-50;
	var OK=0;
	if (EstremiFissi==0) {
		var A=[XMin+Math.random()*(XMax-XMin),YMin+Math.random()*(YMax-YMin)];
		var B=[XMin+Math.random()*(XMax-XMin),YMin+Math.random()*(YMax-YMin)];
		if (Distanza(A,B)>SogliaEstremiVicini) if (AggiungiSegmento(A,B)==1) OK=1;
	}
	
	if (EstremiFissi==1) {
		var A=[XMin+Math.random()*(XMax-XMin),YMin+Math.random()*(YMax-YMin)];
		var B=Intersezioni[Math.floor(Math.random()*Intersezioni.length)][0];
		if (Distanza(A,B)>SogliaEstremiVicini) if (AggiungiSegmento(A,B)==1) OK=1;
	}
	
	if (EstremiFissi==2) {
		var A=Intersezioni[Math.floor(Math.random()*Intersezioni.length)][0];
		var B=Intersezioni[Math.floor(Math.random()*Intersezioni.length)][0];
		if (Distanza(A,B)>SogliaEstremiVicini) if (AggiungiSegmento(A,B)==1) OK=1;
	}
	
	//DisegnaSegmenti();
	if (OK==0) return 0;
	return 1;
}

function GeneraGioco() {
	var TotaliStop=0;
	for (var j=0;j<3;j++) {
		for (var i=0;i<NumeriGenera[j];i++) {
			TotaliStop++;
			if (GeneraSegmento(j)==0) i--;
			if (TotaliStop>SogliaBlocco) {
				console.log("Mi sono bloccato...");
				return 0;
			}
		}
	}
}

function TrovaIntSuSegm(NS) {
	var IntTrovate=[];
	for (var i=0;i<Intersezioni.length;i++) {
		if (Intersezioni[i][1].indexOf(NS)>-1) IntTrovate.push(i);
	}
	return IntTrovate;
}


function Trim() {

	for (var i=0;i<Intersezioni.length;i++) {
		if (Intersezioni[i][1].length==1) { //SE ho un estremo di un segmento non collegato...
			IndiceSegm=Intersezioni[i][1][0];
			IntSuSegm=TrovaIntSuSegm(IndiceSegm);
			PuntoEsterno=Intersezioni[i][0];
			var DistanzaBase=Infinity;
			var PuntoDistMin=false;
			for (var j=0;j<IntSuSegm.length;j++) {
				PuntoAttuale=Intersezioni[IntSuSegm[j]][0];
				DistanzaAttuale=Distanza(PuntoEsterno,PuntoAttuale);
				if (DistanzaAttuale > SogliaPuntiCoincidenti && DistanzaAttuale<DistanzaBase) {
					PuntoDistMin=PuntoAttuale;
					DistanzaBase=DistanzaAttuale;
				}
			}
			
			if (DistanzaBase<SogliaDistTrim) {
				//Sostituire l'estremo PuntoEsterno con PuntoDistMin
				if (Distanza(PuntoEsterno,Segmenti[IndiceSegm][0])<SogliaPuntiCoincidenti) {
					Segmenti[IndiceSegm][0][0]=PuntoDistMin[0];
					Segmenti[IndiceSegm][0][1]=PuntoDistMin[1];	
				} else {
					Segmenti[IndiceSegm][1][0]=PuntoDistMin[0];
					Segmenti[IndiceSegm][1][1]=PuntoDistMin[1];		
				}
				
				//Eliminare l'intersezione!
				Intersezioni.splice(i, 1);
			
			}
		}
	}
	DisegnaSegmenti();
}


function Raggiunto(Dati) {
	var SegmRaggiunti=[];
	for (var i=0;i<Segmenti.length;i++) SegmRaggiunti.push(0);
	TotRagg=0;
	for (var i=0;i<Dati.length;i++) {
		SR=Intersezioni[Dati[i]][1];
		for (var j=0;j<SR.length;j++) {
			if (SegmRaggiunti[SR[j]]==0) {
				TotRagg++;
				SegmRaggiunti[SR[j]]=1;
			}
		}
	}
	
	if (TotRagg==Segmenti.length) {
	console.log(Dati);
	return true;
	}
	else return false;

}

function ProvaRiempi(N) {
	//Prova a capire se si può riempire con NuovaInt
	Candid=new Array(N);
	B=Intersezioni.length;
	for (var i=0;i<Math.pow(B,N);i++) {
		for (var j=0;j<N;j++) {
			Candid[j]=Math.floor(i / Math.pow(B,j)) % B;
		}
		if (Raggiunto(Candid)) return true;
	}
	return false;
}

function TrovaRiempi() {
	for (var i=1;i<5;i++) {
		if (ProvaRiempi(i)==true) {
			console.log("Enough: "+i);
			//if (i != 2) location.reload();
			return i;
		}
	}
}

function AggiungiSegmento(A,B) {

	if (CercaSegmento([A,B])>-1) {
		//console.log("Segmento duplicato: " + [A,B]);
		return 0;
	}
	
	for (var i=0;i<Intersezioni.length;i++) {
		var DA=Distanza(Intersezioni[i][0],A);
		var DB=Distanza(Intersezioni[i][0],B);
		if ((DA<SogliaPuntiVicini && DA>SogliaPuntiCoincidenti) || (DB<SogliaPuntiVicini && DB>SogliaPuntiCoincidenti)) {
			//console.log("Estremo vicino a un punto gia noto: " + i);
			return 0;
		}
	}

	for (var i=0;i<Segmenti.length;i++) {
		if (SegmentiConfondibili([A,B],Segmenti[i])) {
			//console.log("Segmento confondibile: "+i);
			return 0;
		}
	}
	
	console.log("AggiungiSegmento(["+Math.floor(A[0])+","+Math.floor(A[1])+"],["+Math.floor(B[0])+","+Math.floor(B[1])+"]);");

	//Aggiungo tutte le nuove intersezioni
	for (var i=0;i<Segmenti.length;i++) {
		NuovaInt=TrovaIntersezioni([A,B],Segmenti[i]);
		AggiungiIntersezione(NuovaInt,Segmenti.length,i);
	}
	
	//Aggiungo il segmento alla lista
	AggiungiIntersezione(A,Segmenti.length,-1);
	AggiungiIntersezione(B,Segmenti.length,-1);
	Segmenti.push([A,B]);
	return 1;
}


function AggiungiIntersezione(Pto,SegmNuovo,SegmVecchio) {
	if (Pto[0]!=Infinity) {
			Cerca=PuntoInIntersezione(Pto);			
			if (Cerca == -1) { //Se non c'è lo aggiunto
				if (SegmVecchio==-1) Intersezioni.push([Pto,[SegmNuovo]]);
				else Intersezioni.push([Pto,[SegmVecchio,SegmNuovo]]);
			} else { //Se c'è aggiungo solo il nuovo segmento
				if (Intersezioni[Cerca][1].indexOf(Segmenti.length)==-1) Intersezioni[Cerca][1].push(SegmNuovo);
			}
		}
}


function CercaSegmento(Segm) {
	for (var i=0;i<Segmenti.length;i++) {
		if (Distanza(Segm[0],Segmenti[i][0])<SogliaPuntiCoincidenti && Distanza(Segm[1],Segmenti[i][1])<SogliaPuntiCoincidenti) return i;
		if (Distanza(Segm[0],Segmenti[i][1])<SogliaPuntiCoincidenti && Distanza(Segm[1],Segmenti[i][0])<SogliaPuntiCoincidenti) return i;	
	}
	return -1;
}


function Distanza(A,B) {
	return Math.sqrt((A[0]-B[0])*(A[0]-B[0])+(A[1]-B[1])*(A[1]-B[1]));
}

function PuntoInIntersezione(P) {

	for (var i=0;i<Intersezioni.length;i++) {
		if (Distanza(P,Intersezioni[i][0])<SogliaPuntiCoincidenti) return i;
	}
	return -1;
}

function CircaParalleli(S1,S2) {

	
	CoeffAng1=(S1[0][0]-S1[1][0])/(S1[0][1]-S1[1][1]);
	CoeffAng2=(S2[0][0]-S2[1][0])/(S2[0][1]-S2[1][1]);

	Ang1=Math.atan(CoeffAng1);
	Ang2=Math.atan(CoeffAng2);
	

	if (Math.abs(Ang1-Ang2)<SogliaCoeffAng) return true;
	else return false;
}



function SegmentiConfondibili(S1,S2) {

	if (!CircaParalleli(S1,S2)) return false;
	var Inters=TrovaIntersezioni(S1,S2);
	if (Inters[0] < Infinity) return true;
	XMinS1=Math.min(S1[0][0],S1[1][0]);
	YMinS1=Math.min(S1[0][1],S1[1][1]);
	XMaxS1=Math.max(S1[0][0],S1[1][0]);
	YMaxS1=Math.max(S1[0][1],S1[1][1]);
	
	
	XMinS2=Math.min(S2[0][0],S2[1][0]);
	YMinS2=Math.min(S2[0][1],S2[1][1]);
	XMaxS2=Math.max(S2[0][0],S2[1][0]);
	YMaxS2=Math.max(S2[0][1],S2[1][1])

	if (XMinS2<XMinS1) {
		LX=XMaxS2-XMinS1;
	} else {
		LX=XMaxS1-XMinS2;
	} 
	
	if (YMinS2<YMinS1) {
		LY=YMaxS2-YMinS1;
	} else {
		LY=YMaxS1-YMinS2;
	} 

	if (LX>SogliaSovrapposizione && LY>SogliaSovrapposizione) return true;
	
	return false;

}

function TrovaIntersezioni(S1,S2) {
	var a=S1[0][0];
	var b=S1[0][1];
	var c=S1[1][0];
	var d=S1[1][1];
	var p=S2[0][0];
	var q=S2[0][1];
	var r=S2[1][0];
	var s=S2[1][1];
	
	var det, gamma, lambda;
	det = (c - a) * (s - q) - (r - p) * (d - b);
	if (det === 0) {
		return [Infinity,Infinity];
	} else {
		lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
		gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
		//console.log("L:" + lambda);
		//console.log("G:" + gamma);
		if ((0-SogliaRicercaIntersezioni <= lambda && lambda <= 1+SogliaRicercaIntersezioni) && (0-SogliaRicercaIntersezioni <= gamma && gamma <= 1+SogliaRicercaIntersezioni)) {
			return [a+lambda*(c-a),b+lambda*(d-b)];
		} else {
			return [Infinity,Infinity];
		}
	}

}