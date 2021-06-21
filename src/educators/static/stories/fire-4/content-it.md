# Concetti matematici
Questa storia introduce la descrizione delle curve attraverso funzioni implicite. Abbiamo visto nella storia precedente (**La corsa delle fenici**) la descrizione esplicita di una curva, dove per ogni valore `@x@`, otteniamo un valore `@y@` da una funzione, `@y=f(x)@`, e rappresentiamo tutti i punti `@(x,y)= (x,f(x))@` sul piano.

Attraverso la descrizione implicita, al contrario, abbiamo una funzione di due variabili `@F(x,y)@` che per due valori di input qualsiasi di `@x@` e `@y@`, restituisce un numero. Rappresentiamo la nostra curva come l'insieme di tutti i punti `@(x,y)@` che soddisfano `@F(x,y)=0@`.

Con la descrizione esplicita che abbiamo usato nella storia precedente, abbiamo utilizzato un metodo costruttivo per ottenere tutti i punti della curva: abbiamo semplicemente sostituito dei valori arbitrari a x nell'equazione e ottenuto così i punti della curva. D'altra parte, con la descrizione implicita, abbiamo solo un metodo di prova per decidere se un punto appartiene o meno alla curva. Ciò rende il metodo implicito più appropriato per descrivere relazioni che per ricavare il grafico.

Prendiamo per esempio la circonferenza di raggio `@r=2@` e centrata nell'origine `@(0,0)@`. La descrizione come luogo geometrico ci dice che questa circonferenza è l'insieme di tutti i punti a distanza `@2@` dal centro.

![Circonferenza di raggio 2 centrata nell'origine](stories/fire-4/img/_align-center_circtrig.png =300x300)

Usando il teorema di Pitagora, possiamo tradurre questa proprietà in coordinate, con l'equazione
```AsciiMath
 x^2+y^2=r^2=4
 ```
oppure con una singola funzione implicita

```AsciiMath
F(x,y)=x^2+y^2-4=0.
```
Se vogliamo trasformare quest'ultima espressione in una esplicita, possiamo isolare la `@y@` in funzione di `@x@`
```AsciiMath
y=pm sqrt {4-x^2}.
```
Osserviamo che non possiamo scrivere `@y@` come una singola funzione di `@x@`, dato che abbiamo ottenuto due diverse funzioni, a seconda della scelta del segno per davanti alla radice quadrata. La simmetria della circonferenza è in qualche modo interrotta perché privilegiamo `@x@` come variabile di input, e la funzione non ammette valori di `@x@` al di fuori del dominio `@[-2,2]@`.
C'è un terzo modo per descrivere la curva in modo costruttivo: invece di scrivere `@y@` come un'espressione che dipende da `@x@`, possiamo scrivere sia `@x@` sia `@y@` come funzioni di una variabile indipendente, che possiamo intendere come tempo o come parametro. Nel caso della circonferenza, la scelta più appropriata è l'angolo tra il raggio associato a un punto `@P@` e l'asse `@x@`. Quindi, utilizzando le funzioni trigonometriche, possiamo descrivere la circonferenza in forma parametrica come

```AsciiMath
x= cos(theta)

y= sin(theta)
```

Per ogni valore di `@theta@`, otteniamo un punto di coordinate `@(x,y)@` nel piano, che appartiene alla circonferenza.


Rette e circonferenze sono solo alcuni semplici esempi per prendere confidenza con le funzioni implicite. Possiamo poi utilizzare, alcune tecniche generare ulteriori curve:

* Deformazione: data una curva definita da `@F(x,y)=0@`, possiamo ottenere una piccola deformazione cambiando l'equazione in `@F(x, y)=a @`, o, equivalentemente, `@F(x,y)-a=0@`, se il valore di a è piccolo (vicino a zero). Poiché la funzione `@F@` è continua, i punti della curva `@F(x,y)=a@` saranno vicini ai punti della curva `@F(x,y)=0@`. Si ottiene così una deformazione della curva.

Date due curve definite da `@F(x,y)=0@` e `@G(x,y)=0@`, possiamo ottenere la curva che contiene tutti i punti che appartengono ad almeno una delle due (unione), o l'insieme di punti che appartengono contemporaneamente a entrambe le curve (intersezione).

* Unione: possiamo ottenere i punti dell'unione dall'equazione `@F(x,y)*G(x,y)=0@`. Infatti, se il prodotto `@F*G=0@`, allora o `@F=0@`, o `@G=0@` (o entrambi), e quindi tutti i punti che soddisfano `@F=0@` fanno parte della nuova curva, così come anche tutti i punti che soddisfano `@G=0@`.

* Intersezione: possiamo ottenere i punti dell'intersezione dall'equazione `@F(x,y)^2+G(x,y)^2=0@`. Infatti, se la somma di due quantità positive o nulle è zero, allora entrambe devono essere uguali a zero contemporaneamente e quindi solo i punti che fanno simultaneamente parte delle curve individuate da `@F=0@` e `@G=0@` apparterranno all'intersezione. In generale, questa costruzione genererà però punti isolati (i punti di intersezione delle due curve), ma possiamo riottenere una curva applicando la tecnica di deformazione introdotta in precedenza, cioè, `@F (x,y)^2+G(x,y)^2-a=0@` per un valore di `@a@`vicino a zero.

Nell'ultima attività esploriamo le superfici implicite nello spazio tridimensionale. Questi sono dati dallo zero di una funzione a tre valori `@F(x,y,z)=0@`.



# Commenti didattici
Le app vengono qui proposte principalmente come esercizio esplorativo. Vengono forniti numerosi esempi sia per evidenziare la possibile complessità che può essere ottenuta, sia a livello di esempi semplici e già familiari dal percorso scolastico (rette, circonferenze, ellissi, iperboli ecc.).

Alcuni esempi possono essere analizzati per cercare di associare una forma geometrica all'espressione algebrica, come abbiamo fatto sopra con la circonferenza, utilizzando il teorema di Pitagora. Cercare di indovinare e di sviluppare un'intuizione a partire dalla struttura delle formule è la sfida principale di questa storia. Viene proposto inoltre un esercizio di corrispondenza tra equazioni e curve.

Gli strumenti forniti dalla app, insieme alle tecniche sopra indicate, sono abbastanza potenti e consentono di esplorare con grande creatività: è possibile sfidare lo studente a realizzare una forma che assomigli a una stella, un esagono, un animale marino, una pianta ecc.

La app ha un ampio elenco di esempi di curve, ognuno dei quali mostra formula e rappresentazione grafica. I primi esempi, più semplici, possono essere compresi e utilizzati come base per i ragionamenti successivi. Una casella di testo consente di introdurre e modificare qualsiasi equazione (polinomiale) in due variabili.

# Esperienze interattive
