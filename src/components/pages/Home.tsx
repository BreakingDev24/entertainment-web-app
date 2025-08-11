import { useSearchParams } from "react-router-dom";
import {
  useGetNowPlayingQuery,
  useGetTrendingQuery,
} from "../../features/tmdb/tmdbApi";
import List from "../common/List";
import Section from "../common/Section";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: trendingData, isFetching: isFetchingTrending } =
    useGetTrendingQuery();
  const { data: nowPlayingData, isFetching: isFetchingNowPlaying } =
    useGetNowPlayingQuery();
  console.log(nowPlayingData);
  return (
    <>
      <Section>
        <h2>Now Playing Movies</h2>
        <div className="relative -mx-6 overflow-x-auto pl-4">
          {isFetchingNowPlaying ? (
            <p>Loading</p>
          ) : (
            <List data={nowPlayingData} variant="secondary" />
          )}
        </div>
      </Section>

      <Section>
        <h2>Trending</h2>
        {isFetchingTrending ? (
          <p>Loading</p>
        ) : (
          <List data={trendingData.results} />
        )}
      </Section>
    </>
  );
}
