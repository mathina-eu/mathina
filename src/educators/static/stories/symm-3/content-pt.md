# Conceitos matemáticos

O objetivo principal desta história é explorar, de forma divertida, noções relacionadas com a simetria de frisos: sua classificação e forma de os carimbar.

Relativamente à classificação dos frisos, é apresentado um resultado surpreendente: o facto de existirem apenas 7 tipos de frisos, de acordo com a sua simetria. Na história, através das experiências das personagens Leo e Mathina, são apresentadas, de forma construtiva, as diferenças entre os 7 tipos de frisos, o que leva a uma forma natural de classificação dos frisos. Em simultâneo, são apresentados métodos naturais para carimbar alguns dos frisos, usando diferentes formas como carimbos.

No decurso da história, são referidos alguns conceitos/resultados fundamentais: "noção de friso", "noção de simetria", "classificação dos frisos segundo a sua simetria", "construção de carimbos para os frisos", ... De seguida, exploramos esses conceitos.

## O que é um friso?

Na história, não é apresentada qualquer definição de **friso**.

Se quisermos formalizar este conceito, podemos considerar um friso como:

`*` uma 
região^[Note que a referida "região" no plano para este friso é ilimitada à esquerda e à direita. A imagem mostra apenas uma parte limitada dessa região.]
 no plano para a qual há translações (em apenas uma direção) que não mudam o aspeto do friso: o friso parece o mesmo, antes e depois da translação;

![Ver o filme aqui](/stories/symm-3/video/_align-center_/Anim_Translacao_2.mp4 =640x360)

`*` além disso, existe uma tal translação de modo que qualquer outra translação é um múltiplo inteiro dela.

![Ver o filme aqui](/stories/symm-3/video/_align-center_/Anim_Translacao_3.mp4 =640x360)

**Nota 1**: esta segunda propriedade exclui uma reta como exemplo de um friso. Com efeito, se considerarmos uma translação associada a qualquer vetor *v* dessa reta, translação essa que obviamente envia a reta sobre si mesma, então a translação associada a *0,5 v* (que não é um múltiplo inteiro dela) ainda envia a reta sobre si mesma.

![Translação associada a *0,5 v*](/stories/symm-3/img/_align-center_/Reta_Vetores2.png =369x150)

**Nota 2**: da definição dada, conclui-se que um friso não é delimitado.

## O que é uma simetria?

Quando se fala em simetria, é natural introduzir o conceito de isometria. Uma isometria é uma função que preserva distâncias: se dois pontos *A* e *B* são transformados em *A’* and *B’*, então *dist(A,B)=dist(A’,B’)*.

![Isometry](/stories/symm-3/img/_align-center_/iso.png =300x250)

Na história, são referidas quatro isometrias diferentes (na ordem seguinte) - reflexão, rotação, reflexão deslizante e translação. Trata-se da lista completa das isometrias no plano: é possível provar que não existem outras.

Uma **simetria de uma figura** é uma isometria que envia a figura exatamente sobre si própria, por forma que o aspeto seja o mesmo antes e depois da transformação: não deve ser possível distinguir a figura inicial da final (nem em termos de forma, nem de posição, nem de cor).

As seguintes animações -- 
[**anim 1**](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg1)
, 
[**anim 2**](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg2)
 and 
[**anim 3**](https://mathina-hub.netlify.app/story/stamping-friezes/?actionLink=tg3)
 --, disponíveis na história, ilustram, respetivamente, uma simetria de rotação, uma simetria de reflexão deslizante e uma simetria de translação em 3 frisos diferentes.
 
 ## Classificação de frisos
 
No decurso da história e, após receberem um grande número de imagens de frisos fornecidas pelo feiticeiro, as personagens Mathina e Leo descobrem, de forma experimental, que existem 7 tipos de frisos de acordo com a sua simetria.
 
Essa descoberta é feita, de forma construtiva, através de uma análise das simetrias dos frisos. Apresentamos, de seguida, um resumo das etapas realizadas:

`*` **Simetria de reflexão**: a primeira diferença detetada pelas personagens é o facto de haver frisos que possuem eixos de simetria -- ou, noutra formulação, frisos que têm
[simetria de reflexão](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg4)
 -- e outros que não os possuem. Examinando os frisos mais atentamente, surgem novas diferenças: há frisos que apenas têm eixos de simetria verticais^[Estamos a assumir que a direção das simetrias de translação é horizontal.]
outros que apenas possuem um eixo de simetria horizontal e outros que têm ambos os tipos de eixo. Na história, os frisos com eixos de simetria são separados em 3 sacos: 1, 2 e 3: 
[1, 2 e 3](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg5)
.

`*` **Simetria de rotação**: Depois de explorarmos a simetria de reflexão, é natural passarmos para outra isometria, por exemplo, a
[rotação](https://mathina-hub.netlify.app/story/pt/stamping-friezes/?actionLink=tg6)
. Consideremos agora 2 casos diferentes: 1) frisos sem simetria de reflexão (que, na história, estão fora dos sacos) e 2) frisos com simetria de reflexão:

  * no primeiro caso, vamos selecionar os frisos que possuem simetria de rotação e considerar um 
[um novo saco (o 4º)](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg7)
;

  * no segundo caso, há uma diferença relevante no que diz respeito aos frisos do **saco 1**: aqui, 
[há não só frisos com simetria de rotação como também outros que não a têm](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg8)
. Vamos separar esses 2 tipos de frisos, adicionando um novo saco (o 5º) para os frisos com simetria de rotação que estavam no saco 1.

**Nota 1**: Note que, até agora, ao estudarmos as simetrias de reflexão e de rotação dos frisos, já chegámos a 5 diferentes tipos (“grupos”) de frisos:

| Saco 1| Saco 2 | Saco 3 | Saco 4 | Saco 5 |
| ------ | ------ | ------ | ------ | ------ |
|![Saco 1](/stories/symm-3/img/_align-center_/bag1.jpg =150x150)|![Saco 2](/stories/symm-3/img/_align-center_/bag2.jpg =150x150)|![Saco 3](/stories/symm-3/img/_align-center_/bag3.jpg =150x150)|![Saco 4](/stories/symm-3/img/_align-center_/bag4.jpg =150x150)|![Saco 5](/stories/symm-3/img/_align-center_/bag5.jpg =150x150)|
| Há simetria de reflexão vertical | Não há simetria de reflexão vertical  | Há simetria de reflexão vertical | Não há simetria de reflexão | Há simetria de reflexão vertical |
|Não há simetria de reflexão horizontal | Há simetria de reflexão horizontal| Há simetria de reflexão horizontal |  Há simetria de rotação |Não há simetria de reflexão horizontal |
|Não há simetria de rotação |  |  |  | Há simetria de rotação |

**Nota 2**: Ao analisarmos os frisos do saco 2, reparamos que não possuem simetria de rotação. Por sua vez, todos os frisos do saco 3 têm simetria de rotação.

**Nota 3**: Existem frisos (por enquanto, fora dos sacos) que nem têm simetria de reflexão nem de rotação.

`*` **Simetria de reflexão deslizante**: Passando para a simetria de reflexão deslizante (na história, este tipo de simetria é encontrada por acaso, quando o
[Leo carimba um friso incorretamente](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg9)
, podemos concluir que há 2 tipos de frisos diferentes, entre os que ficaram fora dos sacos: uns têm simetria de reflexão deslizante, outros não. Vamos dividi-los em dois sacos: o 6º, que contém os frisos com simetria de reflexão deslizante, e o 7º para os restantes frisos.

**Nota 4**: Note que, nesta fase, já encontrámos 7 diferentes tipos de frisos de acordo com a sua simetria:

| Saco 1| Saco 2 | Saco 3 | Saco 4 | Saco 5 | Saco 6 | Saco 7 |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|![Saco 1](/stories/symm-3/img/_align-center_/bag1.jpg =100x100)|![Saco 2](/stories/symm-3/img/_align-center_/bag2.jpg =100x100)|![Saco 3](/stories/symm-3/img/_align-center_/bag3.jpg =100x100)|![Saco 4](/stories/symm-3/img/_align-center_/bag4.jpg =100x100)|![Saco 5](/stories/symm-3/img/_align-center_/bag5.jpg =100x100)|![Saco 6](/stories/symm-3/img/_align-center_/bag6.jpg =100x100)|![Saco 7](/stories/symm-3/img/_align-center_/bag7.jpg =100x100)|
|Há simetria de reflexão vertical| Não há simetria de reflexão vertical | Há simetria de reflexão vertical | Não há simetria de reflexão | Há simetria de reflexão vertical | Não há simetria de reflexão | Não há simetria de reflexão |
|Não há simetria de reflexão horizontal | Há simetria de reflexão horizontal | Há simetria de rotação | Não há simetria de reflexão horizontal | Há simetria de reflexão deslizante | Não há simetria de rotação |
|Não há simetria de rotação |  |  | | Há simetria de rotação |  | Não há simetria de reflexão deslizante |

`*` **Simetria de Translação**: por definição, 
[todos os frisos têm simetria de translação](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg10)

**Nota 5**: Os frisos no saco 7 correspondem aos **que apenas têm simetria de translação**.

Ao estudarmos as simetrias dos frisos apresentados, concluímos que existem pelo menos 7 tipos de frisos de acordo com a sua simetria. Na verdade, é possível provar que **existem apenas esses 7 tipos**! No entanto, a demonstração desse resultado não cabe no âmbito deste texto.

O principal objetivo da nossa abordagem é destacar, de uma forma construtiva, as diferenças entre os 7 tipos (grupos) de frisos

&nbsp;

# Notas didáticas

Recorrendo a contos e jogos, é nosso principal objetivo levar os jovens a descobrirem a Simetria de forma lúdica.

Partindo de experiências concretas realizadas pelas personagens, experiências essas amplamente ilustradas pelas animações e imagens fornecidas, apresentamos, de forma intuitiva, diversos conceitos matemáticos: o carimbo de um friso, simetrias de reflexão/rotação/reflexão deslizante/translação, classificação de frisos de acordo com as sua simetrias. A compreensão de tais conceitos é aprofundada ao longo da história, tendo os jovens a oportunidade de consolidar os seus conhecimentos, de forma lúdica, através da resolução dos diversos desafios propostos nas apps disponíveis.

A história é “auto-contida” e não deve exigir consulta de materiais adicionais. Para tal, tivemos em consideração dois fatores: 1) não exigir qualquer conhecimento prévio sobre o assunto: os únicos conceitos não explicados na história são os de "eixo de simetria" (ou "simetria de reflexão") e de "rotação", com os quais os alunos de 11/14 anos devem já estar familiarizados; 2) adequação dos conteúdos à faixa etária dos 11/14 anos: com efeito, a maioria dos conceitos abordados na história -- as 4 isometrias no plano (reflexão, rotação, translação, reflexão deslizante) e a simetria de uma figura plana -- são assuntos abordados no currículo português de Matemática para o “3º ciclo” (12/14 anos). A nossa abordagem difere, no entanto, do normalmente praticado na educação formal, recorrendo a histórias, exemplos interativos e visualmente atrativos e um amplo número de jogos e desafios sob a forma de apps.

Além dos tópicos matemáticos já mencionados, há um que não está incluído nos currículos académicos: “desenhar frisos usando carimbos”. Introduzimos este assunto com o objetivo de transmitir uma ideia geométrica mais ampla sobre frisos e a forma como eles podem ser fisicamente produzidos. Note, contudo, que o nosso objetivo é apenas dar uma ideia geral sobre o assunto, sem muitos detalhes: por exemplo, são apresentados apenas 4 carimbos (em vez de 7), dada a maior complexidade das formas envolvidas nos três restantes.

Outras experiências semelhantes às apresentadas na história podem ser desenvolvidas por educadores. De seguida, propomos algumas experiências:

`*` Carimbar frisos: 
  * a experiência de "carimbar frisos com um cilindro" pode ser fisicamente simulada com alunos: usando um “rolo” no qual foi colado um carimbo, é possível reproduzir a experiência (virtual) de desenhar frisos no plano.
  
`*` Classificação de frisos:
  * uma experiência complementar às apresentadas na história consiste em pedir aos alunos que desenhem exemplos dos 7 tipos de frisos diferentes. E, no final, os alunos podem confirmar as suas respostas de forma semelhante à utilizada na app "Rotulando os sacos". 

&nbsp;

# Sobre as apps

Há 8 apps que acompanham a história: 6 destinam-se à classificação de frisos e as 2 restantes a carimbar frisos.

Todas as apps foram programadas em JavaScript e devem funcionar tanto em PCs como em tablets / smartphones.

De seguida, apresentamos uma pequena descrição sobre cada app. São também fornecidos links para as apps e para filmes explicativos sobre elas (no canal Mathina no YouTube).

&nbsp;

## [Jogo 1 - Carimbando frisos com um “rolo”](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg11)

Nesta app, o utilizador é convidado a escolher uma imagem de um total de 20 figuras. A seguir, é apresentada a formação de um cilindro com a imagem selecionada. Clicando em 
![Carimbar](/stories/symm-3/img/stamp.png =40x40)
, o utilizador pode visualizar o cilindro a carimbar um friso que tem como motivo a imagem escolhida.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/symm-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 2 - Separando os frisos com eixos de simetria](https://mathina-hub.netlify.app/story/pt/stamping-friezes/?actionLink=tg12)

É exibido um conjunto de 7 frisos. O utilizador é convidado a escolher 4 frisos com eixos de simetria. Depois de escolher os frisos corretos e clicar
![Confirmar](/stories/symm-3/img/confirm.png =40x40)
,  programa mostra um novo conjunto de 7 frisos. São apresentados 3 conjuntos de frisos. O jogo fica resolvido se forem selecionados todos os "bons" frisos (i.e. com eixos de simetria).

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/symm-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 3 - Separando os frisos com eixos de simetria em 3 sacos](https://mathina-hub.netlify.app/story/pt/stamping-friezes/?actionLink=tg13)

É exibido um conjunto de 12 frisos. O utilizador é convidado a arrastar cada friso para o saco correspondente, de acordo com as suas simetrias de reflexão: o **saco 1** contém os frisos que só têm eixos de simetria verticais; o **saco 2**, os que têm um eixo de simetria horizontal; e o **saco 3** os frisos com eixos de simetria verticais e horizontal.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/symm-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 4 - Carimbando frisos com uma "placa"](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg14)

Nesta app, o utilizador é convidado a escolher uma imagem de um total de 20 figuras. De seguida, o utilizador pode visualizar uma “placa” a carimbar um friso, com eixos de simetria verticais e horizontal, que tem como motivo a imagem escolhida.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/symm-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 5 - Separando os frisos com simetria de rotação](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg15)

Esta app é muito semelhante à do **Jogo 3**. Contudo, em vez de escolher os frisos com eixos de simetria, o utilizador deverá selecionar os que têm simetria de rotação.

&nbsp;


## [Jogo 6 - Ainda os frisos com simetria de rotação...](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg16)

Esta app é muito semelhante à do **Jogo 5**. A única diferença diz respeito aos frisos apresentados: aqui, os frisos exibidos são os que originalmente pertenciam ao saco 1.

&nbsp;


## [Separando os frisos com simetria de reflexão deslizante](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg17)

Esta app é muito semelhante à do **Jogo 3**. Contudo, em vez de escolher os frisos com eixos de simetria, o utilizador deverá selecionar os que têm simetria de reflexão deslizante.

&nbsp;


## [Jogo 8 - Rotulando os sacos](https://mathina-hub.netlify.app/pt/story/stamping-friezes/?actionLink=tg18)

Nesta app, o utilizador pode ver os 7 sacos obtidos e observar os frisos no interior desses sacos. Para cada saco, o utilizador é convidado a selecionar, de uma lista de símbolos – 
![reflexão horizontal](/stories/symm-3/img/Icon-refH.png =40x40)
 (reflexão horizontal),
![reflexão vertical](/stories/symm-3/img/Icon-refV.png =40x40)
 (reflexão vertical),
![rotação](/stories/symm-3/img/Icon-rot.png =40x40)
 (rotação),
![reflexão deslizante](/stories/symm-3/img/Icon-refDesl.png =40x40)
 (reflexão deslizante),
![translação](/stories/symm-3/img/Icon-trans.png =40x40)
 (translação)
 –,  aqueles que correspondem às simetrias existentes nos frisos do saco.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/symm-3/transcripts/Script3-pt.pdf)
