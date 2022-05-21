export interface GeoCity {
  country: string,
  lat: number,
  lon: number,
  local_names: Map<string, string>,
  name: string,
  state: string
}
