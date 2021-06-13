# Conceitos matemáticos

O objetivo principal desta história é explorar, de forma divertida, diversas noções relacionadas com poliedros e respetiva simetria.

Concentrar-nos-emos em duas classes específicas de poliedros que possuem um grande número de simetrias (mais informalmente, são “muito simétricos”): **Sólidos Platónicos** e **Poliedros Uniformes**.

Na história, antes de apresentarmos tais poliedros, abordamos um outro conceito geométrico importante: a **convexidade**. Vários dos resultados apresentados dependem fortemente do facto de tanto os sólidos platónicos como os poliedros uniformes serem convexos.

## Poliedro convexo

Na história, é encontrado, por acaso, um exemplo de um poliedro não convexo, quando o Leo tenta fechar um veículo do Carrossel de Poliedros e 
[algumas das componentes do veículo se viram para dentro]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg1).

| ![Icosaedro](/stories/symm-4/img/_align-center_/icosa.png =207x200) | ![Poliedro não convexo](/stories/symm-4/img/_align-center_/nao-conv.png =246x200) |
| ------ | ----------- |
| Icosaedro | Poliedro não convexo, criado depois de se colocar um vértice do icosaedro no seu interior e de se considerar o poliedro assim obtido ([Manipule o poliedro aqui]($HUB_URL/apps/anims/poliedros.html?pre=pol_1)) |

Desta forma, em vez de um icosaedro, obtém-se um poliedro não convexo.

A definição adotada na história é a seguinte: **um poliedro é convexo** se, para cada par de pontos nas faces, todo o segmento que une esses pontos estiver contido no poliedro.

![Poliedro não convexo](/stories/symm-4/img/_align-center_/nao-conv2.png =270x250)

## Sólidos Platónicos

A ideia principal que pretendemos veicular sobre o assunto é que um **Sólido Platónico** é um poliedro "tão regular quanto possível". Assim, um sólido Platónico deve satisfazer as seguintes propriedades:

`*` as suas faces são polígonos regulares e iguais entre si (mesmo número de arestas, todas com o mesmo comprimento);

`*` em cada vértice encontra-se o mesmo número de faces;

`*` os [**ângulos diedrais**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg2)
, ou seja, os ângulos entre faces contíguas, são iguais seja, os ângulos entre faces contíguas, são iguais;

`*` os [**ângulos sólidos**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg3)
 em cada vértice são iguais.

### Construindo todos os Sólidos Platónicos

Na história, a Mathina e o Leo lembram-se de um poliedro que satisfaz todas estas propriedades: o **cubo**.

Ao tentar construir um cubo, o Leo descobre, experimentalmente, uma
[**sua planificação**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg4)
, e, mais tarde, apercebe-se que essa planificação não é única (existem várias outras opções). Ao longo da história, são também exploradas, para os restantes Sólidos Platónicos, as relações entre um poliedro e as suas planificações.

As duas personagens decidem então aceitar o desafio de **encontrar, de forma construtiva, todos os restantes Sólidos Platónicos**. Eles observam que, num cubo, o número de faces que chegam a cada vértice -- **3** -- é sempre o mesmo (conforme mencionado numa das propriedades acima referidas). E se o número de quadrados fosse diferente de 3?
[Facilmente concluem que isso não é possível]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg5)

A Mathina e o Leo decidem, então, passar para os triângulos, que devem ser equiláteros (de acordo com as propriedades acima mencionadas).

Seguindo a abordagem anterior, as personagens consideram então o caso de 3 triângulos em cada vértice. Desta forma, descobrem um segundo Sólido Platónico: o 
[**tetraedro**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg6).

Passando para 4 triângulos em cada vértice, as personagens constroem outro Sólido Platónico: o 
[**octaedro**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg7)
. Por fim, ao escolher 5 triângulos em cada vértice, encontram o 
[**icosaedro**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg8).

Depois de constatarem que não é possível construir Sólidos Platónicos com mais de 5 triângulos em cada vértice, as personagens passam para os 
[**pentágonos regulares**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg9)
. De novo, ao juntar 3 polígonos em cada vértice, o Leo e a Mathina encontram um novo Sólido Platónico: o 
[**dodecaedro**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg10).

As personagens concluem então que não só é impossível construir Sólidos Platónicos com mais de 3 pentágonos em cada vértice, como também é impossível construir Sólidos Platónicos 
[**usando polígonos com mais de 5 lados**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg11)
. Isso significa que eles já descobriram todos os 
[**Sólidos Platónicos**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg12).

| Cubo | Tetraedro | Octaedro | Icosaedro | Dodecaedro |
| ------ | ------ | ------ | ------ | ------ |
|![Cubo](/stories/symm-4/img/_align-center_/cubo.png =138x150)|![Tetraedro](/stories/symm-4/img/_align-center_/tetra.png =126x150)|![Octaedro](/stories/symm-4/img/_align-center_/octa.png =162x150)|![Icosaedro](/stories/symm-4/img/_align-center_/icosa.png =155x150)|![Dodecaedro](/stories/symm-4/img/_align-center_/dodeca.png =146x150)|

### Sólidos Platónicos - definição

Uma **definição mais simples de Sólido Platónico** é dada pelo técnico: um Sólido Platónico é um poliedro convexo cujas faces são todas polígonos regulares iguais entre si e, em cada vértice, chega o mesmo número de faces.

Na verdade, é possível provar que um poliedro que satisfaz estas condições tem as seguintes propriedades:

`*` os ângulos diedrais são iguais;

`*` os ângulos sólidos em cada vértice são iguais.

**Nota 1**: Observe que, de acordo com esta nova definição, para verificar se um poliedro é Platónico, não é necessário comparar os seus ângulos diedrais ou os ângulos sólidos em cada vértice (na história, as personagens estudaram estes ângulos porque não tinham conhecimento do resultado anterior).

**Nota 2**: Se retirarmos a condição “em cada vértice chega o mesmo número de faces”, podemos obter Sólidos não Platónicos, como se mostra no 
[**Jogo 4**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg13).

## Poliedros Uniformes

O que é um poliedro uniforme? Ao analisar um poliedro uniforme, o cuboctaedro, a  Mathina supõe tratar-se de um poliedro cujas faces são todas polígonos regulares, mas nem todas com o mesmo número de lados, e para os quais 
[os ângulos sólidos em cada vértice são iguais]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg14).

| Cuboctaedro (poliedro uniforme) | Cuboctaedro rombitruncado (poliedro uniforme) |Poliedro de Miller (não é poliedro uniforme) | Rombicuboctaedro (poliedro uniforme) |
| ------ | ------ | ------ | ------ |
|![Cuboctaedro](/stories/symm-4/img/_align-center_/cubocta.png =137x150)|![4-6-8](/stories/symm-4/img/_align-center_/4-6-8.png =149x150)|![Poliedro de Miller](/stories/symm-4/img/_align-center_/Miller.png =151x150)|![3-4-4-4](/stories/symm-4/img/_align-center_/3-4-4-4.png =150x150)|

No entanto, seguindo a “definição da Mathina”, pode surgir um problema: se construirmos um molde em torno de um ângulo sólido do cuboctaedro rombitruncado, 
[esse molde não encaixa em todos os ângulos sólidos]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg15)
: neste caso,
[são necessários dois moldes]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg16)
.

Contudo, comparando os dois moldes, podemos observar que 
[eles são a imagem refletida um do outro]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg17)
.

Assim sendo, iremos considerar todos os vértices do poliedro como sendo do "mesmo tipo".

Com esta definição alargada, podemos agora afirmar que todos os vértices do cuboctaedro rombitruncado são do mesmo tipo: de facto, os dois moldes considerados - o original e o refletido - 
[encaixam-se perfeitamente em todos os vértices]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg18)
. E o mesmo acontece para todos os quatro poliedros acima apresentados. Portando, tendo em consideração a definição da Mathina, os quatro poliedros parecem uniformes. Porém, na história, o técnico afirma que um deles não é: 
[**o poliedro de Miller**]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg19)
.

Esta discrepância está relacionada com a definição de poliedro uniforme. Para o técnico, a condição "todos os vértices são do mesmo tipo" deve ser substituída por outra mais forte, que destaca o aspeto simétrico do poliedro: "para cada par de vértices, há pelo menos uma simetria do poliedro que leva um vértice no outro". Assim, um **poliedro uniforme** é um poliedro:

`*` cujas faces são todas polígonos regulares, mas nem todas com o mesmo número de lados;

`*` para cada par de vértices, há pelo menos uma simetria do poliedro que leva um vértice no outro.

Na história, uma simetria de um poliedro é definida como uma isometria (ou seja, uma função que preserva distâncias) que leva o poliedro em si mesmo. Para mais informações sobre o assunto, consulte: 1) 
[os exemplos fornecidos]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg20)
, e 2) o “O que é uma simetria?” Capítulo apresentado no texto sobre a história ["Carimbando frisos"](https://mathina-edu.netlify.app/pt/story/stamping-friezes)
.

Por que motivo o poliedro Miller não é uniforme? Se considerarmos os vértices *A* e *B*, qualquer isometria que leve *A* em *B* removerá o anel de quadrados do equador, 
[mudando assim o aspecto final do poliedro]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg21)
.

![Poliedro de Miller](/stories/symm-4/img/_align-center_/Miller-anel-quadrados-e-pontos.png =269x250)
[Manipule o poliedro aqui]($HUB_URL/apps/anims/poliedros.html?pre=pol_68)
.

No entanto, 
[se rodarmos a cúpula octogonal no topo do poliedro de Miller de 45º]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg22)
, obteremos um novo poliedro uniforme: rombicuboctaedro.

Ao longo da história, as personagens têm a oportunidade de conhecer **todos os poliedros uniformes**: 1) uma família infinita de prismas, 
[cujas bases são polígonos regulares e cujas faces laterais são quadrados]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg23)
; 2) uma família infinita de antiprismas, 
[cujas bases são polígonos regulares e cujas faces laterais são triângulos equiláteros]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg24)
; 3) outros 13 poliedros:

![Poliedros Uniformes](/stories/symm-4/img/_align-center_/uniformes.png =675x400)

No final, as personagens constroem um modelo para o carrossel dos 
[“poliedros platónicos e uniformes”]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg25)
. Tratam-se de poliedros extremamente simétricos: de facto, para cada poliedro, e para cada par de vértices, há pelo menos uma simetria do poliedro que leva um vértice no outro.

&nbsp;

# Notas didáticas

Recorrendo a contos e jogos, é nosso principal objetivo levar os jovens a descobrirem os Poliedros (e a sua simetria) de forma lúdica.

Partindo de experiências concretas realizadas pelas personagens, experiências essas amplamente ilustradas pelas animações e imagens fornecidas, apresentamos, de forma intuitiva, diversos conceitos matemáticos: poliedros convexos/não convexos, Sólidos Platónicos, Poliedros Uniformes, .... A compreensão de tais conceitos é aprofundada ao longo da história, tendo os jovens a oportunidade de consolidar os seus conhecimentos, de forma lúdica, através da leitura da história, da visualização de imagens/filmes atrativos e da resolução dos diversos desafios propostos nas apps disponíveis.

A história é “auto-contida” e não deve exigir consulta de materiais adicionais. Para tal, tivemos em consideração dois fatores: 1) não exigir quase qualquer conhecimento prévio sobre o assunto; 2) adequação dos conteúdos à faixa etária dos 15/19+ anos: com efeito, embora atualmente os “Sólidos Platónicos” não seja um assunto abordado no currículo português de Matemática, há alguns anos, fez parte do currículo do “Ensino Secundário” (15/17 anos).

Além do tópico matemático “Sólidos Platónicos”, há um que não está incluído nos currículos académicos: “Poliedros Uniformes”. Introduzimos este assunto com o objetivo de transmitir uma ideia geométrica mais ampla sobre poliedros e destacar algumas características ligadas à “simetria” comuns tanto aos Sólidos Platónicos como aos poliedros uniformes: 1) são formados por polígonos regulares, 2) para cada par de vértices, há pelo menos uma simetria do poliedro que leva um vértice no outro.

Outras experiências semelhantes às apresentadas na história podem ser desenvolvidas por educadores. De seguida, propomos algumas experiências:

`*` Sólidos Platónicos: 
  * a experiência "construir os cinco Sólidos Platónicos" pode ser desenvolvida fisicamente com os alunos, utilizando cartolina ou outros materiais disponíveis;
  * a construção de diferentes planificações para o cubo ou para outros Sólidos Platónicos também pode ser explorada com os alunos, por exemplo, usando cartolina;
  * verificar se os Sólidos Platónicos têm "ângulos diedrais iguais", bem como "ângulos sólidos iguais em cada vértice" é algo que pode ser simulado com os alunos, usando modelos físicos dos Sólidos Platónicos e moldes construídos, por exemplo, em plasticina.


`*` Poliedros uniformes:
  * verificar se, num poliedro uniforme, todos os vértices são “do mesmo tipo” é algo que também pode ser simulado com os alunos, recorrendo a modelos físicos dos poliedros e dos moldes.

&nbsp;

# Sobre as apps

Há 5 apps que acompanham a história: 3 destinam-se a encontrar certos tipos de poliedros (Convexos, Uniformes e Sólidos não Platónicos cujas faces são polígonos regulares e iguais entre si) e as 2 restantes a planificações de poliedros.

Todas as apps foram programadas em JavaScript e devem funcionar tanto em PCs como em tablets / smartphones.

De seguida, apresentamos uma pequena descrição sobre cada app. São também fornecidos endereços para as apps e para filmes explicativos sobre elas (no canal Mathina no YouTube).

&nbsp;

## [Jogo 1 - Separando poliedros convexos]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg26)

É exibido um conjunto de 8 poliedros. O utilizador é convidado a escolher os 4 poliedros convexos. Depois de escolher os poliedros corretos e clicar 
![Confirmar](/stories/symm-4/img/confirm.png =40x40)
, o programa mostra um novo conjunto de 8 poliedros. São apresentados 3 conjuntos de poliedros. O jogo fica resolvido se forem selecionados todos os "bons" poliedros (i.e. convexos).

@[youtube](GDYOL7SnfY0?_align-center_&hl=pt&cc_lang_pref=pt&cc=1)
[Guião](/stories/symm-4/transcripts/Script4-pt.pdf)

&nbsp;

## [Jogo 2 - Escolhendo as planificações do cubo]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg27)

É exibido um conjunto de 6 propostas para planificações do cubo. O utilizador é convidado a escolher as 3 “certas”. Depois de escolher as planificações corretas e clicar 
![Confirmar](/stories/symm-4/img/confirm.png =40x40)
, o programa mostra um novo conjunto de 6 propostas. São apresentados 3 conjuntos de propostas de planificações. O jogo fica resolvido se forem selecionadas todas as "boas" planificações.

@[youtube](NspkoF8gH3k?_align-center_&hl=pt&cc_lang_pref=pt&cc=1)
[Guião](/stories/symm-4/transcripts/Script4-pt.pdf)

&nbsp;

## [Jogo 3 - Escolhendo as planificações do octaedro]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg28)

Esta app é semelhante à do **Jogo 2**, mas agora o poliedro em análise é o octaedro.

&nbsp;

## [Jogo 4 - Escolhendo poliedros não-platónicos cujas faces são todas polígonos regulares e iguais]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg13)

Esta app é muito semelhante à do **Jogo 1**. Contudo, em vez de escolher poliedros convexos, o utilizador deverá selecionar Sólidos não Platónicos cujas faces são todas polígonos regulares e iguais entre si.

&nbsp;

## [Jogo 5 - Separando poliedros uniformes]($HUB_URL/pt/story/the-polyhedron-carousel/?actionLink=tg29)

Esta app é muito semelhante à do **Jogo 1**, mas, em vez de escolher poliedros convexos, o utilizador deverá selecionar poliedros uniformes.