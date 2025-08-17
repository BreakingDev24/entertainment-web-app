import { tv } from "tailwind-variants";

export const cardVariants = tv({
  slots: {
    root: "relative grid w-full justify-items-center gap-1.5 text-white",
    poster: "w-full",
    content: "grid w-full gap-1.5 text-center",
    meta: "text-preset6-mobile flex w-full",
    typeLabel: "flex items-center gap-1.5",
    title:
      "text-preset4-mobile w-full overflow-hidden text-ellipsis whitespace-nowrap",
    bookmark: "bg-darkBlue absolute top-2 right-2 rounded-full p-2 opacity-50",
  },
  variants: {
    variant: {
      primary: {
        root: "",
        meta: "ml-auto items-center justify-between",
      },
      secondary: {
        content: "absolute bottom-0 pb-3.5 pl-4 text-left",
        meta: "justify-start gap-1.5",
      },
    },
  },
});
