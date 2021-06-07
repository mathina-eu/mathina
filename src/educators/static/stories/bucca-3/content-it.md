# Concetti matematici
Da un punto di vista dei contenuti matematici, lo scopo di questa storia è quello di introdurre al lettore l'aritmetica modulare, di riflettere sulla sicurezza del cifrario di Cesare e di proporre un metodo crittografico simile al cifrario di Cesare ma molto più sicuro: il cifrario di Vigenère.

Nella storia, Mathina ha già familiarità con il cifrario di Cesare quindi si consiglia di leggere prima la storia ["Il pappagallo parlante"]($HUB_URL/story/the-talking-parrot/) nella quale viene presentato. In questa storia Angela guida Mathina verso la scoperta di un particolare modo di effettuare delle somme con i numeri: l'aritmetica modulare.


L'aritmetica modulare "modulo n" funziona come l'aritmetica usuale ma, in un certo senso, utilizza solo i numeri tra 0 e n-1. Se abbiamo due numeri a e b tra 0 e n-1 compresi, possiamo sommarli, sottrarli o moltiplicarli. Per farlo, facciamo l'operazione normalmente e poi calcoliamo il resto della divisione intera tra il numero ottenuto e n: questo sarà il risultato dell'operazione con l'aritmetica modulare (si dice, in linguaggio matematico, che calcolo la somma/differenza o il prodotto "modulo n"). 
Per esempio, se n vale 12, 10+5 è uguale a 3 perché 10+5=15 (il risultato della somma usuale) e il resto della divisione di 15 per 12 è 3. Fare i conti con l'aritmetica modulare modulo n è la stessa cosa di mettersi a fare i conti su un orologio con n ore (analogia anche riproposta in una delle App di questa storia). La somma dell'esempio appena fatto, riletta su un orologio non ci stupisce: se partiamo dalle ore 10 e sommiamo 5 ore, la lancetta si fermerà proprio sul 3!

Il collegamento con il cifrario di Cesare è che se associamo i numeri da 0 a 25, in ordine, alle lettere "A", "B",..., "Z", applicare il cifrario di Cesare con k salti equivale a sommare k ai numeri che corrispondono alle varie lettere. Inoltre, con questa interpretazione, l'operazione di decifratura è semplicemente una sottrazione.

Questo punto di vista serve anche ad Angela per far capire a Mathina che applicare due volte il cifrario di Cesare non rende il messaggio più sicuro: si fa uno sforzo doppio per non ottenere nulla di nuovo. Infatti utilizzando due volte di fila il cifrario, con chiave k e h rispettivamente, è come usarlo una sola volta con chiave k+h. 

Nella storia viene anche presentata una variante del cifrario di Cesare, il cifrario di Vigenère. Esso è un cifrario sempre a sostituzione, come il cifrario di Cesare ma funziona partizionando le lettere in più insiemi, ciascuno dei quali è cifrato utilizzando il cifrario di Cesare con una chiave diversa. La chiave è quindi un elenco di s numeri: il primo ci dirà come cifrare la prima lettera e le lettere alla posizione s+1, 2s+1,... il secondo numero la seconda lettera e le lettere alla posizione s+2, 2s+2,... e così via. Nella storia, la chiave usata è composta da due numeri: nella pratica, il testo cifrato è stato ottenuto utilizzando il cifrario di Cesare sulle lettere dispari con chiave uguale al primo dei due numeri e sulle lettere alla posizione pari con chiave data dal secondo dei due numeri. Ad esempio, se la chiave fosse la coppia di numeri (1,3), la parola "MATHINA" viene cifrata "sommando" 1 alle lettere di posizione dispari e "sommando" 3 alle lettere di posizione pari. Otteniamo quindi la parola "NDUKJOB".



![Vigenere cipher](/stories/bucca-3/img/_align-center_/ndukjob.png)



# Commenti didattici

Alcuni concetti utilizzati in questa storia sono presentati in modo più diffuso nella storia ["Il pappagallo parlante"]($HUB_URL/story/the-talking-parrot/), destinata ai lettori nella fascia di età da 7 a 11 anni. Sia "Il pappagallo parlante" sia "Il tesoro perduto" sono fruibili da lettori nella fascia 7-14 anni. Si consiglia la lettura di entrambe le storie.

L'aritmetica modulare presenta molti spunti didattici interessanti. Al variare del modulo (n) si possono ottenere strutture algebriche diverse tra loro ed è interessante andare a studiare alcuni aspetti legati all'algebra astratta. Seguono alcuni spunti affrontabili conoscendo semplicemente il concetto di quoziente e resto della divisione per un numero intero.


`*` *Cercare alcuni elementi invertibili rispetto al prodotto.* 
Il numero 1 è elemento neutro rispetto al prodotto: ogni elemento non nullo moltiplicato per 1 da' come risultato il numero stesso. L'inverso di un numero a, se esiste, è quel numero b tale che a per b (modulo n) è pari a 1. Ad esempio, se n=7, il numero 3 moltiplicato per 5 fa 15, che modulo 7, cioè su un orologio con 7 ore, è uguale a 1. Questo vuol dire che 5 è l'inverso di 3 modulo 7! *

`*` *Caratterizzazione degli elementi invertibili rispetto al prodotto.*
Un'analisi più approfondita mostra che solo i numeri che sono coprimi con n hanno inverso e quindi se n è primo tutti i numeri, eccetto 0, hanno inverso modulo n. 

`*` *Il logaritmo discreto modulo n.*.
Questo concetto, definito come di consueto come l'operazione inversa dell'elevamento a potenza (modulo n), è uno dei tipici esempi di "one-way function" sulle quali si basano anche i moderni metodi crittografici. Per maggiori informazioni si veda [qui]($HUB_URL/story/the-man-in-the-middle/).

Il cifrario di Vigenère sembra una semplice variante del cifrario di Cesare ma non è così: il fatto di non sapere in generale quanto è lunga la chiave costituisce un ostacolo non indifferente all'attacco del cifrario, tanto che questi cifrari sono stati ritenuti inattaccabili fino al secolo scorso. In realtà, con tecniche statistiche che analizzano la frequenza delle lettere nel testo, utilizzabili in modo efficace da un computer, anche il cifrario di Vigenère è oggi poco sicuro.


Malgrado questo fatto, una variante del cifrario di Vigenère in cui la chiave è lunga quanto il testo stesso ed è scelta casualmente, detto cifrario di Vernam, è il cifrario più sicuro dal punto di vista matematico: una persona che volesse decodificare il messaggio senza conoscere la chiave, ha come unico approccio possibile quello di provare tutte le chiavi! Questo cifrario, nella pratica, non viene mai utilizzato perché richiede uno scambio di tantissime informazioni tra le parti.


&nbsp;

# Esperienze interattive

Le esperienze interattive che si incontrano nella storia sono tutte delle varianti del cifrario di Cesare presentato nella storia "Il pappagallo parlante". Esse servono principalmente per approfondire la matematica che sta alla base di questo cifrario, osservando per esempio che le operazioni di codifica e decodifica ricordano molto l'addizione e la sottrazione. Il cifrario viene poi modificato e complicato passando in effetti dall'originale cifrario di Cesare a un nuovo cifrario, molto più sicuro, chiamato cifrario di Vigenère.

Tutte le app sono programmate in Javascript e possono essere utilizzate su computer, tablet e smartphone. Segue una breve descrizione delle esperienze interattive con link ai video di spiegazione presenti sul canale YouTube di Mathina.


&nbsp;

## [App 1 - Il gioiello I]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app1)

In questa app l'utente deve provare a cifrare correttamente alcune parole usando il cifrario di Cesare con una chiave scelta dal computer. Questa esperienza serve per far prendere familiarità all'utente con il cifrario di Cesare e, nel caso l'utente abbia letto la storia "Il pappagallo parlante", per fornire un richiamo ai concetti visti precedentemente.

@[youtube](RPVvWsMXSiA?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)

&nbsp;

## [App 2 - Il gioiello II]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app2)

L'utente si trova davanti un messaggio da decifrare con il cifrario di Cesare ma con una difficoltà aggiuntiva: la frase in chiaro "Incontriamoci domani mattina al bar vicino al molo sull'isola" è scritta al contrario. Si tratta di un espediente tecnico per rendere il cifrario di Cesare più complicato ed è fatto ai fini della trama.
@[youtube](Kfp6PgOK8K8?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)

&nbsp;

## [App 3 - Somme sull'orologio]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app3)

In questa esperienza, il cifrario di Cesare presentato in precedenza viene analizzato dal punto di vista matematico. Questa volta l'interfaccia è quella di un orologio con una sola lancetta che mira a presentare l'addizione nell'aritmetica modulare. La domanda iniziale è di questo tipo: "Proviamo a calcolare 12 + 5 in un orologio con 14 ore". L'utente può spostare la lancetta delle ore su questo orologio a 14 ore per cercare di comprendere quale sarà la risposta finale (nel caso specifico 3 è la risposta corretta).

@[youtube](XsRGpkmIh0k?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)

&nbsp;
## [App 4 Cesare ripetuto I]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app4)

In questa esperienza, il cifrario di Cesare presentato in precedenza viene analizzato dal punto di vista matematico. Questa volta l'interfaccia è quella di un orologio con una sola lancetta che mira a presentare l'addizione nell'aritmetica modulare. La domanda iniziale è di questo tipo: "Proviamo a calcolare 12 + 5 in un orologio con 14 ore". L'utente può spostare la lancetta delle ore su questo orologio a 14 ore per cercare di comprendere quale sarà la risposta finale (nel caso specifico 3 è la risposta corretta).

@[youtube](LTgWwiIRrm8?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)

&nbsp;

## [App 5 Cesare ripetuto II]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app5)

Questa esperienza conclude l'analisi della storia per osservare che il cifrario di Cesare ripetuto 2 volte di seguito non ha nulla di diverso rispetto al cifrario di Cesare usuale. Semplicemente cambia la chiave. Per farlo all'utente vengono presentati due dischi di Cesare combinati come nell'esperienza precedente e gli si chiede di posizionare un terzo disco di Cesare in modo che il risultato dell'operazione di codifica sia lo stesso.

@[youtube](agTiwTMl-do?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)


&nbsp;

## [App 6 - Il gioiello III]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app6)

L'esperienza è identica alla prima, con l'unica differenza che questa volta il messaggio non si riesce a decodificare, dato che non è stato cifrato con il cifrario di Cesare. Sottolineiamo che nella storia questo viene detto prima all'utente, in modo che l'esperienza di questa app non risulti frustrante. L'idea è solo un "verificare" che in effetti il disco di Cesare non decodifica il messaggio presentato in questo caso.

@[youtube](yIqXC-y47GQ?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)

&nbsp;

## [App 7 - Il gioiello IV]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app7)

L'esperienza è identica all'esperienza precedente, viene presentata all'utente solo per concentrarsi su una lettera particolare del testo facendo in modo di tradurla come una "E", sperimentando quindi esattamente quello che Mathina e Angela stanno facendo nella storia.

@[youtube](6NQM9xFIvlg?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)


&nbsp;

## [App 8 - Parola per parola]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app8)

Questa esperienza è un primo passo verso il cifrario di Vigenère. Il testo viene codificato usando due dischi di Cesare, uno per le parole pari e uno per le parole dispari. Come si scoprirà nella storia, questo non è ancora l'approccio giusto per decodificare effettivamente il messaggio e questa esperienza ha lo scopo di far verificare personalmente che non è il metodo corretto.

@[youtube](j3cMyFg5Lfc?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)


&nbsp;

## [App 9 - Un nuovo cifrario]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app9)

L'esperienza conclusiva della storia è il cifrario di Vigenère su due lettere. Utilizzando due dischi di Cesare, si modificano rispettivamente le lettere pari e quelle dispari. In questo modo, seguendo i suggerimenti della storia, si riesce facilmente a decodificare il messaggio. C'è poi la possibilità di ripetere questa esperienza con messaggi e chiavi diversi.
@[youtube](ZS5DU2PFlR8?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-3/transcripts/Script3-it.pdf)


&nbsp;
