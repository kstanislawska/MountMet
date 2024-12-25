import { LatLngLiteral } from 'leaflet';
import { createContext, useState, type ReactNode } from 'react';
import { getSafeContext } from './utils/getSafeContext';

type MapPosition = LatLngLiteral | null;
const MapContext = createContext<{
  position: MapPosition;
  setPosition: React.Dispatch<React.SetStateAction<MapPosition>>;
} | null>(null);

type MapContextProviderProps = {
  children: ReactNode;
};

export function MapContextProvider({ children }: MapContextProviderProps) {
  const [position, setPosition] = useState<MapPosition>({ lat: 51.505, lng: 19.0 });

  return (
    <MapContext.Provider
      value={{
        position,
        setPosition,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export const useMapContext = getSafeContext(MapContext, 'MapContext');
