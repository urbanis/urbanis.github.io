Der Street Generator entstand aus einem sehr persönlichen Problem: Ich wollte eine schnelle Möglichkeit, Straßenquerschnitte zu gestalten, ohne schwere Software zu öffnen oder mit CAD-Tools zu kämpfen. Im Städtebau ist Straßengestaltung alles. Die Breite eines Gehwegs, wo der Radweg liegt, wie viel Platz Autos wirklich bekommen und was für Menschen übrig bleibt. Ich wollte diese Entscheidungen sofort im Browser visualisieren können.

## Was es macht

Du wählst die Elemente für deinen Straßenquerschnitt, ordnest sie an, legst ihre Breiten fest, und das Tool zeichnet den Querschnitt in Echtzeit. Du kannst beurteilen, ob die Breiten sinnvoll sind, und das Ergebnis dann als SVG-Datei exportieren. Das bedeutet, es ist bereit für Präsentationen, Berichte oder jedes Design-Tool, ohne Qualitätsverlust.

Es ist bewusst einfach gehalten. Kein Login, kein Backend, keine Datei zum Speichern. Du öffnest es, gestaltest und exportierst.

![Oberfläche des Street Generators](/assets/blog/street-generator-1.png)

## Entwerfen direkt aus der Karte

Eine der Funktionen, über die ich mich am meisten freue, ist die Möglichkeit, ein Straßensegment direkt auf der Karte zu zeichnen. Du wählst eine Linie im echten Straßennetz und das Tool liest automatisch die OpenStreetMap-Daten für diesen Abschnitt. Es lädt, was wirklich vorhanden ist: die Straßenbreite, vorhandene Fahrspuren, Gehwege und andere Attribute. Daraus baut es den Querschnitt mit echten Daten, und du kannst anschließend jedes Element noch anpassen.

Das bedeutet, du beginnst nicht mit einer leeren Leinwand. Du beginnst mit der Realität und fragst dann: "Was wäre, wenn wir diese Fahrspur in einen Radweg umwandeln?" oder "Was passiert, wenn wir das Parken schmäler machen, um den Gehweg zu verbreitern?" Alles an einem Ort, im Browser.

![Querschnitt aus OSM-Daten generiert](/assets/blog/street-generator-2.png)

## Warum das wichtig ist

Straßenquerschnitte klingen technisch, aber sie sind im Grunde das Budget einer Straße: Jeder Meter zählt. Wenn du 3 Meter fürs Parken gibst, sind das 3 Meter, die nicht dem Radweg oder einem breiteren Gehweg zugutekommen. Diese Abwägungen sofort und auf Basis realer Daten sichtbar zu machen hilft, konkreter über Straßenraum nachzudenken. Es ist auch ein guter Weg, Vorschläge zu kommunizieren, ohne dass alle im Raum technische Zeichnungen lesen können müssen.

## Was als nächstes kommt

Das Tool hat bereits eine frühe KI-Funktion in Entwicklung, die Querschnittskonfigurationen basierend auf dem Straßenkontext vorschlägt. Die Idee ist, dass du beschreibst, was du möchtest ("mehr Platz für Fußgänger, eine Fahrspur behalten"), und das Tool einen Ausgangspunkt vorschlägt, den du dann anpassen kannst.

Ich möchte auch eine einfache Gestaltungsprüfung hinzufügen, zum Beispiel eine Warnung, wenn ein Gehweg unter die Barrierefreiheitsstandards fällt, sowie mehr Elementtypen für eine größere Bandbreite an Straßentypologien.
