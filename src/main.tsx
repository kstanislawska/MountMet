import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { queryClient } from './api/query-client.ts';
import { MapContextProvider } from './useMapContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MapContextProvider>
        <App />
      </MapContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
