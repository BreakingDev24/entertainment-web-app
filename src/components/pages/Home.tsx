import { useSearchParams } from "react-router-dom";
import {
  useGetNowPlayingQuery,
  useGetTrendingQuery,
} from "../../features/tmdb/tmdbApi";
import List from "../common/List";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: trendingData, isFetching: isFetchingTrending } =
    useGetTrendingQuery();
  const { data: nowPlayingData, isFetching: isFetchingNowPlaying } =
    useGetNowPlayingQuery();
  console.log(nowPlayingData);
  return (
    <div className="overflow-hidden p-4 text-white">
      <div>
        <h2>Now Playing Movies</h2>
        <div className="overflow-x-auto">
          {isFetchingNowPlaying ? (
            <p>Loading</p>
          ) : (
            <List data={nowPlayingData} variant="secondary" />
          )}
        </div>
      </div>

      <div>
        <h2>Trending</h2>
        {isFetchingTrending ? (
          <p>Loading</p>
        ) : (
          <List data={trendingData.results} />
        )}
      </div>
    </div>
  );
}
