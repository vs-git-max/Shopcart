import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Fav = () => {
  return (
    <Link href={"/cart"} className="relative group">
      <Heart className="size-6 hover:text-shop-light-green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop-btn-dark-green text-white size-4 p-0.5 rounded-full text-sm font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default Fav;
