import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Lenis from "@studio-freight/lenis";

function Root() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.5, // smaller = sharper & snappier (try 0.05 to 0.15)
      easing: (t: number) => Math.min(1, 1.005 - Math.pow(2, -10 * t)),
    });


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
