import { AppWrapper } from './components/AppWrapper';
import { Details } from './details/Details';
import { Map } from './map/Map';

function App() {
  return (
    <AppWrapper>
      <Details />
      <Map />
    </AppWrapper>
  );
}

export default App;
