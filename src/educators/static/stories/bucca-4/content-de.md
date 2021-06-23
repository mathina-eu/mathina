# Mathematische Konzepte
Der Zweck dieser Geschichte ist es, durch den als "Man in the middle" bekannten Angriff die Bedeutung der digitalen Signatur in der kryptografischen Kommunikation zu verdeutlichen. Im ersten Kapitel der Geschichte erklärt Angela den Diffie-Hellman-Schlüsselaustausch. Das ist ein kryptografisches System, das es ermöglicht, geheime Informationen durch unverschlüsselte und öffentlich zugängliche Kommunikation auszutauschen.
Das Verfahren basiert auf der sogenannten "Einwegfunktion", d. h. auf invertierbaren Funktionen, die in einer Richtung sehr leicht, in der anderen aber extrem schwer berechenbar sind. In der Geschichte wird als Beispiel auf den von Leo in der Grundschule wahrgenommenen Schwierigkeitsunterschied zwischen Multiplikation und Division verwiesen. Mathematisch gesehen ist die eine die Umkehrung der anderen, die Verfahren werden aber von den Schülerinnen und Schülern als unterschiedlich schwer wahrgenommen.
Die Diffie-Hellman-Methode verwendet einen diskreten Logarithmus, d.h. die Berechnung des Logarithmus in modularer Arithmetik. Dies ist eine Operation, die bezüglich der Rechenschwierigkeit viel komplexer ist als die Potenzierung. (Einen Hinweis zu modulare Arithmetik gibt es in [dieser Geschichte]($HUB_URL/de/story/the-lost-treasure/))

Die Public-Key-Kryptographie hingegen ist mit einer Asymmetrie bei der Verwendung der Schlüssel verbunden. Der erste Schlüssel, der private, wird vom Benutzer nach der Erzeugung geheim gehalten. Er dient nur zur Entschlüsselung empfangener Nachrichten. Der andere Schlüssel, der öffentliche, kann jedem, der mit dem Benutzer kommunizieren möchte, öffentlich zugänglich gemacht werden und wird nur zum Verschlüsseln der Nachricht verwendet. Dies bedeutet, dass jemand, der eine Nachricht verschlüsselt, die verschlüsselte Version selbst auch nicht mehr lesen kann (und auch sonst niemand anderes als der Empfänger). Damit entfällt für den Empfänger die Notwendigkeit, jeder Person, die mit ihm kommunizieren möchte, einen anderen geheimen Schlüssel mitzuteilen. Dies ist besonders dann nützlich, wenn viele verschiedene Leute an einen Empfänger Nachrichten schicken, wie z. B. an Bankinstitute oder Regierungsbehörden.

Public-Key-Kryptografie kann auch "rückwärts" verwendet werden, um die Identität eines Benutzers zu verifizieren. In diesem Fall fügt der Absender in die mit dem öffentlichen Schlüssel des Empfängers verschlüsselte Nachricht eine Signatur ein, die dann in einer verschlüsselten Kopie mit seinem eigenen privaten Schlüssel gesendet wird. Der Empfänger kann dann mit dem öffentlichen Schlüssel des Absenders überprüfen, ob die Signatur mit der für ihn bestimmten Nachricht übereinstimmt, und damit die Identität des Absenders bestätigen.

Das zweite Kapitel der Geschichte verlagert den Fokus mehr auf den "Man in the middle"-Angriff. Mathina wird von einem mysteriösen Piraten gekidnappt, dem es gelingt, sich in der Kommunikation mit Leo und Angela als Mathina auszugeben.

# Didaktische Hinweise

"Einwegfunktionen" sind die Grundlage mehrerer Anwendungen in der modernen Kryptografie, insbesondere für einige Schlüsselaustauschsysteme, wie der Diffie-Hellman-Schlüsselaustausch und die Public-Key-Kryptografie. Im Vergleich zu dem in der realen Welt verwendeten Algorithmus haben wir uns für die Verwendung einer vereinfachten Version entschieden, um keine Themen einzuführen, die in der Schule nicht behandelt werden, und um die Aufmerksamkeit auf die Methode zu lenken. Zu den mathematischen Kenntnissen, die in dieser Geschichte benötigt werden, gehören die Eigenschaften von Potenzen und die Kenntnis der Division mit Rest. Für eine detaillierte Untersuchung des Diffie-Hellman-Algorithmus ist zumindest eine Einführung in die Konzepte der Exponential- und Logarithmusfunktionen erforderlich. 

&nbsp;

# Über die Apps

Im Verlauf der Geschichte gibt es drei interaktive Apps, die zu vier verschiedenen Zeitpunkten verfügbar sind. Sie sind mit wichtigen Ereignissen innerhalb der Geschichte verknüpft, namentlich der Ver- und Entschlüsselung von Nachrichten und der Auswahl des Schlüssels.

Alle Apps sind in Javascript programmiert und können auf Computern, Tablets und Smartphones verwendet werden. Im Folgenden finden Sie eine kurze Beschreibung der Apps mit Links zu den Anleitungsvideos auf Mathinas YouTube-Kanal. 

&nbsp;

## [App 1 - Schlüsselaustausch I]($HUB_URL/de/story/the-man-in-the-middle/?actionLink=app1)

In der ersten App können die Schülerinnen und Schüler die Schritte nachvollziehen, die Mathina und Leo nach Angelas Erklärung ausführen müssen, um das gemeinsame Geheimnis zu erhalten. Zunächst wählen sie eine Primzahl p und dann eine Zufallszahl zwischen 2 und p-2, dann kommen sie durch eine vereinfachte Version des Algorithmus getrennt zur Kenntnis einer gemeinsamen Zahl, die sie aus öffentlich ausgetauschten Informationen erhalten. 

@[youtube](LCwYk0WbgT8?_align-center_)
[Script (PDF, englisch)](/stories/bucca-4/transcripts/Script4.pdf)

&nbsp;

## [App 2 - Schlüsselaustausch II]($HUB_URL/de/story/the-man-in-the-middle/?actionLink=app2)

Die zweite App, die auf der ersten aufbaut, bietet eine praktische Anwendung der Schlüsselaustauschmethode. Die Benutzerin oder der Benutzer spielt in diesem Fall die Rolle von Leo, der die erste Nachricht von Mathina erhält und sie mit dem in der ersten App generierten gemeinsamen Geheimnis entschlüsselt. Diese App wird innerhalb der Geschichte zweimal verwendet, da Leo zwei Nachrichten von Mathina erhält. 

@[youtube](OUW1rex3DJA?_align-center_)
[Script (PDF, englisch)](/stories/bucca-4/transcripts/Script4.pdf)
&nbsp;

## [App 3 - Den Schlüssel stehlen]($HUB_URL/de/story/the-man-in-the-middle/?actionLink=app3)

In der dritten App muss der Benutzer in der Rolle von Leo versuchen, das kryptografische System zu knacken, indem er versucht, das gemeinsame Geheimnis ausgehend von der Kenntnis des Teils des Schlüssels, der sich im Besitz eines der Benutzer befindet, abzuleiten. Die App soll den Unterschied zwischen der rechnerischen Schwierigkeit zwischen den Operationen, die ausgeführt werden müssen, um das gemeinsame Geheimnis zu erhalten, und denen, die notwendig sind, um zu versuchen, das System zu knacken, hervorheben. 

@[youtube](ylf8uX4wdpo?_align-center_)
[Script (PDF, englisch)](/stories/bucca-4/transcripts/Script4.pdf)

&nbsp;

## [App 4 - Schlüsselaustausch III]($HUB_URL/de/story/the-man-in-the-middle/?actionLink=app4)

Die vierte App wiederholt die Vorgehensweise der zweiten App, nun mit einer neuen Nachricht. Der Benutzer spielt wieder die Rolle von Leo, der eine neue Nachricht von Mathina erhält und aus der empfangenen Botschaft eine Nachricht im Klartext generiert.

@[youtube](OUW1rex3DJA?_align-center_)
[Script (PDF, englisch)](/stories/bucca-4/transcripts/Script4.pdf)

&nbsp;
