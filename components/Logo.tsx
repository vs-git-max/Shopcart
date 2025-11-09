import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text-shop-dark-green hoverEffect font-sans font-black tracking-wider uppercase hover:text-shop-light-green group",
          className
        )}
      >
        Shopcar
        <span
          className={cn(
            "text-shop-light-green hoverEffect group-hover:text-black",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
