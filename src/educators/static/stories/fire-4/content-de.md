# Mathematische Konzepte
In dieser Geschichte wird die Beschreibung von Kurven durch implizite Funktionen eingeführt. Wir haben in einer anderen Geschichte (**Das Phönix-Rennen in Arisa**) die explizite Beschreibung einer Kurve gesehen, bei der wir für jeden `@x@`-Wert einen `@y@`-Wert durch eine Funktion erhalten, `@y=f(x)@`, und wir stellen alle Punkte `@ (x,y) = (x,f(x)) @`.

Bei der impliziten Beschreibung haben wir dagegen eine Zwei-Variablen-Funktion `@F(x,y)@`, die für zwei beliebige Eingabewerte von `@x@` und `@y@` eine Zahl zurückgibt. Wir stellen unsere Kurve als alle Punkte `@(x,y)@` dar, die `@F(x,y)=0@` erfüllen.

Mit der expliziten Beschreibung, die wir in den vorherigen Geschichten verwendet haben, hatten wir eine strukturierte Methode, um alle Punkte in der Kurve zu erhalten: Wir haben einfach Werte von `@x@` eingegeben und erhielten Punkte auf der Kurve. Mit der impliziten Beschreibung hingegen haben wir nur eine Testmethode, um zu entscheiden, ob ein Punkt zur Kurve gehört oder nicht. Damit eignet sich die implizite Methode eher zur Beschreibung von Beziehungen als zur Beschreibung von Konstruktionsmethoden.

Nehmen wir zum Beispiel den Kreis mit dem Radius `@r=2@` und dem Mittelpunkt im Ursprung `@(0,0)@`. Die geometrische Beschreibung besagt, dass ein Kreis die Menge aller Punkte im Abstand `@2@` vom Mittelpunkt ist.

![Some alt text](/stories/fire-4/img/_align-center_circtrig.png =300x300)

Mit Hilfe des Satzes von Pythagoras lässt sich dies in Koordinaten als Gleichung übersetzen

```AsciiMath
 x^2+y^2=r^2=4
 ```

Oder um es als eine einzige implizite Funktion zu schreiben

```AsciiMath
F(x,y)=x^2+y^2-4=0.
```
Wenn wir diesen Ausdruck in einen expliziten Ausdruck umwandeln wollen, können wir `@y@` als einen Ausdruck von `@x@` isolieren, wie
```AsciiMath
y=pm sqrt {4-x^2}.
```
Beachten Sie, dass wir `@y@` nicht als eine einzige Funktion von `@x@` schreiben können, sondern dass es sich um zwei Funktionen handelt, die von der Wahl des Vorzeichens für die Quadratwurzel abhängen. Die Symmetrie des Kreises ist gebrochen, weil wir `@x@` als Eingangsvariable bevorzugen und die Funktion keine Werte von `@x@` außerhalb des Bereichs `@[-2,2]@` zulässt.
Es gibt eine dritte Möglichkeit, die Kurve konstruktiv zu beschreiben: Anstatt `@y@` als Ausdruck in Abhängigkeit von `@x@` zu schreiben, können wir sowohl `@x@` als auch `@y@` als Funktion einer unabhängigen Variablen schreiben, die wir als Zeit oder als Parameter verstehen können. Im Fall des Kreises ist die geeignetste Wahl der Winkel zwischen dem Radius und der x-Achse. Dann können wir mit Hilfe trigonometrischer Funktionen den Kreis in parametrischer Form beschreiben als
```AsciiMath
x= cos(theta)

y= sin(theta)
```

Für jeden Wert von `@theta@` erhalten wir einen Punkt `@(x,y)@` in der Ebene.

Linien und Kreise sind einige einfache Beispiele, die Sie mit impliziten Funktionen ausprobieren können. Zusätzlich können einige Tricks und Techniken verwendet werden, um weitere Formen zu erzeugen:

* **Verformung:** Gegeben eine Kurve, die durch `@F(x,y)=0@` definiert ist, können wir eine kleine Verformung erhalten, indem wir die Gleichung in `@F(x,y)=a@` ändern, oder äquivalent `@F(x,y)-a=0@`, wenn der Wert von a klein ist (nahe Null). Da die Funktion `@F@` stetig ist, werden die Punkte, die `@F(x,y)=a@` ergeben, in der Nähe der Punkte liegen, die `@F(x,y)=0@` ergeben. Wir erhalten also eine Verformung der Kurve.

	Bei zwei Kurven, die durch `@F(x,y)=0@` und `@G(x,y)=0@` definiert sind, können wir eine Kurve erhalten, die alle Punkte beider Kurven enthält (Vereinigung), oder die Menge der Punkte, die zu beiden Kurven gleichzeitig gehören (Schnittpunkt).
	
* **Vereinigung:** Wir können die Kurve erhalten, die `@F(x,y)*G(x,y)=0@` multipliziert. Wenn das Produkt `@F*G=0@` ist, dann ist entweder `@F=0@`, oder `@G=0@` (oder beides), und somit sind alle Punkte, die `@F=0@` ergeben, Teil der neuen Kurve, und alle Punkte, die `@G=0@` ergeben, sind es ebenfalls.

* **Intersektion:** Wir können diese Punkte erhalten, indem wir den Ausdruck `@F(x,y)^2 + G(x,y)^2=0@` verwenden. Wenn nämlich die Summe zweier positiver Größen Null ist, dann müssen beide gleichzeitig Null sein, und daher werden nur die Punkte, die gleichzeitig `@F=0@` und `@G=0@` ergeben, zur neuen Kurve gehören. Im Allgemeinen wird diese Konstruktion isolierte Punkte erzeugen (indem zwei Kurven geschnitten werden), aber wir können eine Kurve wieder erhalten, indem wir die zuvor eingeführte Deformationstechnik anwenden, d. h. `@F(x,y)^2 + G(x,y)^2 -a =0@` für einen Wert von `@a@` nahe Null.

In der letzten Aktivität untersuchen wir implizite Flächen im dreidimensionalen Raum. Diese sind durch die Nullstellenmenge einer dreiwertigen Funktion `@F(x,y,z)=0@` gegeben.


# Didaktische Hinweise
Die Apps werden hier hauptsächlich als explorative Übung vorgeschlagen. Es werden einerseits zahlreiche Beispiele gegeben, die sowohl die Komplexität zeigen, die erreicht werden kann, und andererseits auch einfache Beispiele, die vertraut sein können (wie Linien, Kreise, Ellipsen, Hyperbeln, etc.).

Einige Beispiele können analysiert werden, um ein Verständnis der geometrischen Form aus dem algebraischen Ausdruck zu erhalten, wie wir es oben mit dem Kreis unter Verwendung des Satzes von Pythagoras getan haben. Das Raten und der Versuch, eine Intuition für die Formeln zu entwickeln, ist die Hauptherausforderung bei dieser Geschichte. Es wird eine Übung zum Zuordnen von Gleichungen zu Kurven vorgeschlagen (App 2).

Die von den Apps zur Verfügung gestellten Mittel, zusammen mit den oben genannten Techniken, erlauben eine große Kreativität: Fordern Sie die Schülerinnen und Schüler auf, eine Form zu erstellen, die einem Stern, einem Sechseck, einem Meerestier, einer Pflanze usw. ähnelt.

Die Apps haben eine Liste von Beispielen für Kurven und Flächen, jede zeigt ihre Formel und die Zeichnung. Erste Beispiele können nach einigem Nachdenken verstanden und abgeleitet werden. Ein Textfeld ermöglicht es der Benutzerin/dem Benutzer, eine beliebige (Polynom-)Gleichung in zwei (oder drei) Variablen einzuführen und zu ändern.


# Über die Apps

## App 1 - Erforschen
Die App zeichnet die Menge der Punkte `@(x,y)@` der Ebene, die `@F(x,y)=0@` (die Nullstellenmenge) erfüllen, für eine beliebige Polynomfunktion `@F(x,y)@`, die die Benutzerin/der Benutzer einführt oder aus einer Beispielliste auswählt.

Während die Kurve gezeichnet wird, ist eine kleine Animation zu sehen, die ausgelöst wird, wenn die Benutzerin/der Benutzer den Bildschirm berührt. Funkelflöhe sind Lichtpunkte. Zu Beginn der Animation werden diese Lichtpunkte zufällig um die Berührungspunkte des Benutzers platziert. Im weiteren Verlauf der Animation bewegen sich die Punkte in die Richtung, in der der Wert der Funktion näher an Null liegt. Nach ein paar Sekunden sind alle Lichtpunkte auf dem Nullpunkt platziert.

Eine Liste mit Beispielen ist an der Seite verfügbar, und die Benutzerin/der Benutzer kann eine beliebige Polynomgleichung in das Textfeld schreiben.


![Some alt text](/stories/fire-4/img/_align-center_/screenshot-app-fire-4-1.png =800x450)

@[youtube](XoGBCCIlgnc?_align-center_)

## App 2 - Rate die Gleichung
Diese App zeigt den gleichen Funktionsplotter wie die vorherige App. In diesem Fall besteht die Herausforderung darin, zu erraten, welche der angezeigten Gleichungen diejenige ist, die auf dem Bildschirm eingezeichnet ist. Bei jeder falschen Vermutung wird ein "Lebenspunkt", dargestellt durch einen Funkelfloh (der oben auf dem Pergament sitzt), entfernt. Nach drei falschen Vermutungen wird die Lösung aufgedeckt. Das Spiel wird mit einer neuen Gleichung fortgesetzt, die erraten werden soll.

![Some alt text](/stories/fire-4/img/_align-center_/screenshot-app-fire-4-2.png =800x450)

@[youtube](RI82ffVucEA?_align-center_)

## App 3 - Oberflächen
Diese App ist wieder dem freien Erforschen gewidmet, in diesem Fall für 3D-Flächen, die als Nullstellen einer Funktion `@F(x,y,z)=0@` gegeben sind.

Auf der rechten Seite ist eine Liste mit Beispielgleichungen verfügbar und unten ist ein Textfeld, in das die Benutzerin/der Benutzer seine eigene Gleichung eingeben kann. Als ersten Schritt können Sie z.B. die Gleichungen der aufgeführten Flächen anpassen und die Änderungen beobachten.

Neben der Fläche stehen drei Schieberegler zur Verfügung. Der erste, Parameter `@a@`, kann innerhalb der Formel verwendet werden. Dessen Wert kann mit dem Schieberegler von `@0@` bis `@1@` eingestellt werden. Zweitens, ein Transparenzregler, der die Oberfläche durchscheinend macht. Drittens eine Zoom-Stufe, die den Umfang der (im Allgemeinen unendlichen) Oberfläche festlegt, die wir innerhalb der Kugel sehen, die den Graphen "einklemmt".

![Some alt text](/stories/fire-4/img/_align-center_/screenshot-app-fire-4-3.png =800x450)

Eine ergänzende Aktivität zur weiteren Erforschung der Oberflächen kann mit [SURFER](https://imaginary.org/program/surfer) durchgeführt werden, einem vollständigeren Programm, das die gleiche implizite Funktionsdarstellung vornimmt. Die oben genannten Konstruktionstechniken (Verformung, Vereinigung, Intersektion) sind besonders nützlich, um kreative Oberflächen zu erstellen.


### Weiterführende Hinweise
* Das Programm [SURFER](https://imaginary.org/program/surfer) hat weitere Optionen und Informationen über implizite algebraische Flächen und Singularitäten.
* Der Text [Weltrekordflächen](https://imaginary.org/background-material/world-record-surfaces) (verfügbar in Englisch und Deutsch bei IMAGINARY) hat eine allgemeine Einführung in diese singulären Flächen.
