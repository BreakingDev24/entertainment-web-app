import { useGetPopularQuery } from "../../features/tmdb/tmdbApi";
import List from "../common/List";

export default function TVShows() {
  const { data, isFetching } = useGetPopularQuery({ type: "tv" });
  return (
    <div>
      <h2>Popular TV Shows</h2>
      {isFetching ? <p>Loading</p> : <List data={data} />}
    </div>
  );
}
