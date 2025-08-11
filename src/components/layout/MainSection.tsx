import cn from "@/utils/cn";
import AllRoutes from "../pages";

interface MainSectionProps {
  className?: string;
}

export default function MainSection({ className }: MainSectionProps) {
  return (
    <main className={cn("grid gap-1.5", className)}>
      <AllRoutes />
    </main>
  );
}
