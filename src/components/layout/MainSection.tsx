import cn from "@/utils/cn";
import AllRoutes from "../pages";

interface MainSectionProps {
  className?: string;
}

export default function MainSection({ className }: MainSectionProps) {
  return (
    <main className={cn(className)}>
      <AllRoutes />
    </main>
  );
}
