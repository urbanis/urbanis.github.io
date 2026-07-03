import { useEffect, useMemo, useState } from 'react';
import Map, { Layer, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './ParisMap.module.css';

type MapMode = 'parking' | 'change';
type Frame = 'cm' | 'ca' | 'cf';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAPBOX_STYLE = 'mapbox://styles/mapbox/dark-v11';

const FRAMES: { key: Frame; label: string }[] = [
  { key: 'cm', label: '8am → 12pm' },
  { key: 'ca', label: '12pm → 8pm' },
  { key: 'cf', label: '8am → 8pm' },
];

export function ParisMap({ mode }: { mode: MapMode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [frame, setFrame] = useState<Frame>('cm');

  useEffect(() => {
    let live = true;
    fetch('/data/arrondissements.geojson')
      .then((r) => r.json())
      .then((d) => {
        if (live) setData(d);
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  const valueProp = mode === 'parking' ? 'parking' : frame;

  const fillPaint = useMemo(() => {
    if (mode === 'parking') {
      return {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'parking'],
          52, '#e7f0f7',
          100, '#a9cce3',
          150, '#5a9bcb',
          220, '#0d5c8c',
        ],
        'fill-opacity': 0.85,
        'fill-color-transition': { duration: 500 },
      };
    }
    return {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', valueProp],
        -60, '#c0392b',
        -20, '#e67e22',
        0, '#f6d55c',
        40, '#86c34e',
        120, '#2e8b3d',
      ],
      'fill-opacity': 0.82,
      'fill-color-transition': { duration: 600 },
    };
  }, [mode, valueProp]);

  return (
    <div className={styles.wrap}>
      {mode === 'change' && (
        <div className={styles.toggle} role="group" aria-label="Time frame">
          {FRAMES.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`${styles.frameBtn} ${frame === f.key ? styles.frameActive : ''}`}
              onClick={() => setFrame(f.key)}
              aria-pressed={frame === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className={styles.mapBox}>
        {data && (
          <Map
            mapboxAccessToken={MAPBOX_TOKEN}
            initialViewState={{ longitude: 2.3488, latitude: 48.857, zoom: 10.45 }}
            mapStyle={MAPBOX_STYLE}
            interactive={false}
            attributionControl={false}
            style={{ width: '100%', height: '100%' }}
          >
            <Source id="arr" type="geojson" data={data}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Layer id="arr-fill" type="fill" paint={fillPaint as any} />
              <Layer
                id="arr-line"
                type="line"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                paint={{ 'line-color': '#0c0c0c', 'line-width': 1 } as any}
              />
            </Source>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {data.features.map((f: any) => {
              const p = f.properties;
              const raw = mode === 'parking' ? p.parking : p[valueProp];
              const label =
                mode === 'parking' ? `${raw}` : `${raw > 0 ? '+' : ''}${raw}%`;
              return (
                <Marker key={p.d} longitude={p.clon} latitude={p.clat}>
                  <span className={styles.label}>{label}</span>
                </Marker>
              );
            })}
          </Map>
        )}
      </div>

      {mode === 'change' && (
        <div className={styles.legend}>
          <span>−60%</span>
          <span className={styles.legendBar} aria-hidden="true" />
          <span>+120%</span>
          <span className={styles.legendNote}>loss → gain</span>
        </div>
      )}
    </div>
  );
}
