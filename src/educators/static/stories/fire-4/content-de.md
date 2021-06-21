# Mathematische Konzepte
In dieser Geschichte wird die Beschreibung von Kurven durch implizite Funktionen eingeführt. Wir haben in der letzten  Feuerland-Geschichte (**Das Phönix-Rennen in Arisa**) die explizite Beschreibung von Kurven gesehen, bei der wir für jeden `@x@`-Wert einen `@y@`-Wert durch eine Funktion erhalten, `@y=f(x)@`, und die Punkte der Kurve werden durch `@ (x,y) = (x,f(x)) @` repräsentiert.

Bei der impliziten Beschreibung haben wir hingegen eine Funktion mit zwei Variablen `@F(x,y)@`, die aus zwei beliebigen Eingabewerten `@x@` und `@y@` eine Zahl berechnet. Wir stellen unsere Kurve als alle Punkte `@(x,y)@` dar, die `@F(x,y)=0@` erfüllen.

Mit der expliziten Beschreibung, die wir in den vorherigen Geschichten verwendet haben, hatten wir eine strukturierte Methode, um alle Punkte in der Kurve zu erhalten: Wir haben einfach Werte von `@x@` eingegeben und erhielten Punkte auf der Kurve. Mit der impliziten Beschreibung hingegen haben wir nur eine Testmethode, um zu entscheiden, ob ein Punkt zur Kurve gehört oder nicht. Damit eignet sich die implizite Methode eher zur Beschreibung von Beziehungen als zur Beschreibung von Konstruktionsmethoden.

Nehmen wir zum Beispiel den Kreis mit dem Radius `@r=2@` und dem Mittelpunkt im Ursprung `@(0,0)@`. Die geometrische Beschreibung besagt, dass dieser Kreis die Menge aller Punkte im Abstand `@2@` vom Mittelpunkt ist.

![Some alt text](stories/fire-4/img/_align-center_circtrig.png =300x300)

Mit Hilfe des Satzes von Pythagoras lässt sich dies in Koordinaten als Gleichung übersetzen

```AsciiMath
 x^2+y^2=r^2=4
 ```

Oder um es als eine einzige implizite Funktion zu schreiben

```AsciiMath
F(x,y)=x^2+y^2-4=0.
```
Wenn wir diesen Ausdruck in einen expliziten Ausdruck umwandeln wollen, können wir die Gleichung nach `@y@` umformen und erhalten so eine Funktion von `@x@`, wie
```AsciiMath
y=pm sqrt {4-x^2}.
```
Beachten Sie, dass wir `@y@` nicht als eine einzige Funktion von `@x@` schreiben können, sondern dass es sich um zwei Funktionen handelt, die von der Wahl des Vorzeichens für die Quadratwurzel abhängen. Die Symmetrie des Kreises wirkt irgendwie gebrochen, weil wir `@x@` als Eingangsvariable bevorzugen, und die Funktion keine Werte von `@x@` außerhalb des Bereichs `@[-2,2]@` zulässt.
Es gibt eine dritte Möglichkeit, die Kurve konstruktiv zu beschreiben: Anstatt `@y@` in Abhängigkeit von `@x@` zu beschreiben, können wir sowohl `@x@` als auch `@y@` als Funktion einer unabhängigen Variablen schreiben, die wir als Zeit oder als Parameter verstehen können. Im Fall des Kreises ist die geeignetste Wahl der Winkel zwischen dem Radius und der x-Achse. Dann können wir mit Hilfe trigonometrischer Funktionen den Kreis in parametrischer Form beschreiben als
```AsciiMath
x= cos(theta)

y= sin(theta)
```

Für jeden Wert von `@theta@` erhalten wir einen Punkt `@(x,y)@` in der Ebene.

Geraden und Kreise sind einfache Beispiele, die Sie mit impliziten Funktionen ausprobieren können. Zusätzlich können einige Tricks und Techniken verwendet werden, um weitere Formen zu erzeugen:

* **Verformung:** Gegeben eine Kurve, die durch `@F(x,y)=0@` definiert ist, können wir eine kleine Verformung erhalten, indem wir die Gleichung in `@F(x,y)=a@` ändern, oder äquivalent `@F(x,y)-a=0@`, wenn der Wert von a klein ist (nahe Null). Da die Funktion `@F@` stetig ist, werden die Punkte, die `@F(x,y)=a@` ergeben, in der Nähe der Punkte liegen, die `@F(x,y)=0@` ergeben. Wir erhalten also eine Verformung der Kurve.

Bei zwei Kurven, die durch `@F(x,y)=0@` und `@G(x,y)=0@` definiert sind, können wir eine Kurve erhalten, die alle Punkte beider Kurven enthält (Vereinigung), oder die Menge der Punkte, die zu beiden Kurven gleichzeitig gehören (Schnittmenge).
	
* **Vereinigung:** Nehmen wir die Kurve, die `@F(x,y)*G(x,y)=0@` multipliziert. Wenn das Produkt `@F*G=0@` ist, dann ist entweder `@F=0@`, oder `@G=0@` (oder beides), und somit sind alle Punkte, die `@F=0@` ergeben, Teil der neuen Kurve, und alle Punkte, die `@G=0@` ergeben, sind es ebenfalls.

* **Schnittmenge:** Wir können die Punkte, die gleichzeitig zu beiden Kurven gehören, erhalten, indem wir den Ausdruck `@F(x,y)^2 + G(x,y)^2=0@` verwenden. Wenn nämlich die Summe zweier positiver Größen Null ist, dann müssen beide gleichzeitig Null sein, und daher werden nur die Punkte, die gleichzeitig `@F=0@` und `@G=0@` erfüllen, zur neuen Kurve gehören. Im Allgemeinen wird diese Konstruktion isolierte Punkte erzeugen (die Schnittpunkte der beiden Kurven). Wenn wir aber die zuvor eingeführte Deformationstechnik anwenden, d. h. `@F(x,y)^2 + G(x,y)^2 -a =0@` für einen Wert von `@a@` nahe Null, können wir daraus eine Kurve erhalten.

In der letzten App dieser Geschichte untersuchen wir implizite Flächen im dreidimensionalen Raum. Diese sind durch die Nullstellenmenge einer dreiwertigen Funktion `@F(x,y,z)=0@` gegeben.


# Didaktische Hinweise
Die Apps in dieser Geschichte dienen hauptsächlich dem Erforschen ohne enge Zielvorgabe. Es werden zahlreiche Beispiele angeboten, die sowohl die Komplexität zeigen, die erreicht werden kann, aber auch Beispiele, die einfacher zu erfassen (oder schon bekannt) sind (wie Linien, Kreise, Ellipsen, Hyperbeln, etc.).

Einige Beispiele können analysiert werden, um ein Verständnis der geometrischen Form aus dem algebraischen Ausdruck zu erhalten, wie wir es oben mit dem Kreis unter Verwendung des Satzes von Pythagoras getan haben. Das Raten und der Versuch, eine Intuition für die Formeln zu entwickeln, ist die Hauptherausforderung bei dieser Geschichte. App 2 ist beispielsweise ein Spiel, das das Zuordnen von Gleichungen zu Kurven trainiert.

Die von den Apps zur Verfügung gestellten Mittel, zusammen mit den oben genannten Techniken, erlauben eine große Kreativität: Fordern Sie die Schülerinnen und Schüler auf, eine Form zu erstellen, die einem Stern, einem Sechseck, einem Meerestier, einer Pflanze usw. ähnelt.

Die Apps haben eine Liste von Beispielen für Kurven und Flächen, jede zeigt ihre Formel und auch das Bild. Erste Beispiele können nach einigem Nachdenken verstanden und hergeleitet werden. Ein Textfeld ermöglicht es der Benutzerin/dem Benutzer, eine beliebige (Polynom-)Gleichung in zwei (oder drei) Variablen einzugeben oder gegebene Gleichungen zu verändern.


# Über die Apps

## App 1 - Erforschen
Die App zeichnet die Menge der Punkte `@(x,y)@` der Ebene, die die Bedingung `@F(x,y)=0@` (die Nullstellenmenge) erfüllen, für eine beliebige Polynomfunktion `@F(x,y)@`. Das geschieht für Polynome, die die Benutzerin/der Benutzer aus einer Beispielliste auswählt, oder auch selbst im Eingabefeld eingibt.

Während die Kurve gezeichnet wird, ist eine kleine Animation zu sehen, die ausgelöst wird, wenn die Benutzerin/der Benutzer den Bildschirm berührt bzw. mit der Maus auf die freie Fläche klickt. Funkelflöhe sind Lichtpunkte. Zu Beginn der Animation werden diese Lichtpunkte zufällig um die Berührungspunkte des Benutzers platziert. Im weiteren Verlauf der Animation bewegen sich die Punkte in die Richtung, in der der Wert der gewählten Funktion näher an Null liegt. Nach ein paar Sekunden sind alle Lichtpunkte auf Punkten der Kurve platziert.

Eine Liste mit Beispielen ist an der Seite verfügbar, und die Benutzerin/der Benutzer kann eine beliebige Polynomgleichung in das Textfeld am unteren Bildschirmrand eingeben.

@[youtube](XoGBCCIlgnc?_align-center_)

## App 2 - Rate die Gleichung
Diese App zeigt den gleichen Funktionsplotter wie die vorherige App. In diesem Fall besteht die Herausforderung darin, zu erraten, welche der vorgegebenen Gleichungen zum angezeigten Bild gehört. Bei jeder falschen Vermutung wird ein "Lebenspunkt", dargestellt durch einen Funkelfloh (der oben auf der Pergamentrolle sitzt), entfernt. Nach drei falschen Vermutungen wird die Lösung aufgedeckt. Das Spiel wird mit einer neuen Gleichung fortgesetzt, die erraten werden soll.

@[youtube](RI82ffVucEA?_align-center_)

## App 3 - Flächen
Diese App ist wieder dem freien Erforschen gewidmet, in diesem Fall für 3D-Flächen, die als Nullstellen einer Funktion `@F(x,y,z)=0@` gegeben sind.

Auf der rechten Seite ist eine Liste mit Beispielgleichungen verfügbar, und unten ist ein Textfeld, in das die Benutzerin/der Benutzer seine eigene Gleichung eingeben kann. Als ersten Schritt können Sie z.B. die Gleichungen der aufgeführten Flächen anpassen und die Änderungen beobachten.

Neben der Fläche stehen drei Schieberegler zur Verfügung. Der erste, Parameter `@a@`, kann innerhalb der Formel verwendet werden. Dessen Wert kann mit dem Schieberegler von `@0@` bis `@1@` eingestellt werden. Der zweite ist ein Transparenzregler, der die Oberfläche durchscheinend macht. Der dritte Regler ändert die Vergrößerung (Zoom-Stufe), er legt also fest, aus welcher Entfernung die Fläche betrachtet wird. Im Allgemeinen kann die Fläche auch bis ins Unendliche reichen, wir sehen aber nur den Ausschnitt, der sich innerhalb einer Kugel befindet (der Rest der Fläche wird von der App einfach abgeschnitten). In gewisser Weise regelt der dritte Schieberegler die Größe dieser Betrachtungskugel (im Verhältnis zur Fläche).

![Some alt text](stories/fire-4/img/_align-center_/screenshot-app-fire-4-3.png =800x450)

Zur ergänzenden Erforschung der Flächen kann mit dem Programm [SURFER](https://imaginary.org/program/surfer) experimentiert werden, einem vollständigeren Programm, das die gleiche implizite Funktionsdarstellung verwendet. Die oben genannten Konstruktionstechniken (Verformung, Vereinigung, Schnitt) sind besonders nützlich, um kreative Oberflächen zu erstellen.


### Weiterführende Hinweise
* Das Programm [SURFER](https://imaginary.org/program/surfer) hat weitere Optionen und Informationen über implizite algebraische Flächen und Singularitäten.
* Der Text [Weltrekordflächen](https://imaginary.org/background-material/world-record-surfaces) (verfügbar in Englisch und Deutsch bei IMAGINARY) bietet eine allgemeine Einführung in Flächen mit Singularitäten.
