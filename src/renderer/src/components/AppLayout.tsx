import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<"main">) => {
  return (
    <main className={twMerge("flex flex-row h-screen", className)} {...props}>
      {children}
    </main>
  );
};

export const Sidebar = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <aside className="flex flex-col items-center w-[250px] h-[100vh + 10px]">
      <div className="text-2xl p-1 shadow-lg w-full text-center border-b border-gray-500 bg-[#1b1b1b]">
        NH | NotePad
      </div>
      <div className={twMerge("w-full overflow-auto", className)} {...props}>
        {children}
      </div>
    </aside>
  );
};

export const Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge("flex-1 overflow-auto", className)}
      {...props}
    >
      {children}
    </div>
  ),
);

Content.displayName = "Content";
