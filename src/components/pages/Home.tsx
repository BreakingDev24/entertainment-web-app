import { useSearchParams } from "react-router-dom";
import { useGetTrendingQuery } from "../../features/tmdb/tmdbApi";
import List from "../common/List";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: trendingData, isFetching: isFetchingTrending } =
    useGetTrendingQuery();

  return (
    <div className="p-4 text-white">
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
