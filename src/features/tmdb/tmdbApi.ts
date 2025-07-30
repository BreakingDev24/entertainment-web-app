import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type MediaType = "movie" | "tv";
type SearchType = MediaType | "multi";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/.netlify/functions/" }),
  endpoints: (builder) => ({
    /*  */
    getPopular: builder.query<any, { type: MediaType }>({
      query: ({ type }) => `tmdb?endpoint=popular&type=${type}`,
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
        return response.results;
      },
    }),
  }),
});

export const { useGetPopularQuery, useGetTrendingQuery, useSearchByTypeQuery } =
  tmdbApi;
