# Conceitos matemáticos
Funções são transformações que partem de um número dado `@x@` e produzem um valor `@y=f(x)@`. Pode-se fazer um gráfico da função marcando os pontos `@(x, f(x))@` em coordenadas cartesianas, resultando uma curva no plano. Alguns exemplos importantes de tais curvas são as linhas retas (primeiro grau), e as parábolas (segundo grau).

Estas curvas polinomiais podem ser definidas pelos seus coeficientes. Um problema interessante é encontrar o (único) polinómio de grau `@n@` que passa por `@n+1@` pontos escolhidos. É o que se chama a interpolação polinomial de Lagrange e trata-se de um exercício de manipulação algébrica.

As curvas polinomiais podem ser desenhadas conjuntamente com os vetores velocidade associados aos seus pontos. Esse vetor num ponto é calculado a partir da derivada da função que define a curva. A derivada de uma função descreve o grau de mudança dos valores da função e permite assim em particular saber em que pontos a função é crescente ou decrescente.

Se nós conhecermos o valor da derivada (indicando os momentos em que a função cresce ou diminui e quanto)  e se conhecemos o valor que a função toma num certo momento (por exemplo a origem), recuperamos completamente a função.

# Notas didáticas
Crianças desta idade são capazes de usar expressões simbólicas (funções e equações). Isso é explorado nesta história para descrever curvas e para apresentar as noções de taxa de variação e de derivada. A app 3 é especialmente recomendada como primeira introdução à derivada, promovendo uma compreensão intuitiva desse assunto. Mas também recomendamos a história e as suas apps para alunos mais velhos já familiarizados com derivadas para consolidarem o conhecimento que adquiriram (em particular a app 4). Histórias e apps têm finais mais difusos, dando mais opções para explorar.

# Sobre as apps

## [App 1 - Ajusta os parâmetros e faz a fénix voar]($HUB_URL/pt/apps/?appNumber=0&story=fire-3)

Ao abrir a app, verá um sistema de coordenadas, um gráfico amarelo e um outro púrpura. O amarelo é o caminho de voo que a fénix deve seguir, ou seja o objetivo a atingir. A curva púrpura é o gráfico da função polinomial da variável `@x@`. Pode ser ajustada no painel de controlo. Para cada potência de `@x@`, pode alterar o coeficiente correspondente no polinómio.

![App1](stories/fire-3/img/_align-center_/app1-pt.png)

O grau do polinómio - o valor máximo dos expoentes de `@x@` - aumenta à medida que progride (o máximo é 3). Cada coeficiente pode ser mudado usando os botões `@+@` e `@-@`, de cada vez variando de +/- 0.1. Premindo continuamente dá-se uma variação contínua do valor. Quando o caminho correto é dado, a fénix automaticamente segue-o, voando. Depois um novo desafio de caminho de voo é apresentado ao utilizador. Pode usar a última função, que está ainda a ser apresentada, ou pode usar o botão "Apagar" para colocar todos os coeficientes em zero e recomeçar do princípio.

@[youtube](Vgkz6XrMVIM?_align-center_)

## [App 2 - Ajusta os pontos e faz voar a fénix]($HUB_URL/pt/apps/?appNumber=1&story=fire-3)

O objetivo desta app é também criar um caminho de voo para a fénix, o qual é ainda descrito por um polinómio. Precisa de encontrar um caminho para a fénix chegar ao lado direito sem tocar nos obstáculos (montanhas e nuvens). No entanto desta vez não pode ajustar diretamente os coeficientes, mas pode mover seis pontos (amarelos) no plano coordenado. Juntamente com a origem, que é o ponto de partida da fénix, estes sete pontos descrevem um polinómio único de grau 6 (potência máxima de `@x@`). Este polinómio - o caminho de voo criado - passará por todos esses pontos. A curva só ficará visível quando disser à fénix para voar.

![App2_1](stories/fire-3/img/2_1.png)
![App2_2](stories/fire-3/img/2_2.png)

Se a fénix falhar, voltará para a origem, deixando visível o caminho de voo da última tentativa. Poderá então alterar a curva mudando outra vez os pontos. Em alguns desafios poderá precisar de várias tentativas, fazendo pequenos ajustes no caminho de voo em cada uma. Se o objetivo for atingido, um novo desafio é apresentado, com mais obstáculos.

![App2_3](stories/fire-3/img/_align-center_/2_3.png)

@[youtube](4tz4YHZZWYY?_align-center_)

## [App 3 - Guia a fénix usando a derivada]($HUB_URL/pt/apps/?appNumber=2&story=fire-3)

Para esta fénix voar, tem de lhe dizer quanto é que deve subir ou descer movendo para cima e para baixo a mão que está à esquerda. O objetivo é chegar ao lado direito evitando os obstáculos (montanhas e nuvens). O caminho de voo é horizontal se a mão estiver no zero, e a fénix sobe/desce se a mão estiver acima/abaixo de zero. A fénix só se move enquanto a mão estiver a ser arrastada, caso contrário pára no meio do ar (como acontece nas apps da história "O Treinador do Pássaro de Fogo").

![App3](stories/fire-3/img/_align-center_/3.png)

Quando a fénix chega ao lado direito, regressa à tua mão, aparecendo novos obstáculos (até o máximo de 3 montanhas e 3 grupos de nuvens).

@[youtube](xu9rp0zH3vQ?_align-center_)

## [App 4 - Ajusta os pontos da derivada e faz voar a fénix]($HUB_URL/pt/apps/?appNumber=3&story=fire-3)

Esta app combina os métodos usados nas duas apps anteriores. Como na app 2, manipula os pontos para ajustar uma curva que passa por eles. Só que neste caso essa curva dá os valores de subida ou descida da fénix a cada momento - é a derivada do caminho de voo (usada na app 3). Tente apanhar todas as bolas de fogo durante o voo.

![App4](stories/fire-3/img/_align-center_/4_1.png)

Quando tiver ajustado os pontos brancos, pode carregar no botão "Vai" para que a fénix voe. Durante o voo, uma seta amarela indica a direção e a velocidade da fénix na posição em que está (como a varinha mágica que controla o uni-dragão nas apps da história do "Treinador do Pássaro de Fogo"). As setas púrpura indicam o valor da derivada na posição corrente. Há uma seta púrpura que aparece junto da fénix, e outra (idêntica) junto da curva.

![App4](stories/fire-3/img/_align-center_/4_2-pt.png)

A fénix pode voar para fora do écran, mas acabará eventualmente por chegar ao lado direito. Se demorar muito, pode carregar no botão "Voltar" (o que corresponde a desistir do voo). Depois de um voo em que a fénix não apanhou todas as bolas de fogo, o caminho de voo mantém-se visível para o ajudar a fazer correções. Verifique a correspondência entre as curvas amarela (caminho de voo) e púrpura (derivada do caminho de voo).

![App4](stories/fire-3/img/_align-center_/4_3.png)

Sugestões:
* Pode também mover o primeiro ponto branco, inicialmente na origem.
* Se quiser que o caminho de voo tenha um máximo ou um mínimo onde está uma bola de fogo, coloque um ponto branco no eixo dos xx.
* Se um bola de fogo está  no eixo dos xx, as áreas entre a curva púrpura e o eixo dos `@xx@` acima e abaixo do eixo têm de ser iguais (a partir da origem até à bola de fogo).
* Se essas áreas acima e abaixo do eixo dos xx forem muito diferentes, a fénix acabará por ficar muito longe desse eixo.

@[youtube](-z5_LG3fgTY?_align-center_)


