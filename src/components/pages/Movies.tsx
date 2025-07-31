import { useGetPopularQuery } from "../../features/tmdb/tmdbApi";
import List from "../common/List";

export default function Movies() {
  const { data, isFetching } = useGetPopularQuery({ type: "movie" });

  return (
    <div>
      <h2>Popular movie</h2>
      {isFetching ? <p>Loading</p> : <List data={data?.results} />}
    </div>
  );
}
