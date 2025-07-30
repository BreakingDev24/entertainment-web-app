import Card, { type MediaItem } from "../ui/Card";

interface ListProps {
  data: MediaItem[];
}

export default function List({ data }: ListProps) {
  return (
    <ul className="grid grid-cols-2 justify-center justify-items-center gap-4 md:grid-cols-3">
      {data?.map((item) => (
        <li key={item.id} className="grid w-full justify-items-center">
          <Card item={item} />
        </li>
      ))}
    </ul>
  );
}
