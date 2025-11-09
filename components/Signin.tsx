import { SignInButton } from "@clerk/nextjs";

const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-shop-dark-green cursor-pointer text-lightColor">
        Signin
      </button>
    </SignInButton>
  );
};

export default Signin;
