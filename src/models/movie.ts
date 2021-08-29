type Country = 'US' | 'GR';
type Language = 'en' | 'gr' | 'es';
type Status = 'Released';

interface Genre {
    id: number;
    name: string;
}

interface ProductionCountry {
    iso_3166_1: Country;
    name: string;
}

interface SpokenLanguages {
    english_name: string;
    iso_639_1: Language;
    name: string;
}

interface productionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: Country;
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: boolean | null;
    budget: number;
    genres: Array<Genre>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: Language;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<productionCompany>;
    production_countries: Array<ProductionCountry>;
    release_date: Date | string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<SpokenLanguages>;
    status: Status;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesState {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}