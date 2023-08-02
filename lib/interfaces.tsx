export interface Movies {
    page: number;
    results: Movie[];

}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object; // replace object with the actual type if available
  budget: number;
  genres: Array<{ [key: string]: any }>; // replace any with the actual type if available
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{ [key: string]: any }>; // replace any with the actual type if available
  production_countries: Array<{ [key: string]: any }>; // replace any with the actual type if available
  release_date: string;
  release_dates: { results: Array<{ [key: string]: any }> }; // replace any with the actual type if available
  revenue: number;
  runtime: number;
  spoken_languages: Array<{ [key: string]: any }>; // replace any with the actual type if available
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Credits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}