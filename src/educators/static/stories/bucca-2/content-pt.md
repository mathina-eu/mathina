# Conceitos Matemáticos
Do ponto de vista de conteúdo matemático, o objetivo desta história é introduzir, de um modo divertido e informal, uma variante de um dos mais famosos métodos criptográficos da Antiguidade: a cifra de César.

É uma cifra simples de substituição mono-alfabética. Isto significa que cada letra do alfabeto é associada de forma unívoca com uma letra do mesmo alfabeto, e portanto esta correspondência associa letras diferentes a letras diferentes.

![A jóia de César usada na história](/stories/bucca-2/img/_align-center_/sostituzione.png =900x160)

O modo pelo qual as letras se associam uma a uma numa cifra de substituição é a chave da cifra, pelo que para codificar a mensagem basta simplesmente substituir cada letra pela correspondente de acordo com a chave. O método de descodificação é o mesmo, mas a correspondência é usada em sentido inverso. Por exemplo, com a chave da imagem anterior a palavra "MESSAGE" é codificada pela palavra "MBUUCDB".

| M | E | S | S | A | G | E |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| M | B | U | U | C | D | B |

Na sua forma original, a cifra de César é, de entre as cifras substituição, muito simples: de facto, a chave consiste em associar a cada letra a terceira letra a contar dela no alfabeto: a letra "A" é associada à letra "D", "B" a "E" e assim sucessivamente... Isto pode ser generalizado usando, em vez de 3 como na original, um número diferente. Para se saber a cifra só se precisa de saber o número de "saltos" a dar. Se estivermos à procura da letra a associar à letra "Z", teremos de recomeçar do princípio do alfabeto. Por exemplo, a letra "Z", na cifra original de César, está associada à letra "C".


![O círculo original de César](/stories/bucca-2/img/_align-center_/caesarkey.png =620x295)


Por esta razão, para usar a cifra de César rapidamente, é muitas vezes conveniente representar as letras do alfabeto não numa linha, mas num círculo de modo que ao passar de uma letra para outra nunca seja preciso recomeçar do princípio: as letras seguem-se umas às outras sem interruções.

![O alfabeto disposto num círculo para uso com a cifra de César](/stories/bucca-2/img/_align-center_/caesarcircle.png =300x300)

É frequente, na literatura, falar-se em cifra de César mesmo quando o número de saltos não é 3, mas um número escolhido arbitrariamente (a chave da cifra).  Na história "O Papagaio Que Fala", por exemplo, a Mathina encontra um papagaio que se expressa numa linguagem particular: o papagaio responde de forma codificada usando a cifra de César com um só salto. Quando se lhe pergunta "Gostas de biscoitos?", o animal responde "T-J-N!". A letra a seguir a "S" é "T", enquanto que as que se seguem a "I" e "M" são "J" e "N", respetivamente: o guloso
do bicho rapidamente responde "SIM!" à pergunta de Mathina.
 
Na história, Mathina recebe como presente uma jóia com dois círculos concêntricos, com as letras do alfabeto gravadas em cada círculo.
Isto permite-lhe cifrar e decifrar mensagens facilmente com a cifra de César. Para cifrar basta procurar a letra no círculo interior e escolher a letra na mesma posição no círculo exterior. Para decifrar é uma coisa semelhante, mas lendo as letras do exterior para o interior.

![A jóia de César usada na história](/stories/bucca-2/img/_align-center_/caesarjewel.png =300x300)


Nas experiências interativas da história, os leitores dedicam-se, respetivamente, ao processo de codificação 
[]($HUB_URL/pt/story/the-talking-parrot/?actionLink=app1)
 e ao processo de descodificação 
[sem saberem a chave]($HUB_URL/pt/story/the-talking-parrot/?actionLink=app2).


# Notas Didáticas

A cifra de César é um dos mais famosos métodos criptográficos da Antiguidade.  O seu nome deriva do nome do general romano Júlio César, que, de acordo com os escritos de Suetonius, a usava para cifrar comunicações militares.

Na história de Mathina, a cifra de César é apenas apresentada a um nível geral, mas é possível fazer uma análise mais aprofundada dela e de algumas das suas caraterísticas com crianças de 7 a 10 anos sem recorrer a outros conhecimentos prévios. Seguem-se algumas ideias para atividades que podem ser propostas depois da leitura da história.

`*` Quão segura é a cifra de César? Não muito, porque depois de um máximo de 25 tentativas de descodificação (isto é, o número de letras do alfabeto menos um) é possível descobrir a chave e a mensagem original.

`*` Será que cifrando um texto duas vezes, uma de cada vez, mesmo com chaves diferentes, a mensagem escondida fica mais segura? Não, pelo contrário, isto é equivalente a aplicar a cifra de César usando a soma das duas chaves (saltos) como chave.

`*` O educador poderá tomar como base a história de Mathina para uma primeira introdução à aritmética modular.

Estes pontos são retomados na história 
["O Tesouro Perdido"]($HUB_URL/pt/story/the-lost-treasure/)
, pensada para leitores no grupo etário dos 11 aos 14. Quer "O Papagaio Que Fala", quer "O Tesouro Perdido" são acessíveis a leitores de idades entre 7 e 14 e podem ser lidas uma após a outra. Com recurso a contos e jogos, o nosso objetivo principal é levar as crianças a descobrirem a Criptografia de forma lúdica.

&nbsp;

# Sobre as apps

Há duas experiências interativas no decurso da história, relacionadas com dois momentos fundamentais no processo de codificar e descodificar a mensagem.

Todas as apps foram programadas em JavaScript e devem poder ser usadas quer em PCs, quer em tablets/smartphones. Seguem-se descrições curtas de cada app, incluindo ligações para as apps e filmes que explicam como as usar (no canal Mathina do YouTube).

&nbsp;

## [Jogo 1 - A jóia I]($HUB_URL/pt/story/mathina-and-the-talking-parrot/?actionLink=app1)

Na primeira experiência, a chave para o método é a usada pelo papagaio João, ou seja, um salto de uma letra. Nesta app, o utilizador tem de tentar codificar corretamente algumas palavras com a cifra de César com um salto.

@[youtube](rL_8zo54uOY?_align-center_&hl=pt&cc_lang_pref=pt&cc=1)
[Guião](/stories/bucca-2/transcripts/Script2-pt.pdf)

&nbsp;

## [Jogo 2 - A jóia II]($HUB_URL/pt/story/mathina-and-the-talking-parrot/?actionLink=app2)

Na segunda app, o utilizador tem de, pelo contrário, tentar decifrar a mensagem. Só sabe que a mensagem cifrada foi obtida com uma cifra de César.
Na app há uma versão da jóia da história na qual é possível rodar os discos com o alfabeto, e esse movimento tem como efeito uma mudança da chave.

@[youtube](djsCaPaiRlc?_align-center_&hl=pt&cc_lang_pref=pt&cc=1)
[Guião](/stories/bucca-2/transcripts/Script2-pt.pdf)

&nbsp;


