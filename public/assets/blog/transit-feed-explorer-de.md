**GTFS** (General Transit Feed Specification) ist das Standardformat, das Städte und Verkehrsbetriebe verwenden, um Fahrplandaten zu veröffentlichen: Routen, Haltestellen, Fahrten und Abfahrtszeiten. **GBFS** (General Bikeshare Feed Specification) ist das Äquivalent für Bikesharing und geteilte Mikromobilität und umfasst Fahrzeugstandorte, Stationsverfügbarkeit und Geofencing-Zonen in Echtzeit.

Die Arbeit mit GTFS-Daten taucht in der Mobilitätsanalyse häufig auf, und das Format ist, obwohl standardisiert, manchmal erstaunlich umständlich zu inspizieren. Man bekommt eine Zip-Datei voller Text-CSVs und muss meist Code schreiben oder alles in eine Datenbank importieren, nur um eine einfache Frage zu beantworten: Wie viele Routen hat dieser Feed, oder welche Haltestellen gibt es auf dieser Linie?

Der Transit Feed Explorer begann als persönliches Tool für genau dieses Problem. Im Laufe der Zeit wuchs er zu etwas Vollständigerem: eine browserbasierte Umgebung zum Erkunden sowohl statischer Fahrpläne (GTFS) als auch Live-Bikeshare-Feeds (GBFS), ohne dass etwas auf einen Server hochgeladen wird. Der Feed wird vollständig auf deinem Gerät geparst.

## Was du damit machen kannst

Du kannst eine GTFS-Zip ablegen oder eine GBFS-Endpoint-URL einfügen und erhältst sofort eine Karte mit Routen, Haltestellen und einem hexagonalen Dichtegitter, das mit Ubers H3-Bibliothek erstellt wird. Das Gitter passt sich der Fahrt- und Fahrzeugdichte an, was es einfach macht zu erkennen, wo das Angebot konzentriert ist und wo Lücken bestehen.

Einzugsbereiche sind eine der nützlichsten Funktionen für Planerinnen und Planer. Du wählst eine Haltestelle und erhältst 15-Minuten-Isochrone zu Fuß und mit dem Fahrrad, berechnet aus dem echten Straßennetz über Valhalla, eine offene Routing-Engine. Keine einfachen Radiuskreise, sondern echte netzbasierte Abdeckung.

Du kannst auch auf beliebige Punkte der Karte klicken, um nahegelegene OpenStreetMap-Objekte über die Overpass-API abzufragen, was hilfreich ist, wenn du die Transitabdeckung mit dem abgleichen möchtest, was tatsächlich vor Ort vorhanden ist. Geofencing-Zonen aus GBFS v2 und v3 werden ebenfalls unterstützt, sodass du Sperrzonen und Betriebsgrenzen zusammen mit den übrigen Daten visualisieren kannst.

![Routentabelle](/assets/blog/transit-feed-explorer-1.png)

## Der Anwendungsfall

Das ist hauptsächlich ein Tool für mich selbst und andere, die mit ÖPNV-Daten arbeiten. Vorher habe ich schnelle Python-Skripte geschrieben oder Feeds in QGIS geladen. Beides funktioniert, aber keines ist schnell. Das hier ist schneller für die häufigen Fragen, und die Feed-Entdeckungsfunktion hilft ebenfalls: Es gibt eine globale Stadtkarte, auf der du Feeds aus Städten weltweit mit einem Klick finden und laden kannst.

Es ist auch nützlich, wenn du einen Feed von einer Stadt oder einem Betreiber erhältst und ihn schnell prüfen möchtest, oder wenn du einen KPI aufbauen musst und das Tool dir ermöglicht, Formeln mit Querverweisen zu schreiben, um eigene Metriken aus den Daten zu berechnen.

![Haltestellendetail und Kalenderansicht](/assets/blog/transit-feed-explorer-2.png)

## Wie es gebaut ist

React und Vite im Frontend, Leaflet für die Karte, Recharts für Diagramme. Kartenkacheln kommen von CartoDB Light für die Straßenansicht und MapTiler Topo für das Gelände. Die Geocodierung verwendet Nominatim.

GTFS-Dateien können groß sein und das Parsen ist CPU-intensiv, daher läuft diese Arbeit in einem Web Worker. Die Oberfläche bleibt bedienbar, während der Feed im Hintergrund geladen wird, was wichtig ist, wenn du den Feed einer großen Stadt lädst.

Es gibt kein Backend. Nichts wird an einen Server gesendet und das Tool funktioniert offline, sobald die Seite geöffnet ist.
