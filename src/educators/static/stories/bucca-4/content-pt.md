# Conceitos Matemáticos
O objetivo desta história é destacar, através do ataque conhecido por "Homem no meio", a importância da assinatura digital na comunicação cifrada.
No primeiro capítulo da história, Ângela explica a Mathina e Leo o sistema de troca de chaves de Diffie-Hellman, um sistema criptográfico que permite a partilha de informação secreta através de trocas de informação não cifrada e até publicamente disponível.
O método é baseado no que se chamam "funções de sentido único", isto é, funções invertíveis que são facilmente calculadas numa direção, mas são extremamente difíceis de calcular na outra.
Na história faz-se referência, como exemplo, à diferença de dificuldade que Leo sentiu na escola primária entre multiplicar e dividir, operações que embora sendo matematicamente a inversa uma da outra, têm graus diferentes de dificuldade para os alunos.
O método de Diffie-Hellman de facto usa o logaritmo discreto, ou seja, o cálculo do logaritmo em aritmética modular (para uma ideia sobre o que é a aritmética modular, ver 
[aqui]($HUB_URL/pt/story/the-lost-treasure/)
, uma operação que do ponto de vista de dificuldade computacional é extremamente mais complexa do que a exponenciação.

A criptografia de chave pública, pelo seu lado, baseia-se na assimetria no uso de chaves. Uma, a chave privada, será mantida secreta pelo utilizador depois de ter sido gerada; servirá apenas para decifrar mensagens recebidas. A outra, a chave pública, pode ser tornada pública para quem queira comunicar com o utilizador e é apenas usada para cifrar mensagens (isto implica que quem cifra uma mensagem cujos recipientes são apenas outras pessoas não será capaz de decifrar a sua própria mensagem).
Este método elimina a necessidade de o utilizador enviar uma chave secreta diferente para cada pessoa que queira comunicar com ele: isto é particularmente útil no caso de comunicações "de um para vários", como acontece com instituições bancárias or agências
governamentais.

A criptografia de chave pública pode também ser usada "às avessas" para verificar a identidade de um utilizador. Neste caso, na mensagem cifrada com a chave pública do recipiente, a pessoa que envia adiciona uma assinatura a qual segue numa cópia cifrada com a sua própria chave privada. O recipiente pode então usar a chave pública de quem enviou para verificar que a assinatura coincide com a contida na mensagem que recebeu, confirmando assim a identidade deste.

O segundo capítulo da história passa a focar mais propriamente o ataque do "Homem no meio". A Mathina é raptada por um pirata misterioso, o qual consegue passar por ser ela nas comunicações com Leo e Ângela.


# Notas didáticas

"Funções de sentido único" são a base de várias aplicações na criptografia moderna, em particular nalguns sistemas de troca de chaves, como o de Diffie-Helman, e na criptografia de chave pública. Em vez do algoritmo usado no mundo real, optou-se por usar uma versão simplificada, de forma a não introduzir tópicos que não são abordados a nível do ensino secundário, e focar a atenção no método. As competências em Matemática necessárias
para compreender esta história incluem as propriedades de potências e o conhecimento da divisão com resto, que pode ser apresentada ou revista nos primeiros anos do secundário. Para um estudo detalhado do algoritmo de Diffie-Helman é necessária pelo menos uma introdução aos conceitos de exponencial e de logaritmo.

&nbsp;

# Sobre as apps

Há três experiências interativas ao longo da história, disponíveis em quatro momentos diferentes. Estão ligadas a alturas cruciais dos processos de codificação e descodificação da mensagem e da escolha da chave.

Todas as apps foram programadas em JavaScript e devem poder ser usadas quer em PCs, quer em tablets e smartphones. Seguem-se descrições curtas de cada app, incluindo ligações para as apps e filmes que explicam como as usar (no canal Mathina do YouTube).

&nbsp;

## [Jogo 1 - Mensagens e chaves I]($HUB_URL/pt/story/the-man-in-the-middle/?actionLink=app1)

Na primeira experiência, o leitor relembra os passos que, depois da explicação da Ângela, Mathina e Leo têm que seguir para obter o segredo partilhado. No início escolhem um número primo p, e a seguir um número aleatório entre 2 e p-2, depois, através de uma versão simplificada do algoritmo, ficam a conhecer, em separado, um número partilhado, obtido a partir de informação que foi trocada de forma pública.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/bucca-4/transcripts/Script1-pt.pdf)

&nbsp;

## [Jogo 2 - Mensagens e chaves II]($HUB_URL/pt/story/the-man-in-the-middle/?actionLink=app2)

A segunda app, partindo da primeira, permite o uso na prática do método de troca de chaves. O leitor neste caso fica no papel de Leo, que recebe a primeira mensagem de Mathina e decifra-a usando o segredo partilhado na primeira app. Esta app é usada duas vezes na história, correspondendo às mensagens de Mathina recebidas por Leo.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/bucca-4/transcripts/Script2-pt.pdf)

&nbsp;

## [Jogo 3 - Mensagens e chaves III]($HUB_URL/pt/story/the-man-in-the-middle/?actionLink=app3)

Na terceira experiência, no papel de Leo, o leitor tem de tentar quebrar o sistema criptográfico, derivando o segredo partilhado a partir do conhecimento da parte da chave na posse de um dos utilizadores. A app é usada para tornar clara a diferença em dificuldade computacional entre as operações a efetuar para obter o segredo partilhado e as necessárias para tentar violar o sistema.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/bucca-4/transcripts/Script3-pt.pdf)

&nbsp;

## [Jogo 4 - Mensagens e chaves IV]($HUB_URL/pt/story/the-man-in-the-middle/?actionLink=app4)

A quarta app, volta a propor a experiência da segunda, com uma nova mensagem; o leitor continua no papel de Leo, o qual recebe uma nova mensagem de Mathina e volta a gerar a mensagem original a partir da que recebeu.

@[youtube](OYrrdu4y_7E?_align-center_)
[Guião](/stories/bucca-4/transcripts/Script2-pt.pdf)

&nbsp;
