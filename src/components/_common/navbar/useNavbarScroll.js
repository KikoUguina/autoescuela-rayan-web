import { useState, useEffect, useRef } from "react";

export function useNavbarScroll() {
  const [visible, setVisible] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  const prevScrollPos = useRef(0);

  useEffect(() => {
    // sombra solo una vez
    const shadowTimeout = setTimeout(() => {
      setShowShadow(true);
    }, 500);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        prevScrollPos.current > currentScrollPos || currentScrollPos < 100
      );

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(shadowTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { visible, showShadow };
}
