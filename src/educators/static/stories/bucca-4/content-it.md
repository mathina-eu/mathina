# Concetti matematici
Lo scopo di questa storia è quello di sottolineare, attraverso la narrazione dell'attacco noto come "Man in the middle", l'importanza della firma digitale nella comunicazione crittografica. 
Nel primo capitolo della storia, Angela spiega a Mathina e Leo il sistema di scambio di chiavi Diffie-Hellman, un sistema crittografico che permette di condividere un'informazione segreta attraverso comunicazioni non cifrate, anzi, pubblicamente disponibili.
Il metodo si basa sulle c.d. "one-way function", cioè delle funzioni invertibili, che risultano molto facilmente calcolabili in un verso, ma estremamente difficili da computare nell'altro.
Nella storia si fa riferimento, come esempio, alla differenza di difficoltà percepita da Leo alla scuola primaria tra moltiplicazioni e divisioni, che pur essendo matematicamente una l'inverso dell'altra, risultano avere difficoltà diverse.
Il metodo Diffie-Helmann utilizza, nella realtà, il logaritmo discreto, cioè il calcolo del logaritmo nell'aritmetica modulare (per un accenno a cosa sia l'aritmetica modulare si veda [qui]($HUB_URL/story/the-lost-treasure/), operazione enormemente più complessa dal punto di vista della difficoltà computazionale rispetto all'elevamento a potenza.

La crittografia a chiave pubblica, invece, prevede un'asimmetria nell'utilizzo delle chiavi. Una, quella privata, verrà conservata dall'utente dopo la generazione e mantenuta segreta; essa servirà solo per decifrare i messaggi ricevuti. L'altra, quella pubblica, può essere diffusa a chiunque voglia comunicare con l'utente e serve unicamente per cifrare il messaggio (ciò implica che se cifro un messaggio con la chiave pubblica di un dato destinatario non sarò poi in grado di decifrare il mio stesso messaggio).
In questo modo si elimina la necessità per l'utente di comunicare una diversa chiave segreta a ogni persona che voglia comunicare con lui: ciò si rivela particolarmente utile in caso di comunicazioni "molti a uno", come per esempio in caso di istituti bancari o agenzie governative.

La crittografia a chiave pubblica può anche essere usata "a ritroso" per verificare l'identità di un utente. In questo caso, nel messaggio cifrato con la chiave pubblica del destinatario, il mittente aggiunge una firma, che sarà poi inviata in copia cifrata con la propria chiave privata. Il destinatario potrà quindi utilizzare la chiave pubblica del mittente per verificare che la firma coincide con quella contenuta nel messaggio a lui destinato, confermando così l'identità del mittente.

La seconda parte della storia sposta l'attenzione più propriamente sull'attacco "Man in the middle". Mathina viene rapita da un misterioso pirata, che riesce a sostituirsi a lei nelle comunicazioni con Leo e Angela.

# Commenti didattici

Le "one way-function" sono alla base di diverse applicazioni nella crittografia moderna, in particolare per alcuni sistemi di scambio di chiavi, come Diffie-Hellman, e la crittografia a chiave pubblica. Rispetto all'algoritmo utilizzato nel mondo reale, si è optato per l'utilizzo di una versione semplificata, per non introdurre argomenti non trattati nella scuola secondaria e per concentrare l'attenzione sul metodo. Le competenze matematiche necessarie per utilizzare questa storia includono le proprietà delle potenze e la conoscenza della divisione con resto, che possono essere introdotte o ripassate nei primi anni della scuola secondaria di secondo grado. Per un approfondimento dettagliato dell'algoritmo Diffie-Hellman è invece necessaria almeno l'introduzione ai concetti di esponenziale e logaritmo.

&nbsp;

# Esperienze interattive

Ci sono tre esperienze interattive nel corso della storia, disponibili in quattro diversi momenti. Esse sono legate a momenti chiave del processo di cifratura e decifratura del messaggio e della scelta della chiave. 

Tutte le app sono programmate in Javascript e possono essere utilizzate su computer, tablet e smartphone. Segue una breve descrizione delle esperienze interattive con link ai video di spiegazione presenti sul canale YouTube di Mathina.


&nbsp;

## [App 1 - Scambio di chiavi I]($HUB_URL/story/the-man-in-the-middle/?actionLink=app1)

Nella prima esperienza, il lettore ripercorre i passaggi che, dopo la spiegazione di Angela, Mathina e Leo devono effettuare per ricavare il segreto condiviso. Inizialmente scelgono un numero primo p e poi un numero casuale scelto tra 2 e p-2, poi, attraverso una versione semplificata dell'algoritmo giungono separatamente alla conoscenza di un numero condiviso, ricavato a partire dalle informazioni pubblicamente scambiate.

@[youtube](LCwYk0WbgT8?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-4/transcripts/Script4-it.pdf)

&nbsp;

## [App 2 - Scambio di chiavi II]($HUB_URL/story/the-man-in-the-middle/?actionLink=app2)

La seconda app, evoluzione della prima, propone un utilizzo pratico del metodo di scambio delle chiavi. Il lettore in questo caso svolge il ruolo di Leo, che riceve il primo messaggio da Mathina e lo decifra utilizzando il segreto condiviso generato nella prima app. Questa app viene utilizzata due volte all'interno della storia, in corrispondenza dei messaggi ricevuti da Leo da parte di Mathina.

@[youtube](OUW1rex3DJA?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-4/transcripts/Script4-it.pdf)

&nbsp;

## [App 3 - Rubando la chiave]($HUB_URL/story/the-man-in-the-middle/?actionLink=app3)

Nella terza ed ultima esperienza, nel ruolo di Leo, il lettore deve cercare di violare il sistema crittografico, cercando di ricavare il segreto condiviso a partire dalla conoscenza della porzione di chiave in possesso di uno degli utenti. La app è utilizzata per evidenziare la differenza di difficoltà computazionale tra le operazioni da svolgere per ricavare il segreto condiviso e quelle invece necessarie per tentare di violare il sistema.

@[youtube](ylf8uX4wdpo?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-4/transcripts/Script4-it.pdf)

&nbsp;

## [App 4 - Scambio di chiavi III]($HUB_URL/story/the-man-in-the-middle/?actionLink=app4)

La quarta app ripropone l'esperienza della seconda, con un nuovo messaggio; il lettore nuovamente ricopre il ruolo di Leo, che riceve un nuovo messaggio da Mathina e nuovamente genera il messaggio in chiaro a partire da quello ricevuto. 

@[youtube](OUW1rex3DJA?_align-center_&hl=it&cc_lang_pref=it&cc=1)
[Script](/stories/bucca-4/transcripts/Script4-it.pdf)

&nbsp;
