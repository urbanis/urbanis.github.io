El Street Generator nació de un problema muy personal: quería una forma rápida de diseñar secciones transversales de calles sin abrir software pesado ni pelear con herramientas CAD. En urbanismo, el diseño de calles lo es todo. El ancho de la acera, dónde va el carril bici, cuánto espacio se le da realmente a los coches versus lo que queda para las personas. Quería visualizar esas decisiones al instante, en el navegador.

## Qué hace

Eliges los elementos que quieres en tu sección de calle, los ordenas, defines sus anchos y la herramienta dibuja la sección transversal en tiempo real. Puedes evaluar si los anchos tienen sentido y luego exportar el resultado como un archivo SVG, lo que significa que está listo para incluirlo en una presentación, un informe o cualquier herramienta de diseño sin perder calidad.

Es deliberadamente simple. Sin registro, sin servidor, sin archivo que guardar. Lo abres, diseñas y exportas.

![Interfaz del Street Generator](/assets/blog/street-generator-1.png)

## Diseñar desde el mapa

Una de las funcionalidades que más me entusiasma es la posibilidad de dibujar un tramo de calle directamente en el mapa. Eliges una línea en la red viaria real y la herramienta lee automáticamente los datos de OpenStreetMap para ese tramo. Extrae lo que hay realmente: el ancho de la calzada, los carriles existentes, las aceras y otros atributos. Con eso construye la sección transversal usando datos reales, y aún puedes ajustar cada elemento después.

Esto significa que no partes de un lienzo en blanco. Partes de la realidad, y luego preguntas: "¿qué pasaría si este carril fuera para bicicletas?" o "¿qué pasa si reducimos el aparcamiento para ampliar la acera?" Todo en un solo lugar, en el navegador.

![Sección transversal generada desde datos OSM](/assets/blog/street-generator-2.png)

## Por qué importa

Las secciones transversales de calles suenan técnicas, pero son básicamente el presupuesto de una calle: cada metro cuenta. Si das 3 metros al aparcamiento, son 3 metros que no van al carril bici ni a una acera más amplia. Hacer visibles esas decisiones al instante y desde datos reales ayuda a pensar de forma más concreta sobre el espacio viario. También es una buena forma de comunicar propuestas sin necesitar que todos en la sala sepan leer planos técnicos.

## Lo que viene

La herramienta ya tiene una capacidad de IA en desarrollo para sugerir configuraciones de sección transversal según el contexto de la calle. La idea es que describes lo que quieres ("más espacio para peatones, mantener un carril de coches") y la herramienta propone un punto de partida que puedes ajustar.

También quiero añadir validación básica de diseño, como marcar si una acera es más estrecha de lo que exigen los estándares de accesibilidad, y más tipos de elementos para cubrir una mayor variedad de tipologías de calles.
