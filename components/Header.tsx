import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Fav from "./Fav";
import Signin from "./Signin";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  console.log("User", user);

  return (
    <header className="bg-white py-3 border-b border-b-black/20">
      <Container className="items-center flex justify-between text-lightColor">
        {/* logo */}
        <div className="w-auto md:w-1/3 items-center justify-start gap-2.5 flex md:gap-0 ">
          <MobileMenu />
          <Logo />
        </div>
        {/* nav button */}
        <HeaderMenu />
        {/* nav admin */}
        <div className="w-auto md:w-1/3 flex item-centre justify-end gap-5">
          <SearchBar />
          <Cart />
          <Fav />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <Signin />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
