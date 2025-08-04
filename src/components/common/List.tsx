import cn from "@/utils/cn";
import Card from "@/components/ui/Card";
import type { MediaItem } from "@/components/ui/Card/types";
import { tv } from "tailwind-variants";

type Variant = "primary" | "secondary";

interface ListProps {
  data: MediaItem[];
  variant?: Variant;
  className?: string;
}

const listStyle = tv({
  slots: {
    root: "",
    listElement: "grid w-full justify-items-center",
  },
  variants: {
    variant: {
      primary: {
        root: "grid grid-cols-2 justify-center justify-items-center gap-4 md:grid-cols-3",
      },
      secondary: {
        root: "grid auto-cols-[240px] grid-flow-col gap-5",
      },
    },
  },
});

export default function List({
  data,
  variant = "primary",
  className,
}: ListProps) {
  const styles = listStyle({ variant });

  return (
    <ul className={cn(styles.root(), className)}>
      {data?.map((item) => (
        <li key={item.id} className={styles.listElement()}>
          <Card item={item} variant={variant} />
        </li>
      ))}
    </ul>
  );
}
