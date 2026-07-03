Die Idee hinter Commuters' Mapping entstand aus einem Gespräch darüber, wie unterschiedlich die Endstationen des Berliner Nahverkehrsnetzes sein können. Manche liegen in dichten Wohngebieten, andere wirken isoliert, und ob man sich sicher fühlt, dort nachts alleine anzukommen, hängt stark davon ab, wer man ist und wann man reist.

## Das Konzept

Jede S-Bahn-, Tram- und U-Bahn-Linie in Berlin hat zwei Endstationen. Dort beginnt und endet der Betrieb. Ich war neugierig: Wie sind diese Orte eigentlich, und was passiert, wenn man diese Informationen aus der Perspektive von Frauen sammelt, die alleine unterwegs sind?

Die App ermöglicht es, alle Endstationen auf einer Karte zu erkunden, die eigene Erfahrung beim Besuch einer Station zu erfassen und zu sehen, was die Community berichtet hat. Man kann bewerten, wie sicher es sich angefühlt hat, ob man alleine hinfahren würde, welche Art von Gebiet es ist, und eine Notiz hinterlassen.

![Kartenansicht mit Berliner Endstations-Pins](/assets/blog/coordinate-club-1.png)

## Wie es funktioniert

Die Karte verwendet echte GTFS-Daten für die Linien und einen kuratierten Datensatz der Endstationen. Tippt man auf einen Pin, kann man eine Erfahrung eintragen. Die Daten werden in Supabase gespeichert, sodass Beiträge verschiedener Personen sich über die Zeit ansammeln. Filter ermöglichen es, Stationen nach Sicherheitsbewertung, Community-Besuchen oder Linientyp zu finden.

Die Station-Pins zeigen drei Zustände: Grün für selbst besuchte Stationen, Lila für Community-besuchte und Grau für unerkundete. Mit der Zeit füllt sich die Karte.

![Stationsdetail und Erfahrungsformular](/assets/blog/coordinate-club-2.png)

## Warum Endstationen

Hier gibt es eine Lücke in der Stadtplanung. Endstationen erhalten im Stadtdesign oft weniger Aufmerksamkeit, weil sie als Übergangspunkte und nicht als Ziele gelten. Für die Menschen, die in ihrer Nähe wohnen und sie täglich nutzen, sind sie aber sehr wohl Ziele. Dieses Projekt ist ein kleiner Versuch, das aus einer Perspektive zu dokumentieren, die selten in offiziellen Daten auftaucht.
