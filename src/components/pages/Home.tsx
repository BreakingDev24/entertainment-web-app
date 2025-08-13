import { useSearchParams } from "react-router-dom";
import {
  useGetNowPlayingQuery,
  useGetTrendingQuery,
} from "../../features/tmdb/tmdbApi";
import List from "../common/List";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

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
        <SectionTitle title="Now Playing Movies" />
        <div className="scrollbar relative -mx-6 snap-x snap-mandatory overflow-x-auto pb-1.5 pl-4">
          {isFetchingNowPlaying ? (
            <p>Loading</p>
          ) : (
            <List data={nowPlayingData} variant="secondary" />
          )}
        </div>
      </Section>

      <Section>
        <SectionTitle title="Trending" />

        {isFetchingTrending ? (
          <p>Loading</p>
        ) : (
          <List data={trendingData.results} />
        )}
      </Section>
    </>
  );
}
