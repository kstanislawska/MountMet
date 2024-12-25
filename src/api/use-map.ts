import { useQuery } from '@tanstack/react-query';
import { LatLngLiteral } from 'leaflet';
import { apiClient } from './api-client';

const QUERY_KEY = ['Details'];

const fetchDetails = async ({ lat, lng }: LatLngLiteral) => {
  const { data } = await apiClient.get(
    `/api/v2/data/point/schedule/poland-12-4/2/latlon/${lat},${lng}/vars/@standard.json`
  );
  return data;
};

export const usePositionDetails = (position: LatLngLiteral) => {
  return useQuery({ queryKey: [QUERY_KEY, String(position)], queryFn: () => fetchDetails(position) });
};
