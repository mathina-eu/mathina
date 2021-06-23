# Mathematische Konzepte
Aus mathematisch-inhaltlicher Sicht ist der Zweck dieser Geschichte, auf spielerische und informelle Weise eine Variante einer der berühmtesten kryptographischen Methoden der Antike vorzustellen: die Caesar-Verschlüsselung.

Es handelt sich um eine einfache mono-alphabetische Substitutions-Verschlüsselung. Das bedeutet, dass jeder Buchstabe des Alphabets mit einem Buchstaben desselben Alphabets auf eine eindeutige Art und Weise assoziiert wird, so dass diese Korrespondenz verschiedene Buchstaben mit verschiedenen Buchstaben assoziiert.

![The Caesar jewel used in the story](/stories/bucca-2/img/_align-center_/sostituzione.png =900x160)

Die Art und Weise, wie die Buchstaben bei einer Substitutions-Verschlüsselung einander zugeordnet werden, ist der Schlüssel der Chiffre. Eine Nachricht wird einfach dadurch verschlüsselt, dass man jeden Buchstaben durch den entsprechenden Buchstaben gemäß dem Schlüssel ersetzt. Die Dekodierung erfolgt auf die gleiche Weise, aber in umgekehrter Reihenfolge. Zum Beispiel wird mit dem Schlüssel aus dem vorherigen Bild das Wort "MESSAGE" in das Wort "MBUUCDB" verschlüsselt.

| M | E | S | S | A | G | E |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| M | B | U | U | C | D | B |


In ihrer ursprünglichen Form ist die Caesar-Verschlüsselung eine sehr einfache Substitutions-Verschlüsselung. Der Schlüssel besteht darin, jedem Buchstaben den dritten Buchstaben nach ihm im Alphabet zuzuordnen. Der Buchstabe "A" wird mit dem Buchstaben "D" assoziiert, "B" mit "E" und so weiter. Dies kann verallgemeinert werden, indem man statt der 3 wie im Original eine andere Zahl verwendet. Um den Schlüssel zu kennen, müssen wir nur die Anzahl der "Sprünge" kennen, die wir machen müssen. Wenn wir den Buchstaben suchen, den wir dem Buchstaben "Z" zuordnen, müssen wir wieder zum Anfang des Alphabets. Zum Beispiel ist der Buchstabe "Z" bei der Standard-Caesar-Verschlüsselung mit dem Buchstaben "C" verknüpft.

![The original Caesar circle](/stories/bucca-2/img/_align-center_/caesarkey.png =620x295)

Aus diesem Grund ist es für die schnelle Anwendung einer Caesar-Verschlüsselung bequem, die Buchstaben des Alphabets nicht auf einer Linie, sondern in einem Kreis darzustellen. Auf diese Weise muss man, um von einem verschlüsselten zum entschlüsselten Buchstaben zu kommen, nie an den Anfang zurückspringen, denn die Buchstaben folgen ohne Unterbrechung aufeinander. 

![The alphabet placed in a circle for use with Caesar cipher](/stories/bucca-2/img/_align-center_/caesarcircle.png =300x300)

Oft spricht man in der Literatur auch dann von der Caesar-Verschlüsselung, wenn die Sprünge nicht 3 sind, sondern eine willkürlich gewählte Zahl (der Chiffrierschlüssel). In der Geschichte **Mathina und der sprechende Papagei** trifft Mathina etwa auf einen Papagei, der sich in einer besonderen Sprache ausdrückt: Der Papagei antwortet im Code mit der Caesar-Verschlüsselung mit nur einem Sprung. Auf die Frage "Willst du Kekse?", antwortet das Tier "K-B!". Der Buchstabe nach dem "J" ist "K" und nach dem "A" kommt "B": Der gefräßige Vogel antwortet also prompt mit "JA!" auf Mathinas Frage.

 In der Geschichte erhält Mathina als Geschenk einen Anhänger mit zwei konzentrischen Kreisen, auf denen jeweils die Buchstaben des Alphabets eingraviert sind. Damit kann sie auf einfache Weise Nachrichten mit der Caesar-Verschlüsselung ver- und entschlüsseln. Zum Verschlüsseln sucht man einfach einen Buchstaben auf dem inneren Kreis und wählt den Buchstaben an der gleichen Position auf dem äußeren Kreis. Zum Entschlüsseln macht man das Gleiche, nun beginnt man aber außen und erhät den korrespondierenden Buchstaben innen.
 
![The Caesar jewel used in the story](/stories/bucca-2/img/_align-center_/caesarjewel.png =300x300)

In den beiden interaktiven Apps der Geschichte werden die Spielenden jeweils in den Verschlüsselungsprozess, [mit Kenntnis des Schlüssels]($HUB_URL/de/story/the-talking-parrot/?actionLink=app1) und den Entschlüsselungsprozess [ohne Kenntnis des Schlüssels]($HUB_URL/de/story/the-talking-parrot/?actionLink=app2) einbezogen.

# Didaktische Hinweise

Die Caesar-Verschlüsselung ist eine der bekanntesten kryptographischen Verfahren der Antike. Ihr Name leitet sich von dem römischen Feldherrn Julius Caesar ab, der die Chiffre nach Texten von Suetonius für die militärische Kommunikation nutzte. 

In **Mathina und der sprechende Papagei** wird Caesars Verschlüsselung nur allgemein vorgestellt, aber eine tiefergehende Analyse der Methode und einiger ihrer Eigenschaften ist für 7-10-jährige Kinder möglich, ohne dass Vorkenntnisse erforderlich sind. Im Folgenden finden Sie einige Ideen für Aktivitäten, die nach dem Lesen der Geschichte durchgeführt werden können. 


`*` Wie sicher ist die Caesar-Chiffre? Nicht besonders, denn nach maximal 25 Entschlüsselungsversuchen (d.h. die Anzahl der Buchstaben des Alphabets minus eins) wird man den Schlüssel und den Klartext herausfinden können. 

`*` Macht das Verschlüsseln eines Textes zweimal hintereinander, auch mit unterschiedlichen Schlüsseln, die versteckte Nachricht sicherer? Nein, im Gegenteil, es ist gleichwertig mit der Anwendung der Caesar-Verschlüsselung, denn die Summe der beiden verwendeten Schlüssel wird als Schlüssel verwendet wird.

`*` Die Lehrkraft kann **Mathina und der sprechende Papagei** für eine erste Einführung in die modulare Arithmetik nutzen. 

Diese hier erlangten Erkenntnisse werden in der Geschichte ["Der verlorene Schatz"]($HUB_URL/story/the-lost-treasure/) aufgegriffen, die sich an Kinder der Altersgruppe 11 bis 14 Jahre richtet. Sowohl **Mathina und der sprechende Papagei** als auch **Der verlorene Schatz** sind für Schülerinnen und Schüler im Alter von 7-14 Jahren geeignet und können nacheinander gelesen werden. Durch den Einsatz von Geschichten und Spielen ist es unser Hauptziel, Kinder auf spielerische Weise zum Kennenlernen von kryptographischen Methoden zu führen.

&nbsp;

# Über die Apps

Im Verlauf der Geschichte gibt es zwei interaktive Apps. Sie sind mit wichtigen Ereignissen innerhalb der Geschichte verknüpft, nämlich jeweils mit der Verschlüsselung und Entschlüsselung der Nachricht.

Alle Apps wurden in JavaScript programmiert und sind sowohl für PCs als auch für Tablets/Smartphones optimiert. Unten sehen Sie die Kurzbeschreibung der einzelnen Apps. Links sowohl zu den Apps als auch zu Anleitungsvideos (in Mathinas YouTube-Kanal) sind ebenfalls angegeben.

&nbsp;

## [App 1 - Der Anhänger I]($HUB_URL/de/story/mathina-and-the-talking-parrot/?actionLink=app1)

In der ersten App ist der Schlüssel zur Methode derjenige, den der Papagei John verwendet, nämlich der Sprung von einem Buchstaben. In dieser App muss man versuchen, einige Wörter mit der Caesar-Verschlüsselung mit einem Sprung richtig zu verschlüsseln.

@[youtube](rL_8zo54uOY?_align-center_)
[Script (PDF, engisch)](/stories/symm-1/transcripts/Script2.pdf)

&nbsp;

## [App 2 - Der Anhänger II]($HUB_URL/de/story/mathina-and-the-talking-parrot/?actionLink=app2)

In der zweiten App muss die Spielerin oder der Spieler versuchen, eine Nachricht zu entschlüsseln. Es ist lediglich bekannt, dass der chiffrierte Text mit einer Caesar-Verschlüsselung versehen wurde. In der App gibt es eine Version des Anhängers der Geschichte, mit der es möglich ist, die beiden Kreise mit den Alphabeten zu drehen. Mit dieser Bewegung lässt sich der Schlüssel ändern.

@[youtube](djsCaPaiRlc?_align-center_)
[Script (PDF, engisch)](/stories/symm-1/transcripts/Script2.pdf)

&nbsp;


