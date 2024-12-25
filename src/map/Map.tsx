import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { useMapContext } from '../useMapContext';

export function Map() {
  return (
    <MapContainer center={[52.39, 19.64]} zoom={6} zoomControl={false} style={{ display: 'flex', flex: 1 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

const LocationMarker = () => {
  const { position, setPosition } = useMapContext();

  const map = useMapEvents({
    click(e) {
      map.locate();
      setPosition(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
};
