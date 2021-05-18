# Concetti matematici

L'obiettivo principale di questa storia è presentare, in modo divertente, diversi concetti relativi ai poliedri e alla loro simmetria.

Ci concentriamo su due classi specifiche di poliedri che hanno un gran numero di simmetrie (più informalmente, che sono molto simmetriche): i **solidi platonici** e i **poliedri uniformi**.

Nella storia, prima di introdurre questi poliedri, ci soffermiamo su un importante concetto geometrico, la **convessità**. Molti dei risultati presentati dipendono fortemente dal fatto che sia i solidi platonici che i poliedri uniformi sono convessi.

## Poliedri convessi

Nella storia, un esempio di poliedro non convesso si trova per caso, quando Leo cerca di "chiudere" un veicolo di una giostra dei poliedri e [certe delle componenti del veicolo si piegano all'interno]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Possiamo costruire un esempio di poliedro non convesso, ad esempio, partendo da un icosaedro e spostando al suo interno uno dei suoi vertici e le facce ad esso adiacenti ([Clicca qui per manipolare il poliedro](https://www.atractor.pt/temp/apps-tests/poliedros.html?pre=pol_1)).

| ![Icosahedron](/stories/symm-4/img/_align-center_/icosa.png =207x200) | ![Non convex polyhedron](/stories/symm-4/img/_align-center_/nao-conv.png =246x200) |
| ------ | ----------- |
| Icosaedro | Esempio di poliedro non convesso |

La definizione usata nel racconto è la seguente: un poliedro è **convesso** se, per ogni coppia di punti sulle facce, l'intero segmento che unisce i punti è contenuto nel poliedro.

![Dimostrazione che il poliedro considerato nell'esempio non è convesso](/stories/symm-4/img/_align-center_/nao-conv2.png =270x250)

## Solidi platonici

L'idea principale che intendiamo trasmettere sull'argomento è che un **solido platonico** è un poliedro "il più regolare possibile". Pertanto, un solido platonico dovrebbe soddisfare le seguenti proprietà:

`*` tutte le sue facce sono poligoni regolari tutti congruenti tra loro (stesso numero di lati, tutti con la stessa lunghezza);

`*` attorno ad ogni vertice si incontrano lo stesso numero di facce;

`*` gli [**angoli diedri**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12), cioè gli angoli tra facce contigue sono congruenti;

`*` gli [**angoli solidi**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12) in ogni vertice sono congruenti.

### Costruire tutti i solidi platonici

Nella storia, Mathina e Leo ricordano un poliedro che soddisfa tutte queste proprietà: il **cubo**.

Quando cerca di costruire un cubo, Leo scopre, sperimentalmente, uno
[**sviluppo del cubo**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12) 
e, in seguito, si rende conto che lo sviluppo non è unico (ce ne sono moltissimi). Nel corso della storia, le relazioni tra un poliedro e i suoi sviluppi vengono esplorate anche per gli altri solidi platonici.

I due personaggi decidono quindi di abbracciare la sfida di **trovare, in modo costruttivo, tutti i restanti solidi platonici**. Osservano che, in un cubo, il numero di quadrati che arrivano a ciascun vertice è sempre **tre** (in particolare è sempre uguale, come richiesto dalle proprietà di cui sopra). E se il numero di quadrati fosse diverso da 3?
[Essi poi concludono facilmente che questo non è possibile]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12): non ci sono solidi platonici diversi dal cubo con le facce quadrate.

Quindi, decidono di passare ai triangoli, che devono essere equilateri (secondo le proprietà sopra menzionate).

Seguendo lo stesso approccio di prima, i personaggi considerano il caso di tre triangoli che si uniscono in ogni vertice. Così facendo, ne scoprono un secondo: il [**tetraedro**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Passando a quattro triangoli attorno a un vertice Mathina e Leo costruiscono l'[**ottaedro**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12). Infine, scegliendo cinque triangoli attorno a ogni vertice, trovano l'[**icosaedro**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Dopo aver concluso che non è possibile costruire solidi platonici con più di cinque triangoli attorno a ogni vertice, i personaggi passano ai [**pentagoni regolari**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12). Unendone tre attorno ad ogni vertice, Leo e Mathina trovano un altro solido platonico, il [**dodecaedro**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Leo e Mathina concludono facilmente che non solo è impossibile costruire solidi platonici con più di tre pentagoni attorno ad ogni vertice, ma è anche impossibile costruire solidi platonici [**utilizzando poligoni con più di cinque lati**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12). Quindi, per esclusione, hanno costruito tutti (e cinque) i [**solidi platonici**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

| Cubo | Tetraedro | Ottaedro | Icosaedro | Dodecaedro |
| ------ | ------ | ------ | ------ | ------ |
|![Cube](/stories/symm-4/img/_align-center_/cubo.png =138x150)|![Tetrahedron](/stories/symm-4/img/_align-center_/tetra.png =126x150)|![Octahedron](/stories/symm-4/img/_align-center_/octa.png =162x150)|![Icosahedron](/stories/symm-4/img/_align-center_/icosa.png =155x150)|![Dodecahedron](/stories/symm-4/img/_align-center_/dodeca.png =146x150)|

### Solidi platonici - definizione

Una più semplice **definizione di solido platonico** è data dal tecnico: un solido platonico è un poliedro convesso le cui facce sono tutte poligoni regolari uguali tra loro ed è tale che ad ogni vertice arrivi lo stesso numero di facce.

È infatti possibile dimostrare che un poliedro che soddisfa queste condizioni ha le seguenti proprietà:

`*` gli angoli diedri sono uguali;

`*` gli angoli solidi su ciascun vertice sono uguali.

**Nota 1**: Si noti che, seguendo questa nuova definizione, per verificare se un poliedro è platonico, non è necessario confrontare i suoi angoli diedri o solidi su ciascun vertice (nella storia, i personaggi li hanno studiati perché non erano a conoscenza del risultato precedente).

**Nota 2**: Se rimuoviamo la condizione "ad ogni vertice arriva lo stesso numero di facce", possiamo anche ottenere solidi non platonici, come mostrato nella [**App 4**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

## Poliedri uniformi

Cos'è un poliedro uniforme? Esaminando un poliedro uniforme, il cubottaedro, Mathina ipotizza che sia un poliedro le cui facce sono tutte poligoni regolari, ma non tutte con lo stesso numero di lati, e per cui [gli angoli solidi in ciascun vertice sono congruenti]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

| Cubottaedro (poliedro uniforme) | Grande rombicubottaedro (poliedro uniforme) | Poliedro di Miller (poliedro non uniforme) | Piccolo rombicubottaedro (poliedro uniforme) |
| ------ | ------ | ------ | ------ |
|![Cuboctahedon](/stories/symm-4/img/_align-center_/cubocta.png =137x150)|![4-6-8](/stories/symm-4/img/_align-center_/4-6-8.png =149x150)|![Miller Polyhedron](/stories/symm-4/img/_align-center_/Miller.png =151x150)|![3-4-4-4](/stories/symm-4/img/_align-center_/3-4-4-4.png =150x150)|

Tuttavia, seguendo la "definizione di Mathina" può sorgere un problema: se costruiamo uno stampo attorno a un angolo solido del grande rombicubottaedro, [lo stampo non si adatterà a tutti gli angoli solidi]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12): in questo caso, [due stampi saranno necessari]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Tuttavia, se guardiamo entrambi gli stampi, possiamo notare che [sono l'immagine riflessa l'uno dell'altro]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

In questo caso, considereremo tutti i vertici del poliedro come "dello stesso tipo".

Con questa definizione estesa, possiamo ora affermare che tutti i vertici del Grande rombicubottaedro sono dello stesso tipo: infatti, i due stampi considerati - l'originale e quello riflesso - [si adattano perfettamente a tutti i vertici]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12). La stessa cosa accade per tutti i quattro poliedri presentati sopra. Quindi, tenendo conto della definizione di Mathina, i quattro poliedri sembrano uniformi. Tuttavia, nella storia, il tecnico afferma che uno di loro non è uniforme, cioè il [**poliedro di Miller**]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Questa discrepanza è correlata alla definizione di poliedro uniforme. Per il tecnico, la condizione "tutti i vertici sono dello stesso tipo" dovrebbe essere sostituita da una più forte, che evidenzi l'aspetto simmetrico del poliedro: "per ogni coppia di vertici, c'è almeno una simmetria del poliedro che porta un vertice sull'altro". Quindi, un **poliedro uniforme** è un poliedro:

`*` le cui facce sono tutte poligoni regolari, ma non necessariamente tutte con lo stesso numero di lati;

`*` per ogni coppia di vertici, c'è almeno una simmetria del poliedro che porta un vertice sull'altro.

Nella storia, una **simmetria di un poliedro** è definita come un'isometria (cioè una funzione che preserva le distanze) che manda il poliedro in se stesso. Per ulteriori informazioni sull'argomento, consultare: 1) [gli esempi forniti]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12), e 2) il capitolo "Cos'è una simmetria?" presentato nel testo sulla storia["Stampando i fregi"]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

Perché il poliedro di Miller non è uniforme? Possiamo convincerci di questo fatto, ad esempio, osservando che se consideriamo i vertici *A* e *B* in figura, qualsiasi isometria che manda *A* in *B* rimuoverà "l'anello" dei quadrati dall'equatore, quindi [cambierà l'aspetto finale del poliedro]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12).

![Icosahedron](/stories/symm-4/img/_align-center_/Miller-anel-quadrados-e-pontos.png =269x250)
[Manipola il poliedro](https://www.atractor.pt/temp/apps-tests/Miller_manip.html).

Tuttavia, se [ruotiamo la cupola ottagonale sulla sommità del poliedro di Miller di 45 gradi]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12), otteniamo un nuovo poliedro uniforme: il piccolo rombicubottaedro.

Nel corso della storia, il tecnico dice a Mathina e Leo quali sono **tutti i poliedri uniformi**. Essi sono costituiti da una famiglia infinita di prismi, [le cui basi sono poligoni regolari e le cui facce laterali sono quadrati]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12), una famiglia infinita di antiprismi, [le cui basi sono poligoni regolari e le cui facce laterali sono triangoli equilateri]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12) più altri tredici poliedri che non ricadono nelle due famiglie appena citate.

![Uniform polyhedra](/stories/symm-4/img/_align-center_/uniformes.png =675x400)

Alla fine, i personaggi costruiscono un modello per la giostra ["poliedri platonici e uniformi"]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12). Esso è costituito da poliedri altamente simmetrici: infatti, per ogni poliedro, e per ogni coppia di vertici, c'è almeno una simmetria del poliedro che porta un vertice sull'altro.

&nbsp;

# Commenti didattici

Utilizzando lo storytelling e i giochi, il nostro obiettivo principale è portare gli studenti a scoprire i poliedri (e la loro simmetria) in modo giocoso.

Partendo da alcune esperienze svolte dai personaggi, dalle illustrazioni e dai video, presentiamo, in modo intuitivo, vari concetti matematici: il concetto di poliedro convesso e non convesso, il concetto di solido platonico e di poliedro uniforme e delle loro simmetrie. La comprensione di questi concetti è approfondita durante la storia, e gli studenti hanno l'opportunità di consolidare le loro conoscenze, in modo giocoso, leggendo la storia, guardando i video e le immagini  e risolvendo giochi e sfide proposte nelle app disponibili.

La storia è autonoma e non dovrebbe richiedere la consultazione di materiali aggiuntivi. Quasi nessuna conoscenza precedente della materia è necessaria.

Esperenze aggiuntive simili a quelle presentate nella storia possono essere sviluppate dagli educatori. Di seguito, proponiamo alcuni spunti:

`*` Solidi platonici:
  * l'esperimento di "costruzione dei cinque Solidi Platonici" può essere svolto fisicamente con gli studenti, utilizzando cartone o altri materiali disponibili allo scopo;
  * la costruzione di diversi sviluppi per il cubo o per altri solidi platonici può essere proposta anche agli studenti, ad esempio utilizzando il cartone o altri materiali;
  * verificare che i solidi platonici abbiano “angoli diedri uguali” così come “angoli solidi uguali in ogni vertice” può essere fatto fare agli studenti, utilizzando modelli fisici dei solidi platonici e stampi costruiti, ad esempio, con la plastilina.

`*` Poliedri uniformi:
  * verificare che, in un poliedro uniforme, tutti i vertici siano “dello stesso tipo” può essere proposto agli studenti, utilizzando modelli fisici dei poliedri e stampi.

&nbsp;

# Esperienze interattive

Ci sono cinque App che accompagnano la storia: tre sono dedicate alla ricerca di alcuni tipi di poliedri (poliedri convessi, uniformi e non platonici le cui facce sono poligoni regolari e uguali) e le restanti due agli sviluppi di poliedri.

Tutte le app sono state programmate in JavaScript e sono utilizzabili sia su PC che su tablet.

Di seguito, presentiamo una piccola descrizione di ciascuna app. Sono inoltre forniti collegamenti sia per le app che per filmati esplicativi su di esse (nel canale YouTube di Mathina).

&nbsp;

## [App 1 - Isola i poliedri convessi]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

Viene presentato un insieme di otto poliedri. L'utente è invitato a scegliere i quattro convessi. Dopo aver scelto i poliedri corretti e aver cliccato
![conferma](/stories/symm-4/img/confirm.png =40x40)
, il programma mostra una nuova serie di otto poliedri. Vengono mostrati tre set di questo tipo in totale. Il gioco è risolto quando tutti i poliedri convessi sono selezionati.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-4/transcripts/Script4.pdf)

&nbsp;

## [App 2 - Scegliere gli sviluppi corretti del cubo]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

Viene presentato un set di sei proposte di sviluppi del cubo. L'utente è invitato a scegliere i 3 corretti. Dopo aver scelto gli sviluppi e aver fatto clic su
![conferma](/stories/symm-4/img/confirm.png =40x40)
, il programma mostra un nuovo set di sei sviluppi. Vengono mostrati due set di questo tipo in totale. Il gioco è risolto quando gli sviluppi corretti sono selezionati.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-4/transcripts/Script4.pdf)

&nbsp;

## [App 3 - Scegliere gli sviluppi corretti dell'ottaedro]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

Questa app è simile alla **App 2**. In questo caso, però, l'utente deve selezionare gli sviluppi dell'ottaedro. 

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-4/transcripts/Script4.pdf)

&nbsp;

## [App 4 - Scegliere poliedri non platonici le cui facce sono tutte poligoni regolari e uguali]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

Questa app è simile alla **App 1**. Tuttavia, invece di scegliere poliedri convessi, l'utente dovrebbe scegliere i poliedri non platonici le cui facce sono tutte poligoni regolari e uguali. 

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-4/transcripts/Script4.pdf)

&nbsp;

## [App 5 - Scegliere poliedri uniformi]($HUB_URL/story/mathina-wins-a-lot-of-new-toys/?actionLink=12)

Questa app è simile alla **App 1**. Tuttavia, invece di scegliere i poliedri convessi, l'utente dovrebbe scegliere i poliedri uniformi.

@[youtube](OYrrdu4y_7E?_align-center_)
[Script](/stories/symm-4/transcripts/Script4.pdf)
