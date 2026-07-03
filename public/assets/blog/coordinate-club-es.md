La idea detrás de Commuters' Mapping surgió de una conversación sobre cómo las estaciones terminales de la red de transporte de Berlín suelen ser lugares muy distintos entre sí. Algunas están en barrios densos, otras se sienten aisladas, y si te sientes segura llegando sola de noche depende mucho de quién eres y a qué hora viajas.

## El concepto

Cada línea de tren, tranvía y U-Bahn en Berlín tiene dos estaciones terminales. Allí es donde el servicio comienza y termina. Me preguntaba: ¿cómo son realmente esos lugares, y qué pasa si recopilas esa información desde la perspectiva de mujeres que viajan solas?

La app permite explorar todas las estaciones terminales en un mapa, registrar tu experiencia cuando visitas una y ver lo que la comunidad ha reportado. Puedes valorar qué tan seguro se sintió, si irías sola, qué tipo de zona es y dejar una nota.

![Vista del mapa con los pins de las estaciones terminales de Berlín](/assets/blog/coordinate-club-1.png)

## Cómo funciona

El mapa usa datos GTFS reales para las líneas y un dataset curado de estaciones terminales. Cuando tocas un pin, puedes registrar una experiencia. Los datos se almacenan en Supabase, así que las contribuciones de distintas personas se acumulan con el tiempo. Los filtros permiten encontrar estaciones valoradas como seguras, estaciones visitadas solo por otras personas o estaciones de un tipo de línea específico.

Los pines muestran tres estados: verde para las estaciones que tú has visitado, morado para las que la comunidad ha recorrido y gris para las inexploradas. Con el tiempo, el mapa se va llenando.

![Detalle de estación y formulario de experiencia](/assets/blog/coordinate-club-2.png)

## Por qué las terminales

Hay un vacío en la planificación urbana aquí. Las estaciones terminales suelen recibir menos atención en el diseño urbano porque son puntos de transición, no destinos. Pero para las personas que viven cerca y las usan todos los días, sí son destinos. Este proyecto es un pequeño intento de documentar eso desde una perspectiva que raramente aparece en los datos oficiales.
