import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// export function ScrollToTop() {
//   const { pathname } = useLocation();

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}