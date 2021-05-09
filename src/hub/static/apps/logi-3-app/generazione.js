function Load() {
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
			return i;
		}
	}
}

function AggiungiSegmento(A,B) {

	if (CercaSegmento([A,B])>-1) {
		console.log("Segmento duplicato: " + [A,B]);
		return 0;
	}
	
	for (var i=0;i<Intersezioni.length;i++) {
		var DA=Distanza(Intersezioni[i][0],A);
		var DB=Distanza(Intersezioni[i][0],B);
		if ((DA<SogliaPuntiVicini && DA>SogliaPuntiCoincidenti) || (DB<SogliaPuntiVicini && DB>SogliaPuntiCoincidenti)) {
			console.log("Estremo vicino a un punto gia noto: " + i);
			return 0;
		}
	}

	for (var i=0;i<Segmenti.length;i++) {
		if (SegmentiConfondibili([A,B],Segmenti[i])) {
			console.log("Segmento confondibile: "+i);
			return 0;
		}
	}

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