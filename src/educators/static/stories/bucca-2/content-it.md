# Contenuti matematici
Da un punto di vista dei contenuti matematici, lo scopo di questa storia è quello di introdurre, con una modalità giocosa e informale, una variante di uno dei metodi crittografici più famosi dell'antichità: il cifrario di Cesare.

Si tratta di un semplice cifrario a sostituzione monoalfabetico. Questo vuol dire che ogni lettera dell'alfabeto viene associata a una lettera dello stesso alfabeto in modo univoco e in modo che questa corrispondenza associ lettere diverse a lettere diverse. 


![The Caesar jewel used in the story](/stories/bucca-2/img/_align-center_/sostituzione.png =900x160)

Il modo con cui si associano tra di loro le lettere in un cifrario a sostituzione è la chiave del cifrario, mentre il metodo per cifrare consiste semplicemente nel sostituire ogni lettera con quella corrispondente secondo la chiave. Il metodo di decodifica è analogo, ma si segue la corrispondenza al contrario. Per esempio, con la chiave dell'immagine precedente, la parola "MESSAGGIO" viene cifrata nella parola "MBUUCDDNS"



| M | E | S | S | A | G | G | I | O |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| M | B | U | U | C | D | D | N | S |

Il cifrario di Cesare nella sua forma originale è, tra i cifrari a sostituzione, molto semplice: la chiave infatti consiste nell'associare a ogni lettera quella che la segue nell'alfabeto di 3 posti: alla "A" viene associata la "D", alla "B" la "E" e così via... Per conoscere la chiave ci basta sapere il numero di "salti", che dobbiamo fare, cioè 3. Se nel cercare la lettera dovessimo arrivare alla "Z", dovremo ricominciare dall'inizio dell'alfabeto. Ad esempio, alla lettera "Z" dovremo associare la "C".


![The original Caesar circle](/stories/bucca-2/img/_align-center_/caesarkey.png =620x295)


Per questo motivo, per utilizzare un cifrario di Cesare velocemente, è spesso comodo rappresentare le lettere dell'alfabeto non su una riga, ma in cerchio in modo che saltando da una lettera all'altra non sia necessario ripartire mai dall'inizio perché le lettere si susseguono senza interruzioni.

![The alphabet placed in a circle for use with Caesar cipher](/stories/bucca-2/img/_align-center_/caesarcircle.png =300x300)

Spesso, in letteratura, si parla di cifrario di Cesare anche quando i salti non sono 3 ma un numero scelto (la chiave del cifrario) arbitrariamente. Nella storia "Il pappagallo parlante", ad esempio, Mathina incontra un pappagallo che si esprime in un linguaggio particolare: il pappagallo risponde in codice utilizzando il cifrario di Cesare con 1 salto. Alla richiesta "Vuoi dei biscotti?", l'animale risponde "TJ!". La lettera che segue la "S" è la "T" mentre quella che segue la "I" è la "J": il goloso pennuto risponde prontamente "SI!" alla domanda di Mathina!

Nella storia Mathina riceve in dono un gioiello con due cerchi concentrici, con incise le lettere dell'alfabeto su ciascun cerchio. Questo permette di cifrare e decifrare facilmente dei messaggi con il cifrario di Cesare. Per cifrare basta cercare una lettera nel disco interno e scegliere la lettera nella stessa posizione nel disco esterno. Per decifrare si fa la stessa cosa ma leggendo le lettere dall'esterno all'interno.


![The Caesar jewel used in the story](/stories/bucca-2/img/_align-center_/caesarjewel.png =300x300)

Nelle due esperienze interattive della storia, i lettori sono coinvolti rispettivamente nel processo di cifratura, [nota la chiave]($HUB_URL/story/the-talking-parrot/?actionLink=app1) e di decifratura, [senza conoscere la chiave]($HUB_URL/story/the-talking-parrot/?actionLink=app2).


# Commenti didattici

Il cifrario di Cesare è uno dei metodi crittografici più famosi dell'antichità. Il suo nome deriva dal generale Romano Giulio Cesare, il quale, stando a testi di Svetonio, usava il cifrario per comunicazioni di carattere militare.

Nella storia di Mathina il cifrario di Cesare è solo presentato a livello generale, ma un'analisi più approfondita dello stesso e di alcune sue caratteristiche è possibile per bambini di 7-10 anni senza che sia richiesta nessuna conoscenza pregressa. Quelli che seguono sono alcuni spunti per attività che possono essere svolte dopo la lettura della storia. 

`*` !uanto è sicuro il cifrario di Cesare? Non molto, perché dopo al massimo 25 tentativi di decodifica (ovvero il numero delle lettere dell'alfabeto meno una), saremo in grado di scoprire la chiave e il testo in chiaro.


`*` Cifrare un testo due volte, una di fila all'altra, anche con chiavi diverse, rende più sicuro il messaggio nascosto? No, anzi equivale a applicare il cifrario di Cesare utilizzando come chiave la somma delle due chiavi utilizzate.

`*` L'educatore potrebbe prendere spunto dalla storia di Mathina per una prima introduzione all'aritmetica modulare.

Questi approfondimenti sono ripresi nella storia ["Il tesoro perduto"]($HUB_URL/story/the-lost-treasure/), destinata ai lettori nella fascia di età da 11 a 14 anni. Sia "Il pappagallo parlante", che "Il tesoro perduto" sono fruibili da lettori nella fascia 7-14 anni e possono essere lette una dopo l'altra.


&nbsp;

# Esperienze interattive

Ci sono due esperienze interattive nel corso della storia, connesse a due momenti fondamentali nel processo di cifratura e decifratura del messaggio. 

Tutte le app sono programmate in Javascript e possono essere utilizzate su computer, tablet e smartphone. Segue una breve descrizione delle esperienze interattive con link ai video di spiegazione presenti sul canale YouTube di Mathina.


&nbsp;

## [App 1 - Il gioiello I]($HUB_URL/story/mathina-and-the-talking-parrot/?actionLink=app1)

Nella prima esperienza, la chiave del metodo è quella usata dal pappagallo John, cioè il salto di una lettera. In questa app l'utente deve provare a cifrare correttamente alcune parole usando il cifrario di Cesare con un salto.

@[youtube](rL_8zo54uOY?_align-center_)
[Script](/stories/symm-1/transcripts/Script2-it.pdf)

&nbsp;

## [App 2 - Il gioiello II]($HUB_URL/story/mathina-and-the-talking-parrot/?actionLink=app2)

Nella seconda app l'utente deve invece cercare di decifrare un messaggio. L'unica cosa nota è che il testo cifrato è stato ottenuto con un cifrario di Cesare. Nell'app è presente una versione del gioiello della storia, del quale è possibile ruotare i dischi con l'alfabeto e questo movimento ha come effetto quello di cambiare la chiave.


@[youtube](djsCaPaiRlc?_align-center_)
[Script](/stories/symm-1/transcripts/Script2-it.pdf)

&nbsp;


