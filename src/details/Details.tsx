import { usePositionDetails } from '../api/use-map';
import { SideBar } from '../components/SideBar';
import { useMapContext } from '../useMapContext';

export function Details() {
  const { position, setPosition } = useMapContext();
  const { data } = usePositionDetails(position);
  const isOpen = position !== null;

  const onClose = () => setPosition(null);

  return (
    <SideBar $isOpen={isOpen}>
      <button onClick={onClose}>Close</button>
      {data ? (
        <div>
          <h2>Weather Data</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Temperature (°C)</th>
                <th>Wind Speed (m/s)</th>
              </tr>
            </thead>
            <tbody>
              {data.time.map((time, index) => (
                <tr key={index}>
                  <td>{new Date(time).toLocaleString()}</td>
                  <td>{data.data.air_temperature[index]}</td>
                  <td>{data.data.wind_speed[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </SideBar>
  );
}
