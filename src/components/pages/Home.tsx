import { useSearchParams } from "react-router-dom";
import {
  useGetTrendingQuery,
  useSearchByTypeQuery,
} from "../../features/tmdb/tmdbApi";
import List from "../common/List";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: trendingData, isFetching: isFetchingTrending } =
    useGetTrendingQuery();

  const { data: queryData, isFetching: isFetchingQuery } = useSearchByTypeQuery(
    { type: "multi", query: query ?? "" },
    { skip: !query },
  );

  return (
    <div className="p-4 text-white">
      {query && (
        <div>
          <h2>Results for: {query?.toUpperCase()}</h2>
          {isFetchingQuery ? <p>Loading</p> : <List data={queryData} />}
        </div>
      )}

      {!query && (
        <div>
          <h2>Trending</h2>
          {isFetchingTrending ? (
            <p>Loading</p>
          ) : (
            <List data={trendingData.results} />
          )}
        </div>
      )}
    </div>
  );
}
