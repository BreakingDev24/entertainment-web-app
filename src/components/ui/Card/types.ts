export type MovieItem = {
  id: number;
  media_type: "movie";
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
};

export type TVItem = {
  id: number;
  media_type: "tv";
  name: string;
  first_air_date: string;
  poster_path: string;
  backdrop_path: string;
};

export type MediaItem = MovieItem | TVItem;
