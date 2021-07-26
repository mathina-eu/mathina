# Concetti matematici
Le funzioni sono trasformazioni che prendono in input un numero x e restituiscono in output un valore y = f (x). Possiamo tracciare un grafico della funzione, individuando i punti di coordinate (x, f(x)), ottenendo così una curva nel piano. Alcuni esempi importanti di tali curve sono le linee rette (primo grado), le parabole (secondo grado) o le curve polinomiali.

Questi polinomi possono essere definiti mediante i loro coefficienti. Una tecnica interessante è quella di trovare il (solo) polinomio di grado n che passa per (n + 1) punti selezionati. Questa tecnica è chiamata interpolazione polinomiale di Lagrange ed è un esercizio di manipolazione algebrica.

Le curve polinomiali possono anche essere tracciate attraverso il loro "vettore velocità". Questo vettore è calcolato a partire dalla derivata della funzione che definisce la curva. La derivata di una funzione descrive la rapidità di variazione della funzione e quindi se la funzione cresce o descresce al crescere della variabile indipendente.

Se fissiamo la derivata della funzione (indicando gli intervalli e i modi in cui la funzione cresce o decresce) e fissiamo il valore della funzione in un punto di partenza, possiamo ricostruire la funzione originale.

# Commenti didattici
I bambini di questa età iniziano a utilizzare espressioni simboliche per rappresentare funzioni e risolvere semplici equazioni. Questa storia sfrutta queste conoscenze per descrivere le curve e introdurre intuitivamente i concetti di tasso di crescita e derivata. Le app sono utilizzabili liberamente dall'utente e offrono varie opzioni da esplorare.

# Esperienze interattive
## [App 1 - Modifica i parametri per far volare la fenice]($HUB_URL/apps/?appNumber=0&story=fire-3)

All'apertura dell'app, vedrai un sistema di coordinate, un grafico giallo e uno viola. Quella gialla è la traiettoria di volo desiderata della fenice, l'obiettivo da raggiungere. La curva viola è una funzione polinomiale della variabile x. Può essere modificata con il pannello di controllo. Per ogni potenza di x, puoi cambiare il coefficiente corrispondente del polinomio.

![App1](/stories/fire-3/img/_align-center_/app1.png)

Il grado del polinomio, cioè il valore più alto degli esponenti di x - aumenterà man mano che avanzi (il massimo è `@x^3@`). Ogni coefficiente può essere modificato con i pulsanti + e -, dove ogni clic lo cambierà di +/- 0,1. Puoi anche tenere premuto per creare un aumento/diminuzione costante del valore. Una volta inserita la traiettoria di volo corretta, la fenice volerà automaticamente lungo di essa. Successivamente, viene offerta all'utente una nuova sfida. È possibile utilizzare la funzione precedente, che sarà ancora visualizzata, o utilizzare il pulsante "Elimina", per impostare tutti i coefficienti a zero e ricominciare da capo.

@[youtube](Vgkz6XrMVIM?_align-center_)

## [App 2 - Modifica i punti e fai volare la fenice]($HUB_URL/apps/?appNumber=1&story=fire-3)

L'obiettivo di questa app è quello di creare una traiettoria di volo per la fenice, che è ancora una volta descritta da un polinomio. Devi trovare un percorso affinché la fenice arrivi sul lato destro senza incontrare ostacoli (montagne e nuvole). Questa volta, tuttavia, non è possibile regolare direttamente i coefficienti, ma è possibile solo spostare sei punti (gialli) sul piano cartesiano. Insieme all'origine, che è la posizione di partenza della fenice, questi sette punti descrivono un unico polinomio di grado 6 (massima potenza di x). Questo polinomio, cioè la traiettoria di volo creata, attraverserà tutti i punti gialli. La curva sarà visibile solo dopo aver detto alla fenice di volare.

![App2_1](/stories/fire-3/img/2_1.png)
![App2_2](/stories/fire-3/img/2_2.png)

Se la fenice non ha avuto successo, tornerà all'origine, lasciando visibile la traiettoria di volo dell'ultimo tentativo. Ora puoi cambiare la curva spostando di nuovo i punti. Per alcune sfide, potresti aver bisogno di diverse prove, perfezionando la traiettoria di volo a ogni tentativo. Se il volo ha avuto successo, verrà offerta una nuova sfida, con più ostacoli da evitare.

![App2_3](/stories/fire-3/img/_align-center_/2_3.png)

@[youtube](4tz4YHZZWYY?_align-center_)

## [App 3 - Guida la fenice($HUB_URL/apps/?appNumber=2&story=fire-3)

Per far volare questa fenice, dici quanto dovrebbe salire o scendere muovendo la mano a sinistra in alto o in basso. L'obiettivo è arrivare sul lato destro evitando tutti gli ostacoli (montagne e nuvole). La traiettoria di volo sarà orizzontale se la lancetta è posizionata sullo zero, la fenice salirà/scenderà se la lancetta è sopra/sotto lo zero. La fenice si muoverà solo mentre la mano viene trascinata attivamente, altrimenti si fermerà a mezz'aria (similmente alle app della storia 'L'addestratrice degli uccelli del fuoco'). 

![App3](/stories/fire-3/img/_align-center_/3.png)

Dopo che la fenice è arrivata sul lato destro, ritorna nella tua mano e compaiono nuovi ostacoli (un numero massimo di tre montagne e tre ammassi di nuvole).

@[youtube](xu9rp0zH3vQ?_align-center_)

## [App 4 - MOdifica i punti e guida la fenice]($HUB_URL/apps/?appNumber=3&story=fire-3)

Questa app combina i metodi introdotti nelle due app precedenti. Come nella App 2, manipoli i punti per regolare una curva che li attraversa. Tuttavia, questa volta indica la quantità di salita o discesa della fenice in ogni momento. Prova a raccogliere tutte le palle di fuoco sulla tua strada.

![App4](/stories/fire-3/img/_align-center_/4_1.png)

Dopo aver modificato i punti bianchi, puoi fare clic sul pulsante "Vai" per far volare la fenice. Durante il volo, una freccia gialla indica la direzione e la velocità della fenice nella sua posizione attuale (simile al controllo della bacchetta magica per l'unidrago nelle app della storia 'L'addestratrice degli uccelli del fuoco'). Le frecce viola indicano il valore della derivata nella posizione corrente. C'è una freccia viola visualizzata sulla fenice e (la stessa) sulla curva.

![App4](/stories/fire-3/img/_align-center_/4_2.png)

La fenice può volare fuori dallo schermo, ma alla fine arriverà sempre sul lato destro. Se impiega troppo tempo, puoi fare clic sul pulsante "Indietro" (in questo caso, il volo non è andato a buon fine). Dopo un volo in cui la fenice non ha raccolto tutte le palle di fuoco, la sua traiettoria rimane visibile per aiutarti a regolarla. Osservare la corrisponden tra la curva gialla e la curva viola.

![App4](/stories/fire-3/img/_align-center_/4_3.png)


@[youtube](-z5_LG3fgTY?_align-center_)
