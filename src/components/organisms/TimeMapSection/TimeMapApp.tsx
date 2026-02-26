import { useState, useMemo, useEffect } from 'react';
import MapScene from './MapScene';
import TimelineSlider from './TimelineSlider';
import FloatingDetailCard from './FloatingDetailCard';
import ProfileChip from './ProfileChip';
import BadgeRow from './BadgeRow';
import cvData from './data.json';
import type { CVData, Place, TimelineStage, Experience, Education } from './types';
import './timemap.css';

export function TimeMapApp() {
  const data = cvData as CVData;

  const { minYear, maxYear } = useMemo(() => {
    const years = data.timelineStages.map((s) => s.year);
    return { minYear: Math.min(...years), maxYear: Math.max(...years) };
  }, [data.timelineStages]);

  const [activeYear, setActiveYear] = useState<number>(minYear);
  const [cardVisible, setCardVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play: advance one year per 1.5s
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveYear((year) => (year >= maxYear ? minYear : year + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, [isPlaying, maxYear, minYear]);

  const activeStage = useMemo<TimelineStage | null>(() => {
    const validStages = data.timelineStages.filter((s) => s.year <= activeYear);
    if (validStages.length === 0) return null;
    return validStages.sort((a, b) => b.year - a.year)[0];
  }, [data.timelineStages, activeYear]);

  const activePlace = useMemo<Place | null>(() => {
    if (!activeStage) return null;
    return data.places.find((p) => p.id === activeStage.placeId) || null;
  }, [data.places, activeStage]);

  const filteredExperiences = useMemo<Experience[]>(() => {
    if (!activePlace) return [];
    return data.experiences.filter((e) => e.placeId === activePlace.id);
  }, [data.experiences, activePlace]);

  const filteredEducation = useMemo<Education[]>(() => {
    if (!activePlace) return [];
    return data.education.filter(
      (e) => e.placeId === activePlace.id || e.secondaryPlaceId === activePlace.id
    );
  }, [data.education, activePlace]);

  useEffect(() => {
    if (activeStage) setCardVisible(true);
  }, [activeStage]);

  const handleMarkerClick = (place: Place) => {
    const stagesForPlace = data.timelineStages.filter((s) => s.placeId === place.id);
    if (stagesForPlace.length > 0) {
      const latestStage = stagesForPlace.sort((a, b) => b.year - a.year)[0];
      setActiveYear(latestStage.year);
    }
  };

  const handleYearChange = (year: number) => {
    setIsPlaying(false);
    setActiveYear(year);
  };

  return (
    <div
      className="timemap dark"
      style={{
        height: '650px',
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#0c0f1a',
      }}
    >
      {/* Map — full width, flex-1 */}
      <div
        style={{ flex: 1, position: 'relative', minHeight: 0 }}
        onClick={() => setCardVisible(false)}
      >
        <MapScene
          places={data.places}
          activePlace={activePlace}
          onMarkerClick={handleMarkerClick}
        />

        {/* Profile chip — top-left */}
        <ProfileChip profile={data.profile} />

        {/* Badges — top-right */}
        <BadgeRow achievements={data.achievements} activeYear={activeYear} />

        {/* Floating detail card — mid-map */}
        {cardVisible && activeStage && activePlace && (
          <FloatingDetailCard
            stage={activeStage}
            place={activePlace}
            experiences={filteredExperiences}
            education={filteredEducation}
            onClose={() => setCardVisible(false)}
          />
        )}
      </div>

      {/* Timeline Slider */}
      <TimelineSlider
        stages={data.timelineStages}
        activeYear={activeYear}
        isPlaying={isPlaying}
        onYearChange={handleYearChange}
        onTogglePlay={() => setIsPlaying((p) => !p)}
      />
    </div>
  );
}
