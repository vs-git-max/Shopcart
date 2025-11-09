import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./Title";
import { categories, quickLinks } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className=" border-t mt-5">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="space-y-4 ">
            <Logo />
            <SubText className="text-gray-600 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
              voluptate nobis deserunt perspiciatis dicta quod necessitatibus
              earum, consequuntur iste eveniet repellat saepe inventore eius at
              est quas dolorum sed illo?
            </SubText>
            <SocialMedia
              className="text-shop-dark-green/60 "
              tooltipClassName="text-white bg-shop-dark-green"
              iconClassName="border-shop-dark-green/60 hover:text-shop-dark-green hover:border-shop-dark-green"
            />
          </div>
          <div className="">
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-2 mt-4">
              {quickLinks?.map((item) => (
                <li key={item?.title} className="">
                  <Link
                    href={item?.href}
                    className="hover:text-shop-light-green hoverEffect font-medium hover:underline"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categories?.map((item) => (
                <li key={item?.title} className="">
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop-light-green hoverEffect font-medium hover:underline"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletters</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3" action="">
              <Input type="email" required placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600  flex items-center justify-center ">
          © {new Date().getFullYear()} <Logo className="text-sm mx-2" /> All
          right reserved
        </div>
      </Container>
      ;
    </footer>
  );
};

export default Footer;
