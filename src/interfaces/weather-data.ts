export interface WeatherData {
    city: CityInfo;
    list: Array<WeatherListEntry>;
}

interface WeatherListEntry {
    dt: number;
    main: WeatherStats
}

interface WeatherStats {
    temp_min: number;
    temp_max: number;
    temp: number;
    humidity: number;
    pressure: number;
}

interface CityInfo {
    population: number,
    name: string,
    country: string,
    coord: Coordinates
}

interface Coordinates {
    lon: number;
    lat: number;
}