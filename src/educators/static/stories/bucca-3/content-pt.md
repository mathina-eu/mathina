# Conceitos Matemáticos
Do ponto de vista de conteúdo matemático, o objetivo desta história é dar a conhecer ao leitor a aritmética modular, analisar a segurança da cifra de César e propor um método semelhante à cifra de César mas muito mais seguro: a cifra de Vigenère.

Na história, Mathina já está familiarizada com a cifra de César pelo que é aconselhável que primeiro tenha sido lido a história 
["O Papagaio Que Fala"]($HUB_URL/pt/story/the-talking-parrot/)
, a qual a descreve. Nesta história, Ângela conduz Mathina à descoberta de uma forma particular de calcular somas de números: aritmética modular.

Por exemplo, com módulo 12, 10 + 5 é igual a 3, porque 10 + 5 = 15 (o resultado da soma habitual) e o resto ao dividir 15 por 12 é 3. Trabalhar com aritmética modular [módulo n] é semelhante a usar um relógio com n horas (esta analogia é também usada numa das aplicações desta história). A soma neste último exemplo feita num relógio não surpreende ninguém: se começarmos às 10 e somarmos 5 horas, o ponteiro irá parar nas 3!

A ligação com a cifra de César é a seguinte: se associarmos os números 0 a 25 às letras "A", "B", ..., "Z", aplicar a cifra de César com k saltos é equivalente a adicionar k módulo 25 aos números que correspondem às várias letras. Além disso, com esta interpretação, a operação de descodificação é simplesmente uma subtração módulo 25.

Esta perspetiva também é usada para a Ângela fazer a Mathina compreender que aplicar duas vezes a cifra de César não torna a mensagem mais segura: é um duplo esforço do qual não se obtém nada de novo. De facto, usar a cifra duas vezes seguidas com chaves k e h, é o mesmo que usá-la uma só vez com a chave k+h.

Uma variante da cifra de César, a cifra de Vigenère, é também apresentada na história. Continua a ser uma cifra de substituição, como a de César, mas consiste em fazer uma partição do conjunto de letras em vários (s) subconjuntos, cada um dos quais é cifrado com a cifra de César com uma chave diferente.  A chave passa assim a ser uma lista de s números, o primeiro dos quais é usado para cifrar a primeira letra e as letras nas posições s + 1, 2s + 1, ... o segundo, a segunda letras e as letras nas posições s + 2, 2s + 2, ... e assim sucessivamente. Na história, a chave tem dois números: na prática, a mensagem cifrada é obtida usando a cifra de César nas letras de ordem ímpar com o primeiro número na chave, e nas letras de ordem par, com o segundo número.  Por exemplo, se o par de números fosse (1,3), a palavra "MATHINA" é cifrada "somando" 1 às letras de ordem ímpar, e "somando 3" às de ordem par. Com o que se obtém "NDUKJOB".


![Cifra de Vigenère](/stories/bucca-3/img/_align-center_/ndukjob.png)



# Notas didáticas

Alguns conceitos usados nesta história são apresentados com maior generalidade na história 
["O Papagaio Que Fala"]($HUB_URL/pt/story/the-talking-parrot/)
, dirigida a leitores de idades dos 7 aos 11 anos. Quer "O Papagaio Que Fala", quer "O Tesouro Perdido" são acessíveis a leitores de idades entre 7 e 14.
Recomenda-se a leitura de "O Papagaio Que Fala" antes da de "O Tesouro Perdido".

A aritmética modular fornece muitas ideias didáticas interessantes. Variando n pode-se obter diferentes estruturas algébricas e é interessante estudar alguns aspetos relacionados com álgebra avançada. Eis algumas ideias que podem ser tratadas com base apenas nos conceitos de quociente e resto da divisão por um inteiro.

`*` *Procurar elementos inversos com respeito ao produto..*
O número 1 é um elemento neutro para o produto: cada elemento não nulo multiplicado por 1 dá como resultado o próprio número. O inverso de um número a, se existir, é o número b tal que a vezes b (módulo n) é igual a 1. Por exemplo, se n = 7, o número 3 multiplicado por 5 é 15, o qual, módulo 7, ou seja num relógio com 7 horas, é igual a 1. O que significa que 5 é o inverso de 3 módulo 7!

`*` *Caraterização de elementos inversos com respeito ao produto.*
Uma análise mais detalhada mostra que só números que sejam primos com n têm inverso e portanto se n é primo todos os números, excepto 0, têm inverso módulo n.

`*` *O logaritmo discreto módulo n*.
Este conceito, definido da forma habitual como sendo o inverso da operação de exponenciação (módulo n), é um exemplo típico de uma "função de sentido único" em que se baseiam métodos criptográficos modernos. Para mais informação ver 
[aqui]($HUB_URL/pt/story/the-man-in-the-middle/)
.

A cifra de Vigenère parece ser uma simples variante da cifra de César, mas não é: o facto de normalmente não se saber qual o comprimento da chave constitui um obstáculo de vulto a ataques, de tal forma que esta cifra era considerada como inatacável até ao século passado. Na realidade, com o aparecimento de técnicas estatísticas que analisam a frequência das letras num texto, o que pode ser feito eficientemente num computador, a cifra de Vigenère não é hoje em dia considerada como muito segura.

Independentemente deste facto, uma variante da cifra de Vigenère, chamada cifra de Vernam, em que a chave é tão longa como o próprio texto e escolhida aleatoriamente, é, do ponto de vista matemático, a cifra mais segura: para uma pessoa que queira descodificar a mensagem sem saber a chave, o único meio possível é tentar todas as chaves! Na prática esta cifra nunca é usada por obrigar a uma troca de muita informação entre as partes.


&nbsp;

# Sobre as apps

As experiências interativas contidas na história são todas variantes da cifra de César apresentada na história "O Papagaio Que Fala". Têm como objetivo principal aprofundar a matemática em que se baseia esta cifra, observando por exemplo que as operações de codificação e descodificação são muito reminiscentes da adição e da subtração.  A cifra é depois modificada e tornada mais complicada ao passar-se da cifra de César original para uma muita mais segura, a cifra de Vigenère.

Todas as apps foram programadas em JavaScript e devem poder ser usadas quer em PCs, quer em tablets e smartphones. Seguem-se descrições curtas de cada app, incluindo ligações para as apps e filmes que explicam como as usar (no canal Mathina do YouTube).

&nbsp;

## [Jogo 1 - A jóia I]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app1)

Nesta app o utilizador tem de tentar codificar corretamente algumas palavras usando a cifra de César com uma chave escolhida pelo computador.  Esta experiência é usada para familiarizar o utilizador com a cifra de César e, se o utilizador tiver lido a história "O Papagaio Que Fala", para dar uma referência aos conceitos anteriormente vistos.

@[youtube](RPVvWsMXSiA?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 2 - A jóia II]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app2)

O utilizador tem de decifrar a mensagem com a cifra de César mas com uma dificuldade adicional: o texto "Encontremo-nos amanhã de manhã no bar perto do cais na ilha" está escrito do fim para o princípio. Isto é um truque técnico para tornar a cifra de César mais complicada, aqui aplicado por razões do guião da história.

@[youtube](Kfp6PgOK8K8?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 3 - Soma no relógio]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app3)

Nesta experiência a cifra de César apresentada antes é analisada do ponto de vista matemático. Desta vez a interface tem um relógio com único ponteiro com o objetivo de apresentar a adição em aritmética modular. A questão inicial é do tipo: "Vamos tentar calcular 12 + 5 num relógio com 14 horas".  O utilizador pode mover o ponteiro nesse relógio para as 14 horas e tentar perceber qual é o resultado final (neste caso específico, a resposta correta é 3).

@[youtube](XsRGpkmIh0k?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)

&nbsp;
## [Jogo 4 - Cifra de César repetida I]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app4)

Nesta experiência, as mensagens são codificadas e descodificadas usando duas vezes seguidas a cifra de César. O método de codificação é exatamente o mesmo das experiências da história "O Papagaio Que Fala". A única diferença é que desta vez a operação é feita duas vezes.

@[youtube](LTgWwiIRrm8?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)
&nbsp;

## [Jogo 5 - Cifra de César repetida II]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app5)

Esta experiência termina a análise da história que tem por objetivo verificar que aplicar duas vezes em sequência a cifra de César não tem nada de diferente da versão habitual dessa cifra. Basta mudar a chave. Para isso, são apresentados dois discos de César ao utilizador, combinados como na experiência anterior, e é-lhe pedido que coloque um terceiro disco de César de tal forma que o resultado da operação de codificação seja o mesmo.

@[youtube](agTiwTMl-do?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 6 - A jóia III]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app6)

Esta experiência é idêntica à primeira, a única diferença sendo que desta vez a mensagem não pode ser descodificada porque não foi codificada com a cifra de César. Sublinhemos que na história este facto é dado a conhecer ao utilizador no início, de modo a não ficar frustrado ao usar esta app. A ideia é apenas verificar que realmente o disco de César não serve para descodificar a mensagem apresentada neste caso.

@[youtube](yIqXC-y47GQ?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)
&nbsp;

## [Jogo 7 - A jóia IV]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app7)

Esta experiência é idêntica à anterior, e é apresentada ao utilizador para que este se concentre numa letra particular do texto de forma a assegurar-se que a traduz como um "E", portanto experimentando exatamente o que Mathina e Ângela fazem na história.

@[youtube](6NQM9xFIvlg?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)
&nbsp;

## [Jogo 8 - Palavra por palavra]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app8)

Esta experiência é um primeiro passo na direção da cifra de Vigenère. O texto é codificado usando dois discos de César, um para as palavras de ordem par e o outro para as de ordem ímpar. Como se descobre na história, esta não é ainda a abordagem correta para se poder descodificar a mensagem, e o objetivo desta experiência é verificar por si próprio que este método não é o correto.

@[youtube](j3cMyFg5Lfc?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)
&nbsp;

## [Jogo 9 - Uma nova cifra]($HUB_URL/pt/story/mathina-and-the-lost-treasure/?actionLink=app9)

A experiência final da história aborda a cifra de Vigenère em duas letras. Usando dois discos de César, um aplicado às letras de ordem par e o outro às de ordem ímpar, estas são mudadas. Deste modo, seguindo as sugestões na história, o utilizador pode facilmente descodificar a mensagem. Há depois a possibilidade de repetir esta experiência com mensagens e chaves diferentes.

@[youtube](ZS5DU2PFlR8?_align-center_)
[Guião](/stories/bucca-3/transcripts/Script3-pt.pdf)
&nbsp;
