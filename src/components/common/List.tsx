import cn from "../../utils/cn";
import Card, { type MediaItem } from "../ui/Card";

type Variant = "primary" | "secondary";

interface ListProps {
  data: MediaItem[];
  variant?: Variant;
  className?: string;
}

export default function List({
  data,
  variant = "primary",
  className,
}: ListProps) {
  const variants: Record<Variant, string> = {
    primary:
      "grid grid-cols-2 justify-center justify-items-center gap-4 md:grid-cols-3",
    secondary: " grid grid-flow-col auto-cols-[240px] gap-5",
  };

  return (
    <ul className={cn(variants[variant], className)}>
      {data?.map((item) => (
        <li key={item.id} className="grid w-full justify-items-center">
          <Card item={item} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
