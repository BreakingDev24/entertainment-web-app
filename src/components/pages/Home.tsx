import { useSearchParams } from "react-router-dom";
import { useSearchByTypeQuery } from "../../features/tmdb/tmdbApi";
import IconTypeMovie from "../../assets/icon-category-movie.svg?react";
import IconTypeTV from "../../assets/icon-category-tv.svg?react";
import Card, { type MediaItem } from "../ui/Card";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data, isFetching } = useSearchByTypeQuery(
    { type: "multi", query: query ?? "" },
    { skip: !query },
  );

  const imgUrl = "https://image.tmdb.org/t/p/";

  return (
    <div className="p-4 text-white">
      <p>Results for: {query?.toUpperCase()}</p>
      {isFetching ? (
        <p>Loading</p>
      ) : (
        <ul className="grid grid-cols-2 justify-center justify-items-center gap-4 md:grid-cols-3">
          {data?.map((item: MediaItem) => (
            <li key={item.id} className="grid w-full justify-items-center">
              <Card item={item} imgUrl={imgUrl} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
