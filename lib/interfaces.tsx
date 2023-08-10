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

export interface CastMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  job: string;
}

export interface PersonMovies {
  cast: CastMovie[];
  crew: CrewMovie[];
}


export interface TVShow {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface TVDetails {
  adult: boolean;
  backdrop_path: string | null;
  created_by: Array<{ [key: string]: any }>; // replace any with the actual type if available
  episode_run_time: number[];
  first_air_date: string;
  genres: Array<{ [key: string]: any }>; // replace any with the actual type if available
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: { [key: string]: any }; // replace any with the actual type if available
  name: string;
  next_episode_to_air: null | object; // replace object with the actual type if available
  networks: Array<{ [key: string]: any }>; // replace any with the actual type if available
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{ [key: string]: any }>; // replace any with the actual type if available
  production_countries: Array<{ [key: string]: any }>; // replace any with the actual type if available
  seasons: Array<{ [key: string]: any }>; // replace any with the actual type if available
  spoken_languages: Array<{ [key: string]: any }>; // replace any with the actual type if available
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;


}
export interface SeasonDetails {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
  
}

export interface Episode {
  air_date: string;
  crew: Array<{ [key: string]: any }>; // replace any with the actual type if available
  episode_number: number;
  guest_stars: Array<{ [key: string]: any }>; // replace any with the actual type if available
  name: string;
  overview: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

