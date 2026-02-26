import { useRef, useEffect, useCallback } from 'react';
import Map, { Marker, MapRef } from 'react-map-gl';
import type { Place } from './types';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapSceneProps {
  places: Place[];
  activePlace: Place | null;
  onMarkerClick: (place: Place) => void;
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const MAPBOX_STYLE = import.meta.env.VITE_MAPBOX_STYLE;

export default function MapScene({ places, activePlace, onMarkerClick }: MapSceneProps) {
  const mapRef = useRef<MapRef>(null);

  const flyToPlace = useCallback((place: Place) => {
    mapRef.current?.flyTo({
      center: place.coordinates,
      zoom: Math.min(place.zoom, 5),
      duration: 2000,
      essential: true,
    });
  }, []);

  useEffect(() => {
    if (activePlace) {
      flyToPlace(activePlace);
    }
  }, [activePlace, flyToPlace]);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAPBOX_STYLE}
      initialViewState={{
        longitude: 0,
        latitude: 30,
        zoom: 2,
      }}
      style={{ width: '100%', height: '100%' }}
      attributionControl={false}
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          longitude={place.coordinates[0]}
          latitude={place.coordinates[1]}
          anchor="center"
          onClick={(e: { originalEvent: MouseEvent }) => {
            e.originalEvent.stopPropagation();
            onMarkerClick(place);
          }}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-300 ${
              activePlace?.id === place.id ? 'w-5 h-5' : 'w-4 h-4'
            }`}
          >
            {/* Pulse ring for active marker */}
            {activePlace?.id === place.id && (
              <div className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-soft" />
            )}

            {/* Main marker dot */}
            <div
              className={`relative z-10 rounded-full cursor-pointer transition-all duration-200 ${
                activePlace?.id === place.id
                  ? 'w-4 h-4 bg-accent border-2 border-content-primary shadow-glow'
                  : 'w-3 h-3 bg-content-muted/50 border border-surface hover:bg-content-secondary hover:scale-125'
              }`}
            />

            {/* City label for active marker */}
            {activePlace?.id === place.id && (
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="px-2 py-0.5 text-[10px] font-medium bg-surface/95 backdrop-blur-sm text-content-primary border border-border rounded-md shadow-elevated">
                  {place.city}
                </span>
              </div>
            )}
          </div>
        </Marker>
      ))}
    </Map>
  );
}
