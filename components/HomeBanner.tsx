import React from "react";
import Title from "./Title";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 lg:px-24 px-10 flex items-center justify-between md:py-0 bg-shop-light-pink rounded-lg">
      <div className="space-y-5">
        <Title>
          Grab Upto 50% on <br />
          Selected product
        </Title>
        <Link
          className="bg-shop-btn-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark-green hoverEffect"
          href={"/shop"}
        >
          Buy now
        </Link>
      </div>
      <div className="">
        <Image
          src={banner_1}
          alt="banner 1 "
          className="w-96 hidden md:inline-flex "
        />
      </div>
    </div>
  );
};

export default HomeBanner;
