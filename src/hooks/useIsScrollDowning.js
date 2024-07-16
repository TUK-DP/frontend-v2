import { useEffect, useState } from "react";

export const useIsScrollDowning = ({ offset = 0 }) => {
  const [isScrollDowning, setIsScrollDowning] = useState(false);
  const [lastTopScroll, setLastTopScroll] = useState(
    document.documentElement.scrollTop
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentTopScroll = document.documentElement.scrollTop;

      // offset 만큼의 변화가 없다면 무시
      if (Math.abs(currentTopScroll - lastTopScroll) < offset) return;

      if (currentTopScroll > lastTopScroll) {
        setIsScrollDowning(true);
      } else {
        setIsScrollDowning(false);
      }

      setLastTopScroll(currentTopScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastTopScroll]);

  return { isScrollDowning };
};
