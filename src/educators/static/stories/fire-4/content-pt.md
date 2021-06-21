Os misteriosos insetos de fogo
==============================

# Conceitos matemáticos
Esta história tem uma introdução às curvas definidas por funções implícitas. Viu-se em histórias anteriores (A Corrida da Fénix) a descrição explícita de uma curva, em que para cada valor de `@x@` se obtém um valor `@y@` através de uma função, `@y=f(x)@`, e representa-se todos os pontos `@((x,y) = (x,f(x))@`.

Numa descrição implícita, pelo contrário, tem-se uma função de duas variáveis `@F(x,y)@` que para dois valores dados `@x@` e `@y@`, tem como resultado um número. E representa-se a curva como sendo formada por todos os pontos `@(x,y)@` que satisfazem a condição `@F(x,y)=0@`.

Com a descrição explícita que usamos nas histórias anteriores, tinha-se um método construtivo para obter todos os pontos da curva: bastava dar valores a `@x@` e obtinha-se pontos da curva. Por outro lado, com a descrição implícita, tem-se apenas um método de teste para decidir se um ponto está, ou não, na curva. Isto faz com que o método implícito seja mais apropriado para descrever relações do que para descrever métodos de construção.

Considere-se, por exemplo, a circunferência de raio `@r=2@` e centrado na origem `@(0,0)@`. Uma descrição geométrica afirma que uma circunferência é o conjunto de todos os pontos à distância `@2@` do centro.

![Ponto (x,y) numa circunferência de raio r](stories/fire-4/img/_align-center_circtrig.png =300x300)

Usando o teorema de Pitágoras, isto corresponde a que as coordenadas desses pontos seguem a equação

```AsciiMath
 x^2+y^2=r^2=4
 ```

Ou como uma função implícita simples,
```AsciiMath
F(x,y)=x^2+y^2-4=0.
```
Se se quiser converter esta expressão numa explícita, pode-se isolar `@y@` como expressão de `@x@`, como
```AsciiMath
y=pm sqrt {4-x^2}.
```
Note-se que não se consegue escrever `@y@` como uma simples função de `@x@`, pois há duas funções dependendo do sinal aplicado à raiz quadrada. A simetria da circunferência é de certa forma quebrada pelo facto de se privilegiar `@x@` como variável dada, a função não admite valores de `@x@` fora do intervalo `@[-2,2]@`.
Há uma terceira forma de descrever a curva de um modo construtivo: em vez de escrever `@y@` como uma expressão de `@x@`, pode-se escrever ambas as variáveis `@x@` e `@y@` como funções de uma variável independente, que pode ser vista como medindo o tempo ou como um parâmetro. No caso da circunferência, a escolha mais apropriada é tomar como parâmetro o ângulo entre o raio o eixo dos xx. Assim, usando funções trignométricas, pode-se descrever a circunferência na forma paramétrica como
```AsciiMath
x= cos(theta)

y= sin(theta)
```

Para cada valor de `@theta@`, obtém-se um ponto `@(x,y)@` no plano.

Retas e circunferências são exemplos simples a tratar com funções implícitas. Além disso, alguns truques e técnicas podem ser usadas para gerar mais formas:

* Deformação: Dada a curva definida por `@F(x,y)=0@`, pode-se obter uma pequena deformação mudando a equação para `@F(x,y)=a@`, o que é o mesmo que `@F(x,y)-a=0@`, se o valor de `@a@` for pequeno (próximo de zero). Como a função `@F@` é contínua, os pontos em `@F(x,y)=a@` serão próximos dos pontos em que `@F(x,y)=0@`. Portanto obtém-se uma deformação da curva.

Dadas duas curvas definidas por `@F(x,y)=0@` e `@G(x,y)=0@`, pode-se obter a curva que contém todos os pontos de ambas (união), ou o conjunto de pontos que pertencem em simultâneo a ambas as curvas (interseção).

** União: pode-se obter essa curva multiplicando `@F(x,y)*G(x,y)=0@`. De facto, se `@F*G=0@`, então `@F=0@` e/ou `@G=0@`, e portanto todos os pontos que tornam `@F=0@` fazem parte da nova curva, o mesmo acontecendo para todos os pontos que tornam `@G=0@`.

** Interseção: pode-se obter estes pontos usando a expressão `@F(x,y)^2 + G(x,y)^2=0@`. Isto porque se a soma de duas quantidades positivas é zero, então ambas têm de ser nulas, e portanto só os pontos que tornam simultaneamente `@F=0@` e `@G=0@`, estarão na nova curva. Em geral, esta construção gerará pontos isolados (ao intersetar duas curvas), mas pode-se recuperar uma curva aplicando a técnica de deformação descrita atrás, ou seja, `@F(x,y)^2 + G(x,y)^2 -a =0@` para algum valor de `@a@` próximo de zero
.
Na última atividade, explora-se as superfícies implícitas no espaço a três dimensões. Estas são obtidas para o conjunto de zeros da função de três variáveis `@F(x,y,z)=0@`.


# Notas didáticas
As apps propostas aqui são primordialmente um exercício de exploração. Um numeroso conjunto de exemplos é disponibilizado, não só mostrando a complexidade a que se pode chegar, mas também incluindo exemplos simples que serão familiares (como retas, circunferências, elipses, hipérboles, etc).

Alguns exemplos podem ser analisados para se compreender a forma geométrica a partir da expressão algébrica, como se fez acima em relação à circunferência, usando o teorema de Pitágoras. Adivinhando e tentando desenvolver uma intuição das fórmulas é o principal desafio desta história. É proposto também um exercício de emparelhar equações com curvas.

As ferramentas disponibilizadas pela app, em conjunto com as técnicas descritas acima, são suficientemente poderosas e permitem uma grande criatividade que será de explorar: será de desafiar o aluno a fazer uma forma parecida com uma estrela, um hexágono, um animal marinho, uma planta, etc.

As apps têm uma longa lista de exemplos de curvas, cada uma mostrando a sua fórmula e o desenho. Os primeiros exemplos podem ser facilmente compreendidos e deduzidos depois de alguma reflexão. Uma caixa de texto permite que seja dada e modificada qualquer equação (polinomial) em duas (ou três) variáveis.

# Sobre as apps

## App 1 (Exploração)
A app desenha o conjunto de pontos `@(x,y)@` do plano que satisfaz `@F(x,y)=0@` (o conjunto de zeros), para qualquer função polinomial `@F(x,y)@` que o utilizador defina ou selecione na lista de exemplos.

Uma pequena animação é apresentada enquanto a curva é desenhada, e começa quando o utilizador toca no écran. Insetos de fogo são pontos de luz. No início da animação, estes pontos estão colocados aleatoriamente perto dos pontos escolhidos pelo utilizador. À medida que a animação progride, os pontos movem-se na direção em que o valor da função é próximo de zero. Ao fim de alguns segundos, todos os insetos de fogo estarão sobre os zeros da função.

Uma lista de exemplos está disponível ao lado, e o utilizador pode dar uma equação polinomial na caixa de texto.

![Some alt text](stories/fire-4/img/_align-center_/screenshot-app-fire-4-1.png =800x450)

## App 2 (Descobre a equação)
Esta app usa o mesmo programa da app anterior para desenhar gráficos de funções. Neste caso, o desafio é descobrir qual das equações que são apresentadas corresponde ao gráfico no écran. Cada tentativa errada retira uma "vida" representada por um inseto de fogo. Depois de três tentativas erradas a app mostra a solução. O jogo continua com uma nova curva.

![Some alt text](stories/fire-4/img/_align-center_/screenshot-app-fire-4-2.png =800x450)

## App 3 (Descobre a equação)
Esta app é outra vez para exploração livre, neste caso para superfícies 3D dadas pelo conjunto de zeros de uma função `@F(x,y,z)=0@`.

Uma lista de exemplos de equações está disponível à direita, tal como uma caixa de texto onde se pode dar uma equação.

Três controlos deslizantes estão disponíveis junto da superfície. Primeiro, para ajustar um parâmetro `@a@`, que pode ser usada nas fórmulas, com valores entre `@0@` e `@1@`. Segundo, para controlar a transparência da superfície podendo-a tornar translúcida. Terceiro, um nível de "zoom", que fixa a quantidade da superfície (em geral, infinita) que fica visível na esfera que delimita o gráfico.

![Some alt text](stories/fire-4/img/_align-center_/screenshot-app-fire-4-3.png =800x450)

Uma atividade complementar para explorar mais superfícies pode ser organizada usando 
[SURFER](https://imaginary.org/program/surfer)
, um programa mais completo que faz também gráficos de funções implícitas. As técnicas de construção descritas acima (deformação, união e interseção) são particularmente úteis para se obter superfícies criativas.

### Referências
*  O programa 
[SURFER](https://imaginary.org/program/surfer) 
 tem mais opções e informação sobre superfícies algébricas implícitas e singularidades.
* O texto 
 [World record surfaces](https://imaginary.org/background-material/world-record-surfaces)
  (disponível em inglês e alemão no IMAGINARY) tem uma introdução geral pública a essas superfícies singulares.

