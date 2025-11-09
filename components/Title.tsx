import { cn } from "@/lib/utils";
import React from "react";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl font-sans font-bold text-shop-dark-green capitalize tracking-wide md:text-3xl",
        className
      )}
    >
      {children}
    </h2>
  );
};
export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("font-sans font-semibold text-gray-900", className)}>
      {children}
    </h3>
  );
};

export const SubText = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-gray-600 text-sm", className)}>{children}</p>;
};

export default Title;
