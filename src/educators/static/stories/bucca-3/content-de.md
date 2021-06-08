# Mathematische Konzepte
In der Geschichte **Der verlorene Schatz** wird die modulare Arithmetik vorgestellt, die Sicherheit der Cäsar-Verschlüsselung untersucht und eine kryptographische Methode vorgeschlagen, die der Cäsar-Verschlüsselung ähnelt, aber viel sicherer ist: die Vigenère-Chiffre.

In der Geschichte ist Mathina bereits mit der Cäsar-Verschlüsselung vertraut, daher ist es ratsam, zuerst die Geschichte ["Mathina und der sprechende Papagei"]($HUB_URL/story/the-talking-parrot/) zu lesen, in der sie vorgestellt wird. In dieser Geschichte führt Angela Mathina zur Entdeckung einer besonderen Art und Weise, Summen mit Zahlen zu bilden: die modulare Arithmetik.

Die modulare Arithmetik "modulo n" funktioniert wie die übliche Arithmetik, aber sie verwendet nur Zahlen zwischen 0 und n-1. Wenn wir zwei Zahlen a und b haben, die zwischen 0 und n-1 liegen, können wir sie addieren, subtrahieren oder multiplizieren. Dazu führen wir die Operation ganz normal durch und berechnen dann den Rest der ganzzahligen Division der erhaltenen Zahl durch n. Dies ist das Ergebnis der Operation mit modularer Arithmetik (in mathematischer Sprache: die Summe, Differenz oder das Produkt "modulo n" wird berechnet).
Wenn zum Beispiel der Modulus n gleich 12 ist, ist 10 + 5 gleich 3, weil 10 + 5 = 15 (das Ergebnis der üblichen Summe) und der Rest der Division von 15 durch 12 gleich 3 ist. Mit der modularen Arithmetik umzugehen ist dasselbe, wie mit einer Uhr mit n Stunden umzugehen (diese Analogie wird auch in einer der Apps in dieser Geschichte wiederholt). Die Summe des eben gemachten Beispiels auf einer Uhr überrascht uns nicht: Wenn wir bei 10 beginnen und 5 Stunden addieren, bleibt der Zeiger bei 3 stehen!

Der Zusammenhang zur Cäsar-Verschlüsselung besteht darin, dass, wenn wir die Zahlen von 0 bis 25 der Reihe nach den Buchstaben "A", "B", ..., "Z" zuordnen, die Anwendung der Cäsar-Verschlüsselung mit k Sprüngen gleichbedeutend ist mit der Addition von k modulo 25 zu den Zahlen, die den jeweiligen Buchstaben entsprechen. Außerdem ist bei dieser Interpretation das Entschlüsselungverfahren einfach eine Subtraktion modulo 25.

Dieser Gesichtspunkt dient Angela auch dazu, Mathina verständlich zu machen, dass die zweimalige Anwendung der Cäsar-Verschlüsselung die Nachricht nicht sicherer macht. Durch den doppelten Aufwand erhält man nichts Neues. Tatsächlich ist die zweimalige Anwendung der Verschlüsselung mit dem Schlüssel k bzw. h so, als würde man nur einmal den Schlüssel k + h verwenden.

Eine Variante der Cäsar-Verschlüsselung, die Vigenère-Chiffre, wird in der **Der verlorene Schatz** ebenfalls vorgestellt. Sie ist immer noch eine Substitutions-Chiffre, wie die Cäsar-Verschlüsselung, zeichnet sich aber durch die Aufteilung der Buchstaben in mehrere Einheiten aus. Jede dieser Einheiten wird mit der Cäsar-Verschlüsselung mit einem jeweils anderen Schlüssel verschlüsselt. Der Schlüssel der Vigenère-Chiffre ist also eine Liste von s Zahlen: die erste sagt uns, wie der erste Buchstabe und die Buchstaben an Position s + 1, 2s + 1, ... zu verschlüsseln sind. Die zweite Zahl bezieht sich auf den zweiten Buchstaben und die Buchstaben an Position s + 2, 2s + 2,... und so weiter. In der Geschichte besteht der verwendete Schlüssel aus zwei Zahlen. So erhält man den chiffrierten Text, indem man die Cäsar-Verschlüsselung auf die ungeraden Buchstaben anwendet und dabei als Schlüssel die erste der beiden Zahlen anwendet. Bei den Buchstaben an gerader Position wird die zweite Zahl verwendet. Wäre der Schlüssel z. B. das Zahlenpaar (1,3), so wird das Wort "MATHINA" verschlüsselt, indem man zu den Buchstaben an ungerader Position eine 1 "addiert" und zu den Buchstaben an gerader Position eine 3 "addiert". Wir erhalten dann das Wort "NDUKJOB".

![Vigenere cipher](/stories/bucca-3/img/_align-center_/ndukjob.png)



# Didaktische Hinweise

Einige Konzepte, die in dieser Geschichte verwendet werden, werden in der Geschichte ["Mathina und der sprechende Papagei"]($HUB_URL/story/the-talking-parrot/), die für Kinder der Altersgruppe 7 bis 11 Jahre gedacht ist, ausführlicher dargestellt. Sowohl **Mathina und der sprechende Papagei** als auch **Der verlorene Schatz** sind für die Altersgruppe 7-14 Jahre geeignet. Es wird empfohlen, **Mathina und der sprechende Papagei** zuerst zu lesen.

Die modulare Arithmetik bietet viele interessante didaktische Ideen. Durch Variation von n kann man verschiedene algebraische Strukturen erhalten und es ist lohnenswert, einige Aspekte im Zusammenhang mit abstrakter Algebra zu untersuchen. Hier sind einige Ideen, die durch einfache Kenntnis des Konzepts von Quotient und Rest der Division durch eine ganze Zahl angegangen werden können.

`*` *Suchen Sie einige invertierbare Elemente in Bezug auf die Multiplikation modulo n.*
Die Zahl 1 ist ein neutrales Element für die Multiplikation: jedes Nicht-Null-Element multipliziert mit 1 ergibt die Zahl selbst als Ergebnis. Das Inverse einer Zahl a, falls es existiert, ist diejenige Zahl b, bei der a mal b (modulo n) gleich 1 ist. Wenn z.B. n=7 ist, ist die Zahl a=3 multipliziert mit b=5 gleich 15, was modulo 7, d.h. auf einer Uhr mit 7 Stunden, gleich 1 ist. Das bedeutet, dass 5 das Inverse von 3 modulo 7 ist!

`*` *Charakterisierung der invertierbaren Elemente in Bezug auf die Multiplikation modulo n.*
Eine tiefergehende Analyse zeigt, dass nur Zahlen, die mit n teilerfremd sind, invertierbar sind. Daher haben, wenn n prim ist, alle Zahlen außer 0 ein Inverses modulo n.

`*` *Der diskrete Logarithmus modulo n*.
Dieses Konzept, das wie üblich als Umkehroperation der Potenzierung (modulo n) definiert ist, ist eines der typischen Beispiele für "Einwegfunktionen", auf denen auch moderne kryptographische Verfahren beruhen. Weitere Informationen [hier]($HUB_URL/story/the-man-in-the-middle/).

Die Vigenère-Chiffre sieht aus wie eine einfache Variante der Cäsar-Verschlüsselung, das ist sie aber nicht. Die Tatsache, dass man im Allgemeinen nicht weiß, wie lang der Schlüssel ist, stellt ein erhebliches Hindernis für den Angriff auf die Chiffre dar, so sehr, dass diese Chiffren bis zum letzten Jahrhundert als unangreifbar galten. In Wirklichkeit ist mit statistischen Techniken, die die Häufigkeit der Buchstaben im Text analysieren und die von einem Computer effektiv genutzt werden können, selbst die Vigenère-Chiffre heutzutage nicht mehr sehr sicher.

Ungeachtet dessen ist eine Variante der Vigenère-Chiffre, die sogenannte Vernam-Chiffre, aus mathematischer Sicht die sicherste Chiffre. Bei der Vernam-Chiffre ist  der Schlüssel so lang wie der Text selbst und zufällig gewählt. Eine Person, die die Nachricht entschlüsseln will, ohne den Schlüssel zu kennen, hat nur die Möglichkeit, alle Schlüssel auszuprobieren! In der Praxis wird diese Chiffre nie verwendet, weil sie einen Austausch von vielen Informationen zwischen den Parteien erfordert.

&nbsp;

# Über die Apps 

Die interaktiven Apps, die in der Geschichte vorkommen, sind alle Varianten der Cäsar-Verschlüsselung, die in der Geschichte **Mathina und der sprechende Papagei** vorgestellt wurde. Die Apps dienen hauptsächlich dazu, die Mathematik, die dieser Verschlüsselungsmethode zugrunde liegt, zu vertiefen. Dabei wird zum Beispiel deutlich, dass die Codierungs- und Decodierungsoperationen sehr an Addition und Subtraktion erinnern. Die Verschlüsselung wird dann modifiziert und verkompliziert, indem man von der ursprünglichen Cäsar-Verschlüsselung zu einem neuen, viel sichereren Verfahren übergeht, der Vigenère-Chiffre.

Alle Apps sind in Javascript programmiert und können auf Computern, Tablets und Smartphones verwendet werden. Im Folgenden finden Sie eine kurze Beschreibung der interaktiven Apps mit Links zu den Anleitungsvideos auf Mathinas YouTube-Kanal.

&nbsp;

## [App 1 - Der Anhänger I]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app1)

In dieser App muss die Benutzerin oder der Benutzer versuchen, einige Wörter mithilfe der Cäsar-Verschlüsselung mit einem vom Computer gewählten Schlüssel richtig zu verschlüsseln. Dies dient dazu, den Spielenden mit der Caesar-Chiffre vertraut zu machen und, falls er/sie die Geschichte **Mathina und der sprechende Papagei** gelesen hat, einen Bezug zu den bereits bekannten Konzepten herzustellen.

@[youtube](RPVvWsMXSiA?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [App 2 - Der Anhänger II]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app2)

Die Benutzerin oder der Benutzer muss eine Nachricht mit der Cäsar-Verschlüsselung entschlüsseln, aber mit einer zusätzlichen Schwierigkeit: Der Klartext "Treffen wir uns morgen früh an der Bar in der Nähe des Piers auf der Insel" ist rückwärts geschrieben. Dies ist ein technisches Kniff, um die Cäsar-Verschlüsselung komplizierter zu machen und ist direkt mit der Handlung verknüpft.

@[youtube](Kfp6PgOK8K8?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [App 3 - Die Summe der Uhr]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app3)

In dieser App wird die zuvor vorgestellte Cäsar-Verschlüsselung mathematisch analysiert. Zu sehen ist eine Uhr mit einem einzigen Zeiger, die die Addition in modularer Arithmetik darstellen soll. Die Ausgangsfrage lautet wie folgt: "Versuchen wir, 12 + 5 auf einer 14-Stunden-Uhr zu berechnen". Der Benutzer kann den Stundenzeiger dieser Uhr auf 14 Stunden stellen, und auf diese Weise nachvollziehen, was die endgültige Antwort sein wird (in diesem speziellen Fall ist 3 die richtige Antwort).

@[youtube](XsRGpkmIh0k?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;
## [App 4 - Noch einmal die Cäsar-Verschlüsselung I]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app4)

Hier werden Nachrichten zweimal hintereinander mit der Cäsar-Verschlüsselung ver- und entschlüsselt. Die Verschlüsselungsmethode ist genau die gleiche wie bei den Erlebnissen der Geschichte **Mathina und der sprechende Papagei**. Der einzige Unterschied ist, dass der Vorgang dieses Mal zweimal wiederholt wird.

@[youtube](LTgWwiIRrm8?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [App 5 - Noch einmal die Cäsar-Verschlüsselung II]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app5)

Diese App soll noch einmal verdeutlichen, dass die zweimalige Wiederholung der Cäsar-Verschlüsselung nichts anderes ist als die einfache Verschlüsselung mit diesem Verfahren. Man muss nur die beiden Schlüssel addieren. Hierzu werden der Benutzerin oder dem Benutzer wie in der vorherigen App zwei kombinierte Chiffierscheiben vorgelegt. Die Aufgabe besteht darin, die Scheiben eines dritten Anhängers so zu platzieren, dass das Ergebnis der Verschlüsselungsoperation dasselbe ist wie bei den kombinierten Anhängern.

@[youtube](agTiwTMl-do?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [App 6 - Der Anhänger III]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app6)

Diese App ist identisch mit der ersten, mit dem einzigen Unterschied, dass dieses Mal die Nachricht nicht entschlüsselt werden kann, da sie nicht mit der Cäsar-Verschlüsselung verschlüsselt wurde. Wir betonen, dass dies in der Geschichte den Kindern von Beginn an gesagt wird, damit die Erfahrung mit dieser App nicht frustrierend ist. Die Idee der App ist zu überprüfen, dass die Chiffierscheibe die hier präsentierte Nachricht tatsächlich nicht entschlüsseln kann.

@[youtube](yIqXC-y47GQ?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [App 7 - Der Anhänger IV]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app7)

Diese App ist identisch mit der vorherigen, jedoch soll sich die Benutzerin der der Benutzer nur auf einen bestimmten Buchstaben des Textes konzentrieren und darauf achten, dass er als "D" übersetzt wird, um genau das zu nachzuvollziehen, was Mathina und Angela in der Geschichte besprechen.

@[youtube](6NQM9xFIvlg?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)
&nbsp;

## [App 8 - Wort für Wort]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app8)

Diese App ist ein erster Schritt in Richtung der Vigenère-Chiffre. Der Text wird mit zwei Chiffrierscheiben verschlüsselt, eine für gerade und eine für ungerade Wörter. Wie sich in der Geschichte herausstellen wird, ist dies noch nicht der richtige Ansatz, um die Nachricht tatsächlich zu entschlüsseln. Die App zielt darauf ab, persönlich zu überprüfen, dass dies nicht die richtige Methode ist.

@[youtube](j3cMyFg5Lfc?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)

&nbsp;

## [App 9 - Eine neue Chiffre]($HUB_URL/story/mathina-and-the-lost-treasure/?actionLink=app9)

Die letzte App der Geschichte zeigt das Verfahren der Vigenère-Chiffre mit zwei Buchstaben. Mit zwei Chiffrierscheiben werden jeweils die geraden und ungeraden Buchstaben getauscht. Auf diese Weise können Sie, den Vorschlägen der Geschichte folgend, die Nachricht leicht entschlüsseln. Anschließend besteht die Möglichkeit, dieses Verfahren mit anderen Nachrichten und Schlüsseln zu wiederholen.

@[youtube](ZS5DU2PFlR8?_align-center_)
[Script](/stories/bucca-3/transcripts/Script3.pdf)


&nbsp;
