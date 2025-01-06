import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { useLayoutEffect, useRef } from "react";

export default function NavigationBar() {
  const titleRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const width = titleRef.current?.clientWidth;
    switchRef.current?.style.setProperty("width", `${width}px`);
  }, []);

  return (
    <nav className="my-3 md:my-6 mx-4 md:mx-16 flex justify-between italic lowercase items-center text-md md:text-2xl">
      <h1 ref={titleRef} className="font-bold">
        yourbudget
      </h1>
      <div className="text-sm sm:text-md flex gap-4 md:gap-8 justify-center">
        <NavLink to="/">Forside</NavLink>
        <NavLink to="/">Budget</NavLink>
        <NavLink to="/">Forside</NavLink>
      </div>
      <div ref={switchRef}>
        <ModeToggle />
      </div>
    </nav>
  );
}