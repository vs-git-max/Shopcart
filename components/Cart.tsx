import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  return (
    <Link href={"/cart"} className="relative group">
      <ShoppingBag className="size-5 hover:text-shop-light-green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop-btn-dark-green text-white size-4 rounded-full text-sm font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default Cart;
