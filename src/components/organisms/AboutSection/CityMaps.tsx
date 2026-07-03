import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { CityModal } from './CityModal';
import { CITIES, ddLat, ddLng, type City } from './cityData';
import styles from './AboutSection.module.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAPBOX_STYLE = 'mapbox://styles/mapbox/light-v11';

export function CityMaps() {
  const [selected, setSelected] = useState<City | null>(null);

  return (
    <div className={styles.mapsStrip}>
      {CITIES.map((city) => (
        <button
          key={city.name}
          type="button"
          className={styles.mapFrame}
          onClick={() => setSelected(city)}
          aria-label={`View ${city.name} details`}
        >
          <div className={styles.mapViewport}>
            <Map
              mapboxAccessToken={MAPBOX_TOKEN}
              mapStyle={MAPBOX_STYLE}
              initialViewState={{ longitude: city.lng, latitude: city.lat, zoom: city.zoom }}
              interactive={false}
              attributionControl={false}
              style={{ width: '100%', height: '100%' }}
            >
              <Marker longitude={city.lng} latitude={city.lat} anchor="center">
                <span className={styles.mapMarker} />
              </Marker>
            </Map>
          </div>
          <div className={styles.mapLabel}>
            <span className={styles.mapCoord}>{ddLat(city.lat)}</span>
            <span className={styles.mapCoord}>{ddLng(city.lng)}</span>
          </div>
        </button>
      ))}

      <CityModal city={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
