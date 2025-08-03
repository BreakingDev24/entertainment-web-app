import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MediaItem } from "../../components/ui/Card";

type MediaType = "movie" | "tv";
type SearchType = MediaType | "multi";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query<any, void>({
      query: () => `tmdb?endpoint=now_playing`,
      transformResponse: (response: any): MediaItem[] => {
        return response.results.map((item: any) => ({
          ...item,
          media_type: "movie",
        }));
      },
    }),
    /*  */
    getPopular: builder.query<any, { type: MediaType }>({
      query: ({ type }) => `tmdb?endpoint=popular&type=${type}`,
      transformResponse: (response: any, _, arg): MediaItem[] => {
        return response.results.map((item: any) => ({
          ...item,
          media_type: arg.type,
        }));
      },
    }),
    /*  */
    getTrending: builder.query<any, void>({
      query: () => `tmdb?endpoint=trending`,
    }),
    /*  */
    searchByType: builder.query<any, { type: SearchType; query: string }>({
      query: ({ type, query }) => {
        let endpoint = "";
        switch (type) {
          case "movie":
            endpoint = "search_movie";
            break;
          case "tv":
            endpoint = "search_tv";
            break;
          case "multi":
          default:
            endpoint = "search_multi";
        }
        return `tmdb?endpoint=${endpoint}&query=${encodeURIComponent(query)}`;
      },
      transformResponse: (response: any, _, arg) => {
        if (arg.type === "multi") {
          return response.results.filter(
            (item: any) =>
              item.media_type === "movie" || item.media_type === "tv",
          );
        }
        return response.results.map((item: any) => ({
          ...item,
          media_type: arg.type,
        }));
      },
    }),
  }),
});

export const {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTrendingQuery,
  useSearchByTypeQuery,
} = tmdbApi;
