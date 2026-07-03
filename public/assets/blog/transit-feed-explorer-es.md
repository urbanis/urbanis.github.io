**GTFS** (General Transit Feed Specification) es el formato estándar que las ciudades y operadoras de transporte usan para compartir horarios de transporte público: rutas, paradas, viajes y timetables. **GBFS** (General Bikeshare Feed Specification) es el equivalente para bicicletas compartidas y micromovilidad, cubriendo ubicaciones de vehículos, disponibilidad en estaciones y zonas de geovalla en tiempo real.

Trabajar con datos GTFS aparece mucho en el análisis de movilidad, y el formato, aunque estandarizado, puede ser sorprendentemente incómodo de explorar. Recibes un archivo zip lleno de CSVs de texto y normalmente tienes que escribir código o importar todo en una base de datos solo para responder una pregunta simple: ¿cuántas rutas tiene este feed o qué paradas aparecen en esta línea?

Transit Feed Explorer nació como una herramienta personal para exactamente ese problema. Con el tiempo creció hasta convertirse en algo más completo: un entorno en el navegador para explorar tanto horarios de transporte estático (GTFS) como feeds en tiempo real de bicicletas compartidas (GBFS), sin subir nada a ningún servidor. El feed se parsea completamente en tu dispositivo.

## Qué puedes hacer con él

Puedes soltar un zip GTFS o pegar la URL de un endpoint GBFS y obtener inmediatamente un mapa con rutas, paradas y una cuadrícula hexagonal de densidad construida con la librería H3 de Uber. La cuadrícula se adapta a la densidad de viajes y vehículos, lo que facilita identificar dónde se concentra el servicio y dónde hay vacíos.

Las áreas de cobertura son una de las funcionalidades más útiles para planificadores. Eliges una parada y obtienes isócronas de 15 minutos a pie y en bicicleta calculadas desde la red viaria real a través de Valhalla, un motor de enrutamiento abierto. No son simples círculos de radio sino cobertura real basada en la red.

También puedes hacer clic en cualquier punto del mapa para consultar elementos cercanos de OpenStreetMap a través de la API Overpass, lo que es útil cuando quieres cruzar la cobertura de transporte con lo que hay realmente sobre el terreno. Las zonas de geovalla de GBFS v2 y v3 también están soportadas, así puedes visualizar áreas de no circulación y límites operativos junto al resto de los datos.

![Vista de la tabla de rutas](/assets/blog/transit-feed-explorer-1.png)

## El caso de uso

Es principalmente una herramienta para mí y para otras personas que trabajan con datos de transporte público. Antes de construir esto, escribía scripts rápidos en Python para revisar feeds o los cargaba en QGIS. Ambos funcionan, pero ninguno es rápido. Esto es más ágil para las preguntas habituales, y la función de descubrimiento de feeds también ayuda: hay un mapa global de ciudades donde puedes encontrar y cargar feeds de ciudades de todo el mundo con un solo clic.

También es útil cuando recibes un feed de una ciudad u operador y quieres hacer una revisión rápida, o cuando necesitas construir un KPI rápido y la herramienta te permite escribir fórmulas con referencias cruzadas para calcular métricas personalizadas a partir de los datos.

![Vista de detalle de parada y calendario](/assets/blog/transit-feed-explorer-2.png)

## Cómo está construido

React y Vite en el frontend, Leaflet para el mapa, Recharts para los gráficos. Los tiles del mapa vienen de CartoDB Light para la vista de calle y MapTiler Topo para el terreno. La geocodificación usa Nominatim.

Los archivos GTFS pueden ser grandes y parsearlos consume mucha CPU, por lo que ese trabajo se ejecuta en un Web Worker. La interfaz sigue siendo usable mientras el feed carga en segundo plano, lo que importa cuando estás cargando el feed de una ciudad grande.

No hay backend. Nada se envía a ningún servidor y la herramienta funciona sin conexión una vez que la página está abierta.
